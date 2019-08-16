import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-over-ons',
  templateUrl: './over-ons.component.html',
  styleUrls: ['./over-ons.component.css']
})
export class OverOnsComponent implements OnInit {

  overOnsContent = [{
    "header" : `Met onze Habesha Foods truck staan wij drie dagen in de week op de Vredenburg markt in Utrecht. Van daaruit bereiden en verkopen 
                wij onze heerlijke Ethiopische en Eritrese broodjes, gerechten en snacks. Ook voor een kop koffie of een drankje bent u van harte welkom. 
                Iedere donderdag staan wij met onze foodtruck in Bussum.`,

    "catering" : `Habesha Foods verzorgt catering op iedere gewenste locatie in een straal van 75 kilometer rond Utrecht. Te denken valt aan bruiloften, 
                bedrijfsfeesten, verjaardagen en festivals. U kunt tevens gerechten op bestelling afhalen in Bussum. Habesha Foods bezorgt ook aan huis.`,
    "habeshafoods" : `De naam Habesha Foods is afgeleid van de traditionele Abessijnse keuken van het voormalige Koninkrijk Habesha, of Abessinië. 
                      Tegenwoordig de landen Eritrea en Ethiopië.`,

    "gerechten": `Habesha Foods laat u graag kennis maken met de kleurrijke, geurige en smakelijke gerechten uit de ​​authentieke Abessijnse keuken. 
                    Verschillende groentes vormen de basis, gecombineerd met brood, rijst, kip, lams of rundvlees naar keuze. 
                    Traditiegetrouw worden alle gerechten geserveerd met een Injera; een pannenkoekachtig brood gemaakt van teff meel. 
                    Onze gerechten zijn subtiel en geurig bereid en bovenal gezond.`
  }]
  constructor() { }
  ngOnInit() {
  }

}
