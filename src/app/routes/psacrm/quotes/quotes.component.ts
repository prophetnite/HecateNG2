import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Quotes Page Page');
    }
    ngOnInit() {
    }

}
