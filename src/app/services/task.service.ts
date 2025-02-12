import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  /**
   * Adds a new task to the backend API.
   * @param {object} task - The task object to be added (e.g., { title: string, completed: boolean }).
   * @returns {Observable<any>} An Observable that emits the response from the API after task creation.
   */
  addTask(task: { title: string; completed: boolean }): Observable<any> {
    return this.http.post(this.apiUrl, task); // Uses HttpClient to make a POST request to the API endpoint with the task data
  }

  /**
   * Deletes a task from the backend API.
   * @param {any} task - The task object (or just the task ID) to be deleted. Assumes task object has an 'id' property.
   * @returns {Observable<any>} An Observable that emits the response from the API after task deletion.
   */
  deleteTask(task: any): Observable<any> {
    const deleteUrl = `${this.apiUrl}${task.id}/`; // Construct the API endpoint for deleting a specific task using its ID
    return this.http.delete(deleteUrl); // Use HttpClient to send a DELETE request to the specific task's API endpoint
  }

  /**
   * Updates an existing task in the backend API.
   * @param {any} task - The task object with updated properties (including the 'id').
   * @returns {Observable<any>} An Observable that emits the response from the API after task update.
   */
  updateTask(task: any): Observable<any> {
    const updateUrl = `${this.apiUrl}${task.id}/`; // Construct API endpoint for updating a specific task by ID
    return this.http.put(updateUrl, task); // Use HttpClient to send a PUT request to the task's API endpoint with the updated task data in the body
  }
}
