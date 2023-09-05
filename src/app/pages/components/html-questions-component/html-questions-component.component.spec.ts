import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlQuestionsComponentComponent } from './html-questions-component.component';

describe('HtmlQuestionsComponentComponent', () => {
  let component: HtmlQuestionsComponentComponent;
  let fixture: ComponentFixture<HtmlQuestionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlQuestionsComponentComponent]
    });
    fixture = TestBed.createComponent(HtmlQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
