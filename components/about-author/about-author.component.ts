import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ProfileDescription } from 'src/app/shared/models/profile.model';
import { NgForm } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-author',
  templateUrl: './about-author.component.html',
  styleUrls: ['./about-author.component.css']
})
export class AboutAuthorComponent implements OnInit {

  profile: ProfileDescription[]; 
  editname: boolean = true;
  editdesignation: boolean = true;
  editcontact: boolean = true;
  editdescription: boolean =  true;
  faEdit=faEdit;

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.service.getProfile().subscribe(actionArray =>{
      this.profile= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as ProfileDescription;
      })
    });
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.profiledesc = {
      id: null,
      profiledesc: '',
      name:'',
      contact:'',
      designation:''
    }
  }

}
