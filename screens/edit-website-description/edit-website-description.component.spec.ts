import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWebsiteDescriptionComponent } from './edit-website-description.component';

describe('EditWebsiteDescriptionComponent', () => {
  let component: EditWebsiteDescriptionComponent;
  let fixture: ComponentFixture<EditWebsiteDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWebsiteDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWebsiteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
