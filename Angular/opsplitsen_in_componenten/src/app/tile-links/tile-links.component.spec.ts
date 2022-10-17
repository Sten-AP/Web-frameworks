import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLinksComponent } from './tile-links.component';

describe('TileLinksComponent', () => {
  let component: TileLinksComponent;
  let fixture: ComponentFixture<TileLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
