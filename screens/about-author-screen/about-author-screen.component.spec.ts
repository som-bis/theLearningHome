import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAuthorScreenComponent } from './about-author-screen.component';

describe('AboutAuthorScreenComponent', () => {
  let component: AboutAuthorScreenComponent;
  let fixture: ComponentFixture<AboutAuthorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAuthorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAuthorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
