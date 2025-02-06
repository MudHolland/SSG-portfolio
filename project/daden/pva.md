# Daden Designable

<p class="ondertitel">Designing a tool that designs design</p>

![](../src/xzibit.jpg)

## 1. Inleiding  

### Doel van het document  
Dit document beschrijft het plan van aanpak voor de ontwikkeling van een modulaire, stap-voor-stap webtool van design- en developmentgebruik voor beginnende consumenten en zakelijke toepassingen. Het biedt een gestructureerd overzicht van de aanpak, fasering en randvoorwaarden, zodat het project efficiënt en doelgericht wordt uitgevoerd. Het hebben van een plan van aanpak helpt in het zorgen voor een gedeelde visie over werkwijzen en resultaten, en biedt houvast tijdens onzekere momenten gedurende het project. 

### Korte introductie van de opdracht  
Het project richt zich op het ontwikkelen van een toegankelijke en flexibele webapplicatie, beginnend met een kleurpalet-module. In volgende sprints kunnen extra modules worden toegevoegd. 

De focus ligt op een intuïtieve gebruikerservaring en een schaalbare technische architectuur.  

### Leeswijzer  
Het document is opgebouwd uit verschillende secties die de belangrijkste aspecten van het project behandelen:  

- **Doelstelling** geeft aan wat het doel van het project is.
- **Projectorganisatie en communicatie** beschrijft de werkmethode en samenwerkingstools.  
- **Randvoorwaarden en projectgrenzen** geven inzicht in de context en beperkingen.  
- **Op te leveren producten en kwaliteitseisen** definieert de output van het project.  
- **Planning en risicoanalyse** helpt bij het beheersen van tijd en mogelijke knelpunten.  

Elke sectie is opgesteld om snel inzicht te geven in de relevante informatie en beslissingen binnen het project.

## 2. Achtergrond van het project  

### Aanleiding  
Het project is geïnitieerd door Daden, een startup thinktank die zich richt op het ontwerpen en ontwikkelen van creatieve oplossingen voor bedrijven en gebruikers. De organisatie bestaat uit twee oprichters, Dennis en Danny, die elkaar aanvullen op het gebied van design en technologie. Dit project komt voort uit de wens om een laagdrempelige, modulaire tool te ontwikkelen die bedrijven en individuele gebruikers helpt bij het creëren van visuele elementen, te beginnen met een kleurpalet-picker.

De tool is bedoeld om een eenvoudige en flexibele oplossing te bieden voor bedrijven die hun merkidentiteit willen ontwikkelen, met de mogelijkheid om in de toekomst andere modulaire ontwerptools toe te voegen.  

### Opdracht  
De opdracht is om een online platform te bouwen waarmee gebruikers in eerste instantie een kleurpalet kunnen kiezen voor hun merk of project. De focus ligt op het leveren van een eenvoudige, gebruiksvriendelijke interface die snel resultaat biedt. Daarnaast wordt er in de toekomst gedacht aan uitbreidingen zoals exportmogelijkheden en inlogsystemen voor het opslaan van voorkeuren.  

### Belangrijkste stakeholders  
- **Daden Oprichters (Dennis & Danny)**: De belangrijkste stakeholders, die verantwoordelijk zijn voor de visie, ontwikkeling en strategische richting van het project.  
- **Eindgebruikers**: Kleine bedrijven, ontwerpers en creatievelingen die op zoek zijn naar eenvoudige, toegankelijke tools voor het ontwikkelen van visuele elementen.  
- **Toekomstige klanten**: Bedrijven die de tool kunnen gebruiken als onderdeel van hun merkontwerpprocessen of als white-label oplossing.  
- **Testgroep**: Kleinschalige gebruikersgroepen die in de beginfase feedback leveren over de gebruiksvriendelijkheid van het platform.  

### Aanleiding (Urgentie)  
Er is een groeiende behoefte aan eenvoudige digitale tools die creatieve processen vergemakkelijken. Bedrijven, vooral startups en kleine bedrijven, hebben behoefte aan toegankelijkere middelen voor merkontwerp. Het project is urgent gezien de potentie voor groei in de markt van no-code en design-toolkits, met name door de toename van gebruik van AI-modellen, en de wens om snel een MVP te lanceren.  

