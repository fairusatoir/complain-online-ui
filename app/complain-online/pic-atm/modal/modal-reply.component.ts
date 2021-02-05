import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { isFieldInvalid, normalizeFlag } from "../../../util";
import { PicAtmService } from "../../service";
import { Location } from "@angular/common";

@Component({
  selector: 'modal-reply',
  templateUrl: './modal-reply.component.html',
})
export class ModalReplyComponent implements OnInit {

  @Input() atmComplain:{noComplain:string,complainDetail:string};

  form: FormGroup;

  reply: string;
  noComplain: string;


  isFieldInvalid = isFieldInvalid;

  constructor(
    public location: Location,
    private picAtmService: PicAtmService,
    private formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group({
      complainResponse: new FormControl('', Validators.required),
    })
  }

  ngOnInit() {
    // console.log(this.id);
  }

  // close() {
  //   this.modalRef.hide();
  // }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    // console.log(this.form.ad);

    this.picAtmService
      .edit(this.atmComplain.noComplain,normalizeFlag(this.form))
      .subscribe(() => this.location.back());
  }

}
