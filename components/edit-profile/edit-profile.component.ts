import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { ProfileDescription } from 'src/app/shared/models/profile.model';
import { NgForm } from '@angular/forms';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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

  onSubmit(form:NgForm){
    let data =Object.assign({},form.value);
    delete data.id;
    if(form.value.id!=null){
      this.firestore.doc('Profile/'+form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success("Profile Updated Successfully!", "Good Work!");
    }
    else{
      this.resetForm(form);
      this.toastr.warning("Current Profile Description Not chosen","Not Updated!")
    }
  }

  onEdit(blog: ProfileDescription){
    this.service.profiledesc =Object.assign({}, blog);
  }

  updateName(){
    this.editname = !this.editname;
    this.editdesignation = true;
    this.editcontact = true;
  }

  updateDesignation(){
    this.editdesignation = !this.editdesignation;
    this.editname = true;
    this.editcontact =  true;
  }

  updateContact(){
    this.editcontact = !this.editcontact;
    this.editname = true;
    this.editdesignation = true;
  }



}
