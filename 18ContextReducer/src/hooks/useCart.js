import { useCart } from "../context/CardContext";

const useUpdateQuantity = () => {
  const { changeQuantity } = useCart();

  const updateQuantity = (id, quantity, change) => {
    if (change === "increase") {
      changeQuantity(id, quantity + 1);
    }

    if (change === "decrease" && quantity > 1) {
      changeQuantity(id, quantity - 1);
    }
  };

  return { updateQuantity };
};

export default useUpdateQuantity;