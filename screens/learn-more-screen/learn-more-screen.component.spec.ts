import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreScreenComponent } from './learn-more-screen.component';

describe('LearnMoreScreenComponent', () => {
  let component: LearnMoreScreenComponent;
  let fixture: ComponentFixture<LearnMoreScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
