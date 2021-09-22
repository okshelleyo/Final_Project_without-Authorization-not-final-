using GC_Final_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GC_Final_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikesController : Controller
    {
        private readonly MappsterpiecesDBContext _context;
        public LikesController(MappsterpiecesDBContext context)
        {
            _context = context;
        }

        //UPDATE: api/likes/update/{entryId}
        [HttpPut("{entryId}")]
        public async Task<ActionResult> UpdateLike() {

        }

        //DELETE: api/likes/delete/{entryId}
        [HttpDelete("delete/{entryId}")]
        public async Task<ActionResult> DeleteLike(int entryId)
        {
            var like = await _context.TheLikes.FindAsync(entryId);
            if (like == null)
            {
                return NotFound();
            }
            else
            {
                _context.TheLikes.Remove(like);
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }


        ////api/met/likes/{user}
        [HttpGet("getLikes")]
        public async Task<ActionResult<List<TheLikes>>> GetAllLikes()
        {
            var likes = await _context.TheLikes.ToListAsync();
            return likes;

        }

        [HttpPost("NewLike")]
        public async Task<ActionResult<TheLikes>> AddLike(MetObject.Rootobject mObj)
        {
            var newLike = new TheLikes();

            newLike.ObjectId = mObj.objectID;
            newLike.Department = mObj.department;
            newLike.title = mObj.title;
            newLike.artistDisplayName = mObj.artistDisplayName;
            newLike.primaryImage = mObj.primaryImage;
            newLike.artistDisplayBio = mObj.artistDisplayBio;
            newLike.medium = mObj.medium;
            newLike.objectDate = mObj.objectDate;

            _context.TheLikes.Add(newLike);
            await _context.SaveChangesAsync();
            //return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
            return Ok(newLike);
        }


        //[HttpDelete("{ObjectId}")]
        //public async Task<ActionResult> DeleteLikes(int EntryId)
        //{
        //    TheLikes theLike = _context.TheLikes.Where(x => x.EntryId == EntryId).FirstOrDefault();

        //    if (theLike is object)
        //    {
        //        _context.TheLikes.Remove(theLike);



        //        await _context.SaveChangesAsync();
        //        return NoContent();

        //    }
        //    return NotFound();

        //}



    }



}

