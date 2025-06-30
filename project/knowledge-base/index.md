---
layout: base.njk
headerImage: /images/showcases.jpg
title: Kennisbank
description: Met de komst van een nieuw jaar ontwikkelde ik opnieuw een frisse huisstijl die mijn groei en experimentdrang als ontwerper weerspiegelt. Waar de vorige stijl nog draaide om balans en subtiliteit, omarmt de nieuwe stijl voor 2025 juist contrast, richting en directheid.
---
<body>
    <header>
        <div class="header-content">
            <h1>Kennisbank</h1>
            <p class="subtitle">Onderwerpen met uitleg over design, development en projecten</p>
        </div>
        {% if headerImage %}
            <img class="header-img blur" src="{{ headerImage }}" alt="" {% if headerImagePosition %}style="object-position: {{ headerImagePosition }};"{% endif %}>
        {% endif %}
        <div class="header-gradient"></div>
    </header><div class="cards" style="gap:0.5rem;">
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>Fitts' Law</h3>
            <p style="margin-top:-1rem;">Hoe groter en dichterbij een interactie-element is, hoe sneller een gebruiker het kan aanklikken. Denk aan grote CTA-knoppen of gemakkelijk bereikbare menu-items op mobiele apparaten.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Snelle, moeiteloze interactie vermindert frictie en verhoogt conversie. Fitts’ Law helpt bij het ontwerpen van efficiënte en toegankelijke interfaces.</p>
            <a href="https://lawsofux.com/fittss-law/" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">Interaction Design</div>
                <div class="chip red">UX Principles</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>Hick’s Law</h3>
            <p style="margin-top:-1rem;">Hoe meer keuzes een gebruiker krijgt, hoe langer het duurt om een beslissing te nemen. Beperk dus het aantal opties in een menu of formulier.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Eenvoudige keuzes zorgen voor snellere beslissingen en minder cognitieve belasting. Dit leidt tot een prettiger en effectiever gebruik van de interface.</p>
            <a href="https://lawsofux.com/hick-s-law/" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">UX Design</div>
                <div class="chip green">Usability</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>60-30-10 Regel</h3>
            <p style="margin-top:-1rem;">Een richtlijn voor kleurgebruik: 60% dominante kleur, 30% secundaire kleur, 10% accentkleur. Dit zorgt voor visuele harmonie en focus.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Een uitgebalanceerd kleurenpalet voorkomt visuele ruis en legt nadruk op call-to-actions of belangrijke informatie.</p>
            <a href="https://99designs.com/blog/tips/the-60-30-10-rule/" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">Web Design</div>
                <div class="chip green">Visual Design</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>Jakob’s Law</h3>
            <p style="margin-top:-1rem;">Gebruikers verwachten dat jouw site werkt zoals andere sites die ze kennen. Denk aan standaard navigatie, iconen en interactiepatronen.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Door in te spelen op verwachtingen hoeven gebruikers minder na te denken. Dat maakt je product intuïtiever en aangenamer in gebruik.</p>
            <a href="https://lawsofux.com/jakobs-law/" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">Interaction Design</div>
                <div class="chip green">Usability</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>Serial Position Effect</h3>
            <p style="margin-top:-1rem;">Mensen onthouden het eerste en laatste item uit een reeks beter dan de tussenliggende. Gebruik dit voor menu’s of lijsten met belangrijke keuzes.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Belangrijke informatie op strategische plekken vergroot de kans dat gebruikers deze onthouden en gebruiken.</p>
            <a href="https://www.interaction-design.org/literature/topics/serial-position-effect" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">UX Psychology</div>
                <div class="chip green">Interaction Design</div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content" style="margin-top:-1rem;">
            <h3>Law of Prägnanz</h3>
            <p style="margin-top:-1rem;">Mensen nemen complexe vormen waar in de simpelst mogelijke structuur. Duidelijke en consistente visuele patronen zijn dus essentieel.</p>
            <h4 style="margin-top:-0.5rem;">Waarom</h4>
            <p style="margin-top:-1.5rem;">Dit principe helpt gebruikers om snel visuele informatie te interpreteren, waardoor je interface eenvoudiger te begrijpen is.</p>
            <a href="https://lawsofux.com/law-of-pragnanz/" style="margin-top:-1rem;">bron</a>
            <div class="chips" style="margin: -0.5rem -0.5rem -1.5rem; gap:0.5rem;">
                <div class="chip red">UX Psychology</div>
                <div class="chip green">Visual Design</div>
            </div>
        </div>
    </div>
</div>

</body>
