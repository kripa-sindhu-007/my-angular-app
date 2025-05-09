import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string; 
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';

  private tasksService = inject(TasksService);


  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.tasksService.addTask(
      this.userId,
      {
        title: this.enteredTitle,
        description: this.enteredDescription, 
        date: this.enteredDate,
      }
    );
    this.close.emit();
  } 
}
