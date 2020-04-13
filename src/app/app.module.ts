import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { TicketModule } from './ticket/ticket.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        HttpClientModule,

        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

        HttpClientInMemoryWebApiModule.forRoot(
            DatabaseService, { dataEncapsulation: false, delay: 200 }
        ),


        TicketModule,
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
