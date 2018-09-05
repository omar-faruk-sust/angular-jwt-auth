import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// all your components
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
];


@NgModule({
  exports: [
      RouterModule
  ],
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
      HttpClientModule
  ],
})


export class AppRoutingModule {

}
