const statesData = {
  AC: {
    code: '2',
    areaCodes: [68],
    name: 'Acre',
  },
  AL: {
    code: '4',
    areaCodes: [82],
    name: 'Alagoas',
  },
  AP: {
    code: '2',
    areaCodes: [96],
    name: 'Amapá',
  },
  AM: {
    code: '2',
    areaCodes: [92, 97],
    name: 'Amazonas',
  },
  BA: {
    code: '5',
    areaCodes: [71, 73, 74, 75, 77],
    name: 'Bahia',
  },
  CE: {
    code: '3',
    areaCodes: [85, 88],
    name: 'Ceará',
  },
  DF: {
    code: '1',
    areaCodes: [61],
    name: 'Distrito Federal',
  },
  ES: {
    code: '7',
    areaCodes: [27, 28],
    name: 'Espírito Santo',
  },
  GO: {
    code: '1',
    areaCodes: [62, 64],
    name: 'Goiás',
  },
  MA: {
    code: '3',
    areaCodes: [98, 99],
    name: 'Maranhão',
  },
  MG: {
    code: '6',
    areaCodes: [31, 32, 33, 34, 35, 37, 38],
    name: 'Minas Gerais',
  },
  MT: {
    code: '1',
    areaCodes: [65, 66],
    name: 'Mato Grosso',
  },
  MS: {
    code: '1',
    areaCodes: [67],
    name: 'Mato Grosso do Sul',
  },
  PA: {
    code: '2',
    areaCodes: [91, 93, 94],
    name: 'Pará',
  },
  PB: {
    code: '4',
    areaCodes: [83],
    name: 'Paraíba',
  },
  PE: {
    code: '4',
    areaCodes: [81, 87],
    name: 'Pernambuco',
  },
  PI: {
    code: '3',
    areaCodes: [86, 89],
    name: 'Piauí',
  },
  PR: {
    code: '9',
    areaCodes: [41, 42, 43, 44, 45, 46],
    name: 'Paraná',
  },
  RJ: {
    code: '7',
    areaCodes: [21, 22, 24],
    name: 'Rio de Janeiro',
  },
  RN: {
    code: '4',
    areaCodes: [84],
    name: 'Rio Grande do Norte',
  },
  RO: {
    code: '2',
    areaCodes: [69],
    name: 'Rondônia',
  },
  RS: {
    code: '0',
    areaCodes: [51, 53, 54, 55],
    name: 'Rio Grande do Sul',
  },
  RR: {
    code: '2',
    areaCodes: [95],
    name: 'Roraima',
  },
  SC: {
    code: '9',
    areaCodes: [47, 48, 49],
    name: 'Santa Catarina',
  },
  SE: {
    code: '5',
    areaCodes: [79],
    name: 'Sergipe',
  },
  SP: {
    code: '8',
    areaCodes: [11, 12, 13, 14, 15, 16, 17, 18, 19],
    name: 'São Paulo',
  },
  TO: {
    code: '1',
    areaCodes: [63],
    name: 'Tocantins',
  },
}

const states = Object.keys(statesData)

const areaCodes = Object.values(statesData).flatMap(state => state.areaCodes)
