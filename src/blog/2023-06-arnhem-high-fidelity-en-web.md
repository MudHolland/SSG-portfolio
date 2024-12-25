---
layout: post.njk
title: Prototypes omzetten naar een Web-applicatie waar omgevingsinzichten uit op
  te halen en te toetsen zijn
description: Ontdek hoe ik in dit project met designkeuzes, uitdagingen en technische samenwerking interfaces ontwikkelde die naadloos aansluiten bij de behoeften van stakeholders zoals de toekomstige gebruikers en beleidsmedewerkers van gemeente Arnhem.
date: '2023-06-15'
headerImage: /images/BTH-Web-app.png
thumbnail: /images/BTH-Web-app.png
tags:
- Team Project
- Multi-disciplinair
- Agile/Scrum
- Web Design
- Multi-disciplinair
- 1-10-100
- Team Project
- Agile/Scrum
---

## Weergave van isochronen

In mijn gesprek met eindgebruikers leerde ik dat isochronen (de veelhoekige polygonen die ontstaan wanneer eindpunten met elkaar worden verbonden) de te communiceren informatie niet prettig delen. Daarnaast kleven er ook nadelen aan:

Om deze reden heb ik bepaald om aan te sluiten bij de bekende patterns van navigatiesoftware zoals Google Maps, waarbij de te navigeren route in blauw wordt weergegeven. Dit zorgt ervoor dat een afstand op een kaart automatisch aansluit bij de het mentale model en beleving van de gebruiker. Het wordt hiermee een
				affordance
				, wat zorgt dat de ontwerper of het ontwerp minder hoeft uit te leggen. Hoe kan echter ik op duidelijke wijze het verschil tussen reële loopafstand en belevingsafstand tonen? Ik ga hier een aantal alternatieven voor bedenken.

Het communiceren van twee waarden (reële- en belevingstijd) kan op verschillende manieren. Bijvoorbeeld:

De lijn sluit aan op de verwachting van de gebruiker, maar de gebruiker is niet gewend om twee lijnen te zien. Ik ga deze verschillende lijnen op twee manieren van elkaar laten verschillen, om zo inclusief mogelijk te ontwerpen. Ik merk namelijk dat in ontwerp vaak slechts één aspect wordt gebruikt om een verschil aan te duiden (zoals rood = dicht, groen = open). Hiermee loop je kans dat een specifieke beperking (zoals mijn rood-groen-
				kleurenblindheid
				) de communicatie niet eens waarneemt.

De straat rechtboven in onderstaande voorbeelden heeft een belevingsisochroon die kleiner is dan de reële isochroon, zodat beide mogelijkheden (belevingsverbetering en -verslechtering kunnen worden getoond).

![Alternatief 1. Dikte van de lijnen, half doorzichtig, daardoor ook verschil in kleursterkte - Alternatief 1. Dikte van de lijnen, half doorzichtig, daardoor ook verschil in kleursterkte](/images/BTH-Proto-IsochroonAlternatief1.png)

![Alternatief 2. Dikte van de lijnen, belevingsisochroon is gevormd met bolletjes. Hiermee wordt de kortere belevingstijd ook duidelijker, omdat de scherpe hoeken van de bolletjes en de witte achtergrond meer in het ook spingen. De bolletjes kunnen een eenheid vertegenwoordigen. Een bolletje kan bijvoorbeeld een verschil van 10 seconden in de beleving voorstellen. Hiermee is het duidelijk dat de belevingstijd links iets meer dan 40 seconden verschilt van de reële tijd. - Alternatief 2. Dikte van de lijnen, belevingsisochroon is gevormd met bolletjes. Hiermee wordt de kortere belevingstijd ook duidelijker, omdat de scherpe hoeken van de bolletjes en de witte achtergrond meer in het ook spingen. De bolletjes kunnen een eenheid vertegenwoordigen. Een bolletje kan bijvoorbeeld een verschil van 10 seconden in de beleving voorstellen. Hiermee is het duidelijk dat de belevingstijd links iets meer dan 40 seconden verschilt van de reële tijd.](/images/BTH-Proto-IsochroonAlternatief2.png)

