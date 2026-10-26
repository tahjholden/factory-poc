import { expect, test } from "vitest";
import { a } from "./a.js";
test("a", () => expect(a()).toBe("a"));
