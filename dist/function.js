"use strict";
{
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(5, 2));
    const addArrow = (num1, num2) => num1 + num2;
    //Object ==> function ==> method
    const poorUser = {
        name: "Shariar",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        },
    };
    const arr = [1, 4, 10];
    const newArr = arr.map((elem) => elem * elem);
}
