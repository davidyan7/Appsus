import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['note'],
    components: {
        // keepDetails
        
    },
    template: `
    <section class="keep-preview">
        <div class="note-container">
        <button class="pin-keep-preview" @click.stop="pinned(note)">📌</button>
            <!-- {{note.info.txt}} -->
            <textarea v-model="note.info.txt" disabled></textarea>
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
        }
    }

};