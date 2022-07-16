import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';

type CartItemProps = {
  id: number
  quantity: number
}

function CartItem({ id, quantity }:CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="flex items-center">
      <img
        src={item.imgUrl}
        className="w-cart-width h-cart-height object-cover"
        alt={item.name}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {' '}
          {quantity > 1 && (
            <span className="text-gray-500 text-l">
              x
              {quantity}
            </span>
          )}
        </div>
        <div className="text-gray-500 text-l">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>
        {' '}
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}

export default CartItem;
