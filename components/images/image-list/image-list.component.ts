import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  imageData : any;
  faTimesCircle=faTimesCircle;
  
  constructor(private service: ImageService, @Inject(MAT_DIALOG_DATA) public data, public dialog: MatDialog) {
    this.imageData = data;
    console.warn(this.imageData);
   }

  ngOnInit() {
    
  }

  onClose(){
    console.log("Closed");
    this.dialog.closeAll();
  }

}
