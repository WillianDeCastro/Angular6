using Microsoft.EntityFrameworkCore;
using WebApi.Model;

namespace WebApi
{
    public class CustomerDbContext : DbContext
    {

        public CustomerDbContext(DbContextOptions<CustomerDbContext> opt) : base(opt)
        {

        }

        public DbSet<Customer> Customers { get; set; }
    }
}