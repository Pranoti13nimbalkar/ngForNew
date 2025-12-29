import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './shared/component/list/list.component';
import { CardComponent } from './shared/component/card/card.component';
import { TableComponent } from './shared/component/table/table.component';
import { ProductComponent } from './shared/component/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    TableComponent,
    ProductComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
