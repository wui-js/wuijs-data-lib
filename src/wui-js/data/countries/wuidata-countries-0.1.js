/*
 * @file wuidata-countries-0.1.js
 * @class WUIDataCountries
 * @version 0.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIDataCountries {

	static version = "0.1";
	static #defaults = {
		source: "iso3166-1-2026",
		onLoad: null
	};
	static #baseURL = (() => {
		const script = document.currentScript;
		return script ? script.src.replace(/\/[^/]+$/, "/") : "";
	})();

	#properties = {};
	#data = [];

	constructor(properties = {}) {
		const defaults = structuredClone(WUIDataCountries.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#load();
	}

	get source() {
		return this.#properties.source;
	}

	get onLoad() {
		return this.#properties.onLoad;
	}

	set source(value) {
		if (typeof (value) === "string") {
			this.#properties.source = value;
		}
	}

	set onLoad(value) {
		if (typeof (value) === "function" || value === null) {
			this.#properties.onLoad = value;
		}
	}

	#load() {
		const url = `${WUIDataCountries.#baseURL}sources/${this.source}.json`;
		const xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		xhr.overrideMimeType("application/json");
		xhr.onload = () => {
			if (xhr.status === 200 || xhr.status === 0) {
				if (Array.isArray(xhr.response)) {
					this.#data = xhr.response;
				} else {
					console.error(`WUIJS - WUIDataCountries: unexpected format in ${url}`);
				}
			} else {
				console.error(`WUIJS - WUIDataCountries: ${url} could not be loaded`);
			}
			if (typeof (this.onLoad) === "function") {
				this.onLoad(this.#data);
			}
		};
		xhr.open("GET", url, true);
		xhr.send();
	}

	list() {
		return this.#data.map(country => country.alpha2);
	}

	info(code) {
		if (typeof (code) !== "string") {
			return null;
		}
		const value = code.toUpperCase();
		return this.#data.find(country => country.alpha2 === value || country.alpha3 === value || country.numeric === value) ?? null;
	}

	destroy() {
		this.#data = [];
		Object.keys(this.#properties).forEach(key => {
			delete this.#properties[key];
		});
	}
}
