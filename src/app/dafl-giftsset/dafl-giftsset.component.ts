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
  selector: 'app-dafl-giftsset',
  templateUrl: './dafl-giftsset.component.html',
  styleUrls: ['./dafl-giftsset.component.scss']
})
export class DaflGiveSetComponent implements OnInit {

  data1:any = [
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-1.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 1/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-1.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-2.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 2/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-2.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-3.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 3/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-3.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-4.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 4/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-4.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-5.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 5/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-5.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-6.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 6/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-6.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-7.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 7/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-7.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-8.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 8/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-8.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-9.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 9/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-9.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-10.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 10/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-10.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-11.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 11/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-11.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-12.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 12/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-12.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-13.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 13/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-13.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-14.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 14/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-14.jpg'
    },
    {
      src: '../../assets/giftset/gallery/01/giftset-basket-15.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระเช้าของฝาก รูปที่ 15/15',
      thumb: '../../assets/giftset/gallery/01/giftset-basket-15.jpg'
    },
  ];

  data2:any = [
    {
      src: '../../assets/giftset/gallery/02/giftset-vase-1.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระถางประดับต้นไม้มงคล รูปที่ 1/5',
      thumb: '../../assets/giftset/gallery/02/giftset-vase-1.jpg'
    },
    {
      src: '../../assets/giftset/gallery/02/giftset-vase-2.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระถางประดับต้นไม้มงคล รูปที่ 2/5',
      thumb: '../../assets/giftset/gallery/02/giftset-vase-2.jpg'
    },
    {
      src: '../../assets/giftset/gallery/02/giftset-vase-3.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระถางประดับต้นไม้มงคล รูปที่ 3/5',
      thumb: '../../assets/giftset/gallery/02/giftset-vase-3.jpg'
    },
    {
      src: '../../assets/giftset/gallery/02/giftset-vase-4.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระถางประดับต้นไม้มงคล รูปที่ 4/5',
      thumb: '../../assets/giftset/gallery/02/giftset-vase-4.jpg'
    },
    {
      src: '../../assets/giftset/gallery/02/giftset-vase-5.jpg',
      caption: 'ตัวอย่าง Gifts Set - กระถางประดับต้นไม้มงคล รูปที่ 5/5',
      thumb: '../../assets/giftset/gallery/02/giftset-vase-5.jpg'
    },
  ];

  data3:any = [
    {
      src: '../../assets/giftset/gallery/03/giftset-box-1.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 1/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-1.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-2.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 2/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-2.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-3.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 3/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-3.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-4.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 4/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-4.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-5.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 5/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-5.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-6.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 6/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-6.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-7.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 7/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-7.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-8.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 8/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-8.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-9.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 9/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-9.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-10.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 10/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-10.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-11.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 11/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-11.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-12.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 12/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-12.jpg'
    },
    {
      src: '../../assets/giftset/gallery/03/giftset-box-13.jpg',
      caption: 'ตัวอย่าง Gifts Set - ของชำร่วย รูปที่ 13/13',
      thumb: '../../assets/giftset/gallery/03/giftset-box-13.jpg'
    },
  ];

  data4:any = [
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-1.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 1/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-1.jpg'
    },
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-2.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 2/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-2.jpg'
    },
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-3.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 3/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-3.jpg'
    },
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-4.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 4/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-4.jpg'
    },
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-5.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 5/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-5.jpg'
    },
    {
      src: '../../assets/giftset/gallery/04/giftset-acces-6.jpg',
      caption: 'ตัวอย่าง Gifts Set - ดอกไม้ประดับกล่อง จิวเวอรี่ รูปที่ 6/6',
      thumb: '../../assets/giftset/gallery/04/giftset-acces-6.jpg'
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

  open3(index: number): void {
    // open lightbox

    this._lightbox.open(this.data3, index);
  }

  open4(index: number): void {
    // open lightbox

    this._lightbox.open(this.data4, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit(){
  }

}
