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
  selector: 'app-dafl-af',
  templateUrl: './dafl-af.component.html',
  styleUrls: ['./dafl-af.component.scss']
})
export class DaflAfComponent implements OnInit {
  data1:any = [
    {
      src: '../../assets/af/gallery/01/af-box-1.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 1/13',
      thumb: '../../assets/af/gallery/01/af-box-1.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-2.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 2/13',
      thumb: '../../assets/af/gallery/01/af-box-2.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-3.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 3/13',
      thumb: '../../assets/af/gallery/01/af-box-3.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-4.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 4/13',
      thumb: '../../assets/af/gallery/01/af-box-4.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-5.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 5/13',
      thumb: '../../assets/af/gallery/01/af-box-5.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-6.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 6/13',
      thumb: '../../assets/af/gallery/01/af-box-6.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-7.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 7/13',
      thumb: '../../assets/af/gallery/01/af-box-7.jpg'
    },

    {
      src: '../../assets/af/gallery/01/af-box-13.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 8/13',
      thumb: '../../assets/af/gallery/01/af-box-13.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-9.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 9/13',
      thumb: '../../assets/af/gallery/01/af-box-9.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-10.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 10/13',
      thumb: '../../assets/af/gallery/01/af-box-10.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-11.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 11/13',
      thumb: '../../assets/af/gallery/01/af-box-11.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-12.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 12/13',
      thumb: '../../assets/af/gallery/01/af-box-12.jpg'
    },
    {
      src: '../../assets/af/gallery/01/af-box-8.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - กล่องของขวัญ รูปที่ 13/13',
      thumb: '../../assets/af/gallery/01/af-box-8.jpg'
    },
  ];

  data2:any = [
    {
      src: '../../assets/af/gallery/02/af-vase-1.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 1/16',
      thumb: '../../assets/af/gallery/02/af-vase-1.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-2.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 2/16',
      thumb: '../../assets/af/gallery/02/af-vase-2.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-3.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 3/16',
      thumb: '../../assets/af/gallery/02/af-vase-3.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-4.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 4/16',
      thumb: '../../assets/af/gallery/02/af-vase-4.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-21.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 5/16',
      thumb: '../../assets/af/gallery/02/af-vase-21.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-22.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 6/16',
      thumb: '../../assets/af/gallery/02/af-vase-22.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-7.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 7/16',
      thumb: '../../assets/af/gallery/02/af-vase-7.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-8.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 8/16',
      thumb: '../../assets/af/gallery/02/af-vase-8.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-9.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 9/16',
      thumb: '../../assets/af/gallery/02/af-vase-9.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-10.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 10/16',
      thumb: '../../assets/af/gallery/02/af-vase-10.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-11.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 11/16',
      thumb: '../../assets/af/gallery/02/af-vase-11.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-12.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 12/16',
      thumb: '../../assets/af/gallery/02/af-vase-12.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-13.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 13/16',
      thumb: '../../assets/af/gallery/02/af-vase-13.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-14.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 14/16',
      thumb: '../../assets/af/gallery/02/af-vase-14.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-5.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 15/16',
      thumb: '../../assets/af/gallery/02/af-vase-5.jpg'
    },
    {
      src: '../../assets/af/gallery/02/af-vase-6.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - แจกันดอกไม้ รูปที่ 16/16',
      thumb: '../../assets/af/gallery/02/af-vase-6.jpg'
    },
  ];

  data3:any = [
    {
      src: '../../assets/af/gallery/03/af-panicle-1.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 1/8',
      thumb: '../../assets/af/gallery/03/af-panicle-1.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-2.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 2/8',
      thumb: '../../assets/af/gallery/03/af-panicle-2.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-3.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 3/8',
      thumb: '../../assets/af/gallery/03/af-panicle-3.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-4.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 4/8',
      thumb: '../../assets/af/gallery/03/af-panicle-4.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-5.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 5/8',
      thumb: '../../assets/af/gallery/03/af-panicle-5.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-7.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 6/8',
      thumb: '../../assets/af/gallery/03/af-panicle-7.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-8.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 7/8',
      thumb: '../../assets/af/gallery/03/af-panicle-8.jpg',
    },
    {
      src: '../../assets/af/gallery/03/af-panicle-6.jpg',
      caption: 'ตัวอย่าง Artificial Flowers - ช่อดอกไม้ รูปที่ 8/8',
      thumb: '../../assets/af/gallery/03/af-panicle-6.jpg',
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

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit(){
  }

}
