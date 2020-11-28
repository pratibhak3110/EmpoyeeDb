import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfo, PermanantAdd, PresentAdd } from '../qualification';
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

      this._data.getAllPresentAdd().subscribe(
        (data:PresentAdd[])=>{
          this.arrPresent=data;
         });
  }

  OnBasicInfoEdit(item: BasicInfo){
    this._router.navigate(['/editbasic',item.EmpNo]);
  }

  OnPermanantEdit(item: PermanantAdd){
    this._router.navigate(['/editpermanant', item.emp_id])
  }
  OnPresentEdit(item: PresentAdd){
    this._router.navigate(['/editpresent', item.emp_id])
  }
}
