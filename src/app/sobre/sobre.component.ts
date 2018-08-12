import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})

@Injectable()
export class SobreComponent implements OnInit {

  constructor(private Querystring: ActivatedRoute) { }

  queryStringNome: string;

  ngOnInit() {
    this.queryStringNome = this.Querystring.snapshot.params['Nome'];
  }

}
