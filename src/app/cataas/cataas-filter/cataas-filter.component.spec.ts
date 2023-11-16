import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataasFilterComponent } from './cataas-filter.component';

describe('CataasFilterComponent', () => {
  let component: CataasFilterComponent;
  let fixture: ComponentFixture<CataasFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataasFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CataasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
