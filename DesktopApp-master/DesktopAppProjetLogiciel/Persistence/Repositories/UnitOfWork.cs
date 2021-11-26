using DesktopAppProjetLogiciel.Persistence.Contexts;
using DesktopAppProjetLogiciel.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DesktopAppProjetLogiciel.Persistence.Repositories
{
    public class UnitOfWork : BaseRepository, IUnitOfWork
    {
        public UnitOfWork(AppDbContext dbContext):base(dbContext)
        {
        }
        /// <summary>
        /// This method saves data into db
        /// </summary>
        /// <returns>Task to check method status because it is asynchronous</returns>
        async Task IUnitOfWork.CompleteAsync()
        {
            await _dbContext.SaveChangesAsync();
        }
    }
}
