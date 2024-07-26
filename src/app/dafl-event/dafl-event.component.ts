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
  selector: 'app-dafl-event',
  templateUrl: './dafl-event.component.html',
  styleUrls: ['./dafl-event.component.scss']
})
export class DaflEventComponent implements OnInit {

  data:any = [
    {
      src: '../../assets/event/gallery/event-1.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 1/11',
      thumb: '../../assets/event/gallery/event-1.jpg'
    },
    {
      src: '../../assets/event/gallery/event-2.png',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 2/11',
      thumb: '../../assets/event/gallery/event-2.png'
    },
    {
      src: '../../assets/event/gallery/event-3.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 3/11',
      thumb: '../../assets/event/gallery/event-3.jpg'
    },
    {
      src: '../../assets/event/gallery/event-4.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 4/11',
      thumb: '../../assets/event/gallery/event-4.jpg'
    },
    {
      src: '../../assets/event/gallery/event-5.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 5/11',
      thumb: '../../assets/event/gallery/event-5.jpg'
    },
    {
      src: '../../assets/event/gallery/event-6.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 6/11',
      thumb: '../../assets/event/gallery/event-6.jpg'
    },

    {
      src: '../../assets/event/gallery/event-7.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 7/11',
      thumb: '../../assets/event/gallery/event-7.jpg'
    },
    {
      src: '../../assets/event/gallery/event-8.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 8/11',
      thumb: '../../assets/event/gallery/event-8.jpg'
    },
    {
      src: '../../assets/event/gallery/event-9.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 9/11',
      thumb: '../../assets/event/gallery/event-9.jpg'
    },
    {
      src: '../../assets/event/gallery/event-10.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 10/11',
      thumb: '../../assets/event/gallery/event-10.jpg'
    },
    {
      src: '../../assets/event/gallery/event-11.jpg',
      caption: 'ตัวอย่าง Event - อีเว้นท์วันสำคัญ รูปที่ 11/11',
      thumb: '../../assets/event/gallery/event-11.jpg'
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
