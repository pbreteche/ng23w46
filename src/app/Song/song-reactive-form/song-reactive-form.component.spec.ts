import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongReactiveFormComponent } from './song-reactive-form.component';

describe('SongReactiveFormComponent', () => {
  let component: SongReactiveFormComponent;
  let fixture: ComponentFixture<SongReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
