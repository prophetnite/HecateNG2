import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeModule } from 'angular-tree-component';

import { SharedModule } from '../../shared/shared.module';
import { PatchingComponent } from './patching/patching.component';
import { AntivirusComponent } from './antivirus/antivirus.component';
import { AppControlComponent } from './appcontrol/appcontrol.component';
import { CryptoWatchComponent } from './cryptowatch/cryptowatch.component';
import { MDMComponent } from './mdm/mdm.component';
import { RoutingComponent } from './routing/routing.component';
import { SIEMComponent } from './siem/siem.component';
import { PasswordMGTComponent } from './passwordmgt/passwordmgt.component';



const routes: Routes = [
    { path: 'patching', component: PatchingComponent },
    { path: 'antivirus', component: AntivirusComponent },
    { path: 'appcontrol', component: AppControlComponent },
    { path: 'cryptowatch', component: CryptoWatchComponent },
    { path: 'mdm', component: MDMComponent },
    { path: 'routing', component: RoutingComponent },
    { path: 'siem', component: SIEMComponent },
    { path: 'passwordmgt', component: PasswordMGTComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TreeModule
    ],
    declarations: [
        PatchingComponent,
        AntivirusComponent,
        AppControlComponent,
        CryptoWatchComponent,
        MDMComponent,
        RoutingComponent,
        SIEMComponent,
        PasswordMGTComponent
        
    ],
    exports: [
        RouterModule
    ]
})
export class SecurityModule { }
