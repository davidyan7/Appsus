// import { eventBus } from "../../../services/event-bus-service.js";

export default {
    // props: ['note'],
    components: {
        // keepDetails

    },
    template: `
    <section class="todo-comp" >
        <ul>
            <p>{{note.info.label}}</p>
            <li v-if="note" v-for='todo in note.info.todos'>
                <p>{{todo.txt}}</p>
            </li>
        </ul>
    </section>
    `,
    created() {
    },
    data() {
        return {
            note: {
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
        }
    },
};