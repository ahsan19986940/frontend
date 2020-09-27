import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjobticketComponent } from './viewjobticket.component';

describe('ViewjobticketComponent', () => {
  let component: ViewjobticketComponent;
  let fixture: ComponentFixture<ViewjobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewjobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
