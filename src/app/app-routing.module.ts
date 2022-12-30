import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//loading modules on demand
const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  //{ path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },  Eagerly loading this module and import in app module file
  { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],//If the number of modules in your web application is less and the bundle size is less, you can use this strategy,
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
