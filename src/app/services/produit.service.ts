import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable()

export class ProduitService {


  produit= [
{
  id:1,
  nom:'paracetamol',
  description:'douleur et fièvre',
  prix:1900
},
{
  id:2,
  nom:'nivaquine',
  description:'paludisme',
  prix:400
},
{
  id:3,
  nom:'advil',
  description:'douleur et fièvre pour enfant',
  prix:28
},
{
  id:4,
  nom:'ampiciline',
  description:'antibiotique',
  prix:190
},
{
  id:5,
  nom:'blédine',
  description:'nourisson pour enfant',
  prix:19
}

  ]
  constructor( private HttpClient : HttpClient) { }

  getProduitById(id:number){

    const produits = this.produit.find(
  
      (produitsObject)=>{
  
        return produitsObject.id === id;
      }
    );
    return produits;
  
  }

  /* methode de sauvegarde et recupération des données depuis un backend firebase avec le lien de la base de données
  firebase */
 /* saveProduitToServer(){

    this.HttpClient.put('http://localhost/phpmyadmin/db_structure.php?server=1&db=mdh/pharmacieligne.json',this.produit)
    .subscribe(
      ()=>{
       console.log('enregistrement terminé');
      },
      (error) =>{
        console.log('erreur de sauvegarde' + error);
      }
      );
  }

  getProduitFromServer(){
    this.HttpClient
    .get<any[]>('http://localhost/phpmyadmin/db_structure.php?server=1&db=mdh/pharmacieligne.json')
    .subscribe(
      (response)=>{
        this.produit = response;
      },
      (error) =>{

        console.log('erreur de chargement' + error);

      }
    );
  } */

}

