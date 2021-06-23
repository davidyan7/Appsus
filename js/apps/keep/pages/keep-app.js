import keepList from "../cmps/keep-list.js";
import keepAdd from "../cmps/keep-add.js";
import { keepService } from "../services/keep-service.js";
import keepEdit from "../cmps/keep-edit.js"

export default {
    components: {
        keepList,
        keepAdd,
        keepEdit
    },
    template: `
    <section class="keep-app">
        <h1>Keep-App</h1>
        <keep-add @logNote="addNote"></keep-add>

        <keep-list v-if="notes" :notes="notes" @clicked="noteClicked"></keep-list>
        <nav class="nav-bar">
            <!-- <router-link to="/" active-class="active-link" exact>Home</router-link> |
            <router-link to="/mail" >Mail</router-link> |
            <router-link to="/keep" >Keep</router-link>  -->
        </nav>
        <keep-edit v-if="clickedNote" :note="clickedNote" @done="editDone"></keep-edit>
    </section>
    `,
    created() {
        this.loadNotes()
    },
    data() {
        return {
            notes:null,
            clickedNote: null
        }
    },
    methods: {
        loadNotes() {
            console.log('loading notes...');
             keepService.query()
            .then(notes => this.notes = notes)
        },
        addNote(note){
            console.log('adding note...');
            // console.log(note);
            keepService.addNewNote(note)
            .then(()=>this.loadNotes())
        },
        editNote(note) {
                keepService.updateNote(note)
                .then(()=>this.loadNotes())
        },
        noteClicked(id) {
            console.log('getting note...',id);
            keepService.getNoteById(id)
            .then(note => this.clickedNote = note)
        },
        editDone(note) {
            this.clickedNote = null
            this.editNote(note)
        }
    }
};