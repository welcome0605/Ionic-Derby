import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
} from '@angular/core/testing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { WelcomePage } from './welcome.page';

describe('WelcomePage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };

  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        {
          provide: MenuController,
          useValue: {
            enable: () => Promise.resolve(),
          },
        },
      ],
    }).compileComponents();

    injector = getTestBed();
    translate = injector.get(TranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button login with the language text', () => {
    fixture.detectChanges();

    const welcomeElement: HTMLElement = fixture.nativeElement;
    const button: HTMLElement = welcomeElement.querySelector('.login-button');

    expect(button.textContent.trim()).toBe('GLOBAL.LOGIN');
    translate.setTranslation('es', { 'GLOBAL.LOGIN': 'Inicio de sesión' });
    translate.use('es');
    fixture.detectChanges();
    expect(button.textContent.trim()).toBe('Inicio de sesión');
  });

  it('should have slogan with language text', () => {
    fixture.detectChanges();
    const welcomeElement: HTMLElement = fixture.nativeElement;
    const slogan: HTMLElement = welcomeElement.querySelector('.slogan');

    expect(slogan.textContent.trim()).toBe('GLOBAL.SLOGAN');
    translate.setTranslation('es', { 'GLOBAL.SLOGAN': 'Más cerca de tí' });
    translate.use('es');
    fixture.detectChanges();
    expect(slogan.textContent.trim()).toBe('Más cerca de tí');
  });

  it('should have logo', () => {
    const welcomeElement: HTMLElement = fixture.nativeElement;
    const slogan: HTMLElement = welcomeElement.querySelector('.welcome-logo');

    expect(slogan).toBeTruthy();
  });
});
