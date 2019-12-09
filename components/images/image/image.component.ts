import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, switchAll } from "rxjs/operators";
import { ImageService } from '../../../shared/services/image.service';
import { NewblogService } from '../../../shared/services/newblog.service';
import { Newblog } from '../../../shared/models/newblog.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DescriptionService } from '../../../shared/services/description.service';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageListComponent } from '../../images/image-list/image-list.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: []
})
export class ImageComponent implements OnInit {
  list: Newblog[];
  showVar: string;
  descClose: boolean = false;
  faFrown=faFrown;
  imageList: any[];
  rowIndexArray: any[];
  selectedCaption:any;
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage,public service: NewblogService,
    private firestore: AngularFirestore,
    private router: Router,
    private toastr: ToastrService,
    public descService: DescriptionService,
    public imageService:ImageService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.imageService.getImageDetailList();
    this.resetForm();
        
    
    this.imageService.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
        console.warn(this.imageList);
      }
    );
  }


  
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/assets/images/imageplaceholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `Images/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.imageService.insertImageDetails(formValue);
            this.resetForm();
            Swal.fire({
              title: 'Successfully Uploaded',
              text: "Your Image has been successfully uploaded",
              icon: 'success',
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
            }).then((result) => {
              if (result.value) {
              }
            })
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
    });
    this.imgSrc = '/assets/images/imageplaceholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

}
