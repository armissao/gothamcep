using Microsoft.EntityFrameworkCore;
using GothamCepApi.Models;

namespace GothamCepApi.Data
{
    public class DataBaseContext : DbContext
    {
        public DataBaseContext(DbContextOptions<DataBaseContext> options)
            : base(options)
        {
        }

        public DbSet<Cep> Ceps { get; set; }
    }
}