import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { name, price, image } = this.props.prod;
    return (
      <div className="card p-3 h-100 d-flex justify-content-between">
        <div className="img__product">
          <img src={image} className="w-100 d-block" alt={name} />
        </div>
        <div className="content__product">
          <h5>{name}</h5>
          <h5>Price: {price}$</h5>
        </div>
        <div>
          <button
            onClick={() => this.props.selectProduct(this.props.prod)}
            className="btn btn-success me-3"
            data-bs-toggle="modal"
            data-bs-target="#modalProduct"
          >
            View Detail
          </button>
          {/* Modal */}

          {/* Modal */}
          <button
            onClick={() => this.props.addToCart(this.props.prod)}
            className="btn btn-dark"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
