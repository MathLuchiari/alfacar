import { Component, OnInit, ViewChild } from '@angular/core';
import { PoNotificationService, PoPageAction, PoPageModule, PoTableAction, PoTableColumn, PoTableColumnSpacing, PoTableComponent, PoTableModule } from '@po-ui/ng-components';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { Subscription } from 'rxjs';

import { WorkshopPage } from '../../../shared/models/workshop/workshop-page.interface';
import { Workshop } from '../../../shared/models/workshop/workshop.interface';
import { WorkshopService } from './../../../shared/services/workshop.service';
import Utils from '../../../shared/utils/utils';

@Component({
  selector: 'app-workshop-list',
  standalone: true,
  imports: [
    PoPageModule,
    PoTableModule,
    PoPageDynamicTableModule
  ],
  templateUrl: './workshop-list.component.html',
  styleUrl: './workshop-list.component.scss'
})
export class WorkshopListComponent implements OnInit {
  @ViewChild('workshopTable', { static: true }) poTableItems!: PoTableComponent;
  itemsSelected: Array<any> = [];

  columns!: Array<PoTableColumn>;
  tableSpacing: PoTableColumnSpacing = PoTableColumnSpacing.Large;

  tableActions: Array<PoTableAction> = [
    { action: this.goToEdit.bind(this)  , icon: 'po-icon ph ph-pencil-line', label: 'Editar' },
    { action: this.goToDelete.bind(this), icon: 'po-icon ph ph-trash', label: 'Deletar' }
  ];

  readonly pageActions: PoPageAction[] = [
    { label: 'Deletar', action: this.goToDelete.bind(this), disabled: () => this.isSubscribed }
  ];

  workshops: Array<Workshop> = [];

  isShowMoreDisabled: boolean = false;
  isLoading: boolean = false;
  pageSize: number = 1;
  pageNumber: number = 0;

  pageSubscriptions: any = {
    workshop: Subscription
  }

  constructor(
    private workshopService: WorkshopService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.setColumns();

    this.getWorkshops(this.pageNumber, this.pageSize);
  }

  setColumns(): void {
    this.columns = [
      { property: 'companyName', label: 'Razão Social' },
      { property: 'email', label: 'Email'},
      { property: 'phoneNumber', label: 'Telefone', format: '(99) 99999?-9999' },
      { property: 'cellphoneNumber', label: 'Celular', format: '(99) 99999?-9999' },
      { property: 'companyRegistrationNumber', label: 'CNPJ', visible: true  },
      { property: 'state', label: 'Estado', visible: false  },
      { property: 'city', label: 'Cidade', visible: false },
      { property: 'neighborhood', label: 'Bairro', visible: false  },
      { property: 'address', label: 'Endereço', visible: false },
      { property: 'zipCode', label: 'CEP', visible: false  }
    ];
  }

  // ,
  //         {
  //           action: this.goToDelete.bind(this),
  //           color: 'color-07',
  //           icon: 'ph ph-pencil-line',
  //           tooltip: 'Deletar',
  //           value: 'delete'
  //         }

  getWorkshops(pageNumber: number, pageSize: number): void {
    this.startLoading();

    this.pageSubscriptions.workshop = this.workshopService.get(pageNumber, pageSize).subscribe({
      next: (workshopPage: WorkshopPage) => this.onGetWorkshopsSuccess(workshopPage),
      error: (error: any) => this.onGetWorkshopsError(error)
    })
  }

  onGetWorkshopsSuccess(workshopPage: WorkshopPage): void {
    this.stopLoading();

    workshopPage.workshops.forEach( (workshop: Workshop) => {
      workshop.cellphoneNumber = Utils.applyPhoneMask(workshop.cellphoneNumber)
      workshop.phoneNumber = Utils.applyPhoneMask(workshop.phoneNumber)
      workshop.companyRegistrationNumber = Utils.applyCNPJMask(workshop.companyRegistrationNumber)
    })

    console.log(this.workshops)
    console.log(workshopPage.workshops)

    this.workshops = this.workshops.concat(workshopPage.workshops)

    if( this.workshops.length === workshopPage.totalElements ) {
      this.isShowMoreDisabled = true
    }
  }

  onGetWorkshopsError(error: any): void {
    this.stopLoading();

    this.poNotificationService.error(`Erro ao carregar oficinas!`);
  }

  goToEdit(row: string): void {
    console.log('Editar Registro!')
  }

  goToDelete(row: string): void {

  }

  loadMore(): void {
    this.pageNumber++;

    this.getWorkshops(this.pageNumber, this.pageSize);
  }

  startLoading(): void {
    this.isLoading = true;
    this.isShowMoreDisabled = true;
  }

  stopLoading(): void {
    this.isLoading = false;
    this.isShowMoreDisabled = false;
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }
}
