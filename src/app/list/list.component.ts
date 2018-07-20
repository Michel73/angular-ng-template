import { AfterContentInit, Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {

  @Input()
  entries: any[];

  @ContentChild(TemplateRef) entriesTemplate: TemplateRef<any>;
  hasCustomTemplate: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.hasCustomTemplate = this.entriesTemplate != null;
  }

}
