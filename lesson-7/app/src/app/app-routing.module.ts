import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { EditServerComponent, ServerComponent, ServersComponent } from "./servers";
import { UserComponent, UsersComponent } from "./users";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./services/auth/auth.guard";
import { ServersGuard } from "./services/servers/servers.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuard],
    children: [
      {path: ':id', component: ServerComponent},
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [ServersGuard]
      },
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent},
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
