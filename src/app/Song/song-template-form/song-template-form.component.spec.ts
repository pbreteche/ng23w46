import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTemplateFormComponent } from './song-template-form.component';

describe('SongTemplateFormComponent', () => {
  let component: SongTemplateFormComponent;
  let fixture: ComponentFixture<SongTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongTemplateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