## 3. Doelstelling, opdracht en op te leveren resultaten voor het bedrijf  

### Probleem/Uitdaging  
Veel kleine bedrijven en creatieve ondernemers hebben moeite met het vinden van toegankelijke en gebruiksvriendelijke tools voor merkontwikkeling. Het gebrek aan eenvoudige, visueel aantrekkelijke ontwerptools maakt het lastig voor deze doelgroepen om professionele en consistente merkidentiteiten te creëren. Er is behoefte aan een platform dat hen in staat stelt om snel en eenvoudig te experimenteren met visuele elementen, zoals kleurpaletten, zonder de noodzaak voor technische kennis of dure designsoftware.  

### Doelstelling  
Het doel van dit project is om een online platform te ontwikkelen waar gebruikers gemakkelijk kleurpaletten kunnen kiezen en aanpassen voor hun merk of project. Het platform moet gebruikers de mogelijkheid bieden om hun visuele identiteit te ontwikkelen zonder ingewikkelde tools of uitgebreide ontwerpervaring. Het eerste product (kleurpalet-picker) vormt de basis, met de intentie om in de toekomst extra designmodules en functionaliteiten toe te voegen.  

### Opdracht  
De opdracht is het ontwikkelen van een modulaire, webgebaseerde tool die gebruikers in staat stelt om kleurpaletten te selecteren, aan te passen en op te slaan. De tool moet visueel aantrekkelijk, gebruiksvriendelijk en functioneel zijn, met de mogelijkheid om gemakkelijk uit te breiden met toekomstige functies zoals een inlogsysteem en exportmogelijkheden.  

### Te verwachten resultaten  

#### Platform  
Een volledig werkend webplatform dat gebruikers in staat stelt om in eerste instantie kleurpaletten te selecteren en aan te passen op basis van hun voorkeuren en behoeften. Het platform moet intuïtief en gebruiksvriendelijk zijn, toegankelijk via een browser zonder dat specifieke software of installatie nodig is.  

#### Producten  
Een eerste versie van de kleurpalet-picker, die de volgende functionaliteiten biedt:  
- Kleurkeuze via een palet of kleurcodes.  
- Dynamische weergave van kleurcombinaties en contrasten.  
- Eenvoudige aanpassingen van de kleuren binnen het gekozen palet.  
- Export van gekozen paletten naar gangbare bestandsformaten (PNG, HEX).  

#### Voorbeeldresultaten  
- Een werkende webtool die gebruikers direct toegang geeft tot het creëren van kleurpaletten.  
- Voorbeeldkleurpaletten die kunnen worden geëxporteerd als PNG- of HEX-bestanden.  
- Een gebruikersinterface die duidelijk en eenvoudig te begrijpen is voor zowel beginners als gevorderden.  

#### Inlog  
Het eerste MVP bevat geen inlogsysteem, maar het platform wordt ontworpen met de mogelijkheid voor toekomstige integratie van gebruikersaccounts. Gebruikers kunnen kleurpaletten opslaan zonder in te loggen, maar dit kan in de toekomst veranderen om een meer gepersonaliseerde ervaring te bieden.  

#### Exportmogelijkheden  
In de eerste versie van de tool wordt export van kleurpaletten voorzien in gangbare formaten zoals PNG en HEX, zodat gebruikers de paletten gemakkelijk kunnen gebruiken in hun ontwerpsoftware. Verdere exportmogelijkheden kunnen in toekomstige versies worden toegevoegd, afhankelijk van gebruikersfeedback en de vraag naar extra formaten.

## 4. Projectgrenzen

### Platform  
- Internet, browser-based (OS-onafhankelijk)  
- Ondersteuning voor moderne browsers (Chrome, Firefox, Edge, Safari)  
- Responsief ontwerp voor desktop en mobiel  

### Duur  
- **Initiële ontwikkelfase**: 6 weken (3 sprints van 2 weken) 
- **Ontwikkelfasen per project**: 6-8 weken

