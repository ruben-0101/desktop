using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hegyseg
{
    public class Hegycsucs
    {
        public string HegycsucsNeve { get; set; }
        public string Hegyseg { get; set; }
        public int Magassag { get; set; }

        public Hegycsucs(string sor,char hatarolo)
        {
            var e = sor.Split(hatarolo);
            HegycsucsNeve = e[0];
            Hegyseg = e[1];
            Magassag = Convert.ToInt32(e[2]);
        }

    }
}
