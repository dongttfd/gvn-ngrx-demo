import { createFeatureSelector, createSelector } from '@ngrx/store';

// export const selectFeature = (state: AppState) => state.feature;


export const ticketStore = createFeatureSelector('ticketsStore');

export const selectTicketStore = createSelector(
    ticketStore,
    ({tickets}) => tickets
);

export const selectFirst = createSelector(
    selectTicketStore,
    (tickets) =>  tickets[0]
);
