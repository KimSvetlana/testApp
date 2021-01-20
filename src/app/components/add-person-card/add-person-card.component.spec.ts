import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonCardComponent } from './add-person-card.component';

describe('AddPersonCardComponent', () => {
  let component: AddPersonCardComponent;
  let fixture: ComponentFixture<AddPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
