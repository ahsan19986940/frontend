import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinechecklistComponent } from './routinechecklist.component';

describe('RoutinechecklistComponent', () => {
  let component: RoutinechecklistComponent;
  let fixture: ComponentFixture<RoutinechecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutinechecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutinechecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
