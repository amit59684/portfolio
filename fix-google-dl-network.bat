@echo off
echo === Fixing Google Download Network Issues ===
echo.

echo Step 1: Testing connectivity to Google services...
ping -n 2 dl.google.com >nul
if %errorlevel%==0 (
    echo ✓ dl.google.com connectivity: OK
) else (
    echo ✗ dl.google.com connectivity: FAILED
    echo   This is likely a corporate firewall/proxy issue
)

ping -n 2 maven.google.com >nul
if %errorlevel%==0 (
    echo ✓ maven.google.com connectivity: OK
) else (
    echo ✗ maven.google.com connectivity: FAILED
)

echo.
echo Step 2: Applied fixes...
echo ✓ Updated repository configurations with fallbacks
echo ✓ Added alternative Google Maven mirrors
echo ✓ Configured network timeouts and connection limits
echo ✓ Added JitPack and direct Maven repositories

echo.
echo Step 3: Sync project...
cd android
echo Running Gradle sync...
call gradlew --offline sync 2>nul
if %errorlevel%==0 (
    echo ✓ Offline sync successful
) else (
    echo Offline sync failed, trying online sync...
    call gradlew sync
)
cd ..

echo.
echo === SOLUTIONS ===
echo.
echo If still failing, try these options:
echo.
echo OPTION 1 - Configure Corporate Proxy:
echo   Edit android\gradle.properties and uncomment proxy settings
echo   Get proxy details from your IT department
echo.
echo OPTION 2 - Use Mobile Hotspot:
echo   Temporarily use mobile data to bypass corporate restrictions
echo.
echo OPTION 3 - Enable Offline Mode:
echo   In Android Studio: File ^> Settings ^> Build ^> Gradle
echo   Check "Offline work"
echo.
echo OPTION 4 - Download SDK Manually:
echo   Open Android Studio ^> SDK Manager ^> Download required components
echo.
pause 