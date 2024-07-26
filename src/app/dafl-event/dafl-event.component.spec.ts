/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaflEventComponent } from './dafl-event.component';

describe('DaflEventComponent', () => {
  let component: DaflEventComponent;
  let fixture: ComponentFixture<DaflEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaflEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaflEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
