import React, { useState } from "react";
import CartItem from "./CartItem";

const CartList = () => {
    const [value, setValue] = useState("");
    const [cart, setCart] = usetState("");

    return (
      <div ClassName="container-fluid">

      </div>
  );
};

export default CartList;

// export default class CartList extends Component {
//   render() {
//     const { value } = this.props;
//     const { cart } = this.props.value;
//     return (
//       <div className="container-fluid">
//         {cart.map(item => (
//           <CartItem key={item.id} item={item} value={value} />
//         ))}
//       </div>
//     );
//   }
// }