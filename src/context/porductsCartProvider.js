import { Component } from "react";
import productsCartContext from "./productsCartContext";

export default class ProductsCartProvider extends Component {
  state = {
    productsCart: [],
    chosenProducts: [],
    add: (product) => {
      this.setState((prev) =>( {productsCart: [...prev.productsCart, product]}));
    },
     clear: () => {
      this.setState({productsCart: []});
    },
    formChosenProducts:(products => this.setState({chosenProducts:products}))
  };
  render() {
    return (
    <productsCartContext.Provider value={this.state}>
        {this.props.children}
      </productsCartContext.Provider>
    );
  }
}


