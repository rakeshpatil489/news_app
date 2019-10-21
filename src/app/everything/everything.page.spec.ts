import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingPage } from './everything.page';

describe('EverythingPage', () => {
  let component: EverythingPage;
  let fixture: ComponentFixture<EverythingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EverythingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EverythingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
