---
layout: post.njk
title: Onboarding en Interfaces ontwerpen om depressie te leren zien en begrijpen
description: In dit project heb ik een aangeleverd gameconcept omgezet tot een prototype dat depressie inzichtelijk maakt. Door een combinatie van narratieve, zintuiglijke en uitdagende ervaringen laat ik de speler ervaren hoe depressie alles tot een overweldigend obstakel kan maken.
opening: Tijdens dit project heb ik een gameconcept van een medeontwerper omgezet tot een speelbaar prototype dat een beoogd doel moet bereiken middels een duidelijke interface en onboarding. In dit spelconcept speelt de psychische aandoening Depressie de hoofdrol. Het document omschrijft een narratieve, onderdompelende speelvorm die aantoont wat er gebeurt met mensen die leiden aan een depressie. De casus van depressie staat centraal en is het mij vrij het ontwerp van game interface en onboarding te ontwerpen en presenteren.
date: '2022-04-15'
headerImage: /images/sag-lwg4-highfidelity.png
thumbnail: /images/sag-lwg4-highfidelity.png
tags:
- Game Design
- Behavior Design
- Interaction Design
- Showroom Research
---

## Casus: Spel versus depressie

Kijken we naar spel en spelen, dan vinden we de betekenis van de vrije en ontdekkende houding die een speler heeft (de zogeheten Lusory Attitude) om een ervaring van spel of speelse houding aan te gaan:

>[Lusory attitude] "The voluntary attempt to overcome unnecessary obstacles."

Bij depressie zien we echter het compleet tegenovergestelde: geen poging, vrijwillig of geforceerd, om zelfs ook maar benodigde activiteiten uit te voeren, zoals uit je bed komen, tanden poetsen, douchen, sociale verplichtingen of eten.

Het lijkt hiermee dus alsof haast onzichtbare drempels zoals opstaan ongelofelijk grote, verstikkende obstakels worden. Het is belangrijk deze ervaring goed over te brengen.

#### Doelgroep

In de casus wordt gesproken over meerdere doelgroepen:
1. Mensen die in een depressie zitten,
2. Mensen die iemand kennen die in een depressie zit,
3. Mensen die willen ontdeppen wat een depressie inhoudt.

De verhalende, onderdompelende ervaring waar het ontwerpdocument op focust, past het beste bij de derde groep. Dit zou ook de tweede groep kunnen aanspreken. Deze twee groepen zijn op zoek naar een ervaring die helpt de problematiek van mensen met een depressie leren zien en begrijpen.

## Beleving

De casus en mijn onderbouwing leiden tot de volgende beleving voor dit ontwerp:

> "De speler onderdompelen in een verhalend spel dat toont hoe verstikkend depressie kan zijn doordat alles een obstakel wordt."

De belangrijke woorden hier in zijn **onderdompelen**, **verhalend**, **verstikkend** en **obstakels**.

### Aesthetics

Met deze woorden kan via welke aesthetics uit het MDA-framework hier het beste op aansluiten:

#### Narrative

Een meeslepend verhaal kan depressie uitleggen aan de hand van gebeurtenissen, handelingen en gedachten van een hoofdpersoon. De speler dient dus een hoofdpersoon te bedienen die te maken krijgt met depressie, zodat de speler zich kan inleven en kan ervaren wat depressie is en met je doet.

#### Sensation

Depressieve mensen ervaren een steeds donkerdere en verstikkendere wereld. Donkerte, overstimulatie door geluiden uit de omgeving, het gevoel van verdrinken, zowel figuurlijk als letterlijk. Overspoeld worden door emotie en apathie.

#### Challenge

Mensen met een depressie zeggen vaak dat de kleinste taken lastiger tot onmogelijk worden. Zelfkritiek en eenzaamheid nemen hierdoor toe, wat deze taken alleen maar lastiger maakt.

### Water als een metafoor voor depressie

Deze aesthetics dienen als een centraal punt waar de ervaring omheen gebouwd wordt. Om dit verder af te bakenen, kan een centrale metafoor helpen. Deze metafoor biedt handvatten om de ontwikkelings- en ontwerpfase te stroomlijnen.

De termen van 'onderdompelen', 'overweldigend, donker', 'steeds zwaarder','overspoeld worden, verdrinken' doen allemaal denken aan water. Water kan hiermee een kwachtige metafoor zijn om de depressie te tonen en te zorgen ervoor dat deze drie aesthetics bereikt worden vanuit een centraal ontwerp.

#### Narrative

- Door water wordt de wereld donkerder. Door in de gedachen hier op in te gaan en deze verwoordingen over te nemen worden deze woorden somberder.
- Als het water hoog genoeg komt zorgt het ervoor dat de stem van hoofdpersoon niet meer te horen is. Positieve gedachten verdrinken in het geluid.
- Zien dat het erger wordt en dat niks helpt helpt bij het hopeloze gevoel.

