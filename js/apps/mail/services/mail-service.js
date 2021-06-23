import { utilService } from './util-service.js';
import { storageService } from './async-storage-service.js';


var mailsJson = [
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { subject: 'aaaaa', body: 'aaaaa!', isRead: false, sentAt: 1551133930594 },
    { subject: 'bbbbb', body: 'bbbbb!', isRead: false, sentAt: 1552133930294 },
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551153930594 },
    { subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551134930594 },
]
const MAIL_KEY = 'mails';
const gMails = _createMails();

export const bookService = {
    query,
    remove,
    getById,
    saveReview,
    removeReview,
    searchTxt,
    addBook,
    fixGoogleBook,
    getNextmailId

};

function query() {
    return storageService.query(MAIL_KEY);
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function getById(mailId) {
    return storageService.get(MAIL_KEY, mailId);
}

// function getNextmailId(mailId) {
//     return query()
//         .then(books => {
//             const idx = books.findIndex(book => book.id === mailId)
//             return (idx === books.length - 1) ? books[0].id : books[idx + 1].id
//         })
// }

// function saveReview(review, mailId) {
//     return getById(mailId)
//         .then(book => {
//             if (!book.reviews) book.reviews = []
//             book.reviews.push(review)
//             return storageService.put(MAIL_KEY, book)
//         })
// }


// function removeReview(reviewId, mailId) {
//     return getById(mailId)
//         .then(book => {
//             const reviewCurrId = book.reviews.findIndex(review => review.id === reviewId)
//             book.reviews.splice(reviewCurrId, 1)
//             return storageService.put(MAIL_KEY, book)
//         })

// }

// function addBook(book) {
//     const currBook = fixGoogleBook(book)
//     storageService.post(MAIL_KEY, currBook)

// }

// function searchTxt(txt) {
//     return axiosService.ask(txt)
// }








function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        mails = mailsJson;

        utilService.saveToStorage(MAIL_KEY, mails);
    }
    return mails;
}