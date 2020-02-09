"use strict"

const { btoa, atob } = require("abab")
const Blob = require("cross-blob")
const blobUtil = require("blob-util")

if (!globalThis.Blob) globalThis.Blob = Blob
if (!globalThis.btoa) globalThis.btoa = btoa
if (!globalThis.atob) globalThis.atob = atob

module.exports = blobUtil