#### Sensation

- Water dat de spelwereld overspoelt, zorgt ervoor dat inputmogelijkheden troebel worden en daardoor onleesbaar zijn,
- Door het donkerder worden van de spelwereld worden inputs moeilijk te vinden,
- Het geluid maakt gedachten van de hoofdrolspeler lastiger hoorbaar, waardoor onduidelijk is wat de speler moet doen om verder te komen.

#### Challenge

- Taken worden door een stijgende waterspiegel moeilijker doordat winstates moeilijker te halen worden,
- Doordat inputs onduidelijker, lastiger tot niet te bedienen worden, of niet op de verwachte manier reageren.

## Game System

### Interactie

Interactie tussen het spel/systeem en de speler vindt plaats middel het Interactiemodel (rechts afgebeeld). Dit vindt op de volgende manier plaats:
- De speler wil een actie uitvoeren,
- De user interface informeert de gebruiker over de beschikbare mogelijkheden,
- De gebruiker bedient een input om de bepaalde actie uit te voeren,
- De actie zorgt voor een verandering in het systeem,
- Het systeem informeert de gebruiker middels outputs in de user interface hoe de spelwereld (perspectief) is veranderd.

![Schematische weergave van (spel-)interactie tussen de speler en het spelsysteem - Weergave van (spel-)interactie tussen de speler en het spelsysteem](/images/sag-lwg4-interactiemodel.png)

### User Interface

Deze user interface omvat alles waarmee de gebruiker en de speler met elkaar interacteren. Dit wordt bepaald door de eigenschappen van de gebruiker (zicht, gehoor, etc.) en het systeem (controller, speaker, trilmotor, GPS-functionaliteit, etc.). In een later stadium kan ook rekening worden gehouden met spelers die door een handicap niet alle interactiemethodes kunnen gebruiken.

Het systeem waarvoor ik het concept ga ontwikkelen is de huidige mobiele telefoon, omdat nagenoeg iedereen een mobiele telefoon bezit, en mobiele telefoons bijna allemaal over dezelfde interfaces beschikken:

#### Input
- Aanraking (touch-screen)
- Beweging (gyro/accelerometer)
- Luchtdruk (microfoon)
- Locatie (GPS, bluetooth, wifi)

#### Output

- Weergave (scherm, flits)
- Geluid (speaker, trilling)
- Voelen (trilling)

#### Affordances (feed-forward)

Door deze outputs kunnen een verscheidenheid aan affordances worden uitgebeeld: welke knop moet je gebruiken om een actie uit te voeren. Als de gebruiker door de user interface ook daadwerkelijk weet wat de uitkomst gaat zijn van de actie, nog voor de gebruiker tot actie overgaat, spreken we over feed-forward.

#### Feedback

Na het uitvoeren van de actie koppelt het systeem via de user interface terug aan de gebruiker wat het gevolg van de actie is. Deze feedback, door manieren van output, kan een gevoel overbrengen en versterken. De manier van het overbrengen van de feed-forwards en feed-backs kan dus sterk bijdragen aan hoe de aesthetics in mijn concept worden ervaren.

### Onboarding

Onboarding is het proces dat gebruikers bekendmaakt met de mechanics van een spel. Het leert de gebruiker wat ze kunnen doen in het spel en waar deze acties to leiden. Worden zij eerst nog uitgedaagd een mechanic te gebruiken, later zullen zij zelf moeten bepalen welke interactie nodig is om obstakels te overkomen. Deze drie stappen zien er als volgt uit:

1. **Introduction:** de gebruiker wordt getoond welke mechanic ze kunnen gebruiken.
2. **Complication:** de gebruiker gebruikt de mechanic om een stap verder te komen,
3. **Mastery:** de gebruiker moet bewust zijn van de beschikbare mechanics, hun invloed op de hoofdpersoon en de spelwereld en feed-forward loops.

Aangezien onboarding al een gigantisch onderwerp op zich is, heb ik hier een aparte pagina aan gewijd. Deze is te vinden onder de naam [Onboarding in drie simpele stappen](/blog/2022-06-onboarding/).

#### Octalysis en spelertypes

