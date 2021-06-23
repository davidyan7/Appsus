

export default {
    props:['note'],
    components: {
        // keepDetails
    },
    template: `
    <section class="keep-preview">
        <div class="note-container">
        <button class="pin-keep-preview">📌</button>
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
}

};