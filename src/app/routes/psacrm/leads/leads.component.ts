import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './leads.component.html',
    styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Leads Page');
    }
    ngOnInit() {
    }

}