Een octalysis analyse toont wat spelers aantrekt in een spel, bijvoorbeeld een gevoel van ware betekenis, of gevoel dat je iets hebt behaald. Dit noemt de maker van de octalysis analyse, 'Core Drives', oftewel drijfveren van de speler. Door deze drijfveren te indexeren, kun je als maker vastleggen hoe je je spelers aantrekt. Deze analyse is uit te breiden door dit voor alle verschillende (Bartle) spelertypes te doen, en daarna nog toe te passen op de verschillende fases van een spel:
- **Discovery:** Nog voor je daadwerkelijk het spel gaat spelen, wat zorgt ervoor dat je wil gaan spelen? De doos, plaatjes ervan, let'splays?
- **Onboarding:** Het leren en uitgelegd krijgen van de mechanics, de regels en onderdelen die je nodig hebt om volledig te kunnen spelen,
- **Scaffolding:** Het pad wat je aflegt bij het bereiken van het doel tijdens het spelen,
- **Endgame:** Wat je doet als je na dit einddoel kunt blijven doen.

Tweede en derde level octalysis analyse bieden mij als ontwerper van het spel en zijn mechanics een handvat om player types in (onder andere) de onboardingsfase te bepalen. Ik focus hierbij op de Explorer en Achiever, omdat dat de spelertypes zijn waar het spel op focust. De bijbehoren Octalysis-analyse die hier bij hoort is hieronder afgebeeld.

![Level 3 Octalysis Analyse: verloop van epic meaning en accomplishment naar unpredictability en avoidance](/images/sag-lwg4-octalysis-Level3.png)

### Player Types

#### Explorer

Het spel focust de Narrative- en Sensation-aesthetics voor Explorers bij de discovery en avoidance op Epic Meaning, en schuift bij scaffolding richting Avoidance:
- Verhaalvertelling schuift naar verliezen van progressie,
- Verhaal volgen schuift naar FOMO, de angst dat je het verhaal niet goed eindigt,
- Het tegengaan van stijgend water leidt tot het niet meer willen spelen.

#### Achiever

Het spel focust de Challenge-aesthetic voor Achievers eerst op Accomplishment en schuift bij de scaffolding-fase richting Unpredictability/Avoidance:
- High score halen schuift naar dat het zo moeilijk wordt dat alleen maar lagere scores worden behaald,
- Een kamer verlaten zorgt ervoor dat je in dezelfde kamer uitkomt: sunk cost prison.

## Interacties

Bij het ontvangen van het concept-document werd ingegaan op verschillende onderdelen van depressie. Onderdelen hiervan waren negatieve reacties, communicatie met vrienden en familie, bediening als 'walking simulator' en verminderde interactie. Middels schetsen ben ik verschillende interfaces en interacties gaan onderzoeken.

![Schetsen: low-fidelity schetsen om te divergeren in oplossingen en ideeën](/images/sag-lwg4-schetsen.png)

Middels deze schetsen ben ik tot een betekenisvolle interactie gekomen die de beschreven aesthetics met de metafoor van water via de accomplishment naar unpredictability en avoidance laat lopen. Dit moet een algeheel gevoel geven voor hoe bij verdere ontwikkeling het spel ervaren dient te worden door de gebruiker.

### Leegscheppen

Door te swipen op het scherm *(input)* kan de speler de hoofdpersoon een emmer water weg scheppen en het waterpeil laten zakken *(output)*. Een swoosh-geluid geeft aan dat de hoofdpersoon schept en het waterpeil zakt *(feedback)*.

#### Onboarding

Als de speler heeft geprobeerd de deur en het raam open te doen en het water blijft stijgen valt er een emmer van een kast, het beeld in. Deze emmer heeft een contrasterende kleur, waardoor opvalt dat de gebruiker hier iets mee kan. Als de gebruiker er op tikt klinkt een positief geluid, pakt de hoofdpersoon de emmer met een zwaai op en klinkt er een klotsend geluid. Het waterniveau zakt, wat voor de speler de emmer aan het waterniveau moet koppelen. Door de zwaai van het oppakken na te doen (vegen over het scherm), klinkt er weer klotsend water en het niveau zakt. Het water stijgt echt steeds sneller, waardoor de speler niet snel genoeg kan scheppen om het water weg te krijgen. En weer gaat de speler van Accomplishment naar Avoidance.

#### Aesthetics

Dit wordt steeds lastiger (challenge), omdat het water sneller en sneller stijgt. Naarmate het waterniveau stijgt wordt het ook donkerder omdat lampen kortsluiten, knipperen en uit gaan (sensation).

#### Dynamics als gevolg van mechanics, gebaseerd op aesthetics

Gyro/accelerometers kunnen gebruiken worden uit te lezen hoe het apparaat gedraaid is, en kan afhankelijk hiervan onderdelen in de omgeving en het waterpeil op de rotatie van de telefoon (bij gebruik van game consoles zou dit ook de controller kunnen zijn). Dit vergroot het gevoel van een dynamische omgeving en beleving van ín de situatie zijn.

## Prototyping

