import { eventBus } from "../../../services/event-bus-service.js";
import colorPicker from "./color-picker.js"
export default {
    props: ['note', 'colors'],
    components: {
        colorPicker
    },
    template: `
    <section class="note-item txt" :style="'background-color:'+bgc">
        <span class="keep-note-pin" @click.stop="pinned(note)"></span>        

        <div class="note-container">
            <div class="text-content">
                <h3 class="title" contenteditable @blur="done">{{this.note.info.title}}</h3>
                <p class="txt" contenteditable @blur="done">{{this.note.info.txt}}</p>
            </div>
        </div>    
        <div class="buttons-container">
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
        }
    },
    methods: {
        pinned(note) {
            // console.log(this.note);
            // note.isPinned = !note.isPinned
            // eventBus.$emit('pinned', note)
            this.$emit('pinned', note)
        },
        done(ev){
            if (ev.target.className.includes('title')) {
                this.note.info.title = ev.target.innerText;
            }
            if (ev.target.className.includes('txt')) {
                this.note.info.txt = ev.target.innerText;
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
        fullText() {
            return this.note.info.title + '\n' + this.note.info.txt
        }
    }
};