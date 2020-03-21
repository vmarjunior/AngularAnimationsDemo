import { Component } from "@angular/core";
import { todoAnimation, todosAnimation } from "./todos.component.animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [todosAnimation, todoAnimation]
})
export class TodosComponent {
  items: any[] = [
    "Wash the dishes",
    "Call the accountant",
    "Apply for a car insurance"
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
