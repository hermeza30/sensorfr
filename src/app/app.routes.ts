import { LoginComponent } from './pages/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: 'login',component: LoginComponent},
  { path: '**', component: LoginComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
