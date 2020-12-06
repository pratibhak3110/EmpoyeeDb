import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators ,FormArray, FormBuilder, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdbService } from '../formdb.service';
import {  Qualification } from '../qualification';

@Component({
  selector: 'app-editqualification',
  templateUrl: './editqualification.component.html',
  styleUrls: ['./editqualification.component.css']
})
export class EditqualificationComponent implements OnInit {
  form: FormGroup;
  taskId;
  counter;
  res;
  arrqualification: Qualification[]=[];
  constructor( private fb: FormBuilder,
    private _data: FormdbService,
    private _router: Router,
    private _actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      qualification_details: this.fb.array([]),
    });

    // this.taskId=this._actroute.snapshot.params['id2'];
    // this._data.getQualificationById(this.taskId).subscribe(
    //   (data:Qualification[])=>{
    //    this.form.patchValue({
    //     emp_id:data[0].emp_id,
    //     degree:data[0].degree,
    //     institute:data[0].institute,
    //     pyear:data[0].pyear,
    //     score:data[0].score,
    //     area: data[0].area
    //    });
    //   })



    this.taskId=this._actroute.snapshot.params['id2'];
    this._data.getQualificationById(this.taskId).subscribe((x:Qualification[]) =>
      {
          for(let i=0; i<=x.length-1;i++)
          {
           const control = <FormArray>this.form.get('qualification_details');
           control.push(this.qualification_group());
            let item =control.at(i);
            item.patchValue({
              emp_id:x[i].emp_id,
               degree:x[i].degree,
              institute:x[i].institute,
                pyear:x[i].pyear,
                   score:x[i].score,
                area: x[i].area
           });
          }
       });

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

  if(this.form.get('qualification_details').status=='VALID'){
    this._data.updateQualification(this.form.get('qualification_details').value).subscribe(
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

// editqual(){
//   this._data.updateQualification(this.form.get('qualification_details').value).subscribe(
//     (x)=>{

//       this._router.navigate(['/show']);
//     });
//     alert("data add");

//     console.log('abc',this.form.get('qualification_details').value);
// }

editqual(): void
  {
   this.counter=0;
   this.res="";

      for(var i=0;i<=(this.form.get('qualification_details').value).length-1;i++)
      {
        {
          this._data.updateQualification(this.form.get('qualification_details').get([this.counter]).value).subscribe((x)=>
          {
            alert("Data Edited Successfully!...");
                this.counter++;
          }
          );}

      }
  }

}
