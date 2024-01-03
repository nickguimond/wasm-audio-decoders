import MPEGDecoder from "./src/MPEGDecoder.js";

const assignNames = (Class, name) => {
  Object.defineProperty(Class, "name", { value: name });
};

assignNames(MPEGDecoder, "MPEGDecoder");

export { MPEGDecoder };
