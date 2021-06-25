import noteTxt from "./note-txt.js";
import noteTodo from "./note-todo.js";
import noteImg from "./note-img.js";
import noteVideo from "./note-video.js"

export default {
    props: ['notes'],
    components: {
        // keepDetails
        noteTxt,
        noteTodo,
        noteImg,
        noteVideo
    },
    template: `
    <section class="keep-list" >
        <h1>Pinned</h1>
    <div class="pinned">
        <section v-if="note.isPinned" v-for="note in notes">
            <component  :is="note.type" :note="note" @pinned="pinned" @done="done" @deleteNote="deleteNote" @click.native="log(note.id)"></component>
        </section>
    </div>
        <h1>Others</h1>
        <hr/>
    <div class="others">
            <section  v-if="!note.isPinned" v-for="note in notes">
                <component :is="note.type" :note="note" @pinned="pinned" @done="done" @deleteNote="deleteNote" @click.native="log(note.id)"></component>
            </section>
    </div>
    </section>
    `,
    created() {

    },
    data() {
        return {}
    },
    methods: {
        done(note) {
            this.$emit('done', note)
        },
        log(noteId) {
            this.$emit('clicked', noteId)
        },
        pinned(note) {
            this.$emit('pinned', note)
        },
        deleteNote(note) {
            this.$emit('deleteNote', note)
        }

    }

};