import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  baseURL:any = 'http://localhost:8080'

  ngOnInit(){
    this.getAllData()
  }

  getAllData(){

    return this.http.post(`${this.baseURL}/dc-data`,{"pass":"germany-uae-3227"});

  }

  getAllRemarks(){

    return this.http.post(`${this.baseURL}/dc-remarks`,{"pass":"germany-uae-3227"});

  }
}
