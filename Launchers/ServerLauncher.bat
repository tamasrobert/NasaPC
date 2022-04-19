@ECHO OFF 

:: Section 1: Frontend
cd ..\WebShop\
if not exist "node_modules\" call npm i
start cmd.exe /k "call npm run serve"

:: Section 1: Backend
cd .\..\WebShopBackend\
if not exist "node_modules\" call npm i
start cmd.exe /k "call npm start"