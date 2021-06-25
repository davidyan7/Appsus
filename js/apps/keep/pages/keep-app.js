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
        <header class="keep-header">
            <h1>Appsus Keep</h1>
            <keep-filter @filter="setFilter"></keep-filter>
        </header>
        
        <keep-add @logNote="logNote" @openScreen="openScreen" :colors="colors"></keep-add>
        
        <keep-list v-if="notes" @done="editDone" @pinned="pinned" @deleteNote="deleteNote" :notes="notesToShow" @clicked="noteClicked"></keep-list>
       
        <keep-edit v-if="false" :note="clickedNote" @done="editDone" @deleteNote="deleteNote"></keep-edit>
        
        <div class="screen" :class="isOpen" @click="closeScreen"></div>
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
            filterBy: null,
            colors: ['#df4545', '#80df45', '#7c80f2', '#c865e1', '#2abaa6'],
            isScreenOpen: false,
            currNote: null,
            bgcColor: '#fff'
        }
    },
    methods: {
        loadNotes() {
            console.log('loading notes...');
            keepService.query()
                .then(notes => this.notes = notes)
        },
        logNote(note) {
            this.currNote = note
            
            console.log(note);
        },
        addNote() {
            console.log('adding note...');
            // console.log(note);
            keepService.addNewNote(this.currNote)
                .then(() => this.loadNotes())
        },
        editNote(note) {
            keepService.updateNote(note)
                .then(() => this.loadNotes())
                console.log('edit');
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
        closeScreen() {
            this.isScreenOpen = false
            console.log('closed');
            this.addNote()
        },
        openScreen() {
            this.isScreenOpen = true
        }
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
        isOpen() {
            var isOpen = this.isScreenOpen
            return { open: isOpen }
        }
    }
};