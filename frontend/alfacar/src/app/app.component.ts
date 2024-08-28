import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alfacar';

  isMenuExpanded: boolean = false;

  toggleSideMenu(): void {
    const sideMenu = document.getElementsByClassName('app__side-menu')[0];
    const listBtnTexts: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('app__btn--side-menu-text') as HTMLCollectionOf<HTMLElement>;
    const listBtnIcons: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('app__btn--side-menu-icon') as HTMLCollectionOf<HTMLElement>;

    if( this.isMenuExpanded ) {
      sideMenu.classList.add('app__side-menu--expanded')

      for (let i=0; i < listBtnTexts.length; i++) {
        const btnText: HTMLElement = listBtnTexts[i];
        btnText.style['display'] = '';
      }

      for (let i=0; i < listBtnIcons.length; i++) {
        const btnIcon: HTMLElement = listBtnIcons[i];
        btnIcon.classList.remove('app__btn--side-menu-icon--centered')
      }
    } else {
      sideMenu.classList.remove('app__side-menu--expanded')

      for (let i=0; i < listBtnTexts.length; i++) {
        const btnTexts: HTMLElement = listBtnTexts[i];
        btnTexts.style['display'] = 'none'
      }

      for (let i=0; i < listBtnIcons.length; i++) {
        const btnIcon: HTMLElement = listBtnIcons[i];
        btnIcon.classList.add('app__btn--side-menu-icon--centered')
      }
    }

    this.isMenuExpanded = !this.isMenuExpanded;
  }
}
