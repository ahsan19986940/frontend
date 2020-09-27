import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosejobticketComponent } from './closejobticket.component';

describe('ClosejobticketComponent', () => {
  let component: ClosejobticketComponent;
  let fixture: ComponentFixture<ClosejobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosejobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosejobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
