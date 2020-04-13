import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadTicketsSuccess, LoadTickets, AddTicket, DeleteTicket } from '../store/ticket/ticket.actions';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../ticket.service';
import { selectTickets } from '../store/ticket/ticket.selectors';
import { Observable } from 'rxjs';
import { Ticket } from '../ticket.model';
import { loremRandomWords } from '../string';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

    tickets$: Observable<Ticket[]>;

    constructor(
        private store: Store,
        private ticketService: TicketService
    ) { }

    ngOnInit(): void {
        this.tickets$ = this.store.select(selectTickets);
        this.store.dispatch(new LoadTickets());
    }

    add() {
        const ticket: Ticket = {
            title: loremRandomWords(null, null, 5),
            content: loremRandomWords(null, null, 10),
        };
        this.store.dispatch(new AddTicket({ ticket }));
    }

    delete(ticket: Ticket) {
        this.store.dispatch(new DeleteTicket({ id: ticket.id }));
    }
}
