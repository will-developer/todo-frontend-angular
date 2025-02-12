import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/'; // Defines the base URL for the tasks API

  constructor(private http: HttpClient) {} // Injects the HttpClient service for making HTTP requests

  /**
   * Fetches all tasks from the backend API.
   * @returns {Observable<any>} An Observable that emits the task data.
   */
  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl); // Uses HttpClient to make a GET request to the API endpoint
  }
}
