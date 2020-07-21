import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitoComponent } from './navito.component';

describe('NavitoComponent', () => {
  let component: NavitoComponent;
  let fixture: ComponentFixture<NavitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
