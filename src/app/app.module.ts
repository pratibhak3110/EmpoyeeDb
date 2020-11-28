import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { arrRouting } from "./app.routing";
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from "@angular/common/http";
import { FormdbComponent } from './formdb/formdb.component';
import { EditbasicinfoComponent } from './formdb/editbasicinfo/editbasicinfo.component';
import { ShowdataComponent } from './formdb/showdata/showdata.component';
import { EditpermanantComponent } from './formdb/editpermanant/editpermanant.component';
import { EditpresentComponent } from './formdb/editpresent/editpresent.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    FormdbComponent,
    EditbasicinfoComponent,
    ShowdataComponent,
    EditpermanantComponent,
    EditpresentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    arrRouting,
    RouterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
