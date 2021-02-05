import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapseModule, ModalModule } from 'ngx-bootstrap';
import { ComplainSharedModule } from "../shared/complain-shared.module";
import { ComplainDetailComponent } from './detail/complain-detail.component';
import { MenuTableComponent } from "./table/tracking-complain.component";
import { TrackingComplainRoutingModule } from './tracking-complain-routing.module';

@NgModule({
  declarations: [
    MenuTableComponent,
    ComplainDetailComponent,
  ],
  imports: [
    CommonModule,
    TrackingComplainRoutingModule,
    ComplainSharedModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot()
  ]
})
export class CreateComplainModule {}
