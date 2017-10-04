import { Component, OnInit } from '@angular/core';
import { PagetitleService } from '../../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-buttons',
    templateUrl: './patching.component.html',
    styleUrls: ['./patching.component.scss']
})
export class PatchingComponent implements OnInit {

    disabled;

    constructor(pt: PagetitleService) {
        pt.setTitle('Patching Page Template ');
    }

    ngOnInit() {
    }

}
