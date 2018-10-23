import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerLettersComponent } from './prayer-letters.component';

describe('PrayerLettersComponent', () => {
  let component: PrayerLettersComponent;
  let fixture: ComponentFixture<PrayerLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
