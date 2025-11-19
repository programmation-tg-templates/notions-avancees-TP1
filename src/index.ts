// Écrivez votre code dans ce fichier.

/**
 * Counts the number of valid products in an inventory.
 * A product is valid if its quantity is strictly greater than 0.
 *
 * @param products - Array of products with name and quantity
 * @returns The count of products with quantity > 0
 */
export function countValidProducts(products: { name: string; quantity: number }[]): number {
  return products.filter(product => product.quantity > 0).length;
}
