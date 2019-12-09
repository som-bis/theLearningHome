import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule} from 'ngx-bootstrap'; 
import {  AngularFireModule } from '@angular/fire';
import {  AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment.prod';
import { NewblogService } from './shared/services/newblog.service';
import { HomelistComponent } from './components/homelist/homelist.component';
import { HomeformComponent } from './components/homeform/homeform.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth-service';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { SignUpScreenComponent } from './components/sign-up-screen/sign-up-screen.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { RequestBlogComponent } from './components/request-blog/request-blog.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { DescriptionService } from './shared/services/description.service';
import { EditDescriptionComponent } from './components/edit-description/edit-description.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AboutAuthorComponent } from './components/about-author/about-author.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';
import { BloglistsComponent } from './components/bloglists/bloglists.component';
import { RequestBlogScreenComponent } from './screens/request-blog-screen/request-blog-screen.component';
import { RequestComponent } from './screens/request/request.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ImageListComponent } from './components/images/image-list/image-list.component';
import { ImageService } from './shared/services/image.service';
import { ImageComponent } from './components/images/image/image.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomelistComponent,
    HomeformComponent,
    LoginScreenComponent,
    SignUpScreenComponent,
    FirstPageComponent,
    UserComponent,
    RequestBlogComponent,
    RequestListComponent,
    FooterComponent,
    EditDescriptionComponent,
    HomeScreenComponent,
    EditProfileComponent,
    AboutAuthorComponent,
    LearnMoreComponent,
    BloglistsComponent,
    RequestBlogScreenComponent,
    RequestComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    MatTabsModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  }),
  FontAwesomeModule
  ],
  providers: [NewblogService,AuthService,DescriptionService,AuthGuard,ImageService],
  entryComponents:[ImageListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
