const assert = require("assert");
const { compileBoolFilter } = require("../sql");

assert.strictEqual(compileBoolFilter("is_active", true), "a.is_active = TRUE");
assert.strictEqual(compileBoolFilter("is_active", false), "a.is_active = FALSE");

console.log("sql.test.js passed");
