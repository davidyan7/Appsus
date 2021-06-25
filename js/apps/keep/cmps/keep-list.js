import keepPreview from "./keep-preview.js";
import todoComp from "./todo-comp.js";
import imgComp from "./img-comp.js";

export default {
    props: ['notes'],
    components: {
        // keepDetails
        keepPreview,
        todoComp,
        imgComp
    },
    template: `
    <section class="keep-list" >
        <h1>Pinned</h1>
    <div class="pinned">
        <section v-if="note.isPinned" v-for="note in notes">
            <keep-preview  :note="note" @pinned="pinned" @click.native="log(note.id)"></keep-preview>
        </section>
    </div>
        <h1>Others</h1>
        <hr/>
    <div class="others">
            <section class="note-item" v-if="!note.isPinned" v-for="note in notes">
                <keep-preview :note="note" @pinned="pinned" @click.native="log(note.id)" ></keep-preview>
            </section>
        <todo-comp></todo-comp>
        <img-comp></img-comp>
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
        log(noteId) {
            this.$emit('clicked', noteId)
        },
        pinned(note) {
            this.$emit('pinned', note)
        }
    }

};