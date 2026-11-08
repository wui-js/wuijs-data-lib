[English](wuidata-countries-en.md) | [Español](wuidata-countries-es.md)

[wuijs-data-lib](../../README-en.md)

# WUIDataCountries

Version: `0.1`

ISO 3166-1 country codes dataset (alpha-2, alpha-3 and numeric), loaded on demand from a JSON file.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/data/countries/wuidata-countries-0.1.js](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/countries/wuidata-countries-0.1.js) |
| JSON | [src/wui-js/data/countries/sources/iso3166-1-2026.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/countries/sources/iso3166-1-2026.json) |

## Constructor

| Type             | Description |
| ---------------- | ----------- |
| WUIDataCountries | `WUIDataCountries([properties])`<br><br>Parameters:<br>**• properties:** `object` *optional* |

The constructor starts the asynchronous load of the `{source}.json` file, located in the `sources/` subdirectory of the class script directory. Until the load finishes, `list()` returns an empty array and `info()` returns `null`.

## Properties

| Property  | Type             | Default value        | Description |
| --------- | ---------------- | -------------------- | ----------- |
| source    | `string`         | `"iso3166-1-2026"`   | (get/set)<br><br>Name of the JSON data file, without extension. It is read only in the constructor. |
| onLoad    | `function\|null` | `null`               | (get/set)<br><br>Function executed when the load finishes. It receives the array of countries as parameter (empty if the load fails). |

## Instance Methods

| Method  | Return type      | Description |
| ------- | ---------------- | ----------- |
| list    | `array`          | `list()`<br><br>Returns the array of alpha-2 codes of all countries. |
| info    | `object\|null`   | `info(code)`<br><br>Parameters:<br>**• code:** `string`, alpha-2, alpha-3 or numeric code, case-insensitive.<br><br>Returns the country object, or `null` if it does not exist. |
| destroy | `void`           | `destroy()`<br><br>Releases the loaded data and the object properties. |

## Data Format

Each element of the array is an object with the fields:

| Field   | Type     | Description |
| ------- | -------- | ----------- |
| alpha2  | `string` | Alpha-2 code (for example, `"CL"`). |
| alpha3  | `string` | Alpha-3 code (for example, `"CHL"`). |
| numeric | `string` | 3-digit numeric code, zero-padded (for example, `"152"`). |

## Implementation

HTML head:

```html
<script type="text/javascript" src="./libraries/wui-js/data/countries/wuidata-countries-0.1.js"></script>
```

JS code:

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

Output:

```console
249
{alpha2: "CL", alpha3: "CHL", numeric: "152"}
```

> [!NOTE]
> The script must be loaded with a classic `<script>` tag (not `type="module"`), since the class gets the JSON file path from `document.currentScript`.
