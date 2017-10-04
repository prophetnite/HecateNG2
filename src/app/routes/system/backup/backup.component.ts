import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './backup.component.html',
    styleUrls: ['./backup.component.scss']
})
export class BackupComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Backup Page');
    }
    ngOnInit() {
    }

}
