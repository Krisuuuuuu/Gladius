import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogsModule } from '../../dialogs/dialogs.module';

import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { BookingTableComponent } from './booking-table/booking-table.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookingHistoryReducer } from 'src/app/state+/reducers/booking-history.reducers';
import { BookingHistoryEffects } from 'src/app/state+/effects/booking-history.effects';


@NgModule({
  declarations: [
    BookingHistoryComponent,
    BookingTableComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    DialogsModule,
    StoreModule.forFeature('bookingHistory', bookingHistoryReducer),
    EffectsModule.forFeature([BookingHistoryEffects]),
  ],
  exports: [BookingHistoryComponent]
})
export class BookingHistoryModule { }
