import { Component, OnInit } from '@angular/core';
import { Part } from "../shared/models/part.model";
import { PartsService } from "../shared/services/parts/parts.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  parts: Part[];

  constructor(private partsService: PartsService) {
  }

  ngOnInit(): void {
      this.parts = this.partsService.parts;
  }

  onAddPart(part: Part) {
    this.parts.push(part);
    return false;
  }
}
