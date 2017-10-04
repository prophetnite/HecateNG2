import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './workflows.component.html',
    styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Workflows Page');
    }
    ngOnInit() {
    }

}
