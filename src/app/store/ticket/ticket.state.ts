import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Ticket } from 'src/app/ticket.model';

export interface TicketState extends EntityState<Ticket> {
    // additional entities state properties
}

const selectTicketId = (ticket) => ticket.id;

const sort = (ticketA: Ticket, ticketB: Ticket) => {
    return ticketA.title.charCodeAt(0) - ticketB.title.charCodeAt(0);
};

export const ticketAdapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>({
    selectId: selectTicketId,
    sortComparer: sort
});

export const initialTicketState: TicketState = ticketAdapter.getInitialState({
    // additional entity state properties
});
