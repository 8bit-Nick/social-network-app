import classes from "./Favorite.module.css";

type FavoritePropsType = {
  id: number;
  user: string;
};

const Favorite: React.FC<FavoritePropsType> = (props) => {
  return (
    <div className={classes.item} key={props.id}>
      {props.user}
    </div>
  );
};

export default Favorite;
