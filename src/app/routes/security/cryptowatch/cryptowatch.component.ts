import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './cryptowatch.component.html',
    styleUrls: ['./cryptowatch.component.scss']
})
export class CryptoWatchComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('Cryptowatch Page Template ');
    }

    ngOnInit() {
    }

}
