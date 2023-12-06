import { Web5 } from "@web5/api";

import { webcrypto } from "node:crypto";

// @ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const { web5, did: aliceDid } = await Web5.connect();

// console.log(aliceDid);

const { record: greet } = await web5.dwn.records.create({
  data: "Hello, Web5",
  message: {
    dataFormat: "text/plain",
  },
});

const { record: username } = await web5.dwn.records.create({
  data: "kyilax",
  message: {
    dataFormat: "text/plain",
  },
});

// console.log({ record });

// Update DWN Records
await greet.update({
  data: "Hello, Web5! I am updated.",
});

const readRecord = await greet.data.text();

// delete dwn
await greet.delete();

const readUsername = await username.data.text();

console.log({ readRecord });
console.log({ readUsername });
