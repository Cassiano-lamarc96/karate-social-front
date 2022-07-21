import { Component, OnInit } from '@angular/core';
import { StudentListDataHelp } from './helpers/student-list-data.help';
import { PeriodicElementModel } from './models/periodic-element.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataSource: any;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  constructor() {
    this.dataSource = StudentListDataHelp.ELEMENT_DATA;
  }

  ngOnInit(): void {}
}
