var buf = Buffer.from("abc");

for (x of buf.entries()) {
  console.log(buf);
}

const b = Buffer.alloc(10, "aGVsbG8gd29ybGQ=", "base64").fill("b");

console.log(b.toString());
