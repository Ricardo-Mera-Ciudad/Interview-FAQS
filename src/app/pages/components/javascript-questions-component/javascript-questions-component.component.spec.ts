import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptQuestionsComponentComponent } from './javascript-questions-component.component';

describe('JavascriptQuestionsComponentComponent', () => {
  let component: JavascriptQuestionsComponentComponent;
  let fixture: ComponentFixture<JavascriptQuestionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavascriptQuestionsComponentComponent]
    });
    fixture = TestBed.createComponent(JavascriptQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
