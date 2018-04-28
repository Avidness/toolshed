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
        public Task<IEnumerable<Item>> GetAll()
        {
            return _items.GetAll();
        }

        [HttpGet("{id}", Name = "GetItems")]
        public IActionResult GetById(int id)
        {
            var item = _items.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromForm] Item item)
        {
            if (item == null)
                return BadRequest();

            item.CreatedAt = DateTime.UtcNow;
            _items.Create(item);
            return new ObjectResult(item.Id);
        }
        
        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromForm] Item item)
        {
            Console.WriteLine("update");
            if (item == null || item.Id != id)
                return BadRequest();

            _items.Update(item);
            Console.WriteLine(item.Id);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            _items.Delete(id);
            return new NoContentResult();
        }
    }
}
