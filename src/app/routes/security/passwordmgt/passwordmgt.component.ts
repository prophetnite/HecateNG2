import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './passwordmgt.component.html',
    styleUrls: ['./passwordmgt.component.scss']
})
export class PasswordMGTComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('Password MGT Page Template ');
    }

    ngOnInit() {
    }

}
