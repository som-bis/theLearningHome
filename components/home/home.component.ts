import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { Newblog } from '../../shared/models/newblog.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: Newblog[];
  currentUser: string;
  faSmileBeam=faSmileBeam;
  faUserEdit=faUserEdit;
  faGlobe=faGlobe;
  faQuestion=faQuestion;

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.service.getBlogs().subscribe(actionArray =>{
      this.list= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Newblog;
      })
    });
  }

}