![Alternatief 3. Dikte vorm en kleur van de isochronen. De reële isochroon is rechthoekig, waar de belevingstijd wordt getoond met afgeronde hoeken. Het Kiki-Bouba-effect
					(Bouba/kiki effect - Wikipedia)
					zou hierdoor moeten resulteren in het zien van de uitstekende ronde delen als positieve invloeden, met de rechte uiteinden bij kortere belevingstijd als negatieve invloed. Kleur (groen-oranje) sluit hier op aan. - Alternatief 3. Dikte vorm en kleur van de isochronen. De reële isochroon is rechthoekig, waar de belevingstijd wordt getoond met afgeronde hoeken. Het Kiki-Bouba-effect zou hierdoor moeten resulteren in het zien van de uitstekende ronde delen als positieve invloeden, met de rechte uiteinden bij kortere belevingstijd als negatieve invloed. Kleur (groen-oranje) sluit hier op aan.](/images/BTH-Proto-IsochroonAlternatief3.png)

### Feedback middels Expo- en Peer Review-methoden

## High-fidelity Prototype

### De huisstijl van gemeente Arnhem

Tijdens het project heb ik de huisstijl van de gemeente Arnhem achterhaald en uitgebreid met onze benodigde interface-elementen.

![Huisstijl Gemeente Arnhem om het high-fidelity prototype op te stellen in de stijl van de opdrachtgever - Huisstijl Gemeente Arnhem om het high-fidelity prototype op te stellen in de stijl van de opdrachtgever](/images/DennisUlijn_HuisstijlGemeenteArnhem.png)

### High Fidelity interface

Door de elementen in het mid-fidelity prototype te vervangen door elementen gebaseerd op de huisstijl van gemeente Arnhem komt het prototype meer tot leven. Het toevoegen van klikbare elementen en overgangen van de verschillende states van de interface ontstaat een waar gevoel voor hoe het product gaat werken.

![De zoekbalk en legenda krijgen de kleuren van de header en footer van de huisstijl. Hiermee springen zij duidelijk in het oog en communiceren de meest kenmerkende eigenschappen van de huisstijl, namelijk de blauwe kleur met de groene lijn. - De zoekbalk en legenda krijgen de kleuren van de header en footer van de huisstijl. Hiermee springen zij duidelijk in het oog en communiceren de meest kenmerkende eigenschappen van de huisstijl, namelijk de blauwe kleur met de groene lijn.](/images/BTH-MidFiProto-1.png)

![Wanneer geklikt wordt op de kaart of een adres in de zoekbalk wordt ingevuld worden de elementen getoond om de persona en factoren aan te passen. Dit met gebruik van de typografie (tekstgrootte, kleur en gewicht) en marges die in de huisstijl vastgelegd zijn. - Wanneer geklikt wordt op de kaart of een adres in de zoekbalk wordt ingevuld worden de elementen getoond om de persona en factoren aan te passen. Dit met gebruik van de typografie (tekstgrootte, kleur en gewicht) en marges die in de huisstijl vastgelegd zijn.](/images/BTH-MidFiProto-2.png)

![het uitklappen van de factoren toont de sliders en hun waarden. Een pijltje links van de factortitel biedt de mogelijkheid subfactoren te zien. Dit pijltje heeft een ander gewicht en kleur om hierarchie te behouden; dit pijltje is namelijk lager in rang dan die om de factoren uit te klappen. - het uitklappen van de factoren toont de sliders en hun waarden. Een pijltje links van de factortitel biedt de mogelijkheid subfactoren te zien. Dit pijltje heeft een ander gewicht en kleur om hierarchie te behouden; dit pijltje is namelijk lager in rang dan die om de factoren uit te klappen.](/images/BTH-MidFiProto-3.png)

![De subfactoren zijn minder kleurrijk en dunner. Dit om hun lagere invloed op de belevingstijd te communiceren. - De subfactoren zijn minder kleurrijk en dunner. Dit om hun lagere invloed op de belevingstijd te communiceren.](/images/BTH-MidFiProto-4.png)

