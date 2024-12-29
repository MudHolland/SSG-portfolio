---
layout: post.njk
title: Van gebruikersbehoeften naar Wireframes voor een interface die inzicht moet
  bieden in hun omgevingsruimte
description: Het concept van loopruimte in Arnhem inzichtelijk maken evolueert van ruwe schetsen naar een geavanceerd mid-fidelity prototype. Door onderzoek, co-creatie en iteratie komen we tot een interface die loopervaringen inzichtelijk maakt en gebruikers interactief betrekt.
opening: Uit onze onderzoeken en opgedane inzichten in de vorige sprints, hebben wij een basis opgesteld. Vanuit deze basis werk ik samen met onze BIM'mer (Business Information Manager) samen om op basis van vastgelegde requirements tot een prototype te komen.
date: '2023-05-15'
headerImage: /images/BTH-EersteSchets.png
thumbnail: /images/BTH-EersteSchets.png
tags:
- Team Project
- Multi-disciplinair
- Agile/Scrum
- Interaction Design
- UI/UX
- Team Project
- Multi-disciplinair
- Agile/Scrum
- Web Design
---

In gesprekken met stakeholders (opdrachtgever, product-experts, beleidsmedewerkers en inwoners van gemeente Arnhem) kwamen wij tot een lijst eisen:

- Focus op de wijk Spijkerkwartier, Arnhem. Hier is veel behoefte aan lopen in groene omgevingen en deze wijk is ver verwijderd van parken (>1km²),
- Visualisatie van isochronen, om loopafstand inzichtelijk te maken,
- *'Aan de knoppen kunnen draaien'* om verandering in isochroon te visualiseren,
- Inzicht in situaties van persona's om aan doelgroepen te kunnen aansluiten,
- Inzicht in verandering in factoren, om problemen en oplossingen te visualiseren.

Uit vorige prototypes en bovenstaande eisen stelde ik een schets op het whiteboard op om het werken aan dit concept te kunnen verdelen over de verschillende disciplines, met hetzelfde doel:

