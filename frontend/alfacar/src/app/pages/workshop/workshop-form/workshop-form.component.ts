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
import { WorkshopService } from '../../../shared/services/workshop.service';

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
  pageSubscriptions: any = {
    state: Subscription,
    zipCode: Subscription,
    workshop: Subscription,
  };

  workshopId!: string;
  workshopForm: FormGroup = new FormGroup<WorkshopForm>({
    _id: new FormControl('', { nonNullable: true }),
    companyName: new FormControl('', { nonNullable: true }),
    companyRegistrationNumber: new FormControl('', { nonNullable: true }),
    state: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    neighborhood: new FormControl('', { nonNullable: true }),
    zipCode: new FormControl('', { nonNullable: true }),
    city: new FormControl('', { nonNullable: true }),
    phoneNumber: new FormControl('', { nonNullable: true }),
    cellphoneNumber: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true })
  });
  workshopSubscription!: Subscription;
  workshop: Workshop = {
    _id: '',
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
    private poNotificationService: PoNotificationService,
    private workshopService: WorkshopService
  ) {}

  ngOnInit(): void {
    this.workshopId = this.activatedRoute.snapshot.params['id'];

    this.setOperation();
    this.getStatesList();
    this.operation === 'post' ? this.createForm(this.workshop) : this.getWorkshop();
  }

  getStatesList() {
    this.pageSubscriptions.state = this.statesService.get().subscribe({
      next: response => this.statesList = response,
      error: error => this.poNotificationService.error(`Erro ao consultar Estados!`)
    });
  }

  setOperation(): void {
    this.activatedRoute.snapshot.params['id'] ? this.operation = 'put' : this.operation = 'post';
  }

  createForm( workshop: Workshop ) {
    this.workshopForm = new FormGroup<WorkshopForm>({
      _id: new FormControl(workshop._id, { nonNullable: true }),
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
    this.pageSubscriptions.workshop = this.workshopService.getById(this.workshopId).subscribe({
      next: workshop => this.onGetWorkshopSuccess(workshop),
      error: error => this.onGetWorkshopError(error)
    })
  }

  onGetWorkshopSuccess( workshop: Workshop): void {
    this.createForm( workshop );
  }

  onGetWorkshopError( error: string ): void {
    this.poNotificationService.error('Falha ao retornar dados da oficina.');
  }

  onCancel(): void {

  }

  onSave(): void {
    this.pageSubscriptions.workshop = this.workshopService.create(this.workshopForm.value).subscribe({
      next: (response: any) => this.onSaveSuccess(response),
      error: (error: any) => this.onSaveError(error)
    })
  }

  onSaveSuccess( response: any ): void {
    console.log(response)
    this.poNotificationService.success('Dados da oficina salvos com sucesso!');
  }

  onSaveError( error: any ): void {
    this.poNotificationService.error('Falha ao salvar dados da oficina.');
  }

  onZipCodeSearch() {
    let cep: string = this.workshopForm.value.zipCode;

    if( cep !== '' ) {
      this.pageSubscriptions.zipCode = this.zipCodeService.get(cep).subscribe({
        next: response => this.onZipCodeSearchSuccess(response),
        error: error => this.onZipCodeSearchError(error)
      })
    } else {
      this.workshopForm.patchValue({
        address: '',
        state: '',
        neighborhood: '',
        city: ''
      });
    }
  }

  onZipCodeSearchSuccess( zipCodeData: any ): void {
    console.log(zipCodeData);

    this.workshopForm.patchValue({
      address: zipCodeData.logradouro,
      state: zipCodeData.uf,
      neighborhood: zipCodeData.bairro,
      city: zipCodeData.localidade
    });
  }

  onZipCodeSearchError( error:any ): void {
    this.poNotificationService.warning(`Erro ao buscar dados do CEP! Por favor digite manualmente.`)
  }
}
