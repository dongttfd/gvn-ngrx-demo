import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TicketModule } from './ticket/ticket.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

        TicketModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
