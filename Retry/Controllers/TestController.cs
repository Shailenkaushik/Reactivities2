using DotnetAPI.Data;
using DotnetAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace Retry.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{
     DataContextDapper _dapper;
     private readonly IConfiguration? _config;
    public TestController(IConfiguration config)
    {
        _dapper=new DataContextDapper(config);

        
    }

   [HttpPut("Upsert")]
   public IActionResult Upsert(Activity actupsert){
            
            string sql=@"EXEC ACTIVE_UPSERT 
            @ActId=' "+actupsert.ActId+
        " ',@Title='" + actupsert.Title+
        "',@Descript='"+actupsert.Descript+
        "',@Category='"+actupsert.Category+
        "',@City='"+actupsert.City+
        "',@Venue='"+actupsert.Venue+"'";

        if(_dapper.ExecuteSql(sql)){
            return Ok();
        }
        throw new Exception("Could not upsert");
           
   } 

   [HttpGet("GetsingleUsers/{userid}")]

   public Activity GetsingleUsers(int userid){
    string sql=@"SELECT [ActId],
        [EntryDate],
        [Title],
        [Descript],
        [Category],
        [City],
        [Venue] from RETRYSCHEMA.ACTIVITY where ActId="+@userid;
     return _dapper.LoadDataSingle<Activity>(sql);   
   }
   [HttpGet("GetUsers")]

   public IEnumerable<Activity> GetUsers(){
    string sql=@"SELECT [ActId],
        [EntryDate],
        [Title],
        [Descript],
        [Category],
        [City],
        [Venue] from RETRYSCHEMA.ACTIVITY";
     return _dapper.LoadData<Activity>(sql);   
   }

   [HttpDelete("DeleteUsers")]

   public bool DeleteUsers(int ActId){
    string sql=@"Delete from RETRYSCHEMA.ACTIVITY WHERE ACTID="+@ActId;
    
    return _dapper.ExecuteSql(sql);
   }

}
