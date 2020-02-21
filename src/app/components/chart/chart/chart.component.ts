import { Component, OnInit, Input } from '@angular/core';
import ChartModel from 'src/app/models/chart.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chart: ChartModel
  constructor() { }

  ngOnInit(): void { }
}
