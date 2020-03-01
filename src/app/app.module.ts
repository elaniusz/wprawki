import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { PersonBrowserComponent } from './component/person-browser/person-browser.component';
import { PersonDetailComponent } from './component/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    PersonBrowserComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
