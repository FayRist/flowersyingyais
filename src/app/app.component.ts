import { Component, Inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  device(){
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

  title = 'flowernew';
}
