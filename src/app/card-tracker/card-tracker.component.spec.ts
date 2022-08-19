import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTrackerComponent } from './card-tracker.component';

describe('CardTrackerComponent', () => {
  let component: CardTrackerComponent;
  let fixture: ComponentFixture<CardTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