![de gele kleur toont welke waarden zijn aangepast ten opzichte van de opgehaalde waarden. Hiermee is het duidelijk welke waarde afwijkt van de werkelijkheid. Ik heb ervoor gekozen om de gele rand om het scherm en de tekst sandbox weg te halen, omdat dit meer verwarring dan duidelijkheid opleverde, zowel bij de gebruiker waarmee ik testte, als bij de opdrachtgever (Annemieke Molster) en experts (Ger de Vries). De kleur van de knop communiceert een verband met de gekleurde factoren, en de tekst op knop (aangepaste waarden resetten) geeft betekenis aan de kleur. - de gele kleur toont welke waarden zijn aangepast ten opzichte van de opgehaalde waarden. Hiermee is het duidelijk welke waarde afwijkt van de werkelijkheid. Ik heb ervoor gekozen om de gele rand om het scherm en de tekst sandbox weg te halen, omdat dit meer verwarring dan duidelijkheid opleverde, zowel bij de gebruiker waarmee ik testte, als bij de opdrachtgever (Annemieke Molster) en experts (Ger de Vries). De kleur van de knop communiceert een verband met de gekleurde factoren, en de tekst op knop (aangepaste waarden resetten) geeft betekenis aan de kleur.](/images/BTH-MidFiProto-5.png)

Om deze interactie deelbaar te maken met projectleden en stakeholders heb ik een video gemaakt waarin ik de interactie met de elementen toon:

De ontwikkelaar die de uiteindelijk tool moest gaan ontwikkelen vond het 'fancy en ambitieus'.

De opdrachtgever was benieuwd hoe de kleuren zouden worden, omdat ze ontwerp 1 interessant vond, maar het niet voor zich zag hoe dit duidelijk zou worden in ons concept.

### Isochronen op basis van de huisstijl van gemeente Arnhem

Ontwerp 1 maakt gebruik van verschillende lijndiktes en lijnkleuren. Door deze te baseren op de primaire en secundaire kleuren van de gemeente Arnhem onstaat twee duidelijk contrasterende isochronen.

![alternatief 1 met kleuren (voor marker, looptijd en belevingstijd) gebaseerd op de huisstijl van gemeente Arnhem -  alternatief 1 met kleuren (voor marker, looptijd en belevingstijd) gebaseerd op de huisstijl van gemeente Arnhem](/images/BTH_HiFi_Iso.png)

## Ontwerpen van de Web-interface

Ik heb mijn Adobe XD bestanden, afbeeldingen en de video van de high-fidelity-interface gedeeld met de software developer, zodat hij hiermee mijn ontwerpen tot web-interface kan omzetten. Hierbij hem ik aangegeven dat ik hierin mee wil helpen, om mee te leren over het opstellen van web-applicaties.

> Onder Interaction Designer versta ik het ontwerpen van een product of dienst, opgesteld aan de hand van gebruikersuitspraken tot het opleveren van een - op het oog - werkende tool. Hierbij vind ik het interessant om ook de mogelijkheden van HTML, CSS en JS te kennen en te kunnen, om zodoende de interactie van behoefte tot gebruik volledig te kunnen faciliteren.

![De software-ontwikkelaar in ons team heeft mijn XD-schermen omgezet tot deze web-interface - De software-ontwikkelaar in ons team heeft mijn XD-schermen omgezet tot deze web-interface](/images/BTH-IxD-web1.png)

In bewegende beelden zag ik dat het vergrootglas in het zoekveld nog wat op en neer sprong. Hij had ook nog niet voor elkaar om een waarde naast de sliders te maken. Ik heb aangeboden hem met mijn beperkte kennis te helpen. Ik wist alleen niet hoe we hierin makkelijk konden samenwerken.

### Github

Van De software-ontwikkelaar in ons team leerde ik zijn repository op Github te clonen en aanpassingen uit te voeren. Dit was eenvoudig met de software Github Desktop (voor het up- en downloaden van de bestanden) en VSCode (voor het aanpassen van de bestanden).

