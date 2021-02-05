import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplainSharedModule } from "../shared/complain-shared.module";
import { ResponseAtmRoutingModule } from './response-atm-routing.module';
import { ResponseAtmComponent } from './table/response-atm.component';


@NgModule({
  declarations: [
    ResponseAtmComponent
  ],
  imports: [
    CommonModule,
    ResponseAtmRoutingModule,
    ComplainSharedModule
  ]
})
export class ResponseAtmModule {}
