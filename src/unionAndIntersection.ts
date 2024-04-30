{
  // union types

  type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
  type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

   type Developer = FrontendDeveloper | FullstackDeveloper

  const newDeveloper : FrontendDeveloper = 'juniorDeveloper'

  type User ={
    name: string;
    email?: string;
    gender:"male"| "female";
    bloodGroup:"O+"|"A+"|"AB+"
  }

  const user1: User ={
    name:'persian',
    gender:'male',
    bloodGroup:'O+'
  }



//   Intersection Types
  type FrontendDeveloper1 = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper1 = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper1 = FrontendDeveloper & BackendDeveloper1;

  const fullstackDeveloper1: FullstackDeveloper1 = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

}