import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './kb.component.html',
    styleUrls: ['./kb.component.scss']
})
export class KBComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('KB Template Page');
    }
    ngOnInit() {
    }

}
