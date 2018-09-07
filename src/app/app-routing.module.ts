import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// all your components
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import { AppComponent } from './app.component';
import { adminRoutes } from './admin/admin.routes';
import { JwtModule } from '@auth0/angular-jwt';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    ...adminRoutes
];


@NgModule({
  exports: [
      RouterModule
  ],
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
      HttpClientModule,
      JwtModule
  ],
})


export class AppRoutingModule {

}
