function ProductCategoryRow(props) {
  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>{props.categoryName}</td>
    </tr>
  );
}

export default ProductCategoryRow;
