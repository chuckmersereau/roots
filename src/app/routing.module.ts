import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeComponent } from './office/office.component';
import { FieldMinistryComponent } from './field-ministry/field-ministry.component';
import { PrayerLettersComponent } from './prayer-letters/prayer-letters.component';
import { ShowComponent } from './prayer-letters/show/show.component';
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
        component: RequestsComponent,
        data: {
          title: "Prayer Requests"
        }
      },
      {
        path: 'submit',
        component: SubmitComponent,
        data: {
          title: "Prayer Requests"
        }
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
    path: 'prayerletters/:id',
    component: PrayerLettersComponent,
    data: {
      title: "Prayer Letters"
    }
  },
  {
    path: 'prayerletters',
    component: PrayerLettersComponent,
    data: {
      title: "Prayer Letters"
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: "About"
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: "Roots"
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
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
