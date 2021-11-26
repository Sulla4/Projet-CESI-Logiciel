using DesktopAppProjetLogiciel.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Text;

namespace DesktopAppProjetLogiciel.Persistence.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly AppDbContext _dbContext;

        public BaseRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
