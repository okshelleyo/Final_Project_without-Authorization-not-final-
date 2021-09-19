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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MyGalleryComponent,
    DepartmentSuggestionComponent,
    MetAppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //{ path: 'fetch-data', component: FetchDataComponent, //canActivate: [AuthorizeGuard]}, //added AuthorizeGuard
      { path: 'mygallery', component: MyGalleryComponent },
      { path: 'mysuggestion', component: DepartmentSuggestionComponent },
      { path: 'metapp', component: MetAppComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //TODO: ....what?
