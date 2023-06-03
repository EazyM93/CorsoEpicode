import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // variabile che permette di gestire il task inserito in input
  newTask:string = '';

  // creo un array per gestire mandare a schermo i dati dell'array in service
  todoList:Todo[] = [];

  loading:boolean = true;

  constructor(private todoSrv: TodoListService) { } // todoSrv è una variabile cche ci permette di richiamare i metodi del service

  ngOnInit():void {

    // manda a schermo l'array
    setTimeout(() => {
      this.todoList = this.todoSrv.getList()
      this.loading = false;
    }, 2000)

  }

  // funzione che gestisce quando premiamo l'icona del task completato o cancellato cercando in base all' id
  changes(id:number, change:string):void{

    const arr = this.todoSrv.getList()

    arr.forEach(e => {

      if(e.id === id){

        setTimeout(() => {
          (change === 'done') ? e.completed = true : arr.splice(arr.indexOf(e), 1);
        }, 2000)

      }

    })

  }

  // funzione che gestisce quando inseriamo un nuovo task
  addTask(inputTask: string):void{

    setTimeout(() => {
      this.todoSrv.addTodo(inputTask); // richiama il metodo del service per aggiungere il task
      this.newTask = '';
    }, 2000)

  }

  // clear list
  clearList():void{
    this.todoSrv.clearList();
    setTimeout(() => {
      this.todoList = this.todoSrv.getList()
    }, 2000)
  }

  // check delle proprietà completed, ci sono due modi per eseguire questo check: filter o every
  checkCompleted():boolean{

    return this.todoList.every(e => e.completed === true);
    // this.todoList.filter(e => e.completed === true).length > 0

  }

}
