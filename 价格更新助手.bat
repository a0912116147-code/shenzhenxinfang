@echo off
chcp 65001 >nul
color 0B
title 价格自动更新工具

echo.
echo ========================================
echo    深圳楼盘项目 - 价格自动更新工具
echo ========================================
echo.
echo [说明] 本工具将帮助你快速更新楼盘价格
echo.
echo [步骤 1] 检查待更新价格...
cd /d "%~dp0"

REM 检查是否有更新文件
if not exist "价格更新_*.json" (
    echo.
    echo ❌ 未找到价格更新文件！
    echo.
    echo 请先使用"价格管理.html"工具更新价格
    echo.
    pause
    exit /b
)

echo ✓ 找到价格更新文件
echo.

echo [步骤 2] 提示信息
echo.
echo 📋 请按以下步骤操作：
echo.
echo 1. 打开"价格管理.html"文件
echo 2. 选择区域和楼盘
echo 3. 输入新的价格信息
echo 4. 点击"更新价格"按钮
echo 5. 返回这里，按任意键继续...
echo.
pause

echo.
echo [步骤 3] 查看项目目录
echo.
echo 📂 项目目录：%~dp0
echo.
echo 查看主要文件：
dir /B js\*.js
echo.

echo [步骤 4] 提交到GitHub
echo.
echo 现在你可以：
echo.
echo 方式A：手动更新
echo   - 使用记事本打开 js\data_xxx.js 文件
echo   - 找到 _PRICE_MAP 部分
echo   - 修改价格信息
echo   - 保存文件
echo   - 运行"一键提交并推送.bat"
echo.
echo 方式B：使用价格管理工具
echo   - 打开"价格管理.html"
echo   - 在界面中更新价格
echo   - 点击"一键提交到GitHub"
echo.
echo ========================================
echo.
echo 按任意键打开价格管理工具...
pause >nul

start "" "%~dp0价格管理.html"

echo.
echo ✓ 已打开价格管理工具
echo.
echo ========================================
echo    操作完成后，运行"一键提交并推送.bat"
echo ========================================
echo.
pause
