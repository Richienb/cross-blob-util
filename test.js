const test = require("ava")
const isBlob = require("is-blob")
const blobUtil = require(".")

test("main", (t) => {
	t.true(isBlob(blobUtil.base64StringToBlob("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", "image/png")))
})
