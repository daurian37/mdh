import { Component, Input, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacieligne.component.html',
  styleUrls: ['./pharmacieligne.component.css']
})
export class PharmacieligneComponent implements OnInit {

@Input() id:number;

  produit: any[];

  constructor(private ProduitService: ProduitService) { }

  ngOnInit() {

    this.produit = this.ProduitService.produit;
  }

}
