// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { countValidProducts } from '../index';

describe('countValidProducts', () => {
    test('devrait retourner 2 pour l\'exemple de base avec quantités mixtes', () => {
        expect(countValidProducts([
            { name: "Stylo", quantity: 3 },
            { name: "Cahier", quantity: 0 },
            { name: "Crayon", quantity: 5 }
        ])).toBe(2);
    });

    test('devrait retourner 0 pour un tableau vide', () => {
        expect(countValidProducts([])).toBe(0);
    });

    test('devrait retourner 0 quand tous les produits ont une quantité nulle', () => {
        expect(countValidProducts([
            { name: "Produit A", quantity: 0 },
            { name: "Produit B", quantity: 0 },
            { name: "Produit C", quantity: 0 }
        ])).toBe(0);
    });

    test('devrait retourner 0 quand tous les produits ont des quantités négatives', () => {
        expect(countValidProducts([
            { name: "Produit A", quantity: -1 },
            { name: "Produit B", quantity: -5 },
            { name: "Produit C", quantity: -10 }
        ])).toBe(0);
    });

    test('devrait compter tous les produits quand tous ont des quantités positives', () => {
        expect(countValidProducts([
            { name: "Produit A", quantity: 1 },
            { name: "Produit B", quantity: 10 },
            { name: "Produit C", quantity: 100 }
        ])).toBe(3);
    });

    test('devrait retourner 1 pour un seul produit valide', () => {
        expect(countValidProducts([
            { name: "Unique", quantity: 1 }
        ])).toBe(1);
    });

    test('devrait retourner 0 pour un seul produit invalide avec quantité nulle', () => {
        expect(countValidProducts([
            { name: "Unique", quantity: 0 }
        ])).toBe(0);
    });

    test('devrait gérer un mélange de quantités positives, nulles et négatives', () => {
        expect(countValidProducts([
            { name: "Produit A", quantity: 5 },
            { name: "Produit B", quantity: 0 },
            { name: "Produit C", quantity: -3 },
            { name: "Produit D", quantity: 1 },
            { name: "Produit E", quantity: 0 },
            { name: "Produit F", quantity: 20 }
        ])).toBe(3);
    });

    test('devrait gérer de grandes quantités', () => {
        expect(countValidProducts([
            { name: "Produit A", quantity: 999999 },
            { name: "Produit B", quantity: 1000000 }
        ])).toBe(2);
    });

    test('devrait compter exactement quantité > 0, pas >= 0', () => {
        expect(countValidProducts([
            { name: "Zero", quantity: 0 },
            { name: "One", quantity: 1 }
        ])).toBe(1);
    });
});
