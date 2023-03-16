import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'prefix',
    component: DashboardComponent,
  },
  {
    path: '', // explain
    pathMatch: 'full', // explain
    redirectTo: 'home', //explain
  },
  {
    path: '**',
    component: ErrorComponent,
    // page to load for nonexistent router // should always come last
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*NOTE - Implement the routing above without pathMatch before introducing reader to pathMatch and what pathMatch does
** {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
*/

// Illustrate another example of pathMatch such as redirecting a deadlink to a functional one

//  Let user be aware of the other method of creating routes (independent of app-routing-module.ts)
