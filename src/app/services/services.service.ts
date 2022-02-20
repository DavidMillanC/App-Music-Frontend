import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private url = 'http://localhost:3800/';

  constructor(private http: HttpClient) {}

  get(path: any) {
    return this.http.get<any>(this.url + path);
  }
  getById(path: any, _id: any) {
    return this.http.get<any>(this.url + path + '/' + _id);
  }
  save(path: any, data: any) {
    return this.http.post<any>(this.url + path, data);
  }
  update(path: any, data: any) {
    return this.http.put<any>(this.url + path + '/' + data._id, data);
  }
  delete(path: any, _id: any) {
    return this.http.delete<any>(this.url + path + '/' + _id);
  }
}
