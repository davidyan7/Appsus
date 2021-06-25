export default {
    props: ['note'],
    template: `
    <section class="note-item video">
        <button class="keep-note-pin" @click.stop="pinned(note)">📌</button>
        <div class="note-container">
        <!-- <iframe width="100%"  src="https://www.youtube.com/watch?v=wq59OYh1mtc">
        </iframe> -->
        <iframe width="100%" height="220" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>

            <div class="text-content">
                <h3 class="title" contenteditable @blur="done">{{this.note.info.title}}</h3>
            </div>
        </div>    
            <button class="delete-note" @click="deleteNote">Delete</button>
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
    },
}