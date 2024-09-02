import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PoPageModule, PoBreadcrumb, PoDialogService, PoNotificationService, PoPageEditLiterals, PoFieldModule, PoDividerModule  } from '@po-ui/ng-components';
import { Subscription } from 'rxjs';
import { WorkshopForm } from '../../../shared/models/workshop/workshop-form.interface';
import { Workshop } from '../../../shared/models/workshop/workshop.interface';
import { ActivatedRoute } from '@angular/router';
import { Estado } from '../../../shared/models/localizacao/estado.interface';
import { EstadosService } from '../../../shared/utils/localizacao/estados/estados.service';
import { CepService } from '../../../shared/utils/localizacao/cep/cep.service';

@Component({
  selector: 'app-workshop-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PoPageModule,
    PoFieldModule,
    PoDividerModule
  ],
  templateUrl: './workshop-form.component.html',
  styleUrl: './workshop-form.component.scss'
})

export class WorkshopFormComponent implements OnInit {
  workshopForm!: FormGroup;
  workshopSubscription!: Subscription;
  workshop: Workshop = {
    id: '',
    companyName: '',
    companyRegistrationNumber: '',
    address: '',
    state: '',
    neighborhood: '',
    zipCode: '',
    city: '',
    phoneNumber: '',
    cellphoneNumber: '',
    email: ''
  };

  statesList!: Array<Estado>;

  operation: string = 'post';

  constructor(
    private activatedRoute: ActivatedRoute,
    private statesService: EstadosService,
    private zipCodeService: CepService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.setOperation();
    this.getStatesList();
    this.createForm(this.workshop);
  }

  getStatesList() {
    this.statesService.get().subscribe({
      next: response => this.statesList = response
    });
  }

  setOperation(): void {
    this.activatedRoute.snapshot.params['id'] ? this.operation = 'put' : this.operation = 'post';
  }

  createForm( workshop: Workshop) {
    this.workshopForm = new FormGroup<WorkshopForm>({
      id: new FormControl(workshop.id, { nonNullable: true }),
      companyName: new FormControl(workshop.companyName, { nonNullable: true }),
      companyRegistrationNumber: new FormControl(workshop.companyRegistrationNumber, { nonNullable: true }),
      state: new FormControl(workshop.state, { nonNullable: true }),
      address: new FormControl(workshop.address, { nonNullable: true }),
      neighborhood: new FormControl(workshop.neighborhood, { nonNullable: true }),
      zipCode: new FormControl(workshop.zipCode, { nonNullable: true }),
      city: new FormControl(workshop.city, { nonNullable: true }),
      phoneNumber: new FormControl(workshop.phoneNumber, { nonNullable: true }),
      cellphoneNumber: new FormControl(workshop.cellphoneNumber, { nonNullable: true }),
      email: new FormControl(workshop.email, { nonNullable: true })
    });
  }

  getWorkshop() {

  }

  onCancel(): void {

  }

  onSave(): void {
    console.log(this.workshopForm)
  }

  onZipCodeSearch() {
    let cep: string = this.workshopForm.value.zipCode;

    if( cep !== '' ) {
      this.zipCodeService.get(cep).subscribe({
        next: response => this.onZipCodeSearchSuccess(response),
        error: error => this.onZipCodeSearchError(error)
      })
    }
  }

  onZipCodeSearchSuccess( zipCodeData: any ): void {
    console.log(zipCodeData);

    this.workshopForm.patchValue({
      address: zipCodeData.logradouro,
      state: zipCodeData.uf,
      neighborhood: zipCodeData.bairro,
      city: zipCodeData.localidade,
    });
  }

  onZipCodeSearchError( error:any ): void {
    this.poNotificationService.warning(`Erro ao buscar dados do CEP! Por favor digite manualmente.`)
  }
}
