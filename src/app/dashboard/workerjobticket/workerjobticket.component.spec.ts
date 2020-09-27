import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerjobticketComponent } from './workerjobticket.component';

describe('WorkerjobticketComponent', () => {
  let component: WorkerjobticketComponent;
  let fixture: ComponentFixture<WorkerjobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerjobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerjobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
