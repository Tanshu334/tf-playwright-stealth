const languages = ["en-US", "en"]; // Set strictly to English
utils.replaceGetterWithProxy(
  Object.getPrototypeOf(navigator),
  "languages",
  utils.makeHandler().getterValue(Object.freeze([...languages]))
);
