using System;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace ToolShed.DAL.Repositories
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAll(); 
        Task<T> Get(long id); 
        void Create(T entity); 
        void Delete(long id); 
        void Update(T entity); 
    }
}