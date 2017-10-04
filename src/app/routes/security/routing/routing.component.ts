import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('Routing Page Template ');
    }

    ngOnInit() {
    }

}
