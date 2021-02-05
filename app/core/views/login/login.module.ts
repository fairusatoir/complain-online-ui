import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterComponent } from "../../../complain-online/register/form/register.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {
}
