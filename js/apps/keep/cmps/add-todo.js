import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['color'],
    components: {},
    template: `
        <section class="add-todo">
            <input class="color-effect" type="text" v-model="note.info.label" @input="logNote" placeholder="Name your list" :style="bgcColor">
            <button @click="addTask">Add task</button>
            <button @click="removeTask">Remove task</button>
                <ul>
                    <li v-for="(todo, idx) in note.info.todos">
                        <input class="color-effect" type="text" v-model="todo.txt" @input="logNote" placeholder="Enter task" :style="bgcColor">
                    </li>
                </ul>
            </div>
        </section>
    `,
    created() {
        eventBus.$on('noteAdded', this.clearFields)
    },
    watch: {
        color: function (val) {
            console.log(val);
            this.note.style.backgroundColor = this.color = val
            this.logNote()
        }
    },
    data() {
        return {
            note: {
                type: "noteTodo",
                info: {
                    label: null,
                    todos: [
                        { txt: null, isDone: false },
                    ],
                },
                style: {
                    backgroundColor: "#fff"
                }
            },
        }
    },
    methods: {
        logNote() {
            this.$emit('logNote', this.note)
        },
        addTask() {
            this.note.info.todos.push({ txt: null, isDone: false })
        },
        removeTask() {
            this.note.info.todos.pop()
        },
        clearFields() {
            const length = this.note.info.todos.length
            this.note.info.label = ''
            for (let i = 0; i < length; i++) {
                this.note.info.todos[i].txt = ''
            }
            this.urlToEdit = ''
        }
    },
    computed: {
        bgcColor() {
            return `background-color: ${this.note.style.backgroundColor};`
        },
    }
}