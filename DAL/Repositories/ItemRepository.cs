using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
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
        
        public async void Create(Item item)
        {
            item.LastModifiedAt = DateTime.UtcNow;
            item.CreatedAt = DateTime.UtcNow;
            await _db.Items.AddAsync(item);
            _db.SaveChanges();
        }

        public async void Update(Item item)
        {
            item.LastModifiedAt = DateTime.UtcNow;

            // TODO: use DTO's and automapping
            var existing_item = await Get(item.Id);
            existing_item.Label = item.Label;
            existing_item.Description = item.Description;

            _db.Items.Update(existing_item);
            await _db.SaveChangesAsync();
        }

        public async Task<IEnumerable<Item>> GetAll()
        {
            return await _db.Items.ToListAsync();
        } 

        public async Task<Item> Get(long id)
        {
            return await _db.Items.SingleAsync(d => d.Id == id);
        } 

        public async void Delete(long id)
        {
            var item = await Get(id);
            _db.Entry(item).State = EntityState.Deleted;
            _db.SaveChanges();
        }
    }
}