import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-overlap',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Contacts Page :D');
    }
    ngOnInit() {
    }

}
