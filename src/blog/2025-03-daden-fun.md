---
layout: post.njk
title: 'Merkontwerp tot Webapp: Inzicht en Overzicht voor Zelfstandigen en Bedrijven'
description: Samen met een vriend bouwen we als Daden een platform dat het proces van merkontwerp tot webappontwerp inzichtelijk en overzichtelijk maakt. Het helpt zelfstandigen en marketingmedewerkers bij het opstellen en bijschaven van hun ontwerpen.
opening: Op daden.fun ontwikkelen we een platform waar gebruikers stap voor stap hun merkidentiteit kunnen vormgeven en direct de impact ervan op web- en printontwerpen kunnen zien. Dit doen we met een intuïtieve interface waarin keuzes overzichtelijk en visueel inzichtelijk worden gemaakt.
date: '2025-03-28'
headerImage: /images/daden-fun-prototype.png
thumbnail: /images/daden-fun-prototype.png
headerImagePosition: bottom
tags:
- 1-10-100
- Brand Design
- Web Design
- UI/UX
- Interaction Design
- Creative Design
- User Testing
---

### Het vinden van de juiste weg voorwaarts

In januari schreef ik over een landing page die ik had ontworpen voor Daden. Er was nog weinig te tonen, maar we hadden wel al een idee wat we aan wilden bieden als ontwerpers: ontwerp van logo tot volledige webapp, met daartussen conceptualisatie, procesinrichting, projectmanagement en implementatie van alles van merkontwerp, digitaal productontwerp tot oplevering van webapps, inclusief bijbehorende infrastructuur. We hadden een ontwerp voor onderliggende technologieën en data, zodat we in feite alles konden maken. We waren bezig met deze pijplijn opzetten, waarbij we tot de conclusie kwamen dat we deze pijplijn makkelijk konden ontwerpen om aan te bieden aan klanten, zodat zij zelf - met de nodige begeleiding - hun merk kunnen gaan bepalen.

### Van idee naar wireframe

Het idee groeide in onze hoofden, maar om het tastbaar te maken heb ik een eerste wireframe uitgetekend die een beeld geeft van de gebruikersinterface en een eerste gevoel geeft van de interacties die de gebruiker kan uitvoeren, en geeft de back-end developer ruimte om een datastructuur op te zetten.

![Eerste wireframe van het idee](/images/daden-fun-wireframe.png)

Op basis van ux/ui-theorie bepaalde ik de volgende wireframe:

- Links: **menustructuur** in de volgorde van de te volgen stappen. Voltooide stappen worden aangeduid met een vinkje,
- Midden: de huidige geselecteerde **pagina**. Hierop kunnen zij de keuzes maken die zij bij hun merk vinden passen. De keuzes zijn gedeeltelijk bepaald door voorgaande keuzes, maar het biedt ze de vrijheid de keuzes aan te passen,
- Rechts: **resultaat** in de vorm van standaard webpagina's, zoals een landing page, dashboard, weblog, webshop. De volgorde hiervan wordt bepaald door gemaakte keuzes, zoals in welke industrie het merk zich bevindt.

