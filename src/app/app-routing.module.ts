import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { CurrentComponent } from './main/current/current.component';
import { EducationComponent } from './main/education/education.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: CurrentComponent, pathMatch: 'full' },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'gallery', component: GalleryComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
