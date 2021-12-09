import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaComponent } from './pages/area/area.component';
import { EditAreaComponent } from './pages/area/edit-area/edit-area.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DistributionComponent } from './pages/distribution/distribution.component';
import { EditEmailComponent } from './pages/email/edit-email/edit-email.component';
import { EmailComponent } from './pages/email/email.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"area", component:AreaComponent},
  {path:"distribution", component:DistributionComponent},
  {path:"email", component:EmailComponent},
  {path:"email/:id", component:EditEmailComponent},
  {path:"area/:id", component:EditAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
