import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPart1Component } from './main-part1.component';

describe('MainPart1Component', () => {
  let component: MainPart1Component;
  let fixture: ComponentFixture<MainPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
