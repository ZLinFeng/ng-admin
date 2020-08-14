import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './layout/header/header.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {SiderComponent} from './layout/sider/sider.component';
import {LoginComponent} from './layout/login/login.component';

const routes: Routes = [
  {
    path: 'header', component: HeaderComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'sider', component: SiderComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
