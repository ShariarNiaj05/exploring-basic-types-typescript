"use strict";
{
    // destructuring
    const user = {
        id: 345,
        name: {
            firstName: "Shariar",
            middleName: "Islam",
            lastName: "Niaj",
        },
        contactNo: "0170000000",
        address: "Uganda",
    };
    const { contactNo, name: { middleName }, } = user;
}
// array destructuring
const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
const [, , bestFriend, ...rest] = myFriends;
