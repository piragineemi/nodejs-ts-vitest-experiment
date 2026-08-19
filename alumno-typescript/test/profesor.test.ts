import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {

  test("un profesor debe tener un nombre y legajo", () => {
    const profesor = new Profesor("Dr. García", 77707);

    expect(profesor.nombre).toBe("Dr. García");
    expect(profesor.legajo).toBe(77707);
  });

   test("un profesor debe tener un nombre y legajo", () => {
    const profesor = new Profesor("Dr. Ramirez", 20000);

    expect(profesor.nombre).toBe("Dr. Ramirez");
    expect(profesor.legajo).toBe(20000);
  });
test("un profesor debe tener un nombre y legajo", () => {
    const profesor = new Profesor("Dr. Piragine", 20020);

    expect(profesor.nombre).toBe("Dr. Piragine");
    expect(profesor.legajo).toBe(20020);
  });
});