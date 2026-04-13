// Hardcoded fishing locations data for Schiedam, Rotterdam, Delft area
export const FISHING_ZONES = [
  // GREEN - Fishing allowed
  {
    id: 'kralingse-plas',
    name: 'Kralingse Plas',
    city: 'Rotterdam',
    status: 'allowed', // 'allowed' or 'forbidden'
    lat: 51.9389,
    lng: 4.4639,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 1 juni (paaiperiode)',
      minSize: 'Niet van toepassing',
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
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Brasem min 25cm, Snoek min 40cm',
      otherRules: 'Nachtvisserij toegestaan'
    },
    description: 'Schie-watergang met zalmsteek en brasem. VISpas vereist.',
    waterType: 'schie'
  },
  {
    id: 'oude-maas',
    name: 'Oude Maas Schiedam',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9233,
    lng: 4.4050,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Zalmsteek gesloten in maart',
      minSize: 'Zalm min 30cm',
      otherRules: 'Zalmsteek visserij verboden'
    },
    description: 'Oude Maas rivier - brasem en karper. VISpas vereist.',
    waterType: 'rivier'
  },
  {
    id: 'kanaal-voorne',
    name: 'Kanaal door Voorne',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8833,
    lng: 4.3833,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaardmaten Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, nachtvisserij toegestaan'
    },
    description: 'Kanaal met veel brasem en blei. Vrij vissen, geen VISpas nodig.',
    waterType: 'kanaal'
  },
  {
    id: 'brassemermeer',
    name: 'Brassemermeer',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9167,
    lng: 4.4500,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 1 juni',
      minSize: 'Brasem min 25cm',
      otherRules: 'VISpas vereist, geen nachtvisserij'
    },
    description: 'Brasem specialistenmeer. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'poldervaart',
    name: 'Schiedamse wateren (Poldervaart)',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9300,
    lng: 4.3900,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, nachtvisserij toegestaan'
    },
    description: 'Poldervaart met brasem en blei. Vrij vissen.',
    waterType: 'polder'
  },
  {
    id: 'rottemunse-plas',
    name: 'Rottemunse Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9456,
    lng: 4.4200,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 15 maart - 15 mei (vogelbroedseizoen)',
      minSize: 'Snoekbaars min 35cm, Brasem min 25cm',
      otherRules: 'Maximaal 2 hengels, geen grondwerk.'
    },
    description: 'Plas met snoekbaars en brasem. Rustig water, geschikt voor beginners.',
    waterType: 'plas'
  },
  {
    id: 'spoorwegplas',
    name: 'Spoorwegplas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9511,
    lng: 4.4956,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Open water, vrij vissen toegestaan'
    },
    description: 'Sportviswater met blei, brasem en karper. Zeer populair!',
    waterType: 'plas'
  },
  {
    id: 'benthuizer-plas',
    name: 'Benthuizer Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8967,
    lng: 4.3656,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 15 mei',
      minSize: 'Karper min 35cm, Brasem min 25cm',
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
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
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
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Gesloten: 15 maart - 31 mei (vogelbroedseizoen)',
      minSize: 'Brasem min 25cm, Snoekbaars min 35cm',
      otherRules: 'Vrij vissen, geen nachtvisserij wegens natuur'
    },
    description: 'Natuurgebied met water. Brasem en snoekbaars. Dag toegg. €3.',
    waterType: 'plas'
  },
  {
    id: 'zweth-plas',
    name: 'Zweth Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9667,
    lng: 4.3900,
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Snoek min 40cm, Brasem min 25cm',
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
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, populair voor aal en schubvis'
    },
    description: 'Aantal verbonden wateren richting zee. Veel aal op zomeramen.',
    waterType: 'kanaal'
  },
  {
    id: 'oudevaart',
    name: 'Oudevaart/Vliet',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0389,
    lng: 4.3556,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Open watergang, vrij vissen'
    },
    description: 'Watergang met brasem, blei en schubvis. Helder water.',
    waterType: 'watergang'
  },
  {
    id: 'zuidpark-plas',
    name: 'Zuidpark Plas',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9789,
    lng: 4.4511,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 30 juni (vogelbroedseizoen)',
      minSize: 'Snoekbaars min 35cm, Brasem min 25cm',
      otherRules: 'Vrij vissen, geen nachtvisserij'
    },
    description: 'Plas in Zuidpark recreatiegebied. Snoekbaars en brasem.',
    waterType: 'plas'
  },
  {
    id: 'moerdijkse-wateren',
    name: 'Moerdijkse Wateren',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8556,
    lng: 4.5067,
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Karper min 35cm, Snoekbaars min 35cm',
      otherRules: 'VISpas vereist, nachtvisserij OK'
    },
    description: 'Grote karper- en snoekplas. Professioneel viswater. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'van-drielsche-wateren',
    name: 'Van Drielsche Wateren',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8778,
    lng: 4.3556,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 15 maart - 31 mei',
      minSize: 'Snoekbaars min 35cm',
      otherRules: 'VISpas vereist, beschermd broedgebied'
    },
    description: 'Snoekbaars specialist meer. Schoon water.',
    waterType: 'plas'
  },
  {
    id: 'bentheizersveld',
    name: 'Bentheizersveld/Kleine Lindekreek',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8911,
    lng: 4.4200,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
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
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
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
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 30 juni',
      minSize: 'Karper min 35cm',
      otherRules: 'VISpas vereist, vogelbroedgebied'
    },
    description: 'Grote plas, veel karper. Vogelgebied - gesloten in zomer.',
    waterType: 'plas'
  },
  {
    id: 'waaltuin',
    name: 'Waaltuin Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.9278,
    lng: 4.3389,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Gesloten: 15 maart - 31 mei',
      minSize: 'Brasem min 25cm',
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
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Snoek min 40cm, Snoekbaars min 35cm',
      otherRules: 'VISpas vereist, nachtvisserij toegestaan'
    },
    description: 'Snoek- en snoekbaars plas. VISpas vereist.',
    waterType: 'plas'
  },
  {
    id: 'redichem-meer',
    name: 'Recichem Meer',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9056,
    lng: 4.2889,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Gesloten: 15 maart - 31 mei',
      minSize: 'Brasem min 25cm',
      otherRules: 'VISpas vereist, beschermd water'
    },
    description: 'Gerenoveerd meer. Schoon water, veel brasem.',
    waterType: 'plas'
  },
  {
    id: 'abbeplas',
    name: 'Abbeplas',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0189,
    lng: 4.4022,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, veel aal'
    },
    description: 'Vrijetijdsplas met aal, brasem en blei.',
    waterType: 'plas'
  },
  {
    id: 'polder-zuid-holland',
    name: 'Polder Nieuw-Lekkerland',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8500,
    lng: 4.6500,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen in polderwegen'
    },
    description: 'Uitgestrekt poldergebied met veel watergangen. Avontuurlijk vissen!',
    waterType: 'polder'
  },
  {
    id: 'langelindendam',
    name: 'Langelindendam',
    city: 'Delft',
    status: 'allowed',
    lat: 52.0444,
    lng: 4.3650,
    rules: {
      requiresVispas: true,
      nightFishing: false,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Snoek min 40cm, Brasem min 25cm',
      otherRules: 'VISpas vereist'
    },
    description: 'Landgoed water met snoek en brasem. Historisch terrein.',
    waterType: 'plas'
  },
  {
    id: 'biesbosch-vandijke',
    name: 'Biesbosch - Van Dijkwater',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.8111,
    lng: 4.6833,
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Gesloten: maart/april (broedseizioen)',
      minSize: 'Snoek min 40cm, Baars min 30cm',
      otherRules: 'VISpas vereist, nachtvisserij OK'
    },
    description: 'Bekend water in Biesbosch. Snoek en baars specialist.',
    waterType: 'rivier'
  },
  {
    id: 'rotte-rotterdam',
    name: 'Rotte (Rotterdam centrum)',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 51.9300,
    lng: 4.4800,
    rules: {
      requiresVispas: false,
      nightFishing: true,
      seasonalBan: 'Geen seizoensverbod',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen in stedelijk water'
    },
    description: 'Rotte rivier door Rotterdam. Aal en brasem.',
    waterType: 'rivier'
  },
  {
    id: 'koei-weide',
    name: 'Koei Weide Plas',
    city: 'Schiedam',
    status: 'allowed',
    lat: 51.8778,
    lng: 4.3889,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Gesloten: 1 april - 31 mei',
      minSize: 'Standaard Nederlands sportvisreglement',
      otherRules: 'Vrij vissen, vogelgebied'
    },
    description: 'Kleine plas in agrarisch gebied. Brasem en karper.',
    waterType: 'plas'
  },
  {
    id: 'loosdrechtse-plassen',
    name: 'Loosdrechtse Plassen (zuid)',
    city: 'Rotterdam',
    status: 'allowed',
    lat: 52.1150,
    lng: 4.7500,
    rules: {
      requiresVispas: true,
      nightFishing: true,
      seasonalBan: 'Snoek gesloten: 1 feb - 1 april',
      minSize: 'Snoek min 40cm, Baars min 30cm',
      otherRules: 'VISpas vereist, nachtvisserij OK'
    },
    description: 'Grote plassen. Snoek, baars en brasem. Zeer populair!',
    waterType: 'plas'
  },

  // RED - Fishing forbidden
  {
    id: 'rotterdam-haven',
    name: 'Rotterdamse Haven',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.9200,
    lng: 4.2800,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Industriegebied - Visserij strikt verboden'
    },
    description: 'Industriële haven - geen visserij toegestaan',
    waterType: 'haven'
  },
  {
    id: 'drinkwater-delft',
    name: 'Drinkwaterwingebied Delft',
    city: 'Delft',
    status: 'forbidden',
    lat: 52.0167,
    lng: 4.2867,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Drinkwaterwinning gebied - toegang verboden'
    },
    description: 'Drinkwaterwinning - geen toegang',
    waterType: 'drinkwater'
  },
  {
    id: 'midden-delfland',
    name: 'Midden-Delfland Natuurreservaat',
    city: 'Delft',
    status: 'forbidden',
    lat: 52.0500,
    lng: 4.3000,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Natuurreservaat - visserij verboden'
    },
    description: 'Beschermd natuurgebied - geen visserij',
    waterType: 'natuurreservaat'
  },
  {
    id: 'europoort',
    name: 'Europoort',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.8889,
    lng: 4.1567,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Industriehaven - geen toegang'
    },
    description: 'Grote commerciële haven - visserij verboden',
    waterType: 'haven'
  },
  {
    id: 'schiemond',
    name: 'Schiemond Haven',
    city: 'Schiedam',
    status: 'forbidden',
    lat: 51.9123,
    lng: 4.2589,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Haven gebied - eigendomsrecht, visserij verboden'
    },
    description: 'Privé haven - toegang niet toegestaan',
    waterType: 'haven'
  },
  {
    id: 'leiduin-water',
    name: 'Leiduin Waterwinning',
    city: 'Delft',
    status: 'forbidden',
    lat: 52.0056,
    lng: 4.2500,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Drinkwatergebied - toegang verboden'
    },
    description: 'Drinkwaterwingebied - geen visserij',
    waterType: 'drinkwater'
  },
  {
    id: 'krimpenerwaard',
    name: 'Krimpenerwaard (Beschermd)',
    city: 'Rotterdam',
    status: 'forbidden',
    lat: 51.8167,
    lng: 4.6350,
    rules: {
      requiresVispas: false,
      nightFishing: false,
      seasonalBan: 'Altijd gesloten',
      minSize: 'Niet van toepassing',
      otherRules: 'Vogelbroedgebied - visserij altijd verboden'
    },
    description: 'Natura 2000 gebied - strict beschermd',
    waterType: 'natuurreservaat'
  }
]

// Color mapping for fishing status
export const STATUS_COLORS = {
  allowed: '#22c55e', // Green
  forbidden: '#ef4444' // Red
}

// Center coordinates for map (between Rotterdam, Schiedam, Delft)
export const MAP_CENTER = {
  lat: 52.0000,
  lng: 4.3700
}

// Zoom level for initial view
export const INITIAL_ZOOM = 11
