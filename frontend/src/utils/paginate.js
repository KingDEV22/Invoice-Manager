import _ from "lodash";

export function paginate(data, pageNumber, pageSize) {
  const index = (pageNumber - 1) * pageSize;
  return _(data).slice(index).take(pageSize).value();
}
