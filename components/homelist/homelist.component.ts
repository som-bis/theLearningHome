import { Component, OnInit } from '@angular/core';
import { NewblogService } from '../../shared/services/newblog.service';
import { Newblog } from '../../shared/models/newblog.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DescriptionService } from '../../shared/services/description.service';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { ImageService } from 'src/app/shared/services/image.service';
import { MatDialog } from '@angular/material/dialog';
import { ImageListComponent } from '../images/image-list/image-list.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-homelist',
  templateUrl: './homelist.component.html',
  styleUrls: ['./homelist.component.css']
})
export class HomelistComponent implements OnInit {

  list: Newblog[];
  showVar: string;
  descClose: boolean = false;
  faFrown=faFrown;
  imageList: any[];
  rowIndexArray: any[];
  selectedCaption:any;
  foundImage:boolean = false;

  constructor(public service: NewblogService,
    private firestore: AngularFirestore,
    private router: Router,
    private toastr: ToastrService,
    public descService: DescriptionService,
    public imageService:ImageService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.imageService.getImageDetailList();

    this.service.getBlogs().subscribe(actionArray =>{
      this.list= actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Newblog;
      })
    });

    
this.imageService.imageDetailList.snapshotChanges().subscribe(
  list => {
    this.imageList = list.map(item => { return item.payload.val(); });
    this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
    console.warn(this.imageList);
  }
);
  }

  onEdit(blog: Newblog){
    this.service.formData =Object.assign({}, blog);
  }

  onDelete(id: string){
    if(confirm("Are you sure to delete this record")){
      this.firestore.doc('Bloglist/'+id).delete();
      this.toastr.error("Blog Deleted Successfully!","Done");
    }
  }


  toggleDesc(id: any){
    this.showVar = id;
    this.descClose= !this.descClose;
    console.log(id);
}

showDesc(title:string, description:string){
  this.descService.getDesc(title, description);
}

openDialog(url: any, caption: any ): void {
  const dialogRef = this.dialog.open(ImageListComponent, { 
    width:"100%",
    height:"100%",
    data: {
      url:url,
      caption:caption
    },
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // this.animal = result;
  });
}

onCaptionClicked(caption:any){
  this.selectedCaption = caption;
  this.imageList.forEach(element => {
    if(this.selectedCaption.toLowerCase() == element.caption.toLowerCase()){
      this.openDialog(element.imageUrl,this.selectedCaption);
      this.foundImage=true;
    }
  });
  if(this.foundImage == false){ 
    Swal.fire({
      title: 'OOPS!',
      text: "No Images Found for this blog!!",
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.value) {
      }
    })
}
  this.foundImage = false;
}
}