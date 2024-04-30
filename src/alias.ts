{
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Shariar",
    age: 5,
    gender: "male",
    contactNo: "46554646",
    address: "564654654",
  };
}

type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
