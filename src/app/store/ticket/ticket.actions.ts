import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Ticket } from 'src/app/ticket.model';

export enum TicketActionTypes {
    LoadTickets = '[Ticket] Load Tickets',
    LoadTicketsSuccess = '[Ticket] Load Tickets Success',
    AddTicket = '[Ticket] Add Ticket',
    AddTicketSuccess = '[Ticket] Add Ticket Success',

    UpsertTicket = '[Ticket] Upsert Ticket',
    AddTickets = '[Ticket] Add Tickets',
    UpsertTickets = '[Ticket] Upsert Tickets',
    UpdateTicket = '[Ticket] Update Ticket',
    UpdateTickets = '[Ticket] Update Tickets',
    DeleteTicket = '[Ticket] Delete Ticket',
    DeleteTickets = '[Ticket] Delete Tickets',
    ClearTickets = '[Ticket] Clear Tickets'
}
export class LoadTickets implements Action {
    readonly type = TicketActionTypes.LoadTickets;
}
export class LoadTicketsSuccess implements Action {
    readonly type = TicketActionTypes.LoadTicketsSuccess;

    constructor(public payload: { tickets: Ticket[] }) { }
}

export class AddTicket implements Action {
    readonly type = TicketActionTypes.AddTicket;

    constructor(public payload: { ticket: Ticket }) { }
}
export class AddTicketSuccess implements Action {
    readonly type = TicketActionTypes.AddTicketSuccess;

    constructor(public payload: { ticket: Ticket }) { }
}

export class DeleteTicket implements Action {
    readonly type = TicketActionTypes.DeleteTicket;

    constructor(public payload: { id: number }) { }
}

export type TicketActions =
    LoadTickets
    | LoadTicketsSuccess
    | AddTicket
    | AddTicketSuccess
    | DeleteTicket;
