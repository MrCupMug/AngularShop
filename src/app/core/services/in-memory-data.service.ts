import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
   providedIn: 'root'
 })
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
        {id: 0, name: 'admin'},
        {id: 1, name: 'user1'},
        {id: 2, name: 'lis'},
      ]

    return { users }  

  }

  constructor() { }
}
