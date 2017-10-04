import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { NewTicketComponent } from './newticket/newticket.component';
import { MonitorMatrixComponent } from './monitormatrix/monitormatrix.component';
import { ServiceBoardComponent } from './serviceboard/serviceboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CustomersComponent } from './customers/customers.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { DevicesComponent } from './devices/devices.component';
import { KBComponent } from './kb/kb.component';
import { BackupComponent } from './backup/backup.component';


const routes: Routes = [
    { path: 'newticket', component: NewTicketComponent },
    { path: 'monitormatrix', component: MonitorMatrixComponent },
    { path: 'serviceboard', component: ServiceBoardComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'dispatch', component: DispatchComponent },
    { path: 'devices', component: DevicesComponent },
    { path: 'kb', component: KBComponent },
    { path: 'backup', component: BackupComponent },
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NewTicketComponent,
        MonitorMatrixComponent,
        ServiceBoardComponent,
        AlertsComponent,
        CustomersComponent,
        DispatchComponent,
        DevicesComponent,
        KBComponent,
        BackupComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ServiceDeskModule { }