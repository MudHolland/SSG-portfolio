---
layout: post.njk
title: Herontwerpen van de bedrijfswebsite van Van Lent Systems aan de hand van nieuwe
  technologieën en technieken
description: Door analyse en herstructurering van de website, inclusief een conceptual model, Card Sorting, navigatietests en HTML/CSS-oefeningen, heb ik een gebruiksvriendelijke en visueel consistente redesign gerealiseerd met focus op navigatie en toegankelijkheid voor eindgebruikers.
date: '2021-03-15'
headerImage: /images/lwg3-visueleanalyse.png
thumbnail: /images/lwg3-visueleanalyse.png
tags:
- Human Centered Design
- Web Design
- Library Research
- UI/UX
---

### Conceptual model

Bij een ontwerpproces staat de gebruiker centraal. Om een gebruiksvriendelijke interface te maken, zijn er vier belangrijke aspecten: discoverability, affordance, signifiers en feedback. In dit hoofdstuk ga ik deze termen toelichten. Deze kennis is gebaseerd op bijlage I. Conceptual model.

Je hebt de volgende vier eigenschappen nodig om een interactief element duidelijk en eenduidig te maken:

Een totaal van het conceptual model is dus uit te leggen als een uitwerking van hoe een gebruiker een actie herkent, voorspelt, activeert en feedback op deze actie ontvangt.

### Information Architecture

Om tot een verbeterde IA te komen, voer ik een Card Sorting-sessie uit. Bij een Card Sorting-sessie plaats je de content van een website op kaartjes, waarna je deze fysiek gaat sorteren op een manier dat de kaartjes logisch bij elkaar passen.

Hiervoor heb ik alle menuitems uit de verschillende menu's en waar dit mogelijk is de tussenkoppen op pagina's (zoals de 'over ons'-pagina) genomen en op losse kaartjes geschreven. Daardoor heb ik een goede basis om de content of kopniveau opnieuw te structureren.

Deze kaartjes heb ik eerst zelf gesorteerd en gegroepeerd. Ik heb de groepen namen gegeven die voor mij logisch voelen. Hierna heb ik dezelfde methode van sorteren en groeperen uitgevoerd met een gebruiker van de website en een expert, namelijk de product owner van de website bij Van Lent Systems. Hierbij heb ik ingezien dat Card Sorting een effectieve manier is om verdelingen te maken en ontwerpfouten aan het licht te brengen.

![Card Sorting](/images/lwg3-cardsorting.png)

Door deze Card Sorting-sessies ben ik tot een verbeterde Information Architecture gekomen.

![Information Architecture](/images/lwg3-ia.png)

### Navigatie

Om de navigatie te testen voer ik een Trunk test en Navigation Stress test uit met een gebruiker:

De Trunk Test kijkt op een willekeurige pagina of de belangrijkste elementen (site ID, paginanaam, primaire en secundaire nagivatie, huigie locatie-indicatoren, zoekfunctie) snel en makkelijk te herkennen zijn. Als je dit vergelijkt met een warenhuis geeft een Trunk Test aan of het duidelijk is aan de eigenschappen van de rij welke rij het is en of het duidelijk is wat je er kunt vinden.

De Navigation Stress Test kijkt op een willekeurige pagina of het duidelijk is waar de huidige pagina is in verhouding tot de andere pagina's en of het duidelijk is naar welke pagina's de links op de huidige pagina leiden. De Navigation Stress Test zou te vergelijken zijn met het feit dat je weet waar in de het warenhuis die rij zich bevindt en of het duidelijk is wat er gebeurt als je naar de rijen ernaast loopt.

Uit deze tests kwamen een aantal problemen waar ik verbetervoorstellen voor heb gemaakt. Zo had een gebruiker 6 kliks nodig om bij een product te komen. door een Megamenu toe te passen, kon de gebruiker van elke pagina maar elk product.

![Verbetervoorstel Navigatie Megamenu](/images/lwg3-megamenu.png)

Op de pagina's zelf was de informatie links van het product geen informatie die je daar nodig hebt of verwacht. De verwachtte informatie, onderdelen over het product, waren afwezig. Door lokale navigatie hier weer te geven volgt de website meer de F-vorm. Dit is de vorm waarin de ogen van de gebruikers naar informatie zoeken.

