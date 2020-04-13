import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { POLISH_PHONE_REGX } from './validators';
import { GuestService } from '../guest.service';
import { Guest } from '../model/guest';

@Component({
  selector: 'guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  guestFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private readonly guestService: GuestService) {
  }

  ngOnInit() {
    this.guestFormGroup = this.createFormGroup();
  }

  onSubmit() {
    this.guestService.addGuest(new Guest(
      this.guestFormGroup.value.firstNameCtrl,
      this.guestFormGroup.value.secondNameCtrl,
      this.guestFormGroup.value.phoneNumberCtrl,
      this.guestFormGroup.value.withPartnerCtrl,
      this.guestFormGroup.value.partnerFirstNameCtrl,
      this.guestFormGroup.value.partnerSecondNameCtrl
    ));
    this.guestFormGroup.reset();
  }

  private createFormGroup(): FormGroup {
    return this.fb.group({
      firstNameCtrl: new FormControl('', Validators.required),
      secondNameCtrl: new FormControl('', Validators.required),
      phoneNumberCtrl: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern(POLISH_PHONE_REGX)]),
      partnerFirstNameCtrl: new FormControl(''),
      partnerSecondNameCtrl: new FormControl(''),
      withPartnerCtrl: new FormControl(false)
    });
  }
}
