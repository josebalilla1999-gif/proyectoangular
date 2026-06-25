import { Component } from '@angular/core';
import { Pokemon } from '../services/pokemon';

export interface Trainer {
  name: string;
  category: string,
  description: string;
  team: Pokemon[];
}

@Component({
  selector: 'app-trainer',
  imports: [],
  templateUrl: './trainer.html',
  styleUrl: './trainer.css',
})

export class TrainerComponent {
  trainers: Trainer[] = [
    {
      name: 'Brock',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Plateada, especialista en Pokémon de tipo Roca, tan fuerte como la misma',
      team: []
    },
    {
      name: 'Misty',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Celeste, especialista en Pokémon de tipo Agua, una sirena con mucho carácter y fuerte personalidad',
      team: []
    },
    {
      name: 'Lt. Surge',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Carmín, especialista en Pokémon de tipo Eléctrico, compartió los roles de Teniente y Líder de gimnasio',
      team: []
    },
    {
      name: 'Erika',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Azulona, especialista en Pokémon de tipo Planta, amante de la naturaleza',
      team: []
    },
    {
      name: 'Koga',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Fucsia, especialista en Pokémon de tipo Veneno, padre de Sachiko y maestro ninja',
      team: []
    },
    {
      name: 'Sachiko',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Fucsia, especialista en Pokémon de tipo Veneno, hija de Koga, tomó el puesto de líder de gimnasio al convertirse su padre en miembro del Alto Mando',
      team: []
    },
    {
      name: 'Sabrina',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Azafrán, especialista en Pokémon de tipo Psíquico, conocida por su inexpresividad y su conexión mental con sus Pokémon',
      team: []
    },
    {
      name: 'Blaine',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Isla Canela, especialista en Pokémon de tipo Fuego, un científico experto en los acertijos',
      team: []
    },
    {
      name: 'Giovanni',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Verde, especialista en Pokémon de tipo Tierra, además de ser Líder de Gimnasio es el jefe del Team Rocket',
      team: []
    },
    {
      name: 'Azul',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Verde después de la desbandada del Team Rocket, tiene mucha variedad de tipos',
      team: []
    },
    {
      name: 'Pegaso',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Malva, especialista en Pokémon de tipo Volador, elegante y competitivo',
      team: []
    },
    {
      name: 'Antón',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Azalea, especialista en Pokémon de tipo Bicho, cazabichos y enciclopedia andante',
      team: []
    },
    {
      name: 'Blanca',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Trigal, especialista en Pokémon de tipo Normal, joven y caprichosa, pero cuidado con su Miltank',
      team: []
    },
    {
      name: 'Morti',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Iris, especialista en Pokémon de tipo Fantasma, místico adivino del futuro',
      team: []
    },
    {
      name: 'Aníbal',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Orquídea, especialista en Pokémon de tipo Lucha, siempre está meditando en su cascada',
      team: []
    },
    {
      name: 'Yasmina',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Olivo, especialista en Pokémon de tipo Acero, tiene una estrecha relación con el Ampharos encargado del faro',
      team: []
    },
    {
      name: 'Fredo',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Caoba, especialista en Pokémon de tipo Hielo, maestro del crudo invierno',
      team: []
    },
    {
      name: 'Débora',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Endrino, especialista en Pokémon de tipo Dragón, prima de Lance, no basta con derrotarla para obtener su medalla',
      team: []
    },
    {
      name: 'Petra',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Férrica, especialista en Pokémon de tipo Roca, alumna aventajada de la Escuela de Entrenadores',
      team: []
    },
    {
      name: 'Marcial',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Azuliza, especialista en Pokémon de tipo Lucha, un surfista considerado un maremoto',
      team: []
    },
    {
      name: 'Erico',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Malvalona, especialista en Pokémon de tipo Eléctrico, le encanta poner trampas eléctricas en su gimnasio',
      team: []
    },
    {
      name: 'Candela',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Lavacalda, especialista en Pokémon de tipo Fuego, mejor no acercarse mucho, que quema',
      team: []
    },
    {
      name: 'Norman',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Petalia, especialista en Pokémon de tipo Normal, padre del personaje protagonista de Hoenn',
      team: []
    },
    {
      name: 'Alana',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Arborada, especialista en Pokémon de tipo Volador, puede ver el ir y venir de las corrientes del viento',
      team: []
    },
    {
      name: 'Vito y Leti',
      category: 'Líder de gimnasio',
      description: 'Líderes de gimnasio de Ciudad Algaria, especialistas en Pokémon de tipo Psíquico, hermanos mellizos, parecidos como el sol a la luna',
      team: []
    },
    {
      name: 'Plubio',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Arrecípolis, especialista en Pokémon de tipo Agua, acabaría convirtiéndose brevemente en Campeón de la Liga de Hoenn',
      team: []
    },
    {
      name: 'Galano',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Arrecípolis, especialista en Pokémon de tipo Agua, cogió el relevo de Plubio como Líder de gimnasio',
      team: []
    },
    {
      name: 'Roco',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Pirita, especialista en Pokémon de tipo Roca, minero e hijo de Acerón',
      team: []
    },
    {
      name: 'Gardenia',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Vetusta, especialista en Pokémon de tipo Planta, adora los Pokémon de tipo Planta pero le tiene miedo a los fantasmas',
      team: []
    },
    {
      name: 'Fantina',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Corazón, especialista en Pokémon de tipo Fantasma, toda una celebridad en los Concursos Pokémon',
      team: []
    },
    {
      name: 'Brega',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Rocavelo, especialista en Pokémon de tipo Lucha, luchadora y amiga de Inverna',
      team: []
    },
    {
      name: 'Mananti',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Pradera, especialista en Pokémon de tipo Agua, más conocido como Mananti el Destructor',
      team: []
    },
    {
      name: 'Acerón',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Canal, especialista en Pokémon de tipo Acero, adora la defensa y padre de Roco',
      team: []
    },
    {
      name: 'Inverna',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Puntaneva, especialista en Pokémon de tipo Hielo, chica diamantina amiga de Brega',
      team: []
    },
    {
      name: 'Lectro',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Marina, especialista en Pokémon de tipo Eléctrico, amigo de Fausto y quizá, al mismo nivel que un Alto Mando',
      team: []
    },
    {
      name: 'Millo',
      category: 'Líder de gimnasio',
      description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Planta',
      team: []
    },
    {
      name: 'Zeo',
      category: 'Líder de gimnasio',
      description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Fuego',
      team: []
    },
    {
      name: 'Maíz',
      category: 'Líder de gimnasio',
      description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Agua',
      team: []
    },
    {
      name: 'Aloe',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Esmalte, especialista en Pokémon de tipo Normal, regente del museo de la ciudad',
      team: []
    },
    {
      name: 'Camus',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Porcelana, especialista en Pokémon de tipo Bicho, un artista que recibe su inspiración de los insectos',
      team: []
    },
    {
      name: 'Camila',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Mayólica, especialista en Pokémon de tipo Eléctrico, supermodelo amiga de Gerania',
      team: []
    },
    {
      name: 'Yakón',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Fayenza, especialista en Pokémon de tipo Tierra, empresario y defiende que "Ante todo, honestidad"',
      team: []
    },
    {
      name: 'Gerania',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Loza, especialista en Pokémon de tipo Volador, piloto de avión, comandante del aeropuerto de la ciudad y amiga de Camila',
      team: []
    },
    {
      name: 'Junco',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Teja, especialista en Pokémon de tipo Hielo, conocido como el Enmascarado de Hielo, además de Líder de gimnasio es actor',
      team: []
    },
    {
      name: 'Iris',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Caolín, especialista en Pokémon de tipo Dragón, en formación pero destinada a ser Campeona',
      team: []
    },
    {
      name: 'Lirio',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Caolín, especialista en Pokémon de tipo Dragón, mentor de Iris y alcalde de la ciudad',
      team: []
    },
    {
      name: 'Cheren',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Engobe, especialista en Pokémon de tipo Normal, pasó de ser rival a Líder de gimnasio',
      team: []
    },
    {
      name: 'Hiedra',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Hormigón, especialista en Pokémon de tipo Veneno, bajista rockera y nociva',
      team: []
    },
    {
      name: 'Ciprián',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Marga, especialista en Pokémon de tipo Agua, pescador y buceador de piel muy bronceada',
      team: []
    },
    {
      name: 'Violeta',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Novarte, especialista en Pokémon de tipo Bicho, fotógrafa experta de la que dicen que nunca se le escapa una sonrisa de su cámara',
      team: []
    },
    {
      name: 'Lino',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Relieve, especialista en Pokémon de tipo Roca, escalador amante del deporte y de los fósiles',
      team: []
    },
    {
      name: 'Corelia',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Yantra, especialista en Pokémon de tipo Lucha, patinadora y heredera del secreto de la megaevolución',
      team: []
    },
    {
      name: 'Amaro',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Témpera, especialista en Pokémon de tipo Planta, apasionado de la jardinería, siempre va acompañado de sus tijeras',
      team: []
    },
    {
      name: 'Lem',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Luminalia, especialista en Pokémon de tipo Eléctrico, inventor que arroja luz sobre el mundo',
      team: []
    },
    {
      name: 'Valeria',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Romantis, especialista en Pokémon de tipo Hada, diseñadora, modista y estilista, con pasado como modelo',
      team: []
    },
    {
      name: 'Ástrid',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Fluxus, especialista en Pokémon de tipo Psíquico, médium capaz de ver el futuro mirando las estrellas',
      team: []
    },
    {
      name: 'Édel',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Fractal, especialista en Pokémon de tipo Hielo, un exterior glacial que esconde un espíritu al rojo vivo',
      team: []
    },
    {
      name: 'Percy',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Hoyuelo, especialista en Pokémon de tipo Planta, granjero aguerrido siempre rodeado de Wooloo',
      team: []
    },
    {
      name: 'Cathy',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Amura, especialista en Pokémon de tipo Agua, una ola serena que oculta un espíritu competitivo',
      team: []
    },
    {
      name: 'Naboru',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Pistón, especialista en Pokémon de tipo Fuego, originario de Hoenn, siempre está corriendo pese a su avanzada edad',
      team: []
    },
    {
      name: 'Judith',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Ladera, especialista en Pokémon de tipo Lucha, karateka prodigio, comparte el puesto de Líder con Alistair',
      team: []
    },
    {
      name: 'Alistair',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Ladera, especialista en Pokémon de tipo Fantasma, chico miedoso, comparte el puesto de Líder con Judith',
      team: []
    },
    {
      name: 'Sally',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Plié, especialista en Pokémon de tipo Hada, veteranísima Líder de gimnasio, eligió a Berto como su sucesor',
      team: []
    },
    {
      name: 'Morris',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Auriga, especialista en Pokémon de tipo Roca, hijo de Mel, comparte el puesto de Líder de gimnasio con su madre',
      team: []
    },
    {
      name: 'Mel',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Auriga, especialista en Pokémon de tipo Hielo, madre de Morris, comparte el puesto de Líder de gimnasio con su hijo',
      team: []
    },
    {
      name: 'Nerio',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Crampón, especialista en Pokémon de tipo Siniestro, hermano mayor de Roxy, reniega de la mecánica Dinamax',
      team: []
    },
    {
      name: 'Roy',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Ciudad Artejo, especialista en Pokémon de tipo Dragón, el Líder más fuerte, especialista en climas y combates dobles',
      team: []
    },
    {
      name: 'Berto',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Plié, especialista en Pokémon de tipo Hada, anterior rival del protagonista de los juegos de Galar, tomó el relevo de Sally al jubilarse esta',
      team: []
    },
    {
      name: 'Roxy',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio de Pueblo Crampón, especialista en Pokémon de tipo Siniestro, anterior rival del protagonista de los juegos de Galar, tomó el relevo de Nerio como Líder de gimnasio',
      team: []
    },
    {
      name: 'Sófora',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio en la segunda división de Galar, especialista en Pokémon de tipo Veneno, tan mona como venenosa',
      team: []
    },
    {
      name: 'Dreo',
      category: 'Líder de gimnasio',
      description: 'Líder de gimnasio en la segunda división de Galar, especialista en Pokémon de tipo Psíquico, poseedor de poderes psíquicos',
      team: []
    },
    {
      name: 'Mostaz',
      category: 'Entrenador',
      description: 'Ex Campeón y ex Líder de gimnasio, especialista en Pokémon de tipo Lucha, regenta un Dojo de combate muy popular en Galar',
      team: []
    },
    {
      name: 'Peony',
      category: 'Entrenador',
      description: 'Ex Campeón y ex Líder de gimnasio, especialista en Pokémon de tipo Acero, hermano menor de Rose, no suele escuchar a los demás',
      team: []
    },
    {
      name: 'Azul',
      category: 'Rival',
      description: 'El primer gran rival de los videojuegos, acabaría tomando el puesto de líder de gimnasio de Ciudad Verde después de derrotar al Team Rocket',
      team: []
    },
    {
      name: 'Cheren',
      category: 'Rival',
      description: 'Uno de los dos rivales del primer protagonista de los juegos de Teselia, amigo de la infancia de este',
      team: []
    },
    {
      name: 'Berto',
      category: 'Rival',
      description: 'Rival del protagonista de los juegos de Galar, reclutado por Sally para sucederla como Líder de gimnasio, aunque su tipo especializado es el tipo Psíquico',
      team: []
    },
    {
      name: 'Roxy',
      category: 'Rival',
      description: 'Rival del protagonista de los juegos de Galar, hermana menor de Nerio, siempre tiene miembros del Team Yell alrededor suya cuando combate',
      team: []
    },
    {
      name: 'Koga',
      category: 'Alto Mando',
      description: 'Alto Mando de la Liga Pokémon de Johto, especialista en Pokémon de tipo Veneno, padre de Sachiko y maestro ninja',
      team: []
    },
    {
      name: 'Plubio',
      category: 'Campeón',
      description: 'Campeón de la Liga de Hoenn, especialista en Pokémon de tipo Agua, anterior Líder de gimnasio',
      team: []
    },
    {
      name: 'Iris',
      category: 'Campeón',
      description: 'Campeona de la Liga de Teselia, especialista en Pokémon de tipo Dragón, consolidada como mejor entrenadora de la región bajo las directrices de Lirio',
      team: []
    },
  ];
}