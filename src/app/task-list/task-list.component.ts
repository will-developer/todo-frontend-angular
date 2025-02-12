import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];
  newTask = ''; // Property to hold the value of the new task input

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  /**
   * Adds a new task using the TaskService and refreshes the task list.
   */
  addTask(): void {
    if (this.newTask.trim()) {
      // Check if newTask is not empty after trimming whitespace
      this.taskService
        .addTask({
          // Call the addTask method of the TaskService
          title: this.newTask, // Pass the newTask as the title for the new task
          completed: false, // Set initial completed status to false
        })
        .subscribe(() => {
          // Subscribe to the Observable returned by addTask
          this.loadTasks(); // Reload the task list after successfully adding a task
          this.newTask = ''; // Clear the newTask input field
        });
    }
  }
  toggleCompleted(task: any): void {
    // Still need to implement backend update for this. Just toggling locally for now.
    task.completed = !task.completed;
  }

  /**
   * Deletes a task using the TaskService and refreshes the task list.
   * @param {any} task - The task object to be deleted.
   */
  deleteTask(task: any): void {
    this.taskService.deleteTask(task).subscribe(() => {
      // Call deleteTask method of TaskService
      this.tasks = this.tasks.filter((t) => t !== task); // Optimistically remove the task from the local array
      this.loadTasks(); // Re-fetch tasks from the backend to ensure data consistency (Alternative: remove optimistically and refresh)
    });
  }

  enableEditMode(task: any): void {
    task.editing = true; // Set 'editing' property to true to switch to edit mode in template
  }

  disableEditMode(task: any): void {
    task.editing = false; // Set 'editing' property to false to switch back to display mode
  }

  saveTask(task: any): void {
    this.taskService.updateTask(task).subscribe(() => {
      // Call updateTask method of TaskService
      this.disableEditMode(task); // Disable edit mode after successful save
      this.loadTasks(); // Re-fetch tasks to reflect updated data (Alternative: update task in local array optimistically)
    });
  }
}
