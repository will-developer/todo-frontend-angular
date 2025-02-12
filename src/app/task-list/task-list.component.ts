import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, NgFor], // Imports FormsModule for ngModel and NgFor for *ngFor directive
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = []; // Array to store the tasks fetched from the service

  constructor(private taskService: TaskService) {} // Inject TaskService in the constructor

  ngOnInit(): void {
    this.loadTasks(); // Call loadTasks when the component initializes
  }

  /**
   * Loads tasks from the TaskService and updates the component's tasks array.
   */
  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      // Subscribe to the getTasks Observable
      this.tasks = data; // Assign the received task data to the tasks array
    });
  }
}
