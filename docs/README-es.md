[English](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/README-es.md)
---

# wuijs-data-lib

|                       | |
| --------------------- | --- |
| **Nombre librería**   | `wuijs-data-lib` |
| **Versión librería**  | `0.1.0` ([Registro de Cambios](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/CHANGELOG-es.md)) |
| **Paquete npm**       | `@wui-js/data` |
| **Versión documento** | `0.1.0.20261107.0` |
| **Licencia**          | `Licencia Apache 2.0` |
| **Autor**             | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repositorio**       | [https://github.com/wui-js/wuijs-data-lib](https://github.com/wui-js/wuijs-data-lib) |
| **Documentación**     | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Sitio web**         | [https://wuijs.dev](https://wuijs.dev) |

## Índice

*   [Descripción General](#overview)
	*   [Acerca del Proyecto WUI/JS](#project)
	*   [Tabla de Clases](#classtable)
	*   [Mapa de Directorios](#dirmap)
*   [Instalación](#install)
*   [Clases](#classes)
	*   [WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-es.md)
	*   [WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-es.md)

<a name="overview"></a>

## Descripción General

WUI/JS Data Lib es una librería JavaScript de código abierto que proporciona conjuntos de datos de referencia (países, zonas horarias) cargados bajo demanda desde archivos JSON versionados, sin dependencias de otras librerías del proyecto.

<a name="project"></a>

### Acerca del Proyecto WUI/JS

WUI/JS Data Lib es parte del proyecto WUI/JS, que consta actualmente de 8 repositorios:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	Librería Principal UI.<br><br>
-	[https://github.com/wui-js/wuijs-data-lib](https://github.com/wui-js/wuijs-data-lib)<br>
	Librería de Datos de referencia.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	Librería de Complementos UI.<br><br>
-	[https://github.com/wui-js/wuijs-views-lib](https://github.com/wui-js/wuijs-views-lib)<br>
	Librería de Vistas UI.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	Librería Puente UI entre entornos web y motores de renderizado web nativos.<br><br>
-	[https://github.com/wui-js/wuijs-lab-lib](https://github.com/wui-js/wuijs-lab-lib)<br>
	Librería de componentes UI experimentales.<br><br>
-	[https://github.com/wui-js/wuijs-specs-lib](https://github.com/wui-js/wuijs-specs-lib)<br>
	Librería de Especificaciones universales de código y contenido.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repositorio con demos y ejemplos de uso de las librerías del proyecto.<br><br>

<a name="classtable"></a>

### Tabla de Clases

| Nombre Clase                                                                                                          | Versión | Descripción |
| --------------------------------------------------------------------------------------------------------------------- |:-------:| ----------- |
| [WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-es.md) | `0.1`   | Códigos de países ISO 3166-1 (alfa-2, alfa-3 y numérico). |
| [WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-es.md)    | `0.1`   | Zonas horarias IANA (tzdb) con países, coordenadas y desfases UTC. |

<a name="dirmap"></a>

### Mapa de Directorios

```bash
wuijs-data-lib/
├── docs/
│   └── classes/
└── src/
    └── wui-js/
        └── data/
```

| Ruta                                                                                        | Descripción |
| ------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/)                            | Documentación. |
| [docs/classes](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/classes/)            | Documentación de cada clase. |
| [src](https://github.com/wui-js/wuijs-data-lib/tree/main/src/)                              | Fuentes principales de la última versión. |
| [src/wui-js](https://github.com/wui-js/wuijs-data-lib/tree/main/src/wui-js)                 | Directorio del proyecto WUI/JS. |
| [src/wui-js/data](https://github.com/wui-js/wuijs-data-lib/tree/main/src/wui-js/data/)      | Librería WUI/JS Data. |

<a name="install"></a>

## Instalación

**Opción 1: Instalar desde fuente**

Para instalar la biblioteca WUI/JS Data, debe ser clonada desde el repositorio oficial en GitHub (`wui-js/wuijs-data-lib`).
Suponiendo que el proyecto donde se implementará tenga un directorio de código fuente `./src` y, dentro de este, un directorio de librerías `./src/libraries`, debe escribir lo siguiente en la terminal:

```bash
git clone --branch v0.1.0 https://git@github.com/wui-js/wuijs-data-lib.git
cp -r ./wuijs-data-lib/src/wui-js/ ../src/libraries/
```

Opcionalmente puede ser descargada desde los mismos repositorios en formato ZIP.

```bash
wget https://github.com/wui-js/wuijs-data-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-data-lib-main/src/wui-js/ ../src/libraries/
```

> [!TIP]
> Es recomendable que el directorio `/data` se aloje en el mismo directorio que la biblioteca principal `/main`.

**Opción 2: Instalar vía npm**

Para instalar la librería WUI/JS Data mediante npm:

```bash
npm i @wui-js/data
```

Los recursos quedarán disponibles en la ruta `./node_modules/@wui-js/data`.

> [!IMPORTANT]
> Cada clase carga su archivo JSON desde el subdirectorio `sources/` del directorio de su script, por lo que ambos deben publicarse juntos y la página debe servirse por HTTP. `sources/` guarda también las actualizaciones anteriores de cada fuente, que se cargan con la propiedad `source`.

<a name="classes"></a>

## Clases

La documentación de cada clase está en un documento propio, en el directorio [`docs/classes/`](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/classes):

*   <a name="wuidata-countries"></a>[WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-es.md)
*   <a name="wuidata-timezone"></a>[WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-es.md)
