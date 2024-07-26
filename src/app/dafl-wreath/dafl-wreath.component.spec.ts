/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaflWreathComponent } from './dafl-wreath.component';

describe('DaflWreathComponent', () => {
  let component: DaflWreathComponent;
  let fixture: ComponentFixture<DaflWreathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaflWreathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaflWreathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
