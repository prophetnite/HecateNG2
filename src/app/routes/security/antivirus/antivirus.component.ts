import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './antivirus.component.html',
    styleUrls: ['./antivirus.component.scss']
})
export class AntivirusComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('Antivirus Page Template ');
    }

    ngOnInit() {
    }

}
