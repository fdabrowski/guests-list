import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
      firstNameCtrl: new FormControl(''),
      secondNameCtrl: new FormControl(''),
      partnerFirstNameCtrl: new FormControl(''),
      partnerSecondNameCtrl: new FormControl(''),
      withPartnerCtrl: new FormControl(false)
    });
  }
}
