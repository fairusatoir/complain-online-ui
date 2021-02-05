import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';

import { ComplainSharedModule } from "../shared/complain-shared.module";
import { TrackingComplainRoutingModule } from './pic-complain-routing.module';
import { PicResponseTableComponent } from "./table/pic-response-table.component";
import { PicResponseFormComponent } from "./form/pic-response-form.component";
import { ModalReplyComponent } from './modal/modal-reply.component';

@NgModule({
  declarations: [
    PicResponseTableComponent,
    PicResponseFormComponent,
    ModalReplyComponent,
  ],
  imports: [
    CommonModule,
    TrackingComplainRoutingModule,
    ComplainSharedModule,
    ModalModule.forRoot(),
  ],
  providers: [
    BsModalRef,
  ],
  entryComponents:[
    ModalReplyComponent
  ]
})
export class PicComplainModule {}
