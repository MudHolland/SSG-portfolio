---
layout: post.njk
title: Digital Wireframe en Usability Testing van Beeldbeschrijvingssoftware voor
  Dedicon
description: In het Mid Fidelity Prototype van de Monet-interface heb ik inzichten uit de Task Flow en Usability Testing verwerkt, resulterend in een intuïtief ontwerp met een gestroomlijnde overzichten en verbeterde interactiviteit om te testen met realistische inhoud in een High Fidelity-prototype.
opening: Met een helder concept kan ik in deze volgende stap van Design-Evaluatie-activiteiten een digitaal ontwerp neerzetten waarmee ik gebruiksvriendelijkheid en intuïviteit kan toetsen en vastleggen.
date: '2024-04-15'
headerImage: /images/midFiWireframe.png
thumbnail: /images/midFiWireframe.png
tags:
- Enterprise Design Thinking
- Agile/Scrum
- Interaction Design
- Co-creatie
- UI/UX
- Web Design
---

## Digital wireframe

Ik heb de schetsen van het papieren gebruikerselementen in Figma digitaal gemaakt. De insteek van wireframe laat kleur en typografie grotendeels buiten het ontwerp. Dit gaf me een eerste beeld van afmetingen, verhoudingen en welke rol visuele en bedieningselementen (covers en afbeeldingen) in het geheel zouden hebben.

![Digital Wireframe - elementen van de interface met zo min mogelijk opmaak](/images/midFiWireframe.png)

Ik realiseerde me hiermee dat veel informatie vaak terugkomt, zoals de weergave-opties. Door deze elementen uit de weg (rechts onderin) te plaatsen, onderbreken ze de flow van de gebruiker niet.

Hier kreeg ik ook het inzicht dat de 'kolommen' (publicatie informatie, afbeeldingenlijst, afbeeldingsinformatie, alternatieve representaties) te versimpelen zijn:

1. Na kiezen van een publicatie heeft de gebruiker de publicatie-informatie niet meer uitgebreid nodig en kan dus gedeeltelijk worden verborgen. Ik verberg dit onder de publicatietitel, zodat de informatie wel op te halen is,
2. Als de publicatie gekozen wordt, geeft de gebruiker aan dat ze willen beginnen met de taken, dus beeldbeschrijvingen maken, de Gulf of Execution van de Don Normans [Human Action Cycle](https://www.simonwhatley.co.uk/writing/human-action-cycle-don-norman/). 'kiezen van publicatie' leidt dus naar 'eerstvolgende te vullen afbeelding geselecteerd in publicatie-informatie, daarbij de velden die moeten worden gevuld: alternatieve representaties'. Het systeem moet aansluiten op deze verwachting (Gulf of Evaluation).

Dit leidt tot de volgende schermen:

![Afbeeldingenoverzicht - versimpeling van de interface met de verschillende niveaus van informatie](/images/MidFi1.png)

#### Afbeeldingenoverzicht

Die inzichten versimpelen het afbeeldingenoverzicht:

1. Publicatie-info en afbeeldingenlijst samengevoegd,
2. Eerstvolgende afbeelding wordt automatisch geselecteerd. Afbeeldingsinformatie en onderliggende alternatieve representaties worden geopend. Deze informatie staat daarmee ook direct centraal in de interface, [center stage](https://www.interaction-design.org/literature/article/center-stage-help-the-user-focus-on-what-s-important).
3. Richtlijnen en controles helpen bij beeldbeschrijven. Deze worden hier dus rechts van geplaatst.
4. Weergave-opties staan rechts onderin, uit de flow.

![Publicatie-overzicht: publicatie-informatie, gebruiker en status per publicatie. Weergave-opties rechts onderin](/images/MidFi0.png)

#### Publicatie-overzicht

De inzichten van het afbeeldingenoverzicht paste ik ook toe op het publicatie-overzicht:

1. Weergave-opties ook hier uit de gebruikersflow,
2. Dit biedt de mogelijkheid om het overzicht van publicaties centraal uit te lijnen, de center stage.

### Interactiviteit

Het herontwerp van de schermen maakt een duidelijk pad in de interface duidelijk. Om deze interactiviteit duidelijk en testbaar te maken, heb ik interacties toegevoegd aan het ontwerp.

![Midfidelity-interactiviteit - Interacties in schermen verwijzen veel naar volgende elementen, en niet naar volgende schermweergaven](/images/MidFiInteractie.png)

## Usability Testing

Ik heb een klikbare interface gemaakt, waarmee ik de interactiviteit tussen gebruiker en het systeem kan testen. Dit geeft mij een beeld van de gebruiksvriendelijkheid van de applicatie. Om de gebruikers te primen met de taakscenario's die ze uit dienen te voeren, heb ik een scherm met taakomschrijvingen toegevoegd. Hierdoor moeten zij zelf de taak selecteren die ze uit moeten voeren, waardoor ze bewuster zijn van wat er verwacht wordt.

