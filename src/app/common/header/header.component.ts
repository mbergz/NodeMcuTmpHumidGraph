import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:  ['./header.component.scss']
})
export class HeaderComponent {
    @Input() title: string;
    currentLink: string;

    private linkTextMap = new Map([
       [ '/graph', 'Graphical overview' ],
       [ '/log', 'Node mcu log' ],
    ]);

    constructor(private router: Router) {
        this.router.events.subscribe((event: any) => {
            const value = this.linkTextMap.get(this.router.url);
            this.currentLink = value ? value : this.currentLink;
        });
    }
}
