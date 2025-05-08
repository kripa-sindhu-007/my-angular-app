import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string;
  isAddingTask= false;

  constructor(private tasksService: TasksService) {}
  

  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId);
  }

  get selectedUserName() {
    return DUMMY_USERS.find((user) => user.id === this.userId)?.name;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
