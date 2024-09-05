import { Component, OnInit } from '@angular/core';
import { PoPageModule, PoTableColumn, PoTableModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-workshop-list',
  standalone: true,
  imports: [
    PoPageModule,
    PoTableModule
  ],
  templateUrl: './workshop-list.component.html',
  styleUrl: './workshop-list.component.scss'
})
export class WorkshopListComponent implements OnInit {
  columns!: Array<PoTableColumn>;

  ngOnInit(): void {
    this.setColumns();
  }

  setColumns(): void {
    this.columns = [
      { property: 'id', label: 'Código', type: 'link', action: (row: string) => this.goToView(row) },
      { property: 'name', label: 'Nome' },
      { property: 'rg', label: 'RG', visible: false },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-mail' },
      { property: 'tel1', label: 'Telefone 1' },
      { property: 'tel2', label: 'Telefone 2', visible: false },
      { property: 'pets', label: 'Pets', type: 'icon', icons: [
        { value: 'view-pet', icon: 'po-icon-eye', action: (owner: Owner) => this.goToViewPets(owner.id), tooltip: 'Visualizar pets' },
        { value: 'include-pet', icon: 'po-icon-plus-circle', action: (owner: Owner) => this.goToPetForm(owner.id), tooltip: 'Incluir pets' }
      ] }
    ];
  }
}
