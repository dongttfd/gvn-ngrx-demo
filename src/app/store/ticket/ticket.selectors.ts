import { ticketAdapter } from './ticket.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = ticketAdapter.getSelectors();

export const ticketStore = createFeatureSelector('ticketsStore');

export const selectTickets = createSelector(
    ticketStore,
    selectAll
);
