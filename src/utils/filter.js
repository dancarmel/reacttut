import _ from "lodash";

//create a filter algorithm
export function filter(itemsArray, item, itemType) {
  const currentFilter = _.pullAllWith(itemsArray, [{ item.name: "Action"}], _.isEqual);
  return _(currentFilter);
}
