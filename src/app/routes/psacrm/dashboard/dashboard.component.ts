import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-overlap',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Dashboard Page');
    }
    ngOnInit() {
    }

}
