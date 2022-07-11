import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { SamplesComponent } from './samples/samples.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';


const routes: Routes = [{path:"",component:Section1Component},{path:"about",component:AboutComponent},
{path:"sample",component:SamplesComponent},{path:"contact",component:ContactComponent},{path:'',redirectTo: 'home', pathMatch: 'full'},
{path:"section2",component:Section2Component},{path:"recepies",component:RecepiesComponent},{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
