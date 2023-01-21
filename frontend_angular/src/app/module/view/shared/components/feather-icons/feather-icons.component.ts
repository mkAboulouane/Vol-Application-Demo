import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-feather-icons",
  templateUrl: "./feather-icons.component.html",
  styleUrls: ["./feather-icons.component.sass"],
})
export class FeatherIconsComponent implements OnInit {
  @Input("icon") public icon;
  @Input("class") public class;
  constructor() {}

  ngOnInit(): void {}
}
