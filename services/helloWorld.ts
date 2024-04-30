import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HelloWorld } from '../models/helloworld.model';

const baseUrl = 'http://localhost:5004/api/Home';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldlService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<HelloWorld> {
    return this.http.get<HelloWorld>(baseUrl);
  }
 
}