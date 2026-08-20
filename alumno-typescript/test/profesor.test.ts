import { describe, expect, test } from "vitest";
import { profesor } from "../src/profesor";

describe("profesor", () => {

  test("un profesor debe tener un nombre y legajo", () => {
    const profe = new profesor("Dr. García", 77707);

    expect(profe.nombre).toBe("Dr. García");
    expect(profe.legajo).toBe(77707);
  });

  test("un profesor debe tener un nombre y legajo", () => {
    const profe = new profesor("Dr. Ramirez", 20000);

    expect(profe.nombre).toBe("Dr. Ramirez");
    expect(profe.legajo).toBe(20000);
  });

  test("un profesor debe tener un nombre y legajo", () => {
    const profe = new profesor("Dr. Piragine", 20020);

    expect(profe.nombre).toBe("Dr. Piragine");
    expect(profe.legajo).toBe(20020);
  });

});