import React, { Component } from "react";

class Filter extends Component {
  render() {
    const {
      items,
      onItemSelection,
      selectedItem,
      textProperty,
      valueProperty
    } = this.props;
    const itemList = items.map(item => (
      <a
        key={item[valueProperty]}
        onClick={() => onItemSelection(item)}
        className={
          item === selectedItem
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
      >
        {item[textProperty]}
      </a>
    ));
    return <div className="list-group">{itemList}</div>;
  }
}

export default Filter;
