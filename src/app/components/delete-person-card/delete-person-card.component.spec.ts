import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePersonCardComponent } from './delete-person-card.component';

describe('DeletePersonCardComponent', () => {
  let component: DeletePersonCardComponent;
  let fixture: ComponentFixture<DeletePersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePersonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
