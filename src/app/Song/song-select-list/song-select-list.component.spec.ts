import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSelectListComponent } from './song-select-list.component';

describe('SongSelectListComponent', () => {
  let component: SongSelectListComponent;
  let fixture: ComponentFixture<SongSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongSelectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
