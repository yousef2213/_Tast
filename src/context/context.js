import React, { Component, createContext } from "react";
import axios from "axios";
const QafeerContext = createContext();
var base_url = "https://www.qafeer.net";

class QafeerProvider extends Component {
  state = {
    Project: "Qafeer",
    Login: false,
    SidebarOpen: false,
    AllProducts: [],
    SingleProduct: {},
    User: {},
    Cart: [ 
      {
      "id": 5525,
      "name": "لاب توب HP مواصفات ممتازة",
      "img": "https://qafeer.net/wp-content/uploads/2020/11/running-shoes-QJGJa6D-600.png",
      "regular_price": "320",
      "sale_price": "150",
      "price": "150",
      "rating_avg": 0,
      "rating_count": 0,
      "reviews": {
          "reviews": []
      },
      "description": "نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه",
      "short_description": "نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه"
      },
      {
        "id": 55225,
        "name": "لاب توب HP مواصفات ممتازة",
        "img": "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "regular_price": "320",
        "sale_price": "150",
        "price": "150",
        "rating_avg": 0,
        "rating_count": 0,
        "reviews": {
            "reviews": []
        },
        "description": "نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه",
        "short_description": "نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه نص من خيال المصمم تم استخراجه من مولد النص العربى لاستخدامه فى هذه المساحه ويمكن استبداله بالنص المطلوب وتم استخدامه لاظهار تناسق التصميم وابارزه"
      }
],
    wishlist_item: [],
    WishList: [],
    Category: [],
    CategoryListId: [],
    wishlist_data_items: 0,
    CartItems: 0,
    Total: 0.00,
    mess: "",
    messSubscription: "",
    messSaveEdit: "",
    messSaveEdit2: "",
  };
  componentDidMount() {
    this.setState({
        AllProducts: this.getDataProducts(),
        User: this.getDateUser(),
        Login: this.getLogin(),
      }, () => {
        if(this.state.Login){
          this.getWishlist();
        }
      });
  }
  getDateUser = () => localStorage.getItem("User") ? JSON.parse(localStorage.getItem("User")) : [];
  getLogin = () => localStorage.getItem("Login") ? JSON.parse(localStorage.getItem("Login")) : false;

  Synch = () => {
    localStorage.setItem("User", JSON.stringify(this.state.User));
    localStorage.setItem("Login", JSON.stringify(this.state.Login));
  };
  getDataProducts = () => {
    axios.get(base_url + "/wp-json/bestgator/v1/getAllCats?page_num=1&per_page=50").then((res) => {
        this.setState({
          AllProducts: res.data.cats_list,
        });
      });
  };
  //addTotals
  addTotals = () => {
    let subtotal = 0;
    this.state.Cart.forEach((item) => {
      subtotal += +item.price;
    });
    subtotal = parseFloat(subtotal.toFixed(2));
    this.setState({
      CartItems: this.state.Cart.length,
      Total: subtotal,
    });
  };

