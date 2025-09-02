# 1️⃣ Instalar Angular CLI versão 16 globalmente
npm install -g @angular/cli@16
npm install --save-dev @angular-devkit/build-angular
    

# 3️⃣ Instalar PrimeNG 16 compatível com Angular 16
npm install primeng@16.9.1
npm install primeflex@3.3.1

# 4️⃣ Instalar pacote de temas do PrimeNG
npm install @angular/animations@16
npm install primeicons@6.0.1

"styles": [
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeflex/primeflex.css",
  "src/styles.css"
]

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // outros imports
  ],
})
