import { Component, OnInit } from '@angular/core';
import * as Configuration from '../../../configuration.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  config: any = Configuration.header;

  constructor() { }

  ngOnInit(): void {
  }

}
