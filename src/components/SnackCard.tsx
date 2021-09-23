import { Snack } from "../features/snacksSlice";

interface SnackCardProps {
  snack: Snack;
}

const googleSearch = (snackName: string) => {
  window.open(`https://www.google.com/search?q=${snackName}&tbm=shop`, "_blank,noopener,noreferrer");
};

function SnackCard({ snack }: SnackCardProps) {
  return (
    <div className="snack-card">
      <div className="snack-card__category">
        <span>{snack.categoryName}</span>
        <img width="30px" src={`img/${snack.categoryName}.svg`} alt="" />
      </div>
      <img className="snack-card__img" src={snack.imageUrl} alt="" />
      <div className="snack-card__title">{snack.name}</div>
      <button
        className="snack-card__button"
        onClick={() => googleSearch(snack.name)}
      >
        Hala satışta mı?
      </button>
    </div>
  );
}

export default SnackCard;
