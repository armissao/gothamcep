using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using GothamCepApi.Data;
using GothamCepApi.Models;

namespace GothamCepApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class CepController : ControllerBase
    {
         private readonly DataBaseContext _context;

        public CepController(DataBaseContext context)
        {
            _context = context;
        }

     
        [HttpGet]
        [Route("GetCeps")]
        public async Task<ActionResult<IEnumerable<Cep>>> GetCeps()
        {
            return await _context.Ceps.ToListAsync();
        }
     
        [HttpGet]
        [Route("GetCEP")]
        public async Task<ActionResult<Cep>> GetCEP(int id)
        {
            var cep = await _context.Ceps.FindAsync(id);
            if (cep == null)
            {
                return NotFound();
            }
            return cep;
        }
/*
        [HttpGet]
        [Route("GetCEPNumero")]
        public async Task<ActionResult<Cep>> GetCEPNumero(int id, int numero)
        {
        
            var cep = await _context.Ceps.FindAsync(id);
            if (cep.numero == null)
            {
                return NotFound();
            }

           
            
            return cep.numero;
        }
*/
     
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCEP(int id, Cep cep)
        {
            if (id != cep.id)
            {
                return BadRequest();
            }
            _context.Entry(cep).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CEPExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }
        
        [HttpPost]
        public async Task<ActionResult<Cep>> PostCEP([FromBody] Cep cep)
        {
            _context.Ceps.Add(cep);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCEP", new { id = cep.id }, cep);
        }
       
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cep>> DeleteCEP(int id)
        {
            var cep = await _context.Ceps.FindAsync(id);
            if (cep == null)
            {
                return NotFound();
            }
            _context.Ceps.Remove(cep);
            await _context.SaveChangesAsync();
            return cep;
        }
        private bool CEPExists(int id)
        {
            return _context.Ceps.Any(cep => cep.id == id);
        }
    }
}
