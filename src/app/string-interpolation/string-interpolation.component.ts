import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.sass']
})
export class StringInterpolationComponent implements OnInit {

  titulo = "Recebi a string interpolation";

  constructor() { }

  ngOnInit() {
  }

}
