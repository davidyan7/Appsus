import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['note'],
    components: {
        // keepDetails

    },
    template: `
    <section class="note-item txt" :style="'background-color:'+bgc">
        <button class="keep-note-pin" @click.stop="pinned(note)">📌</button>
        <div class="note-container">
            <div class="text-content">
                <h3 class="title" contenteditable @blur="done">{{this.note.info.title}}</h3>
                <p class="txt" contenteditable @blur="done">{{this.note.info.txt}}</p>
            </div>
        </div>    
            <button class="delete-note" @click="deleteNote">Delete</button>
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