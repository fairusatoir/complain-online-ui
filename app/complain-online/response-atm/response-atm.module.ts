import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplainSharedModule } from "../shared/complain-shared.module";
import { ResponseAtmRoutingModule } from './response-atm-routing.module';
import { ResponseAtmComponent } from './table/response-atm.component';
import { AtmDetailComponent } from './detail/atm-detail.component'
import { CollapseModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ResponseAtmComponent,
    AtmDetailComponent
  ],
  imports: [
    CommonModule,
    ResponseAtmRoutingModule,
    ComplainSharedModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class ResponseAtmModule {}
