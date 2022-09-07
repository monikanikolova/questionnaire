import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionnaireService } from '../services/questionnaire.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  public userAge: any;
  public subscription$: Subscription;
  constructor(private questionnaireService: QuestionnaireService) {
  }

  ngOnInit(): void {
    this.subscription$ = this.questionnaireService.serviceAnnounceSource$.subscribe((data: any) => {
      this.userAge = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
}
