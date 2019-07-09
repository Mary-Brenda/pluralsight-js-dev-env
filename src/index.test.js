import {expect} from "chai";
import jsdom from "jsdom";
import fs from "fs";

const { JSDOM } = jsdom;

describe ("Our first test", () => {   // This arrow function, () => is just used for brevity; you can use function() instead.
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe ("index.html", () => {
  it("should say hello", (done) => {    // done is not important to add into the brackets in this version.
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const window = new JSDOM(index).window;
    const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();     // done is not important to include in this version. cmd tests fine without it.
      window.close();
 });
});
