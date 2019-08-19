export class Batch {

    batchId:number=1;
    No_Of_Students:number=26;
    traine_name:string="sampradan";
     TraineForBatch()
    {
        console.log("Trainee name displays by getting from database");
    }
     BatchPoints()
    {
        console.log("based on batchid retrieve the points from db and displayed");
    }
     Display()
    {
        console.log("displaying batch based on batchid given:")
        
    }
  CourseRunning()
    {
        return "displays which course is running for which batch based on id and trainee name from database";
    }
 
}
