import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { StoreModule } from '@ngrx/store';
import { ticketReducer } from '../store/ticket/ticket.reducer';
import { TicketEffects } from '../store/ticket/ticket.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [TicketComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature('ticketsStore', ticketReducer),
        EffectsModule.forRoot([TicketEffects])
    ],
    exports: [
        TicketComponent
    ]
})
export class TicketModule { }
