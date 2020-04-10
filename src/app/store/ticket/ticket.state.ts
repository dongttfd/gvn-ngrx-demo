
export const ticketFeatureKey = 'ticket';

export interface Ticket {
    title: string;
    content: string;
}

export interface TicketState {
    tickets: Ticket[];
}

export const initialState: TicketState = {
    tickets: []
};
