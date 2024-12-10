import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddplayerComponent } from './dialog-addplayer.component';

describe('DialogAddplayerComponent', () => {
  let component: DialogAddplayerComponent;
  let fixture: ComponentFixture<DialogAddplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
