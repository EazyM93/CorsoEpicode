import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';

const routes: Route[] = [

  { path: '', component: TodoComponent},
  { path: 'completed-task', component: CompletedTaskComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
