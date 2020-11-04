export function hasExactNumberOfNestedComponents(wrapper, searchedComponent, expectedNumber) {
  const expectedComponents = wrapper.find(searchedComponent);
  expect(expectedComponents).toBeDefined();
  expect(expectedComponents.length).toBe(expectedNumber);
}

export function clickElementWithWithTypeAndTextOnWrapper(wrapper, type, text, index = 0) {
  const element = wrapper.find(type).findWhere(w => w.text().indexOf(text) !==  -1).at(index);
  element.props().onClick();
  element.update();
}
