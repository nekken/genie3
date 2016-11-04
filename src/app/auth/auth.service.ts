// Configure Auth0
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0:any;
declare var Auth0Lock:any;

@Injectable()
export class Auth {

    lock = new Auth0Lock('670A1ACTTD1EXCusNzeHkAFS0dwRGHLu', 'neomanager.auth0.com', {});
    userProfile:Object;

    // Configure Auth0
    auth0 = new Auth0({
        domain: 'neomanager.auth0.com',
        clientID: '670A1ACTTD1EXCusNzeHkAFS0dwRGHLu',
        responseType: 'token',
        callbackURL: 'http://localhost:4200/auth',
    });

    constructor(private router: Router) {

        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        var result = this.auth0.parseHash(window.location.hash);

        if (result && result.idToken) {
            localStorage.setItem('id_token', result.idToken);

            // Fetch profile information
            this.lock.getProfile(result.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
                this.router.navigate(['/home']);
            });

        } else if (result && result.error) {
            alert('error: ' + result.error);
        }
    }

    public logout() {
        // Remove token and profile from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };

    public login(username, password) {
        this.auth0.login({
            connection: 'Username-Password-Authentication',
            responseType: 'token',
            email: username,
            password: password,
        }, function(err) {
            if (err) alert("something went wrong: " + err.message);
        });
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token' by default
        return tokenNotExpired();
    }
}