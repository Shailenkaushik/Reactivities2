
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace API
{
    // [ApiController]
    // [Route("[controller]")]
    public class ActivityController : ControllerBase
    {
        private readonly DataContextDapper _dapper;
        private readonly IConfiguration _config;

        public ActivityController(DataContextDapper dapper, IConfiguration config)
        {
            _dapper = dapper;
            _config = config;
        }

        [HttpGet("TestConnection")]
        public DateTime TestConnection()
        {
            return _dapper.LoadDataSingle<DateTime>("Select GetDate()");
        }
    }
}
