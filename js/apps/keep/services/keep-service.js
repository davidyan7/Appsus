import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';

export const keepService = {
    query,
    addNewNote,
    getNoteById,
    updateNote,
    removeNote
}

const KEEP_KEY = 'notes'

var noteJson = [
    {
        id: 'asd123ja',
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        },
        isEdit: false
    },
    {
        id: 'asd123jasda',
        type: "NoteTxt",
        isPinned: false,
        info: {
            txt: "Fullstack Me Baby!"
        },
        isEdit: false,
    },
    {
        id: 'as123ja',
        type: "NoteTxt",
        isPinned: true,
        info: {
            txt: "Make waze!"
        },
        isEdit: false,
    },
    // {
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // },
    // {
    //     type: "NoteTodos",
    //     info: {
    //         label: "How was it:",
    //         todos: [
    //             { txt: "Do that", doneAt: null },
    //             { txt: "Do this", doneAt: 187111111 }
    //         ]
    //     }
    // }
];

createNotes()
function createNotes() {
    let notes = utilService.loadFromStorage(KEEP_KEY);
    if (!notes || !notes.length) {
        notes = noteJson;

        utilService.saveToStorage(KEEP_KEY, notes);
        console.log('service', notes);
    }
    return notes;
}

function query() {
    return storageService.query(KEEP_KEY);
}

function addNewNote(note) {
    return storageService.post(KEEP_KEY, note)
}

function getNoteById(id) {
    return storageService.get(KEEP_KEY, id)
}

function updateNote(book) {
    return storageService.put(KEEP_KEY, book)
}

function removeNote(id) {
    return storageService.remove(KEEP_KEY, id)
}