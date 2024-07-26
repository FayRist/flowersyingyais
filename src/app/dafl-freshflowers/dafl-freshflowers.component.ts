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
  selector: 'app-dafl-freshflowers',
  templateUrl: './dafl-freshflowers.component.html',
  styleUrls: ['./dafl-freshflowers.component.scss']
})
export class DaflFreshFlowersComponent implements OnInit {

  data1:any = [
    {
      src: '../../assets/ff/gallery/01/ff-vase-1.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 1/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-1.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-2.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 2/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-2.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-3.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 3/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-3.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-4.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 4/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-4.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-5.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 5/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-5.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-6.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 6/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-6.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-7.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 7/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-7.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-8.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 8/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-8.jpg'
    },
    {
      src: '../../assets/ff/gallery/01/ff-vase-9.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 9/9',
      thumb: '../../assets/ff/gallery/01/ff-vase-9.jpg'
    },
  ];

  data2l:any = [
    {
      src: '../../assets/ff/gallery/02/l/ff-l-1.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 1/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-1.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-2.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 2/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-2.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-3.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 3/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-3.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-4.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 4/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-4.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-5.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 5/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-5.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-6.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 6/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-6.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-7.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 7/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-7.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/l/ff-l-8.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ L รูปที่ 8/8',
      thumb: '../../assets/ff/gallery/02/l/ff-l-8.jpg'
    },
  ];

  data2m:any = [
    {
      src: '../../assets/ff/gallery/02/m/ff-m-1.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 1/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-1.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-2.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 2/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-2.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-3.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 3/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-3.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-4.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 4/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-4.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-5.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 5/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-5.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-6.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 6/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-6.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-7.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 7/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-7.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-8.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 8/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-8.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-9.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 9/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-9.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/m/ff-m-10.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - ช่อดอกไม้ M รูปที่ 9/10',
      thumb: '../../assets/ff/gallery/02/m/ff-m-10.jpg'
    },
  ];

  data2s:any = [
    {
      src: '../../assets/ff/gallery/02/s/ff-s-1.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 1/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-1.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/s/ff-s-2.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 2/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-2.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/s/ff-s-3.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 3/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-3.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/s/ff-s-4.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 4/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-4.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/s/ff-s-5.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 5/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-5.jpg'
    },
    {
      src: '../../assets/ff/gallery/02/s/ff-s-6.jpg',
      caption: 'ตัวอย่าง Fresh Flowers - แจกันดอกไม้ รูปที่ 6/9',
      thumb: '../../assets/ff/gallery/02/s/ff-s-6.jpg'
    },
  ];



  _albums:any = [];
  private _album: any = [];
  constructor(private _lightbox: Lightbox) {
  }

  open1(index: number): void {
    // open lightbox

    this._lightbox.open(this.data1, index);
  }

  open2l(index: number): void {
    // open lightbox

    this._lightbox.open(this.data2l, index);
  }

  open2m(index: number): void {
    // open lightbox

    this._lightbox.open(this.data2m, index);
  }

  open2s(index: number): void {
    // open lightbox

    this._lightbox.open(this.data2s, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit(){
  }

}
