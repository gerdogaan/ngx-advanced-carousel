import {ResizeObserver} from '@juggle/resize-observer';
import { Observable, Subscriber } from 'rxjs';
import { debounceTime, finalize, tap } from 'rxjs/operators';

/**
 * An observable creator for element resize.
 * @param elm the watch element.
 * @param cb when resize complete, call back function.
 * @param time resize emit time, default is 200
 */
export function resizeObservable(
  elm: HTMLElement,
  cb: () => void,
  time = 200,
): Observable<any> {
  let elmObserve$: ResizeObserver;
  return new Observable((observer: Subscriber<any>) => {
    elmObserve$ = new ResizeObserver((entries, obs) => {
      observer.next(elmObserve$);
    });
    elmObserve$.observe(elm);
  }).pipe(
    debounceTime(time),
    tap(() => {
      cb();
    }),
    finalize(() => {
      elmObserve$.unobserve(elm);
      elmObserve$.disconnect();
    }),
  );
}
