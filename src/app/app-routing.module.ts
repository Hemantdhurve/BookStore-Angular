import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AuthguardGuard } from './components/authGuard/authguard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { MycartComponent } from './components/mycart/mycart.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'reset',component:ResetpasswordComponent},
  {path:'forget',component:ForgotpasswordComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthguardGuard],
  children:[
    {path:'getallbooks',component:GetallbooksComponent},
    {path:'quickview/:bookId',component:QuickViewComponent},
    {path:'mycart',component:MycartComponent},
    {path:'mywishlist',component:MywishlistComponent},
    {path:'myorder',component:MyorderComponent},
    {path:'orderplaced',component:OrderplacedComponent},
  ]
},
{path:'admindashboard',component:AdmindashboardComponent,
children:[
  {path:'getallbooks',component:GetallbooksComponent},
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
