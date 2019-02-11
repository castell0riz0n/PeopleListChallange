import { Injectable } from '@angular/core';

@Injectable()
export class DataServiceMock {
  constructor() {}

  getPeople(): Array<{}> {
    return [
      {
        id: '1',
        name: 'Ali Khorsand'
      }
    ];
  }
}