### Gebruikers  
- **Doelgroep**:  
  - Designers en ontwikkelaars die een gestructureerde website-opbouw willen.  
  - Kleine bedrijven en zelfstandigen die snel een visuele stijl willen bepalen.  
  - Niet-technische gebruikers die eenvoudige tools nodig hebben zonder complexe instellingen.  

- **Gebruiksscenario’s**:  
  - Inspiratie voor merk-/conceptontwerp opdoen  
  - Snel kleurenpaletten en UI-elementen testen   
  - Efficiënte workflow zonder uitgebreide ontwerptools
  - Inspiratie voor merk-/conceptontwerp delen (tegen betaling)
  - Inspiratie direct toepassen in webdesign door stijlen te exporteren (tegen betaling)

## 5. Randvoorwaarden  

### Tijd  
- **Planning**: 6 weken per project (3 sprints van 2 weken)  
- **Tijdsbesteding**: Flexibel, maar minimaal 4 uur per week per persoon  
- **Evaluatiemomenten**: Wekelijkse sync en eind van elke sprint  

### Organisatie  
- **Team**: Dennis (Design & UX) en Danny (Development & Tech)  
- **Samenwerking**: Agile/Kanban workflow met wekelijkse evaluaties  
- **Besluitvorming**: Gezamenlijk, met focus op snelle iteraties  

### Geld  
- **Budget**: Eigen tijdsinvestering, minimale kosten  
- **Kosten**: Hosting, domein, tools (GitHub, Figma, eventuele premium API’s)  
- **Verdienmodel**: In eerste instantie geen, wellicht implementatie van ads, later mogelijk betaalde exports/features  

### Kwaliteit  
- **UI/UX**: Toegankelijk, intuïtief en responsief ontwerp  
- **Code**: Gestructureerd, herbruikbaar en goed gedocumenteerd  
- **Testing**: Basis gebruikersfeedback + CI/CD checks  

### Informatie  
- **Documentatie**: Centraal in GitHub Wiki  
- **Besluitvorming**: Vastleggen in GitHub Projects
- **Feedback**: Actief verzamelen via testgebruikers in Github Projects > Bug tracker

### Kennis  
- **Tech Stack**: Bekende tools en frameworks om leercurve te minimaliseren  
- **Design**: Best practices volgen voor UI/UX en branding volgens Tailwind CSS
- **Development**: Continue verbetering via code reviews en iteraties  

## 6. Op te leveren producten en kwaliteitseisen  

### Platform  
- **Toegankelijkheid**: Web-based, OS-onafhankelijk (desktop & mobiel)  
- **Browsersupport**: Chrome, Firefox, Edge, Safari  
- **Hosting & Deployment**: TBD

### Producten  
- **MVP**: Basisversie van de tool met core-functionaliteit  
- **Iteraties**: Verbeteringen op basis van gebruikersfeedback  
- **Toekomstige uitbreidingen**: Mogelijke premium features  

### Deliverables  
- **UI/UX**: Gestroomlijnde interface met duidelijke user flows  
- **Design**: Ontworpen en werkende wireframes en frontend  
- **Gebruiksgemak**: Intuïtieve interacties, minimale leercurve  
- **Testfase**: Basisgebruikersfeedback en iteraties daarop  

### Inlog  
- **MVP**: Anoniem gebruik zonder login  
- **Toekomstoptie**: Optioneel inloggen via OAuth (Google, GitHub)  
- **Opslag**: Gebruikersvoorkeuren opslaan (lokaal of database)  

### Exportmogelijkheden  
- TBD

## 7. Ontwikkelmethoden 

### Stacey Matrix-analyse

De Stacey Matrix helpt bij het inschatten van de complexiteit van een project door te kijken naar vereisten (wat we willen) en technologie (hoe we het bouwen).

#### 1. Vereisten (Wat willen we maken?)

- Er is een duidelijk doel: een modulaire stappenplanwebsite.
- De precieze roadmap is nog niet vastgelegd, en er is onzekerheid over hoe de gebruikers gaan reageren.

