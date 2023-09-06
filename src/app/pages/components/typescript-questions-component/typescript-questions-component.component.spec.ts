import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptQuestionsComponentComponent } from './typescript-questions-component.component';

describe('TypescriptQuestionsComponentComponent', () => {
  let component: TypescriptQuestionsComponentComponent;
  let fixture: ComponentFixture<TypescriptQuestionsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypescriptQuestionsComponentComponent]
    });
    fixture = TestBed.createComponent(TypescriptQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
