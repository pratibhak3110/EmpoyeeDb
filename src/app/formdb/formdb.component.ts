import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, PermanantAdd, Qualification } from '../task/qualification';
import { FormdbService } from "./formdb.service";
import { BasicInfo } from "./qualification";

@Component({
  selector: 'app-formdb',
  templateUrl: './formdb.component.html',
  styleUrls: ['./formdb.component.css']
})
export class FormdbComponent implements OnInit {
  flag:boolean=true;
  flag1: boolean=false;
  flag2: boolean=false;
  flag3: boolean=false;
  flag4: boolean=false;
  flag5: boolean=false;
  flag6: boolean= false;
  age:number;

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
  permanant: FormGroup;
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
signupForm: FormGroup;
basicInfo: FormGroup;
arrBasicInfo: BasicInfo[]=[];
arrPermanantAdd: PermanantAdd[]=[];
arrqualification: Qualification[]=[];
arremp: Employee[]=[];
City= ["Mumbai","Pune","Nagpur","Delhi", "Hyderabad","Chennai", "Thane","Nashik","Kolhapur","Sangli"];

  constructor( private fb: FormBuilder,
    private _data: FormdbService,
    private _router: Router) { }

  ngOnInit(): void {

    this.signupForm= new FormGroup({

      basicInfo: new FormGroup({
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
      }),


    //   addressDetails: new FormGroup({
    //     permanantadd: new FormControl(null,[]),
    //     city: new FormControl("bengaluru",[ ]),
    //     country: new FormControl(),
    //     state: new FormControl(),
    //     district: new FormControl(),
    //     pincode: new FormControl(),
    //     phone1: new FormControl(),
    //     phone2: new FormControl(),
    //     fax: new FormControl(),
    //     mobile: new FormControl(),
    //     sameaddress: new  FormControl(),
    //   }),

    //   presentAdd: new FormGroup({
    //   presentadd: new FormControl(null,[]),
    //   pcity: new FormControl("bengaluru",[ ]),
    //   pcountry: new FormControl(),
    //   pstate: new FormControl(),
    //   pdistrict: new FormControl(),
    //   ppincode: new FormControl(),
    //   pphone1: new FormControl(),
    //   pphone2: new FormControl(),
    //   pfax: new FormControl(),
    //   pmobile: new FormControl(),
    //   }),
    // });
  });

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

  }),

    this.form= this.fb.group({
      qualification_details: this.fb.array([this.qualification_group()]),
    });
    this.form1= this.fb.group({
      emp_details: this.fb.array([this.emp_group()]),
    });

    this.form2= this.fb.group({
      skill_details: this.fb.array([this.skill_group()]),
    });



    this.signupForm.get('basicInfo').get('DOB').valueChanges.subscribe((x)=>this.updateEmpAge(x));
    this.permanant.get('addressDetails').get('sameaddress').valueChanges.subscribe((x)=> this.Accessval(x, this.permanant.get('addressDetails').value));
    this.permanant.get('addressDetails').get('sameaddress').valueChanges.subscribe((a)=> this.edit(a));
  }

  updateEmpAge(val: Date){
    var today = new Date();
    var year= today.getFullYear();
    var birthDate= new Date(val).getFullYear();
    var a=year-birthDate;
    //console.log(a);
    //this.age=a;
    this.signupForm.get('basicInfo').get('EmpAge').setValue(a);
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
      this.personalmailId1=val1['mobile'];

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
      this.personalmailId1=null
      }


  }



  OnNext1Click(){
    this.flag= false;   //first page
    this.flag1= true;  //second page
    this.flag2=false;  //third page
    this.flag3=false;
   // console.log(this.signupForm.get('basicInfo'));
  }

  OnNext2Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    //console.log(this.signupForm.get('addressDetails'));
  }
  OnPrevious2Click(){
    this.flag=true;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
  }
  OnNext3Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
  }
  OnPrevious3Click(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
  }
  OnNext4Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;
  }
  OnPrevious4Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
  }

  OnNext5Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5= true;
  }
  OnPrevious5Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;

  }
  onclick()
  {
    this.flag6= !this.flag6;
  }
  OnSaveClick(){
    if(this.signupForm.get('basicInfo').status=='VALID'){
    this._data.addBasicInfo(this.signupForm.get('basicInfo').value).subscribe(
      (x:any)=>{
         if(x.affectedValue==1){
          this.arrBasicInfo.push(this.signupForm.get('basicInfo').value);
   alert('Saved Successfully');
    console.log('new details', this.signupForm.get('basicInfo').value);

        }else if(x.code=='ER_DUP_ENTRY'){
          alert('Duplicate')
        }

      });}else{
        alert('not valid')
      }
    // alert('Saved Successfully');
    // console.log(this.signupForm.get('basicInfo').value);
  }

  OnBasicInfoEdit(item: BasicInfo){
    this._router.navigate(['/editbasic',item.EmpNo]);
  }

  onSave1Click(){
    if(this.permanant.get('addressDetails').status=='VALID'){
      this._data.addPermanantAdd(this.permanant.get('addressDetails').value).subscribe(
        (x:any)=>{
           if(x.affectedValue==1){
            this.arrPermanantAdd.push(this.permanant.get('addressDetails').value);
     alert('Saved Successfully');
      console.log('new details', this.permanant.get('addressDetails').value);

          }else if(x.code=='ER_DUP_ENTRY'){
            alert('Duplicate')
          }

        });}else{
          alert('not valid')
        }
  }
  OnSave2Click(){
    alert('Saved Successfully');
  console.log(this.form.get('qualification_details').value);
  }
  OnSave3Click(){
    alert('Saved Successfully');
    console.log(this.form.get('emp_details').value);
  }


  qualification_group(){
    return this.fb.group
    ({
      degree: new FormControl(null,[Validators.required]),
      institute:new FormControl (null,[Validators.required ]),
      pyear: new FormControl (null,[ Validators.required]),
      score: new FormControl (null,[Validators.required ]),
      area: new FormControl (null,[Validators.required ]),

    });
  }

