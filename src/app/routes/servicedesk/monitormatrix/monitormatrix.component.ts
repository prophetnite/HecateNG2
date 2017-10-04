import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-columns',
    templateUrl: './monitormatrix.component.html',
    styleUrls: ['./monitormatrix.component.scss']
})
export class MonitorMatrixComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Monitor Matrix');
    }

    ngOnInit() {
    }

}
