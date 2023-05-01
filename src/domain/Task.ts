export type Status =
  | "ToDo"
  | "InProgress"
  | "InQA"
  | "Blocked"
  | "Done"
  | "Deployed";

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
    return new Task(this.generateId(), title, description, "ToDo");
  }

  private static generateId() {
    // TODO improve id gen, use VO
    return String(Math.floor(Math.random() * 100));
  }

  public static isValid(title: string, description: string) {
    return title.length > 0 && description.length > Task.MIN_DESCRIPTION_LENGTH;
  }

  public update(title: string, description: string, status: Status) {
    if (!Task.isValid(title, description)) {
      throw new Error("Invalid update");
    }
    if (!this.isStatusTransitionAllowed(status)) {
      throw new Error("Invalid status transition");
    }
    this.title = title;
    this.description = description;
    this.status = status;
  }

  public getTransitions(): Status[] {
    const allowedTransitions: Record<Status, Status[]> = {
      ToDo: ["ToDo", "InProgress"],
      InProgress: ["InProgress", "InQA", "Blocked"],
      Blocked: ["Blocked", "ToDo"],
      InQA: ["InQA", "ToDo", "Done"],
      Done: ["Done", "Deployed"],
      Deployed: ["Deployed"],
    };

    return allowedTransitions[this.status];
  }

  private isStatusTransitionAllowed(newStatus: Status): boolean {
    const allowedTransitions: Record<Status, Status[]> = {
      ToDo: ["ToDo", "InProgress"],
      InProgress: ["InProgress", "InQA", "Blocked"],
      Blocked: ["Blocked", "ToDo"],
      InQA: ["InQA", "ToDo", "Done"],
      Done: ["Done", "Deployed"],
      Deployed: ["Deployed"],
    };

    return allowedTransitions[this.status].includes(newStatus);
  }
}
