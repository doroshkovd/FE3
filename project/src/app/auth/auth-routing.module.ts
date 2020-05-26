import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { NoAuthGuard } from "./no-auth.guard";


const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [ NoAuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
