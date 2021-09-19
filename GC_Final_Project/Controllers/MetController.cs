using GC_Final_Project.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GC_Final_Project.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MetController : ControllerBase
    {
        private readonly MetObjectDAL _metObjectDAL = new MetObjectDAL();

        [HttpGet("getObjById/{id}")] //TODO: need / at beginning?
        public async Task<ActionResult<MetObject.Rootobject>> IndexAsync(int id) //TODO: remove ActionResult?
        //Akii: public async Task<MetObject.Rootobject> IndexAsync(int id)
        {
            var metObj = await _metObjectDAL.GetMetObjectById(id);

            return metObj;
        }

        [HttpGet("GetObjByMedium/{medium}")]
        //public async Task<MediumList.Rootobject> GetObjByMedium(string medium) TODO: changed to public async Task<MetObject> GetObjsByMedium(string medium)
        public async Task<MediumList.Rootobject> GetObjsByMedium(string medium)
        {
            var list = await _metObjectDAL.GetMetObjsByMedium(medium);

            return list; //TODO: TypeSpecific error
        }

        //[HttpGet("likes/{visitor}")]
        //public IEnumerable<TheLike> GetLikes(Visitor visitor)
        //{
        //    var list = _metObjectDAL.GetLikes(visitor);

        //    return list;
        //}
    }
}
