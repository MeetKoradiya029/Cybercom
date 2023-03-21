import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './components/addusers/addusers.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', 
    component:UsersComponent
  },
  {
    path:"users",
    component:UsersComponent
  },
  {
    path:"adduser",
    component:AddusersComponent
  },
  {
    path:"edituser/:id",
    component:AddusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
