import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComplainRoutingModule } from '../complain-online/complain-online-routing.module';
import { PicComplainModule } from './pic-atm/pic-complain.module';

@NgModule({
  imports: [
    CommonModule,
    ComplainRoutingModule,
  ]
})
export class ComplainModule {}
