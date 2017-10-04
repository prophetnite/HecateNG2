import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './opportunities.component.html',
    styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('opportunities Page');
    }
    ngOnInit() {
    }

}
