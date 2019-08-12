import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { GreetingPage } from './greeting.page';
import { reducers, metaReducers } from '../reducers';
import { StoreModule } from '@ngrx/store';

describe('GreetingPage', () => {
  const createTranslateLoader = (http: HttpClient): TranslateHttpLoader => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  };
  
  let component: GreetingPage;
  let fixture: ComponentFixture<GreetingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HttpClientModule,
        RouterTestingModule,
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
