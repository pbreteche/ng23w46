import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataasComponent } from './cataas.component';

describe('CataasComponent', () => {
  let component: CataasComponent;
  let fixture: ComponentFixture<CataasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CataasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