Dit plaatst het project tussen de Complicated en Complex zone.

#### 2. Technologie (Hoe bouwen we het?)

- Er is veel ervaring met webtechnologieën en een solide tech-stack.
- De eerste versie van de kleurenpalet-kiezer is technisch haalbaar en niet extreem nieuw of experimenteel.

Dit plaatst het project meer in de Complicated zone dan in de Complex zone.

#### Conclusie: Complicated - richting Complex
De eerste fase (tot aan kleurenpalet-kiezer) is Complicated, omdat:

- De technologie bekend is.
- Er een duidelijke oplossing mogelijk is.
- Het met expertise en planning goed uitvoerbaar is.

Toekomstige uitbreidingen (gebruikersinvoer, AI-generatie, betalingen, opslaan van gegevens) maken het meer Complex, omdat:
- De exacte behoeften en reacties van gebruikers onbekend zijn.
- Er meerdere mogelijke oplossingsrichtingen zijn.
- Het businessmodel nog niet volledig vaststaat.

## 8. Projectorganisatie en communicatie  

### Werkmethode

Een lichte agile aanpak werkt goed:

#### Agile

- Sprints van 2 weken
- Projectverwerking van 3 sprints (conceptualisatie, design, development)
- Wekelijkse evaluatie (bijv. 4 in plaats van 3 sprints nodig)
- Evaluatie en bijstellen waar nodig (Wat werkt? Wat niet? Wat wordt de volgende kleine iteratie?).

#### Kanban board (GitHub Projects, gekoppeld aan repository)

- **Roadmap board**: Milestones worden gekenmerkt door het opleveren van projecten naar de main branch.
- **Team items board** voor taken. Houd taken klein (max. 1-2 dagen werk per taak).
- **Kanban board voor projecttaken**: taken behorend aan een project worden per project vanuit het Team Items board naar het Kanban board geplaatst. 

#### Kanban

Items voor het huidige project worden op de volgende manier in het board geplaatst:
- Backlog (benodigde onderdelen voor huidig project), 
- Concept clear (Ideation/Brainstorm, functionaliteit van onderdelen beschreven), 
- In Progress (Prototyping van ontwerp en ontwikkeling), 
- In review (Testing van ontwerp en ontwikkeling) en 
- Done (projectonderdeel klaar en getest voor productie).

#### Alignment: wekelijkse sync (async mogelijk via Whatsapp/?)

Wekelijks houden we elkaar (donderdagmiddag 15:00 of 20:30) in 1 a 2 uur op de hoogte van de stand van zaken:

- Wat is gedaan?
- Wat blokkeert ons?
- Wat zijn de volgende stappen?

### Tools voor Samenwerking

Gebruik van tools die efficiënt zijn en niet onnodig complex:

GitHub Projects – Voor roadmap, taken en planning, beslissingen en progressie-inzicht.
Github Wiki - documentatie, en learnings.
GitHub – Voor codebeheer en versiebeheer.
Figma – Voor UI/UX ontwerpen en visuele samenwerking.
Whatsapp - Voor korte tussentijdse updates die niet noodzakelijkerwijs hoeven te worden vastgelegd.

### Initiële rollen en Verantwoordelijkheden

#### Dennis (Design & UX/Branding)

- UI/UX Design (Figma).
- Conceptontwikkeling en branding.
- Frontend implementatie.
- User testing en feedback verwerken.

#### Danny (Development & Tech)

- Architectuur en technische keuzes.
- Frontend en backend implementatie.
- CI/CD en deployment.

*Belangrijk: Houd rollen flexibel in de beginfase, maar zorg voor duidelijke eigenaarschap per taak.*

### Feedback en Iteratie

**Snelle testgroep:** Klein aantal gebruikers uitnodigen voor feedback (bijv. via LinkedIn of bestaande netwerken).
**Analytics:** Basis-statistieken bijhouden (bijv. Google Analytics, Hotjar) om gebruik te monitoren.

## 9. Planning

Grove Projectplanning (6 weken, 3 sprints van 2 weken)

