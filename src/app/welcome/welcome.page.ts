import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit, OnDestroy {
  innerHeight: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerHeight = window.innerHeight;
  }

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
    this.innerHeight = window.innerHeight;
  }

  ngOnDestroy() {
    this.menu.enable(true);
  }
}
