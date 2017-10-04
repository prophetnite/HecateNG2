import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { LockComponent } from './user/lock/lock.component';
import { RecoverComponent } from './user/recover/recover.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'security', loadChildren: './security/security.module#SecurityModule' },
            { path: 'servicedesk', loadChildren: './servicedesk/servicedesk.module#ServiceDeskModule' },
            

        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'lock', component: LockComponent },
    { path: 'recover', component: RecoverComponent },

    // Not found
    { path: '**', redirectTo: 'dashboard' }

];
