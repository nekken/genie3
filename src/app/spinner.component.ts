import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() height:string = '150px';

  constructor() { }

  ngOnInit() {
  }

}
