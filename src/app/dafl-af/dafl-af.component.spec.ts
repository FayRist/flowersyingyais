/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaflAfComponent } from './dafl-af.component';

describe('DaflAfComponent', () => {
  let component: DaflAfComponent;
  let fixture: ComponentFixture<DaflAfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaflAfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaflAfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
