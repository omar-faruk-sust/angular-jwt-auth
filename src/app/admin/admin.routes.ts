import {Routes, Router, CanActivate, RouterModule} from '@angular/router';
import {AuthGuard} from '../_guards/index';
import {ListComponent} from './author/list/list.component';
import {AddComponent} from './author/add/add.component';
import {AdminComponent} from './admin.component';

export const adminRoutes: Routes = [{
    path: 'author',
    component: AdminComponent,
    children: [
        {path: 'list', component: ListComponent},
        {path: 'add', component: AddComponent}
    ],
    canActivate: [AuthGuard]
}];