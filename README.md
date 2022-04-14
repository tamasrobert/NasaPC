# WebShopProject
Vizsgaremek

█ Frontend █

A Weboldal elindításához a következőkre van szükség:

-- 1. Győződjön meg róla hogy a Node.js telepítve van.

-- 2. Telepítse a dependency-ket :
        - Navigáljon VSCode-ban a terminálon vagy egy parancssor ablakban
          a Webshop mappához.
        - Adja ki az "npm i" parancsot.

-- 3. Indítsa el a frontendet az "npm run serve" parancs kiadásával. 
(leállítás a Ctrl + C-vel)

-- 4. A Weboldal a http://localhost:8080/ -on fut jelenleg.

-----------------------------------------------------------------------------

█ Backend █

A backend elindításához a következőkre van szükség:

-- 1. Győződjön meg róla hogy a Node.js telepítve van.
        -> https://nodejs.org/en/
        
-- 2. Telepítse a dependency-ket :
        - Navigáljon VSCode-ban, a terminálon vagy egy parancssor ablakban
          a WebShop_backend/backEndAPI mappához.
        - Adja ki az "npm i" parancsot.
        
-- 3. Indítsa el a backendet az "npm start" parancs kiadásával. 
(leállítás a Ctrl + C-vel)

-- 4. A backend a http://localhost:3000/ címen fut jelenleg.

-----------------------------------------------------------------------------

█ Adatbázis █

-- Nem garantált, hogy a port engedélyezve van az adatbázis
   nem lokális futtatásához, ezért, amennyiben nem működik,
   a következők a tennivalók annak érdekében, hogy a helyi gépen
   fusson az adatbázis:
   

-- 1. Győződjön meg róla hogy a MongoDB telepítve van.
        -> https://www.mongodb.com/
        
-- 2. Navigáljon az alapértelmezett meghajtóra (alapértelmezetten C:):
        -> Ellenőrizze, hogy létezik "data" nevű mappa, és abban egy "db" nevű mappa.
                -> Amennyiben nem, ezeket kézzel hozza létre.
                
-- 3. Navigáljon a MongoDB/...bin mappához. (lehetséges útvonal: C:\Program Files\MongoDB\Server\4.2\bin)

-- 4. Nyisson egy parancssort az útvonalra. (adminisztrátor jog szükséges lehet)

-- 5. Adja ki a "mongorestore NasaPC <dump mappa útvonala>" parancsot.
        (lehetséges dump útvonal: C:\Users\tamas.robert1\Downloads\NasaPC_db_dump)
      
-- 6. Siker esetén ellenőrizze az adatok/kollekciók meglétét. (pl. MongoDB Compass)

https://www.prisma.io/dataguide/mongodb/setting-up-a-local-mongodb-database

-----------------------------------------------------------------------------

█ ServerLauncher - szerverindító batch fájl █

-- 1. Fontos, hogy a fájl a project főkönyvtárában kerüljön megnyitásra.

-- 2. Nincs különösebb teendő; a fájl telepíti a függőségeket, amennyiben azok még nincsenek telepítve, majd elindítja a frontend és a backend szervert. Természetesen nem szükséges a fentebb leírt frontend és backend műveleteket elvégezni, mert ez a fájl pontosan azt teszi.

-----------------------------------------------------------------------------

█ UnitTestLauncher - backend teszt indító batch fájl █

-- 1. Fontos, hogy a fájl a project főkönyvtárában kerüljön megnyitásra.

-- 2. Nincs különösebb teendő; a konzol ablakon megjelennek a tesztek eredményei.
        


