import Character from "./types/character";

export function checkSale(char: Character, numbers: number[]) {
  let inside: boolean = false;
  for (let i = 0; i < numbers.length; i++) {
    if (char.id === numbers[i]) {
      inside = true;
    }
  }
  if (!inside) {
    char.price = 1499;
    char.sale = false;
  } else {
    char.price = 499;
    char.sale = true;
  }
}

export default checkSale;
