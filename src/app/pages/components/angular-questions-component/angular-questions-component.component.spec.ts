import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQuestionsComponentComponent } from './angular-questions-component.component';

describe('AngularQuestionsComponentComponent', () => {
  let component: AngularQuestionsComponentComponent;
  let fixture: ComponentFixture<AngularQuestionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularQuestionsComponentComponent]
    });
    fixture = TestBed.createComponent(AngularQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
