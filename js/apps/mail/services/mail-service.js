import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


var mailsJson = [
    { to: 'sahar', id: 101, subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1624454539845 },
    { to: 'liran', subject: 'aaaaa', body: 'aaaaa!', isRead: false, sentAt: 1624455534845 },
    { to: 'adi', subject: 'bbbbb', body: 'bbbbb!', isRead: false, sentAt: 1624445539545 },
    { to: 'adam', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1624854539845 },
    { to: 'arik', subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1624654531845 },
]
const MAIL_KEY = 'mails';
const gMails = _createMails();

export const mailService = {
    query,
    remove,
    getById,
    addMail,
    saveMail,
    readChosen
    // saveReview,
    // removeReview,
    // searchTxt,
    // addBook,
    // fixGoogleBook,
    // getNextmailId

};



function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY);
    if (!mails || !mails.length) {
        mails = mailsJson;

        utilService.saveToStorage(MAIL_KEY, mails);
    }
    return mails;
}

function query() {
    return storageService.query(MAIL_KEY);
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function getById(mailId) {
    return storageService.get(MAIL_KEY, mailId);
}

function addMail(mail) {
    return storageService.post(MAIL_KEY, mail)

}

function saveMail(mail) {
    mail.isRead = true
    return storageService.put(MAIL_KEY, mail)

}

function readChosen(mail) {
    mail.isRead = !mail.isRead
    return storageService.put(MAIL_KEY, mail)

}


// function getNextmailId(mailId) {
//     return query()
//         .then(books => {
//             const idx = books.findIndex(book => book.id === mailId)
//             return (idx === books.length - 1) ? books[0].id : books[idx + 1].id
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



// function searchTxt(txt) {
//     return axiosService.ask(txt)
// }