### Sprint 1: Conceptualisatie & Structuur (Week 1-2)

- Doel en scope van MVP vaststellen.
- Belangrijkste functionaliteiten uitwerken.
- User flow en wireframes schetsen (Figma).

- Keuze van frontend/backend benodigdheden.
- Opzetten repository en basisstructuur (componenten).

### Sprint 2: UI/UX & Basisontwikkeling (Week 3-4)

- UI/UX-structuur en visuele richting bepalen.
- Mid-fidelity wireframes in Figma ontwikkelen.
- Eerste user testing op concept en itereren.

- Opzetten backend basisstructuur en verbindingen.
- Start frontend implementatie (basiscomponenten).

### Sprint 3: Implementatie & Validatie (Week 5-6)

- High-fidelity webdesign en front-end afronden.
- User testing op werkend product en feedback verwerken.

- Backend-architectuur uitwerken en koppelingen maken.
- CI/CD testen en voorbereiden voor livegang.

### Eventueel sprint 4: Evaluatie, Iteratie & Lancering (Week 7-8)

- Uitgebreide productevaluatie en feedback verzamelen.
- Prioriteren van verbeteringen en iteraties uitvoeren.
- Definitieve usability tests en validatie.

- Bugfixes en laatste optimalisaties.
- Voorbereiden en uitvoeren van de eerste release.
- Communicatieplan en documentatie afronden.

## 10. Risico’s

Inschatting van risico's voor dit project. Impact en kans worden verduidelijkt in de risicomatrix onder de volgende tabel:

| **Risico** | **Impact** | **Kans** | **Risiconiveau** | **Maatregel** |  
|------------|----------|------------------|----------------|-------------|  
| **Scope creep** (Project wordt te groot) | Hoog (3) | Middel (2) | **Groot risico** | Strikte MVP-definitie en scopebewaking per sprint |  
| **Technische obstakels** (Onverwachte complexe implementatie) | Middel (2) | Middel (2) | **Middelgroot risico** | Proof-of-concept per kernfeature en technische validatie in sprint 1 |  
| **Gebruikers vinden product niet nuttig** | Hoog (3) | Laag (1) | **Matig risico** | User testing vanaf vroeg prototype, feedback in roadmap verwerken |  
| **Vertraging in planning** | Middel (2) | Middel (2) | **Middelgroot risico** | Strakke wekelijkse sync en flexibele iteratiestructuur |  
| **Onvoldoende samenwerking/tools werken niet goed** | Middel (2) | Middel (2) | **Middelgroot risico** | Tools en communicatieprocessen in week 1 afstemmen |  
| **Slechte codekwaliteit/bugs in eindproduct** | Hoog (3) | Laag (1) | **Matig risico** | Code reviews, CI/CD en geautomatiseerde tests |  

### Risicomatrix

| Impact / Kans  | **Laag (1)** | **Middel (2)** | **Hoog (3)** |  
|---------------|------------|------------|------------|  
| **Laag (1)**  | Verwaarloosbaar risico | Klein risico, beheersbaar | Matig risico, in de gaten houden |  
| **Middel (2)** | Klein risico, goed te managen | Middelgroot risico, vraagt aandacht | Groot risico, direct aanpakken |  
| **Hoog (3)** | Matig risico, kan impact hebben | Groot risico, actie vereist | Kritiek risico, directe actie vereist |  

<style>
	html{
		width:100%;
		font-size:16px;
		font-family:'inter', sans-serif;
		max-width:900px;
		margin-inline: auto;
		margin-block:60px;
	}

	body{
		max-width:100%;
		margin-inline:16px;
	}

	h1{
		text-align:center;
		font-size:6rem;
		margin-bottom:0rem;
	}

	.ondertitel{
		text-align:center;
		font-size:2rem;
		margin-top:1rem;
		padding-bottom:3rem;
		font-style:italic;
	}

	h2{
		font-size:3rem;
		margin-top:6rem;
	}

	h3{
		font-size:2rem;
	}

	h3, h4{
		margin-bottom:0;
	}
</style>