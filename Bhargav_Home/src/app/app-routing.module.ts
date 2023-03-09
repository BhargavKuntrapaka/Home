import { InvitePageComponent } from './invite-page/invite-page.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'first-component', component: InvitePageComponent },
  { path: 'second-component', component: InvitePageComponent },
];
@NgModule({
  declarations: [ 
   // InvitePageComponent
  ],
  
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'invite', component: InvitePageComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent }, 
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


