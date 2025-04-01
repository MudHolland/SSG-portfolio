---
# exclude: true
featured: true
layout: post.njk
title: Sevastapol 2025
description: "Let op: Gedetailleerde analyse van het herontwerp van het portfolio wordt gestart. Gebruikmakend van retro 70's tekstgebaseerde gebruikersinterface geïnspireerd door de Alien-franchise. Ga voorzichtig te werk..."
opening: Het was een donkere en stormachtige nacht toen het idee bij me opkwam. Het moderne web, met zijn strakke lijnen en levendige kleuren, was verouderd. Ik verlangde naar iets meer...
date: '2025-04-01'
thumbnail: /images/alien-sevastapol.jpg
headerImage: /images/alien-sevastapol.jpg
tags:
  - Web Design
  - Interaction Design
  - Inspiratie
redirect: /project/sevastapol/
---

## De grote interface-overhaul van 2025

Ik verlangde naar  meer... iets dat rillingen over de ruggengraat van mijn bezoekers zou bezorgen. En toen drong het tot me door: de jaren 70. Het tijdperk van tekstgebaseerde gebruikersinterfaces, waarin elke interactie voelde als een commando aan de mainframe van een ruimteschip. Geïnspireerd door de huiveringwekkende sfeer van de Alien-franchise, begon ik aan een missie om mijn portfolio om te vormen tot een retro-futuristisch meesterwerk.

### Een reis terug in de tijd

Toen ik dook in de archieven van de sciencefiction uit de jaren 70, raakte ik gefascineerd door de eenvoud en de rauwe kracht van op tekst gebaseerde interfaces. De groene oplichtende gloed, het scherpe contrast van zwart en groen en het onheilspellende gezoem van een CRT-monitor. Het was perfect. Ik wist dat dit de richting was die mijn website op moest.

![De mainframe 'Mother' uit de Alien-film](/images/alien-sevastapol.jpg)

### De transformatie

Met trillende handen begon ik aan de transformatie. Het strakke, moderne ontwerp van mijn portfolio werd weggehaald en vervangen door de spookachtig mooie esthetiek van een computerterminal uit de jaren 70. De tekst, nu een levendig groen, stak af tegen de pikzwarte achtergrond. Elk element was zorgvuldig vervaardigd om het gevoel op te roepen van het navigeren door het bedieningspaneel van een ruimteschip.

![Bedieningspanelen in de Death Star uit Star Wars](/images/death-star-control-room.jpg)

### De interface

De dagen van intuïtieve, gebruiksvriendelijke interfaces zijn voorbij. In plaats daarvan een doolhof van tekstopdrachten en cryptische berichten. Bezoekers moeten nu door mijn portfolio navigeren met de precisie van een ruimteschippiloot, waarbij elke klik en toetsaanslag hen dichter bij het onthullen van de verborgen geheimen brengt.

![HAL 9000 Interface uit 2001: A Space Odyssey](/images/hal-9000.jpg)

### De ervaring

Terwijl u mijn opnieuw ontworpen portfolio verkent, voelt u de spanning en opwinding van een sci-fi-thriller uit de jaren 70. De griezelige gloed van de tekst, het minimalistische ontwerp en het gevoel van naderend onheil zullen u meenemen naar een tijd waarin de toekomst onzeker was en technologie zowel een wonder als een bedreiging was.

![Groene vallende code uit The Matrix](/images/matrix-code.gif)

### Wat een dag

Maar pas op, beste bezoeker, want deze transformatie is niet wat het lijkt. Op deze dag nodig ik u uit om met mij mee te doen aan een speelse ode aan het verleden. Dus leun achterover, ontspan en geniet van de rit. En vergeet niet: 'in de ruimte kan niemand je horen klikken.'

### Terug naar het heden

Vind je het nou toch niks, of wil je gewoon weer even weten hoe het internet en er in het heden uit ziet, klik dan onderaan de pagina op 'terug naar het heden' om terug gegaan naar de vorige stijl.


<audio id="crt-sound" src="/images/crt-sound.mp3" loop></audio>

<script>
    // Automatically set preferred stylesheet to /css/sevastapol-2025.css
    const preferredStylesheet = '/css/sevastapol-2025.css';
    localStorage.setItem('preferredStylesheet', preferredStylesheet);
    const stylesheet = document.getElementById('main-stylesheet');
    const crtSound = document.getElementById('crt-sound');

    document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('crt-sound');
      if (audioElement) {
          audioElement.volume = 0.25;
        }
    });

    function playCrtSound() {
        if (crtSound) {
            crtSound.play().catch(error => {
                console.error('Error playing CRT sound:', error);
            });
        } else {
            console.log('CRT sound element not found');
        }
    }

    function stopCrtSound() {
        if (crtSound) {
            crtSound.pause();
            crtSound.currentTime = 0;
        }
    }

    function checkAndPlayCrtSound() {
        if (localStorage.getItem('preferredStylesheet') === '/css/sevastapol-2025.css') {
            playCrtSound();
        } else {
            stopCrtSound();
        }
    }

    if (stylesheet) {
        console.log(`Automatically setting preferred stylesheet: ${preferredStylesheet}`);
        stylesheet.setAttribute('href', preferredStylesheet);
        checkAndPlayCrtSound();
    } else {
        console.log('Stylesheet not found');
    }

    // Monitor stylesheet changes
    const observer = new MutationObserver(() => {
        checkAndPlayCrtSound();
    });

    observer.observe(stylesheet, { attributes: true, attributeFilter: ['href'] });

</script>