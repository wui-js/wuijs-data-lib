[English](wuidata-countries-en.md) | [Español](wuidata-countries-es.md)

[wuijs-data-lib](../../README-es.md)

# WUIDataCountries

Versión: `0.1`

Conjunto de datos de códigos de países ISO 3166-1 (alfa-2, alfa-3 y numérico), cargado bajo demanda desde un archivo JSON.

## Fuentes

| Tipo | Archivo |
|:----:| ------- |
| JS   | [src/wui-js/data/countries/wuidata-countries-0.1.js](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/countries/wuidata-countries-0.1.js) |
| JSON | [src/wui-js/data/countries/sources/iso3166-1-2026.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/countries/sources/iso3166-1-2026.json) |

## Constructor

| Tipo             | Descripción |
| ---------------- | ----------- |
| WUIDataCountries | `WUIDataCountries([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

El constructor inicia la carga asíncrona del archivo `{source}.json`, ubicado en el subdirectorio `sources/` del directorio del script de la clase. Mientras la carga no termina, `list()` retorna un arreglo vacío e `info()` retorna `null`.

## Propiedades

| Propiedad | Tipo             | Valor predeterminado | Descripción |
| --------- | ---------------- | -------------------- | ----------- |
| source    | `string`         | `"iso3166-1-2026"`   | (get/set)<br><br>Nombre del archivo JSON de datos, sin extensión. Se lee solo en el constructor. |
| onLoad    | `function\|null` | `null`               | (get/set)<br><br>Función que se ejecuta al terminar la carga. Recibe el arreglo de países como parámetro (vacío si la carga falla). |

## Métodos de la Instancia

| Método  | Tipo retorno     | Descripción |
| ------- | ---------------- | ----------- |
| list    | `array`          | `list()`<br><br>Retorna el arreglo de códigos alfa-2 de todos los países. |
| info    | `object\|null`   | `info(code)`<br><br>Parámetros:<br>**• code:** `string`, código alfa-2, alfa-3 o numérico, sin distinguir mayúsculas.<br><br>Retorna el objeto del país, o `null` si no existe. |
| destroy | `void`           | `destroy()`<br><br>Libera los datos cargados y las propiedades del objeto. |

## Formato de Datos

Cada elemento del arreglo es un objeto con los campos:

| Campo   | Tipo     | Descripción |
| ------- | -------- | ----------- |
| alpha2  | `string` | Código alfa-2 (por ejemplo, `"CL"`). |
| alpha3  | `string` | Código alfa-3 (por ejemplo, `"CHL"`). |
| numeric | `string` | Código numérico de 3 dígitos, con ceros a la izquierda (por ejemplo, `"152"`). |

## Implementación

Cabecera HTML:

```html
<script type="text/javascript" src="./libraries/wui-js/data/countries/wuidata-countries-0.1.js"></script>
```

Código JS:

```js
const init = () => {
	const countries = new WUIDataCountries({
		onLoad: () => {
			console.log(countries.list().length);
			console.log(countries.info("CHL"));
		}
	});
};

window.addEventListener("DOMContentLoaded", init);
```

Salida:

```console
249
{alpha2: "CL", alpha3: "CHL", numeric: "152"}
```

> [!NOTE]
> El script debe cargarse con una etiqueta `<script>` clásica (no `type="module"`), ya que la clase obtiene la ruta del archivo JSON desde `document.currentScript`.
