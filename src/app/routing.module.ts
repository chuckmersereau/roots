import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { FieldMinistryComponent } from './field-ministry/field-ministry.component';
import { PrayerLettersComponent } from './prayer-letters/prayer-letters.component';
import { AboutComponent } from './about/about.component';
import { PrayerRequestsComponent } from './prayer-requests/prayer-requests.component';
import { SubmitComponent } from './prayer-requests/submit/submit.component';
import { RequestsComponent } from './prayer-requests/requests/requests.component';

const routes: Routes = [
  {
    path: 'prayerrequests',
    component: PrayerRequestsComponent,
    data: {
      title: "Prayer Requests"
    },
    children: [
      {
        path: '',
        component: RequestsComponent
      },
      {
        path: 'submit',
        component: SubmitComponent
      }
    ]
  },
  {
    path: 'office',
    component: OfficeComponent,
    data: {
      title: "Office"
    },
  },
  {
    path: 'fieldministry',
    component: FieldMinistryComponent,
    data: {
      title: "Field Ministry"
    },
  },
  {
    path: 'prayerletters',
    component: PrayerLettersComponent,
    data: {
      title: "Prayer Letters"
    },
  },
  {
    path: 'about',
    component: AboutComponent
  }
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
