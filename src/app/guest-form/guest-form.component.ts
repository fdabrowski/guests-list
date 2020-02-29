import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  firstNameCtrl: FormControl;
  secondNameCtrl: FormControl;
  withPartnerCtrl: FormControl;
  partnerFirstNameCtrl: FormControl;
  partnerSecondNameCtrl: FormControl;

  constructor() {}

  ngOnInit() {
    this.firstNameCtrl = new FormControl('');
    this.secondNameCtrl = new FormControl('');
    this.partnerFirstNameCtrl = new FormControl('');
    this.partnerSecondNameCtrl = new FormControl('');
    this.withPartnerCtrl = new FormControl(false);
  }
}
