import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { arrRouting } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { FormdbComponent } from './formdb/formdb.component';
import { EditbasicinfoComponent } from './formdb/editbasicinfo/editbasicinfo.component';
import { ShowdataComponent } from './formdb/showdata/showdata.component';
import { EditpermanantComponent } from './formdb/editpermanant/editpermanant.component';
import { EditqualificationComponent } from './formdb/editqualification/editqualification.component';
import { EditemployementComponent } from './formdb/editemployement/editemployement.component';
import { EditskillComponent } from './formdb/editskill/editskill.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FormdbComponent,
    EditbasicinfoComponent,
    ShowdataComponent,
    EditpermanantComponent,
    EditqualificationComponent,
    EditemployementComponent,
    EditskillComponent,
    HeaderComponent,

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
