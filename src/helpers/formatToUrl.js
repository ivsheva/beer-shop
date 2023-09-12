const formatToUrl = (str) => {
  str = str.endsWith("?") ? str.slice(0, -1) : str; // delete question mark at the end
  return str.toLowerCase().replace(/\s+/g, "-");
};

export default formatToUrl;
