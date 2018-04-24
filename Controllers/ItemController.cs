using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToolShed.DAL.Repositories;
using ToolShed.Models.Domain;

namespace ToolShed.Controllers
{
    [Route("api/[controller]")]
    public class ItemController : Controller
    {
        public IItemRepository _items;

        public ItemController(IItemRepository items)
        {
            _items = items;
        }
        
        [HttpGet]
        public void GetAll()
        {
        }
    }
}
