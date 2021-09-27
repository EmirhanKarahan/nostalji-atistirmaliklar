import { FilterState } from "../features/filtersSlice";
import { Snack } from "../features/snacksSlice";

function selectSnacks(
  snacks: Snack[] | null,
  { text, sortBy }: FilterState
): Snack[] | null {
  if (snacks) {
    return snacks
      .filter((snack) => {
        let filterText = text.toLowerCase();
        const textMatch =
          snack.name.toLowerCase().includes(filterText) ||
          snack.categoryName.toLowerCase().includes(filterText);
        return textMatch;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.name < b.name ? 1 : -1;
        } else if (sortBy === "categoryName") {
          return a.categoryName < b.categoryName ? 1 : -1;
        }
        return -1;
      });
  }
  return null;
}

export default selectSnacks;
