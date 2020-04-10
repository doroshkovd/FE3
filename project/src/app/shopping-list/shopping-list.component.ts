import { Component, OnInit } from '@angular/core';
import { Part } from "../shared/models/part.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  parts: Part[] = [
    {name: 'Wheel', amount: 1},
    {name: 'Engine', amount: 1},
    {name: 'mirror', amount: 4}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddPart(part: Part) {
    this.parts.push(part);
    return false;
  }
}
