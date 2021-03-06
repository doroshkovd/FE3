import { Component, OnDestroy, OnInit } from '@angular/core';
import { Part } from "../shared/models/part.model";
import { PartsService } from "./parts.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  parts: Part[];
  partsSubscribtion: Subscription;

  constructor(private partsService: PartsService) {
  }

  ngOnInit(): void {
      this.partsService.getParts();
      this.partsSubscribtion = this.partsService.parts
        .subscribe((parts: Part[]) => {
          this.parts = parts;
        });
  }

  onEditElement(index) {
    this.partsService.onEditPart(index);
  }

  ngOnDestroy(): void {
    this.partsSubscribtion.unsubscribe();
  }
}
