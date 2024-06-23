# YourStudEvent

YourStudEvent este o aplicație web de evenimente culturale, educaționale destitanată atât studenților, cât și organizatorilor.
Aplicația permite utilizatorilor să se înscrie în cadrul unor evenimente, iar organizatorilor să creeze evenimente pe site.
Aceasta se poate găsi [aici](https://github.com/AndreeaLazaroniu/YourStudEvent.git).
 
Pentru applicația client s-a folosit React, iar pentru aplicația server s-a folosit .NET 8.0.

## Cerințe
### Descărcare .NET, Rider NodeJS, WebStorm

Pentru aplicația de backend este necesară instalarea [Git](https://git-scm.com/downloads), [.Net Framework](https://dotnet.microsoft.com/en-us/download/dotnet-framework) și [Rider](https://www.jetbrains.com/rider/). 

Pentru aplicația de fronend este necesară instalarea [NodeJS](https://nodejs.org/en/download/package-manager) și [WebStorm](https://www.jetbrains.com/webstorm/download/?source=google&medium=cpc&campaign=EMEA_en_EAST_WebStorm_Branded&term=webstorm&content=523833970721&gad_source=1&gclid=EAIaIQobChMI-ryC8fnxhgMVPadoCR0aQgzkEAAYASABEgJauvD_BwE#section=windows)

## Deschiderea proiectului
În terminalul de git bash se folosește următoarea comandă pentru clonarea repository-ului de pe GitHub.
```bash
git clone https://github.com/AndreeaLazaroniu/YourStudEvent.git
```
În WebStorm se va crea un nou proiect React, iar în Rider un proiect ASP Core folosind .NET 8.0. După ce proiectele au fost generate se vor pune în locul fișierelor generate automat, fișierele aduse de pe GitHub.

## Configurarea proiectului

Pentru frontend se va merge la nivelul „package.json” și se va rula în terminal comanda:
```bash
npm install
```
Acest pas va instala toate dependențele necesare, așa cum sunt specificate în fișierul „package.json” al proiectului.

Pentru aplicația de backend Rider va detecta automat fișierele de proiect și va configura mediul de dezvoltare corespunzător. Dacă sunt necesare dependențe suplimentare, Rider le va sugera spre instalare.

## Rularea proiectului

În WebStorm, se deschide terminalul integrat și se execută:
```bash
npm start
```
Aceasta va rula scriptul de start definit în package.json și va lansa aplicația în modul de dezvoltare. De obicei, serverul de dezvoltare va rula pe http://localhost:3000.

În Rider, se navighează la meniul Build și se selectează Build Solution. Aceasta va compila proiectul și va rezolva orice dependențe necesare. După construire, se poate rula aplicația direct din Rider. Se selectează configurația de rulare adecvată din lista de configurări (situată în partea de sus, lângă butoanele de run/debug) și se apasă pe butonul Run pentru a începe execuția proiectului.
















