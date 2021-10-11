Cypress.Commands.overwrite("type", (originalFn, text, options, customs) => {
  // humanType: boolean
  // sets speed of delay between writing characters to average typing speed of a person
  if (customs?.humanType) {
    const averageTypingSpeed = 167;
    return originalFn(text, options, { delay: averageTypingSpeed });
  }
  return originalFn(text, options, customs);
});
