import { Injectable } from '@angular/core';
import { Headers, Http, Response} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import {Location} from "./location";

@Injectable()
export class LocationsService{

    private locationsUrl = 'app/locations';  // URL to web api

    constructor(private http: Http) { }

    getLocations(): Promise<Location[]> {
        return this.http
            .get(this.locationsUrl)
            .toPromise()
            .then(response => response.json().data as Location[])
            .catch(this.handleError);
    }

    getLocation(id: number): Promise<Location> {
        return this.getLocations()
            .then(locations => locations.find(location => location.id === id))
            .catch(this.handleError);
    }

    save(location: Location): Promise<Location> {
        if (location.id) {
            return this.put(location);
        }
        return this.post(location);
    }

    delete(location: Location): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.locationsUrl}/${location.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Location
    private post(location: Location): Promise<Location> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.locationsUrl, JSON.stringify(location), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Location
    private put(location: Location): Promise<Location> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.locationsUrl}/${location.id}`;

        return this.http
            .put(url, JSON.stringify(location), { headers: headers })
            .toPromise()
            .then(() => location)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
