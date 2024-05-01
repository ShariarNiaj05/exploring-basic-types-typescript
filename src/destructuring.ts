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

  const {
    contactNo,  //contactNo :number => it's not a type. This is contactNo rename as number
    name: { middleName },
  } = user;
}

// array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];

const [, , bestFriend, ...rest] = myFriends;
