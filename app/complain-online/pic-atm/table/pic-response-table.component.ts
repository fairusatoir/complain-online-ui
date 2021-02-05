import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { PagedApiResponse, PageRequest } from '../../../lib/model';
import { normalizeFlag, sortTableFn } from '../../../util';
import { AtmComplainList } from '../../model';
import { PicAtmService } from '../../service';
import { ModalReplyComponent } from '../modal/modal-reply.component';

@Component({
  templateUrl: './pic-response-table.component.html'
})
export class PicResponseTableComponent implements OnInit {

  // @Input() pass : any;
  // @Output() afterAdd = new EventEmitter<any>();

  @ViewChild(ModalReplyComponent, {static: false}) modalReply: ModalReplyComponent;
  atmComplain: {};

  private modalRef: BsModalRef;
  ColumnMode = ColumnMode;

  expanded: boolean = false;
  loadingIndicator: boolean;

  data: PagedApiResponse<AtmComplainList>;
  page: PageRequest = new PageRequest();
  sortTableFn: Function = sortTableFn;

  constructor(
    private picAtmService: PicAtmService,
    private modalService: BsModalService,
  ) {

  }

  openModal(
    id: string,
    complaindetail: string,
    template: TemplateRef<any>) {  //template: TemplateRef<any>
    // console.log(id,complaindetail);
    this.atmComplain = {noComplain:id,complainDetail:complaindetail};
    this.modalRef = this.modalService.show(template);
  }

  get offset(): number {
    return !!(this.data && this.data.number) ? this.data.number : 0;
  }

  get rows(): Array<AtmComplainList> {
    return !!(this.data && this.data.content) ? this.data.content : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.totalElements) ? this.data.totalElements : 0;
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;
    // console.log("atm")
    this.picAtmService
      .getTableRowsAtm(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }

  close(){
    this.modalRef.hide();
  }

}