onAddDetail(){

    if(this.form.get('qualification_details').status=='VALID'){
      this._data.addQualification(this.form.get('qualification_details').value).subscribe(
        (x:any)=>{
           if(x.affectedValue==1){
            this.arrqualification.push(this.form.get('qualification_details').value);
     alert('Saved Successfully');
      console.log('new details', this.form.get('qualification_details').value);

          }else if(x.code=='ER_DUP_ENTRY'){
            alert('Duplicate')
          }

        });}else{
          alert('not valid')
        }
  // alert('Saved Successfully');
  //   this.arrqualification.push(this.form.get('qualification_details').value);
  //   console.log(this.arrqualification);
  }

get qualiArray()
{
  return<FormArray>this.form.get('qualification_details');
}

//add the qualicatin box
addqualification()
{
  this.qualiArray.push(this.qualification_group());
}

//delete the item from Qualification table
deletequalification(index)
{
this.qualiArray.removeAt(index);
}


duplicatequal(qualification):boolean {
  let myarray= this.getQual(this.form);
  let test= myarray.filter(data=>data.controls.degree.value==qualification && qualification!=null)
  if(test.length>1)
  {
    return true;
  }
  else{
    return false;
  }
}
getQual(form): Array<any> {
  return form.controls.qualification_details.controls;
}

myReset(index)
{
this.qualiArray.reset(index);
}




onAddEmp(){
  alert('Saved Successfully');
  this.arremp.push(this.form1.get('emp_details').value);
  console.log(this.arremp);
}

get empArray()
{

  return<FormArray>this.form1.get('emp_details');
}

addEmployee()
{

  this.empArray.push(this.emp_group());
}
deleteEmployee(index){
  this.empArray.removeAt(index);
}

myResetemp(index)
{
this.empArray.reset(index);
}

emp_group(){
return this.fb.group({
  fromto: new FormGroup({
    fdate: new  FormControl( null, [Validators.required  ]),
    tdate: new  FormControl( null, [ Validators.required ]),
},
  [this.fromToDate('fdate', 'tdate').bind(this)]
),
  companynm:new FormControl(null,[ Validators.required]),
  designation:new FormControl(null,[ Validators.required]),
  rexp: new FormControl(null,[Validators.required ]),
  nrexp: new FormControl(null,[Validators.required ])
})
}

fromToDate(fromDate: string, toDate: string)
{
return (group: FormGroup): {[key: string]: any} => {
  let f = group.controls[fromDate];
  let t = group.controls[toDate];
  if (f.value > t.value) {
    return {
      dates: "Date from should be less than Date to"
    };
  }
  return {};
}
}
timeCalculation(val: Date){
let myArray = this.dategroup(this.form1);
var fyear= new Date(val).getFullYear();
var today=new Date();
var tyear=new Date(today).getFullYear();
var a=tyear-fyear;
console.log(a);
}

dategroup(form):Array<any>{
return form.controls.emp_details.controls;
}

//get details from employee
getang(form): Array<any> {
return form.controls.emp_details.controls;
}

Duplicate(fromDate, toDate): boolean {
let myArray = this.dategroup(this.form1);
let test = myArray.filter(data => data.controls.fromto.get('tdate').value >= fromDate && fromDate != null)
if (test.length > 1) {
  return true;
} else {
  return false
}
}

Duplicate1(fromDate): boolean {
let myArray = this.dategroup(this.form1);
let test = myArray.filter(data => data.controls.fromto.get('fdate').value == fromDate && fromDate != null)
if (test.length > 1) {
  return true;
} else {
  return false
}
}

fromToDateValidation(fromDate, toDate): boolean {
let myArray = this.dategroup(this.form1);
let test = myArray.filter(data => data.controls.fromto.get('fdate').value > toDate && toDate != null)
   // the fromDate and toDate are numbers. In not convert them first after null check
    if (test !== null ) {
        return true;
    }
    return false;
};




skill_group(){
  return this.fb.group
  ({
    category: new FormControl(null,[Validators.required ]),
    skill:new FormControl (null,[ Validators.required]),
    level: new FormControl (null,[Validators.required ]),
    current: new FormControl (null,[ Validators.required]),
    experience:  new FormControl (null,[Validators.required ]),
  })
}

duplicateSkill(skill, a):boolean{
  let myskill= this.getSkill(this.form2);
  let testskill= myskill.filter(data=>data.controls.skill.value== skill && skill!=null)
  if(testskill.length>1){
    return true;
  }
  return false;
}

getSkill(form):Array<any>{
return form.controls.skill_details.controls;
}

get skillArray()
{
  return<FormArray>this.form2.get('skill_details');
};

onAddSkill(){
  this.skillArray.push(this.skill_group());
 // console.log(this.arrskill);
}


deleteskill(i){
  this.skillArray.removeAt(i);
}

myResetskill(i)
{
this.skillArray.reset(i);
}



SkillAdd(){
  this.arremp.push(this.form.value);
  console.log(this.arremp);
}




}