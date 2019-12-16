import { Component, OnInit } from '@angular/core';
import { NotiappService } from '../../servicios/notiapp.service';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styles: []
})
export class FiltrarComponent implements OnInit {

  paises:any [] = [{
    nombre: 'Argentina',
    letra: 'ar'
  },
  {
    nombre: 'Australia',
    letra: 'au'
  },
  {
    nombre: 'Austria',
    letra: 'at'
  },
  {
    nombre: 'Belgium',
    letra: 'be'
  },
  {
    nombre: 'Brazil',
    letra: 'br'
  },
  {
    nombre: 'Bulgaria',
    letra: 'bg'
  },
  {
    nombre: 'Canada',
    letra: 'ca'
  },
  {
    nombre: 'China',
    letra: 'cn'
  },
  {
    nombre: 'Colombia',
    letra: 'co'
  },
  {
    nombre: 'Cuba',
    letra: 'cu'
  },
  {
    nombre: 'Czech Republic',
    letra: 'cz'
  },
  {
    nombre: 'Egyt',
    letra: 'eg'
  },
  {
    nombre: 'France',
    letra: 'fr'
  },
  {
    nombre: 'Germany',
    letra: 'de'
  },
  {
    nombre: 'Greece',
    letra: 'gr'
  },
  {
    nombre: 'Hong Kong',
    letra: 'hk'
  },
  {
    nombre: 'Hungary',
    letra: 'hu'
  },
  {
    nombre: 'India',
    letra: 'in'
  },
  {
    nombre: 'Indonesia',
    letra: 'id'
  },
  {
    nombre: 'Ireland',
    letra: 'ie'
  },
  {
    nombre: 'Israel',
    letra: 'il'
  },
  {
    nombre: 'Italy',
    letra: 'it'
  },
  {
    nombre: 'Japan',
    letra: 'jp'
  },
  {
    nombre: 'Latvia',
    letra: 'lv'
  },
  {
    nombre: 'Lithuania',
    letra: 'lt'
  },
  {
    nombre: 'Malaysia',
    letra: 'my'
  },
  {
    nombre: 'México',
    letra: 'mx'
  },
  {
    nombre: 'Morocco',
    letra: 'ma'
  },
  {
    nombre: 'Netherlands',
    letra: 'nl'
  },
  {
    nombre: 'New Zealand',
    letra: 'nz'
  },
  {
    nombre: 'Nigeria',
    letra: 'ng'
  }, 
  {
    nombre: 'Norway',
    letra: 'no'
  },
  {
    nombre: 'Phillipines',
    letra: 'ph'
  },
  {
    nombre: 'Poland',
    letra: 'pl'
  },
  {
    nombre: 'Portugal',
    letra: 'pt'
  },
  {
    nombre: 'Romania',
    letra: 'ro'
  },
  {
    nombre: 'Russia',
    letra: 'ru'
  },
  {
    nombre: 'Saudi Arabia',
    letra: 'sa'
  },
  {
    nombre: 'Serbia',
    letra: 'rs'
  },
  {
    nombre: 'Singapore',
    letra: 'sg'
  },
  {
    nombre: 'Slovakia',
    letra: 'sk'
  },
  {
    nombre: 'Slovenia',
    letra: 'si'
  }, 
  {
    nombre: 'South Afríca',
    letra: 'za'
  },
  {
    nombre: 'South Korea',
    letra: 'kr'
  },
  {
    nombre: 'Sweden',
    letra: 'se'
  },
  {
    nombre: 'Switzerland',
    letra: 'ch'
  },
  {
    nombre: 'Taiwan',
    letra: 'tw'
  }, 
  {
    nombre: 'Thailand',
    letra: 'th'
  }, 
  {
    nombre: 'Turkey',
    letra: 'tr'
  },
  {
    nombre: 'UAE',
    letra: 'ae'
  }, 
  {
    nombre: 'Ukarine',
    letra: 'ua'
  },
  {
    nombre: 'United Kingdom',
    letra: 'gb'
  },
  {
    nombre: 'United States',
    letra: 'us'
  },
  {
    nombre: 'Venezuela',
    letra: 've'
  }
];

  categoria:any [] = [{
    nombre: 'Negocios',
    cat: 'business'
  },
  {
    nombre: 'Entretenimiento',
    cat: 'entertainment'
  },
  {
    nombre: 'General',
    cat: 'general'
  },
  {
    nombre: 'Salud',
    cat: 'health'
  },
  {
    nombre: 'Ciencia',
    cat: 'science'
  },
  {
    nombre: 'Deportes',
    cat: 'sports'
  },
  {
    nombre: 'Teccnología',
    cat: 'technology'
  }
];

  pais:any [] = [];
  loading: boolean;

  constructor( private notiapp: NotiappService) { }

  ngOnInit() {
    this.notiapp.show();
    this.notiapp.doSomethingElseUseful();
  }

  onChange(frase: string) {
    console.log(frase); 
    this.loading = true;
    this.notiapp.getPais(frase)
    .subscribe( (resp: any) => {
      this.pais = resp;
      this.loading = false;
    }); // Aquí iría tu lógica al momento de seleccionar algo
}

  onChan(termino: string) {
  console.log(termino); 
  this.loading = true;
  this.notiapp.getCategoria(termino)
  .subscribe( (resp: any) => {
    this.pais = resp;
    this.loading = false;
  }); // Aquí iría tu lógica al momento de seleccionar algo
}
}
