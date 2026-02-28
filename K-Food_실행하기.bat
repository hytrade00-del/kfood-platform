@echo off
chcp 65001 >nul
cd /d "C:\Users\admin\OneDrive\바탕 화면\안티그래비티 자동화\kfood-platform"
echo ============================================
echo   K-Food 글로벌 플랫폼 서버를 시작합니다...
echo ============================================
echo.
echo 잠시 후 브라우저가 자동으로 열립니다.
echo 이 창을 닫으면 서버가 종료됩니다.
echo.
call npm run dev
echo.
echo [!] 서버가 종료되었습니다.
pause
