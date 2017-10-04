import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './siem.component.html',
    styleUrls: ['./siem.component.scss']
})
export class SIEMComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('SIEM Page Template ');
    }

    ngOnInit() {
    }

}
