import { Routes, RouterModule } from "@angular/router";
import { EditbasicinfoComponent } from './formdb/editbasicinfo/editbasicinfo.component';
import { EditemployementComponent } from './formdb/editemployement/editemployement.component';
import { EditpermanantComponent } from './formdb/editpermanant/editpermanant.component';
import { EditqualificationComponent } from './formdb/editqualification/editqualification.component';
import { EditskillComponent } from './formdb/editskill/editskill.component';
import { FormdbComponent } from './formdb/formdb.component';
import { ShowdataComponent } from './formdb/showdata/showdata.component';
const arr: Routes=[

  //{path: 'task', component: TaskComponent},
  {path: 'formdb', component: FormdbComponent},
  {path: 'editbasic/:id', component: EditbasicinfoComponent},
  {path: 'show', component: ShowdataComponent},
  {path: 'editpermanant/:id1', component: EditpermanantComponent},
  {path: 'editqual/:id2', component: EditqualificationComponent},
  {path: 'editemp/:id3', component: EditemployementComponent},
  {path: 'editskill/:id4', component: EditskillComponent},

 // {path: "**", redirectTo: '/pagenotfound'}
];

export const arrRouting= RouterModule.forRoot(arr);

