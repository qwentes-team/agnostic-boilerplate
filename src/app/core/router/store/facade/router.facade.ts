import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RouterBack, RouterGo} from './../actions';
import {selectRouterActive, selectRouterActiveParams} from './../selectors';
import {RouterModule} from './../../router.module';

@Injectable({
  providedIn: RouterModule,
})
export class RouterFacade {
  public activeRoute$ = this.store.pipe(select(selectRouterActive));
  public activeParams$ = this.store.pipe(select(selectRouterActiveParams));

  constructor(private store: Store<any>) {}

  public go(payload: any): void {
    this.store.dispatch(new RouterGo(payload));
  }

  public back(): void {
    this.store.dispatch(new RouterBack());
  }
}
