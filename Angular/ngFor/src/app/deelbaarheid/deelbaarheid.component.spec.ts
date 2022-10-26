import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeelbaarheidComponent } from './deelbaarheid.component';

describe('DeelbaarheidComponent', () => {
  let component: DeelbaarheidComponent;
  let fixture: ComponentFixture<DeelbaarheidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeelbaarheidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeelbaarheidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
