type Status = "To do" | "In progress";

export type TaskT = {
  id: string;
  title: string;
  description: string;
  status: Status;
};

export class Task implements TaskT {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: Status
  ) {}

  public static MIN_DESCRIPTION_LENGTH = 6;

  public static create(title: string, description: string) {
    return new Task(this.generateId(), title, description, "To do");
  }

  private static generateId() {
    // TODO improve id gen, use VO
    return String(Math.floor(Math.random() * 100));
  }

  public static isValid(title: string, description: string) {
    return title.length > 0 && description.length > Task.MIN_DESCRIPTION_LENGTH;
  }
}
