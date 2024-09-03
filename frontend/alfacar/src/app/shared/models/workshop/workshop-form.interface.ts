import { FormControl } from "@angular/forms";

export interface WorkshopForm {
  _id: FormControl<string>;
  companyName: FormControl<string>;
  companyRegistrationNumber: FormControl<string>;
  address: FormControl<string>;
  state: FormControl<string>;
  neighborhood: FormControl<string>;
  zipCode: FormControl<string>;
  city: FormControl<string>;
  phoneNumber: FormControl<string>;
  cellphoneNumber: FormControl<string>;
  email: FormControl<string>;
}
