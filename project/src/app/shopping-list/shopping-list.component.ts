import { Component, OnDestroy, OnInit } from '@angular/core';
import { Part } from "../shared/models/part.model";
import { PartsService } from "../shared/services/parts/parts.service";
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
      this.partsSubscribtion = this.partsService.parts
        .subscribe((parts: Part[]) => {
          this.parts = parts;
        });
  }

  ngOnDestroy(): void {
    this.partsSubscribtion.unsubscribe();
  }
}
