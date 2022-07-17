import React from 'react';
import { Button, Card } from 'react-bootstrap';
import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
}

function StoreItem({
  id, name, price, imgUrl,
}: StoreItemProps) {
  const {
    getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-full">
      <Card.Img variant="top" src={imgUrl} className="object-cover max-h-card" alt={name} />
      <Card.Body className="flex flex-col">
        <Card.Title className="flex justify-between align-baseline mb-4">
          <span className="text-2xl">{name}</span>
          <span className="ml-2 text-gray-500">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0
            ? (
              <Button className="w-full" data-testid="addToCart" onClick={() => increaseCartQuantity(id)}>+ Add to cart</Button>
            )
            : (
              <div className="flex items-center flex-col gap-2">
                <div className="flex items-center justify-center gap-2">
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                  <div>
                    <span className="text-xl mr-2">{quantity}</span>
                    in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>

                <Button
                  variant="danger"
                  className="mt-2"
                  data-testid="removeFromCart"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoreItem;
