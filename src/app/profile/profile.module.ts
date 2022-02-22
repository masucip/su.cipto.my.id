import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [
  { 
    path: '', 
    component: ProfileComponent , 
    children:[
      {
        path : '', redirectTo : 'info', pathMatch : 'full'
      },
      {
        path : 'info', component : ProfilComponent
      },
      {
        path : 'skill', component : SkillComponent
      },
      {
        path : 'project', component : ProjectComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    ProfileComponent,
    ProfilComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [
    ProfilComponent,
    SkillComponent,
    ProjectComponent
  ]
})
export class ProfileModule { }
