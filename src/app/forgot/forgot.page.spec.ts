import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ForgotPage } from './forgot.page';

describe('ForgotPage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };
  
  let component: ForgotPage;
  let fixture: ComponentFixture<ForgotPage>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        IonicModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
        }),
      ],
    })
    .compileComponents();
    
    injector = getTestBed();
    translate = injector.get(TranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    expect(Object.keys(component.forgotForm.controls)).toEqual(['email']);
  });

  it('should have title with language text', () => {
    fixture.detectChanges();
    
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent.trim()).toBe('FORGOT_PAGE.TITLE');
    translate.setTranslation('es', { 'FORGOT_PAGE.TITLE': 'Restablecer contraseña' });
    translate.use('es');
    fixture.detectChanges();
    expect(h1.textContent.trim()).toBe('Restablecer contraseña');
  });
});
