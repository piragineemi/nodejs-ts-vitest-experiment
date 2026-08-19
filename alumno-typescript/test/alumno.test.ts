import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("Juan", 18, 103293);

    expect(alumno.esMayorDeEdad()).toBe(true);
     expect(alumno.legajo).toBe(103293);
  });

  test("un alumno de 25 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("Ana", 25,8232823);

    expect(alumno.esMayorDeEdad()).toBe(true);
     expect(alumno.legajo).toBe(8232823);
  });

  test("un alumno de 12años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("Pedro", 12, 123123);

    expect(alumno.esMayorDeEdad()).toBe(false);
     expect(alumno.legajo).toBe(123123);
  });
  test("un alumno de 18 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("javier", 18 , 223123);
    expect(alumno.esMayorDeEdad()).toBe(true);
     expect(alumno.legajo).toBe(223123);
  });
   test("un alumno de 20 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("Paula", 20 , 1235676);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(1235676);
  });

    test("un alumno de 22 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("Joaquina", 22 , 1265676);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(1265676);
})
  test("un alumno de 21 años debe ser mayor de edad y debe tener numero de legajo", () => {
    const alumno = new Alumno("julieta", 21 , 2265676);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.legajo).toBe(2265676);
})
});
