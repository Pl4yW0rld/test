using SalutiWebApi.Controllers;
using Xunit;

namespace SalutiWebApi.test
{
    public class SalutiControllerTest
    {
        SalutiController salutiController;

        public SalutiControllerTest(){
          salutiController = new SalutiController();
        }

        [Fact]
        public void testGetSaluti()
        {
          string retVal = salutiController.getSaluti();
          string testVal = "Saluti, sono la tua prima web api creata in C# questo testo è generato da SalutiController";

          Assert.Equal(retVal,testVal);
        }
    }
}
