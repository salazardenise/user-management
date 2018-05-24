import { UsersService } from './users.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import {RouterModule, Routes} from '@angular/router';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserFormComponent } from './update-user-form/update-user-form.component';
import { ScoresListComponent } from './scores-list/scores-list.component';
import { ScoresListService } from './scores-list/scores-list.service';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'new',
    component: NewUserFormComponent
  },
  {
    path: 'update',
    component: UpdateUserFormComponent
  },
  {
    path: 'scores',
    component: ScoresListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    NewUserFormComponent,
    UpdateUserFormComponent,
    ScoresListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UsersService,
              ScoresListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
