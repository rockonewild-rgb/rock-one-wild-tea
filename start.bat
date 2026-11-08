@echo off
title Rock One Wild Tea Factory Server
cd /d "%~dp0"

echo ========================================================
echo    Rock One Wild Tea Estate - Local Server Launch
echo ========================================================
echo.

:: Add default Node.js path to current session PATH if not already present
set "PATH=C:\Program Files\nodejs;%PATH%"

:: If D: does not exist, create virtual drive mapping so Antigravity workspace matches
if not exist "D:\" (
    echo [Setup] Mapping D: to %~d0\ for Antigravity compatibility...
    subst D: "%~d0\" >nul 2>&1
)

echo [Server] Starting Node server on http://localhost:3000 ...
echo [Note] Keep this window open while using the website!
echo.

node server/server.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [Error] Failed to start server.
    pause
)
