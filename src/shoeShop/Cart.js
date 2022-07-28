import React, { Component } from "react";

export class Cart extends Component {
  closeBtnRef = React.createRef();
  render() {
    return (
      <div className="modal fade" id="modalCart" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Your Cart</h3>
              <button
                ref={this.closeBtnRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((item) => {
                    return (
                      <tr key={item.product.id} className="align-baseline">
                        <td>{item.product.id}</td>
                        <td>{item.product.name}</td>
                        <td>
                          <img
                            width="60px"
                            src={item.product.image}
                            className=""
                            alt=""
                          />
                        </td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => {
                              this.props.reduceCartItem(item.product.id);
                            }}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn"
                            onClick={() => {
                              this.props.increaseCartItem(item.product.id);
                            }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </td>
                        <td>{item.product.price}$</td>
                        <td>{item.quantity * item.product.price}$</td>
                        <td>
                          <button
                            onClick={() => {
                              this.props.deleteCartItem(item.product.id);
                            }}
                            className="btn btn-danger"
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button
                onClick={() => {
                  this.props.checkoutCart();
                  this.closeBtnRef.current.click();
                }}
                type="button"
                className="btn btn-primary"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
