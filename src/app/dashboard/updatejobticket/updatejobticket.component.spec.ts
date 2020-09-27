import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejobticketComponent } from './updatejobticket.component';

describe('UpdatejobticketComponent', () => {
  let component: UpdatejobticketComponent;
  let fixture: ComponentFixture<UpdatejobticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatejobticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatejobticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
