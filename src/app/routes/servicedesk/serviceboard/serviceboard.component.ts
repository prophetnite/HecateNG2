import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './serviceboard.component.html',
    styleUrls: ['./serviceboard.component.scss']
})
export class ServiceBoardComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Service Board Component');
    }
    ngOnInit() {
    }

}
