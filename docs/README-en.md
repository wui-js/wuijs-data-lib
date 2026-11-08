[English](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/README-es.md)
---

# wuijs-data-lib

|                      | |
| -------------------- | --- |
| **Library name**     | `wuijs-data-lib` |
| **Library version**  | `0.1.0` ([Change Log](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/CHANGELOG-en.md)) |
| **NPM package**      | `@wui-js/data` |
| **Document version** | `0.1.0.20261107.0` |
| **License**          | `Apache License 2.0` |
| **Author**           | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repository**       | [https://github.com/wui-js/wuijs-data-lib](https://github.com/wui-js/wuijs-data-lib) |
| **Documentation**    | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Website**          | [https://wuijs.dev](https://wuijs.dev) |

## Index

*   [Overview](#overview)
	*   [About the WUI/JS Project](#project)
	*   [Classes Table](#classtable)
	*   [Directory Map](#dirmap)
*   [Install](#install)
*   [Classes](#classes)
	*   [WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-en.md)
	*   [WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-en.md)

<a name="overview"></a>

## Overview

WUI/JS Data Lib is an open-source JavaScript library that provides reference datasets (countries, time zones) loaded on demand from versioned JSON files, with no dependencies on the other project libraries.

<a name="project"></a>

### About the WUI/JS Project

WUI/JS Data Lib is part of the WUI/JS project, which currently consists of 8 repositories:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	UI Main library.<br><br>
-	[https://github.com/wui-js/wuijs-data-lib](https://github.com/wui-js/wuijs-data-lib)<br>
	Reference Data library.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	UI Plugins library.<br><br>
-	[https://github.com/wui-js/wuijs-views-lib](https://github.com/wui-js/wuijs-views-lib)<br>
	UI Views library.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	UI Bridge library between web environments and native web rendering engines.<br><br>
-	[https://github.com/wui-js/wuijs-lab-lib](https://github.com/wui-js/wuijs-lab-lib)<br>
	Experimental UI components library.<br><br>
-	[https://github.com/wui-js/wuijs-specs-lib](https://github.com/wui-js/wuijs-specs-lib)<br>
	Universal code and content Specifications library.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repository with demos and usage examples for the project libraries.<br><br>

<a name="classtable"></a>

### Classes Table

| Class Name                                                                                                            | Version | Description |
| --------------------------------------------------------------------------------------------------------------------- |:-------:| ----------- |
| [WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-en.md) | `0.1`   | ISO 3166-1 country codes (alpha-2, alpha-3 and numeric). |
| [WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-en.md)    | `0.1`   | IANA time zones (tzdb) with countries, coordinates and UTC offsets. |

<a name="dirmap"></a>

### Directory Map

```bash
wuijs-data-lib/
├── docs/
│   └── classes/
└── src/
    └── wui-js/
        └── data/
```

| Path                                                                                        | Description |
| ------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/)                            | Documentation. |
| [docs/classes](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/classes/)            | Documentation of each class. |
| [src](https://github.com/wui-js/wuijs-data-lib/tree/main/src/)                              | Main sources of the latest version. |
| [src/wui-js](https://github.com/wui-js/wuijs-data-lib/tree/main/src/wui-js)                 | WUI/JS Project directory. |
| [src/wui-js/data](https://github.com/wui-js/wuijs-data-lib/tree/main/src/wui-js/data/)      | WUI/JS Data library. |

<a name="install"></a>

## Install

**Option 1: Install from source**

To install the WUI/JS Data library, it must be cloned from the official GitHub repository (`wui-js/wuijs-data-lib`).
Assuming the project where it will be deployed has a source directory: `./src` and within that, a `./src/libraries` library directory, you must type the following in the terminal:

```bash
git clone --branch v0.1.0 https://git@github.com/wui-js/wuijs-data-lib.git
cp -r ./wuijs-data-lib/src/wui-js/ ../src/libraries/
```

Optionally, it can be downloaded from the same repository in ZIP format.

```bash
wget https://github.com/wui-js/wuijs-data-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-data-lib-main/src/wui-js/ ../src/libraries/
```

> [!TIP]
> It is recommended that the `/data` directory be located in the same directory as the main library `/main`.

**Option 2: Install via npm**

To install the WUI/JS Data library via npm:

```bash
npm i @wui-js/data
```

The resources will be available in the `./node_modules/@wui-js/data` path.

> [!IMPORTANT]
> Each class loads its JSON file from the `sources/` subdirectory of its script directory, so both must be published together and the page must be served over HTTP. `sources/` also keeps the previous updates of each source, which are loaded with the `source` property.

<a name="classes"></a>

## Classes

The documentation of each class is in its own document, in the [`docs/classes/`](https://github.com/wui-js/wuijs-data-lib/tree/main/docs/classes) directory:

*   <a name="wuidata-countries"></a>[WUIDataCountries](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/countries/wuidata-countries-en.md)
*   <a name="wuidata-timezone"></a>[WUIDataTimezone](https://github.com/wui-js/wuijs-data-lib/blob/main/docs/classes/timezone/wuidata-timezone-en.md)
