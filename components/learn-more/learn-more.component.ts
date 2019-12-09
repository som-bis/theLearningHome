import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { WebsiteDescription } from 'src/app/shared/models/description.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {

  description: WebsiteDescription[];
  // selecteddescription: WebsiteDescription = new WebsiteDescription(); 

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,) { }

  ngOnInit() {
    this.service.getDescription().subscribe(actionArray =>{
      this.description= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as WebsiteDescription;
      })
    });
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.resetForm();
    this.service.webDesc = {
      id: null,
      websitedesc: ''
    }
  }

}
