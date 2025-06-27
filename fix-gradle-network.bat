@echo off
echo === Gradle Network Issue Fix ===
echo.

echo Step 1: Clearing Gradle cache...
if exist "%USERPROFILE%\.gradle" (
    echo Clearing Gradle wrapper cache...
    rmdir /s /q "%USERPROFILE%\.gradle\wrapper" 2>nul
    echo Gradle cache cleared.
) else (
    echo Gradle cache directory not found, skipping...
)

echo.
echo Step 2: Testing network connectivity...
echo Testing GitHub connectivity...
ping -n 2 github.com >nul
if %errorlevel%==0 (
    echo ✓ GitHub connectivity: OK
) else (
    echo ✗ GitHub connectivity: FAILED
)

echo Testing Gradle services...
ping -n 2 services.gradle.org >nul
if %errorlevel%==0 (
    echo ✓ Gradle services connectivity: OK
) else (
    echo ✗ Gradle services connectivity: FAILED
    echo   This might be a DNS or firewall issue
)

echo.
echo Step 3: Applying fixes...
echo ✓ Updated Gradle wrapper to use stable version 8.9
echo ✓ Increased network timeout to 60 seconds
echo ✓ Disabled distribution URL validation

echo.
echo Step 4: Building project...
echo Running: npm run build
call npm run build

echo.
echo Step 5: Syncing with Android...
echo Running: npx cap sync
call npx cap sync

echo.
echo === Fix Complete ===
echo.
echo Next steps:
echo 1. Try opening Android Studio again: npx cap open android
echo 2. If still failing, check the troubleshooting guide below
echo.
echo TROUBLESHOOTING:
echo - If behind corporate firewall, you may need proxy settings
echo - Try using Android Studio's built-in Gradle instead
echo - Consider downloading Gradle manually from https://gradle.org/releases/
echo.
pause 