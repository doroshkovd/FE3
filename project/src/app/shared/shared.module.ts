import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown/dropdown.directive";
import { ErrorsComponent } from "./errors/errors.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderComponent } from "./loader/loader.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([]),
  ],
  declarations: [
    DropdownDirective,
    ErrorsComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  exports: [
    DropdownDirective,
    ErrorsComponent,
    HeaderComponent,
    LoaderComponent,
  ]
})
export class SharedModule {
}
