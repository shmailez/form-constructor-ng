import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGptComponent } from './form-gpt.component';

describe('FormGptComponent', () => {
  let component: FormGptComponent;
  let fixture: ComponentFixture<FormGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
