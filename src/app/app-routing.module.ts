import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { UsefulComponent } from './useful/useful.component';
import { MainInformationComponent } from './about/main-information/main-information.component';
import { ExperienceComponent } from './about/experience/experience.component';
import { ResponsibilitiesComponent } from './about/responsibilities/responsibilities.component';
import { LanguagesComponent } from './about/languages/languages.component';

const routes: Routes = [
  { path: '', redirectTo: '/about/main-information', pathMatch: 'full'},
  { path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent,

  children: [
    { path: '', redirectTo: '/about/main-information', pathMatch: 'full'},
    { path: 'main-information', component:  MainInformationComponent},
    { path: 'experience', component:  ExperienceComponent},
    { path: 'responsibilities', component:  ResponsibilitiesComponent},
    { path: 'languages', component:  LanguagesComponent}
  ]  },
  { path: 'skills', component: SkillsComponent },
  { path: 'useful', component: UsefulComponent },
  { path: '**', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const routingComponents = [
  AboutComponent,
  SkillsComponent,
  UsefulComponent
];
