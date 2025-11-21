# Notions avancées - TP1 - Compter les produits avec une quantité valide

## Consignes

On veut gérer un inventaire simple : une liste de produits.
Chaque produit doit avoir :

- un nom `name`
- une quantité disponible `quantity`

Écris une fonction TypeScript qui compte le nombre de produits valides présent dans un tableau passé en paramètre.
Un produit est considéré comme valide lorsque sa quantité est strictement supérieure à 0.

**Signature de la fonction :**

```ts
function countValidProducts(products: Product[]): number
```

## Exemples

```ts
console.log(countValidProducts([
  { name: "Stylo", quantity: 3 },
  { name: "Cahier", quantity: 0 },
  { name: "Crayon", quantity: 5 }
])); // 2

console.log(countValidProducts([])); // 0
```
