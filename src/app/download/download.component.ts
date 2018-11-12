import { Component, OnInit } from '@angular/core';
import * as PageConf from '../../assets/config/call4papers.json';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  public vm: any;

  constructor() { }

  ngOnInit() {
    this.vm = PageConf.default;
  }

}
