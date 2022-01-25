import React from "react";
import { data } from "./data";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], search: "", onlyStocked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  fetchData() {
    return Promise.resolve(data);
  }

  componentDidMount() {
    this.fetchData().then((data) => this.setState({ products: data }));
  }

  handleChange(e) {
    const inputType = e.target.getAttribute("type");
    const value = e.target.value;
    const key = e.target.name;

    if (inputType === "checkbox") {
      this.setState((state, props) => ({
        [key]: !state.key,
      }));
    } else if (inputType === "text") {
      this.setState({ [key]: value });
    }
  }

  render() {
    const { search, onlyStocked, products } = this.state;

    return (
      <div className="filterable-product-table">
        <SearchBar
          search={search}
          onlyStocked={onlyStocked}
          onSearch={this.handleChange}
        />
        {products.length > 0 && <ProductTable {...this.state} />}
      </div>
    );
  }
}

export default FilterableProductTable;
