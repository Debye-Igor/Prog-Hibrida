import { Component, OnInit, } from '@angular/core';
import { IonSearchbar, IonList, IonItem, IonLabel, IonContent, IonTitle, IonToolbar, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-boton-search',
  templateUrl: './boton-search.component.html',
  styleUrls: ['./boton-search.component.scss'],
  standalone: true,
  imports:[IonSearchbar, IonList, IonItem, IonLabel, IonContent, IonTitle, IonToolbar, IonHeader]
})
export class BotonSearchComponent   {
  public data: string[] = [
    'Argentina - Buenos Aires, Iguazú, Bariloche',
    'Australia - Sydney, Great Barrier Reef, Melbourne',
    'Austria - Viena, Salzburgo, Innsbruck',
    'Brasil - Río de Janeiro, São Paulo, Cataratas del Iguazú',
    'Canadá - Toronto, Vancouver, Cataratas del Niágara',
    'Chile - Santiago, Desierto de Atacama, Torres del Paine',
    'China - Pekín, Shanghái, Gran Muralla China',
    'Colombia - Bogotá, Cartagena, Medellín',
    'Corea del Sur - Seúl, Busan, Isla Jeju',
    'Costa Rica - San José, Monteverde, Volcán Arenal',
    'Croacia - Dubrovnik, Split, Zagreb',
    'Cuba - La Habana, Varadero, Cayo Coco',
    'Dinamarca - Copenhague, Aarhus, Odense',
    'Egipto - El Cairo, Luxor, Alejandría, Giza',
    'Emiratos Árabes Unidos - Dubái, Abu Dhabi, Palm Jumeirah',
    'España - Madrid, Barcelona, Sevilla, Valencia',
    'Estados Unidos - Nueva York, Los Ángeles, Las Vegas, Miami',
    'Francia - París, Niza, Marsella, Lyon',
    'Grecia - Atenas, Santorini, Mykonos',
    'Guatemala - Antigua, Lago Atitlán, Tikal',
    'India - Taj Mahal (Agra), Nueva Delhi, Jaipur',
    'Indonesia - Bali, Yakarta, Islas Gili',
    'Italia - Roma, Venecia, Florencia, Milán',
    'Japón - Tokio, Kioto, Osaka, Monte Fuji',
    'Jordania - Petra, Ammán, Wadi Rum',
    'México - Ciudad de México, Cancún, Playa del Carmen',
    'Marruecos - Marrakech, Casablanca, Fez',
    'Noruega - Oslo, Bergen, Fiordos Noruegos',
    'Nueva Zelanda - Auckland, Queenstown, Rotorua',
    'Países Bajos - Ámsterdam, Róterdam, La Haya',
    'Panamá - Ciudad de Panamá, Bocas del Toro, Boquete',
    'Perú - Machu Picchu, Cusco, Lima',
    'Polonia - Cracovia, Varsovia, Gdansk',
    'Portugal - Lisboa, Oporto, Sintra',
    'Reino Unido - Londres, Edimburgo, Manchester',
    'República Checa - Praga, Brno, Český Krumlov',
    'Rusia - Moscú, San Petersburgo, Kazán',
    'Singapur - Marina Bay, Orchard Road, Sentosa Island',
    'Sudáfrica - Ciudad del Cabo, Johannesburgo, Kruger National Park',
    'Suecia - Estocolmo, Gotemburgo, Malmö',
    'Suiza - Zúrich, Ginebra, Interlaken',
    'Tailandia - Bangkok, Phuket, Chiang Mai',
    'Turquía - Estambul, Capadocia, Éfeso',
    'Uruguay - Montevideo, Punta del Este, Colonia del Sacramento',
    'Vaticano - Ciudad del Vaticano, Museos Vaticanos',
    'Vietnam - Hanói, Ho Chi Minh, Bahía de Ha-Long',
    'Islandia - Reikiavik, Blue Lagoon, Círculo Dorado',
    'Filipinas - Manila, Boracay, Palawan',
    'Malasia - Kuala Lumpur, Penang, Islas Perhentian',
    'Finlandia - Helsinki, Rovaniemi, Laponia',
    'Hungría - Budapest, Balaton, Debrecen'
  ];
  

  public resultados: string[] = [];
  public query: string = ''; 

  buscar(event: any) {
    this.query = (event.target as HTMLInputElement).value.toLowerCase();
    
    if (this.query) {
      this.resultados = this.data.filter(d => d.toLowerCase().includes(this.query));
    } else {
      this.resultados = [];
    }
  }
}
