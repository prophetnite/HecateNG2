import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-overlap',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Alerts Page');
    }
    ngOnInit() {
    }

}
