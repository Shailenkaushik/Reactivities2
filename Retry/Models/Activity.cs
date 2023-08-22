namespace DotnetAPI.Models{
public partial class Activity{

        public int ActId  {get; set;}
    public DateTime EntryDate  {get; set;}

    public string Title  {get; set;}
    public string Descript  {get; set;}
    public string Category  {get; set;}
    public string City  {get; set;}
    public string Venue  {get; set;} 
      
    public Activity(){
          
        if(Title==null){
            Title="";
          }
         if(Category==null){
            Category="";
          }
          if(City==null){
            City="";
          }
          if(Venue==null){
            Venue="";
          }
          if(Descript==null){
            Descript="";
          }
    }
       

}
}