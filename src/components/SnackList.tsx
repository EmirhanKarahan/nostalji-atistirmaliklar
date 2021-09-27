import { useEffect } from "react";
import { fetchSnacks } from "../features/snacksSlice";
import selectSnacks from "../selectors/snacks";
import { useAppDispatch, useAppSelector } from "../store";
import SnackCard from "./SnackCard";

function SnackList() {
  const snacksState = useAppSelector((state) => state.snacks);
  const filtersState = useAppSelector((state) => state.filters);
  const snacks = selectSnacks(snacksState.data, filtersState); // eslint-disable-line
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSnacks());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="snack-list">
      <div className="content-container">
        <div className="snack-list__content">
          {snacksState.data?.map((snack) => {
            return <SnackCard key={snack.name} snack={snack} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default SnackList;
