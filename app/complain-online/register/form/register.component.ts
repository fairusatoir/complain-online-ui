import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { isFieldInvalid, normalizeFlag } from '../../../util';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  // styleUrls: ['re.component.scss'],
})

export class RegisterComponent implements OnInit {
  modalRef: BsModalRef;
  registerForm: FormGroup;
  isFieldInvalid = isFieldInvalid;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      noKtp: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(null, Validators.required),
      cards: this.formBuilder.array([this.newQuantity()])
    });
  }
  onRegsit() {
    this.registerForm.markAllAsTouched();
    if (!this.registerForm.valid) {
      return;
    }

    this.registerService.addData(normalizeFlag(this.registerForm))
      .subscribe(
        res => {
           if (res) {
            Swal.fire('Success!', 'Register complete, check your email for verification', 'success').then(function () {
              location.reload();
          });
          } else {
            Swal.fire('Failed!', 'this email has already', 'error').then(function () {
              location.reload();
          });
          }
        }
      )
  }
  ngOnInit(): void {
    // if (this.authService.isAuthenticated()) {
    //   this.authService.logout();
    // }
  }
  // ================ Card Config ================ //
  noCards() : FormArray {
    return this.registerForm.get("cards") as FormArray
  }

  newQuantity(): FormGroup {
    return this.formBuilder.group({
      cardNumber: ''.toString()
    })
  }

  addQuantity() {
    this.noCards().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.noCards().removeAt(i);
  }
}
