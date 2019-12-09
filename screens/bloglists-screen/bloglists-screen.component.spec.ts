import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglistsScreenComponent } from './bloglists-screen.component';

describe('BloglistsScreenComponent', () => {
  let component: BloglistsScreenComponent;
  let fixture: ComponentFixture<BloglistsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglistsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglistsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
