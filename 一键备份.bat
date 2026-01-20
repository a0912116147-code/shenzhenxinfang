@echo off
chcp 65001 >nul
color 0B
title 深圳楼盘项目 - 一键备份

echo.
echo ========================================
echo    深圳楼盘项目 - 自动备份工具
echo ========================================
echo.

cd /d "%~dp0"

set "BACKUP_DIR=%USERPROFILE%\Desktop\sz-realestate-backup"
set "TIMESTAMP=%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%"
set "TIMESTAMP=%TIMESTAMP: =0%"

echo [备份路径] %BACKUP_DIR%\%TIMESTAMP%\
echo.

if not exist "%BACKUP_DIR%" mkdir "%BACKUP_DIR%"
if not exist "%BACKUP_DIR%\%TIMESTAMP%" mkdir "%BACKUP_DIR%\%TIMESTAMP%"

echo [正在备份] js 文件夹...
xcopy "js" "%BACKUP_DIR%\%TIMESTAMP%\js\" /E /I /Y >nul

echo [正在备份] index.html...
copy "index.html" "%BACKUP_DIR%\%TIMESTAMP%\" >nul

echo [正在备份] 操作指南...
copy "操作指南.md" "%BACKUP_DIR%\%TIMESTAMP%\" >nul 2>nul

echo.
echo ========================================
echo    ✓ 备份完成！
echo    备份位置：%BACKUP_DIR%\%TIMESTAMP%
echo ========================================
echo.
echo 按任意键关闭...
pause >nul
