import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../app.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


  todos: ITodo[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void{
    this.httpClient.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos/')
    .subscribe({
      next: (res) => this.todos = res
    });

  }

}
