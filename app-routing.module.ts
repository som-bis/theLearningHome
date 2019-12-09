import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBlogComponent } from './screens/create-blog/create-blog.component'; 
import { HomeComponent } from './components/home/home.component';
import { ShowblogComponent } from './screens/showblog/showblog.component';
import { FirstComponent } from './screens/first/first.component';
import { UserScreenComponent } from './screens/user-screen/user-screen.component';
import { ShowRequestsComponent } from './screens/show-requests/show-requests.component';
import { DescriptionComponent } from './screens/description/description.component';
import { EditWebsiteDescriptionComponent } from './screens/edit-website-description/edit-website-description.component';
import { EditProfileScreenComponent } from './screens/edit-profile-screen/edit-profile-screen.component';
import { AboutAuthorScreenComponent } from './screens/about-author-screen/about-author-screen.component';
import { LearnMoreScreenComponent } from './screens/learn-more-screen/learn-more-screen.component';
import { BloglistsScreenComponent } from './screens/bloglists-screen/bloglists-screen.component';
import { RequestBlogScreenComponent } from './screens/request-blog-screen/request-blog-screen.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ImagesComponent } from './components/images/images.component';




const routes: Routes = [
  {path: 'create',canActivate: [AuthGuard],component: CreateBlogComponent },
  {path: 'show',canActivate: [AuthGuard], component: ShowblogComponent },
  {path: 'home',canActivate: [AuthGuard], component: HomeComponent  },
  {path: '', component: FirstComponent},
  {path: 'user',canActivate: [AuthGuard],component: UserScreenComponent},
  {path: 'request',canActivate: [AuthGuard], component: RequestBlogScreenComponent},
  {path: 'showrequests',canActivate: [AuthGuard], component: ShowRequestsComponent},
  {path: 'description',canActivate: [AuthGuard], component:DescriptionComponent},
  {path: 'editdescription',canActivate: [AuthGuard], component:EditWebsiteDescriptionComponent},
  {path: 'editprofile',canActivate: [AuthGuard], component: EditProfileScreenComponent},
  {path: 'aboutauthor',canActivate: [AuthGuard], component: AboutAuthorScreenComponent},
  {path: 'learnmore',canActivate: [AuthGuard], component:LearnMoreScreenComponent},
  {path: 'bloglists', canActivate: [AuthGuard],component:BloglistsScreenComponent},
  {path: 'uploadimages',canActivate: [AuthGuard], component:ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CreateBlogComponent, 
  HomeComponent, 
  ShowblogComponent,
  FirstComponent ,
  UserScreenComponent,
  RequestBlogScreenComponent,
  ShowRequestsComponent,
  DescriptionComponent,
  EditWebsiteDescriptionComponent,
  EditProfileScreenComponent,
  AboutAuthorScreenComponent,
  LearnMoreScreenComponent,
  BloglistsScreenComponent,
  ImagesComponent
  ]
