import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MyGalleryComponent } from './my-gallery/my-gallery.component';
import { DepartmentSuggestionComponent } from './department-suggestion/department-suggestion.component';
import { MetAppComponent } from './met-app/met-app.component';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AuthTestComponent } from 'src/AuthTest (demo)/AuthTest.component';
import { LoginComponent } from 'src/api-authorization/login/login.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MyGalleryComponent,
    DepartmentSuggestionComponent,
    FetchDataComponent,
    MetAppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard]}, //added AuthorizeGuard
      { path: 'app-login', component: LoginComponent}, //canActivate: [AuthorizeGuard]},
      { path: 'mygallery', component: MyGalleryComponent },
      { path: 'mysuggestion', component: DepartmentSuggestionComponent },
      { path: 'metapp', component: MetAppComponent }      
    ])
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }