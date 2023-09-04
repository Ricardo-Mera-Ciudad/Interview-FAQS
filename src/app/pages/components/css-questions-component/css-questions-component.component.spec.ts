import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssQuestionsComponentComponent } from './css-questions-component.component';

describe('CssQuestionsComponentComponent', () => {
  let component: CssQuestionsComponentComponent;
  let fixture: ComponentFixture<CssQuestionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssQuestionsComponentComponent]
    });
    fixture = TestBed.createComponent(CssQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
