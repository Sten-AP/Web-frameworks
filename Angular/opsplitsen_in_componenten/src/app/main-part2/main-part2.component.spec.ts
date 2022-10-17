import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPart2Component } from './main-part2.component';

describe('MainPart2Component', () => {
  let component: MainPart2Component;
  let fixture: ComponentFixture<MainPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
