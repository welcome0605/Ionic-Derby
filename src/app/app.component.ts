import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from './reducers/app-settings.reducer';
import { selectAllLanguages } from './selectors/app-settings.selector';
import { State } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list',
    },
  ];
  private languages: Observable<Languages[]>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private store: Store<State>,
  ) {
    this.initializeApp();
  }

  public ngOnInit(): void {
    this.configureLanguage();
  }

  /**
   * initialize app.
   */
  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Get language settings and set on translate service.
   */
  private configureLanguage(): void {
    this.languages = this.store.pipe(select(selectAllLanguages));
    this.languages.pipe(first()).subscribe((languages: Languages[]) => {
      this.translate.addLangs(languages);
      this.translate.setDefaultLang(Languages.Es);
      this.translate.use(navigator.language.substr(0, 2));
    });
  }
}
