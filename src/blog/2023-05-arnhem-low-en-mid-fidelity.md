---
layout: post.njk
title: Van gebruikersbehoeften naar Wireframes voor een interface die inzicht moet
  bieden in hun omgevingsruimte
description: Het concept van loopruimte in Arnhem inzichtelijk maken evolueert van ruwe schetsen naar een geavanceerd mid-fidelity prototype. Door onderzoek, co-creatie en iteratie komen we tot een interface die loopervaringen inzichtelijk maakt en gebruikers interactief betrekt.
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

Uit vorige prototypes en bovenstaande eisen stelde ik een schets op het whiteboard op om het werken aan dit concept te kunnen verdelen over de verschillende disciplines, met hetzelfde doel:

![Ruwe schets van het eindconcept: een overzicht van de wijk Spijkerkwartier, met een interface voor het kiezen van een persona en aanpassen van diens belang aan omgevingsfactoren. Dit bepaalt de weergegeven belevingsisochroon op de kaart: de afstand die mensen lopen vermenigvuldigd met hun beleving. De kaartweergave doet ICT, factoren IxD, persona's opstellen ExD en de samenkomst hiervan voldoet aan requirements van BIM - Ruwe schets van het eindconcept: een overzicht van de wijk Spijkerkwartier, met een interface voor het kiezen van een persona en aanpassen van diens belang aan omgevingsfactoren. Dit bepaalt de weergegeven belevingsisochroon op de kaart: de afstand die mensen lopen vermenigvuldigd met hun beleving. De kaartweergave doet ICT, factoren IxD, persona's opstellen ExD en de samenkomst hiervan voldoet aan requirements van BIM](/images/sprint2-schets-0.png)

## Low-fidelity

Onze Business Information Manager stelde vanuit zijn gesprekken en onderzoeken bij stakeholders de eisen op waar ons product aan moest voldoen. Vanuit deze requirements stelde hij 3 alternatieven op waarop een interface gebruikers in hun doelstellingen moest kunnen laten voldoen.

![Low Fidelity-schetsen gebaseerd op opgestelde BIM-eisen - Low Fidelity-schetsen gebaseerd op opgestelde BIM-eisen](/images/LowFidelitySchetsen.png)

3 Low Fidelity-alternatieven voor een interface voor ons product:

## Mid-fidelity

Vanuit deze schetsen ben ik aan het werk gegaan om deze om te zetten in wireframes, een schematische weergave van een app of website om de structuur inzichtelijk en deelbaar te maken. Daarnaast werkt een dergelijk bestand makkelijker om aanpassingen te maken, en zodoende opgehaalde feedback van stakeholders te verwerken.

![Mid Fidelity-wireframes gebaseerd op de aangeleverde schetsen - Mid Fidelity-wireframes gebaseerd op de aangeleverde schetsen](/images/mid-fidelity-Wireframes_V1.0.png)

Met deze wireframes kon ik User Experience- en Interface-theorie toepassen.

### Aanpassingen vanuit mentale modellen (competitive analysis)

Gebruikers zijn gewend aan bepaalde standaarden voor online stadskaarten omgevingen, zoals Google Maps, OpenStreetMaps, Apple Maps, etc. Hierbij worden naast straten ook groenstroken, bebouwing, water en verkeersinformatie getoond. Door herkenbare elementen toe te voegen aan de kaarten worden twee problemen opgelost:

### User Flow

Samen met de Business Information Manager bepaalde ik de volgende drie gebruikersdoelen:

User Flows zijn taakgerichte sets aan handelingen die bepalen hoe gebruikers het product waarschijnlijk  gaan gebruiken. Dit doe ik op basis van de
				Seven stages of action
				. De resulterende acties heb ik in de huisstijl van gemeente Arnhem verwerkt tot de volgende startpunten, schermen, keuzemomenten en acties.

![De stappen die een gebruiker neemt bij het uitvoeren van een actie - De stappen die een gebruiker neemt bij het uitvoeren van een actie](/images/User Flow - Seven Stages of Action.png)

Vanuit de doelstellingen heb ik User Flows voor beleidsmedewerkers van de gemeente Arnhem bepaald:

![Het User Flow-overzicht toont dat er veel overlap is in interface-eisen voor de drie doelen: inzicht per locatie, invloed van factoren en isochroon per profiel - Het User Flow-overzicht toont dat er veel overlap is in interface-eisen voor de drie doelen: inzicht per locatie, invloed van factoren en isochroon per profiel](/images/DennisUlijn_BTH-100-3_UserFlow_V1.1.png)

### Interactie

Een van de speerpunten van ons concept is dat gebruikers 'aan de knoppen kunnen draaien' (persona's instellen, loopafstand bepalen, waarde en weging van factoren en subfactoren aanpassen) en de isochroon hier op reageert. Om zelf te testen of dit gedrag inderdaad zo intuïtief werkt als ik dacht en dit gedrag zichtbaar te maken aan de opdrachtgever, heb ik in Protopie een snelle mockup gemaakt van 10 factoren met wegingen die de lengte van de 'isochroon'lijn aanpassen.

### Informatie-hiërarchie bepalen

Gebruikers scannen, bekijken en lezen vervolgens een pagina in de vorm van een F. In lijn met deze
				F-shaped pattern for reading content
				wil ik belangrijke informatie op de plek zetten die het oog het meest trekt: linksbovenin. Informatie in deze blokken moet horizontaal geplaatst worden, waarna volgende elementen er recht onder worden geplaatst.

De factoren bieden een schat aan informatie, die overweldigend kan zijn voor de gebruiker. Door de informatie hiërarchisch te benaderen (profiel bepaalt factoren, factoren bezitten subfactoren), onstaan verschillende niveaus van informatie. Door de achterliggende informatie (factoren en subfactoren) niet automatisch te tonen, blijft de cognitieve belasting zo laag mogelijk. Op expliciet aangeven van de gebruiker, is de informatie beschikbaar voor diegenen die hier naar op zoek zijn. Dit is in lijn met
				Progressive Disclosure
				.

Progressive disclosure geldt ook voor bijvoorbeeld de legenda. De informatie hierin spreekt vaak voor zich. Op moment dat het niet aan het mentale model van de gebruiker voldoet, of ze zijn niet bekend met alle elementen (zoals bijvoorbeeld een isochroon), kan deze informatie worden opgehaald. Tot die tijd voegt de legenda enkel complexiteit toe. Dit leidt tot de volgende, herschikte mid-fidelity-wireframes:

![Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen - Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen](/images/mid-fidelity-Wireframes_V2.0.png)

Stakeholders gaven aan dat het prettig was om feedback te hebben als waarden niet de realiteit weerspiegelen. Daarmee komt het punt sandbox/realtime terug uit de lo-fi schetsen. Factoren toonden percentages en wegingen. Het resultaat aan inzicht is voor de gebruiker gelijk, dus hebben de weging verborgen voor de gebruiker.	Ook wilden we de subfactoren (observaties als onderdeel van een factor) toonbaar maken, om zo inzichten die gebruikers ophalen uit de tool nog tastbaarder te maken. Dit leidt tot de volgende wireframes:

![Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen - Enkel de kaart voor inzicht of het selecteren van punten om de isochroon te tekenen, adres kan ook linksboven worden ingevoerd. Het selecteren van een punt leidt tot de optie om een persona te selecteren of de factoren in te zien. Het openen van de factoren biedt de mogelijkheid de factoren naar inzicht aan te passen](/images/mid-fidelity-Wireframes_V3.0.png)

