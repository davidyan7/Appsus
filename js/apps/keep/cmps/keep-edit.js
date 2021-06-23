
export default {
    props:['note'],
    components: {
    },
    template: `
    <section class="keep-edit">
        <button class="edit-exit-btn" @click="close">X</button>
        <textarea name="" id=""  v-model="note.info.txt" ></textarea>
        <button class="edit-remove-btn" @click="deleteNote">delete</button>
        <!-- <button class="edit-remove-btn" @click="delete">delete</button> -->
    </section >
    `,
    created() {
        // this.currNote 
    },
    data() {
        return {
            // currNote: this.note
        }
    },
    methods: {
        close() {
            this.$emit('done', this.note)
        },
        deleteNote() {
            this.$emit('deleteNote', this.note)
        }
    },
};