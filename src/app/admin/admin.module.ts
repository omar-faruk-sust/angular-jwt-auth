import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards/index';
import { AdminComponent } from './admin.component';
import { ListComponent } from './author/list/list.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [AdminComponent, HeaderComponent, FooterComponent, SidebarComponent, ListComponent],
    providers: [
        AuthGuard
    ],
})
export class AdminModule {

}
