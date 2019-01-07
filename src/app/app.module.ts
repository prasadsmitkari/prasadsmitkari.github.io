import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { GridComponent } from './grid/grid.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component' ;
import {ReactiveFormsModule} from '@angular/forms' ;
import {BookService} from './book-service.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment' ;


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ToolbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
