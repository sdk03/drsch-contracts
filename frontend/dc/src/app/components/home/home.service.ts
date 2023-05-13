import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  baseURL:any = 'http://18.168.252.4:8080'

  ngOnInit(){
    this.getAllData()
  }

  getAllData(){

    return this.http.post(`${this.baseURL}/dc-data`,{"pass":"germany-uae-3227"});

  }

  getAllRemarks(){

    return this.http.post(`${this.baseURL}/dc-remarks`,{"pass":"germany-uae-3227"});

  }

  addNewRemarkConfirmed(db_id:any,form_data:any){
    return this.http.post(`${this.baseURL}/dc-addRemark`,{"pass":"germany-uae-3227","cdb_id":db_id,"remarks":form_data.remarks,"remarks_header":form_data.remarks_header});
  }

  deleteRemarkConfirmed(remarks_id:any){
    return this.http.post(`${this.baseURL}/dc-delRemark`,{"pass":"germany-uae-3227","remarks_id":remarks_id});

  }

  updateRemarkConfirmed(remarks_id:any,remarks_header:any,remarks:any){
    return this.http.post(`${this.baseURL}/dc-updRemark`,{"pass":"germany-uae-3227","remarks_id":remarks_id,"remarks":remarks,"remarks_header":remarks_header});
  }

  addNewContract(formData:any){
    
    return this.http.post(`${this.baseURL}/dc-addContract/germany-uae-3227`,formData);
  }

  deleteContract(db_id:any){
    return this.http.post(`${this.baseURL}/dc-delContract`,{"pass":"germany-uae-3227",db_id:db_id});

  }

  updateContract(db_id:any,formData:any){

    formData["pass"] = "germany-uae-3227";
    formData["db_id"] = db_id
    return this.http.post(`${this.baseURL}/dc-updContract`,formData);
  }
}