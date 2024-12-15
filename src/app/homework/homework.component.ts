import { Component, Input } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from '../interfaces/task.interface';

@Component({
  selector: 'app-homework',
  imports: [ChildComponent, FormsModule],
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.scss'
})
export class HomeworkComponent {
  public spanNumber!: number;
  public inputAdd = '';
  public valueButton = false;
  

  async addSpanNumber(n: number){
    this.spanNumber = await n;
  }
  async editCheckBoolean(n: boolean){
    this.valueButton = await n;
    this.inputAdd = '';
  }



  sendValue(){
    this.valueButton = true;
  }
}
