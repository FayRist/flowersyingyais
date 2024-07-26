import { Component, OnInit } from '@angular/core';
import {
  GridLayout,
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy,
  ModalGalleryService,
  ModalGalleryRef,
  PlainLibConfig
} from '@ks89/angular-modal-gallery';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-dafl-balloon',
  templateUrl: './dafl-balloon.component.html',
  styleUrls: ['./dafl-balloon.component.scss']
})
export class DaflBalloonComponent implements OnInit {

  data:any = [
    {
      src: '../../assets/balloon/gallery/ballon1.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 1/8',
      thumb: '../../assets/balloon/gallery/ballon1.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon2.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 2/8',
      thumb: '../../assets/balloon/gallery/ballon2.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon3.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 3/8',
      thumb: '../../assets/balloon/gallery/ballon3.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon4.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 4/8',
      thumb: '../../assets/balloon/gallery/ballon4.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon5.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 5/8',
      thumb: '../../assets/balloon/gallery/ballon5.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon6.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 6/8',
      thumb: '../../assets/balloon/gallery/ballon6.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon7.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 7/8',
      thumb: '../../assets/balloon/gallery/ballon7.jpg'
    },
    {
      src: '../../assets/balloon/gallery/ballon8.jpg',
      caption: 'ตัวอย่าง Balloon - ลูกโป่ง รูปที่ 8/8',
      thumb: '../../assets/balloon/gallery/ballon8.jpg'
    },

  ];

  _albums:any = [];
  private _album: any = [];
  constructor(private _lightbox: Lightbox) {
  }

  open(index: number): void {
    // open lightbox

    this._lightbox.open(this.data, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit(){
  }

}
