import keepPreview from "./keep-preview.js";

export default {
    props: ['notes'],
    components: {
        // keepDetails
        keepPreview
    },
    template: `
    <section class="keep-list" >
    <h1>Pinned</h1>
    <div >
    <ul class="pinned">
        <li v-if="note.isPinned" v-for="note in notes">
            <keep-preview  :note="note" @pinned="pinned" @click.native="log(note.id)"></keep-preview>
        </li>
    </ul>
    </div>
    <h1>Not Pinned</h1>
    <hr/>
    <div >
        <ul class="others">
            <li v-if="!note.isPinned" v-for="note in notes">
                <keep-preview :note="note" @pinned="pinned" @click.native="log(note.id)" ></keep-preview>
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