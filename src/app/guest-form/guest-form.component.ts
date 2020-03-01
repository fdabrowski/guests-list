import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { POLISH_PHONE_REGX } from './validators';

@Component({
  selector: 'guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  guestFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.guestFormGroup = this.createFormGroup();
  }

  onSubmit() {
    console.log(this.guestFormGroup.value);
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      firstNameCtrl: new FormControl('', Validators.required),
      secondNameCtrl: new FormControl('', Validators.required),
      phoneNumberCtrl: new FormControl('', [
        Validators.required, Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern(POLISH_PHONE_REGX)]),
      partnerFirstNameCtrl: new FormControl(''),
      partnerSecondNameCtrl: new FormControl(''),
      withPartnerCtrl: new FormControl(false)
    });
  }
}
