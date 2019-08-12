import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtPage } from './art.page';

describe('ArtPage', () => {
  let component: ArtPage;
  let fixture: ComponentFixture<ArtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
