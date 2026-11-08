[English](wuidata-timezone-en.md) | [Español](wuidata-timezone-es.md)

[wuijs-data-lib](../../README-en.md)

# WUIDataTimezone

Version: `0.1`

IANA time zones dataset (tzdb) with countries, coordinates and UTC offsets, loaded on demand from a JSON file.

## Sources

| Type | File |
|:----:| ---- |
| JS   | [src/wui-js/data/timezone/wuidata-timezone-0.1.js](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/wuidata-timezone-0.1.js) |
| JSON | [src/wui-js/data/timezone/sources/tzdb-2026e.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/sources/tzdb-2026e.json) (default) |
| JSON | [src/wui-js/data/timezone/sources/tzdb-2026b.json](https://github.com/wui-js/wuijs-data-lib/blob/main/src/wui-js/data/timezone/sources/tzdb-2026b.json) (history) |

## Constructor

| Type            | Description |
| --------------- | ----------- |
| WUIDataTimezone | `WUIDataTimezone([properties])`<br><br>Parameters:<br>**• properties:** `object` *optional* |

The constructor starts the asynchronous load of the `{source}.json` file, located in the `sources/` subdirectory of the class script directory. Until the load finishes, `list()` returns an empty array and `info()` returns `null`.

## Properties

| Property  | Type             | Default value  | Description |
| --------- | ---------------- | -------------- | ----------- |
| source    | `string`         | `"tzdb-2026e"` | (get/set)<br><br>Name of the JSON data file, without extension. It is read only in the constructor. |
| onLoad    | `function\|null` | `null`         | (get/set)<br><br>Function executed when the load finishes. It receives the array of time zones as parameter (empty if the load fails). |

## Instance Methods

| Method  | Return type    | Description |
| ------- | -------------- | ----------- |
| list    | `array`        | `list()`<br><br>Returns the array of names of all time zones. |
| info    | `object\|null` | `info(name)`<br><br>Parameters:<br>**• name:** `string`, IANA time zone name (for example, `"America/Santiago"`), case-sensitive.<br><br>Returns the time zone object, or `null` if it does not exist. |
| destroy | `void`         | `destroy()`<br><br>Releases the loaded data and the object properties. |

## Data Format

Each element of the array is an object with the fields:

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| name        | `string`  | IANA time zone name. |
| countries   | `array`   | ISO 3166-1 alpha-2 codes of the countries that use the zone. |
| coordinates | `string`  | Latitude and longitude of the principal city in ISO 6709 format (for example, `"-3327-07040"`). |
| comment     | `string`  | tzdb comment about the region covered by the zone (may be empty). |
| utcOffset   | `number`  | Lowest UTC offset of the year following the source release, in hours (may be fractional, for example, `-3.5`). |
| dstOffset   | `number`  | Highest UTC offset of that same year, in hours (equal to `utcOffset` if there is no clock change). |
| hasDst      | `boolean` | Indicates whether the zone changes its clock in that year (`utcOffset` different from `dstOffset`). |

## Implementation

HTML head:

```html
<script type="text/javascript" src="./libraries/wui-js/data/timezone/wuidata-timezone-0.1.js"></script>
```

JS code:

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

Output:

```console
312
{name: "Africa/Ceuta", countries: ["ES"], coordinates: "+3553-00519", comment: "Ceuta, Melilla", utcOffset: 1, dstOffset: 2, hasDst: true}
```

> [!NOTE]
> The script must be loaded with a classic `<script>` tag (not `type="module"`), since the class gets the JSON file path from `document.currentScript`.
