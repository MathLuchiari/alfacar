import { Component } from '@angular/core';
import { PoPageModule, PoBreadcrumb, PoDialogService, PoNotificationService, PoPageEditLiterals, PoFieldModule, PoDividerModule  } from '@po-ui/ng-components';
@Component({
  selector: 'app-workshop-form',
  standalone: true,
  imports: [
    PoPageModule,
    PoFieldModule,
    PoDividerModule
  ],
  templateUrl: './workshop-form.component.html',
  styleUrl: './workshop-form.component.scss'
})
export class WorkshopFormComponent {

  onCancel(): void {

  }

  onSave(): void {

  }
}
