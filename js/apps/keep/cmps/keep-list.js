import keepPreview from "./keep-preview.js";

export default {
    props: ['notes'],
    components: {
        // keepDetails
        keepPreview
    },
    template: `
    <section >
    <h1>Pinned</h1>
    <div class="keep-list">
    <ul  v-for="note in notes">
        <li>
            <keep-preview v-if="note.isPinned" :note="note" @pinned="pinned" @click.native="log(note.id)"></keep-preview>
        </li>
    </ul>
    </div>
    <h1>Not Pinned</h1>
    <hr/>
    <div class="keep-list">
        <ul v-for="note in notes">
            <li>
                <keep-preview  v-if="!note.isPinned" :note="note" @pinned="pinned" @click.native="log(note.id)" ></keep-preview>
            </li>
        </ul>
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