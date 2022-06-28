import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForgetPasswordComponent, LoginComponent, ResetPasswordComponent} from "@warehouse-management/auth";
import {DashboardLayoutComponent} from "@warehouse-management/layout";
import {UserFormComponent, UserIndexComponent} from "@warehouse-management/user";

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'users',
        component: UserIndexComponent
      },
      {
        path: 'user/create',
        component: UserFormComponent
      },
      {
        path: 'user/update/{:id}',
        component: UserFormComponent
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
  exports: [RouterModule]
})
export class RoutesModule {
}
