import { Action, State } from '@ngrx/store';
import { TicketActionTypes, TicketActions } from './ticket.actions';
import { initialState, TicketState } from './ticket.state';

export function ticketReducer(
    state = initialState,
    action: TicketActions
): TicketState {
    switch (action.type) {
        case TicketActionTypes.LoadTicketsSuccess:
            return {...state, tickets: [...action.payload.tickets]};

        default:
            return state;
    }
}
