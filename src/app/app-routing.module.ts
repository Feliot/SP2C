import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [ {path: 'home', component: HomeComponent,
canActivate:[ AuthGuard]},
{path: 'login', component: LoginComponent},
{path: '', redirectTo : 'home' , pathMatch: 'full'},
{path: '**', component :  ErrorComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent
  , ErrorComponent,
    LoginComponent, RegisterComponent]
