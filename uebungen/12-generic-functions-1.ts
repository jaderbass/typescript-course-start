// 12-generic-functions-1.ts
/**
 * Aufgaben:
 * 1) Implementiere `first(items)`
 * Ziel:
 * - Die Funktion soll das erste Element eines Arrays zurückgeben
 * - Sie soll für number[], string[] usw. funktionieren
 *
 * 2) optional
 * Implementiere `mapTo<T, R>(items: T[], fn: (x: T) => R): R[]`
 * Ziel:
 * - Die Funktion soll ein Array eines bestimmten Typs entgegennehmen
 * - Der Rückgabewert soll ein Array mit den konvertierten Werten des entgegengenommenden Arrays sein
 * - Die Ausgangswerte sollen also in einen anderen Datentyp konvertiert und als Array wieder zurückgeliefert werden
 * - Beispiel:
 * - Eingabe = [number, number], Ausgabe = [string, string]
 */

export function first(items: unknown) {
  // TODO
  return undefined;
}

export function mapTo<T, R>(items: T[], fn: (x: T) => R): R[] {
  // TODO
  return [];
}

console.log(first([10, 20]) === 10);
console.log(mapTo([1, 2], n => `${n}`).join(",") === "1,2");
