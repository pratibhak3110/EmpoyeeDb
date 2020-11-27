import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder, FormControlName } from '@angular/forms';
 import { Qualification , Employee, Skill, BasicInfo, PermanantAdd, PresentAdd } from './qualification';
 import { TaskserviceService } from "./taskservice.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  flag:boolean=true;
  flag1: boolean=false;
  flag2: boolean=false;
  flag3: boolean=false;
  flag4: boolean=false;
  flag5: boolean=false;
  flag6: boolean=false;
  age:number;
  signupForm: FormGroup;
  basicInfo: FormGroup;
  City= ["Mumbai","Pune","Nagpur","Delhi", "Hyderabad","Chennai", "Thane","Nashik","Kolhapur","Sangli"];

  form: FormGroup;
  // arrquali: Qualification[]=[];
  qualification;
  institute;
  passing_year;
  score;
  qualification_area;
  flag7:boolean = false;
  res;

  // arremp: Employee[]=[];
  fromDate;
  toDate;
 company;
 designation;

//  arrskill: Skill[]=[];
 category; skill; level; current;experience;

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

 arremp:Employee[]=[];
 arrbasicinfo: BasicInfo[]=[];
 arrpermanant: PermanantAdd[]=[];
arrpresent: PresentAdd[]=[];
arrskill: Skill[]=[];
arrqualification:Qualification[]=[];

  constructor( private fb: FormBuilder,
    private _data: TaskserviceService) { }

  ngOnInit(): void {

    this._data.getAllBasicInfo().subscribe(
      (data: BasicInfo[])=>{
        this.arrbasicinfo= data;
      });

      this._data.getAllPermanantAdd().subscribe(
        (data: PermanantAdd[])=>{
          this.arrpermanant= data;
        });

        this._data.getAllPresentAdd().subscribe(
          (data: PresentAdd[])=>{
            this.arrpresent= data;
          });

          this._data.getAllPresentAdd().subscribe(
            (data: PermanantAdd[])=>{
              this.arrpermanant= data;
            });

            this._data.getAllQualification().subscribe(
              (data: Qualification[])=>{
                this.arrqualification= data;
              });

              this._data.getAllPrevEmp().subscribe(
                (data: Employee[])=>{
                  this.arremp= data;
                });


    this.signupForm= new FormGroup({

      basicInfo: new FormGroup({
        EmpNo: new FormControl(null,[Validators.required]),
        Title: new FormControl(null,[]),
        Initial: new FormControl(),
        FirstName: new FormControl(null,[Validators.required]),
        MiddleName: new FormControl(),
        LastName: new FormControl(),
        Gender: new FormControl("male"),
        DOB: new FormControl(null,[Validators.required]),
        EmpAge: new FormControl(" "),
        OPhone: new FormControl(),
        PMobile:new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]),
        OEmail: new FormControl(),
        PMail: new FormControl(null,[Validators.required,Validators.email,]),
        PMail2: new  FormControl(),
        PMail3: new FormControl(),
        Photo: new FormControl(),
        Birth: new FormControl(null,[Validators.required]),
        Religion: new FormControl(),
        Caste: new FormControl(),
        Domicile: new FormControl(),
        Nationality: new FormControl(null,[Validators.required]),
        Voter: new FormControl(),
        PanNo: new FormControl(null,[Validators.required]),
        Adhar: new FormControl(null,[Validators.required]),
        Status: new FormControl("married"),
        Child: new FormControl(),
        MDate: new FormControl(),
        SName: new FormControl(),
        BankName: new FormControl(null,[Validators.required]),
        AccntType: new FormControl(),
        Payment: new FormControl(null,[Validators.required]),
        AccntNo: new FormControl(null,[Validators.required]),
        BankDetail: new FormControl(),
        IFSC: new FormControl(null,[Validators.required]),
        RBankNm: new FormControl(),
        RAccntNo: new FormControl(),
      }),

      addressDetails: new FormGroup({
        permanantadd: new FormControl(null,[Validators.required,]),
        city: new FormControl("bengaluru",[Validators.required]),
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

      persentadd: new FormControl(null,[Validators.required,]),
      pcity: new FormControl("bengaluru",[Validators.required]),
      pcountry: new FormControl(),
      pstate: new FormControl(),
      pdistrict: new FormControl(),
      ppincode: new FormControl(),
      pphone1: new FormControl(),
      pphone2: new FormControl(),
      pfax: new FormControl(),
      pmobile: new FormControl(),

    });
    this.form= this.fb.group({
      qualification_details: this.fb.array([this.qualification_group()]),
      emp_details: this.fb.array([this.emp_group()]),
      skill_details: this.fb.array([this.skill_group()]),
    });

    this.form.controls['qualification_details'].valueChanges.subscribe(value => {});
    this.form.controls['skill_details'].valueChanges.subscribe(value=>{});
    this.form.controls['emp_details'].valueChanges.subscribe(value=>{});
    this.signupForm.get('basicInfo').get('DOB').valueChanges.subscribe((x)=>this.updateEmpAge(x));
    this.signupForm.get('addressDetails').get('sameaddress').valueChanges.subscribe((x)=> this.Accessval(x, this.signupForm.get('addressDetails').value));
    this.signupForm.get('addressDetails').get('sameaddress').valueChanges.subscribe((a)=> this.edit(a));
  }


  edit(d: boolean){
    if(d==true)
    {
      this.signupForm.get('addressDetails').valueChanges.subscribe((f)=> this.Accessval(this.signupForm.get('addressDetails').get('sameaddress').value,f))
    }
  }

  Accessval(val: boolean, val1: FormGroup){
    if(val==true){

      this. permanantAdd1=val1['permanantAdd'];
      this.city1=val1['city'];
      this.state1=val1['state'];
      this.country1=val1['country'];
      this.district1=val1['district'];
      this.pincode1=val1['pincode'];
      this.phone21=val1['phone2'];
      this.phone11=val1['phone1'];
      this.fax1=val1['fax'];
      this.personalmailId1=val1['personalmailId'];

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

  updateEmpAge(val: Date){
    var today = new Date();
    var year= today.getFullYear();
    var birthDate= new Date(val).getFullYear();
    var a=year-birthDate;
    console.log(a);
    this.age=a;

  }

  OnNext1Click(){
    this.flag= false;   //first page
    this.flag1= true;  //second page
    this.flag2=false;  //third page
    this.flag3=false;
    console.log(this.signupForm.get('basicInfo'));
  }
  OnNext2Click(){
    this.flag=false;
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    console.log(this.signupForm.get('addressDetails'));
  }

  OnPrevious2Click(){
    this.flag=true;
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
  }

  OnPrevious3Click(){
    this.flag=false;
    this.flag1=true;
    this.flag2=false;
    this.flag3=false;
  }
  onclick()
  {
    this.flag6= !this.flag6;
  }
  Register: any []=[];
  Register1: any []=[];
  onRegister(){
    this.Register.push(this.signupForm.value);
   //alert("Data Added successful!....");
    //console.log(this.Register);
  }

  onRegister1()
  {

    this.Register1.push(this.signupForm.value);
    alert("Data Added successfully!....");
    //console.log(this.Register1);
    }


    qualification_group(){
      return this.fb.group
      ({
        degree: new FormControl(null,[Validators.required,]),
        institute:new FormControl (null,[Validators.required]),
        pyear: new FormControl (null,[Validators.required]),
        score: new FormControl (null,[Validators.required]),
        area: new FormControl (null,[Validators.required]),

      });
    }

    OnSubmitClick(){
      alert("Registration Successful");
    }
    onAddDetail(){
      this.arremp.push(this.form.value);
      console.log(this.arremp);
    }
  get qualiArray()
  {
    return<FormArray>this.form.get('qualification_details');
  }


  addqualification()
  {
    this.qualiArray.push(this.qualification_group());
  }

  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }

  duplicatequal(qualification,p):boolean {
    let myarray= this.getQual(this.form);
    let test= myarray.filter(data=>data.controls.qualification.value==qualification && qualification!=null)
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
    this.empArray.push(this.emp_group());
  }

  get empArray()
  {
    return<FormArray>this.form.get('emp_details');
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
  return this.fb.group({fromto: new FormGroup({
    fdate: new  FormControl( null, [Validators.required ]),
    tdate: new  FormControl( null, [Validators.required ]),
  },  [this.fromToDate('fromDate', 'toDate').bind(this)]
  ),

    companynm:new FormControl(null,[Validators.required]),
    designation:new FormControl(null,[Validators.required]),
    rexp: new FormControl(null,[Validators.required]),
    nrexp: new FormControl(null,[Validators.required])
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
  let myArray = this.dategroup(this.form);
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
  return form.controls.qualification_details.controls;
}

Duplicate(fromDate, toDate): boolean {
  let myArray = this.dategroup(this.form);
  let test = myArray.filter(data => data.controls.fromto.get('toDate').value >= fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}


Duplicate1(fromDate): boolean {
  let myArray = this.dategroup(this.form);
  let test = myArray.filter(data => data.controls.fromto.get('fromDate').value == fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}





fromToDateValidation(fromDate, toDate): boolean {
  let myArray = this.dategroup(this.form);
  let test = myArray.filter(data => data.controls.fromto.get('fromDate').value > toDate && toDate != null)
     // the fromDate and toDate are numbers. In not convert them first after null check
      if (test !== null ) {
          return true;
      }
      return false;
  };


  //Skill

  skill_group(){
    return this.fb.group
    ({
      category: new FormControl(null,[Validators.required]),
      skill:new FormControl (null,[Validators.required]),
      level: new FormControl (null,[Validators.required]),
      current: new FormControl (null,[Validators.required]),
      experience:  new FormControl (null,[Validators.required]),
    })
  }

  duplicateSkill(skill, a):boolean{
    let myskill= this.getSkill(this.form);
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
    return<FormArray>this.form.get('skill_details')
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
