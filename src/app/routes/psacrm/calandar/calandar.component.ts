import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './calandar.component.html',
    styleUrls: ['./calandar.component.scss']
})
export class CalandarComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Calandar Page');
    }
    ngOnInit() {
    }

}
