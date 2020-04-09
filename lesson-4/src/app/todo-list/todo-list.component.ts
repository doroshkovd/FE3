import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  tasks: string[] = [];
  doneTasks: string[] = [];
  currentTask = '';

  public onAdd() {
    this.tasks = [...this.tasks, this.currentTask];
    this.currentTask = '';
  }

  public onRemove(index): string[] {
    let removed: string[];
    removed = this.tasks.splice(index, 1);
    console.log(this.tasks);
    return removed;
  }

  public onDone(index) {
    this.doneTasks = [...this.doneTasks, ...this.onRemove(index)];
  }
}
