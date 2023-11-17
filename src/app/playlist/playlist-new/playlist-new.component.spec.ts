import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistNewComponent } from './playlist-new.component';

describe('PlaylistNewComponent', () => {
  let component: PlaylistNewComponent;
  let fixture: ComponentFixture<PlaylistNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaylistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
