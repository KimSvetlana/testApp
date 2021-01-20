import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactPersonCardComponent } from './redact-person-card.component';

describe('RedactPersonCardComponent', () => {
  let component: RedactPersonCardComponent;
  let fixture: ComponentFixture<RedactPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactPersonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
