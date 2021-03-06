import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsApiService {

  private apiKey = 'de2caec637b74bba8d8d1089d4c90aeb';
  constructor(private http: HttpClient) {}

  public getNews(startDate: string, endDate: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=petroleum&from=${startDate}&to=${endDate}&apiKey=${this.apiKey}`);
  }
}
