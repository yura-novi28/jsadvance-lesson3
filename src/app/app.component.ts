import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { HomeworkComponent } from './homework/homework.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent, HomeworkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homework';
}
