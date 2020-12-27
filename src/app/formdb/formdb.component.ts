import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators ,FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, PermanantAdd, Qualification ,Skill} from './qualification';
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
  temp;
  pflag: boolean = false;
  dflag: string='';
  permanantAdd1;
  city1;
  country1;
  state1;
  district1;
  pincode1;
  phone11;
  phone21;
  fax1;
  emp_id;
  emp_id_param;
  personalmailId1;

  permanant: FormGroup;

  counting: number;
  response;
  counting1: number;
  response1;
  counting2: number;
  response2;
  test; les;
form: FormGroup;

form1: FormGroup;
form2: FormGroup;
signupForm: FormGroup;
basicInfo: FormGroup;
arrBasicInfo: BasicInfo[]=[];
arrPermanantAdd: PermanantAdd[]=[];
arrqualification: Qualification[]=[];
arremp: Employee[]=[];
arrskill: Skill[]=[];
City= ["Mumbai","Pune","Nagpur","Delhi", "Hyderabad","Chennai", "Thane","Nashik","Kolhapur","Sangli"];

  constructor( private fb: FormBuilder,
    private _data: FormdbService,
    private _router: Router) { }

  ngOnInit(): void {

    this.signupForm= new FormGroup({

      basicInfo: new FormGroup({
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
      }),

  });

 this.permanant=new FormGroup({/*
    addressDetails:new FormGroup({ */
      emp_id: new FormControl(this.emp_id_param,[Validators.required ]),
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
      sameaddress: new  FormControl(false),/*
  }), */
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



    this.permanant.get('sameaddress').valueChanges.subscribe((value)=>this.map_Add(value));
    this.permanant.get('permanantadd').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('prrsentadd').setValue(this.permanant.get('permanantadd').value);
        }
      }
    });
    this.permanant.get('city').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pcity').setValue(this.permanant.get('city').value);
        }
      }
    });
    this.permanant.get('country').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pcountry').setValue(this.permanant.get('country').value);
        }
      }
    });
    this.permanant.get('state').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pstate').setValue(this.permanant.get('state').value);
        }
      }
    });
    this.permanant.get('district').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pdistrict').setValue(this.permanant.get('district').value);
        }
      }
    });
    this.permanant.get('pincode').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('ppincode').setValue(this.permanant.get('pincode').value);
        }
      }
    });
    this.permanant.get('phone1').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pphone1').setValue(this.permanant.get('phone1').value);
        }
      }
    });
    this.permanant.get('phone2').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pphone2').setValue(this.permanant.get('phone2').value);
        }
      }
    });
    this.permanant.get('fax').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pfax').setValue(this.permanant.get('fax').value);
        }
      }
    });
    this.permanant.get('mobile').valueChanges.subscribe((value)=>{
      if(value){
        if(this.pflag){
          this.permanant.get('pmobile').setValue(this.permanant.get('mobile').value);
        }
      }
    });

    this.signupForm.get('basicInfo').get('DOB').valueChanges.subscribe((x)=>this.updateEmpAge(x));
    // this.permanant.get('sameaddress').valueChanges.subscribe((x)=> this.Accessval(x, this.permanant.value));
    // this.permanant.get('sameaddress').valueChanges.subscribe((a)=> this.edit(a));
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

  map_Add(value:boolean){
    if(value){
      this.pflag=true;
      this.dflag='readonly';
      this.permanant.get('presentadd').setValue(this.permanant.get('permanantadd').value);
      this.permanant.get('pcity').setValue(this.permanant.get('city').value);
      this.permanant.get('pcountry').setValue(this.permanant.get('country').value);
      this.permanant.get('pstate').setValue(this.permanant.get('state').value);
      this.permanant.get('pdistrict').setValue(this.permanant.get('district').value);
      this.permanant.get('ppincode').setValue(this.permanant.get('pincode').value);
      this.permanant.get('pphone1').setValue(this.permanant.get('phone1').value);
      this.permanant.get('pphone2').setValue(this.permanant.get('phone2').value);
      this.permanant.get('pfax').setValue(this.permanant.get('fax').value);
      this.permanant.get('pmobile').setValue(this.permanant.get('mobile').value);
    }
    else{
      this.pflag=false;
      this.dflag='';
      this.permanant.get('presentadd').setValue(null);
      this.permanant.get('pcity').setValue(null);
      this.permanant.get('pcountry').setValue(null);
      this.permanant.get('pstate').setValue(null);
      this.permanant.get('pdistrict').setValue(null);
      this.permanant.get('ppincode').setValue(null);
      this.permanant.get('pphone1').setValue(null);
      this.permanant.get('pphone2').setValue(null);
      this.permanant.get('pfax').setValue(null);
      this.permanant.get('pmobile').setValue(null);
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
    console.log(this.permanant.value);
    if(this.permanant.status=='VALID'){
      if(this.temp==null){
        //this.permanant.get('emp_id').setValue(this.emp_id_param);
        console.log(this.permanant.get('emp_id').value);
        this._data.addPermanantAdd(this.permanant.value).subscribe((x:any)=>{
          if(x.affectedRows==1){
            alert("Added Successfully");
          }
          else{
            console.log(x);
          }
        });
      }
      // else{
      //   this._data.updatePermanantAdd(this.permanant.value).subscribe((x:any)=>{
      //     if (x.affectedRows==1) {
      //       alert('Updated Successfully');
      //     } else {
      //       console.log(x);

      //     }
      //   });
      // }
    }
    else{
      alert('Fill The Form Completely!');
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
      emp_id: new FormControl(),
      degree: new FormControl(null,[Validators.required]),
      institute:new FormControl (null,[Validators.required ]),
      pyear: new FormControl (null,[ Validators.required]),
      score: new FormControl (null,[Validators.required ]),
      area: new FormControl (null,[Validators.required ]),

    });
  }

