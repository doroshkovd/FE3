import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListContainer } from "./shopping-list.container";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
    ShoppingListContainer,
  ]
})

export class ShoppingListModule{

}
