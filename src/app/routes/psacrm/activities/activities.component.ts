import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Activities Page');
    }
    ngOnInit() {
    }

}
