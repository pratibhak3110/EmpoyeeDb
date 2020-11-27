import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BasicInfo, PermanantAdd, Qualification } from './qualification';

@Injectable({
  providedIn: 'root'
})
export class FormdbService {

    url1: string='http://localhost:3000/basicinfo/';
    url2: string='http://localhost:3000/permanantadd/';
    url3: string= 'http://localhost:3000/presentadd/';
    url4:  string='http://localhost:3000/qualification/';
    url5: string= 'http://localhost:3000/prevemp/';
    url6:  string='http://localhost:3000/skill/';
  constructor( private _http: HttpClient) { }
  getAllBasicInfo(){
    return this._http.get(this.url1);
  }

  getBasicInfoById(id){
    return this._http.get(this.url1+id);
   }

  addBasicInfo(item: BasicInfo){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log('Body ',body);
    return this._http.post(this.url1,body,{headers: head});
  }

  deleteBasicInfo(){}

  updateBasicInfo(item: BasicInfo){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url1+item.EmpNo, body,{headers: head});
  }

  getAllPermanantAdd(){
    return this._http.get(this.url2);
  }

  getAllPermanantAddById(id1){
    return this._http.get(this.url2+id1);
  }

  addPermanantAdd(item: PermanantAdd){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
     console.log('Body ',body);
    return this._http.post(this.url2,body,{headers: head});
  }

  updatePermanantAdd(item: PermanantAdd){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url2+item.emp_id, body,{headers: head});
  }

  addQualification(item: Qualification){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
     console.log('Body ',body);
    return this._http.post(this.url4,body,{headers: head});
  }
}
