import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfo, PermanantAdd, PresentAdd,Qualification,Employee, Skill } from '../qualification';
import { FormdbService } from '../formdb.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  arrBasicInfo: BasicInfo[]=[];
  arrPermanant: PermanantAdd[]=[];
  arrPresent: PresentAdd[]=[];
  arrQualification: Qualification[]=[];
  arrPrevEmp: Employee[]=[];
  arrSkill:Skill[]=[];
  constructor(private _router: Router,
    private _data: FormdbService) { }

  ngOnInit(): void {
    this._data.getAllBasicInfo().subscribe(
      (data:BasicInfo[])=>{
        this.arrBasicInfo=data;
      });

      this._data.getAllPermanantAdd().subscribe(
        (data:PermanantAdd[])=>{
          this.arrPermanant=data;
        });

         this._data.getAllQualification().subscribe(
          (data:Qualification[])=>{
            this.arrQualification=data;
           });
           this._data.getAllPrevEmp().subscribe(
            (data:Employee[])=>{
              this.arrPrevEmp=data;
             });
             this._data.getAllSkill().subscribe(
              (data:Skill[])=>{
                this.arrSkill=data;
               });
  }

  OnBasicInfoEdit(item: BasicInfo){
    this._router.navigate(['/editbasic',item.EmpNo]);
  }

  OnPermanantEdit(item: PermanantAdd){
    this._router.navigate(['/editpermanant', item.emp_id]);
  }
  OnPresentEdit(item: PresentAdd){
    this._router.navigate(['/editpresent', item.emp_id]);
  }

  OnQualEdit(item: Qualification){
    this._router.navigate(['/editqual', item.emp_id]);
  }
  OnPrevempEdit(item){
    this._router.navigate(['/editemp', item.emp_id]);
  }
  OnSkillEdit(item){
    this._router.navigate(['/editskill', item.emp_id]);
  }



  OnBasicInfoDelete(item: BasicInfo){
    this._data.deleteBasicInfo(item.emp_id).subscribe((x:any)=>
    {
      this.arrBasicInfo.splice(this.arrBasicInfo.indexOf(item), 1);
      this._router.navigate(['/show']);
    });
  }
}
