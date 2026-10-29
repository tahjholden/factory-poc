import { expect, test } from "vitest";
import { subtract } from "./sub.js";
test("subtract", () => expect(subtract(3, 2)).toBe(1));
