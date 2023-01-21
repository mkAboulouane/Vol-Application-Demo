import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.sass"],
})
export class BreadcrumbComponent implements OnInit {
  @Input() title: string;
  @Input() items: any[];
  @Input() active_item: string;

  constructor() {}

  ngOnInit(): void {}
}
