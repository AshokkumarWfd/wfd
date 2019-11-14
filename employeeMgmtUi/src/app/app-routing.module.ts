import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeadernavComponent } from './home/headernav/headernav.component';
import { FooternavComponent } from './home/footernav/footernav.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { RoleComponent } from './home/sidenav/role/role.component';



const appRoutes: Routes = [
  {path: '',
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'home/:sideNavRole', component: RoleComponent},
        { path: 'empDetails', component: HomeComponent },
        {path:"",component:LoginComponent}
       
       ],
      component: DashboardComponent
  },
  { path: 'login', component: LoginComponent },
 { path: '**', redirectTo: '/login' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];


appRoutes.push({ path: '**', redirectTo: '/login' });

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
