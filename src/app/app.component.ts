import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState, incrementaContador, decrementaContador } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<{app: IAppState}>){}

  title = 'projectNgRx';
  counter$ = this.store.select('app').pipe( map(e => e.counter));

  incrementaContador(){
    this.store.dispatch(incrementaContador())
  }

  decrementaContador(){
    this.store.dispatch(decrementaContador())
  }

}
