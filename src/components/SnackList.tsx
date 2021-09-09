import { useEffect } from "react";
import { fetchSnacks } from "../features/snacksSlice";
import { useAppDispatch, useAppSelector } from "../store";
import SnackCard from "./SnackCard";

function SnackList() {
  const snacks = useAppSelector((state) => state.snacks);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSnacks());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main className="snack-list">
      <div className="content-container">
        <div className="snack-list__content">
          {snacks.data?.map((snack) => {
            return <SnackCard key={snack.name} snack={snack} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default SnackList;
