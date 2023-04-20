import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class StateSavedService {
  private isSaved$ = new BehaviorSubject<boolean>(false);
  
  get savedStatus() {
    return this.isSaved$.asObservable();
  }
  setSavedStatus(status: boolean) {
    if (status === undefined) status = false;
    this.isSaved$.next(status);
  }
}
