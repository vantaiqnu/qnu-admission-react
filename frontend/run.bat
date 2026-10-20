@echo off
setlocal
cd /d "%~dp0"

echo =============================================
echo   QNU Admission - ReactJS
echo =============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [LOI] Chua cai Node.js.
  echo Hay cai Node.js LTS tu https://nodejs.org/
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [LOI] Khong tim thay npm.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [1/2] Dang cai cac goi React/Vite...
  call npm install
  if errorlevel 1 (
    echo.
    echo [LOI] npm install that bai. Kiem tra Internet va thu lai.
    pause
    exit /b 1
  )
)

echo.
echo [2/2] Dang khoi dong website...
echo Sau khi Vite hien dia chi, mo no trong Chrome.
echo Thuong la: http://localhost:5173/
echo.
call npm run dev
pause
