import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  constructor() {
  }
  getDataConf() {
    return [
      // {
      //   prop: 'id',
      // },
      {
        prop: 'CODIGOTCHN',
        name: 'CODIGOTCHN'
      },
      {
        prop: 'CMONEDA',
        name: 'CMONEDA'
      },
      {
        prop: 'NDOCUMENTO',
        name: 'NDOCUMENTO'
      },
      {
        prop: 'tapaterno',
        name: 'tapaterno'
      },
      {
        prop: 'tamaterno',
        name: 'tamaterno'
      },
      {
        prop: 'tnombres',
        name: 'tnombres'
      },
      {
        prop: 'EDAD',
        name: 'EDAD'
      },
      {
        prop: 'DNACIMIENTO',
        name: 'DNACIMIENTO'
      },
      {
        prop: 'tdireccion',
        name: 'tdireccion'
      },
      {
        prop: 'CUBIGEO',
        name: 'CUBIGEO'
      },
      {
        prop: 'DEPARTAMENTO',
        name: 'DEPARTAMENTO'
      },
      {
        prop: 'PROVINCIA',
        name: 'PROVINCIA'
      },
      {
        prop: 'DISTRITO',
        name: 'DISTRITO'
      },
      {
        prop: 'cinmueble',
        name: 'cinmueble'
      },
      {
        prop: 'actividad',
        name: 'actividad'
      },
      {
        prop: 'saldo_actual',
        name: 'saldo_actual'
      },

      {
        prop: 'ESTADO',
        name: 'ESTADO'
      },
      {
        prop: 'cuota',
        name: 'cuota'
      },
      {
        prop: 'sueldo',
        name: 'sueldo'
      },
      {
        prop: 'fdesembolso',
        name: 'fdesembolso'
      },
      {
        prop: 'tipooperacion',
        name: 'tipooperacion'
      },
      {
        prop: 'S_INFOCORP',
        name: 'S_INFOCORP'
      },
      {
        prop: 'NVALORIZACION',
        name: 'NVALORIZACION'
      },
      {
        prop: 'V_EDIFICACION',
        name: 'V_EDIFICACION'
      }, {
        prop: 'V_PROPIEDAD',
        name: 'V_PROPIEDAD'
      },
      {
        prop: 'V_COMERCIAL',
        name: 'V_COMERCIAL'
      }, {
        prop: 'V_REALIZACIONSOL',
        name: 'V_REALIZACIONSOL'
      },
      {
        prop: 'V_REALIZACIONDOL',
        name: 'V_REALIZACIONDOL'
      }, {
        prop: 'F_VALORIZACION',
        name: 'F_VALORIZACION'
      },
      {
        prop: 'ncuotas_generadas',
        name: 'ncuotas_generadas'
      }, {
        prop: 'cuotasatrasadas',
        name: 'cuotasatrasadas'
      },



    ];
  }
  getAll() {
    return [

      {
        "CODIGOTCHN": "TCHN12823",
        "CMONEDA": 1,
        "ndocumento": 25679047,
        "tapaterno": "SAETTONE ",
        "tamaterno": "PALLETE",
        "tnombres": "GLORIA ",
        "dnacimiento": "03\/02\/1943",
        "tdireccion": "JIRÓN AGUSTIN TOVAR NUMERO 589",
        "cubigeo": "03\/18\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DEL CALLAO",
        "distrito": "LA PUNTA",
        "cinmueble": 3025,
        "actividad": "OTRAS ACTIVIDADES PROFESIONALES, CIENTÍFICAS Y TÉCNICAS N.C.P.",
        "cuotasatrasdas": 1,
        "estado": "NORMAL",
        "SUELDO": 3583.64,
        "fdesembolso": 6500,
        "tipooperacion": "30\/04\/2021",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :925",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 78212.56,
        "V_COMERCIAL": 527310,
        "V_REALIZACIONSOL": 605616,
        "V_REALIZACIONDOL": 484492.8
      },
      {
        "CODIGOTCHN": "TCHN13658",
        "CMONEDA": 1,
        "ndocumento": 25527267,
        "tapaterno": "CHUMIOQUE",
        "tamaterno": "GONZALES",
        "tnombres": "MANUEL",
        "dnacimiento": "03\/12\/1963",
        "tdireccion": "PUEBLO JOVEN DEFENSORES DE LA PATRIA MZ C4 LOTE 23",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3330,
        "actividad": "VENTA AL POR MAYOR DE MATERIALES DE CONSTRUCCIÓN, ARTÍCULOS DE FERRETERÍA Y EQUIPO Y MATERIALES DE FONTANERÍA Y CALEFACCIÓN.",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 3226.21,
        "fdesembolso": 8000,
        "tipooperacion": "03\/11\/2022",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :291",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 358435.48,
        "V_COMERCIAL": 289019.64,
        "V_REALIZACIONSOL": 647546,
        "V_REALIZACIONDOL": 518036.8
      },
      {
        "CODIGOTCHN": "TCHN13576",
        "CMONEDA": 1,
        "ndocumento": 42871685,
        "tapaterno": "SIERRA",
        "tamaterno": "VELASQUEZ",
        "tnombres": "DENISSE CYNTHIA",
        "dnacimiento": "01\/07\/1984",
        "tdireccion": "PROYECTO PILOTO NUEVO PACHACUTEC MZ X LOTE 22 SECTOR A, GRUPO RESIDENCIAL A4",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3301,
        "actividad": "VENTA AL POR MAYOR DE ALIMENTOS, BEBIDAS Y TABACO.",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 2389.59,
        "fdesembolso": 2800,
        "tipooperacion": "07\/09\/2022",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :74",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 461611.33,
        "V_COMERCIAL": 138240,
        "V_REALIZACIONSOL": 599808,
        "V_REALIZACIONDOL": 479846.4
      },
      {
        "CODIGOTCHN": "TCHN13524",
        "CMONEDA": 1,
        "ndocumento": 25740950,
        "tapaterno": "BERMEJO",
        "tamaterno": "ORMEÑO",
        "tnombres": "ENMA ROSA",
        "dnacimiento": "10\/05\/1969",
        "tdireccion": "ASENTAMIENTO HUMANO PROYECTO INTEGRAL TODOS UNIDOS DE VENTANILLA MZ A LOTE 14 SETOR JOSE DE SAN MARTIN",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3281,
        "actividad": "VENTA AL POR MAYOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CALZADO",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 2360.32,
        "fdesembolso": 5000,
        "tipooperacion": "09\/08\/2022",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :612",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 90587,
        "V_COMERCIAL": 123342.8,
        "V_REALIZACIONSOL": 214032,
        "V_REALIZACIONDOL": 171225.6
      },
      {
        "CODIGOTCHN": "TCHN13914",
        "CMONEDA": 1,
        "ndocumento": 43823509,
        "tapaterno": "CORNEJO",
        "tamaterno": "CALDERON",
        "tnombres": "NAZARETH DEL ROCIO",
        "dnacimiento": "15\/08\/1986",
        "tdireccion": "URBANIZACION CIUDAD SATELITE DE VENTANILLA MZ V-43 LOTE 14",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3408,
        "actividad": "VENTA AL POR MAYOR DE PRODUCTOS TEXTILES, PRENDAS DE VESTIR Y CALZADO",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 2841.53,
        "fdesembolso": 7500,
        "tipooperacion": "21\/03\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :37",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 69213.11,
        "V_COMERCIAL": 273087,
        "V_REALIZACIONSOL": 342380,
        "V_REALIZACIONDOL": 239666
      },
      {
        "CODIGOTCHN": "TCHN14019",
        "CMONEDA": 1,
        "ndocumento": 25799469,
        "tapaterno": "RIVERA",
        "tamaterno": "ABAD",
        "tnombres": "JOSE ELIAS",
        "dnacimiento": "05\/09\/1963",
        "tdireccion": "ASENTAMIENTO HUMANO ALFONSO UGARTE MZ F LOTE 17",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3440,
        "actividad": "VENTA AL POR MAYOR NO ESPECIALIZADA",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 2409.55,
        "fdesembolso": 3500,
        "tipooperacion": "05\/05\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 98181.72,
        "V_COMERCIAL": 135360,
        "V_REALIZACIONSOL": 233496,
        "V_REALIZACIONDOL": 163447.2
      },
      {
        "CODIGOTCHN": "TCHN13791",
        "CMONEDA": 1,
        "ndocumento": 41789397,
        "tapaterno": "SANDOVAL",
        "tamaterno": "RENTERIA",
        "tnombres": "PAOLA ARMINDA",
        "dnacimiento": "23\/05\/1983",
        "tdireccion": "CALLE VEGA NUMERO 107 (MANZANA U LOTE 18), URBANIZACION ALMIRANTE MIGUEL GRAU",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3361,
        "actividad": "VENTA AL POR MENOR DE OTROS PRODUCTOS EN PUESTOS DE VENTA Y MERCADOS ",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 1860.66,
        "fdesembolso": 5700,
        "tipooperacion": "05\/01\/2023",
        "S_INFOCORP": "RENOVACION",
        "NVALORIZACION": "Score :585",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 120268.97,
        "V_COMERCIAL": 343800,
        "V_REALIZACIONSOL": 464130,
        "V_REALIZACIONDOL": 371304
      },
      {
        "CODIGOTCHN": "TCHN14024",
        "CMONEDA": 1,
        "ndocumento": 25693888,
        "tapaterno": "TASAYCO ",
        "tamaterno": "CORNEJO",
        "tnombres": "MARIO JULIO ",
        "dnacimiento": "10\/12\/1944",
        "tdireccion": "URBANIZACION VENTANILLA PERU - BID, SUB PROGRAMAS I Y II MZ P LOTE 16",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3443,
        "actividad": "ACTIVIDADES INMOBILIARIAS REALIZADAS CON BIENES PROPIOS O ARRENDADOS ",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 1230.3,
        "fdesembolso": 3000,
        "tipooperacion": "08\/05\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 144715.05,
        "V_COMERCIAL": 168300,
        "V_REALIZACIONSOL": 313038,
        "V_REALIZACIONDOL": 219126.6
      },
      {
        "CODIGOTCHN": "TCHN13833",
        "CMONEDA": 1,
        "ndocumento": 40009869,
        "tapaterno": " LOPEZ ",
        "tamaterno": "LANGLE",
        "tnombres": "LARIZA INGRID",
        "dnacimiento": "19\/11\/1975",
        "tdireccion": "ASENTAMIENTO HUMANO LOS OLIVOS DE LA PAZ MZ P LOTE 30",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3382,
        "actividad": "ACTIVIDADES DE SEGURIDAD PRIVADA ",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 1731.45,
        "fdesembolso": 2800,
        "tipooperacion": "13\/02\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :43",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 75522.54,
        "V_COMERCIAL": 130704,
        "V_REALIZACIONSOL": 206170,
        "V_REALIZACIONDOL": 144319
      },
      {
        "CODIGOTCHN": "TCHN13522",
        "CMONEDA": 1,
        "ndocumento": 10677908,
        "tapaterno": "BELTRAN",
        "tamaterno": "SARMIENTO",
        "tnombres": "NELLY LISBETT ",
        "dnacimiento": "15\/12\/1971",
        "tdireccion": "ASENTAMIENTO HUMANO SAN JUAN BOSCO MZ C SUB LOTE 16",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 1216,
        "actividad": "ALQUILER Y ARRENDAMIENTO DE OTROS TIPOS DE MAQUINARIA, EQUIPO Y BIENES TANGIBLES ",
        "cuotasatrasdas": 3,
        "estado": "NORMAL",
        "SUELDO": 2413.68,
        "fdesembolso": 5400,
        "tipooperacion": "27\/07\/2022",
        "S_INFOCORP": "RENOVACION",
        "NVALORIZACION": "Score :27",
        "V_EDIFICACION": 2,
        "V_PROPIEDAD": 187903.01,
        "V_COMERCIAL": 158760,
        "V_REALIZACIONSOL": 346528,
        "V_REALIZACIONDOL": 277222.4
      },
      {
        "CODIGOTCHN": "TCHN13732",
        "CMONEDA": 1,
        "ndocumento": 76587170,
        "tapaterno": "SERNA",
        "tamaterno": "SANDOVAL",
        "tnombres": "FIORELLA NATHALY",
        "dnacimiento": "25\/11\/1970",
        "tdireccion": "ASENTAMIENTO HUMANO VILLA LOS REYES MZ N LOTE 7 SECTOR 1",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3355,
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 3611.85,
        "fdesembolso": 16000,
        "tipooperacion": "14\/12\/2022",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :5",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 175329.34,
        "V_COMERCIAL": 240864,
        "V_REALIZACIONSOL": 416108,
        "V_REALIZACIONDOL": 332886.4
      },
      {
        "CODIGOTCHN": "TCHN13607",
        "CMONEDA": 2,
        "ndocumento": 44925990,
        "tapaterno": "GARCES",
        "tamaterno": "CURAY",
        "tnombres": "MADELEN VIRGINIA",
        "dnacimiento": "28\/02\/1988",
        "tdireccion": "ASENTAMIENTO HUMANO KEIKO SOFIA FUJIMORI MZ T LOTE 28",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3309,
        "actividad": "OTRAS ACTIVIDADES DE SERVICIO DE COMIDAS",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 533.93,
        "fdesembolso": 9340,
        "tipooperacion": "30\/09\/2022",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :732",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 213862.21,
        "V_COMERCIAL": 148767.68,
        "V_REALIZACIONSOL": 362457,
        "V_REALIZACIONDOL": 289965.6
      },
      {
        "CODIGOTCHN": "TCHN13983",
        "CMONEDA": 1,
        "ndocumento": 80652759,
        "tapaterno": "CHUQUE ",
        "tamaterno": "OSORIO",
        "tnombres": "MERCY BETZABET",
        "dnacimiento": "09\/09\/1979",
        "tdireccion": "ASENTAMIENTO HUMANO 24 DE JUNIO MZ C LOTE 12",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3423,
        "actividad": "OTRAS ACTIVIDADES DE ALOJAMIENTO ",
        "cuotasatrasdas": 0,
        "estado": "NORMAL",
        "SUELDO": 2378.06,
        "fdesembolso": 5800,
        "tipooperacion": "18\/04\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 293677.94,
        "V_COMERCIAL": 153090,
        "V_REALIZACIONSOL": 446040,
        "V_REALIZACIONDOL": 312228
      },
      {
        "CODIGOTCHN": "TCHN13774",
        "CMONEDA": 1,
        "ndocumento": 73257780,
        "tapaterno": "PEREDA",
        "tamaterno": "MIÑANO",
        "tnombres": "ALBERTH GIUSEPPE",
        "dnacimiento": "14\/09\/1994",
        "tdireccion": "PUEBLO JOVEN DEFENSORES DE LA PATRIA MZ D5 LOTE 30 UNIDAD Nº2",
        "cubigeo": 130106,
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3364,
        "actividad": "OTRAS ACTIVIDADES DE ATENCIÓN DE LA SALUD HUMANA",
        "cuotasatrasdas": 2,
        "estado": "NORMAL",
        "SUELDO": 1939.26,
        "fdesembolso": 9800,
        "tipooperacion": "11\/01\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "Score :39",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 203717.8,
        "V_COMERCIAL": 80041.5,
        "V_REALIZACIONSOL": 283745,
        "V_REALIZACIONDOL": 226996
      },
      {
        "CODIGOTCHN": "TCHN13870",
        "CMONEDA": 1,
        "ndocumento": 10779853,
        "tapaterno": "APONTE",
        "tamaterno": "AVENDAÑO",
        "tnombres": "ELMER JEREMIAS",
        "dnacimiento": "17\/12\/1969",
        "tdireccion": "ASENTAMIENTO HUMANO HIROSHIMA MZ M LOTE 11",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3349,
        "actividad": "VENTA AL POR MAYOR NO ESPECIALIZADA",
        "cuotasatrasdas": 2,
        "estado": "NORMAL",
        "SUELDO": 987.75,
        "fdesembolso": 50000,
        "tipooperacion": "20\/02\/2023",
        "S_INFOCORP": "RENOVACION",
        "NVALORIZACION": "Score :772",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 88883.96,
        "V_COMERCIAL": 348300,
        "V_REALIZACIONSOL": 437310,
        "V_REALIZACIONDOL": 349848
      },
      {
        "CODIGOTCHN": "TCHN13946",
        "CMONEDA": 1,
        "ndocumento": 43119525,
        "tapaterno": "HERRERA",
        "tamaterno": "ROJAS",
        "tnombres": "NOE ELIAS",
        "dnacimiento": "03\/05\/1985",
        "tdireccion": "ASENTAMIENTO HUMANO VILLA LOS REYES MZ O LOTE 13 SECTOR 3",
        "cubigeo": "03\/19\/2256",
        "departamento": "CALLAO",
        "provincia": "PROV.CONST.DELCALLAO",
        "distrito": "VENTANILLA",
        "cinmueble": 3420,
        "actividad": "FABRICACIÓN DE OTROS PRODUCTOS TEXTILES N.C.P.",
        "cuotasatrasdas": 1,
        "estado": "NORMAL",
        "SUELDO": 1481.14,
        "fdesembolso": 6000,
        "tipooperacion": "04\/04\/2023",
        "S_INFOCORP": "NUEVO",
        "NVALORIZACION": "",
        "V_EDIFICACION": 1,
        "V_PROPIEDAD": 39244.14,
        "V_COMERCIAL": 205088,
        "V_REALIZACIONSOL": 244296,
        "V_REALIZACIONDOL": 171007.2
      },


    ]
  }

}
