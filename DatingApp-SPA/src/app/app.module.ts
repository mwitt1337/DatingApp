import { AuthService } from './_services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './member-list/member-list.component';
import { RouterModule, Routes } from '@angular/router';
// import { appRoutes } from './routes';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent},
   { path: 'members', component: MemberListComponent},
   { path: 'messages', component: MessagesComponent},
   { path: 'lists', component: ListsComponent},
   { path: '**', redirectTo: 'home', pathMatch: 'full'}//  order is important because first match wins
];

@NgModule({
   imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot()
   ],
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ],
   exports: [RouterModule]
})
export class AppModule { }
