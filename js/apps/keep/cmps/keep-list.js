import keepPreview from "./keep-preview.js";

export default {
    props: ['notes'],
    components: {
        // keepDetails
        keepPreview
    },
    template: `
    <section class="keep-list">
        <ul v-for="note in notes">
            <li>
                <keep-preview :note="note" @click.native="log(note.id)"></keep-preview>
            </li>
        </ul>
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
            // console.log('bookId',noteId);
            this.$emit('clicked', noteId)
        }
    }

};