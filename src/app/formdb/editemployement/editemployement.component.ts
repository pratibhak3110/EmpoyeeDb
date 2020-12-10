import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdbService } from "../formdb.service";
import { Employee } from '../qualification';

@Component({
  selector: 'app-editemployement',
  templateUrl: './editemployement.component.html',
  styleUrls: ['./editemployement.component.css']
})
export class EditemployementComponent implements OnInit {
  form1: FormGroup;
  counting1: number;
  response1;
  taskId;
  arremp: Employee[]=[];

  constructor( private fb: FormBuilder,
    private _data: FormdbService,
    private _router: Router,
    private _actroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form1= this.fb.group({
      emp_details: this.fb.array([this.emp_group()]),
    });

    this.taskId=this._actroute.snapshot.params['id3'];
    this._data.getAllEmpById(this.taskId).subscribe((x:Employee[]) =>
      {
          for(let i=0; i<=x.length-1;i++)
          {
           const control = <FormArray>this.form1.get('emp_details');
          // control.push(this.emp_group());
            let item =control.at(i);
            item.patchValue({
              Id: x[i].Id,
              emp_id:x[i].emp_id,
              fdate: x[i].fdate,
              tdate: x[i].tdate,
              companynm: x[i].companynm,
              designation:x[i].designation,
              rexp: x[i].rexp,
              nrexp: x[i].nrexp
           });
          }
       });

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
Id: new FormControl(),
emp_id: new FormControl(),
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

editemp(){
  let r = this.form1.get('emp_details') as FormArray;
  let item = r.at(0);
  this._data.updatePrevEmp(item.value).subscribe(
    (x)=>{
      console.log("abc");
      console.log(item.value);
      this._router.navigate(['/show']);
   });
}

}
