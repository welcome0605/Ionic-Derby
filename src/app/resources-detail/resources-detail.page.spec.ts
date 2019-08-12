import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesDetailPage } from './resources-detail.page';

describe('ResourcesDetailPage', () => {
  let component: ResourcesDetailPage;
  let fixture: ComponentFixture<ResourcesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
