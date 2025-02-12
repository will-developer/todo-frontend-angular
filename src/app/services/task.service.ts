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
}
