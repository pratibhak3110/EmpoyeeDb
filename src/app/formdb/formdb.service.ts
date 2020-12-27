import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BasicInfo, PermanantAdd, Qualification, PresentAdd, Employee, Skill } from './qualification';

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
  deleteBasicInfo(id){
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url1+id, {headers:head} );
  }
  updateBasicInfo(item: BasicInfo){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url1+item.emp_id, body,{headers: head});
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
    return this._http.post<PermanantAdd>(this.url2,item,{headers: head});
  }
  deletePermanantAdd(id1){
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url2+id1, {headers:head} );
  }
  updatePermanantAdd(item: PermanantAdd){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url2+item.emp_id, body,{headers: head});
  }




  getAllQualification(){
    return this._http.get(this.url4);
  }
  getQualificationById(id){
    return this._http.get(this.url4+id);
   }
  addQualification(item: Qualification){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
     console.log('Body ',body);
    return this._http.post(this.url4,body,{headers: head});
  }
  deleteQualification(id2){
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url4+id2, {headers:head} );
  }
  updateQualification(item: Qualification){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log(body);
    return this._http.put(this.url4+item.emp_id, body,{headers: head});
  }




  getAllPrevEmp(){
    return this._http.get(this.url5);
  }
  getAllEmpById(id3){
    return this._http.get(this.url5+id3);
  }
  addPrevEmp(item: Employee){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
     console.log('Body ',body);
    return this._http.post(this.url5,body,{headers: head});
  }
  deletePrevEmp(id3){
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url5+id3, {headers:head} );
  }
  updatePrevEmp(item: Employee){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    console.log(body);
    return this._http.put(this.url5+item.emp_id, body,{headers: head});
  }



  getAllSkill(){
    return this._http.get(this.url6);
  }
  getAllSkillById(id4){
    return this._http.get(this.url6+id4);
   }
  addSkill(item: Skill){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
     console.log('Body ',body);
    return this._http.post(this.url6,body,{headers: head});
  }
  deleteSkill(id4){
    let head = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url6+id4, {headers:head} );
  }
  updateSkill(item: Skill){
    let head= new HttpHeaders().set('Content-Type','application/json');
    let body= JSON.stringify(item);
    return this._http.put(this.url6+item.emp_id, body,{headers: head});
  }
}
