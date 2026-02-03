// 10-type-guards-1.ts
/**
 * Aufgaben:
 * 1) Implementiere User-defined Type Guard `isStringArray(value)`
 * Prüfe, ob `value` ein Array aus Strings ist.
 *
 * Anforderungen:
 * - `value` ist vom Typ `unknown`
 * - Rückgabewert soll true/false sein
 * - Verwende keine Array-Methoden wie `every()`
 *
 * 2) Implementiere `joinIfStrings(value)`:
 *    - wenn string[] -> joined mit ","
 *    - sonst -> "invalid"
 */

export function isStringArray(value: unknown) {
  // TODO
  return false;
}

export function joinIfStrings(value: unknown): string {
  // TODO
  return "invalid";
}

console.log(joinIfStrings(["a", "b"]) === "a,b");
console.log(joinIfStrings([1, 2]) === "invalid");
