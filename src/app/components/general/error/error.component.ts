import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    @Input() errors: string[];

    constructor() { }

    ngOnInit(): void {
    }

}
