import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './appcontrol.component.html',
    styleUrls: ['./appcontrol.component.scss']
})
export class AppControlComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('App Control Page Template ');
    }

    ngOnInit() {
    }

}
