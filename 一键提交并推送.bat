@echo off
chcp 65001 >nul
color 0A
title 深圳楼盘项目 - 一键提交推送

echo.
echo ========================================
echo    深圳楼盘项目 - 自动提交推送工具
echo ========================================
echo.
echo [步骤 1] 检查修改...
cd /d "%~dp0"
git status

echo.
echo [步骤 2] 添加所有修改...
git add js/*.js index.html

echo.
echo [步骤 3] 提交修改...
echo 请输入本次修改的描述（例如：修改了南山区价格）:
set /p MESSAGE="修改说明: "

if "%MESSAGE%"=="" set MESSAGE=更新楼盘数据

git commit -m "%MESSAGE%"

echo.
echo [步骤 4] 推送到 GitHub...
git push origin master

echo.
echo ========================================
echo    ✓ 完成！等待 1-3 分钟后刷新手机即可查看
echo ========================================
echo.
echo 按任意键关闭...
pause >nul
