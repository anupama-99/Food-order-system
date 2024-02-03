import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyProductsComponent } from './categoty-products.component';

describe('CategotyProductsComponent', () => {
  let component: CategotyProductsComponent;
  let fixture: ComponentFixture<CategotyProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategotyProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategotyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
