import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexServiceComponent } from './pokedex-service.component';

describe('PokedexServiceComponent', () => {
  let component: PokedexServiceComponent;
  let fixture: ComponentFixture<PokedexServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
