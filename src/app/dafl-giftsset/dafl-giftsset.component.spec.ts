/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DaflGiveSetComponent } from './dafl-giftsset.component';

describe('DaflGiveSetComponent', () => {
  let component: DaflGiveSetComponent;
  let fixture: ComponentFixture<DaflGiveSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaflGiveSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaflGiveSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
