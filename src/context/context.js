import React, { Component, createContext } from "react";
import Productsdata from "../data/Productsdata";

const QafeerContext = createContext();

class QafeerProvider extends Component {
  state = {
    Project: "Qafeer",
    SidebarOpen: false,
    AllProducts: Productsdata,
    SingleProduct: {},
    Cart: [],
    CartItem: 0,
    Total: 0,
    ValueInput: 1,
  };
  //addTotals
  addTotals = () => {
    let CartItems = 0;
    let subtotal = 0;
    this.state.Cart.forEach((item) => {
      CartItems += item.count;
      subtotal += item.total;
    });
    subtotal = parseFloat(subtotal.toFixed(2));
    this.setState({
      CartItem: CartItems,
      Total: subtotal,
    });
  };
    // set single product
    setSingleProduct = (id) => {
        let product = this.state.AllProducts.find((item) => item.id === id);
        this.setState({
            SingleProduct: { ...product },
        });
      };
  //add To Cart
  addToCart = (id) => {
    let tempCart = [...this.state.Cart];
    let tempProducts = [...this.state.AllProducts];
    let tempItem = tempCart.find((item) => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { Cart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };

  Increment = (id) => {
    let tempCart = [...this.state.Cart];
    let tempItem = tempCart.find((item) => item.id === id);
    if(!tempItem){
      alert("add to Cart First")
    }else{
          tempItem.count++;
    tempItem.total = tempItem.count * tempItem.price;
    tempItem.total = parseFloat(tempItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          Cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
    }
  };
  decrement = (id) => {
    let tempCart = [...this.state.Cart];
    let tempItem = tempCart.find((item) => item.id === id);
    tempItem.count = tempItem.count - 1;

    if (tempItem.count === 0) {
      this.removeItem(id);
    } else {
      tempItem.total = tempItem.count * tempItem.price;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
      this.setState(
        () => {
          return {
            Cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          Cart: [],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  removeItem = (id) => {
    let tempCart = [...this.state.Cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    this.setState(
      () => {
        return {
          Cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <QafeerContext.Provider
        value={{
          ...this.state,
          setSingleProduct: this.setSingleProduct,
          addToCart: this.addToCart,
          Increment: this.Increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </QafeerContext.Provider>
    );
  }
}

// const QafeerConsumer = QafeerContext.Consumer;

export { QafeerProvider, QafeerContext };
