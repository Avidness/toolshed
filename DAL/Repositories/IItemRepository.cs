using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using ToolShed.Models.Domain;
using ToolShed.DAL.EFCore;

namespace ToolShed.DAL.Repositories
{
    public interface IItemRepository : IRepository<Item>
    {
    }
}