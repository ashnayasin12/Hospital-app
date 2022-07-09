import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SearchDepartmentComponent } from './search-department/search-department.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SearchDepartmentComponent,
    ViewDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
