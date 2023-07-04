import { test, expect } from "vitest"
import {sum} from "../src/sum.js"

test("sum() should do basic addition", () => {
    const result = sum(1,2)
    expect(result).toBe(3)
})
