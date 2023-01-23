import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {

  games:Array<Juegos>=[];
  constructor() {
    this.inicializarComponentes();
  }

  inicializarComponentes() {
    this.games=[
      {titulo: "Zelda breath of the wild", portada: "https://media.game.es/COVERV2/3D_L/134/134624.png", resumen:"Breath of the Wild es la décima octava entrega de la saga The Legend of Zelda.13​ Cuando el videojuego es lanzado, no es ubicado en la línea de tiempo oficial de la saga, según en palabras de su creador porque «las personas disfrutaban imaginando la historia».14​ Sin embargo, en agosto de 2018 Nintendo lo vuelve a colocar en la cronología oficial.15​ Los eventos de Breath of the Wild toman lugar al final de la cronología oficial, pero sin tener relación con las tres líneas de tiempo alternativas.16​ ", enlaceCompra:"https://www.game.es/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-134624"},
      {titulo: "Portal2", portada: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg?t=1673563198", resumen:"Portal 2 continúa con esa fórmula ganadora consistente en una innovadora mecánica de juego, historia y música que condujeron al Portal original a ganar más de 70 galardones y lo convirtieron en un nuevo mito de la industria.", enlaceCompra:"https://store.steampowered.com/app/620/Portal_2/?l=spanish"},
      {titulo: "Super mario World", portada: "https://media.game.es/COVERV2/3D_L/182/182786.png", resumen:"Únete a Mario, Luigi, la princesa Peach y Toad en una aventura para salvar el Reino de las hadas en Super Mario 3D World + Bowser’s Fury para Nintendo Switch! Bowser ha secuestrado a la princesa hada… ¡y solo nuestros héroes podrán rescatarla!", enlaceCompra:"https://www.game.es/buscar/super-mario-world"},
      {titulo: "Super metroid", portada: "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/super_nintendo_4/SQ_SNES_SuperMetroid.jpg", resumen:"¡Cuando los piratas espaciales secuestran al último Metroid, la cazarrecompensas Samus Aran entra en acción!", enlaceCompra:"https://www.nintendo.es/Juegos/Super-Nintendo/Super-Metroid-279613.html"},
      {titulo: "Zelda a link to the past", portada: "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/super_nintendo_4/SQ_SNES_TheLegendOfZeldaALinkToThePast.jpg", resumen:"En una noche oscura y tormentosa, el joven Link se embarca en una aventura que ninguno de los dos olvidaréis. Han raptado a la princesa Zelda y un mago malvado quiere liberar a Ganon, el rey de las tinieblas. ¡Solo Link puede salvar Hyrule!", enlaceCompra:"https://www.nintendo.es/Juegos/Super-Nintendo/The-Legend-of-Zelda-A-Link-to-the-Past-841179.html"},



    ]
  }
}

class Juegos {
  titulo: String;
  portada: String;
  resumen: String;
  enlaceCompra: String;

  constructor(titulo: String, portada: String, resumen: String, enlaceCompra: String) {
    this.titulo=titulo;
    this.portada = portada;
    this.resumen = resumen;
    this.enlaceCompra = enlaceCompra;
  }
}