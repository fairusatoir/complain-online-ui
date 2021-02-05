import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComplainSharedModule } from "../shared/complain-shared.module";
import { TrackingComplainRoutingModule } from './tracking-complain-routing.module';
import { MenuTableComponent } from "./table/tracking-complain.component";

@NgModule({
  declarations: [
    MenuTableComponent
  ],
  imports: [
    CommonModule,
    TrackingComplainRoutingModule,
    ComplainSharedModule
  ]
})
export class CreateComplainModule {}
