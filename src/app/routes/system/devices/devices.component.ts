import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Devices');
    }
    ngOnInit() {
    }

}
