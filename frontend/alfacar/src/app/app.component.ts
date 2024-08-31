import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';


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
export class AppComponent implements OnInit {
  title = 'alfacar';

  isMenuExpanded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.toggleSideMenu();
  }

  toggleSideMenu(): void {
    const listBtns: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('app__btn--side-menu') as HTMLCollectionOf<HTMLElement>;

    for (let i=0; i < listBtns.length; i++) {
      let childrenElBtn: Array<HTMLElement> = Array.from(listBtns[i].children) as Array<HTMLElement>;
      let btnText: HTMLElement = childrenElBtn.filter( el => el.classList.contains('mdc-button__label') )[0].children[0] as HTMLElement;
      let btnIcon: HTMLElement = childrenElBtn.filter( el => el.classList.contains('app__btn--side-menu-icon') )[0] as HTMLElement;

      if( this.isMenuExpanded ) {
        btnText.style['display'] = 'none'
        btnIcon.classList.add('app__btn--side-menu-icon--centered')
      } else {
        btnText.style['display'] = '';
        btnIcon.classList.remove('app__btn--side-menu-icon--centered')
      }
    }

    this.isMenuExpanded = !this.isMenuExpanded;
  }

  accessPage(endPoint: string): void {
    this.router.navigate([endPoint], {relativeTo: this.route})
  }
}
