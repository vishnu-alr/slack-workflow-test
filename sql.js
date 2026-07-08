function compileBoolFilter(column, value) {
  return `a.${column} = ${value ? "TRUE" : "FALSE"}`;
}

module.exports = { compileBoolFilter };
