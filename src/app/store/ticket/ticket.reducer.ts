import { TicketActions, TicketActionTypes } from './ticket.actions';
import { ticketAdapter, TicketState, initialTicketState } from './ticket.state';

export function ticketReducer(
    state = initialTicketState,
    action: TicketActions
): TicketState {
    switch (action.type) {
        case TicketActionTypes.LoadTicketsSuccess: {
            return ticketAdapter.setAll(action.payload.tickets, state);
        }

        case TicketActionTypes.AddTicketSuccess: {
            return ticketAdapter.addOne(action.payload.ticket, state);
        }

        case TicketActionTypes.DeleteTicket: {
            return ticketAdapter.removeOne(action.payload.id, state);
        }

        default: {
            return state;
        }
    }
}
