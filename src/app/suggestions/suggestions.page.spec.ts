import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { SuggestionsPage } from './suggestions.page';

describe('SuggestionsPage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };
  
  let component: SuggestionsPage;
  let fixture: ComponentFixture<SuggestionsPage>;
  let translate: TranslateService;
  let injector: Injector;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionsPage],
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
    fixture = TestBed.createComponent(SuggestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the form', () => {
    expect(Object.keys(component.suggestionForm.controls)).toEqual(['email', 'phone', 'comments']);
  });

  it('should have title with language text', () => {
    fixture.detectChanges();
    
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');

    expect(h1.textContent.trim()).toBe('SUGGESTIONS_PAGE.TITLE');
    translate.setTranslation('es', { 'SUGGESTIONS_PAGE.TITLE': 'Envía una sugerencia' });
    translate.use('es');
    fixture.detectChanges();
    expect(h1.textContent.trim()).toBe('Envía una sugerencia');
  });
});
