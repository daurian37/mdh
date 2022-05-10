import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  nom: string;
  description: string;
  prix: number;
 

  constructor(private ProduitService:ProduitService,private route: ActivatedRoute) { }

  ngOnInit(){

    const id = this.route.snapshot.params['id'];
    this.nom = this.ProduitService.getProduitById(+id).nom;
    this.description = this.ProduitService.getProduitById(+id).description;
    this.prix = this.ProduitService.getProduitById(+id).prix;
   
  }
/*
  onSave(){
    this.ProduitService.saveProduitToServer();
   }

   onFetch(){

    this.ProduitService.getProduitFromServer();
   }
*/

}
