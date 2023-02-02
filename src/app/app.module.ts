import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { MycartComponent } from './components/mycart/mycart.component';
import {MatRadioModule} from '@angular/material/radio';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { FilterpipePipe } from './searchPipe/filterpipe.pipe';
import { AuthenticationserviceService } from './components/Services/authenticationservice/authenticationservice.service';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { DialogbookboxComponent } from './components/dialogbookbox/dialogbookbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    GetallbooksComponent,
    QuickViewComponent,
    MycartComponent,
    MywishlistComponent,
    MyorderComponent,
    OrderplacedComponent,
    FilterpipePipe,
    AdminloginComponent,
    AdmindashboardComponent,
    DialogbookboxComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    MatBadgeModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    NgxPaginationModule,
    MatDialogModule

  ],
  providers: [AuthenticationserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
