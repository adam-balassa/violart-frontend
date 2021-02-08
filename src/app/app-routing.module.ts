import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './main/contacts/contacts.component';
import { CurrentComponent } from './main/current/current.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: CurrentComponent, pathMatch: 'full' },
    { path: 'contacts', component: ContactsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
