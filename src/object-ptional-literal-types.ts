{
  
  
  // Reference Type ==> Object
const user: {
  firstName: string;
  middleName: string;
  lastName?: string; //Optional Types
  readonly companyName: "Programming Hero"; //Literal Types
} = {
  firstName: "Shariar",
  middleName: "Islam",
  lastName: "Niaj",
  companyName: "Programming Hero",
  };
  
/* user.companyName = "xyz" //Cannot assign to 'companyName' because it is a read-only property.ts */

}