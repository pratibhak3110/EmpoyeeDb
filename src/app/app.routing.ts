import { Routes, RouterModule } from "@angular/router";
import { EditbasicinfoComponent } from './formdb/editbasicinfo/editbasicinfo.component';
import { EditpermanantComponent } from './formdb/editpermanant/editpermanant.component';
import { EditpresentComponent } from './formdb/editpresent/editpresent.component';
import { FormdbComponent } from './formdb/formdb.component';
import { ShowdataComponent } from './formdb/showdata/showdata.component';
import { TaskComponent } from './task/task.component';

const arr: Routes=[

  //{path: 'task', component: TaskComponent},
  {path: 'formdb', component: FormdbComponent},
  {path: 'editbasic/:id', component: EditbasicinfoComponent},
  {path: 'show', component: ShowdataComponent},
  {path: 'editpermanant/:id1', component: EditpermanantComponent},
  {path: 'editpresent/:id2',component: EditpresentComponent}
 // {path: "**", redirectTo: '/pagenotfound'}
];

export const arrRouting= RouterModule.forRoot(arr);

