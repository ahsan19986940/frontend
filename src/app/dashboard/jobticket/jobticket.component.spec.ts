import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobticketComponent } from './jobticket.component';

describe('JobticketComponent', () => {
  let component: JobticketComponent;
  let fixture: ComponentFixture<JobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
