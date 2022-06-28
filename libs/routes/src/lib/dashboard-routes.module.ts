import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgetPasswordComponent, LoginComponent, ResetPasswordComponent} from "@warehouse-management/auth";
import {DashboardLayoutComponent} from "@warehouse-management/layout";
import {UserIndexComponent} from "@warehouse-management/user";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'users',
        pathMatch: 'full',
        component: UserIndexComponent
      },
    ]
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'forget-password',
    pathMatch: 'full',
    component: ForgetPasswordComponent
  },
  {
    path: 'reset-password',
    pathMatch: 'full',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DashboardRoutesModule {}
