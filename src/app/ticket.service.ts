import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TicketService {

    constructor(
        private httpClient: HttpClient
    ) { }

    geTickets(): Observable<Ticket[]> {
        return this.httpClient.get<Ticket[]>('/api/tickets');
    }

    createTicket(ticket: Ticket): Observable<Ticket> {
        // console.log(ticket);
        return this.httpClient.post<Ticket>('/api/tickets', ticket);
    }
}
