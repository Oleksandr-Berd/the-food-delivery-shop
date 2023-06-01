import { Component } from "react";
import productsCartContext from "./productsCartContext";

export default class ProductsCartProvider extends Component {
  state = {
    productsCart: [],
    chosenProducts: [],
    totalPrice: [],
    add: (product) => {
      this.setState((prev) => ({
        productsCart: [...prev.productsCart, product],
      }));
    },
    clear: () => {
      this.setState({ productsCart: [] });
    },
    formChosenProducts: (products) =>
      this.setState({ chosenProducts: products }),
    
    calculateTotalPrice: (total) => {
      this.setState((prev) => ({
        totalPrice: [...prev.totalPrice, total],
      }));
    },
  };
  render() {
    return (
      <productsCartContext.Provider value={this.state}>
        {this.props.children}
      </productsCartContext.Provider>
    );
  }
}


