import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.onClick.bind(this, 'home'),
      icon: 'ph ph-house',
      shortLabel: 'Home'
    },
    {
      label: 'Dados Oficina',
      action: this.onClick.bind(this, 'workshops'),
      icon: 'ph ph-wrench',
      shortLabel: 'Oficina'
    }
  ];

  menuSelectedTitle: string = "";

  constructor(
    private router: Router
  ) {}

  private onClick(page: string) {
    // this.menuSelectedTitle = ;

    this.router.navigate([page]);
  }
}
