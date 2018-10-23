import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FieldMinistryComponent } from './field-ministry/field-ministry.component';
import { PrayerLettersComponent } from './prayer-letters/prayer-letters.component';
import { OfficeComponent } from './office/office.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FieldMinistryComponent,
    PrayerLettersComponent,
    OfficeComponent,
    PrayerRequestsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
