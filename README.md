Opdracht: Testen - TDD van A tot Z PasswordVerifier


In onderstaande opdracht moet je een functie maken die een password gaat valideren. Maar, als ware TDD wizards die jullie nu zijn gaan we ervan uit dat jullie uiteraard eerst de test(s) schrijven die deze functie gaat valideren, alvorens jullie met de functie aan de slag gaan:



Setting up:
Maak een nieuwe map voor deze opdracht
Installeer Jest in deze map zoals je dat eerder hebt gedaan
Testen met Jest - De set-up

Opdracht: Password verificator
Functionaliteit
De functie die we uiteindelijk gaan schrijven moet verifyPassword heten. We geven deze functie één argument. Dat argument gaat "iets" zijn dat we gaan checken om te kijken of het een goed genoeg wachtwoord is.

We hebben de volgende condities die we gebruiken:

password is korter dan 9 karakters
password is niet null
password heeft 1 of meer uppercase karakters
password heeft 1 of meer lowercase karakters
password heeft 1 of meer cijfers
Een wachtwoord wordt alléén goedgekeurd als:

tenminste 3 van de bovenstaande condities true zijn
conditie 4 true is (die moet dus altijd true zijn)
Voorbeelden van goed- en afgekeurde wachtwoorden

henkie1
1234a
z
henkie1234
HENKhenk
HENK33$
1234
 `` (leeg dus)
Bedenk bij elk wachtwoord hierboven welke condities wel én niet gelden en waarom het goed- of afgekeurd is.

Werkwijze
Om volgens de TDD werkwijze te werken willen we in ieder geval heel regelmatig onze tests draaien. Zorg er dus voor dat je dat met één druk op de knop kan doen in je terminal. We willen hier een superkorte feedback loop hebben. Elke keer nadat je een testfunctie toevoegt: 1 → draai je tests en 2 → check of je het resultaat krijgt wat je verwacht. Elke keer nadat je code-under-test toevoegt: 1 → draai je tests en 2 → check of je het resultaat krijgt wat je verwacht.

per conditie:
elke conditie krijgt zijn eigen functie
schrijf een aantal tests die checken of die functie goed werkt
tests waarbij we verwachten dat de functie true terug geeft
tests waarbij we verwachten dat de functie false terug geeft
schrijf vervolgens de functie zelf
zorg dat alle tests passen
schrijf nu tests voor de algemene functie passwordVerifier:
tests waarbij we verwachten dat de functie true terug geeft
tests waarbij we verwachten dat de functie false terug geeft
denk goed na over de combinatie van condities die je moet testen
schrijf vervolgens de functie verifyPassword en zorg dat die de condities goed combineert
zorg dat alle tests passen
als je later nog "edge cases" verzint: voeg daar extra tests voor toe