import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { TokenInterceptorService } from './Services/auth.service';
import { AppComponent } from './app.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { SigninComponent } from './home/signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { UserComponent } from './user/user.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { ToastrModule } from 'ngx-toastr';
import { ShareComponent } from './user/share/share.component';
import {FileUploadModule} from "ng2-file-upload";
import { FileSComponent } from './file-s/file-s.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SigninComponent,
    AdminComponent,
    UserComponent,
    AboutusComponent,
    ContactusComponent,
    ShareComponent,
    FileSComponent
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    Ng2SearchPipeModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
