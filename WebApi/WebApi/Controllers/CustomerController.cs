using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Model;

namespace WebApi.Controllers
{

    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDbContext _ctx;

        public CustomerController(CustomerDbContext ctx)
        {
            this._ctx = ctx;
        }

        [HttpGet]
        public ActionResult<List<Customer>> Get()
        {
            if (_ctx.Customers.Count() == 0)
            {
                PopulaData();
            }
            return _ctx.Customers.ToList();
        }


        private void PopulaData()
        {
            for (int i = 0; i < 30000; i++)
            {
                this._ctx.Customers.Add(new Customer
                {
                    Name = $"C{i}"
                });
            }

            this._ctx.SaveChanges();
        }
    }
}