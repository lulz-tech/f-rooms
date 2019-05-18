import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';

function insertLink(title, url) {
    Links.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (Links.find().count() === 0) {
        insertLink(
            'Lulz Tech Github Home',
            'https://github.com/lulz-tech/'
        );

        insertLink(
            'Follow the Alex',
            'https://github.com/AlexMubarakshin'
        );

        insertLink(
            'Follow the Dmitry',
            'https://github.com/dmitryyacenko'
        );
    }
});
