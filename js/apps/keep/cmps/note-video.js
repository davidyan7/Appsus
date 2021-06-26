import colorPicker from "./color-picker.js"
export default {
    props: ['note', 'colors'],
    components: {
        colorPicker
    },
    template: `
    <section class="note-item video" :style="'background-color:'+bgc">
        <button class="keep-note-pin" @click.stop="pinned(note)">📌</button>
        <div class="note-container">
        <!-- <iframe width="100%"  src="https://www.youtube.com/watch?v=wq59OYh1mtc">
        </iframe> -->
        <iframe width="100%" height="220" :src="note.info.url">
        </iframe>

            <div class="text-content">
                <h3 class="title" contenteditable @blur="done">{{this.note.info.title}}</h3>
            </div>
        </div>    
            <button class="delete-note" @click="deleteNote">Delete</button>
            <color-picker class="color-picker-in-comp" :colors="colors" @colorChange="changeColor"></color-picker>
    </section>
    `,
    data() {
        return {
        }
    },

    methods: {
        pinned(note) {
            this.$emit('pinned', note)
        },
        done(ev) {
            if (ev.target.className.includes('title')) {
                this.note.info.title = ev.target.innerText;
            }
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