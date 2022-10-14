import { render } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);
    expect(getByText("Isaias")).toBeInTheDocument();
    expect(getByText("Antonio")).toBeInTheDocument();
  });
  it("should able to add new item in list", async () => {
    const { getByText, getByPlaceholderText, debug,findByText } = render(<App />);

    const addButton = getByText("Adicionar");
    debug();
    const inputElement = getByPlaceholderText("new-item");
    await userEvent.type(inputElement,'Novo')
    await userEvent.click(addButton);
    expect(await findByText("Novo")).toBeInTheDocument();
  });
});
