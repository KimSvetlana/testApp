import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonCardComponent } from './edit-person-card.component';

describe('EditPersonCardComponent', () => {
  let component: EditPersonCardComponent;
  let fixture: ComponentFixture<EditPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
