import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.sass']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent";

  constructor() { }

  ngOnInit() {
  }

}
