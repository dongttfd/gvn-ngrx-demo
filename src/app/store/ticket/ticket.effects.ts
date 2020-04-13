import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { TicketService } from 'src/app/ticket.service';
import { LoadTicketsSuccess, TicketActionTypes, AddTicket, AddTicketSuccess } from '../ticket/ticket.actions';

@Injectable()
export class TicketEffects {
    constructor(
        private actions$: Actions,
        private ticketService: TicketService
    ) { }

    loadTickets$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActionTypes.LoadTickets),
        mergeMap(() => this.ticketService.geTickets().pipe(
            map(tickets => new LoadTicketsSuccess({ tickets }))
        ))
    ));

    addTickets$ = createEffect(() => this.actions$.pipe(
        ofType(TicketActionTypes.AddTicket),
        mergeMap((action: AddTicket) => this.ticketService.createTicket(action.payload.ticket).pipe(
            map(ticket => new AddTicketSuccess({ ticket }))
        ))
    ));
}
