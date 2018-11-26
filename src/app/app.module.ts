import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './/routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FieldMinistryComponent } from './field-ministry/field-ministry.component';
import { PrayerLettersComponent } from './prayer-letters/prayer-letters.component';
import { OfficeComponent } from './office/office.component';
import { PrayerRequestsModule } from './prayer-requests/prayer-requests.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FieldMinistryComponent,
    OfficeComponent,
    BannerComponent,
    AboutComponent,
    PrayerLettersComponent
  ],
  imports: [
    BrowserModule,
    PrayerRequestsModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
