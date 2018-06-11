import { observable, computed } from "mobx"
import * as mobx from "mobx"

class ObservableTodoStore {
	@observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        mobx.autorun(() => console.log(this.report));
    }

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			assignee: null
		});
	}
}


const observableTodoStore = new ObservableTodoStore();

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "try MobX in own project";
observableTodoStore.todos[0].task = "grok MobX tutorial";

/*
一、命令
npx babel observableTodoStore.js -o out.js
node out.js

二、输出
<none>
Next todo: "read MobX tutorial". Progress: 0/1
Next todo: "read MobX tutorial". Progress: 0/2
Next todo: "read MobX tutorial". Progress: 1/2
Next todo: "grok MobX tutorial". Progress: 1/2
*/