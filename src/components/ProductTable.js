import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

import "./ProductTable.css";

class ProductTable extends React.Component {
  prepareFinalList() {
    const { search, onlyStocked, products } = this.props;

    const categories = Array.from(
      new Set(this.props.products.map(({ category }) => category))
    );

    let finalProductsList;

    const filterArray = (arr = [], reducer) => arr.filter(reducer);

    const mergeArrays = (arr1, arr2) =>
      arr1.reduce(
        (acc, category) =>
          acc.concat([
            category,
            ...filterArray(arr2, (item) => item.category === category),
          ]),
        []
      );

    if (onlyStocked) {
      finalProductsList = filterArray(products, ({ stocked }) => stocked);
    } else {
      finalProductsList = products;
    }

    finalProductsList = filterArray(finalProductsList, ({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );

    return mergeArrays(categories, finalProductsList);
  }

  displayProducts() {
    const preparedList = this.prepareFinalList();
    return preparedList.reduce((acc, item, index) => {
      if (item.name) {
        return acc.concat([
          <ProductRow name={item.name} price={item.price} key={index} />,
        ]);
      } else {
        return acc.concat([
          <ProductCategoryRow categoryName={item} key={index} />,
        ]);
      }
    }, []);
  }

  render() {
    return (
      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.displayProducts()}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
