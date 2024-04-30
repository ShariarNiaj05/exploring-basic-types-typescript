{
    
    
    function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(5, 2));

const addArrow = (num1: number, num2: number): number => num1 + num2;

//Object ==> function ==> method

const poorUser = {
  name: "Shariar",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 4, 10];
    const newArr: number[] = arr.map((elem: number): number => elem * elem);
    

    
}