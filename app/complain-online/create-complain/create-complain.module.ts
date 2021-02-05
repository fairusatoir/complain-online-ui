import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComplainSharedModule } from "../shared/complain-shared.module";
import { CreateComplainRoutingModule } from './create-complain-routing.module';
import { CreateComplainComponent } from "./form/create-complain.component";

@NgModule({
  declarations: [
    CreateComplainComponent
  ],
  imports: [
    CommonModule,
    CreateComplainRoutingModule,
    ComplainSharedModule
  ]
})
export class CreateComplainModule {}
