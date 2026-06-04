# PicSome Studio

## Aplicație Web pentru Gestionarea și Vizualizarea Imaginilor

**Autor:** Cîrdei Filip-Alin  
**Universitatea Ștefan cel Mare Suceava**  
**Specializarea Calculatoare Dual**  
**An universitar 2025-2026**

---

# Cuprins

1. Descrierea aplicației
2. API utilizat
3. Tehnologii și instrumente utilizate
4. Structura aplicației
5. Structura repository-ului GitHub
6. Configurarea și rularea aplicației
7. Concluzii și lecții învățate

---

# 1. Descrierea aplicației

PicSome Studio este o aplicație web modernă dezvoltată utilizând Next.js, React și TypeScript.

Aplicația oferă utilizatorilor posibilitatea de a căuta, vizualiza și gestiona imagini provenite din serviciul Unsplash.

Funcționalități principale:

- căutarea imaginilor după cuvinte cheie;
- salvarea imaginilor în Favorites;
- adăugarea imaginilor în Cart;
- previzualizarea imaginilor;
- persistența datelor prin localStorage și Zustand;
- interfață responsive și modernă.

---

# 2. API utilizat

Aplicația utilizează Unsplash API pentru obținerea imaginilor afișate în galerie.

Endpoint utilizat:

```text
https://api.unsplash.com/search/photos
```

Parametri utilizați:

- `query` - termenul de căutare;
- `per_page` - numărul de imagini returnate;
- `client_id` - cheia de acces.

Rezultatul este reprezentat de o colecție de imagini (array de obiecte), structură de date utilizată pentru stocarea și manipularea eficientă a mai multor elemente de același tip.

---

# 3. Tehnologii și instrumente utilizate

| Tehnologie | Rol |
|------------|-----|
| Next.js | Routing și optimizări moderne |
| React | Construirea interfeței |
| TypeScript | Tipizare și siguranța codului |
| Tailwind CSS | Stilizare și responsive design |
| Zustand | State management |
| Unsplash API | Sursă imagini |
| React Hot Toast | Notificări |
| Git | Versionare |
| GitHub | Găzduire repository |
| Vercel | Deploy automat |
| VS Code | Editor de cod |

---

# 4. Structura aplicației

```text
src
├── app
├── components
├── features
├── lib
├── store
└── types
```

### app
Conține paginile principale și routing-ul.

### components
Conține componente globale precum Navbar și Footer.

### features
Conține funcționalitățile aplicației și componentele asociate.

### lib
Conține integrarea cu Unsplash API și funcții auxiliare.

### store
Conține implementarea Zustand.

### types
Conține tipurile TypeScript.

---

# 5. Structura repository-ului GitHub

Repository-ul conține:

- codul sursă;
- documentația;
- configurațiile proiectului;
- fișierele pentru build și deploy.

GitHub este utilizat pentru gestionarea versiunilor și colaborare.

---

# 6. Configurarea și rularea aplicației

## Instalare

```bash
npm install
```

## Configurare

Creează fișierul:

```env
.env.local
```

și adaugă:

```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key
```

## Pornire

```bash
npm run dev
```

Aplicația va fi disponibilă la:

```text
http://localhost:3000
```

---

# 7. Concluzii și lecții învățate

În cadrul acestui proiect am dobândit experiență practică în:

- dezvoltarea aplicațiilor web moderne;
- utilizarea API-urilor externe;
- gestionarea stării aplicației cu Zustand;
- organizarea codului în componente reutilizabile;
- versionarea proiectelor cu Git și GitHub;
- publicarea aplicațiilor folosind Vercel.

Proiectul a contribuit la înțelegerea principiilor dezvoltării frontend moderne și a unei arhitecturi software bine organizate.