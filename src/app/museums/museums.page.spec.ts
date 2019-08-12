import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { MuseumsPage } from './museums.page';

describe('MuseumsPage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };

  let component: MuseumsPage;
  let fixture: ComponentFixture<MuseumsPage>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MuseumsPage],
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
    }).compileComponents();

    injector = getTestBed();
    translate = injector.get(TranslateService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title with language text', () => {
    fixture.detectChanges();
    
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent.trim()).toBe('HOME_PAGE.LINK_3');
    translate.setTranslation('es', { 'HOME_PAGE.LINK_3': 'Museo Egipcio de Barcelona' });
    translate.use('es');
    fixture.detectChanges();
    expect(h1.textContent.trim()).toBe('Museo Egipcio de Barcelona');
  });
});
