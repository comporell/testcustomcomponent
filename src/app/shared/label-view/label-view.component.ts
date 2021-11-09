import { Component, Input } from '@angular/core';
import {TextBase} from "@nativescript/core/ui/text-base";

@Component({
  selector: 'ns-label-view',
  templateUrl: './label-view.component.html'
})
export class LabelViewComponent extends TextBase {

  @Input() title: string;

}
