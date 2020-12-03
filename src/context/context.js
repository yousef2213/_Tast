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
    if (!tempItem) {
      alert("add to Cart First");
    } else {
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

  // postDate = async (user) => {
  //   try {
  //     let result = await fetch("https://webhook.site/95c16f9c-c7ae-42a6-ba3f-277d8961dc77", {
  //       method: "post",
  //       mode: "no-cors",
  //       headers: {
  //         "Accept" : "application/x-www-form-urlencoded",
  //         "Content-type": "application/x-www-form-urlencoded"
  //       },
  //       body: JSON.stringify(user)
  //     })
  //     console.log(result);
  //   } catch(e){
  //     console.log("Err");
  //     console.log(e);
  //   }
  // }

  getSignIn = (e) => {
    e.preventDefault();
    let emailV = document.getElementById("valueemail").value;
    let passwordV = document.getElementById("valuepassword").value;
    let user = {
      Email: emailV,
      Password: passwordV,
    };
    if (emailV === "" && passwordV === "") alert("Please Sign in");
    else {
      document.getElementById("valueemail").value = "";
      document.getElementById("valuepassword").value = "";
      // this.postDate(user);
      alert("done!")
    }
  };
  getSubscription = (e) => {
    e.preventDefault();
    let nameSubscription = document.getElementById("nameSubscription").value;
    let emailSubscription = document.getElementById("emailSubscription").value;
    let numberSubscription = document.getElementById("numberSubscription")
      .value;
    let addressSubscription = document.getElementById("addressSubscription")
      .value;
    let passSubscription = document.getElementById("passSubscription").value;
    let passconfirmSubscription = document.getElementById(
      "passconfirmSubscription"
    ).value;
    let user = {
      NameSubscription: nameSubscription,
      EmailSubscription: emailSubscription,
      NumberSubscription: numberSubscription,
      AddressSubscription: addressSubscription,
      PasswordSubscription: passSubscription,
      PasswordConfirmSubscription: passconfirmSubscription,
    };
    if (emailSubscription === "") {
      alert("Please Write Your Email");
    } else if (nameSubscription === "") {
      alert("Please Write Your Name");
    } else if (numberSubscription === "") {
      alert("Please Write Your Number");
    } else if (addressSubscription === "") {
      alert("Please Write Your Address");
    } else if (passSubscription !== passconfirmSubscription) {
      alert("Check the password");
    } else if (passSubscription === "" && passconfirmSubscription === "") {
      alert("Check the password");
    } else {
      document.getElementById("nameSubscription").value = "";
      document.getElementById("emailSubscription").value = "";
      document.getElementById("numberSubscription").value = "";
      document.getElementById("addressSubscription").value = "";
      document.getElementById("passSubscription").value = "";
      document.getElementById("passconfirmSubscription").value = "";
      alert("done!")
    }
  };
  getCheckout = (e) => {
    e.preventDefault();
    let nameCheckOut = document.getElementById("nameCheckOut").value;
    let CountryCheckOut = document.getElementById("CountryCheckOut").value;
    let CityCheckOut = document.getElementById("CityCheckOut").value;
    let DetilsAddressCheckOut = document.getElementById("DetilsAddressCheckOut").value;
    let codeCheckOut = document.getElementById("codeCheckOut").value;
    let phoneCheckOut = document.getElementById("phoneCheckOut").value;
    let emailCheckOut = document.getElementById("emailCheckOut").value;
    let numberCard = document.getElementById("numberCard").value;
    let SecCard = document.getElementById("SecCard").value;
    let DataEndCard = document.getElementById("DataEndCard").value;
    let nameUserCard = document.getElementById("nameUserCard").value;
    let user = {
      nameCheckOut: nameCheckOut,
      CountryCheckOut: CountryCheckOut,
      CityCheckOut: CityCheckOut,
      DetilsAddressCheckOut: DetilsAddressCheckOut,
      codeCheckOut: codeCheckOut,
      phoneCheckOut: phoneCheckOut,
      emailCheckOut: emailCheckOut,
      numberCard: numberCard,
      SecCard: SecCard,
      DataEndCard: DataEndCard,
      nameUserCard: nameUserCard,
    };
    if (
      nameCheckOut === "" ||
      CountryCheckOut === "" ||
      CityCheckOut === "" ||
      DetilsAddressCheckOut === "" ||
      codeCheckOut === "" ||
      phoneCheckOut === "" ||
      emailCheckOut === ""
    )
      alert("Please Complete the registration of your address");
    else if (
      numberCard === "" ||
      SecCard === "" ||
      DataEndCard === "" ||
      nameUserCard === ""
    ) {
      alert("Please Complete the registration of payment details");
    } else {
      alert("done!")
      // this.postDate(user)
      
    }
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
          clearCart: this.clearCart,
          getCheckout: this.getCheckout,
          getSignIn: this.getSignIn,
          getSubscription: this.getSubscription,
        }}
      >
        {this.props.children}
      </QafeerContext.Provider>
    );
  }
}

// const QafeerConsumer = QafeerContext.Consumer;

export { QafeerProvider, QafeerContext };