  setCategoryById = async (id) => {
    var myHeaders = new Headers();
    var requestOptions = {
      method: "Get",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(`https://qafeer.net/wp-json/bestgator/v1/listProducts?per_page=10&page_num=1&cat_id=${id}`,requestOptions);
    let data = await result.json();
    this.setState({
      CategoryListId: data.product_list,
    });
  };
  // set single product
  setSingleProduct = async (id) => {
    var myHeaders = new Headers();
    var requestOptions = {
      method: "Get",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(`https://qafeer.net/wp-json/bestgator/v1/getSingleProduct?product_id=${id}`,requestOptions);
    let data = await result.json();
    this.setState({
      SingleProduct: { ...data.prodcut_data },
    });
  };
  //add To Cart
  addToCart = async (id) => {
    alert("Waiting");
    // let tempCart = [...this.state.Cart_Fake];
    // let tempProducts = [...this.state.AllProducts];
    // let tempItem = tempCart.find((item) => item.id === id);
    // if (!tempItem) {
    // tempItem = tempProducts.find((item) => item.id === id);
    // console.log(tempItem);
    // console.log(tempProducts);
    // let total = tempItem.price;
    // let cartItem = { ...tempItem, count: 1, total };
    // tempCart = [...tempCart, cartItem];
    // } 
    // else {
    // tempItem.count++;
    // tempItem.total = tempItem.price * tempItem.count;
    // tempItem.total = parseFloat(tempItem.total.toFixed(2));
    // }
    // var myHeaders = new Headers();
    // var formdata = new FormData();
    // formdata.append("product", tempCart);
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: "follow",
    // };
    // await fetch("https://qafeer.net/wp-json/bestgator/v1/addCartProduct",requestOptions).then(() => {
    //   this.setState(
    //     () => {
    //       return { Cart: tempCart };
    //     },
    //     () => {
    //       this.addTotals();
    //     }
    //   );
    // });
  };

  Increment = (id) => {
    alert("Waiting");
    // let tempCart = [...this.state.Cart];
    // let tempItem = tempCart.find((item) => item.id === id);
    // if (!tempItem) {
    //   alert("add to Cart First");
    // } else {
    //   tempItem.count++;
    //   tempItem.total = tempItem.count * tempItem.price;
    //   tempItem.total = parseFloat(tempItem.total.toFixed(2));
    //   this.setState(
    //     () => {
    //       return {
    //         Cart: [...tempCart],
    //       };
    //     },
    //     () => {
    //       this.addTotals();
    //     }
    //   );
    // }
  };
  decrement = (id) => {
    alert("Waiting");
    // let tempCart = [...this.state.Cart];
    // let tempItem = tempCart.find((item) => item.id === id);
    // tempItem.count = tempItem.count - 1;

    // if (tempItem.count === 0) {
    //   this.removeItem(id);
    // } else {
    //   tempItem.total = tempItem.count * tempItem.price;
    //   tempItem.total = parseFloat(tempItem.total.toFixed(2));
    //   this.setState(
    //     () => {
    //       return {
    //         Cart: [...tempCart],
    //       };
    //     },
    //     () => {
    //       this.addTotals();
    //     }
    //   );
    // }
  };
  clearCart = () => {
    this.setState(() => {
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

  getSignIn = async (e) => {
    e.preventDefault();
    let emailV = document.getElementById("valueemail").value;
    let passwordV = document.getElementById("valuepassword").value;
    if (emailV === "" || passwordV === "") alert("Please Sign in");
    else {
      document.getElementById("valueemail").value = "";
      document.getElementById("valuepassword").value = "";
      this.DataSignIn(emailV, passwordV);
    }
  };

  DataSignIn = async (email, password) => {
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let result = await fetch("https://qafeer.net/wp-json/bestgator/v1/userLogin",requestOptions);
    if (result.status === 404) {
      this.setState({
        mess: "Something error or user is not registered before",
      });
    } else if (result.status === 200) {
      let data = await result.json();
      this.setState({
          User: data.user_data,
          Login: true,
        }, () => {
          this.Synch();
          window.location.reload();
        }
      );
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
    if (emailSubscription === "") {
      this.setState({
        messSubscription: "Please Write Your Email",
      });
    } else if (nameSubscription === "") {
      this.setState({
        messSubscription: "Please Write Your Name",
      });
    } else if (numberSubscription === "") {
      this.setState({
        messSubscription: "Please Write Your Number",
      });
    } else if (addressSubscription === "") {
      this.setState({
        messSubscription: "Please Write Your Address",
      });
    } else if (passSubscription !== passconfirmSubscription) {
      this.setState({
        messSubscription: "Check the password",
      });
    } else if (passSubscription === "" && passconfirmSubscription === "") {
      this.setState({
        messSubscription: "Check the password",
      });
    } else {
      document.getElementById("nameSubscription").value = "";
      document.getElementById("emailSubscription").value = "";
      document.getElementById("numberSubscription").value = "";
      document.getElementById("addressSubscription").value = "";
      document.getElementById("passSubscription").value = "";
      document.getElementById("passconfirmSubscription").value = "";
      this.DataSubscription(
        nameSubscription,
        emailSubscription,
        numberSubscription,
        addressSubscription,
        passSubscription,
        passconfirmSubscription
      );
    }
  };

  DataSubscription = async (name, email, num, address, pass, passconfirm) => {
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("first_name", name);
    formdata.append("email", email);
    formdata.append("user_phone", num);
    formdata.append("user_address", address);
    formdata.append("password", pass);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let result = await fetch(
      "https://qafeer.net/wp-json/bestgator/v1/addNewUser",
      requestOptions
    );
    let data = await result.json();
    console.log(data);
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
      alert("done!");
      // this.postDate(user)
    }
  };

  LoginOut = () => {
    localStorage.removeItem("User");
    this.setState({
        User: [],
        Login: false,
      }, () => {
        this.Synch();
        window.location.reload();
      }
    );
  };

  SaveEditInformation = async (e) => {
    e.preventDefault();
    let name = document.getElementById("nameEdet").value;
    let email = document.getElementById("emailEdit").value;
    let number = document.getElementById("numberEdet").value;
    let pass = document.getElementById("passEdit").value;
    let passconfirm = document.getElementById("passEditCheck").value;

    if (email === "") {
      this.setState({
        messSaveEdit: "Please Write Your Email",
      });
    } else if (name === "") {
      this.setState({
        messSaveEdit: "Please Write Your Name",
      });
    } else if (number === "") {
      this.setState({
        messSaveEdit: "Please Write Your Number",
      });
    } else if (pass !== passconfirm) {
      this.setState({
        messSaveEdit: "Check the password",
      });
    } else if (pass === "" && passconfirm === "") {
      this.setState({
        messSaveEdit: "Check the password",
      });
    } else {
      document.getElementById("nameEdet").value = "";
      document.getElementById("emailEdit").value = "";
      document.getElementById("numberEdet").value = "";
      document.getElementById("passEdit").value = "";
      document.getElementById("passEditCheck").value = "";
      this.connectDBChange(name, email, number, pass);
    }
  };

  connectDBChange = async (name, email, number, pass) => {
    let Me = this.state.User;
    let jwt = Me.jwt;
    let URL = `https://qafeer.net/wp-json/bestgator/v1/updateUserProfile?jwt=${jwt}`;
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("first_name", name);
    formdata.append("user_email", email);
    formdata.append("user_phone", number);
    formdata.append("user_password", pass);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let result = await fetch(URL, requestOptions);
    let data = await result.json();
    console.log(data);
    this.setState({
        User: data,
      },() => {
        this.Synch();
      });
  };

  SaveEditInformationAddress = async (e) => {
    e.preventDefault();
    let name = document.getElementById("nameinfo2").value;
    let wlaya = document.getElementById("wlayaEdit").value;
    let country = document.getElementById("countryEdit").value;
    let numberedit2 = document.getElementById("numberedit2").value;
    let center = document.getElementById("center").value;
    let address_home = document.getElementById("addresshome").value;
    let code_home = document.getElementById("codehome").value;
    let emailedit2 = document.getElementById("emailedit2").value;

    if (country === "") {
      this.setState({
        messSaveEdit2: "Please Write Your Country",
      });
    } else if (center === "") {
      this.setState({
        messSaveEdit2: "Please Write Your City",
      });
    } else if (address_home === "") {
      this.setState({
        messSaveEdit2: "Please Write Your Address Home",
      });
    } else if (code_home === "") {
      this.setState({
        messSaveEdit2: "Check the Code Home",
      });
    } else {
      document.getElementById("nameinfo2").value = "";
      document.getElementById("countryEdit").value = "";
      document.getElementById("wlayaEdit").value = "";
      document.getElementById("center").value = "";
      document.getElementById("addresshome").value = "";
      document.getElementById("codehome").value = "";
      document.getElementById("numberedit2").value = "";
      document.getElementById("emailedit2").value = "";
      this.connectDBChange2(
        name,
        country,
        numberedit2,
        center,
        emailedit2,
        wlaya,
        address_home,
        code_home
      );
    }
  };

  connectDBChange2 = async ( name, country, center, numberedit2, emailedit2, wlaya, address_home, code_home) => {
    let Me = this.state.User;
    let jwt = Me.jwt;
    let URL = `https://qafeer.net/wp-json/bestgator/v1/updateUserProfile?jwt=${jwt}`;
    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("user_email+", emailedit2);
    formdata.append("user_wlaya", wlaya);
    formdata.append("user_country", country);
    formdata.append("user_center", center);
    formdata.append("user_address", address_home);
    formdata.append("code_home", code_home);
    formdata.append("user_number", numberedit2);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let result = await fetch(URL, requestOptions);
    let data = await result.json();
    this.setState({
        User: data,
      }, () => {
        this.Synch();
      });
  };

  //
  setTest = async (id) => {
    let URL_CATEGORY = `https://qafeer.net/wp-json/bestgator/v1/listSubCats?per_page=10&page_num=1&cat_id=${id}`;
    let result = await fetch(URL_CATEGORY);
    let data = await result.json();
    let Nv = document.getElementById("navbarNav");
    Nv.classList.remove("show")
    this.setState({
      CategoryListId: data.cats_list,
    });
  };
  getWishlist = async () => {
    const CurrentJwt = this.state.User.jwt;
    // let JwtTest = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDY5OTU5ODMsImV4cCI6MTYwOTY5NTk4MywiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWQiOjUsInNpdGUiOiJodHRwczpcL1wvcWFmZWVyLm5ldCIsInVzZXJuYW1lIjoidGVzdEB0ZXN0LmNvbSJ9.cEtY5CnWKe0k1aIDktMVRgJUPPeCRZfzl8QfEhNzzTQ`;
    let WishList_URL = `https://qafeer.net/wp-json/bestgator/v1/getWishlist?jwt=${CurrentJwt}`;
    let myHeaders = new Headers();
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(WishList_URL, requestOptions);
    let data = await result.json();
    this.setState({
      WishList: data.wishlist_data,
    }, 
    () => {
      console.log("Done Api");
      this.addTotals()
      if(this.state.Login){
        this.setState({
        wishlist_data_items: this.state.WishList.length
      })
      }
    });
  };
  // WishList
  addToWishlist = async (id) => {
    let tempList = this.state.WishList;
    let Id_product = id;
    let myHeadersuser = new Headers();
    let requestOptionsuser = {
      method: "Get",
      headers: myHeadersuser,
      redirect: "follow",
    };
    let resultuser = await fetch(`https://qafeer.net/wp-json/bestgator/v1/getSingleProduct?product_id=${Id_product}`,requestOptionsuser);
    let user = await resultuser.json();
    tempList.push(user.prodcut_data);
    let CureentUserJwt = this.state.User.jwt;
    let URL_DB = `https://qafeer.net/wp-json/bestgator/v1/addToWishlist`;
    let myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("product_id", id);
    formdata.append("jwt", CureentUserJwt);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    let result = await fetch(URL_DB, requestOptions);
    let data = await result.json();
    this.setState({
      WishList: tempList
    },() => {
      document.querySelector(".heart").classList.add("addFav_")
    })
  };
    // WishList
  removeToWishlist = async (id) => {
    let CureentUserJwt = this.state.User.jwt;
    let tempList = this.state.WishList;
    tempList= [...tempList].filter(item => item.wishlist_item_id !== id);
    let URL_DB = `https://qafeer.net/wp-json/bestgator/v1/removeWishlistProduct?wishlist_item_id=${id}&jwt=${CureentUserJwt}`;
    let myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("wishlist_item_id", id);
    formdata.append("jwt", CureentUserJwt);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let result = await fetch(URL_DB, requestOptions);
    let data = await result.json();
    console.log('====================================');
    this.setState({
      WishList: tempList
    })
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
          SaveEditInformation: this.SaveEditInformation,
          SaveEditInformationAddress: this.SaveEditInformationAddress,
          LoginOut: this.LoginOut,
          setTest: this.setTest,
          setCategoryById: this.setCategoryById,
          addToWishlist: this.addToWishlist,
          removeToWishlist: this.removeToWishlist
        }}
      >
        {this.props.children}
      </QafeerContext.Provider>
    );
  }
}

// const QafeerConsumer = QafeerContext.Consumer;

export { QafeerProvider, QafeerContext };
