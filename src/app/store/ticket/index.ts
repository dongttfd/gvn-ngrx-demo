import { ActionReducerMap, State } from '@ngrx/store';
import { ticketReducer } from './ticket.reducer';
import { TicketState } from './ticket.state';

export interface RootState {
    ticketState: TicketState;
}

export const actionReducerMap: ActionReducerMap<RootState> = {
    ticketState: ticketReducer
};
