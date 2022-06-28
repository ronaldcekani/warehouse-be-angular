import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserFormComponent } from './user-form/user-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UserIndexComponent, UserFormComponent],
  exports: [UserIndexComponent, UserFormComponent],
})
export class UserModule {}
