import { TextEncoder, TextDecoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  // @ts-expect-error: Polyfill for jest
  global.TextDecoder = TextDecoder;
}
