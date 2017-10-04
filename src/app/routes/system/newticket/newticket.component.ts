import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-boxed',
    templateUrl: './newticket.component.html',
    styleUrls: ['./newticket.component.scss']
})
export class NewTicketComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('NewTicket Page');
    }

    ngOnInit() {
    }

}
