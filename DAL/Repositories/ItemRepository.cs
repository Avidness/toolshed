using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using ToolShed.Models.Domain;
using ToolShed.DAL.EFCore;

namespace ToolShed.DAL.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly MainContext _db;

        public ItemRepository(MainContext db)
        {
            _db = db;
        }
        
        public void Save(Item item)
        {
            _db.Items.Add(item);
            _db.SaveChanges();
        }

        public IEnumerable<Item> GetAll()
        {
           // return _db.Items.ToListAsync();
           return new List<Item>();
        } 

        public Item Get(long id)
        {
            //return _db.Items.
             //   .Single(b => b.id == 1);
            throw new NotImplementedException();
        } 

        public void Delete(long id)
        {

        }

        public void Update(Item item)
        {

        }
    }
}