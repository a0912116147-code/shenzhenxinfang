// === 1. 语言配置系统 ===
const translations = {
    'zh-CN': {
        appTitle: '🏢 深圳楼盘全集',
        searchPlaceholder: '🔍 搜楼盘 / 区域 / 300万...',
        vipLabel: '贝壳李金松 VIP专属方案',
        menuToggle: '☰ 目录',
        cartLabel: '生成报告',
        cartTitle: '📦 专属置业报告清单',
        cartEmpty: '还没有添加楼盘。<br>请在楼盘详情页点击"+ 加入报告"',
        cartEmptyShort: '暂无选择的楼盘，请去详情页添加',
        downloadReport: '⬇️ 下载专属页面 (HTML)',
        delete: '删除',
        addToReport: '➕ 加入报告',
        added: '已加入',
        priceRange: '【💰 价格区间】',
        projectFacilities: '项目配套',
        unitIntroduction: '户型介绍',
        priceMap: '价格地图',
        priceOverview: '价格总览',
        noData: '暂无数据',
        waitingInput: '等待录入...',
        noResults: '无匹配结果',
        foundResults: '找到 {count} 个结果',
        containsKeyword: '包含搜索关键词',
        matchedInFacilities: '在配套信息中匹配',
        matchedInUnits: '在户型介绍中匹配',
        matchedInName: '项目名称匹配',
        selectProject: '请选择左侧楼盘查看详情<br><br>数据加载自 data.js',
        needDataFile: '需加载数据文件 data_core.js',
        addProjectsFirst: '请先添加楼盘！',
        reportTitle: 'VIP 专属置业报告',
        exclusiveAdvisor: '专属顾问：贝壳李金松',
        phoneWechat: '电话/微信：17277898972',
        discountNote: '预约看房领专属折扣（总价的一个点起）',
        generatedDate: '生成日期：',
        noFacilitiesInfo: '暂无配套信息',
        noUnitInfo: '暂无户型信息'
    },
    'en-US': { /* 英文配置保持不变... */ }
};

let currentLanguage = localStorage.getItem('appLanguage') || 'zh-CN';

// --- 核心工具函数 ---
function t(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['zh-CN'][key] || key;
    if (params.count !== undefined) text = text.replace('{count}', params.count);
    return text;
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateUIText();
    initMenu();
}

function updateUIText() {
    document.getElementById('appTitle').textContent = t('appTitle');
    document.getElementById('searchInput').placeholder = t('searchPlaceholder');
    document.getElementById('vipLabel').textContent = t('vipLabel');
    document.querySelector('.ball-label').textContent = t('cartLabel');
    const cartTitle = document.querySelector('.cart-header h3');
    if (cartTitle) cartTitle.textContent = t('cartTitle');
    const downloadBtn = document.querySelector('.btn-primary');
    if (downloadBtn) downloadBtn.textContent = t('downloadReport');
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) menuToggle.textContent = t('menuToggle');
    const contentArea = document.getElementById('contentArea');
    if (contentArea && contentArea.innerHTML.includes('请选择左侧楼盘')) {
        contentArea.innerHTML = `<div style="text-align:center; margin-top:100px; color:#999;">${t('selectProject')}</div>`;
    }
}

// === 2. 水印生成 ===
function initWatermark() {
    const container = document.getElementById('watermark');
    const text = "贝壳李金松17277898972\n预约看房领专属折扣（总价的一个点起）";
    for(let i=0; i<15; i++) {
        const div = document.createElement('div');
        div.className = 'watermark-text';
        div.innerText = text;
        container.appendChild(div);
    }
}

// === 3. 数据合并逻辑 (这是稳定性的关键) ===
if (typeof db !== 'undefined') {
    if (typeof db_baoshan !== 'undefined') Object.assign(db, db_baoshan);
    if (typeof db_shajing !== 'undefined') Object.assign(db, db_shajing);
    if (typeof db_futian !== 'undefined') Object.assign(db, db_futian);
    if (typeof db_longhua !== 'undefined') Object.assign(db, db_longhua);
    if (typeof db_guangming !== 'undefined') Object.assign(db, db_guangming);
}

// === 4. 购物车与报告生成 (核心逻辑) ===
let reportCart = new Set();
function updateCartCount() { document.getElementById('cartCount').innerText = reportCart.size; }
function addToCart(region, sub, proj) { /* 原有代码... */ }
function openCart() { /* 你修改后的完美版 openCart 代码... */ }
function generateReport() { /* 原有 generateReport 代码... */ }

// === 5. 初始化与搜索 ===
function initMenu() { /* 原有 initMenu 代码... */ }
window.onload = () => {
    initWatermark();
    updateUIText();
    initMenu();
};