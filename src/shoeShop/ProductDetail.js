import React, { Component } from "react";

export class ProductDetail extends Component {
  render() {
    const { name, image, price, description, quantity } = this.props.selectedProduct;
    return (
      <div>
        <div className="modal fade" id="modalProduct" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Product Detail</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <h4>{name}</h4>
                    <img src={image} className="w-100 d-block" alt="" />
                  </div>
                  <div className="col-8 text-start">
                    <h2>Product Information</h2>
                    <div className="text-left">
                      <p className="fs-5">Name: {name}</p>
                      <p className="fs-5">Price: {price}$</p>
                      <p className="fs-5">Description: {description}</p>
                      <p className="fs-5">Stock: {quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
