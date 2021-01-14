import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import { ContactComponent} from './contact/contact.component';
import { ProjectsComponent} from './projects/projects.component';
import { SkillsComponent} from './skills/skills.component';
import { EducationComponent} from './education/education.component';
import { ExperienceComponent} from './experience/experience.component';




const routes: Routes = [
   {path: '', component:HomeComponent},
   {path: 'about', component:AboutComponent},
   {path: 'contact', component:ContactComponent},
   {path: 'projects', component:ProjectsComponent},
   {path: 'skills', component:SkillsComponent},
   {path: 'education', component:EducationComponent},
   {path: 'experience', component:ExperienceComponent}
   
  
  
  //  children:[
    
  //   {path: 'about', component:AboutComponent},
  //   {path: 'contact', component:ContactComponent},
  //   {path: 'projects', component:ProjectsComponent},
  //   {path: 'skills', component:SkillsComponent}
  // ]}
];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
