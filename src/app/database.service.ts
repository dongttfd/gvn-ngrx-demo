import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Ticket } from './ticket.model';

export class DatabaseService implements InMemoryDbService {

    constructor() { }

    createDb() {

        const tickets: Ticket[] = [
            {
                id: 1,
                title: 'bac',
                content: 'content ticket1'
            },

            {
                id: 2,
                title: 'abc',
                content: 'content ticket2'
            },
        ];

        return  { tickets };
    }
}
