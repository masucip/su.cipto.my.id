import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: '', component: ProfileComponent }];
@NgModule({
  declarations: [
    ProfileComponent,
    ProfilComponent,
    SkillComponent,
    ProjectComponent,
    HomeComponent
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
