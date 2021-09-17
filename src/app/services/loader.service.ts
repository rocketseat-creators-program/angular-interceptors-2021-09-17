import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject = new BehaviorSubject<boolean>(false);

  startLoading(): void {
    this.loaderSubject.next(true);
  }

  stopLoading(): void {
    this.loaderSubject.next(false);
  }

  isLoadingState(): Observable<boolean> {
   return this.loaderSubject.asObservable().pipe(
     delay(0) // Prevents https://angular.io/errors/NG0100
   )
  }
}
