import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeformComponent } from './homeform.component';

describe('HomeformComponent', () => {
  let component: HomeformComponent;
  let fixture: ComponentFixture<HomeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
