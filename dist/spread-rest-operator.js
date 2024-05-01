"use strict";
{
    // Spread And Rest Operator
    //Destructuring
    const bros1 = ["bro1", "bro2", "bro3"];
    const bros2 = ["bro4", "bro5", "bro6"];
    console.log(bros1.push(...bros2));
    const mentors1 = {
        typeScript: "Mezba",
        redux: "Mir",
        dbms: "Mir",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // rest Operator
    const greetFriends = (...friends) => {
        console.log(`Hi ${friends}  `);
        friends.forEach((friend) => console.log(`Hi ${friend}  `));
    };
    greetFriends("dlfj", "okay", "goog", "xvxc");
}
