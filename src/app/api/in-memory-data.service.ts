import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
   providedIn: 'root',
 })
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
        {id: 0, name: 'test'},
      ]

    return { users }

  }
}
