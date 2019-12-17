export function increment(num) {
  let action = {
    type: "INC_NUMBER",
    num
  };
  return action;
}

export function showDrop(index) {
  let action = {
    type: "SHOW_DROP",
    index
  };
  return action;
}

export function collapseAll(ele) {
  let action = {
    type: "COLLAPSE_ALL",
    ele
  };
  return action;
}
