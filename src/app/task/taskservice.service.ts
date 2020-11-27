import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  url1: string='http://localhost:3000/basicinfo/';
  url2: string='http://localhost:3000/permanantadd/';
  url3: string='http://localhost:3000/presentadd/';
  url4: string='http://localhost:3000/qualification/';
  url5: string='http://localhost:3000/prevemp/';
  url6: string='http://localhost:3000/skill/';

  constructor( private _http: HttpClient) { }

  getAllBasicInfo(){
    return this._http.get(this.url1);
  }

  getAllPermanantAdd(){
    return this._http.get(this.url2);
  }
  getAllPresentAdd(){
    return this._http.get(this.url3);
  }
  getAllQualification(){
    return this._http.get(this.url4);
  }
  getAllPrevEmp(){
    return this._http.get(this.url5);
  }

  getAllSkill(){
    return this._http.get(this.url6);
  }

}
