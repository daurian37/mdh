import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { Routes, RouterModule } from '@angular/router';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InscriptionComponent } from './inscription/inscription.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PharmacieligneComponent } from './pharmacieligne/pharmacieligne.component';
import { HeaderindexComponent } from './headerindex/headerindex.component';
import { HeaderComponent } from './header/header.component';
import { ReseauComponent } from './reseau/reseau.component';
import { AcceuilsiteComponent } from './acceuilsite/acceuilsite.component';
import { PanierComponent } from './panier/panier.component';
import { CaisseComponent } from './caisse/caisse.component';
import { MerciComponent } from './merci/merci.component';
import { ProduitComponent } from './produit/produit.component';
import { ProfilComponent } from './profil/profil.component';
import { ProduitService } from './services/produit.service';
import { AuthserviceService } from './services/authservice.service';
import { AuthguardService } from './services/authguard.service';
import { HeadersoumenuComponent } from './headersoumenu/headersoumenu.component';
import { AdduserService } from './services/adduser.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialComponent } from './social/social.component';



const appRoutes : Routes =[
  {path: '' , component: AcceuilComponent },
  {path: 'profil', component:ProfilComponent},
  {path: 'caisse', component:CaisseComponent},
  {path: 'merci', component:MerciComponent},
  {path: 'panier', component:PanierComponent},
  {path: 'pharmacie/:id', component:ProduitComponent},
  {path: 'reseau', component:ReseauComponent}, 
  {path: 'pharmacie',component:PharmacieligneComponent},  
  {path: 'acceuil', component: AcceuilComponent },
  {path: 'inscription', component: InscriptionComponent },
  {path: 'a_propos', component: AProposComponent },
  {path: 'social', component:SocialComponent},
  {path: 'nous_contacter', component: NousContacterComponent},
  {path: 'not-found' , component: FourOFourComponent },
  {path: '**' , redirectTo: '/not-found' }
];

/*   guard : ,canActivate:[AuthguardService]*/

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    NousContacterComponent,
    AProposComponent,
    FooterComponent,
    InscriptionComponent,
    FourOFourComponent,
   PharmacieligneComponent,
    HeaderindexComponent,
    HeaderComponent,
    ReseauComponent,
    AcceuilsiteComponent,
    PanierComponent,
    CaisseComponent,
    MerciComponent,
    ProduitComponent,
    ProfilComponent,
    HeadersoumenuComponent,
    SocialComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProduitService,
    AuthserviceService,
    AuthguardService,
    AdduserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
