import { moduleA } from "@main/moduleA";

/**
 * Test moduleC
 * @returns "moduleC"
 */
export function moduleC() {
  moduleA();
  return "moduleC";
}
