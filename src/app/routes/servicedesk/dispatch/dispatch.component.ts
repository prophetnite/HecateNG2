import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './dispatch.component.html',
    styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Dispatch');
    }
    ngOnInit() {
    }

}
