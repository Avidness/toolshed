using System;
using System.Collections.Generic;

namespace ToolShed.DAL.Repositories
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll(); 
        T Get(long id); 
        void Save(T entity); 
        void Delete(long id); 
        void Update(T entity); 
    }
}