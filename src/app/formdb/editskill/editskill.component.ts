import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormdbService } from '../formdb.service';
import { Skill } from "../qualification";

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
form2: FormGroup;
counting2: number;
response2;
arrskill: Skill[]=[];
taskId;
  constructor(private fb: FormBuilder,
    private _data: FormdbService,
    private _router: Router,
    private _actroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form2= this.fb.group({
      skill_details: this.fb.array([this.skill_group()]),
    });


    this.taskId=this._actroute.snapshot.params['id4'];
    this._data.getAllSkillById(this.taskId).subscribe((x:Skill[]) =>
      {
          for(let i=0; i<=x.length-1;i++)
          {
           const control = <FormArray>this.form2.get('skill_details');
          // control.push(this.skill_group());
            let item =control.at(i);
            item.patchValue({
              Id: x[i].Id,
              emp_id:x[i].emp_id,
              category:x[i].category,
              skill:x[i].skill,
              level:x[i].level,
              current:x[i].current,
              experience: x[i].experience
           });
          }
       });

  }

skill_group(){
  return this.fb.group
  ({
    emp_id: new FormControl(),
    category: new FormControl(),
    skill:new FormControl (),
    level: new FormControl (),
    current: new FormControl(),
    experience:  new FormControl(),
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



editskill(){
 let r = this.form2.get('skill_details') as FormArray;
  let item = r.at(0);
  this._data.updateSkill(item.value).subscribe(
    (x)=>{
      //console.log("abc");
      console.log(item.value);
      this._router.navigate(['/show']);
   });
}
}
