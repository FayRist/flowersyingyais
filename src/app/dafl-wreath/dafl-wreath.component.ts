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
  selector: 'app-dafl-wreath',
  templateUrl: './dafl-wreath.component.html',
  styleUrls: ['./dafl-wreath.component.scss']
})
export class DaflWreathComponent implements OnInit {

  data1:any = [
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-1.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 1/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-1.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-2.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 2/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-2.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-3.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 3/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-3.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-4.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 4/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-4.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-5.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 5/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-5.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-6.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 6/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-6.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-7.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 7/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-7.jpg'
    },
    {
      src: '../../assets/wreath/gallery/01/weath-ringff-8.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดดอกไม้สด รูปที่ 8/8',
      thumb: '../../assets/wreath/gallery/01/weath-ringff-8.jpg'
    },
  ];

  data2:any = [
    {
      src: '../../assets/wreath/gallery/02/weath-tree-1.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 1/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-1.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-2.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 2/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-2.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-3.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 3/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-3.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-4.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 4/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-4.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-5.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 5/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-5.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-6.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 6/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-6.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-7.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 7/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-7.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-8.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 8/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-8.jpg'
    },
    {
      src: '../../assets/wreath/gallery/02/weath-tree-9.jpg',
      caption: 'ตัวอย่าง Wreath - พวงหรีดต้นไม้มงคล รูปที่ 9/9',
      thumb: '../../assets/wreath/gallery/02/weath-tree-9.jpg'
    },
  ];

  datafan1:any = [
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-1.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 1/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-1.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-2.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 2/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-2.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-3.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 3/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-3.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-4.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 4/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-4.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-5.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 5/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-5.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-6.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 6/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-6.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-7.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 7/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-7.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-8.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 8/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-8.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub1/weath-fan1-9.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 9/9',
      thumb: '../../assets/wreath/gallery/03/sub1/weath-fan1-9.jpg'
    },
  ];

  datafan2:any = [
    {
      src: '../../assets/wreath/gallery/03/sub2/weath-fan2-1.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 1/5',
      thumb: '../../assets/wreath/gallery/03/sub2/weath-fan2-1.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub2/weath-fan2-2.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 2/5',
      thumb: '../../assets/wreath/gallery/03/sub2/weath-fan2-2.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub2/weath-fan2-3.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 3/5',
      thumb: '../../assets/wreath/gallery/03/sub2/weath-fan2-3.jpg'
    },
    {
      src: '../../assets/wreath/gallery/03/sub2/weath-fan2-4.png',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 4/5',
      thumb: '../../assets/wreath/gallery/03/sub2/weath-fan2-4.png'
    },
    {
      src: '../../assets/wreath/gallery/03/sub2/weath-fan2-5.jpg',
      caption: 'ตัวอย่าง Wreath - ช่อดอกไม้ พัดลมดอกไม้ประดิษฐ์ รูปที่ 5/5',
      thumb: '../../assets/wreath/gallery/03/sub2/weath-fan2-5.jpg'
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

  open2(index: number): void {
    // open lightbox

    this._lightbox.open(this.data2, index);
  }

  openFan1(index: number): void {
    // open lightbox

    this._lightbox.open(this.datafan1, index);
  }

  openFan2(index: number): void {
    // open lightbox

    this._lightbox.open(this.datafan2, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit(){
  }

}