Omdat ik me niet bezig wilde houden met de achterliggende code, had ik enkel de basis-html. Hierin staan geen persona's of factoren, omdat deze later uit de database worden opgehaald en via javascript in de html geplaatst. Dit gaat mijn pet te boven, waardoor ik van de software-ontwikkelaar heb gevraagd of hij zijn html-pagina uit de browser kon sturen. Zo zag ik hoe de data uit de database kwam en kon ik mijn aanpassingen met zijn divs, id's en classes aanpassen.  Hierin focuste ik op hoe de interface eruit moest zien en moest voelen en focuste de IT'er op de juiste werking. Voor nu vind ik dit voldoende web-kennis voor mij als CMD'er, met bewuste kennis van mijn limitaties.

Omdat ik deze aanpassing direct naar de software-ontwikkelaars Github repo stuurde, wilde hij dat ik een eigen branch aanmaakte. Hiermee kon ik aanpassingen aan de bestanden uitvoeren en deze uploaden naar Github, waarna de software-ontwikkelaar deze aanpassingen kan inzien, en waar gewenst mergen met zijn main branch. Zo kon ik non-destructief en zonder mondelinge communicatie voorstellen voor de code maken. Door een middagje te spelen met HTML en CSS kwam ik tot het volgende resultaat:

![betere leesbaarheid door verbeterde typografie en marges, een waardeveld naast de slider en een pijltje naast de legenda-tekst om te tonen dat deze uit te klappen is (al had ik het uitklappen verder nog niet werkend) - betere leesbaarheid door verbeterde typografie en marges, een waardeveld naast de slider en een pijltje naast de legenda-tekst om te tonen dat deze uit te klappen is (al had ik het uitklappen verder nog niet werkend)](/images/BTH-IxD-web2.png)

![in de volgende stap heb ik de legenda getekend. Extra regels, tekst met kleur in deze regels en een omgekeerd pijltje als signifier van de uitgeklapte staat van de legenda. Om voor de software-ontwikkelaar duidelijk te maken hoe ik de in- en uitgeklapte versie voor me zag, heb ik de ingeklapte versie tijdelijk linksonderin geplaatst - in de volgende stap heb ik de legenda getekend. Extra regels, tekst met kleur in deze regels en een omgekeerd pijltje als signifier van de uitgeklapte staat van de legenda. Om voor de software-ontwikkelaar duidelijk te maken hoe ik de in- en uitgeklapte versie voor me zag, heb ik de ingeklapte versie tijdelijk linksonderin geplaatst](/images/BTH-IxD-web3.png)

![Voor de subfactoren waren andere regels nodig. Andere kleur en marge links en rechts die rekening hield met de marges van de sliders van de factoren erboven. - Voor de subfactoren waren andere regels nodig. Kleur moest worden aangepast en ik wilde een marge links en rechts die rekening hield met het begin en einde van de slider zoals deze er bij de factoren uitzag.](/images/BTH-IxD-web4.png)

Ik vond de kleurwaardes voor de isochroonlijnen in het javascript-bestand. Ik heb deze waardes naar classes (.looptijd en .belevingstijd) in de CSS verplaatst en bij de software-ontwikkelaar aangegeven dat deze opmaak in mijn ogen meer in CSS hoort. Op deze manier kon ik ook naar deze lijnen verwijzen in mijn legenda. Zo kon hij bij het tekenen van zijn lijnen de eigenschappen van deze classes kunnen overnemen en hoefde ik geen aanpassingen aan zijn Javascript-bestanden uit te voeren.

### Resultaat

Met mijn aanpassingen in de main branch ziet het resultaat er nu zo uit:

![structuur en opmaak in het segment links en in de legenda. - structuur en opmaak in het segment links en in de legenda.](/images/BTH-IxD-web5.png)

## Van web-interface naar volledig klikbaar Hi-fi proto

Nu de webinterface klaar is en duidelijk is hoe mijn interface samenkomt met de verwerking en vertoning van de isochronen, kan ik een nieuw prototype maken, waarbij ik rekening houd dat deze presenteerbaar is:
				High Fidelity Prototype
				.

