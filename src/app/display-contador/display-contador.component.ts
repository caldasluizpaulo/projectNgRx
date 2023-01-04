import { map } from 'rxjs';
import { IAppState } from './../store/app.state';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  counter$ = this.store.select('app').pipe(map(e => e.counter));

  constructor(private store: Store<{app: IAppState}>) { }

  ngOnInit(): void {
  }

}
