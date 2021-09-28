import { FilterState } from "../features/filtersSlice";
import { Snack } from "../features/snacksSlice";

function selectSnacks(
  snacks: Snack[] | null,
  { text, category }: FilterState
): Snack[] | null {
  if (!snacks) return null;

  return snacks
    .filter((snack) => {
      let filterCategory = category.toLowerCase();
      return filterCategory
        ? snack.categoryName.toLowerCase() === filterCategory
        : true;
    })
    .filter((snack) => {
      let filterText = text.toLowerCase();
      return (
        snack.name.toLowerCase().includes(filterText) ||
        snack.categoryName.toLowerCase().includes(filterText)
      );
    });
}

export default selectSnacks;
