import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { EditProfilePage } from './edit-profile.page';
import { reducers, metaReducers } from '../reducers';


describe('EditProfilePage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };
  
  let component: EditProfilePage;
  let fixture: ComponentFixture<EditProfilePage>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilePage ],
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
        StoreModule.forRoot(reducers, { metaReducers })
      ],
    })
    .compileComponents();

    injector = getTestBed();
    translate = injector.get(TranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    expect(Object.keys(component.profileForm.controls))
      .toEqual(['fullName', 'job', 'email', 'file']);
  });

  it('should have title with language text', () => {
    fixture.detectChanges();
    
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent.trim()).toBe('PROFILE_PAGE.TITLE');
    translate.setTranslation('es', { 'PROFILE_PAGE.TITLE': 'Crea tu perfil' });
    translate.use('es');
    fixture.detectChanges();
    expect(h1.textContent.trim()).toBe('Crea tu perfil');
  });
});
