import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileRechtsComponent } from './tile-rechts.component';

describe('TileRechtsComponent', () => {
  let component: TileRechtsComponent;
  let fixture: ComponentFixture<TileRechtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileRechtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileRechtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
