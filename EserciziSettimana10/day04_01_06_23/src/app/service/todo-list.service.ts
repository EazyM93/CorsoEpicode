// service che contiene l'array e tutte le proprietà necessarie a manipolarlo

import { Injectable } from '@angular/core';
import { Todo } from '../models/todo'; // importa l'interfaccia todo

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  taskList:Todo[] = []; // array ceh conterrà i nostri task, del tipo dell'interfaccia al fine di dirgli che conterrà oggetti costruiti in quel modo

  constructor() { }

  //metodo che ha come parametro un title, sul quale costruisce un oggetto e poi lo inserisce nell'array
  addTodo(title: string):void { this.taskList.push({id: this.taskList.length + 1, title, completed: false}) }

  // metodo ceh ritorna l'array
  getList():Todo[] { return this.taskList }


}
