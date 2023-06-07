using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hegyseg
{
    public class Hegycsucsok
    {
        public List<Hegycsucs> HegycsucsLista { get; set; }

        public Hegycsucsok(string fajl,char hatarolo,int start=0)
        {
            HegycsucsLista = new List<Hegycsucs>();
            try
            {
                var sorok = File.ReadAllLines(fajl, Encoding.Default);
                for (int i = start; i < sorok.Length; i++)
                {
                    HegycsucsLista.Add(new Hegycsucs(sorok[i],hatarolo));
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);                
            }

        }
    }
}
