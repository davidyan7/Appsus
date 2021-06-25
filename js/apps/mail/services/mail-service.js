import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


var mailsJson = [
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'sahar', id: 101, subject: 'i need your help', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: true, sentAt: 1624454531845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'liran', id: 102, subject: 'I like vue', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624454539845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'adam', id: 103, subject: 'Football today', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624454539845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'arik', id: 104, subject: 'How are you?', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624458539845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'david', id: 105, subject: 'Football today', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624454539845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'or', id: 106, subject: 'How are you?', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624454599845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'adi', id: 107, subject: 'Football today', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: true, sentAt: 1624454539845 },
    { imgUrl: 'http://arenastar.co.il/ashdod/wp-content/uploads/sites/5/2019/08/%D7%90%D7%95%D7%92%D7%95%D7%A1%D7%98-%D7%A9%D7%9C-%D7%9E%D7%91%D7%A6%D7%A2%D7%99%D7%9D-%D7%90%D7%A9%D7%93%D7%95%D7%931.jpg', to: 'nati', id: 108, subject: 'How are you?', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', isRead: false, isStarred: false, sentAt: 1624454539845 },

]
const MAIL_KEY = 'mails';
const gMails = _createMails();

export const mailService = {
    query,
    remove,
    getById,
    addMail,
    saveMail,
    readChosen,
    mailStarred,
    dateSort,
    titleSort
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

function mailStarred(mail) {
    mail.isStarred = !mail.isStarred
    return storageService.put(MAIL_KEY, mail)
}

function dateSort(mails) {
    mails.sort(function(a, b) {
        return a.sentAt - b.sentAt;
    });
    return storageService.replaceEntities(MAIL_KEY, mails)
}

function titleSort(mails) {
    mails.sort(function(a, b) {
        var nameA = a.subject.toUpperCase(); // ignore upper and lowercase
        var nameB = b.subject.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return storageService.replaceEntities(MAIL_KEY, mails)
}


// function getNextmailId(mailId) {
//     return query()
//         .then(books => {
//             const idx = books.findIndex(book => book.id === mailId)
//             return (idx === books.length - 1) ? books[0].id : books[idx + 1].id
//         })
// }