import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder, FormControlName } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { FormdbService } from "../formdb.service";
import { PresentAdd } from '../qualification';

@Component({
  selector: 'app-editpresent',
  templateUrl: './editpresent.component.html',
  styleUrls: ['./editpresent.component.css']
})
export class EditpresentComponent implements OnInit {
permanant: FormGroup;
  arrPresent: PresentAdd[]=[];
pmobile;
  permanantAdd1;
  city1;
  country1;
  state1;
  district1;
  pincode1;
  phone11;
  phone21;
  fax1;
  personalmailId1;
  taskId1;
  constructor(private _actrouter: ActivatedRoute,
    private _data: FormdbService,
    private _router: Router) { }
  ngOnInit(): void {
    this.permanant=new FormGroup({
      addressDetails:new FormGroup({
        Id: new FormControl(),
        permanantadd:new FormControl(null,[Validators.required ]),
        city: new FormControl("bengaluru",[Validators.required ]),
        country: new FormControl(),
        state: new FormControl(),
        district: new FormControl(),
        pincode: new FormControl(),
        phone1: new FormControl(),
        phone2: new FormControl(),
        fax: new FormControl(),
        mobile: new FormControl(),
        sameaddress: new  FormControl(),
    }),
    emp_id: new FormControl(),
     presentadd: new FormControl(),
      pcity: new FormControl("bengaluru"),
      pcountry: new FormControl(),
      pstate: new FormControl(),
      pdistrict: new FormControl(),
      ppincode: new FormControl(),
      pphone1: new FormControl(),
      pphone2: new FormControl(),
      pfax: new FormControl(),
      pmobile: new FormControl(),

    })
    this.permanant.get('addressDetails').get('sameaddress').valueChanges.subscribe((x)=> this.Accessval(x, this.permanant.get('addressDetails').value));
    this.permanant.get('addressDetails').get('sameaddress').valueChanges.subscribe((a)=> this.edit(a));


    this.taskId1=this._actrouter.snapshot.params['id2'];
    console.log(this.taskId1);
    this._data.getAllPresentAddById(this.taskId1).subscribe((data:PresentAdd[])=>
    {
        console.log(data[0]);
       this.permanant.patchValue({
        emp_id: data[0].emp_id,
        presentadd: data[0].presentadd,
        pcity: data[0].pcity,
        pcountry: data[0].pcountry,
        pstate: data[0].pstate,
        pdistrict: data[0].pdistrict,
        ppincode: data[0].ppincode,
        pphone1:data[0].pphone1,
        pphone2: data[0].pphone2,
        pfax:data[0].pfax,
        pmobile: data[0].pmobile,
       })
      });
  }


  edit(d: boolean){
    if(d==true)
    {
      this.permanant.get('addressDetails').valueChanges.subscribe((f)=> this.Accessval(this.permanant.get('addressDetails').get('sameaddress').value,f))
    }
  }


  Accessval(val: boolean, val1: FormGroup){
    if(val==true){

      this. permanantAdd1=val1['permanantadd'];
      this.city1=val1['city'];
      this.state1=val1['state'];
      this.country1=val1['country'];
      this.district1=val1['district'];
      this.pincode1=val1['pincode'];
      this.phone21=val1['phone2'];
      this.phone11=val1['phone1'];
      this.fax1=val1['fax'];
      this.pmobile=val1['mobile'];

    }
 else{
      this.permanantAdd1=null;
      this.city1=null;
      this.state1=null;
      this.country1=null;
      this.district1=null;
      this.pincode1=null
      this.phone21=null
      this.phone11=null
      this.fax1=null
      this.pmobile=null
      }


  }

  presentedit(){

    this._data.updatePresentaddAdd(this.permanant.value).subscribe(
      (x)=>{
        this._router.navigate(['/show']);
      }
    )
    console.log(this.permanant.value);
  }
}


