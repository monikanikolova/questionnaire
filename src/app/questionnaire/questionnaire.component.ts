import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from '../services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  constructor(private questionnaireservice: QuestionnaireService) { }
  ageOptions: string[] = ['< 25', '> 25 and < 35', '> 35'];
  
  setAge(age: string) {
    this.questionnaireservice.publishData(age);
  }
}
