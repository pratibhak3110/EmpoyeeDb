import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfo, PermanantAdd } from '../qualification';
import { FormdbService } from '../formdb.service';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  arrBasicInfo: BasicInfo[]=[];
  arrPermanant: PermanantAdd[]=[];
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
  }

  OnBasicInfoEdit(item: BasicInfo){
    this._router.navigate(['/editbasic',item.EmpNo]);
  }

  OnPermanantEdit(item: PermanantAdd){
    this._router.navigate(['/editpermanant', item.emp_id])

  }
}
