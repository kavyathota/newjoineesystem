export class Emp {

 studentid:number=1234;
     name:string="kavya";
     salary:number=50000;
 skills:any[]=["c","java","c++","javascript"];
     idproof:string="jshejjfeffr";

 enroll(coursename:string)
    {
       return "enrolling courses";
    }
     trainerallocation()
    {
        console.log("trainer namewho is allocated");
    }
 submitIDproofs(idproof:string)
    {
        return "done if the id proofs are submitted";
    }
}
