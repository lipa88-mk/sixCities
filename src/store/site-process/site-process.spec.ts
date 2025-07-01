import type { SortName } from "../../types/types";
import { siteProcess, setSorting, setError } from "./site-process";
import { Sorting } from "../../const";
import { SiteProcess } from "../../types/state";

describe("Reducer: siteProcess", () => {
  const initialState: SiteProcess = {
    sorting: Sorting.Popular,
    error: null,
  };

  it("without additional parameters should return initial state", () => {
    expect(siteProcess.reducer(void 0, { type: "UNKNOWN_ACTION" })).toEqual(
      initialState,
    );
  });

  it("should set sorting by a given name", () => {
    const state = initialState;

    expect(
      siteProcess.reducer(
        state,
        setSorting(Object.keys(Sorting)[1] as SortName),
      ),
    ).toEqual({
      sorting: Object.keys(Sorting)[1],
      error: null,
    });
  });

  it("should set error by a given name", () => {
    const state = initialState;

    expect(siteProcess.reducer(state, setError("some error"))).toEqual({
      sorting: Sorting.Popular,
      error: "some error",
    });
  });
});
