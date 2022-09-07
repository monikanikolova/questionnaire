import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionnaireService {
  private serviceAnnounceSource = new Subject<any>();
  serviceAnnounceSource$ = this.serviceAnnounceSource.asObservable();

  publishData(data: any) {
    this.serviceAnnounceSource.next(data);
  }
}