![Ruwe schets van het eindconcept: een overzicht van de wijk Spijkerkwartier, met een interface voor het kiezen van een persona en aanpassen van diens belang aan omgevingsfactoren. Dit bepaalt de weergegeven belevingsisochroon op de kaart: de afstand die mensen lopen vermenigvuldigd met hun beleving. De kaartweergave doet ICT, factoren IxD, persona's opstellen ExD en de samenkomst hiervan voldoet aan requirements van BIM](/images/sprint2-schets-0.png)

## Low-fidelity

Onze Business Information Manager stelde vanuit zijn gesprekken en onderzoeken bij stakeholders de eisen op waar ons product aan moest voldoen. Vanuit deze requirements stelde hij 3 alternatieven op waarop een interface gebruikers in hun doelstellingen moest kunnen laten voldoen.

![Low Fidelity-schetsen gebaseerd op opgestelde BIM-eisen](/images/LowFidelitySchetsen.png)

3 Low Fidelity-alternatieven voor een interface voor ons product:

1. Interface zwevend rechtsbovenin, legenda linksonder, sandbox/realtime rechtsboven, scores per segment (straatdeel) getoond, dubbele (standaard en belevings-)isochroon getoond,
2. Interface als balk vast aan de rechterkant, Parkstraat geselecteerd met score voor deze straat, en
3. Interface als balk onderin het scherm "zoals in Adobe Premiere Pro", legenda en sandbox/realtime in de interface, scores per straat, straat geselecteerd

## Mid-fidelity

Vanuit deze schetsen ben ik aan het werk gegaan om deze om te zetten in wireframes, een schematische weergave van een app of website om de structuur inzichtelijk en deelbaar te maken. Daarnaast werkt een dergelijk bestand makkelijker om aanpassingen te maken, en zodoende opgehaalde feedback van stakeholders te verwerken.

![Mid Fidelity-wireframes gebaseerd op de aangeleverde schetsen](/images/mid-fidelity-Wireframes_V1.0.png)

Met deze wireframes kon ik User Experience- en Interface-theorie toepassen.

### Aanpassingen vanuit mentale modellen (competitive analysis)

Gebruikers zijn gewend aan bepaalde standaarden voor online stadskaarten omgevingen, zoals Google Maps, OpenStreetMaps, Apple Maps, etc. Hierbij worden naast straten ook groenstroken, bebouwing, water en verkeersinformatie getoond. Door herkenbare elementen toe te voegen aan de kaarten worden twee problemen opgelost:

- Kaarten zijn herkenbaar voor de gerbruiker, zowel in vergelijking met de concurrentie als met hun herinneringen aan de daadwerkelijke locaties,
- De toegevoegde informatie geeft een gevoel van de beleving van de straatsituatie. Zo zijn groenvoorzieningen, oversteekplaatsen en OV-verbindingen te zien.

### User Flow

Samen met de Business Information Manager bepaalde ik de volgende drie gebruikersdoelen:

1. Inzichten ophalen over de huidige situatie op een specifieke locatie: hoe ver loopt de doelgroep ongeveer en welke invloed heeft de omgeving?
2. Welke invloed hebben de factoren op het verschil tussen loop- en belevingstijd? Door dit aan te passen is zichtbaar welke invloed een factor heeft,
3. Wat is het verschil tussen doelgroepen? Door te zien dat een bepaald punt slecht scoort voor mindervaliden, kan inzichtelijk worden gemaakt welke factoren ontbreken die voor deze doelgroep cruciaal zijn.

User Flows zijn taakgerichte sets aan handelingen die bepalen hoe gebruikers het product waarschijnlijk  gaan gebruiken. Dit doe ik op basis van de [Seven stages of action](https://en.wikipedia.org/wiki/Seven_stages_of_action). De resulterende acties heb ik in de huisstijl van gemeente Arnhem verwerkt tot de volgende startpunten, schermen, keuzemomenten en acties.

![De stappen die een gebruiker neemt bij het uitvoeren van een actie](/images/UserFlow-SevenStagesofAction.png)

Vanuit de doelstellingen heb ik User Flows voor beleidsmedewerkers van de gemeente Arnhem bepaald:

![Het User Flow-overzicht toont dat er veel overlap is in interface-eisen voor de drie doelen: inzicht per locatie, invloed van factoren en isochroon per profiel](/images/DennisUlijn_BTH-100-3_UserFlow_V1.1.png)

### Interactie

Een van de speerpunten van ons concept is dat gebruikers 'aan de knoppen kunnen draaien' (persona's instellen, loopafstand bepalen, waarde en weging van factoren en subfactoren aanpassen) en de isochroon hier op reageert. Om zelf te testen of dit gedrag inderdaad zo intuïtief werkt als ik dacht en dit gedrag zichtbaar te maken aan de opdrachtgever, heb ik in Protopie een snelle mockup gemaakt van 10 factoren met wegingen die de lengte van de 'isochroon'lijn aanpassen.

<figure>
	<video 
	controls="" 
	autoplay="" 
	loop="" 
	mute="" 
	src="/images/DennisUlijn_BTH_100-2_IsochroonConcept_V0.1.mp4"></video>
	<figcaption>Protopie-prototype met factoren en wegingen die direct invloed hebben op de lengte van de blauwe lijn (de loopafstand * beleving</figcaption>
</figure>

### Informatie-hiërarchie bepalen

Gebruikers scannen, bekijken en lezen vervolgens een pagina in de vorm van een F. In lijn met deze [F-shaped pattern for reading content](https://uxplanet.org/f-shaped-pattern-for-reading-content-80af79cd3394) wil ik belangrijke informatie op de plek zetten die het oog het meest trekt: linksbovenin. Informatie in deze blokken moet horizontaal geplaatst worden, waarna volgende elementen er recht onder worden geplaatst.

De factoren bieden een schat aan informatie, die overweldigend kan zijn voor de gebruiker. Door de informatie hiërarchisch te benaderen (profiel bepaalt factoren, factoren bezitten subfactoren), onstaan verschillende niveaus van informatie. Door de achterliggende informatie (factoren en subfactoren) niet automatisch te tonen, blijft de cognitieve belasting zo laag mogelijk. Op expliciet aangeven van de gebruiker, is de informatie beschikbaar voor diegenen die hier naar op zoek zijn. Dit is in lijn met [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/).

Progressive disclosure geldt ook voor bijvoorbeeld de legenda. De informatie hierin spreekt vaak voor zich. Op moment dat het niet aan het mentale model van de gebruiker voldoet, of ze zijn niet bekend met alle elementen (zoals bijvoorbeeld een isochroon), kan deze informatie worden opgehaald. Tot die tijd voegt de legenda enkel complexiteit toe. Dit leidt tot de volgende, herschikte mid-fidelity-wireframes:

![Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen](/images/mid-fidelity-Wireframes_V2.0.png)

Stakeholders gaven aan dat het prettig was om feedback te hebben als waarden niet de realiteit weerspiegelen. Daarmee komt het punt sandbox/realtime terug uit de lo-fi schetsen. Factoren toonden percentages en wegingen. Het resultaat aan inzicht is voor de gebruiker gelijk, dus hebben de weging verborgen voor de gebruiker.	Ook wilden we de subfactoren (observaties als onderdeel van een factor) toonbaar maken, om zo inzichten die gebruikers ophalen uit de tool nog tastbaarder te maken. Dit leidt tot de volgende wireframes:

![Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen](/images/mid-fidelity-Wireframes_V3.0.png)

