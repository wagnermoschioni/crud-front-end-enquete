import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaEnqueteFormComponent } from './nova-enquete-form.component';

describe('NovaEnqueteFormComponent', () => {
  let component: NovaEnqueteFormComponent;
  let fixture: ComponentFixture<NovaEnqueteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaEnqueteFormComponent]
    });
    fixture = TestBed.createComponent(NovaEnqueteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
