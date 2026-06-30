export interface TrainerData {
  id: number;
  name: string;
  category: string,
  description: string;
  pokemonIds: number[];
}

export const TRAINERS: TrainerData[] = [
  {
    id: 1,
    name: 'Brock',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Plateada, especialista en Pokémon de tipo Roca, tan fuerte como la misma',
    pokemonIds: [
      74, //Geodude
      95  //Onix 
    ]
  },
  {
    id: 2,
    name: 'Misty',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Celeste, especialista en Pokémon de tipo Agua, una sirena con mucho carácter y fuerte personalidad',
    pokemonIds: [
      120,  //Staryu
      121,  //Starmie
    ]
  },
  {
    id:3,
    name: 'Lt. Surge',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Carmín, especialista en Pokémon de tipo Eléctrico, compartió los roles de Teniente y Líder de gimnasio',
    pokemonIds: [
      100,  //Voltorb
      25,   //Pikachu
      26    //Raichu
    ]
  },
  {
    id: 4,
    name: 'Erika',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Azulona, especialista en Pokémon de tipo Planta, amante de la naturaleza',
    pokemonIds: [
      71,   //Victreebel
      114,  //Tangela
      45    //Vileplume
    ]
  },
  {
    id: 5,
    name: 'Koga',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Fucsia, especialista en Pokémon de tipo Veneno, padre de Sachiko y maestro ninja',
    pokemonIds: [
      109,  //Koffing
      109,  //Koffing
      89,   //Muk
      110   //Weezing
    ]
  },
  {
    id: 6,
    name: 'Sachiko',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Fucsia, especialista en Pokémon de tipo Veneno, hija de Koga, tomó el puesto de líder de gimnasio al convertirse su padre en miembro del Alto Mando',
    pokemonIds: [
      169,  //Crobat
      110,  //Weezing
      168,  //Ariados
      168,  //Ariados
      49    //Venomoth
    ]
  },
  {
    id: 7,
    name: 'Sabrina',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Azafrán, especialista en Pokémon de tipo Psíquico, conocida por su inexpresividad y su conexión mental con sus Pokémon',
    pokemonIds: [
      64,   //Kadabra
      122,  //Mr Mime
      49,   //Venomoth
      65    //Alakazam
    ]
  },
  {
    id: 8,
    name: 'Blaine',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Isla Canela, especialista en Pokémon de tipo Fuego, un científico experto en los acertijos',
    pokemonIds: [
      58, //Growlithe
      77, //Ponyta
      78, //Rapidash
      59, //Arcanine
    ]
  },
  {
    id: 9,
    name: 'Giovanni',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Verde, especialista en Pokémon de tipo Tierra, además de ser Líder de Gimnasio es el jefe del pokemonIds Rocket',
    pokemonIds: [
      111,  //Rhyhorn
      51,   //Dugtrio
      31,   //Nidoqueen
      34,   //Nidoking
      112   //Rhydon
    ]
  },
  {
    id: 10,
    name: 'Azul',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Verde después de la desbandada del pokemonIds Rocket, tiene mucha variedad de tipos',
    pokemonIds: [
      18,   //Pidgeot
      65,   //Alakazam
      112,  //Rhydon
      130,  //Gyarados
      103,  //Exeggutor
      59    //Arcanine
    ]
  },
  {
    id: 11,
    name: 'Pegaso',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Malva, especialista en Pokémon de tipo Volador, elegante y competitivo',
    pokemonIds: [
      16, //Pidgey
      17  //Pidgeotto
    ]
  },
  {
    id: 12,
    name: 'Antón',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Azalea, especialista en Pokémon de tipo Bicho, cazabichos y enciclopedia andante',
    pokemonIds: [
      11,   //Metapod
      14,   //Kakuna
      123   //Scyther
    ]
  },
  {
    id: 13,
    name: 'Blanca',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Trigal, especialista en Pokémon de tipo Normal, joven y caprichosa, pero cuidado con su Miltank',
    pokemonIds: [
      35,   //Clefairy
      241   //Miltank
    ]
  },
  {
    id: 14,
    name: 'Morti',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Iris, especialista en Pokémon de tipo Fantasma, místico adivino del futuro',
    pokemonIds: [
      92, //Gastly
      93, //Haunter
      94, //Gengar
      93  //Haunter
    ]
  },
  {
    id: 15,
    name: 'Aníbal',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Orquídea, especialista en Pokémon de tipo Lucha, siempre está meditando en su cascada',
    pokemonIds: [
      57, //Primeape
      62  //Poliwrath
    ]
  },
  {
    id: 16,
    name: 'Yasmina',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Olivo, especialista en Pokémon de tipo Acero, tiene una estrecha relación con el Ampharos encargado del faro',
    pokemonIds: [
      81,   //Magnemite
      81,   //Magnemite
      208   //Steelix
    ]
  },
  {
    id: 17,
    name: 'Fredo',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Caoba, especialista en Pokémon de tipo Hielo, maestro del crudo invierno',
    pokemonIds: [
      86,   //Seel
      87,   //Dewgong
      221   //Piloswine
    ]
  },
  {
    id: 18,
    name: 'Débora',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Endrino, especialista en Pokémon de tipo Dragón, prima de Lance, no basta con derrotarla para obtener su medalla',
    pokemonIds: [
      148,  //Dragonair
      148,  //Dragonair
      148,  //Dragonair
      230   //Kingdra
    ]
  },
  {
    id: 19,
    name: 'Petra',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Férrica, especialista en Pokémon de tipo Roca, alumna aventajada de la Escuela de Entrenadores',
    pokemonIds: [
      74, //Geodude
      299 //Nosepass
    ]
  },
  {
    id: 20,
    name: 'Marcial',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Azuliza, especialista en Pokémon de tipo Lucha, un surfista considerado un maremoto',
    pokemonIds: [
      66, //Machop
      296 //Makuhita
    ]
  },
  {
    id: 21,
    name: 'Erico',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Malvalona, especialista en Pokémon de tipo Eléctrico, le encanta poner trampas eléctricas en su gimnasio',
    pokemonIds: [
      100,  //Voltorb
      309,  //Electrike
      82,   //Magneton
      310   //Manectric
    ]
  },
  {
    id: 22,
    name: 'Candela',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Lavacalda, especialista en Pokémon de tipo Fuego, mejor no acercarse mucho, que quema',
    pokemonIds: [
      218,  //Slugma
      322,  //Numel
      324   //Torkoal
    ]
  },
  {
    id: 23,
    name: 'Norman',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Petalia, especialista en Pokémon de tipo Normal, padre del personaje protagonista de Hoenn',
    pokemonIds: [
      289,  //Slaking
      288,  //Vigoroth
      289   //Slaking
    ]
  },
  {
    id: 24,
    name: 'Alana',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Arborada, especialista en Pokémon de tipo Volador, puede ver el ir y venir de las corrientes del viento',
    pokemonIds: [
      333,  //Swablu
      357,  //Tropius
      279,  //Pelipper
      227,  //Skarmory
      334   //Altaria
    ]
  },
  {
    id: 25,
    name: 'Vito y Leti',
    category: 'Líder de gimnasio',
    description: 'Líderes de gimnasio de Ciudad Algaria, especialistas en Pokémon de tipo Psíquico, hermanos mellizos, parecidos como el sol a la luna',
    pokemonIds: [
      344,  //Claydol
      178,  //Xatu
      337,  //Lunatone
      338   //Solrock
    ]
  },
  {
    id: 26,
    name: 'Plubio',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Arrecípolis, especialista en Pokémon de tipo Agua, acabaría convirtiéndose brevemente en Campeón de la Liga de Hoenn',
    pokemonIds: [
      370,  //Luvdisc
      340,  //Whiscash
      364,  //Sealeo
      119,  //Seaking
      350   //Milotic
    ]
  },
  {
    id: 27,
    name: 'Galano',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Arrecípolis, especialista en Pokémon de tipo Agua, cogió el relevo de Plubio como Líder de gimnasio',
    pokemonIds: [
      370,  //Luvdisc
      340,  //Whiscash
      364,  //Sealeo
      342,  //Crawdaunt
      230   //Kingdra
    ]
  },
  {
    id: 28,
    name: 'Roco',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Pirita, especialista en Pokémon de tipo Roca, minero e hijo de Acerón',
    pokemonIds: [
      74, //Geodude
      95, //Onix
      408 //Cranidos
    ]
  },
  {
    id: 29,
    name: 'Gardenia',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Vetusta, especialista en Pokémon de tipo Planta, adora los Pokémon de tipo Planta pero le tiene miedo a los fantasmas',
    pokemonIds: [
      387,  //Turtwig
      421,  //Cherrim
      407   //Roserade
    ]
  },
  {
    id: 30,
    name: 'Fantina',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Corazón, especialista en Pokémon de tipo Fantasma, toda una celebridad en los Concursos Pokémon',
    pokemonIds: [
      355,  //Duskull
      93,   //Haunter
      429   //Mismagius
    ]
  },
  {
    id: 31,
    name: 'Brega',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Rocavelo, especialista en Pokémon de tipo Lucha, luchadora y amiga de Inverna',
    pokemonIds: [
      307,  //Meditite
      67,   //Machoke
      448   //Lucario
    ]
  },
  {
    id: 32,
    name: 'Mananti',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Pradera, especialista en Pokémon de tipo Agua, más conocido como Mananti el Destructor',
    pokemonIds: [
      130,  //Gyarados
      195,  //Quagsire
      419   //Floatzel
    ]
  },
  {
    id: 33,
    name: 'Acerón',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Canal, especialista en Pokémon de tipo Acero, adora la defensa y padre de Roco',
    pokemonIds: [
      82,   //Magneton
      208,  //Steelix
      411   //Bastiodon
    ]
  },
  {
    id: 34,
    name: 'Inverna',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Puntaneva, especialista en Pokémon de tipo Hielo, chica diamantina amiga de Brega',
    pokemonIds: [
      215,  //Sneasel
      221,  //Piloswine
      460,  //Abomasnow
      478   //Froslass
    ]
  },
  {
    id: 35,
    name: 'Lectro',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Marina, especialista en Pokémon de tipo Eléctrico, amigo de Fausto y quizá, al mismo nivel que un Alto Mando',
    pokemonIds: [
      135,  //Jolteon
      26,   //Raichu
      405,  //Luxray
      466   //Electivire
    ]
  },
  {
    id: 36,
    name: 'Millo',
    category: 'Líder de gimnasio',
    description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Planta',
    pokemonIds: [
      506,  //Lillipup
      511   //Pansage
    ]
  },
  {
    id: 37,
    name: 'Zeo',
    category: 'Líder de gimnasio',
    description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Fuego',
    pokemonIds: [
      506,  //Lillipup
      513   //Pansear
    ]
  },
  {
    id: 38,
    name: 'Maíz',
    category: 'Líder de gimnasio',
    description: 'Uno de los tres Líderes de gimnasio de Ciudad Gres, especialista en Pokémon de tipo Agua',
    pokemonIds: [
      506,  //Lillipup
      515   //Panpour
    ]
  },
  {
    id: 39,
    name: 'Aloe',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Esmalte, especialista en Pokémon de tipo Normal, regente del museo de la ciudad',
    pokemonIds: [
      507,  //Herdier
      505   //Watchog
    ]
  },
  {
    id: 40,
    name: 'Camus',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Porcelana, especialista en Pokémon de tipo Bicho, un artista que recibe su inspiración de los insectos',
    pokemonIds: [
      557,  //Dwebble
      616,  //Shelmet
      588,  //Karrablast
      542   //Leavanny
    ]
  },
  {
    id: 41,
    name: 'Camila',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Mayólica, especialista en Pokémon de tipo Eléctrico, supermodelo amiga de Gerania',
    pokemonIds: [
      587,  //Emolga
      180,  //Flaaffy
      595,  //Joltik
      523   //Zebstrika
    ]
  },
  {
    id: 42,
    name: 'Yakón',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Fayenza, especialista en Pokémon de tipo Tierra, empresario y defiende que "Ante todo, honestidad"',
    pokemonIds: [
      552,  //Krokorok
      28,   //Sandslash
      95,   //Onix
      530   //Excadrill
    ]
  },
  {
    id: 43,
    name: 'Gerania',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Loza, especialista en Pokémon de tipo Volador, piloto de avión, comandante del aeropuerto de la ciudad y amiga de Camila',
    pokemonIds: [
      528,  //Swoobat
      227,  //Skarmory
      561,  //Sigilyph
      581   //Swanna
    ]
  },
  {
    id: 44,
    name: 'Junco',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Teja, especialista en Pokémon de tipo Hielo, conocido como el Enmascarado de Hielo, además de Líder de gimnasio es actor',
    pokemonIds: [
      583,  //Vanillish
      615,  //Cryogonal
      614   //Beartic
    ]
  },
  {
    id: 45,
    name: 'Iris',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Caolín, especialista en Pokémon de tipo Dragón, en formación pero destinada a ser Campeona',
    pokemonIds: [
      611,  //Fraxure
      621,  //Druddigon
      612   //Haxorus
    ]
  },
  {
    id: 46,
    name: 'Lirio',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Caolín, especialista en Pokémon de tipo Dragón, mentor de Iris y alcalde de la ciudad',
    pokemonIds: [
      621,  //Druddigon
      330,  //Flygon
      334,  //Altaria
      612   //Haxorus
    ]
  },
  {
    id: 47,
    name: 'Cheren',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Engobe, especialista en Pokémon de tipo Normal, pasó de ser rival a Líder de gimnasio',
    pokemonIds: [
      504,  //Patrat
      519,  //Pidove
      506   //Lillipup
    ]
  },
  {
    id: 48,
    name: 'Hiedra',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Hormigón, especialista en Pokémon de tipo Veneno, bajista rockera y nociva',
    pokemonIds: [
      109,  //Koffing
      88,   //Grimer
      544   //Whirlipede
    ]
  },
  {
    id: 49,
    name: 'Ciprián',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Marga, especialista en Pokémon de tipo Agua, pescador y buceador de piel muy bronceada',
    pokemonIds: [
      321,  //Wailord
      226,  //Mantine
      565,  //Carracosta
      593   //Jellicent Male
    ]
  },
  {
    id: 50,
    name: 'Violeta',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Novarte, especialista en Pokémon de tipo Bicho, fotógrafa experta de la que dicen que nunca se le escapa una sonrisa de su cámara',
    pokemonIds: [
      283,  //Surskit
      666   //Vivillon
    ]
  },
  {
    id: 51,
    name: 'Lino',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Relieve, especialista en Pokémon de tipo Roca, escalador amante del deporte y de los fósiles',
    pokemonIds: [
      698,  //Amaura
      696   //Tyrunt
    ]
  },
  {
    id: 52,
    name: 'Corelia',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Yantra, especialista en Pokémon de tipo Lucha, patinadora y heredera del secreto de la megaevolución',
    pokemonIds: [
      619,  //Mienfoo
      67,   //Machoke
      701,  //Hawlucha
      10059 //Mega-Lucario
    ]
  },
  {
    id: 53,
    name: 'Amaro',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Témpera, especialista en Pokémon de tipo Planta, apasionado de la jardinería, siempre va acompañado de sus tijeras',
    pokemonIds: [
      189,  //Jumpluff
      70,   //Weepinbell
      673   //Gogoat
    ]
  },
  {
    id: 54,
    name: 'Lem',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Luminalia, especialista en Pokémon de tipo Eléctrico, inventor que arroja luz sobre el mundo',
    pokemonIds: [
      587,  //Emolga
      82,   //Magneton
      695   //Heliolisk
    ]
  },
  {
    id: 55,
    name: 'Valeria',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Romantis, especialista en Pokémon de tipo Hada, diseñadora, modista y estilista, con pasado como modelo',
    pokemonIds: [
      303,  //Mawile
      122,  //Mr Mime
      700   //Sylveon
    ]
  },
  {
    id: 56,
    name: 'Ástrid',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Fluxus, especialista en Pokémon de tipo Psíquico, médium capaz de ver el futuro mirando las estrellas',
    pokemonIds: [
      561,  //Sigilyph
      199,  //Slowking
      678,  //Meowstic Male
      10025 //Meowstic Female
    ]
  },
  {
    id: 57,
    name: 'Édel',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Fractal, especialista en Pokémon de tipo Hielo, un exterior glacial que esconde un espíritu al rojo vivo',
    pokemonIds: [
      615,  //Cryogonal
      713,  //Avalugg
      10060 //Mega-Abomasnow
    ]
  },
  {
    id: 58,
    name: 'Percy',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Hoyuelo, especialista en Pokémon de tipo Planta, granjero aguerrido siempre rodeado de Wooloo',
    pokemonIds: [
      840,  //Applin
      830   //Eldegoss
    ]
  },
  {
    id: 59,
    name: 'Cathy',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Amura, especialista en Pokémon de tipo Agua, una ola serena que oculta un espíritu competitivo',
    pokemonIds: [
      118,  //Goldeen
      846,  //Arrokuda
      10214 //Drednaw G-Max
    ]
  },
  {
    id: 60,
    name: 'Naboru',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Pistón, especialista en Pokémon de tipo Fuego, originario de Hoenn, siempre está corriendo pese a su avanzada edad',
    pokemonIds: [
      38,   //Ninetales
      59,   //Arcanine
      10220 //Centiskorch G-Max
    ]
  },
  {
    id: 61,
    name: 'Judith',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Ladera, especialista en Pokémon de tipo Lucha, karateka prodigio, comparte el puesto de Líder con Alistair',
    pokemonIds: [
      237,  //Hitmontop
      675,  //Pangoro
      865,  //Sirfetch'd
      10201 //Machamp G-Max
    ]
  },
  {
    id: 62,
    name: 'Alistair',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Ladera, especialista en Pokémon de tipo Fantasma, chico miedoso, comparte el puesto de Líder con Judith',
    pokemonIds: [
      10179,  //Yamask-Galar
      778,    //Mimikyu
      864,    //Cursola
      10202   //Gengar G-Max
    ]
  },
  {
    id: 63,
    name: 'Sally',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Plié, especialista en Pokémon de tipo Hada, veteranísima Líder de gimnasio, eligió a Berto como su sucesor',
    pokemonIds: [
      10167,  //Weezing-Galar
      303,    //Mawile
      468,    //Togekiss
      10223   //Alcremie G-Max
    ]
  },
  {
    id: 64,
    name: 'Morris',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Auriga, especialista en Pokémon de tipo Roca, hijo de Mel, comparte el puesto de Líder de gimnasio con su madre',
    pokemonIds: [
      689,  //Barbaracle
      213,  //Shuckle
      874,  //Stonjourner
      10215 //Coalossal G-Max
    ]
  },
  {
    id: 65,
    name: 'Mel',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Auriga, especialista en Pokémon de tipo Hielo, madre de Morris, comparte el puesto de Líder de gimnasio con su hijo',
    pokemonIds: [
      873,    //Frosmoth
      10177,  //Darmanitan-Galar
      875,    //Eiscue
      10204   //Lapras G-Max
    ]
  },
  {
    id: 66,
    name: 'Nerio',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Crampón, especialista en Pokémon de tipo Siniestro, hermano mayor de Roxy, reniega de la mecánica Dinamax',
    pokemonIds: [
      560,  //Scrafty
      687,  //Malamar
      435,  //Skuntank
      862   //Obstagoon
    ]
  },
  {
    id: 67,
    name: 'Roy',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Artejo, especialista en Pokémon de tipo Dragón, el Líder más fuerte, especialista en climas y combates dobles',
    pokemonIds: [
      526,  //Gigalith
      330,  //Flygon
      844,  //Sandaconda
      10225 //Duraludon G-Max
    ]
  },
  {
    id: 68,
    name: 'Berto',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Plié, especialista en Pokémon de tipo Hada, anterior rival del protagonista de los juegos de Galar, tomó el relevo de Sally al jubilarse esta',
    pokemonIds: [
      303,    //Mawile
      282,    //Gardevoir
      10163,  //Rapidash-Galar
      10221   //Hatterene G-Max
    ]
  },
  {
    id: 69,
    name: 'Roxy',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Crampón, especialista en Pokémon de tipo Siniestro, anterior rival del protagonista de los juegos de Galar, tomó el relevo de Nerio como Líder de gimnasio',
    pokemonIds: [
      510,  //Liepard
      454,  //Toxicroak
      560,  //Scrafty
      877,  //Morpeko
      10222 //Grimmsnarl G-Max
    ]
  },
  {
    id: 70,
    name: 'Sófora',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio en la segunda división de Galar, especialista en Pokémon de tipo Veneno, tan mona como venenosa',
    pokemonIds: [
      452,    //Drapion
      10167,  //Weezing-Galar
      545,    //Scolipede
      10172,  //Slowking-Galar
    ]
  },
  {
    id: 71,
    name: 'Dreo',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio en la segunda división de Galar, especialista en Pokémon de tipo Psíquico, poseedor de poderes psíquicos',
    pokemonIds: [
      10163,  //Rapidash-Galar
      528,    //Swoobat
      65,     //Alakazam
      10165   //Slowbro-Galar
    ]
  },
  {
    id: 72,
    name: 'Araceli',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Pirotín, especialista en Pokémon de tipo Bicho, pastelera que se pasa el día preparando dulces',
    pokemonIds: [
      919,  //Nymble
      917,  //Tarountula
      216   //Teddiursa
    ]
  },
  {
    id: 73,
    name: 'Brais',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Altamía, especialista en Pokémon de tipo Planta, artista intelectual que tuvo algunas etapas de bloqueos artísticos',
    pokemonIds: [
      548,  //Petilil
      928,  //Smoliv
      185   //Sudowoodo
    ]
  },
  {
    id: 74,
    name: 'e-Nigma',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Leudal, especialista en Pokémon de tipo Eléctrico, streamer e influencer, presentadora de su programa Khé-Nigma TV',
    pokemonIds: [
      940,  //Wattrel
      939,  //Bellibolt
      404,  //Luxio
      429   //Mismagius
    ]
  },
  {
    id: 75,
    name: 'Fuco',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Ciudad Cántara, especialista en Pokémon de tipo Agua, conocido como el Chef Torrencial, le encantan las subastas',
    pokemonIds: [
      976,  //Veluza
      961,  //Wugtrio
      740   //Crabominable
    ]
  },
  {
    id: 76,
    name: 'Laureano',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Mestura, especialista en Pokémon de tipo Normal, oficinista que también tiene el cargo de Alto Mando de la Liga de Paldea',
    pokemonIds: [
      775,  //Komala
      982,  //Dudunsparce
      398   //Staraptor
    ]
  },
  {
    id: 77,
    name: 'Lima',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Hozkailu, especialista en Pokémon de tipo Fantasma, reconocida rapera que lleva 40 años en los escenarios',
    pokemonIds: [
      354,  //Banette
      778,  //Mimikyu
      972,  //Houndstone
      10184 //Toxtricity Low-Key
    ]
  },
  {
    id: 78,
    name: 'Tuli',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Pueblo Alforno, especialista en Pokémon de tipo Psíquico, refinada maquilladora que piensa que mujer y belleza son sinónimos',
    pokemonIds: [
      981,  //Farigiraf
      282,  //Gardevoir
      956,  //Espathra
      671   //Florges
    ]
  },
  {
    id: 79,
    name: 'Grusha',
    category: 'Líder de gimnasio',
    description: 'Líder de gimnasio de Sierra Napada, especialista en Pokémon de tipo Hielo, previamente fue un snowboarder profesional, conocido como el Cero Absoluto',
    pokemonIds: [
      873,  //Frosmoth
      614,  //Beartic
      975,  //Cetitan
      334   //Altaria
    ]
  },
  {
    id: 80,
    name: 'Liam',
    category: 'Capitán',
    description: 'Capitán de la prueba de la Cueva Sotobosque, especialista en Pokémon de tipo Normal, todo un ídolo para los estudiantes de la Escuela de Entrenadores',
    pokemonIds: [
      735,  //Gumshoos
      235,  //Smeargle
      775,  //Komala
      10093 //Raticate-Alola-Totem
    ]
  },
  {
    id: 81,
    name: 'Nereida',
    category: 'Capitán',
    description: 'Capitana de la prueba de la Colina Saltagua, especialista en Pokémon de tipo Agua, amiga de Lulú, le encanta gastar bromas y pescadora curtida',
    pokemonIds: [
      171,  //Lanturn
      91,   //Cloyster
      752,  //Araquanid
      10127 //Wishiwashi-School
    ]
  },
  {
    id: 82,
    name: 'Kiawe',
    category: 'Capitán',
    description: 'Capitán de la prueba del Área Volcánica del Wela, especialista en Pokémon de tipo Fuego, estudioso de las danzas tradicionales de la región de Alola',
    pokemonIds: [
      59,     //Arcanine
      663,    //Talonflame
      10115,  //Marowak-Alola
      10129   //Salazzle-Totem
    ]
  },
  {
    id: 83,
    name: 'Lulú',
    category: 'Capitán',
    description: 'Capitana de la prueba de la Jungla Umbría, especialista en Pokémon de tipo Planta, le encanta cocinar, aunque su talento como cocinera es altamente discutible',
    pokemonIds: [
      709,  //Trevenant
      756,  //Shiinotic
      763,  //Tsareena
      10128 //Lurantis-Totem
    ]
  },
  {
    id: 84,
    name: 'Chris',
    category: 'Capitán',
    description: 'Capitán de la prueba del Observatorio de Hokulani, especialista en Pokémon de tipo Eléctrico, es también el encargado de la Festi Plaza',
    pokemonIds: [
      777,    //Togedemaru
      462,    //Magnezone
      10111,  //Golem-Alola
      10122   //Vikavolt-Totem
    ]
  },
  {
    id: 85,
    name: 'Zarala',
    category: 'Capitán',
    description: 'Capitana de la prueba del antiguo Supermercado Ultraganga, especialista en Pokémon de tipo Fantasma, también miembro del Alto Mando en la novedosa Liga de Alola',
    pokemonIds: [
      94,   //Gengar
      10144 //Mimikyu-Totem
    ]
  },
  {
    id: 86,
    name: 'Rika',
    category: 'Capitán',
    description: 'Capitana de la prueba de la Aldea Marina, especialista en Pokémon de tipo Hada, al principio desinteresada pero con el paso del tiempo se empezó a tomar en serio su rol de Capitana',
    pokemonIds: [
      303,  //Mawile
      210,  //Granbull
      10150 //Ribombee-Totem
    ]
  },
  {
    id: 87,
    name: 'Mostaz',
    category: 'Entrenador',
    description: 'Ex Campeón y ex Líder de gimnasio, especialista en Pokémon de tipo Lucha, regenta un Dojo de combate muy popular en Galar',
    pokemonIds: [
      620,  //Mienshao
      405,  //Luxray
      823,  //Corviknight
      745,  //Lycanroc-Midday
      784,  //Kommo-o
      10227 //Urshifu-Rapid-Strike G-Max
    ]
  },
  {
    id: 88,
    name: 'Peony',
    category: 'Entrenador',
    description: 'Ex Campeón y ex Líder de gimnasio, especialista en Pokémon de tipo Acero, hermano menor de Rose, no suele escuchar a los demás',
    pokemonIds: [
      863,  //Perrserker
      437,  //Bronzong
      212,  //Scizor
      306,  //Aggron
      879   //Copperajah
    ]
  },
  {
    id: 89,
    name: 'Mila',
    category: 'Entrenador',
    description: 'Ex Líder de gimnasio, especialista en Pokémon de tipo Roca, hermana mayor de Lima, dejó de ser Líder de gimnasio para dedicarse a la docencia',
    pokemonIds: [
      745,    //Lycanroc-Midday
      10126,  //Lycanroc-Midnight
      834,    //Drednaw
      874,    //Stonjourner
      839,    //Coalossal
      934     //Garganacl
    ]
  },
  {
    id: 90,
    name: 'Azul',
    category: 'Rival',
    description: 'El primer gran rival de los videojuegos, acabaría tomando el puesto de líder de gimnasio de Ciudad Verde después de derrotar al pokemonIds Rocket',
    pokemonIds: [
      18,   //Pidgeot
      65,   //Alakazam
      112,  //Rhydon
      59,   //Arcanine
      103,  //Exeggutor
      9     //Blastoise
    ]
  },
  {
    id: 91,
    name: 'Trace',
    category: 'Rival',
    description: 'Rival y amigo de la infancia del protagonista en Kanto, empeñado en querer desafiar a todos los entrenadores de la región',
    pokemonIds: [
      18,   //Pidgeot
      45,   //Vileplume
      105,  //Marowak
      135,  //Jolteon
      26    //Raichu
    ]
  },
  {
    id: 92,
    name: 'Verde',
    category: 'Rival',
    description: 'Rival del protagonista en Kanto, se asusta con facilidad y lanza una Poké Ball siempre que ocurre',
    pokemonIds: [
      36,   //Clefable
      94,   //Gengar
      71,   //Victreebel
      38,   //Ninetales
      115,  //Kangaskhan
      9     //Blastoise
    ]
  },
  {
    id: 93,
    name: 'Plata',
    category: 'Rival',
    description: 'Rival del protagonista en Johto, hijo de Giovanni, siempre quiere salirse con la suya por las buenas o por las malas',
    pokemonIds: [
      215,  //Sneasel
      82,   //Magneton
      94,   //Gengar
      169,  //Crobat
      65,   //Alakazam
      160   //Feraligatr
    ]
  },
  {
    id: 94,
    name: 'Blasco',
    category: 'Rival',
    description: 'Rival del protagonista en Hoenn, de salud delicada, es tímido e inseguro, aunque intenta estar a la altura del protagonista',
    pokemonIds: [
      334,  //Altaria
      301,  //Delcatty
      315,  //Roselia
      82,   //Magneton
      282   //Gardevoir
    ]
  },
  {
    id: 95,
    name: 'Israel',
    category: 'Rival',
    description: 'Rival del protagonista en Sinnoh, hijo de Jericor, le pueden las prisas con frecuencia y es demasiado enérgico',
    pokemonIds: [
      398,  //Staraptor
      214,  //Heracross
      143,  //Snorlax
      78,   //Rapidash
      407,  //Roserade
      395   //Empoleon
    ]
  },
  {
    id: 96,
    name: 'Bel',
    category: 'Rival',
    description: 'Una de los dos rivales del primer protagonista en Teselia, se acaba convirtiendo en ayudante de la profesora',
    pokemonIds: [
      508,  //Stoutland
      516,  //Simipour
      518,  //Musharna
      620,  //Mienshao
      609,  //Chandelure
      497   //Serperior
    ]
  },
  {
    id: 97,
    name: 'Cheren',
    category: 'Rival',
    description: 'Uno de los dos rivales del primer protagonista en Teselia, amigo de la infancia de este',
    pokemonIds: [
      510,  //Liepard
      514,  //Simisear
      521,  //Unfezant
      526,  //Gigalith
      612,  //Haxorus
      503   //Samurott
    ]
  },
  {
    id: 98,
    name: 'N',
    category: 'Rival',
    description: 'El gran rival del primer protagonista en Teselia, miembro del Equipo Plasma, dice que puede comprender a los Pokémon solo con mirarlos',
    pokemonIds: [
      643,  //Reshiram
      565,  //Carracosta
      584,  //Vanilluxe
      567,  //Archeops
      571,  //Zoroark
      601   //Klinklang
    ]
  },
  {
    id: 99,
    name: 'Matís',
    category: 'Rival',
    description: 'Rival y vecino del segundo protagonista en Teselia, ligeramente mayor que este, tiene una hermana menor, odia fervientemente al Equipo Plasma debido a que estos le robaron un Purrloin a su hermana',
    pokemonIds: [
      521,  //Unfezant
      512,  //Simisage
      626,  //Bouffalant
      330,  //Flygon
      604,  //Eelektross
      500   //Emboar
    ]
  },
  {
    id: 100,
    name: 'Xana',
    category: 'Rival',
    description: 'Una de los rivales del protagonista en Kalos, muy activa y apasionada por los combates, a la par que bastante insistente',
    pokemonIds: [
      301,  //Delcatty
      706,  //Goodra
      655   //Delphox
    ]
  },
  {
    id: 101,
    name: 'Benigno',
    category: 'Rival',
    description: 'Uno de los rivales del protagonista en Kalos, siempre trata de encontrar una forma de unir sus dos pasiones, los Pokémon y bailar',
    pokemonIds: [
      663,  //Talonflame
      407,  //Roserade
      342   //Crawdaunt
    ]
  },
  {
    id: 102,
    name: 'Trovato',
    category: 'Rival',
    description: 'Uno de los rivales del protagonista en Kalos, su principal meta es registrar la mayor cantidad posible de Pokémon en su Pokédex',
    pokemonIds: [
      26,   //Raichu
      142,  //Aerodactyl
      671   //Florges
    ]
  },
  {
    id: 103,
    name: 'Tilo',
    category: 'Rival',
    description: 'Uno de los rivales del protagonista en Alola, nieto de Kaudan, su sueño es conseguir superarle algún día',
    pokemonIds: [
      10100,  //Raichu-Alola
      134,    //Vaporeon
      128,    //Tauros
      715,    //Noivern
      740,    //Crabominable
      724     //Decidueye
    ]
  },
  {
    id: 104,
    name: 'Gladio',
    category: 'Rival',
    description: 'Uno de los rivales del protagonista en Alola, hijo de Samina y de Polo y hermano mayor de Lylia, mantiene un lazo especial con su Pokémon Silvally',
    pokemonIds: [
      169,  //Crobat
      571,  //Zoroark
      474,  //Porygon-Z
      448,  //Lucario
      6,    //Charizard
      773   //Silvally
    ]
  },
  {
    id: 105,
    name: 'Paul',
    category: 'Rival',
    description: 'Rival del protagonista de los juegos de Galar, hermano pequeño de Lionel, tiene como objetivo sucederle como Campeón',
    pokemonIds: [
      832,    //Dubwool
      143,    //Snorlax
      812,    //Rillaboom
      10212,  //Corviknight G-Max
      10188   //Zacian-Crowned
    ]
  },
  {
    id: 106,
    name: 'Berto',
    category: 'Rival',
    description: 'Rival del protagonista de los juegos de Galar, reclutado por Sally para sucederla como Líder de gimnasio, aunque su tipo especializado es el tipo Psíquico',
    pokemonIds: [
      578,    //Duosion
      575,    //Gothorita
      10162,  //Ponyta-Galar
      857     //Hattrem
    ]
  },
  {
    id: 107,
    name: 'Roxy',
    category: 'Rival',
    description: 'Rival del protagonista de los juegos de Galar, hermana menor de Nerio, siempre tiene miembros del pokemonIds Yell alrededor suya cuando combate',
    pokemonIds: [
      510,  //Liepard
      454,  //Toxicroak
      560,  //Scrafty
      877,  //Morpeko
      861   //Grimmsnarl
    ]
  },
  {
    id: 108,
    name: 'Corin',
    category: 'Rival',
    description: 'Rival del protagonista en la Academia Arándano, hermana mayor de Cass, tiene mucho carácter y suele ser egoísta, se preocupa mucho por su hermano, aunque no lo parezca',
    pokemonIds: []
  },
  {
    id: 109,
    name: 'Kaudan',
    category: 'Kahuna',
    description: 'Kahuna de la isla de Melemele en la región de Alola, especialista en Pokémon de tipo Lucha, es el abuelo de Tilo y antiguo miembro del Alto Mando',
    pokemonIds: []
  },
  {
    id: 110,
    name: 'Mayla',
    category: 'Kahuna',
    description: 'Kahuna de la isla de Akala en la región de Alola, especialista en Pokémon de tipo Roca, regenta una joyería y es también miembro del Alto Mando',
    pokemonIds: []
  },
  {
    id: 111,
    name: 'Denio',
    category: 'Kahuna',
    description: 'Kahuna de la isla de Ula-Ula en la región de Alola, especialista en Pokémon de tipo Siniestro, policía y kahuna al mismo tiempo, aunque completamente desinteresado',
    pokemonIds: []
  },
  {
    id: 112,
    name: 'Hela',
    category: 'Kahuna',
    description: 'Kahuna de la isla de Poni en la región de Alola, especialista en Pokémon de tipo Tierra, recién proclamada kahuna, quiere estar a la altura de su fallecido abuelo, el anterior kahuna',
    pokemonIds: []
  },
  {
    id: 113,
    name: 'Lorelei',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kanto, especialista en Pokémon de tipo Hielo, fría y calculadora en los combates',
    pokemonIds: []
  },
  {
    id: 114,
    name: 'Bruno',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kanto y Johto, especialista en Pokémon de tipo Lucha, prioriza la fuerza y la resistencia',
    pokemonIds: []
  },
  {
    id: 115,
    name: 'Agatha',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kanto, especialista en Pokémon de tipo Fantasma, es una inspiración para todos los entrenadores veteranos de la región',
    pokemonIds: []
  },
  {
    id: 116,
    name: 'Lance',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kanto, especialista en Pokémon de tipo Dragón, acabaría convirtiéndose en Campeón de la Liga de Johto',
    pokemonIds: []
  },
  {
    id: 117,
    name: 'Mento',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Johto, especialista en Pokémon de tipo Psíquico, su vestimenta y antifaz resaltan en su aspecto',
    pokemonIds: []
  },
  {
    id: 118,
    name: 'Koga',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Johto, especialista en Pokémon de tipo Veneno, padre de Sachiko y maestro ninja',
    pokemonIds: []
  },
  {
    id: 119,
    name: 'Karen',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Johto, especialista en Pokémon de tipo Siniestro, considera que los buenos entrenadores son capaces de ganar con sus Pokémon favoritos',
    pokemonIds: []
  },
  {
    id: 120,
    name: 'Sixto',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Hoenn, especialista en Pokémon de tipo Siniestro, de actitud desenfadada y pasión por la moda y los combates Pokémon',
    pokemonIds: []
  },
  {
    id: 121,
    name: 'Fátima',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Hoenn, especialista en Pokémon de tipo Fantasma, participa en algunos eventos fantasmagóricos previos a su combate',
    pokemonIds: []
  },
  {
    id: 122,
    name: 'Nívea',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Hoenn, especialista en Pokémon de tipo Hielo, proveniente de una región lejana, o eso dice ella',
    pokemonIds: []
  },
  {
    id: 123,
    name: 'Dracón',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Hoenn, especialista en Pokémon de tipo Dragón, de avanzada edad y con vestimenta y aspecto similares a los de un pirata',
    pokemonIds: []
  },
  {
    id: 124,
    name: 'Alecrán',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Sinnoh, especialista en Pokémon de tipo Bicho, se rumorea que renunció a ser Líder de gimnasio para ocupar el cargo de Alto Mando',
    pokemonIds: []
  },
  {
    id: 125,
    name: 'Gaia',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Sinnoh, especialista en Pokémon de tipo Tierra, ayuda a investigar acerca del Mundo Distorsión',
    pokemonIds: []
  },
  {
    id: 126,
    name: 'Fausto',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Sinnoh, especialista en Pokémon de tipo Fuego, amigo de Lectro, entrenan juntos bastante a menudo',
    pokemonIds: []
  },
  {
    id: 127,
    name: 'Delos',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Sinnoh, especialista en Pokémon de tipo Psíquico, es un gran estratega y bastante solidario',
    pokemonIds: []
  },
  {
    id: 128,
    name: 'Anís',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Teselia, especialista en Pokémon de tipo Fantasma, escritora a la que le gusta escribir historias fantasmagóricas',
    pokemonIds: []
  },
  {
    id: 129,
    name: 'Aza',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Teselia, especialista en Pokémon de tipo Siniestro, heredero de una distinguida familia que acabó en ruinas',
    pokemonIds: []
  },
  {
    id: 130,
    name: 'Lotto',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Teselia, especialista en Pokémon de tipo Lucha, su escenario de combate en la Liga Pokémon se asemeja a un escenario de sumo',
    pokemonIds: []
  },
  {
    id: 131,
    name: 'Catleya',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Teselia, especialista en Pokémon de tipo Psíquico, bastante perezosa y dormilona, es tambíen uno de los Ases del Frente Batalla',
    pokemonIds: []
  },
  {
    id: 132,
    name: 'Tileo',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kalos, especialista en Pokémon de tipo Acero, es un reputado caballero que viste y actúa como tal',
    pokemonIds: []
  },
  {
    id: 133,
    name: 'Malva',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kalos, especialista en Pokémon de tipo Fuego, miembro del pokemonIds Flare y presentadora de noticias',
    pokemonIds: []
  },
  {
    id: 134,
    name: 'Drácena',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kalos, especialista en Pokémon de tipo Dragón, de avanzada edad, se sabe que sus abuelos son de Pueblo Caelestis, en Sinnoh',
    pokemonIds: []
  },
  {
    id: 135,
    name: 'Narciso',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Kalos, especialista en Pokémon de tipo Agua, chef de gran talento, elegante y amigo de Lino y Valeria',
    pokemonIds: []
  },
  {
    id: 136,
    name: 'Kaudan',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Alola, especialista en Pokémon de tipo Lucha, es el abuelo de Tilo y kahuna de la Isla de Melemele',
    pokemonIds: []
  },
  {
    id: 137,
    name: 'Mayla',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Alola, especialista en Pokémon de tipo Roca, es también la kahuna de la Isla de Akala',
    pokemonIds: []
  },
  {
    id: 138,
    name: 'Lario',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Alola, especialista en Pokémon de tipo Acero, antiguo Capitán y primo de Chris, le cedió a este el puesto de Capitán',
    pokemonIds: []
  },
  {
    id: 139,
    name: 'Zarala',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Alola, especialista en Pokémon de tipo Fantasma, también Capitana, compagina ambos roles sin problemas',
    pokemonIds: []
  },
  {
    id: 140,
    name: 'Kahili',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Alola, especialista en Pokémon de tipo Volador, gran golfista profesional, siempre acompañada de su caddie Toucannon',
    pokemonIds: []
  },
  {
    id: 141,
    name: 'Cayena',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Paldea, especialista en Pokémon de tipo Tierra, de apariencia andrógina, se toma muy en serio sus labores como asistente y Alto Mando de la Liga de Paldea',
    pokemonIds: []
  },
  {
    id: 142,
    name: 'Pola',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Paldea, especialista en Pokémon de tipo Acero, es la miembro del Alto Mando más joven de todas las regiones, debido a que todavía es una niña',
    pokemonIds: []
  },
  {
    id: 143,
    name: 'Laureano',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Paldea, especialista en Pokémon de tipo Volador, oficinista que también tiene el cargo de Líder de gimnasio de Pueblo Mestura',
    pokemonIds: []
  },
  {
    id: 144,
    name: 'Hesperio',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de Paldea, especialista en Pokémon de tipo Dragón, es también el profesor de Arte en la Academia Pokémon',
    pokemonIds: []
  },
  {
    id: 145,
    name: 'Denis',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de la Academia Arándano, especialista en Pokémon de tipo Fuego, siempre lleva una sartén en la mano',
    pokemonIds: []
  },
  {
    id: 146,
    name: 'Nerina',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de la Academia Arándano, especialista en Pokémon de tipo Acero, siempre mantiene la calma ante cualquier situación',
    pokemonIds: []
  },
  {
    id: 147,
    name: 'Aroa',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de la Academia Arándano, especialista en Pokémon de tipo Hada, hija de Yakón, dice que mencionar a su padre impone mucho respeto hacia sus amigos',
    pokemonIds: []
  },
  {
    id: 148,
    name: 'Levi',
    category: 'Alto Mando',
    description: 'Alto Mando de la Liga Pokémon de la Academia Arándano, especialista en Pokémon de tipo Dragón, nieto de Lirio, con mucho talento pero extremadamente perezoso',
    pokemonIds: []
  },
  {
    id: 149,
    name: 'Azul',
    category: 'Campeón',
    description: 'Campeón de la liga de Kanto, obtiene dicho título justo antes del protagonista, debido a haber derrotado primero a los miembros del Alto Mando',
    pokemonIds: []
  },
  {
    id: 150,
    name: 'Rojo',
    category: 'Campeón',
    description: 'Antiguo campeón de la Liga de Kanto, siempre muy callado, se refugió en el Monte Plateado, a la espera de un entrenador capaz de desafiarle',
    pokemonIds: []
  },
  {
    id: 151,
    name: 'Lance',
    category: 'Campeón',
    description: 'Campeón de la Liga de Johto, especialista en Pokémon de tipo Dragón, autoproclamado como el Maestro Dragón',
    pokemonIds: []
  },
  {
    id: 152,
    name: 'Máximo',
    category: 'Campeón',
    description: 'Campeón de la liga de Hoenn, hijo del dueño de Devon S.A., fue sustituido temporalmente como Campeón por Plubio',
    pokemonIds: []
  },
  {
    id: 153,
    name: 'Plubio',
    category: 'Campeón',
    description: 'Campeón de la Liga de Hoenn, especialista en Pokémon de tipo Agua, anterior Líder de gimnasio',
    pokemonIds: []
  },
  {
    id: 154,
    name: 'Cintia',
    category: 'Campeón',
    description: 'Campeona de la liga de Sinnoh, originaria de Pueblo Caelestis, ella y su Garchomp son inseparables',
    pokemonIds: []
  },
  {
    id: 155,
    name: 'Mirto',
    category: 'Campeón',
    description: 'Campeón de la liga de Teselia, personaje bastante misterioso y enigmático, abuelo de Guayo',
    pokemonIds: []
  },
  {
    id: 156,
    name: 'Iris',
    category: 'Campeón',
    description: 'Campeona de la Liga de Teselia, especialista en Pokémon de tipo Dragón, consolidada como mejor entrenadora de la región bajo las directrices de Lirio',
    pokemonIds: []
  },
  {
    id: 157,
    name: 'Dianta',
    category: 'Campeón',
    description: 'Campeona de la Liga de Kalos, actriz muy famosa en su región y bastante interesada en los entrenadores con gran potencial',
    pokemonIds: []
  },
  {
    id: 158,
    name: 'Trace',
    category: 'Campeón',
    description: 'Campeón de la Liga de Kanto, rival del protagonista que venció a los miembros del Alto Mando antes que este',
    pokemonIds: []
  },
  {
    id: 159,
    name: 'Lionel',
    category: 'Campeón',
    description: 'Campeón de la Liga de Galar, de él se dice que nunca ha sido derrotado en combate',
    pokemonIds: []
  },
  {
    id: 160,
    name: 'Ságita',
    category: 'Campeón',
    description: 'Rango de Campeona de Paldea, es considerada la entrenadora más fuerte de la región, además es la superintendenta de la Academia Pokémon',
    pokemonIds: []
  },
  {
    id: 161,
    name: 'Mencía',
    category: 'Campeón',
    description: 'Rango de Campeona de Paldea, rival y vecina del protagonista, nunca le dice que no a un combate, a veces incluso de forma insistente',
    pokemonIds: []
  },
  {
    id: 162,
    name: 'Cass',
    category: 'Campeón',
    description: 'Campeón de la Liga de la Academia Arándano, introvertido y curioso, aunque con un lado oscuro muy oscuro',
    pokemonIds: []
  },
  {
    id: 163,
    name: 'Giovanni',
    category: 'Villano',
    description: 'Líder del pokemonIds Rocket, una persona muy ambiciosa y desea controlar el mundo utilizando los Pokémon',
    pokemonIds: []
  },
  {
    id: 164,
    name: 'Magno',
    category: 'Villano',
    description: 'Líder del Equipo Magma, una organización que quiere controlar el poder de Groudon para así crear grandes extensiones de tierra',
    pokemonIds: []
  },
  {
    id: 165,
    name: 'Aquiles',
    category: 'Villano',
    description: 'Líder del Equipo Aqua, una organización que quiere controlar el poder de Kyogre para así expandir los mares',
    pokemonIds: []
  },
  {
    id: 166,
    name: 'Helio',
    category: 'Villano',
    description: 'Líder del Equipo Galaxia, una organización que quiere crear un universo nuevo utilizando a Dialga y Palkia',
    pokemonIds: []
  },
  {
    id: 167,
    name: 'Ghechis',
    category: 'Villano',
    description: 'Líder del Equipo Plasma, una organización que quiere liberar a todos los Pokémon de sus entrenadores porque creen que los tienen esclavizados',
    pokemonIds: []
  },
  {
    id: 168,
    name: 'Lysson',
    category: 'Villano',
    description: 'Líder del pokemonIds Flare, una organización que quiere crear un nuevo mundo, en el cual solo ellos tendrían el privilegio de vivir',
    pokemonIds: []
  },
  {
    id: 169,
    name: 'Guzmán',
    category: 'Villano',
    description: 'Líder del pokemonIds Skull, una pandilla que se dedica a robar Pokémon de sus entrenadores',
    pokemonIds: []
  },
  {
    id: 170,
    name: 'Samina',
    category: 'Villano',
    description: 'Presidenta de la Fundación Aether, una organización que en sí no es criminal, pero su investigación sobre los Ultraentes acaba de malas maneras',
    pokemonIds: []
  },
  {
    id: 171,
    name: 'Volus',
    category: 'Villano',
    description: 'Antiguo antagonista de la región de Hisui, máximo responsable de las distorsiones espaciotemporales que suceden en la región. Quería dominar el universo a su antojo',
    pokemonIds: []
  },
  {
    id: 172,
    name: 'Albora',
    category: 'Profesor',
    description: 'Profesora Pokémon en la región de Paldea, madre de Damián, uno de los amigos del protagonista',
    pokemonIds: []
  },
  {
    id: 173,
    name: 'Turo',
    category: 'Profesor',
    description: 'Profesor Pokémon en la región de Paldea, padre de Damián, uno de los amigos del protagonista',
    pokemonIds: []
  },
  {
    id: 174,
    name: 'Sabino',
    category: 'As del Frente',
    description: 'As de la Fábrica, entrega el Símbolo del Saber a los entrenadores que lleguen a derrotarlo',
    pokemonIds: []
  },
  {
    id: 175,
    name: 'Coro',
    category: 'As del Frente',
    description: 'As del Dojo, entrega el Símbolo del Coraje a los entrenadores que lleguen a derrotarla',
    pokemonIds: []
  },
  {
    id: 176,
    name: 'Tactio',
    category: 'As del Frente',
    description: 'As de la Cúpula, entrega el Símbolo de la Táctica a los entrenadores que lleguen a derrotarlo',
    pokemonIds: []
  },
  {
    id: 177,
    name: 'Fortunia',
    category: 'As del Frente',
    description: 'As de la Sierpe, entrega el Símbolo de la Fortuna a los entrenadores que lleguen a derrotarla',
    pokemonIds: []
  },
  {
    id: 178,
    name: 'Anicleto',
    category: 'As del Frente',
    description: 'As del Palacio, entrega el Símbolo del Ánimo a los entrenadores que lleguen a derrotarlo',
    pokemonIds: []
  },
  {
    id: 179,
    name: 'Destra',
    category: 'As del Frente',
    description: 'As de la Torre, entrega el Símbolo de la Destreza a los entrenadores que lleguen a derrotarla',
    pokemonIds: []
  },
  {
    id: 180,
    name: 'Valente',
    category: 'As del Frente',
    description: 'As de la Pirámide, entrega el Símbolo de la Valentía a los entrenadores que lleguen a derrotarlo',
    pokemonIds: []
  },
  {
    id: 181,
    name: 'Espinal',
    category: 'As del Frente',
    description: 'As de la Fábrica Batalla, siempre utiliza Pokémon de préstamo cuando combate y es un apasionado por las máquinas',
    pokemonIds: []
  },
  {
    id: 182,
    name: 'Argenta',
    category: 'As del Frente',
    description: 'As de la Sala Batalla, elogia a los entrenadores que no alardean de su Pokémon favorito',
    pokemonIds: []
  },
  {
    id: 183,
    name: 'Jericor',
    category: 'As del Frente',
    description: 'As de la Torre Batalla, padre de Israel, también le pueden las prisas igual que a su hijo',
    pokemonIds: []
  },
  {
    id: 184,
    name: 'Catleya y Kokuran',
    category: 'As del Frente',
    description: 'Ases del Castillo Batalla, representan princesa y mayordomo, respectivamente',
    pokemonIds: []
  }
];