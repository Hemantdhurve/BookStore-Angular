import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'getallbooks',component:GetallbooksComponent},
  ]
},
{path:'quickview',component:QuickViewComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
