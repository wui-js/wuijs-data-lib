[English](wuidata-timezone-en.md) | [Español](wuidata-timezone-es.md)

[wuijs-data-lib](../../README-es.md)

# WUIDataTimezone

Versión: `0.1`

Conjunto de datos de zonas horarias IANA (tzdb) con países, coordenadas y desfases UTC, cargado bajo demanda desde un archivo JSON.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/data/timezone/wuidata-timezone-0.1.js](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/wuidata-timezone-0.1.js) |
| JSON | [src/wui-js/data/timezone/sources/tzdb-2026e.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/sources/tzdb-2026e.json) (por defecto) |
| JSON | [src/wui-js/data/timezone/sources/tzdb-2026b.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/sources/tzdb-2026b.json) (historial) |

## Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUIDataTimezone | `WUIDataTimezone([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

El constructor inicia la carga asíncrona del archivo `{source}.json`, ubicado en el subdirectorio `sources/` del directorio del script de la clase. Mientras la carga no termina, `list()` retorna un arreglo vacío e `info()` retorna `null`.

## Propiedades

| Propiedad | Tipo             | Valor predeterminado | Descripción |
| --------- | ---------------- | -------------------- | ----------- |
| source    | `string`         | `"tzdb-2026e"`       | (get/set)<br><br>Nombre del archivo JSON de datos, sin extensión. Se lee solo en el constructor. |
| onLoad    | `function\|null` | `null`               | (get/set)<br><br>Función que se ejecuta al terminar la carga. Recibe el arreglo de zonas horarias como parámetro (vacío si la carga falla). |

## Métodos de la Instancia

| Método  | Tipo retorno   | Descripción |
| ------- | -------------- | ----------- |
| list    | `array`        | `list()`<br><br>Retorna el arreglo de nombres de todas las zonas horarias. |
| info    | `object\|null` | `info(name)`<br><br>Parámetros:<br>**• name:** `string`, nombre IANA de la zona horaria (por ejemplo, `"America/Santiago"`), distinguiendo mayúsculas.<br><br>Retorna el objeto de la zona horaria, o `null` si no existe. |
| destroy | `void`         | `destroy()`<br><br>Libera los datos cargados y las propiedades del objeto. |

## Formato de Datos

Cada elemento del arreglo es un objeto con los campos:

| Campo       | Tipo      | Descripción |
| ----------- | --------- | ----------- |
| name        | `string`  | Nombre IANA de la zona horaria. |
| countries   | `array`   | Códigos alfa-2 ISO 3166-1 de los países que usan la zona. |
| coordinates | `string`  | Latitud y longitud de la ciudad principal en formato ISO 6709 (por ejemplo, `"-3327-07040"`). |
| comment     | `string`  | Comentario de tzdb sobre la región que cubre la zona (puede ser vacío). |
| utcOffset   | `number`  | Desfase UTC menor del año siguiente a la publicación de la fuente, en horas (puede ser fraccionario, por ejemplo, `-3.5`). |
| dstOffset   | `number`  | Desfase UTC mayor de ese mismo año, en horas (igual a `utcOffset` si no hay cambio de hora). |
| hasDst      | `boolean` | Indica si la zona cambia de hora en ese año (`utcOffset` distinto de `dstOffset`). |

## Implementación

Cabecera HTML:

```html
<script type="text/javascript" src="./libraries/wui-js/data/timezone/wuidata-timezone-0.1.js"></script>
```

Código JS:

```js
const init = () => {
	const timezone = new WUIDataTimezone({
		onLoad: () => {
			console.log(timezone.list().length);
			console.log(timezone.info("Africa/Ceuta"));
		}
	});
};

window.addEventListener("DOMContentLoaded", init);
```

Salida:

```console
312
{name: "Africa/Ceuta", countries: ["ES"], coordinates: "+3553-00519", comment: "Ceuta, Melilla", utcOffset: 1, dstOffset: 2, hasDst: true}
```

> [!NOTE]
> El script debe cargarse con una etiqueta `<script>` clásica (no `type="module"`), ya que la clase obtiene la ruta del archivo JSON desde `document.currentScript`.
