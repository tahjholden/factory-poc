import { expect, test } from "vitest";
import { b } from "./b.js";
test("b", () => expect(b()).toBe("b"));
