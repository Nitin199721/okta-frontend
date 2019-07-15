import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatButtonModule,MatCardModule,MatInputModule,MatListModule, MatToolbarModule,MatFormField} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SugarlevelListComponent } from './sugarlevel-list/sugarlevel-list.component';
import { SugarlevelEditComponent } from './sugarlevel-edit/sugarlevel-edit.component';
import SugarLevelService from './shared/api/sugar-level.service';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sugarlevel-list',
    component: SugarlevelListComponent
  },
  {
    path: 'sugarlevel-add',
    component: SugarlevelEditComponent
  },
  {
    path: 'sugarlevel-edit/:id',
    component: SugarlevelEditComponent
  },
  { path: 'implicit/callback', component: OktaCallbackComponent }
];

const config = {
  issuer: 'https://dev-250932.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oawdiaohtgO13Vle356'
};

@NgModule({
  declarations: [
    AppComponent,
    SugarlevelListComponent,
    SugarlevelEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    // MatFormField,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OktaAuthModule.initAuth(config),
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    SugarLevelService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}