import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMinistryComponent } from './field-ministry.component';

describe('FieldMinistryComponent', () => {
  let component: FieldMinistryComponent;
  let fixture: ComponentFixture<FieldMinistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMinistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
