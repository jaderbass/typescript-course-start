# TypeScript for Beginners

## Install Software

```bash
npm
npm install -g typescript
npm install -g lite-server
```

## TypeScript VSCode

Documentation: https://code.visualstudio.com/docs/typescript/typescript-compiling

## Folders Setup

- index.html
- script.ts
- package.json
- tsconfig.json

```bash
npm init
npm install
tsc -init
```

## `tsconfig` anpassen

Für den Kurs die minimalen Einstellungen für die `tsconfig.json` übernehmen:

```json
{
  "compilerOptions": {
    "module": "es2020",
    "target": "es2020",
    "strict": true
  }
}
```
