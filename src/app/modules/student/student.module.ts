import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class StudentModule {}
