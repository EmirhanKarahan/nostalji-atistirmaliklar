import { Snack } from "../features/snacksSlice";

interface SnackCardProps {
  snack: Snack;
}

function SnackCard({ snack }: SnackCardProps) {
  return (
    <div className="snack-card">
      <div className="snack-card__category">
        {snack.category}{" "}
        <img width="30px" src={`img/${snack.category}.svg`} alt="" />
      </div>
      <img className="snack-card__img" src={`img/chat-kola.webp`} alt="" />
      <div className="snack-card__title">{snack.name}</div>
      <a className="snack-card__button" href="/">
        Hala satışta mı?
      </a>
    </div>
  );
}

export default SnackCard;
