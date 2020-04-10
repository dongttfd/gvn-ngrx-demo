import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { StoreModule } from '@ngrx/store';
import { ticketReducer } from '../store/ticket/ticket.reducer';

@NgModule({
    declarations: [TicketComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('ticketsStore', ticketReducer)
    ],
    exports: [
        TicketComponent
    ]
})
export class TicketModule { }
