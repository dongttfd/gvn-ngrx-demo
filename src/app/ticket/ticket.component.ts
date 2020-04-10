import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadTicketsSuccess } from '../store/ticket/ticket.actions';
import { selectTicketStore, selectFirst } from '../store/ticket/ticket.selectors';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

    constructor(
        private store: Store<any>
    ) { }

    ngOnInit(): void {
        this.store.select('ticketsStore')
            .subscribe(data => console.log(data));
    }

    loadFunction() {
        const tickets = [
            {
                title: 'title ticket1',
                content: 'content ticket1'
            }
        ];

        this.store.dispatch(new LoadTicketsSuccess({ tickets }));
    }
}
