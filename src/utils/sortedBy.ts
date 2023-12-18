export const sortedBy =
  (key: string, type: "asc" | "desc" = "asc") =>
  (a: any, b: any) => {
    const isAsc = type === "asc" ? 1 : -1;
    if (a[key] > b[key]) {
      return 1 * isAsc;
    }

    if (a[key] < b[key]) {
      return -1 * isAsc;
    }

    return 0;
  };
