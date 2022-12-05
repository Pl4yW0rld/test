using Microsoft.AspNetCore.Mvc;

namespace SalutiWebApi.Controllers
{
        [ApiController]
        [Route("api/saluti")]
    public class SalutiController
    {
        public string getSaluti()
        {
            return "Saluti, sono la tua prima web api creata in C# questo testo è generato da SalutiController";
        }
    }
}