Dit is gestoeld op de [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/), zoals flexibility (het vooruit en terug kunnen springen tussen pagina's), control and freedom (gekozen waarden op basis van eerdere keuzes, maar vrijheid om naar eigen smaak aan te passen), en match between system and real world (weergave van herkenbare standaardpagina's met directe feedback van keuzes), om maar een paar voorbeelden te noemen. Uiteraard komt hier ook de [center stage](https://www.interaction-design.org/literature/topics/center-stage) (belangrijke user flow in het midden) terug, en een verwerking van de [F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) terug, waarbij gebruikers van algemene flow (structuur, interactie, resultaat) naar dieperliggende flows (stappen in het menu, user flow per onderwerp gegroepeerde pagina's) terecht.

## Van wireframe naar (gebruikers-)ontwerpflow

Ons platform helpt gebruikers gestructureerd door het proces van merkontwikkeling heen. Links op het scherm zien ze de stappen, ingedeeld in drie hoofdcategorieën, die gaandeweg lastiger worden. Door gebruikers te begeleiden van stappen die ze al weten of al kunnen, trekken we ze dieper de materie in. Doordat ze al keuzes hebben gemaakt, probeer ik de lastigere keuzes daarop aan te laten sluiten en de gebruiker hun motivatie te laten behouden; in UX-design ook wel [scaffolding](https://odettejansen.nl/scaffolding-as-a-ux-method-for-designing-better-products/) genoemd. Deze categorieën en pagina's zijn:

- **Core Brand Identity:** Merknaam & motto, industrie & waarden, doelgroep, missie & visie.
- **Visual Identity:** Kleur, typografie, logo, beeldtaal.
- **Brand Voice & Tone:** Tone of voice, messaging en copywriting.

### Core Brand Identity

Een merknaam hebben ze vaak al, en industrie (de markt waarin ze hun diensten of producten aanbieden) ook. Door daarbij hun waarden te plaatsen, creëren ze al een voller beeld van wat ze zijn en hoe ze zijn. De doelgroep definiëren geeft ze een gevoel van voor wie ze het doet. Dit geeft ze de meeste informatie om aan te geven wat ze willen bereiken (missie) en waarom ze dit doen (visie). Een simpele rekensom:

>[positioning statement]'Merknaam' biedt de 'doelgroep' 'wat', zodat 'waarom'. 'motto'!

### Visual identity

De volgende stap geeft het merk een gezicht. De industrie en waarden van het merk worden vertaald naar kleuren die passen bij het archetypische grondwerk passen dat zij zichzelf aanmeten. Kleurtheorie en kleurstellingen worden gebaseerd op een berekening van waarden, zodat bijvoorbeeld een stoer merk meer met kleurschakeringen werkt en een ander merk met andere kleurtoon weer met kleurtinten een effect bereikt. Typografie biedt een aantal lettertypes dat bij hun merkbepalingen spreekt. Beeldtaal haalt beelden op die passen bij hun kleurstelling, doelgroep en industrie. Dit alles is uiteraard ook direct terug te zien in de previews aan de rechter kant van de interface.

### Brand Voice and Tone

Nu ze zelf een gevoel krijgen bij hun merk, kunnen gebruikers aangeven welke tone of voice ze willen uitstralen. Gebruikers vonden dit een lastig concept, maar met een voorinstelling van 4 dimensies (formeel, speelsheid, respect, emotie) en een directe weergave van die spreekwijze, krijgen zij een gevoel van de stem van hun merk. Deze kan direct worden toegepast in copywriting voor het voorstellen van het merk en producten, en hoe zij dit kunnen delen op sociale media.

### Brand Application & Implementation (export):

Daarna kunnen ze in de categorie kant-en-klare UI-kits, socialmediakits en drukwerktemplates genereren die aansluiten op hun merkontwerp of een offerte aanvragen om deze resultaten verder uit te werken en eventueel te hosten.

## Mid/High Fidelity Prototypes

### Interactief prototype

In html/css/js heb ik een snel prototype ontwikkeld dat het gevoel moet geven van het bepalen van een merk op basis van wat simpele keuzes.

<figure>
  <video width="100%" aspect-ratio="2" autoplay="" loop="">
    <source src="/images/daden-fun-proto.mp4" type="video/mp4">
  </video>
  <figcaption>kKlikbaar prototype</figcaption>
</figure>

### Technologie en Ontwikkeling

Samen met een back-end developer bouw ik dit platform met Angular 19 en TailwindCSS 3.4.17. Dit prototype heeft de interface van het wireframe en wat functionaliteit van het klikbare prototype, maar bevindt zich nog in een vroeg stadium. 

![Wireframe van het prototype](/images/daden-fun-prototype.png)

### Gebruikerstesten

Na wat gebruikerstesten bleek dat gebruikers het lastig vonden om sommige termen te begrijpen. Ook waren de keuzes wel duidelijk getoond in de resultaten, maar was niet helemaal duidelijk wat directe effecten waren op andere keuzes die ze later maakten. In z'n geheel wat het zien van het menu geen voordeel voor de gebruiker, zoals ik dat wel had verwacht. Naarmate de interface verder vorm zal krijgen in de functionaliteit, zal ik de structuur dus nog moeten aanpassen.

### Toekomst

Komenden maanden zullen wij nog aan de gang gaan het met stadaardiseren van componenten en daarmee de interface opnieuw opbouwen. Dit zal er toe leiden dat er in april nog wat gebruikerstests moeten worden afgenomen, waarna we hopen de interface binnen een paar maanden online te hebben staan. Ik hoop jullie hier op mijn portfolio over te blijven informeren.