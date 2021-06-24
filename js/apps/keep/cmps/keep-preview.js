import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['note'],
    components: {
        // keepDetails
        
    },
    template: `
    <section class="keep-preview" :style="'background-color:'+bgc">
        <div class="note-container">
        <button class="pin-keep-preview" @click.stop="pinned(note)">📌</button>
            <!-- {{note.info.txt}} -->
            <!-- <p>{{fullText}}</p> -->
            <!-- <div>{{note.info.txt}}</div> -->
            <textarea v-model="fullText" :style="'background-color:'+bgc" disabled></textarea> 

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
    },
    computed: {
        bgc() {
            return this.note.style.backgroundColor
        },
        fullText() {
            return this.note.info.title +'\n' +this.note.info.txt
        }
    }
};