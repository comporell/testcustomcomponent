import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import {Page, StackLayout} from "@nativescript/core";
import {LabelViewComponent} from "~/app/shared/label-view/label-view.component";

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  page:Page;
  customBase:StackLayout;
  counter:number=0;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  onTapBtn1(){
    let tmpComponent = new LabelViewComponent();
    tmpComponent.text = "New Component added " + this.counter++;
    console.log(tmpComponent.text);
    this.customBase.addChild(tmpComponent);
  }
  onPageLoaded(args):void {
    this.page = <Page> args.object;
    this.customBase = <StackLayout> this.page.getViewById("customBase");
  }
}
