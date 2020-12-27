import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicInfo } from '../qualification';
import { FormdbService } from "../formdb.service";
@Component({
  selector: 'app-editbasicinfo',
  templateUrl: './editbasicinfo.component.html',
  styleUrls: ['./editbasicinfo.component.css']
})
export class EditbasicinfoComponent implements OnInit {
  basicInfoEdit: FormGroup;
  constructor(private _actroute: ActivatedRoute,
    private _data: FormdbService,
    private _router: Router) { }
taskID;
age;

  ngOnInit(): void {
    this.basicInfoEdit= new FormGroup({
      emp_id: new FormControl(),
       EmpNo: new FormControl(' ',[Validators.required]),
        Title: new FormControl(' ',[Validators.required]),
        Initial: new FormControl(),
        FirstName: new FormControl(' ',[ Validators.required]),
        MiddleName: new FormControl(),
        LastName: new FormControl(),
        Gender: new FormControl("male"),
        DOB: new FormControl(' ',[Validators.required ]),
        EmpAge: new FormControl(),
        OPhone: new FormControl(),
        PMobile:new FormControl('',[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        OMail: new FormControl(),
        PMail: new FormControl(' ',[Validators.email]),
        PMail2: new  FormControl(),
        PMail3: new FormControl(),
        Photo: new FormControl(),
        Birth: new FormControl(' ',[ Validators.required]),
        Domicile: new FormControl(),
        Religion: new FormControl(),
        Caste: new FormControl(),
        Nationality: new FormControl(' ',[Validators.required ]),
        Voter: new FormControl(),
        PanNo: new FormControl(' ',[Validators.required ]),
        Adhar: new FormControl(' ',[Validators.required ]),
        Status: new FormControl("married"),
        Child: new FormControl(),
        MDate: new FormControl(),
        SName: new FormControl(),
        BankName: new FormControl(' ',[ Validators.required]),
        AccntType: new FormControl(),
        Payment: new FormControl(' ',[Validators.required ]),
        AccntNo: new FormControl(' ',[ Validators.required]),
        BankDetail: new FormControl(),
        IFSC: new FormControl(' ',[ Validators.required]),
        RBankNm: new FormControl(),
        RAccntNo: new FormControl(),
    });

    this.basicInfoEdit.get('DOB').valueChanges.subscribe((x)=>this.updateEmpAge(x));


    this.taskID=this._actroute.snapshot.params['id'];
    this._data.getBasicInfoById(this.taskID).subscribe(
      (data:BasicInfo[])=>{
       this.basicInfoEdit.patchValue({
        emp_id: data[0].emp_id,
        EmpNo:data[0].EmpNo,
        Title:data[0].Title,
        Initial:data[0].Initial,
        FirstName:data[0].FirstName,
        MiddleName:data[0].MiddleName,
        LastName:data[0].LastName,
        Gender:data[0].Gender,
        DOB:data[0].DOB,
        EmpAge:data[0].EmpAge,
        OPhone:data[0].OPhone,
        PMobile:data[0].PMobile,
        OMail:data[0].OMail,
        PMail:data[0].PMail,
        PMail2:data[0].PMail2,
        PMail3:data[0].PMail3,
        //Photo:data[0].Photo,
        Birth:data[0].Birth,
        Domicile:data[0].Domicile,
        Religion:data[0].Religion,
        Caste:data[0].Caste,
        Nationality:data[0].Nationality,
        Voter:data[0].Voter,
        PanNo:data[0].PanNo,
        Adhar:data[0].Adhar,
        Status:data[0].Status,
        Child:data[0].Child,
        MDate:data[0].MDate,
        SName:data[0].SName,
        BankName:data[0].BankName,
        AccntType:data[0].AccntType,
        Payment:data[0].Payment,
        AccntNo:data[0].AccntNo,
        BankDetail:data[0].BankDetail,
        IFSC:data[0].IFSC,
        RBankNm:data[0].RBankNm,
        RAccntNo:data[0].RAccntNo,
       });
      }
    )

  }

  basicedit(){
    this._data.updateBasicInfo(this.basicInfoEdit.value).subscribe(
      (x)=>{
       // console.log('abc',this.basicInfoEdit.value);
        this._router.navigate(['/show']);
      })

  }

  updateEmpAge(val: Date){
    var today = new Date();
    var year= today.getFullYear();
    var birthDate= new Date(val).getFullYear();
    var a=year-birthDate;
    //console.log(a);
    //this.age=a;
    this.basicInfoEdit.get('EmpAge').setValue(a);
  }

}
