import { NgModule } from '@angular/core';
import { RoutingModule } from '..//routing.module';

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
    RoutingModule
  ],
})
export class PrayerRequestsModule { }
