import colorPicker from "./color-picker.js"
export default {
    props: ['note', 'colors'],
    components: {
        colorPicker
    },
    template: `
    <section class="note-item todo" :style="'background-color:'+bgc">
    
        
        <div class="note-container">

            <div class="text-content">
                <ul>
                    <h3 v-if="note" class="title" contenteditable @blur="done(1, $event)">{{note.info.label}}</h3>
                    <li v-if="note" v-for='(todo, idx) in note.info.todos'>
                        <div class="todo-line">
                            <p class="txt" contentEditable :class="{crossed: todo.isDone}" @blur="done(idx, $event)">{{todo.txt}}</p><span class="todo-done" @click="markIsDone(idx)"></span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div class="buttons-container">
        <span class="keep-note-pin" @click.stop="pinned(note)"></span>
                <span class="delete-note" @click="deleteNote"></span>
        </div>
        <div class="color-picker-container">
            <color-picker :colors="colors" @colorChange="changeColor"></color-picker>
        </div>
    </section>
    `,
    created() {
    },
    data() {
        return {
            noteLabel: null
        }
    },
    methods: {
        markIsDone(idx) {
            // console.log(idx);
            // console.log(this.note.info.todos[idx].isDone);
            this.note.info.todos[idx].isDone = !this.note.info.todos[idx].isDone
            // console.log(note);
        },
        pinned(note) {
            // console.log(this.note);
            // note.isPinned = !note.isPinned
            // eventBus.$emit('pinned', note)
            this.$emit('pinned', note)
        },
        done(idx, ev) {
            // console.log(ev);
            if (ev.target.className.includes('title')) {
                // console.log('work');
                // console.log(this.note.label);
                this.note.info.label = ev.target.innerText;
            }
            if (ev.target.className.includes('txt')) {
                this.note.info.todos[idx].txt = ev.target.innerText;
            }
            // console.log(this.note);
            this.$emit('done', this.note)
        },
        deleteNote() {
            this.$emit('deleteNote', this.note)
        },
        changeColor(color) {
            this.note.style.backgroundColor = color
            this.$emit('done', this.note)
        }
    },
    computed: {
        bgc() {
            return this.note.style.backgroundColor
        },
    }
}
