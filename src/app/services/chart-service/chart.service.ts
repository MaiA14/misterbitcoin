import { Injectable } from '@angular/core';
import chart from '../../models/chart.model';

@Injectable(
  { providedIn: 'root' }
)
export class ChartService {

  constructor() { }

  public createChart(name: string, type: string, data, columnName: object): chart {
    data = data.map(line => {
      return { x: new Date(line.x * 1000).toLocaleDateString(), y: line.y }
    })
    return new chart(name, type, data, columnName)
  }

}