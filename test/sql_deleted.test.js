const assert = require("assert");
const { compileBoolFilter } = require("../sql");

assert.strictEqual(compileBoolFilter("is_deleted", true), "a.is_deleted = TRUE");
assert.strictEqual(compileBoolFilter("is_deleted", false), "a.is_deleted = FALSE");

console.log("sql_deleted.test.js passed");
