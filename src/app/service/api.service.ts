import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from './model';

const API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public sendMail(sender, subject, body) {
    return this.http.post<Response>(`${API}/mail`, { sender, subject, body })
      .toPromise();
  }

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${API}/news`);
  }
}
