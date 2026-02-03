// 13-generic-constraints-1.ts
/**
 * Aufgabe:
 * Implementiere `pluck`.
 *
 * Ziel:
 * - Die Funktion soll einen Wert aus einem Objekt zurückgeben
 * - Der Key soll als String übergeben werden
 *
 * Hinweis:
 * - TypeScript meckert aktuell – finde heraus, warum
 * - Passe die Typen so an, dass es sicher wird
 */

export function pluck(obj: unknown, key: string) {
  // TODO
  return undefined;
}

// Tests
pluck({ a: 1, b: "x" }, "b");
pluck({ a: 1 }, "a");
// pluck({ a: 1 }, "c"); // soll ein TS-Fehler sein
