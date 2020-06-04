import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/auth.guard";
import { ShoppingListContainer } from "./shopping-list.container";

const routes: Routes = [
  { path: '', component: ShoppingListContainer, canActivate: [ AuthGuard ], data: {animation: 'Parts'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
