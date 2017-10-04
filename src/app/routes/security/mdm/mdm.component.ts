import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './mdm.component.html',
    styleUrls: ['./mdm.component.scss']
})
export class MDMComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('MDM Page Template ');
    }

    ngOnInit() {
    }

}
