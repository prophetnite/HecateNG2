import { Component, OnInit } from '@angular/core';

import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-containers',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

    constructor(pt: PagetitleService) {
        pt.setTitle('Accounts Page');
    }
    ngOnInit() {
    }

}
