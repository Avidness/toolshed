using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using ToolShed.Models.Domain;

namespace ToolShed.DAL.EFCore
{
    public class MainContext : DbContext
    {
        public MainContext(DbContextOptions<MainContext> options) : base(options)
        { }

        public DbSet<Item> Items { get; set; }
    }
}