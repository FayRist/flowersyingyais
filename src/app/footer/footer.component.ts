import { Component, Inject, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  deviceInfo: import("ngx-device-detector").DeviceInfo | undefined;
  isMobile: any = false;
  isTablet: any = false;
  isDesktopDevice: any = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,

    private deviceService: DeviceDetectorService
  ) {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    if (this.isMobile === true || this.isTablet === true) {
      console.log("isMobile : " + this.isMobile)
      console.log("isTablet : " + this.isTablet)
      // this.document.getElementById('theme')?.setAttribute('href', '/assets/css/mobile.css');
      // this.appRef.detectChanges();
    }
    else if (this.isDesktopDevice === true) {
      console.log("isDesktopDevice : " + this.isDesktopDevice)
      // this.document.getElementById('theme')?.setAttribute('href', '/assets/css/desktop.css');
    }
  }
  ngOnInit(): void {
  }

}
