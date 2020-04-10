import { Action } from '@ngrx/store';
import { Ticket } from './ticket.state';

export enum TicketActionTypes {
    LoadTicketsSuccess = '[Ticket] Load Tickets Success',
}

export class LoadTicketsSuccess implements Action {
    readonly type = TicketActionTypes.LoadTicketsSuccess;
    constructor(
        public payload: { tickets: Ticket[] }
    ) {}
}

export type TicketActions = LoadTicketsSuccess;
