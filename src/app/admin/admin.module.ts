import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/index';
import { AdminComponent } from './admin.component';
import { ListComponent } from './author/list/list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';

import {DateFormatPipe} from '../_pipes/date.format.pipe';
import {DateTimeFormatPipe} from '../_pipes/date.time.format.pipe';
import { AddComponent } from './author/add/add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ListComponent,
        DateFormatPipe,
        DateTimeFormatPipe,
        AddComponent],
    providers: [
        AuthGuard
    ],
})
export class AdminModule {

}
