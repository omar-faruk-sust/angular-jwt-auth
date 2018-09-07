import {Routes, Router, CanActivate, RouterModule} from '@angular/router';
import { AuthGuard } from '../_guards/index';
import {ListComponent} from './author/list/list.component';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [{
    path: '',
    component: AdminComponent,
    children: [
        {path: 'author/list', component: ListComponent}
    ],
    canActivate: [AuthGuard]
}];