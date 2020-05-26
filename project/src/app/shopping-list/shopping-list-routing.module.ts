import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: '', component: ShoppingListComponent, canActivate: [ AuthGuard ], data: {animation: 'Parts'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