Voor de prototypes gebruik ik het programma ProtoPie. ProtoPie biedt de mogelijkheid om met simpele vormgeving (de schetsen die ik reeds heb gemaakt), interactief te maken. Interactie heeft namelijk een essentiële rol in een spelontwerp. Het scenario voor leegscheppen gebeurt in een aantal stappen:
- Het waterniveau stijgt, de gebruiker ziet een negatieve verandering in de emotie van de speler (narrative) en de spelwereld. De speler wil dit oplossen (goal/challenge), maar er zijn geen oplossingen,
- Als het waterniveau (variabele WaterNiveau) een bepaald punt bereikt, valt de emmer. Het perspectief van de speler op de wereld verandert door output van het systeem. Dit gebeurt op een - voor de gebruiker - onvoorspelbaar moment, maar ligt van in de code (mechanic),
- De emmer heeft een contrasterende kleur en heeft geïnteracteerd door te tikken (signifier), het ziet er uit als een emmer (affordance), dus ze weten dat het gebruikt kan worden om water te scheppen, waardoor ze het probleem met water zouden kunnen oplossen (feed-forward),
- Als de speler op de emmer tikt (input leidt tot actie), beweegt deze naar de hoofdpersoon toe (output),
- Als de emmer bij de hoofdpersoon is, beweegt de emmer in een scheppende beweging, om aan te tonen aan de gebruiker dat een vloeiende beweging als input dient. Als de emmer een vloeiende beweging maakt, zakt het waterniveau (hands-on tutorial, feed-forward wordt gecreëerd),
- Als de gebruiker in vloeiende beweging over het beeld veegt (input), beweegt de emmer met dezelfde beweging en laat het waterniveau zakken (output),
- Het water blijft alsmaar stijgen, tot het bepaalde punt weer wordt bereikt,
- Als de gebuiker een vegende beweging maakt, gaat het water omlaag, maar tegelijkertijd stijgt het water sneller dan voorheen (variabele WaterStijgt wordt groter). Dit maakt het uitvoeren van de handeling moeilijker niet moeilijker, maar het bereiken van het doel (oplossen van het water) moeilijker.
- Er is geen manier om het water stijgen op te laten lossen, dus de speler zal vroeger of later accepteren en overgeven aan het feit dat ze helemaal onder water zijn (een depressie ervaren).

<figure>
	<iframe src="https://cloud.protopie.io/p/6b6069d780?touchHint=false&amp;ui=false&amp;scaleToFit=true&amp;cursorType=touch&amp;mockup=true&amp;playerAppPopup=false" style="border:0px #ffffff none; border-radius:var(--size-s)" name="eXperienceProtopie" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" width="640px" height="320px"></iframe>
	<figcaption>Mid-fidelity prototype: Interactie leegscheppen</figcaption>
</figure>

Om de ervaring beter aan te laten sluiten op de ervaring die ik voor ogen heb, hoef ik hierdoor alleen nog maar achtergrondgeluid en -afbeeldingen aan te brengen en de huidige assets te vervangen voor realistischere afbeeldingen.

<figure>
	<iframe src="https://cloud.protopie.io/p/84d208eb76?touchHint=false&amp;ui=false&amp;scaleToFit=true&amp;cursorType=touch&amp;mockup=true&amp;playerAppPopup=false" style="border:0px #ffffff none; border-radius:var(--size-s)" name="eXperienceProtopie" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" width="640px" height="320px"></iframe>
	<figcaption>High-fidelity prototype: Interactie leegscheppen</figcaption>
</figure>

Ik heb de ervaring uitgebreid door de achtergrondmuziek toe te voegen, en het na 10 seconde te laten klinken alsof je onderwater bent. Dit draagt, samen met het donkerder worden en het kantelen bij bewegen van de telefoon, bij aan het gevoel dat je er echt bent, immersie, en daarmee sensation.

### Testen

Ik heb de mid- en high-fidelity prototypes getest met de doelgroep. Hierbij waren conclusies dat mijn participant (een achiever) inderdaad het scherm leeg wilde krijgen, en het erg oneerlijk vond dat, toen het gelukt was (accomplishment), dit geen effect had. dit leidde er snel toe dat ze het niet meer wilde proberen (avoidance).

De participant voelde gedurende de prototypes door de ervaring en uitdaging vooral verwarring wat overging in een gevoel van nutteloosheid en frustratie. Hiermee heb ik het gevoel dat de uitdaging van depressie overkomen zeker overkomt, en de sensatie gedeeltelijk. Het narratief in de vorm van water kwam over bij haar, maar had niet de voorgrond. Hierbij is het duidelijk dat het lastig is om een leuke ervaring van gamen en lol hebben te combineren met de frustrerende ervaring van depressie er nergens lol meer van kunnen inzien.

