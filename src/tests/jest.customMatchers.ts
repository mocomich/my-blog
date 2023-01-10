import { getRoles } from "@testing-library/react";

interface CustomMatchers<R = unknown> {
  toBeAtom: () => R;
  toBeMolecule: () => R;
  toBeOrganism: () => R;
  toBeTemplate: () => R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

const groupRoles = ["group", "article", "list", "term", "tablist", "tabpanel", "table", "rowgroup", "row", "combobox"];

const maybeLandmarkRoles = ["banner", "contentinfo"];

const landmarkRoles = [
  "complementary",
  "form",
  // "main",
  "navigation",
  "region",
  "search",
];

const windowRoles = ["alertdialog", "dialog"];

const ignoresRoles = ["generic", "presentation"];

function includeGroupRole(keys: string[]) {
  return keys.map((key) => groupRoles.includes(key)).some(Boolean);
}

function includeMaybeLandmarkRole(keys: string[]) {
  return keys.map((key) => maybeLandmarkRoles.includes(key)).some(Boolean);
}

function includeLandmarkRole(keys: string[]) {
  return keys.map((key) => landmarkRoles.includes(key)).some(Boolean);
}

function includeWindowRole(keys: string[]) {
  return keys.map((key) => windowRoles.includes(key)).some(Boolean);
}

function includeMainRole(keys: string[]) {
  return keys.includes("main");
}

function getRoleKeys(container: HTMLElement) {
  return Object.keys(getRoles(container)).filter((key) => !ignoresRoles.includes(key));
}

function fail(message: string) {
  return { message: () => message, pass: false };
}

function toBeAtom(container: HTMLElement): jest.CustomMatcherResult {
  const keys = getRoleKeys(container);
  if (keys.length >= 2) {
    return fail("Atom should structured by single role.");
  }
  if (includeGroupRole(keys)) {
    return fail("Atom should not include group role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Atom should not include window role.");
  }
  if (includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeMainRole(keys)) {
    return fail("Atom should not include landmark role.");
  }
  return { message: () => "it Atom", pass: true };
}

function toBeMolecule(container: HTMLElement): jest.CustomMatcherResult {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Molecule should structured by multiple role.");
  }
  if (includeLandmarkRole(keys)) {
    return fail("Molecule should not include landmark role.");
  }
  if (includeWindowRole(keys)) {
    return fail("Molecule should not include window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Molecule should not include main role.");
  }
  return { message: () => "it Molecule", pass: true };
}

function toBeOrganism(container: HTMLElement): jest.CustomMatcherResult {
  const keys = getRoleKeys(container);
  if (!(keys.length >= 2)) {
    return fail("Organism should structured by multiple role.");
  }
  if (!(includeLandmarkRole(keys) || includeMaybeLandmarkRole(keys) || includeWindowRole(keys))) {
    return fail("Organism should structured by landmark or window role.");
  }
  if (includeMainRole(keys)) {
    return fail("Organism should not include main role.");
  }
  return { message: () => "it Organism", pass: true };
}

function toBeTemplate(container: HTMLElement): jest.CustomMatcherResult {
  const keys = getRoleKeys(container);
  if (!includeMainRole(keys)) {
    return fail("Template should include main role.");
  }
  return { message: () => "it Template", pass: true };
}

expect.extend({ toBeAtom, toBeMolecule, toBeOrganism, toBeTemplate });
