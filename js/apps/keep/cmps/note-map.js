// import { eventBus } from "../../../services/event-bus-service.js";
import { mapService } from "../services/map.service.js";

export default {
    props: ['note'],
    components: {},
    template: `
    <section class="note-item map" >
        <button class="keep-note-pin" @click.stop="pinned(note)">📌</button>
        <div id="map" class="note-container">
            <ul >
                <div  class="map-container">
                    
                </div>
            </ul>

            <div class="text-content">
                <h3 class="title" contenteditable @blur="done">{{this.note.info.title}}</h3>
            </div>
        </div>
        <button class="delete-note" @click="deleteNote">Delete</button>
    </section>
    `,
    created() {
        mapService.initMap()
    },

    data() {
        return {}
    },
    methods: {
        pinned(note) {
            // console.log(this.note);
            // note.isPinned = !note.isPinned
            // eventBus.$emit('pinned', note)
            this.$emit('pinned', note)
        },
        done(ev) {
            if (ev.target.className.includes('title')) {
                this.note.info.title = ev.target.innerText;
            }
            if (ev.target.className.includes('txt')) {
                this.note.info.txt = ev.target.innerText;
            }
            this.$emit('done', this.note)
        },
        deleteNote() {
            this.$emit('deleteNote', this.note)
        },
    },
};