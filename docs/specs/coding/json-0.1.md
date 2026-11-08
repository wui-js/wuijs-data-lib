# JSON

General rules for JSON files written by hand: settings, registries, translations (i18n) and data sources. Files whose
format is defined by a third-party tool (package manifests, editor or sandbox settings, asset catalogs) follow these
rules only where that tool does not rewrite them.

## 1. Indentation

Indentation uses one tab `\t` per nesting level.

---

## 2. Line breaks and spacing

- Each key of an object and each element of an array that contains objects or arrays goes on its own line.
- An array of scalar values may stay on one line when it fits in a readable width (`"langs": ["es", "en"]`).
- An object whose members are all scalars may stay on one line when it represents a single value with its parts
  (`"local": { "md": "docs/readme-en.md" }`), with one space inside the braces.
- No space before `:` and one space after it. No space before `,`.
- Empty object `{}` and empty array `[]`, without spaces inside.
- No blank lines.

```json
{
	"general": {
		"langs": ["es", "en"],
		"paths": {
			"local": { "md": "docs/readme-en.md" },
			"remote": { "md": "main/docs/readme-en.md" }
		},
		"options": {}
	}
}
```

---

## 3. Keys

- Keys in English and in camelCase. A single lowercase word is valid camelCase (`"filter"`, `"selectall"`).
- A key that reproduces an external identifier (an HTML `id`, a file name, a route, a language code) keeps the form of
  that identifier (`"totp-activate"`, `"es"`).
- Keys of the same object are unique.

---

## 4. Values

- Strings in double quotes, as JSON requires; no trailing commas.
- Booleans and numbers are written as JSON values, not as strings (`true`, `400`, not `"true"`, `"400"`).
- `null` marks an intentionally empty value; an absent key means "use the default".

---

## 5. Order

- Members follow a meaningful order, the same in every object of the same kind: identity first (`id`, `name`, `title`),
  then the content, then the nested collections.
- Translation files (i18n) keep the same keys, in the same order, in every language of the same set.

---

## Verification

Empty output means no violations.

```bash
# §1 — indentation with spaces
grep -rnE '^ +[]"{}[]' {scope} --include="*.json"

# §2 — space before a colon, empty containers with spaces, blank lines
grep -rnE "\" +:|\{ +\}|\[ +\]|^[[:space:]]*$" {scope} --include="*.json"

# §3 — snake_case or PascalCase keys (review: external identifiers keep their form)
grep -rnoE "\"([a-z]+_[a-z_]+|[A-Z][A-Za-z]+)\" *:" {scope} --include="*.json"

# §4 — invalid JSON (trailing commas, single quotes, comments)
find {scope} -name "*.json" -exec sh -c 'python3 -m json.tool "$1" > /dev/null 2>&1 || echo "$1"' _ {} \;

# §5 — translation files of the same set with different keys
# (compare the sorted key paths of each language file of a set; any difference is a violation)
```

## Manual review

- §2: one-line objects and arrays are limited to the cases the rule allows.
- §4: booleans and numbers are not quoted.
- §5: the order of members is consistent among objects of the same kind and among languages.
