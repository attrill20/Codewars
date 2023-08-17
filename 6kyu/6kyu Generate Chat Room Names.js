/* You are writing a chat room app. Users have fed back that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

If only one person in the chat room has a specific first name, only their first name will be written out.

John Smith -> John

If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

John Smith -> John S
John Adams -> John A

Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

John Smith -> John Smith
John Simms -> John Simms

To help tidy up the output, management have also asked that the chat room list should be alphebetised, by the users screen names and should all be in Title Case.

JOHN smith -> John Smith*/

function generateChatRoomNames(names) {
    // Convert a name to Title Case
    function toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // Convert full names to user objects
    const userObjects = names.map(fullName => {
        const [firstName, lastName] = fullName.split(' ');
        return { firstName, lastName };
    });

    // Generate chat room names based on the rules
    const chatRoomNames = [];
    for (const user of userObjects) {
        let chatRoomName = toTitleCase(user.firstName);

        const sameFirstNameUsers = userObjects.filter(u => u.firstName === user.firstName);

        if (sameFirstNameUsers.length > 1) {
            const sameInitialUsers = sameFirstNameUsers.filter(u => u.lastName.charAt(0).toUpperCase() === user.lastName.charAt(0).toUpperCase());

            if (sameInitialUsers.length > 1) {
                chatRoomName = toTitleCase(`${user.firstName} ${user.lastName}`);
            } else {
                chatRoomName += ` ${user.lastName.charAt(0).toUpperCase()}`;
            }
        }

        chatRoomNames.push(chatRoomName);
    }

    // Alphabetically sort the chat room names
    chatRoomNames.sort();

    return chatRoomNames;
}

// feel like this should have worked, but errors with the kata on CW I think