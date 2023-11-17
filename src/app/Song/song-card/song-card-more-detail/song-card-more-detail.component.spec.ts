import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardMoreDetailComponent } from './song-card-more-detail.component';

describe('SongCardMoreDetailComponent', () => {
  let component: SongCardMoreDetailComponent;
  let fixture: ComponentFixture<SongCardMoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongCardMoreDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongCardMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
