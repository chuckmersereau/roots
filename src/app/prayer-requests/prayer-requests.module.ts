import { NgModule } from '@angular/core';
import { RoutingModule } from '..//routing.module';
import { CommonModule } from '@angular/common';

import { SubmitComponent } from './submit/submit.component';
import { PrayerRequestsComponent } from './prayer-requests.component';
import { RequestsComponent } from './requests/requests.component';

@NgModule({
  declarations: [
    SubmitComponent,
    PrayerRequestsComponent,
    RequestsComponent
  ],
  imports: [
    RoutingModule,
    CommonModule
  ],
})
export class PrayerRequestsModule { }
