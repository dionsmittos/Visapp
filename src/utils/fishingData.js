export const FISHING_ZONES = [
  // ==========================================
  // GROEN — Vissen toegestaan
  // ==========================================
  {
    id: 'kralingse-plas',
    name: 'Kralingse Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9389,
    lng: 4.4639,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'Geen nachtvisserij, maximaal 2 hengels'
    },
    description: 'Grote plas met veel brasem en karper. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'delftse-schie',
    name: 'Delftse Schie',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0011,
    lng: 4.3589,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'Nachtvisserij toegestaan'
    },
    description: 'Schie-watergang met brasem en snoek. VISpas vereist.',
    waterType: 'kanaal'
  },
  {
    id: 'oude-maas',
    name: 'Oude Maas Schiedam',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9233,
    lng: 4.4050,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'Maximaal 2 hengels'
    },
    description: 'Oude Maas rivier — brasem en karper. VISpas vereist.',
    waterType: 'rivier'
  },
  {
    id: 'kanaal-voorne',
    name: 'Kanaal door Voorne',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8833,
    lng: 4.3833,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaardmaten Nederlands sportvisreglement',
      otherRules: 'VISpas vereist, nachtvisserij toegestaan'
    },
    description: 'Kanaal met veel brasem en blei. VISpas vereist.',
    waterType: 'kanaal'
  },
  {
    id: 'poldervaart',
    name: 'Poldervaart',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9300,
    lng: 4.3900,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'VISpas vereist, valt onder HSV Schiedam'
    },
    description: 'Poldervaart in Schiedam. VISpas vereist (HSV Schiedam).',
    waterType: 'polder'
  },
  {
    id: 'spoorwegplas',
    name: 'Spoorwegplas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9511,
    lng: 4.4956,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Open water, vrij vissen toegestaan'
    },
    description: 'Sportviswater met blei, brasem en karper. Populair!',
    waterType: 'plas'
  },
  {
    id: 'benthuizer-plas',
    name: 'Benthuizer Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8967,
    lng: 4.3656,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Karper min 35cm',
      otherRules: 'VISpas vereist, maximaal 2 hengels'
    },
    description: 'Karper en brasem specialist plas. Goed onderhouden.',
    waterType: 'plas'
  },
  {
    id: 'midden-oudeneel',
    name: 'Midden Oudeneel',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0167,
    lng: 4.4050,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, goed voor aal en schubvis'
    },
    description: 'Open water route tussen Delft en Den Haag. Veel aal en brasem.',
    waterType: 'kanaal'
  },
  {
    id: 'delftse-hout',
    name: 'Delftse Hout',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0100,
    lng: 4.3400,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, geen nachtvisserij wegens natuur'
    },
    description: 'Natuurgebied met water. Brasem en snoekbaars.',
    waterType: 'plas'
  },
  {
    id: 'zweth-plas',
    name: 'Zweth Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9667,
    lng: 4.3900,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoek min 45cm, Snoekbaars min 42cm',
      otherRules: 'VISpas vereist, nachtvisserij toegestaan'
    },
    description: 'Exclusieve snoekplas. Wateroppervlak 10ha. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'vlaardingen-waters',
    name: 'Vlaardingse Wateren',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9056,
    lng: 4.3444,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, populair voor aal en schubvis'
    },
    description: 'Aantal verbonden wateren richting zee. Veel aal in zomer.',
    waterType: 'kanaal'
  },
  {
    id: 'vliet',
    name: 'Vliet',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0050,
    lng: 4.3550,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'VISpas vereist'
    },
    description: 'Historische waterweg tussen Delft en Den Haag. Brasem, blei en snoek.',
    waterType: 'kanaal'
  },
  {
    id: 'zuidpark-plas',
    name: 'Zuidpark Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9789,
    lng: 4.4511,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, geen nachtvisserij'
    },
    description: 'Plas in Zuidpark recreatiegebied. Snoekbaars en brasem.',
    waterType: 'plas'
  },
  {
    id: 'bentheizersveld',
    name: 'Bentheizersveld/Kleine Lindekreek',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8911,
    lng: 4.4200,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, populair voor aal'
    },
    description: 'Natuurlijke watergang. Veel aal in zomermaanden.',
    waterType: 'watergang'
  },
  {
    id: 'lange-lindekreek',
    name: 'Lange Lindekreek',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8856,
    lng: 4.4556,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Open watergang, goed voor brasem'
    },
    description: 'Rustige watergang met brasem en blei.',
    waterType: 'watergang'
  },
  {
    id: 'edesche-wateren',
    name: 'Edesche Wateren',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8889,
    lng: 4.4667,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Karper min 35cm',
      otherRules: 'VISpas vereist, vogelbroedgebied'
    },
    description: 'Grote plas, veel karper. Vogelgebied — gesloten in zomer.',
    waterType: 'plas'
  },
  {
    id: 'waaltuin',
    name: 'Waaltuin Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9278,
    lng: 4.3389,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, recreatiegebied'
    },
    description: 'Kleine plas bij recreatiegebied. Brasem en snoekbaars.',
    waterType: 'plas'
  },
  {
    id: 'nieuw-waarden',
    name: 'Nieuw Waarden',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9422,
    lng: 4.4889,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoek min 45cm, Snoekbaars min 42cm',
      otherRules: 'VISpas vereist, nachtvisserij toegestaan'
    },
    description: 'Snoek- en snoekbaars plas. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'abbeplas',
    name: 'Abbeplas',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0189,
    lng: 4.4022,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, veel aal'
    },
    description: 'Vrijetijdsplas met aal, brasem en blei.',
    waterType: 'plas'
  },
  {
    id: 'langelindendam',
    name: 'Langelindendam',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0444,
    lng: 4.3650,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoek min 45cm',
      otherRules: 'VISpas vereist'
    },
    description: 'Landgoed water met snoek en brasem. Historisch terrein.',
    waterType: 'plas'
  },
  {
    id: 'rotte',
    name: 'Rotte',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9550,
    lng: 4.4750,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'VISpas vereist'
    },
    description: 'Rotte rivier door Rotterdam-Noord. Aal, brasem en snoek. VISpas vereist.',
    waterType: 'rivier'
  },
  {
    id: 'koei-weide',
    name: 'Koei Weide Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8778,
    lng: 4.3889,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, vogelgebied'
    },
    description: 'Kleine plas in agrarisch gebied. Brasem en karper.',
    waterType: 'plas'
  },

  // ==========================================
  // NIEUWE CORRECTE LOCATIES
  // ==========================================
  {
    id: 'nieuwe-maas',
    name: 'Nieuwe Maas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9050,
    lng: 4.4900,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'VISpas vereist, nachtvisserij beperkt op veel stukken'
    },
    description: 'Grote rivier door Rotterdam centrum. Snoekbaars, brasem en aal. Nachtvisserij beperkt.',
    waterType: 'rivier'
  },
  {
    id: 'het-noord',
    name: 'Noord',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9350,
    lng: 4.5000,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'VISpas vereist'
    },
    description: 'Waterweg in Rotterdam-Noord richting Kinderdijk. Snoekbaars en brasem.',
    waterType: 'rivier'
  },
  {
    id: 'schie-schiedam',
    name: 'Schie',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9180,
    lng: 4.3890,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'VISpas vereist'
    },
    description: 'De Schie door Schiedam en Vlaardingen. Brasem, blei en snoek.',
    waterType: 'kanaal'
  },
  {
    id: 'krimpen-ijssel',
    name: 'Krimpen aan den IJssel',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9150,
    lng: 4.5950,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'VISpas vereist'
    },
    description: 'Oever van de IJssel bij Krimpen. Snoekbaars, brasem en blankvoorn.',
    waterType: 'rivier'
  },
  {
    id: 'hollandse-ijssel',
    name: 'Hollandse IJssel',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9200,
    lng: 4.5500,
    federation: 'Sportvisserij Zuidwest Nederland',
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 maart - 31 mei',
      minSize: 'Snoekbaars min 42cm, Snoek min 45cm',
      otherRules: 'VISpas vereist'
    },
    description: 'Hollandse IJssel — uitstekend snoekbaarswater. VISpas vereist.',
    waterType: 'rivier'
  },

  // ==========================================
  // ROOD — Vissen verboden
  // ==========================================
  {
    id: 'rotterdam-haven',
    name: 'Rotterdamse Haven',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.9200,
    lng: 4.2800,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Industriegebied — Visserij strikt verboden'
    },
    description: 'Industriële haven — geen visserij toegestaan',
    waterType: 'haven'
  },
  {
    id: 'drinkwater-delft',
    name: 'Drinkwaterwingebied Delft',
    city: 'Delft',
    status: 'forbidden',
    lat: 52.0167,
    lng: 4.2867,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Drinkwaterwinning gebied — toegang verboden'
    },
    description: 'Drinkwaterwinning — geen toegang',
    waterType: 'drinkwater'
  },
  {
    id: 'midden-delfland',
    name: 'Midden-Delfland Natuurreservaat',
    city: 'Delft',
    status: 'forbidden',
    lat: 52.0500,
    lng: 4.3000,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Natuurreservaat — visserij verboden'
    },
    description: 'Beschermd natuurgebied — geen visserij',
    waterType: 'natuurreservaat'
  },
  {
    id: 'europoort',
    name: 'Europoort',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.8889,
    lng: 4.1567,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Industriehaven — geen toegang'
    },
    description: 'Grote commerciële haven — visserij verboden',
    waterType: 'haven'
  },
  {
    id: 'schiemond',
    name: 'Schiemond Haven',
    city: 'Schiedam',
    status: 'forbidden',
    lat: 51.9123,
    lng: 4.2589,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Haven gebied — visserij verboden'
    },
    description: 'Privé haven — toegang niet toegestaan',
    waterType: 'haven'
  },
  {
    id: 'krimpenerwaard',
    name: 'Krimpenerwaard (Beschermd)',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.8167,
    lng: 4.6350,
    federation: null,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Vogelbroedgebied — visserij altijd verboden'
    },
    description: 'Natura 2000 gebied — strict beschermd',
    waterType: 'natuurreservaat'
  }
]

export const STATUS_COLORS = {
  allowed: '#22c55e',
  forbidden: '#ef4444'
}

export const MAP_CENTER = {
  lat: 51.9500,
  lng: 4.4000
}

export const INITIAL_ZOOM = 11
