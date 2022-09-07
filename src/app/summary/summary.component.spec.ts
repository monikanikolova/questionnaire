import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { SummaryComponent } from './summary.component';
import { QuestionnaireService } from '../services/questionnaire.service';
import { MatRadioModule } from '@angular/material/radio';

describe('SummaryComponent', () => {
  let summaryComponent: SummaryComponent;
  let questionnaireComponent: QuestionnaireComponent
  let summaryFixture: ComponentFixture<SummaryComponent>;
  let questionnaireFixture: ComponentFixture<QuestionnaireComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryComponent, QuestionnaireComponent],
      imports: [MatRadioModule],
      providers: [QuestionnaireService]
    })
      .compileComponents();
    summaryFixture = TestBed.createComponent(SummaryComponent);
    questionnaireFixture = TestBed.createComponent(QuestionnaireComponent);
    summaryComponent = summaryFixture.componentInstance;
    questionnaireComponent = questionnaireFixture.componentInstance;
    questionnaireFixture.detectChanges();
    summaryFixture.detectChanges();
  });

  it('should create', () => {
    expect(summaryComponent).toBeTruthy();
  });
  it('should click and update age summary value', async () => {
    const element = summaryFixture.debugElement.query(By.css('#summary-age'));
    const spanEl = element.nativeElement;
    const radioElement = questionnaireFixture.debugElement.query(By.css('.questionnaire-radio-button'));
    const clickableElement = radioElement.query(By.css('.mat-radio-container'));
    clickableElement.nativeElement.click();
    summaryFixture.detectChanges();
    expect(spanEl.innerHTML).toContain('&lt; 25');
  });
});
