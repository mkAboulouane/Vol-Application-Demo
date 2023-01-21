import { Component, OnInit } from "@angular/core";
import { DirectionService } from "src/app/core/service/direction.service";

@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: [],
})
export class MainLayoutComponent implements OnInit {
  direction: any;
  public config: any = {};
  constructor(private directoryService: DirectionService) {
    this.directoryService.currentData.subscribe((currentData) => {
      if (currentData) {
        this.direction = currentData;
      } else {
        if (localStorage.getItem("isRtl")) {
          if (localStorage.getItem("isRtl") === "true") {
            this.direction = "rtl";
          } else if (localStorage.getItem("isRtl") === "false") {
            this.direction = "ltr";
          }
        } else {
          if (this.config.layout.rtl == true) {
            this.direction = "rtl";
          } else {
            this.direction = "ltr";
          }
        }
      }
    });
  }
  ngOnInit(): void {}
}
