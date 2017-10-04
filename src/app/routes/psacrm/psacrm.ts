import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { QuotesComponent } from './quotes/quotes.component';
import { WorkflowsComponent } from './workflows/workflows.component';
import { LibraryComponent } from './library/library.component';
import { CalandarComponent } from './calandar/calandar.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeadsComponent } from './leads/leads.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';


const routes: Routes = [
    { path: 'quotes', component: QuotesComponent },
    { path: 'workflows', component: WorkflowsComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'calandar', component: CalandarComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'accounts', component: AccountsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'leads', component: LeadsComponent },
    { path: 'opportunities', component: OpportunitiesComponent }
    
      
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        QuotesComponent,
        WorkflowsComponent,
        LibraryComponent,
        CalandarComponent,
        ActivitiesComponent,
        AccountsComponent,
        AccountsComponent,
        ContactsComponent,
        DashboardComponent,
        LeadsComponent,
        OpportunitiesComponent
       
    ],
    exports: [
        RouterModule
    ]
})
export class PSACRMModule { }