import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/products/product-detail/overview/overview.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { SpecsComponent } from './components/products/product-detail/specs/specs.component';
import { VariantsComponent } from './components/products/product-detail/variants/variants.component';
import { ProductsComponent } from './components/products/products.component';

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
    component: DashboardComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
        children: [
          { path: 'overview', component: OverviewComponent },
          { path: 'variants', component: VariantsComponent },
          { path: 'specs', component: SpecsComponent },
        ],
      },
    ],
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
  imports: [RouterModule.forRoot(routes /*{ enableTracing: true }*/)],
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
