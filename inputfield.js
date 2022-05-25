const nameFilter = (name) => {
  if (name === undefined) {
    name = "Unknown";
  }
  name = name.trim();
  if (name.length > 10) {
    name = name.substring(0, 10);
  }
  return name;
}

module.exports = nameFilter;