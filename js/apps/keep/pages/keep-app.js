import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
import keepEdit from "../cmps/keep-edit.js"
import keepFilter from "../cmps/keep-filter.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    components: {
        keepList,
        keepAdd,
        keepEdit,
        keepFilter
    },
    template: `
    <section class="keep-app">
        <h1>Keep-App</h1>
        <keep-filter @filter="setFilter"></keep-filter>
        <keep-add @logNote="addNote"></keep-add>
        
        <keep-list v-if="notes" @pinned="pinned" :notes="notesToShow" @clicked="noteClicked"></keep-list>
        <nav class="nav-bar">
            <!-- <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link>  -->
        </nav>
        <keep-edit v-if="clickedNote" :note="clickedNote" @done="editDone" @deleteNote="deleteNote"></keep-edit>
    </section>
    `,
    created() {
        this.loadNotes()
        // eventBus.$on('pinned', this.pinned())
    },

    data() {
        return {
            notes: null,
            clickedNote: null,
            filterBy: null
        }
    },
    methods: {
        loadNotes() {
            console.log('loading notes...');
            keepService.query()
                .then(notes => this.notes = notes)
        },
        addNote(note) {
            console.log('adding note...');
            // console.log(note);
            keepService.addNewNote(note)
                .then(() => this.loadNotes())
        },
        editNote(note) {
            keepService.updateNote(note)
                .then(() => this.loadNotes())
        },
        noteClicked(id) {
            console.log('getting note...', id);
            keepService.getNoteById(id)
                .then(note => this.clickedNote = note)
        },
        editDone(note) {
            this.clickedNote = null
            this.editNote(note)
        },
        deleteNote(note) {
            console.log('deleting...');
            this.clickedNote = null
            keepService.removeNote(note.id)
                .then(() => this.loadNotes())
        },
        pinned(note) {
            note.isPinned = !note.isPinned
            this.editNote(note)
        },

        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy;
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes
            // var searchMin = this.filterBy.fromPrice
            // var searchMax = this.filterBy.toPrice
            const searchStr = this.filterBy.title.toLowerCase();
            // if (searchMin === '') searchMin = 0
            // if (searchMax === '') searchMax = Infinity
            // var notesToShow;


            var notesToShow = this.notes.filter(note => {
                if (note.info.txt && note.info.txt !== '') {
                    return note.info.txt.toLowerCase().includes(searchStr)
                }
                if (note.info.title && note.info.title !== '') {
                    return note.info.title.toLowerCase().includes(searchStr)
                }
                if (note.info.label && note.info.label !== '') {
                    return note.info.label.toLowerCase().includes(searchStr)
                }
            })
            return notesToShow
        },
    }
};