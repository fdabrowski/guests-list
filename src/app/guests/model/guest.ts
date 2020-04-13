import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Guest {
  firstName: string;
  secondName: string;
  phoneNumber: number;
  withPartner: boolean;
  partnerFirstName: string;
  partnerSecondName: string;

  constructor(firstName: string, secondName: string, phoneNumber: number, withPartner: boolean,
              partnerFirstName: string, partnerSecondName: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.phoneNumber = phoneNumber;
    this.withPartner = withPartner;
    this.partnerFirstName = partnerFirstName;
    this.partnerSecondName = partnerSecondName;
  }
}