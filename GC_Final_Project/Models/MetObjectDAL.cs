using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using static GC_Final_Project.Models.MetObject;

namespace GC_Final_Project.Models
{
    public class MetObjectDAL
    {
        private HttpClient GetHttpClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://collectionapi.metmuseum.org");
            return client;
        }

        //TODO: potential for returning entire object and have
        public async Task<MetObject.Rootobject> GetMetObjectById(int id)
        {
            var client = GetHttpClient();

            var response = await client.GetAsync($"/public/collection/v1/objects/{id}");

            var metObj = await response.Content.ReadAsAsync<MetObject.Rootobject>();

            return metObj;
        }

        //api/met/GetObjByMedium/{medium}
        public async Task<MediumList.Rootobject> GetMetObjsByMedium(string medium)
        {

            var client = GetHttpClient();
            //Shelley - changed the string - added &medium=(medium) to make the searching function work better.
            var response = await client.GetAsync($"/public/collection/v1/search?hasImages=true&q={medium}&isOnView=true&medium={medium}");

            var mediumList = await response.Content.ReadAsAsync<MediumList.Rootobject>();

            return mediumList;

        }


        //api/met/getObjById/{id}
        //public async Task<int> GetMetObjectById(int id)
        //{
        //    var client = GetHttpClient();

        //    var response = await client.GetAsync($"/public/collection/v1/objects/{id}");

        //    var metObj = await response.Content.ReadAsAsync<MetObject.Rootobject>();

        //    return metObj.objectID;
        //}


    }
}
