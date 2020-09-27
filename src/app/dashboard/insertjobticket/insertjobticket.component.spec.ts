import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertjobticketComponent } from './insertjobticket.component';

describe('InsertjobticketComponent', () => {
  let component: InsertjobticketComponent;
  let fixture: ComponentFixture<InsertjobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertjobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertjobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
