{
  // Spread And Rest Operator
  //Destructuring

  const bros1: string[] = ["bro1", "bro2", "bro3"];
  const bros2: string[] = ["bro4", "bro5", "bro6"];

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

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // rest Operator

  const greetFriends = (...friends: string[]) => {
    console.log(`Hi ${friends}  `);
    friends.forEach((friend: String) => console.log(`Hi ${friend}  `));
  };

  greetFriends("dlfj", "okay", "goog", "xvxc");
}