![Verbetervoorstel Lokale Navigatie](/images/lwg3-lokalenavigatie.png)

Een van de grootste onduidelijkheden was het feit dat elk product een product- en webshoppagina had, waarbij belangrijke informatie niet op beide pagina's stond. Om dit op te lossen waren deze pagina's in de card sorting samengevoegd.

Door de herinrichting van de Information Architecture en de Trunk en Navigation stress test kan ik de volledige navigatie uittekenen in een Sitemap:

![Sitemap](/images/lwg3-sitemap.png)

### Heuristieken

Om de website te beoordelen op gebruiksvriendelijkheid heb ik deze geëvalueerd aan de hand van de 10 heuristieken van Jacob Nielsen. Hieruit bleken geen grote fouten. Dit komt waarschijnlijk doordat de website is opgezet door een bedreven, professionele partij. De problemen die ik vond, zijn de bedrijfsspecifieke toepassingen. Zo was er bij de knoppen op de verschillende pagina's bijvoorbeeld een gebrek aan consistentie in vorm, kleur en toepassing. Door hier een duidelijke lijn in te trekken, zijn de bedieningselementen eenduidig.

![Heuristieken](/images/lwg3-heuristieken.png)

### Visual Design

Bij het visuele ontwerp heb ik geleerd hoe mensen ontwerpen waarnemen, dat ze via een F-vorm lezen en dat het verstandig is bij een website rekening te houden met een grid-systeem, witruimte en Gestalt-principes. Bij analyse van de website van Van Lent Systems bleek daarbij dat er rekening werd gehouden met een 12-grid systeem, maar dat de ruimte tussen de kolommen te smal was. Hierdoor is er veel ruimte tussen elementen, maar heb je in het ontwerp minder vrijheid om te kiezen in de breedte van elementen.

![Visuele analyse](/images/lwg3-visueleanalyse.png)

### Redesign

Er werd gebruik gemaakt van verschillende groottes en diktes van kopteksten. Voor de tekstgroottes gebruik ik verhoudingen: paragraven 14px, alineakoppen 28px (2 maal zo groot) en pagina- en producttitels 56px (4 maal paragraafgrootte). Door dit eenduidig te doen worden de elementen op de pagina meer een geheel en stralen meer rust uit.

![Elementen](/images/lwg3-elementen.png)

Met deze leringen kan ik de website herontwerpen met een navigatie en ontwerp dat beter aansluit op de verwachtingen van de gebruiker. De grootste verandering is het samenvoegen van de product- en webshoppagina's.

![Redesign](/images/lwg3-redesign.png)

### Design for the web

Om een stukje achtergrond van het web te hebben, heb ik opdrachten uitgevoerd om HTML en CSS te leren kennen. Deze uitwerkingen zijn <a href="/project/web-design-oefeningen">hier</a> te zien. Deze kennis heb ik toegepast op het van de grond af opbouwen van dit portfolio.

### Design for the future

Om verder te kijken wat er in de toekomst mogelijk gaat zijn, heb ik gekeken naar trends die in de toekomst mogelijk interessant kunnen zijn voor Van Lent Systems.

Omdat het grootste gedeelte van hun eindgebruikers slechtziend is, is het verstandig te ontwerpen met deze handicap in het achterhoofd. Ik zie hierbij de trend van Virtual Assistant een groot aandeel in hebben. Deze virtuele assistent kan de gebruiker helpen bij het vinden van informatie op de website en dit uitspreken.

Een andere interessante trend is Minimalistisch/Brutalistisch ontwerp, waarbij vaak met grote en sterk aftekenende elementen wordt gewerkt, wat prettig kan zijn voor slechtziende gebruikers.

![Brutalist/Minimalist](/images/lwg3-brutalist.png)

### Conclusie

Op de navigatie na zijn er weinig grote gebruikersproblemen. Dit komt waarschijnlijk omdat de website is opgezet door een bedrijf dat hierin bedreven is en werkt met bewezen standaarden en standaardelementen. De problemen zitten daarom met name in de bedrijfsspecifieke toepassingen zoals knoppen en de navigatie.

