import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TaskList from "../TasksList";
import { TaskInfo } from "../../../domain/Task";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe("TaskList", () => {
  test("renders TaskCard components when tasks are provided", () => {
    const mockedTask: TaskInfo[] = [
      {
        id: "123",
        description: "Description of first",
        status: "Blocked",
        title: "mocked 1",
      },
      {
        id: "5433",
        description: "asd",
        status: "Blocked",
        title: "asdasdasd",
      },
    ];

    render(
      <MemoryRouter>
        <TaskList tasks={mockedTask as any} />
      </MemoryRouter>
    );

    const taskCards = screen.getAllByTestId("TaskCard");
    expect(taskCards.length).toBe(mockedTask.length);
    //could extend by asserting also description and link
  });

  test("renders EmptyTaskList component when tasks are empty", () => {
    render(
      <MemoryRouter>
        <TaskList tasks={[]} />
      </MemoryRouter>
    );

    screen.findByText(/ You have nothing to do/i);
  });
});
