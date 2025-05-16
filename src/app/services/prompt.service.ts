import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GeneratePromptResponse {
  title: string;
  story: string;
  comedian: string;
  date_created: string;
}

export interface ComedianInfo {
  name: string;
  name_comedian: string;
}

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  private apiUrl = 'http://localhost:8000/stories';

  constructor(private http: HttpClient) {}

  generatePrompt(prompt: string, comedian: string): Observable<GeneratePromptResponse> {
    return this.http.post<GeneratePromptResponse>(
      `${this.apiUrl}/generate`,
      { prompt, comedian },
      { withCredentials: true }
    );
  }

  getComedians(): Observable<ComedianInfo[]> {
    return this.http.get<ComedianInfo[]>(`${this.apiUrl}/all_comedians`, { withCredentials: true });
  }

  getHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`, { withCredentials: true });
  }

  deleteStory(storyId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${storyId}`, { withCredentials: true });
  }
}