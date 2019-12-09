import { Injectable } from '@angular/core';
import { Newblog } from '../models/newblog.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Requestblog } from '../models/requestblog.model';
import { WebsiteDescription } from '../models/description.model';
import { ProfileDescription } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class NewblogService {
  formData: Newblog;
  requestData: Requestblog;
  webDesc: WebsiteDescription;
  profiledesc: ProfileDescription;

  constructor(private firestore:AngularFirestore) { }

  getBlogs(){
   return this.firestore.collection('Bloglist').snapshotChanges();
  }

  getRequests(){
    return this.firestore.collection('Requestlist').snapshotChanges();
   }

  getDescription(){
    return this.firestore.collection('Description').snapshotChanges();
  }

  getProfile(){
    return this.firestore.collection('Profile').snapshotChanges(); 
  }

}
