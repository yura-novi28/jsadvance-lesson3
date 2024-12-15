import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from '../../interfaces/task.interface';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() valueInput!: string;
  @Input() valueBoolean!: boolean;
  @Output() numberSpan = new EventEmitter<number>();
  @Output() valueBooleanParent = new EventEmitter<boolean>();
  public arrTasks: Array<TaskInterface> = [];
  public indexTask!: number;
  public editBoolean = false;
  public inputEdit = '';
  public arrBoolean: Array<boolean> = []

  
  ngOnInit(){
    this.dataSpan(this.arrTasks.length);
  }
  

  ngDoCheck(){
    if(this.valueBoolean === true){
      this.valueBooleanParent.emit(false);
      let obj: TaskInterface = {goal: this.valueInput, progress: false};
      this.arrTasks.push(obj)
      this.dataSpan(this.arrTasks.length);
    }
  }

  dataSpan(n: number){
    this.numberSpan.emit(n);
  }

  deleteTask(index: number){
    this.arrTasks.splice(index, 1)
    this.dataSpan(this.arrTasks.length);

  }
  editTaskClick(index: number){
    this.indexTask = index;
    this.arrBoolean = this.arrTasks.map((item) => item.progress)
    this.arrTasks.forEach((item) => item.progress = false)
    this.editBoolean = true;
  }
  editTask(){
    this.editBoolean = false;
    this.arrTasks.forEach((item, i) => item.progress = this.arrBoolean[i]);
    this.arrTasks[this.indexTask].goal = this.inputEdit;
    this.inputEdit = '';
  }
}
