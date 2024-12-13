import { render, screen } from "@testing-library/react";
import Table from "../components/Table";

test("Table renders successfully", () => {
  render(<Table />);

  const element = screen.getByText(/s\.no\./i);

  expect(element).toBeInTheDocument();
});
