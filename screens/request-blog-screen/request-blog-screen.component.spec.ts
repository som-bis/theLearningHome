import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBlogScreenComponent } from './request-blog-screen.component';

describe('RequestBlogScreenComponent', () => {
  let component: RequestBlogScreenComponent;
  let fixture: ComponentFixture<RequestBlogScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBlogScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBlogScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
