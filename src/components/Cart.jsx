import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from './Image';
import Typhography from './Typhography';
import Button from './Button';
import { deleteCartItem, plusQuanlityCartItem } from '../redux/app.actions';

function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.app.carts);

  const totalPrice = React.useMemo(() => {
    return carts.reduce((acc, curr) => {
      return acc += curr.quanlity * curr.price
    }, 0)
  }, [carts]);

  return (
    <div className="card">
      <div className="cardTop">
        <Image 
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <Typhography>Total: 10</Typhography>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <Typhography className="card_amount">${Math.floor(totalPrice)}</Typhography>
      </div>

      <div className="cardBody">
        {carts.map(cart => {
          return (
            <div key={cart.id} className="cardItem">
              <div className="cardItem_left">
                <div className="cardItem_image" style={{ backgroundColor: cart.color }}>
                  <Image src={cart.image} />
                </div>
              </div>
              <div className="cardItem_right">
                <div className="cardItem_name">{cart.name}</div>
                <div className="cardItem_price">${cart.price}</div>
                <div className="cartItem_actions">
                  <div className="cartItem_count">
                    <Button 
                      text="-"
                      className="cartItem_button"
                    />
                    <div className="cartItem_number">{cart.quanlity}</div>
                    <Button 
                      text="+"
                      className="cartItem_button"
                      onClick={() => {
                        dispatch(plusQuanlityCartItem(cart.id))
                      }}
                    />
                  </div>
                  <Button 
                    className="carItem_remove"
                    icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                    onClick={() => {
                      dispatch(deleteCartItem(cart.id))
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default Cart