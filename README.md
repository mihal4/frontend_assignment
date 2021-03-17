# Zadanie Frontend developer GoodRequest

Cieľom zadania je vytvoriť jednoduchú aplikáciu v Reacte, ktorá slúži ako formulár pre nadáciu GoodBoy na podporu slovenských útulkov pre psy.

**Aplikácia by mala umožňovať potenciálnym podporovateľom:**

- zvoliť si formu pomoci - všeobecný príspevok pre nadáciu alebo príspevok pre konkretný útulok (povinné pole)
  \*  vybrať si konkrétny útulok zo zoznamu zapojených útulkov (nepovinné v prípade všeobecného príspevku, v opačnom prípade povinné pole)
- zvoliť si výšku príspevku, pričom je možné nastaviť aj vlastnú hodnotu (povinné pole)
- vyplniť svoje osobné údaje:

  - meno - nepovinné pole (2-20 znakov)
  - priezvisko - povinné pole (2-30 znakov)
  - e-mail - validný formát e-mailovej adresy
  - telefón - slovenské alebo české číslo s predvoľbou +420 / +421 so zobrazením zvolenej krajiny vo forme vlajky štátu
  - potvrdiť súhlas so spracovaním osobných údajov (povinné pole)
  - odoslať zvalidovaný formulár, prípadne zrozumiteľne oznámiť používateľovi chybový stav

Pre účely zadania sme vytvorili 2 jednoduché API endpointy - GET zoznamu útulkov zapojených do projektu a POST na odoslanie obsahu formuláru. Dokumentáciu k nim nájdete na nasledovnom odkaze: https://frontend-assignment-api.goodrequest.com/apidoc/

Grafické podklady pre zadanie nájdete na nasledovnom odkaze (registrácia do toolu Figma je zdarma):
https://www.figma.com/file/FyxU4Zzp54tOrmQBNTly7G/GoodRequest-Frontend-Assignment

Nemusíte si z Figmy exportovať assety ako logá, ikonky alebo obrázky - môžete použiť ľubovoľné vlastné. Mali by ste ale dodržať približnú vizuálnu podobu aplikácie.

**Kritériá na použité technológie:**

- Aplikácia musí byť napísaná v React.js, na setup projektu odporúčame create-react-app https://github.com/facebook/create-react-app
- Na state management musí byť použitý Redux https://redux.js.org/
- Štruktúru projektu nechávame kompletne na vás
- Nice to have (nepovinné kritériá):

  - Použiť TypeScript
  - Použiť lokalizačnú knižnicu na stringy (napr. i18next)
  - Použiť styled-components

- Ak vám ostane čas alebo chuť :):

  - Responzívne zobrazenie
  - SEO (implementovať og:image a rôzne titles a descriptions na jednotlivých stepoch formuláru)

**Postup odovzdania zadania:**

- Naklonujte si tento repozitár k sebe
- Umiestnite ho do verejného github / bitbucket repozitáru a svoju prácu priebežne commitujte
  \* Do repozitáru udeľte prístup kontu peter.reguli@goodrequest.com (v prípade súkromného repo na bitbucket) alebo pošlite link na verejné github repo na tento e-mail
- Commit messages a spôsob commitovania budú tiež predmetom hodnotenia

**Ak by ste mali hocijaké otázky alebo ste sa niekde zasekli:**

- Kedykoľvek napíšte otázky alebo nás požiadajte o pomoc na peter.reguli@goodrequest.com - radi vám poradíme ;)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
