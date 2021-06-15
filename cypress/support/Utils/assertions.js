const checkVisiblity = (elem, shouldBe = true) => {
  shouldBe ? expect(elem).to.be.visible : expect(elem).to.not.be.visible;
};

const checkAmountOfElements = (elem, num) => {
  expect(elem).to.have.lengthOf(num);
};

const checkCurrentURL = (location, url) => {
  expect(location.href).to.eq(url);
};

const checkInnerText = (elem, text) => {
  expect(elem).to.contain(text);
};

const checkIfValue = (elem, text) => {
  expect(elem).to.have.value(text);
};

export default {
  checkVisiblity,
  checkAmountOfElements,
  checkCurrentURL,
  checkInnerText,
  checkIfValue,
};