onAddDetail(){

//   this.counter=0; this.res="";

// this.form.push(this.qualification_details)

  //   if(this.form.get('qualification_details').status=='VALID'){
  //     this._data.addQualification(this.form.get('qualification_details').value).subscribe(
  //       (x:any)=>{
  //          if(x.affectedValue==1){
  //           this.arrqualification.push(this.form.get('qualification_details').value);
  //    alert('Saved Successfully');
  //     console.log('new details', this.form.get('qualification_details').value);

  //         }else if(x.code=='ER_DUP_ENTRY'){
  //           alert('Duplicate')
  //         }

  //       });}else{
  //         alert('not valid')
  //       }
  // // alert('Saved Successfully');
  // //   this.arrqualification.push(this.form.get('qualification_details').value);
  // //   console.log(this.arrqualification);

  this.counting=0;
    this.response="";
    this.arrqualification.push(this.form.get('qualification_details').value);
   for (var a=0;a<=(this.form.get('qualification_details').value).length-1;a++)
   {
this._data.addQualification(this.form.get('qualification_details').get([this.counting]).value).subscribe((x)=>{
  alert ('Added Successfully')
});
this.counting++
   }

  }

get qualiArray()
{
  return<FormArray>this.form.get('qualification_details');
}

addqualification()
{
  this.qualiArray.push(this.qualification_group());
  // if(this.form.status=='VALID'){
  //   this._data.addQualification(this.form.value).subscribe(
  //     (x:any)=>{
  //       if(x.affectedValue==1){
  //         this.arrqualification.push(this.form.value);
  //       alert('Save Successfully');
  //       console.log('new details', this.form.value);
  //     }
  //     else if(x.code=='ER_DUP_ENTRY'){
  //       alert('Duplicate');
  //     }
  //     });
  // }
  // else{
  //         alert('not valid');
  //       }
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




onAddEmp(): void{


    {
      this.counting1=0
      this.response1="";
      for(var i=0;i<=(this.form1.get('emp_details').value).length-1;i++)
        {
          {
            this._data.addPrevEmp(this.form1.get('emp_details').get([this.counting1]).value).subscribe((x)=>
            {

              this.arremp.push(this.form1.get('emp_details').value);
            }
            );}

          this.counting1++;
          alert("Data Added Successfully!...");

        }

      }



  // alert('Saved Successfully');
  // this.arremp.push(this.form1.get('emp_details').value);
  // console.log(this.arremp);
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
  emp_id: new FormControl(),
  // fromto: new FormGroup({
    fdate: new  FormControl( null, [Validators.required  ]),
    tdate: new  FormControl( null, [ Validators.required ]),
// },
  // [this.fromToDate('fdate', 'tdate').bind(this)]
// ),
  companynm:new FormControl(null,[ Validators.required]),
  designation:new FormControl(null,[ Validators.required]),
  rexp: new FormControl(null,[Validators.required ]),
  nrexp: new FormControl(null,[Validators.required ])
})
}

fromToDate(fdate: string, tdate: string)
{
return (group: FormGroup): {[key: string]: any} => {
  let f = group.controls[fdate];
  let t = group.controls[tdate];
  if (f.value > t.value) {
    return {
      dates: "Date from should be less than Date to"
    };
  }
  return {};
}
}
timeCalculation(val: Date){
let myArray = this.getang(this.form1);
var fyear= new Date(val).getFullYear();
var today=new Date();
var tyear=new Date(today).getFullYear();
var a=tyear-fyear;
console.log(a);
}


//get details from employee
getang(form): Array<any> {
return form.controls.emp_details.controls;
}

Duplicate(fromDate): boolean {
let myArray = this.getang(this.form1);
let test = myArray.filter(data => data.controls.tdate.value >= fromDate && fromDate != null)
if (test.length > 1) {
  return true;
} else {
  return false
}
}

Duplicate1(fromDate): boolean {
let myArray = this.getang(this.form1);
let test = myArray.filter(data => data.controls.fdate.value == fromDate && fromDate != null)
if (test.length > 1) {
  return true;
} else {
  return false
}
}

fromToDateValidation(control: AbstractControl):{ [key:string]:boolean} {
let myArray = this.getang(this.form1);
let test = myArray.filter(data => data.get('fdate').value );
let les= myArray.filter(data => data.get('tdate').value);
   // the fromDate and toDate are numbers. In not convert them first after null check
    if (this.test >this.les) {
        return {lessDate: true};
    }
    return null;
};




skill_group(){
  return this.fb.group
  ({
    emp_id: new FormControl(),
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
  this.counting2=0;
  this.response2="";
  this.arrskill.push(this.form2.get('skill_details').value);
 for (var a=0;a<=(this.form2.get('skill_details').value).length-1;a++)
 {
this._data.addSkill(this.form2.get('skill_details').get([this.counting2]).value).subscribe((x)=>{
alert ('Added Successfully')
});
this.counting2++
 }
  // this.arremp.push(this.form.value);
  // console.log(this.arremp);
}




}
