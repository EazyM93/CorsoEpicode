import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {

  completedTasks: Todo[] = [];

  loading: boolean = true;

  constructor(private todoSrv: TodoListService) { }

  ngOnInit(): void {

    // manda a schermo l'array
    setTimeout(() => {
      this.completedTasks = this.todoSrv.getList()
      this.loading = false;
    }, 2000)

  }

}
