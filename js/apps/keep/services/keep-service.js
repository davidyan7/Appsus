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
        type: "note-txt",
        isPinned: false,
        info: {
            title: 'okii',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: 'asd123jasda',
        type: "noteTxt",
        isPinned: false,
        info: {
            title: 'makore',
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: 'as123ja',
        type: "noteTxt",
        isPinned: true,
        info: {
            title: 'Next task',
            txt: "Make waze!"
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: 'as123j2a',
        type: "noteTxt",
        isPinned: false,
        info: {
            title: "Me playing Mi",
            txt: 'All day long'
        },
        style: {
            backgroundColor: "#fff"
        }
    },
    {
        id: 'as123sj2a',
        type: "noteImg",
        info: {
            url: "https://www.calmsage.com/wp-content/uploads/2020/05/what-is-4me-time-and-10-ways-to-enjoy-your-me-time2-.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 'as123j2a23',
        type: "noteTodo",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", isDone: false },
                { txt: "Do this", isDone: false }
            ]
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 'as2123j2a23',
        type: "noteVideo",
        info: {
            url: "https://www.youtube.com/embed/tgbNymZ7vqY",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#fff"
        }
    }
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

function updateNote(note) {
    return storageService.put(KEEP_KEY, note)
}

function removeNote(id) {
    return storageService.remove(KEEP_KEY, id)
}