## 🛠️ Tecnologias Utilizadas
### Frontend
| Tecnologia | Versão | Descrição |
| :--- | :--- | :--- |
| **Angular** | `16` | Framework principal para a interface. |
| **PrimeNG** | `16.9.1` | Biblioteca de componentes UI premium. |
| **PrimeFlex** | `3.3.1` | Utilitário flexível para o layout responsivo. |
| **PrimeIcons** | `6.0.1` | Coleção de ícones essenciais. |
| **Node.js** | (Recomendada: `18+`) | Ambiente de execução. |

### 1. Clonar o Repositório
git clone https://github.com/LuisGustavo507/Smart-Buy.git |
cd Smart-Buy |

### 2. Instalar dependências
npm install
npm install -g @angular/cli@16
npm install --save-dev @angular-devkit/build-angular
npm install primeng@16.9.1
npm install primeflex@3.3.1
npm install @angular/animations@16
npm install primeicons@6.0.1

## 3. Configurar Estilos no arquivo angular.json
"styles": [
  "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeflex/primeflex.css",
  "src/styles.css"
]

## 4. Importar Módulos de Animação no arquivo app.module.ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // <-- ESSENCIAL
    // outros imports...
  ],
  // ...
})
export class AppModule { }

## 5. Rodar Frontend
ng serve
Acesse o sistema no seu navegador: http://localhost:4200/
