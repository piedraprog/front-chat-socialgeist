import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'chat',
    canActivate: [SessionGuard],
    loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'home'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
