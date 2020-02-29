import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  guestFormGroup: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.guestFormGroup = new FormGroup({
      firstNameCtrl: new FormControl(''),
      secondNameCtrl: new FormControl(''),
      partnerFirstNameCtrl: new FormControl(''),
      partnerSecondNameCtrl: new FormControl(''),
      withPartnerCtrl: new FormControl(false)
    });
  }
}
