import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { ShoppingListRoutingModule } from "./shopping-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ]
})

export class ShoppingListModule{

}
