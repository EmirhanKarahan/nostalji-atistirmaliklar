import React from "react";
import { setFilterCategory, setFilterText } from "../features/filtersSlice";
import { useAppDispatch } from "../store";

export default function SnackListFilters() {
  const dispatch = useAppDispatch();

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterText(e.target.value));
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilterCategory(e.target.value));
  }

  return (
    <div className="snack-list-filters">
      <div className="content-container">

        <div className="snack-list-filters__input-container">
          <span>Text Search</span>
          <input
            type="text"
            className="snack-list-filters__text-input"
            onChange={onTextChange}
          />
        </div>

        <div className="snack-list-filters__input-container">
          <span>Categories</span>
          <select className="snack-list-filters__select" onChange={onSelectChange}>
            <option value="">All 😋</option>
            <option value="other">Other</option>
            <option value="cake">Cake</option>
            <option value="beverage">Beverage</option>
            <option value="gum">Gum</option>
            <option value="chocolate">Chocolate</option>
            <option value="chips">Chips</option>
            <option value="biscuit">Biscuit</option>
          </select>
        </div>

      </div>
    </div>
  );
}
