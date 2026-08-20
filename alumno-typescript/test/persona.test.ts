import { describe, expect, test } from "vitest";
import { persona } from "../src/persona";

describe("persona", () => {

  test("una persona debe tener un nombre y legajo", () => {
    const persona1 = new persona("Juan", 12345);

    expect(persona1.nombre).toBe("Juan");
    expect(persona1.legajo).toBe(12345);
  });

  test("otra persona debe tener un nombre y legajo", () => {
    const persona1 = new persona("Pedro", 67890);

    expect(persona1.nombre).toBe("Pedro");
    expect(persona1.legajo).toBe(67890);
  });

});