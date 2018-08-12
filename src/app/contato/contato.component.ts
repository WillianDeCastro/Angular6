import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})


export class ContatoComponent implements OnInit {

  telefoneProg: string;

  constructor(private myQuerystring: ActivatedRoute) { }

  ngOnInit() {
    this.telefoneProg = this.myQuerystring.snapshot.params['telefone'];
  }

}
