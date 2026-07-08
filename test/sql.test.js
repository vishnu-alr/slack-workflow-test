const assert = require("assert");
const { compileBoolFilter } = require("../sql");

assert.strictEqual(compileBoolFilter("is_active", true), "a.is_active = TRUE");
assert.strictEqual(compileBoolFilter("is_active", false), "a.is_active = FALSE");
assert.strictEqual(compileBoolFilter("is_verified", true), "a.is_verified = TRUE");

console.log("sql.test.js passed");
