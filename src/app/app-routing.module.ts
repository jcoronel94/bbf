import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Nav1Component } from './nav1/nav1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'test',
    component: Nav1Component
  }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
