import classes from "./CartButton.module.css";
import { uiActions } from "../../store/UiSlice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.cart.items);

  const cartLength = selector.length;
  const toggleHandler = () => {
    dispatch(uiActions.toggleState());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartLength}</span>
    </button>
  );
};

export default CartButton;
