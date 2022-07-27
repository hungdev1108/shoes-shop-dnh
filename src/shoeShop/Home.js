import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import clsx from "clsx";
import style from "./style.module.css";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Home extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  // State
  state = {
    selectedProduct: null,
    cart: [],
  };

  // Select product
  selectProduct = (productFromItem) => {
    this.setState({
      selectedProduct: productFromItem,
    });
  };

  notify = () => {
    toast.success("Success!", {
      position: "top-left",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      //   pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // handler function
  // add to cart
  addToCart = (prod) => {
    // spread operator
    const cloneCart = [...this.state.cart];

    const foundItem = cloneCart.find((item) => {
      return item.product.id === prod.id;
    });

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      const cartItem = {
        product: prod,
        quantity: 1,
      };
      cloneCart.push(cartItem);
    }

    this.notify();

    this.setState(
      {
        cart: cloneCart,
      },
      () => {}
    );
  };

  // delete cart item
  deleteCartItem = (id) => {
    const cloneCart = [...this.state.cart];

    const findIndex = cloneCart.findIndex((item) => {
      return item.product.id === id;
    });

    if (findIndex > -1) {
      cloneCart.splice(findIndex, 1);
    } else return;

    this.setState(
      {
        cart: cloneCart,
      },
      () => {}
    );
  };

  // increase cart item
  increaseCartItem = (id) => {
    const cloneCart = [...this.state.cart];

    const findIndex = cloneCart.findIndex((item) => {
      return item.product.id === id;
    });

    if (findIndex > -1) {
      cloneCart[findIndex].quantity += 1;
    } else return;

    this.setState(
      {
        cart: cloneCart,
      },
      () => {}
    );
  };

  // reduce cart item
  reduceCartItem = (id) => {
    const cloneCart = [...this.state.cart];

    const findIndex = cloneCart.findIndex((item) => {
      return item.product.id === id;
    });

    if (findIndex > -1) {
      if (cloneCart[findIndex].quantity === 1) {
        cloneCart.splice(findIndex, 1);
      } else {
        cloneCart[findIndex].quantity -= 1;
      }
    }

    this.setState(
      {
        cart: cloneCart,
      },
      () => {}
    );
  };

  // checkout
  checkoutCart = () => {
    this.setState({
      cart: [],
    });
  };

  render() {
    return (
      <div className={clsx(style.background)}>
        <div className="container">
          <h1 className="py-3 text-white">Product List</h1>
          <div className="d-flex flex-row-reverse">
            <button
              className="text-white fs-5 mb-4 px-5 py-2 border btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#modalCart"
            >
              <span className="p-2">Cart</span>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
          <ProductList
            products={this.products}
            selectProduct={this.selectProduct}
            addToCart={this.addToCart}
          />
          {this.state.selectedProduct ? (
            <ProductDetail selectedProduct={this.state.selectedProduct} />
          ) : null}
          <Cart
            cart={this.state.cart}
            deleteCartItem={this.deleteCartItem}
            increaseCartItem={this.increaseCartItem}
            reduceCartItem={this.reduceCartItem}
            checkoutCart={this.checkoutCart}
          />
          <ToastContainer />;
        </div>
      </div>
    );
  }
}

export default Home;
