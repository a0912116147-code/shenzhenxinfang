// data_core.js - 仅包含 南山区 的数据 (已完成配套和户型全部更新)

// 公共样式 - 配套页面使用
const commonPeitaoStyle = `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }
    .container {
        max-width: 1000px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.08);
        overflow: hidden;
    }
    header {
        background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
        color: white;
        padding: 30px;
        text-align: center;
    }
    header h1 {
        font-size: 28px;
        margin-bottom: 10px;
    }
    .subtitle {
        font-size: 18px;
        opacity: 0.9;
        max-width: 800px;
        margin: 0 auto;
    }
    section {
        padding: 25px;
        border-bottom: 1px solid #eee;
    }
    section:last-child {
        border-bottom: none;
    }
    h2 {
        color: #1a6dcc;
        font-size: 22px;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e0e6ed;
    }
    h3 {
        color: #333;
        font-size: 18px;
        margin: 15px 0 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
    }
    th {
        background: #1a6dcc;
        color: white;
        padding: 12px;
        text-align: left;
    }
    td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }
    tr:hover {
        background-color: #f5f9ff;
    }
    .feature-list {
        padding-left: 20px;
        list-style: none;
    }
    .feature-list li {
        margin-bottom: 12px;
        position: relative;
        padding-left: 20px;
    }
    .feature-list li:before {
        content: "•";
        color: #1a6dcc;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    .warning {
        background-color: #fff8e6;
        border-left: 3px solid #ffc107;
        padding: 15px;
        border-radius: 0 4px 4px 0;
        margin: 15px 0;
    }
    .highlight {
        background-color: #e8f4ff;
        padding: 15px;
        border-radius: 5px;
        margin: 15px 0;
        border-left: 4px solid #1a6dcc;
    }
    .advantages, .disadvantages {
        padding: 15px;
        border-radius: 5px;
        margin: 15px 0;
    }
    .advantages {
        background-color: #e8f6f3;
        border-left: 4px solid #28b463;
    }
    .disadvantages {
        background-color: #fdedec;
        border-left: 4px solid #e74c3c;
    }
    @media (max-width: 768px) {
        .container {
            border-radius: 0;
            box-shadow: none;
        }
        header {
            padding: 20px;
        }
        header h1 {
            font-size: 24px;
        }
        section {
            padding: 15px;
        }
        table {
            font-size: 14px;
        }
        th, td {
            padding: 8px;
        }
    }
</style>
`;

// 公共样式 - 户型页面使用
const commonHuxingStyle = `
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }
    .container {
        max-width: 1000px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.08);
        overflow: hidden;
    }
    header {
        background: linear-gradient(135deg, #2d5c48, #4a7c63);
        color: white;
        padding: 30px;
        text-align: center;
    }
    .project-title {
        font-size: 32px;
        margin-bottom: 10px;
    }
    .project-subtitle {
        font-size: 18px;
        opacity: 0.9;
    }
    .content {
        padding: 30px;
    }
    h2 {
        color: #2d5c48;
        font-size: 22px;
        margin: 25px 0 15px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e0ede6;
    }
    h3 {
        color: #3a6b53;
        font-size: 18px;
        margin: 20px 0 10px;
    }
    h4 {
        color: #2d5c48;
        font-size: 16px;
        margin: 15px 0 10px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
    }
    thead th {
        background: #2d5c48;
        color: white;
        padding: 12px;
        text-align: left;
    }
    td {
        padding: 12px;
        border-bottom: 1px solid #e0ede6;
    }
    tr:hover {
        background-color: #f7fcf9;
    }
    .section-intro {
        font-size: 16px;
        color: #2d5c48;
        margin-bottom: 25px;
        line-height: 1.8;
        padding: 15px;
        background-color: #f7fcf9;
        border-radius: 8px;
    }
    .parameter-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px;
        margin: 25px 0;
    }
    .parameter-card {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        border-top: 3px solid #4a7c63;
    }
    .parameter-title {
        font-weight: 600;
        color: #2d5c48;
        font-size: 16px;
        margin-bottom: 8px;
    }
    .parameter-value {
        font-size: 22px;
        font-weight: 700;
        color: #3a6b53;
        margin-bottom: 5px;
    }
    .parameter-desc {
        font-size: 14px;
        color: #666;
    }
    .highlight-box {
        background-color: #e8f4ff;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid #4a7c63;
    }
    .consideration-note {
        background-color: #fff8e6;
        border: 1px solid #ffdd99;
        border-radius: 8px;
        padding: 20px;
        margin: 25px 0;
    }
    .consideration-note h4 {
        color: #b8860b;
        margin-top: 0;
    }
    .complement {
        background-color: #f0f7f3;
        border-left: 4px solid #4a7c63;
        padding: 20px;
        margin: 25px 0;
        border-radius: 0 8px 8px 0;
    }
    .complement h4 {
        color: #2d5c48;
        margin-top: 0;
    }
    /* 户型卡片样式 */
    .unit-type {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 25px 0;
    }
    .unit-card {
        flex: 1;
        min-width: 300px;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        background-color: white;
    }
    .unit-header {
        background: linear-gradient(to right, #2d5c48, #4a7c63);
        color: white;
        padding: 20px;
        text-align: center;
    }
    .unit-size {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .unit-name {
        font-size: 18px;
        opacity: 0.95;
    }
    .unit-body {
        padding: 20px;
    }
    .unit-feature {
        margin-bottom: 12px;
        line-height: 1.6;
    }
    .tag {
        display: inline-block;
        background-color: #e6f0ea;
        color: #2d5c48;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 13px;
        font-weight: 600;
        margin-right: 8px;
        margin-bottom: 8px;
        border: 1px solid #c4dbc9;
    }
    ul {
        padding-left: 20px;
    }
    li {
        margin-bottom: 10px;
        line-height: 1.6;
    }
    @media (max-width: 768px) {
        .container {
            border-radius: 0;
        }
        .content {
            padding: 20px;
        }
        .parameter-grid {
            grid-template-columns: 1fr;
        }
        .unit-card {
            min-width: 100%;
        }
    }
</style>
`;

const db = {
    "南山区": {
        "_PRICE_MAP": `
            <section class="price-map-summary">
                <h2>💰 南山区楼盘价格及户型总览</h2>
                <p>以下为南山区在售楼盘及主要面积段、起步总价对比，供快速查阅。</p>
                <h3>250万 - 只能买一房</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>前海东岸 (南头)</strong></td><td>37m²单间255万起<br>50m² 1房366万起<br>76m² 2房568万起</td><td>上车门槛低、南山一梯队名校、地铁口、现楼</td></tr>
                        <tr><td><strong>山樾湾花园 (前海)</strong></td><td>两房：255万—316万<br>三房：341万—410万</td><td>安居房（总价低）、前海稀缺上车盘</td></tr>
                    </tbody>
                </table>
                <h3>400万 - 600万 (两房/三房)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>卓越珑秀公馆 (南头)</strong><td>65m2房395-430万<br>81m3房2卫511-545万</td><td>性价比高、位置好，新规住宅、近地铁/学校</td></tr>
                        <tr><td><strong>丹华公馆 (西丽)</strong><td>目前深中南创校学区唯一在售新盘，仅剩约150套！都是58平，总价300多万，首付约60万起：7-206，原价450万，一口价390万，7-403，原价447万，一口价388万，7-1803，原价455万，一口价395万，7-1808，原价454万，一口价393万，7-3111，原价473万，一口价410万</td><td>深中创新学区、准现房、倒挂3万/㎡</td></tr>
                        <tr><td><strong>同乐公馆 (南头)</strong><td>开盘92折后价格和现在降价后对比：91㎡：628-693万 →530-620万<br>113㎡：798-863万→720-770万（上周）→660-723万（现在）<br>123㎡：849-936万→800-860万<td><td>性价比高、新规住宅、近地铁/学校</td></tr>
                 </tbody>
                </table>
                <h3>600万 - 800万 (品质三房/四房)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>开云府 (赤湾)</strong><td>124㎡三房:约612万起<br>129㎡三房:约700-760万<br>133㎡三房:约750-780万<br>203㎡四房:约1100-1300万<td><td>双地铁口、一线海景、纯居地块、现楼</td></tr>
                        <tr><td><strong>鼎胜金域阳光 (西丽)</strong><td>87㎡的3房2卫目前申请特惠单价只要610万起<br>89㎡3房总价620万起<br>121㎡3房总价920万起<br>130㎡4房总价1000万起！<td><td>留仙洞总部基地、双地铁口</td></tr>
                        <tr><td><strong>山海丹华 (赤湾)</strong></td><td>95㎡3房 630万起<br>116㎡4房 720万起</td><td>准现房、低容积率</td></tr>
                        <tr><td><strong>中海云启源境 (南头)</strong><td>2栋90㎡折后价：735万左右
目前只剩下最后三套： 18F 21F<br>2栋105㎡折后价：860万左右
目前还有少量房源：7F 14F 19F 20F 21F<br>1栋143㎡折后价：1200万左右 
目前只剩下最后三套：24F 35F 41F<td><td>南山一梯队名校、央企品质、景观好</td></tr>
                        <tr><td><strong>赤湾琅玥湾佳园</strong><td>113-124-139-166平，总价：720-790-1130-1360万<td><td>一线海景、准现楼</td></tr>
                        <tr><td><strong>天健湾时代府</strong></td><td>115平4房 625万起<br>139平5房 944万起</td><td>折后单价5.4万起</td></tr>
                    </tbody>
                </table>
                <h3>800万以上 (改善/核心地段)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>观山海 (前海)</strong></td><td>95平3房 700万<br>110平4房 820万</td><td>低容积率2.66、得房率95%、前海南稀缺</td></tr>
                        <tr><td><strong>荔源雅苑</strong></td><td>118㎡四房 800万</td><td>前海路、现楼</td></tr>
                        <tr><td><strong>翰熙典居 (粤海)</strong></td><td>105㎡ 894万起<br>140㎡ 1457万起</td><td>顶配地段(粤海)、紧邻深大/腾讯</td></tr>
                        <tr><td><strong>绿景白石洲 (华侨城)</strong></td><td>110㎡ 1050万起<br>187㎡ 2600万</td><td>航母级旧改、顶级地段</td></tr>
                        <tr><td><strong>湾启紫禁 (前海)</strong></td><td>111㎡ 980万起<br>142㎡ 1500万起/共484套，去化约82%，108㎡3房售罄，97㎡3房剩11套，其余户型余20-30多套（中低楼层居多）</td><td>超高品价比、山河海多重景观</td></tr>
                    </tbody>
                </table>
                <h3>特色景观盘 (山景/公园)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>方直珑樾山 (看塘朗山)</strong></td><td>120㎡折后总价900-1150万，单价7.5-9.8万/㎡<br>200㎡折后总价1513-1820万，单价7.55-8.92万/㎡，268㎡折后总价2294-2605万，单价8.54-9.7万/㎡</td><td>稀缺山景资源，改善首选</td></tr>
                        <tr><td><strong>汉园茗院 (看塘朗山)</strong></td><td>B区毛坯现楼
117㎡四房两厅两卫 总价:约720万左右
120m四房两厅两卫 总价:约780万左右
160m四房两厅两卫 总价:约1100万以内
185㎡四房两厅三卫 总价:约1300万左右
A区带装修
110平3房2卫 680万左右
122平4房2卫 800万左右
160平4+1房3卫 1200万以内170平4+1房 3卫1300万以内</td><td>准现房，6月底交楼</td></tr>
                        <tr><td><strong>天源华府 (看中山公园)</strong></td><td>▶︎90m²:约747-792万
▶︎110m²:约921-1044万
▶︎111m²:约1087-1130万
▶︎155m²:约1647-1720万
▶︎186m²:约1990-2173万</td><td>中山公园旁、双地铁</td></tr>
                    </tbody>
                </table>
            </section>
        `,
        "前海": {
            "湾启紫禁": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>湾启紫禁</h1>
            <div class="subtitle">前海妈湾核心区·海景豪宅·科技智慧社区</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>湾启紫禁位于前海妈湾核心区域，是前海首个集海景豪宅、智慧科技与城市地标于一体的高端住宅项目。项目坐拥一线海景资源，毗邻前海自贸区，享有政策红利与城市发展双重利好。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>稀缺海景资源：</strong>一线前海海景视野，270°环幕景观</li>
                    <li><strong>前海核心区位：</strong>位于前海妈湾核心区，享受政策红利</li>
                    <li><strong>顶级教育资源：</strong>周边规划多所国际学校及优质公立学校</li>
                    <li><strong>智慧社区系统：</strong>AI智能管家、全屋智能联动</li>
                    <li><strong>高端会所配套：</strong>私家泳池、天际会所、星级物业服务</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>招商蛇口与华润置地联合开发</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约3.2万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约18.5万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>4.8</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>35%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>5栋38-55层超高层住宅，1栋天际会所</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>580户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>1:1.8（共1044个车位）</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>国际品牌精装交付</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>招商物业</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>12.8元/㎡/月</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>智能系统与特色配套</h2>
            <p>项目引入国际领先的智慧社区系统，打造未来科技生活体验：</p>
            
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>AI智慧管家：</strong>全屋语音控制，智能场景一键切换</li>
                    <li><strong>健康监测系统：</strong>实时监测室内空气质量、温湿度，自动调节</li>
                    <li><strong>无感通行系统：</strong>人脸识别、车牌识别，社区无感通行</li>
                    <li><strong>智能安防：</strong>周界防护、电子巡更、智能监控全覆盖</li>
                    <li><strong>天际会所：</strong>位于顶层的天际会所，包含无边际泳池、星空酒廊、私人影院</li>
                    <li><strong>私家园林：</strong>聘请国际园林大师设计，打造四季景观园林</li>
                    <li><strong>恒温泳池：</strong>室内恒温泳池，配备专业教练团队</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置</h3>
            <p>位于前海妈湾核心区域，前海大道与妈湾三路交汇处，毗邻前海深港现代服务业合作区，享受国家级战略发展红利。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离5号线妈湾站约400米，规划中的15号线前海湾站约800米</li>
                <li><strong>道路：</strong>紧邻前海大道、月亮湾大道，快速连接南山、宝安中心区</li>
                <li><strong>跨海通道：</strong>毗邻在建的妈湾跨海通道，未来直达宝安、机场</li>
                <li><strong>海上交通：</strong>规划中的前海游艇码头，提供海上交通选择</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <p><strong>国际教育集群：</strong>周边规划多所国际学校，包括前海哈罗国际学校、前海国王学校等；同时配建公立九年一贯制学校，满足不同教育需求。</p>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>高端商业：</strong>项目自带约2万㎡高端商业街区，引进国际品牌</li>
                <li><strong>周边商圈：</strong>距离前海壹方城约3公里，万象前海约4公里</li>
                <li><strong>休闲娱乐：</strong>规划中的前海演艺中心、海洋博物馆等文化设施</li>
            </ul>
            
            <h3>🌳 景观资源</h3>
            <p>项目拥有270°前海海景视野，同时毗邻前海石公园、滨海长廊，享有一线海景与城市公园双重景观资源。</p>
            
            <h3>🏥 医疗配套</h3>
            <p>距离前海泰康国际医院约2公里，深圳市前海蛇口自贸区医院约3公里，医疗资源丰富。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>稀缺地段：</strong>前海核心区，国家级战略发展区域，未来升值潜力大</li>
                    <li><strong>无敌海景：</strong>一线海景资源，270°环幕视野，景观稀缺性高</li>
                    <li><strong>顶级配套：</strong>天际会所、私家园林、高端商业等配套完善</li>
                    <li><strong>智慧科技：</strong>AI智能管家、全屋智能系统，科技感强</li>
                    <li><strong>品牌实力：</strong>招商+华润双央企开发，品质有保障</li>
                    <li><strong>教育资源：</strong>国际学校集群，教育资源丰富优质</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>价格高昂：</strong>单价与总价均处于市场高位，入手门槛高</li>
                    <li><strong>配套待完善：</strong>前海片区目前商业、生活配套仍在建设中</li>
                    <li><strong>交通压力：</strong>目前主要依靠月亮湾大道，高峰期可能存在拥堵</li>
                    <li><strong>周边环境：</strong>周边仍有部分工地，完全成熟需要时间</li>
                    <li><strong>教育资源：</strong>规划学校多数仍在建设中，投入使用需要时间</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>高净值人士：</strong>总价1800万以上，适合资产配置需求</li>
                    <li><strong>企业主/高管：</strong>前海片区企业主、金融高管等</li>
                    <li><strong>改善型家庭：</strong>追求海景资源、高品质生活的家庭</li>
                    <li><strong>长期投资者：</strong>看好前海发展前景，进行长期资产配置</li>
                    <li><strong>国际化家庭：</strong>需要国际教育资源的家庭</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>湾启紫禁是<strong>前海妈湾核心区的标杆性海景豪宅项目</strong>，集一线海景、智慧科技、高端配套于一体，代表着前海住宅开发的最高水准。项目定位高端，适合追求稀缺资源与高品质生活的购房者。</p>
            
            <div class="warning">
                <p><strong>投资价值：</strong>前海作为国家级战略发展区域，未来升值潜力巨大。项目占据核心位置，拥有稀缺海景资源，具备较强的资产保值增值能力。</p>
            </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>湾啟紫荆府</h1>
            <div class="subtitle">深圳前海妈湾 · 新规住宅标杆 招商领玺四期</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳前海妈湾片区湾啟紫荆府（招商领玺四期）项目的全面户型分析。项目是前海首个采用建筑新规设计的住宅项目，以“高使用率、分布式电梯、户户南向”为核心卖点，主打高品质改善型住宅。报告将结合其地段价值与产品创新，深入解析各户型亮点与核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>湾啟紫荆府是招商领玺系列的第四期作品，由自贸投资（招商局与前海管理局合资）开发，定位为前海妈湾核心区的高品质精装住宅。项目占地约1.5万㎡，总建筑面积约6.6万㎡，容积率约4.47。规划3栋36-37层住宅，共计485户，采用4梯5户的分布式电梯设计，户户拥有独立电梯厅，预计于2027年6月精装交付。项目已获批预售，备案均价约10.8万元/㎡。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>主力户型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与备注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>约96㎡ 户型 (E户型)</strong></td>
                        <td>约96㎡</td>
                        <td>三房两厅两卫</td>
                        <td>首置优选，U型厨房，大开间客厅与宽阳台，西南向视野。</td>
                    </tr>
                    <tr>
                        <td><strong>约111㎡ 户型 (D户型)</strong></td>
                        <td>约111㎡</td>
                        <td>3+1房两厅两卫</td>
                        <td>宽厅阔景，灵动空间可作书房，贯通式阳台，东南/西南朝向。</td>
                    </tr>
                    <tr>
                        <td><strong>约121-122㎡ 户型 (B/C户型)</strong></td>
                        <td>约121-122㎡</td>
                        <td>四房两厅两卫</td>
                        <td>B户型为横厅四房（东南向），C户型为“双龙抱珠”四房（双面采光）。</td>
                    </tr>
                    <tr>
                        <td><strong>约142㎡ 户型 (A户型)</strong></td>
                        <td>约142㎡</td>
                        <td>四房两厅两卫</td>
                        <td>寰幕四房，南北通透，“双龙抱珠”格局，贯通式超长宽境阳台。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-vector-square"></i> 项目容积率</div>
                    <div class="parameter-value">约4.47</div>
                    <div class="parameter-desc">前海核心区标准容积率</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 使用率（含赠送）</div>
                    <div class="parameter-value">92%-100%</div>
                    <div class="parameter-desc">新规设计，高拓展空间</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-elevator"></i> 梯户与电梯</div>
                    <div class="parameter-value">4梯5户</div>
                    <div class="parameter-desc">分布式电梯，户户独立电梯厅</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约550米</div>
                    <div class="parameter-desc">距5号线妈湾站，步行可达</div>
                </div>
            </div>

            <div class="consideration-note">
                <h4>【客观考量】关于价格、配套与社区环境</h4>
                <p>需注意，项目备案均价约10.8万元/㎡，总价门槛较高。作为前海新发展片区，其南侧规划的九年制教育用地尚未招标，大型商业配套（如自贸时代中心）多处于建设中，入住初期便利性可能不足。此外，项目社区规模相对较小（占地约1.5万㎡），且临近主干道，需关注未来可能存在的交通噪音及片区长期施工的影响。</p>
            </div>
            
            <h2>二、四大主力户型精细解析</h2>
            <p>湾啟紫荆府的户型线设计非常清晰，四个面积段（约96㎡、111㎡、121-122㎡、142㎡）定位明确，覆盖了从首置精英到终极改善的全链条需求。以下将分别进行深度剖析：</p>
            
            <div class="unit-type">
                <!-- 约96㎡户型 -->
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约96㎡</div>
                        <div class="unit-name">E户型 · 高效三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>前海精英“入场券” · 极致功能主义</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">入门总价</span>
                            <span class="tag">功能三房</span>
                            <span class="tag">专梯入户</span>
                            <span class="tag">西南朝向</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-bullseye"></i>
                            <div><strong>精准定位：</strong>这是项目总价门槛最低的户型，旨在以相对可控的预算，为精英白领、年轻家庭提供一张进驻前海核心区的“硬通货”门票。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>空间解析：</strong>在约96㎡内做到三房两卫，是新规高使用率的直接体现。格局紧凑，功能齐全，U型厨房、大开间客厅与宽阳台保证了基本居住品质。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-check"></i>
                            <div><strong>适合人群：</strong>预算有限但坚定看好前海、对通勤和地段有高要求的首次置业者，或用作资产配置的投资者。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-exclamation-triangle"></i>
                            <div><strong>注意要点：</strong>相比大户型，房间尺度感、储物空间和景观视野会做出一定妥协。需实地感受空间是否满足长期居住需求。</div>
                        </div>
                    </div>
                </div>
                
                <!-- 约111㎡户型 -->
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约111㎡</div>
                        <div class="unit-name">D户型 · 灵动3+1房</div>
                    </div>
                    <div class="unit-body">
                        <h4>成长型家庭首选 · 空间魔术师</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">灵活多变</span>
                            <span class="tag">宽厅设计</span>
                            <span class="tag">贯通阳台</span>
                            <span class="tag">东南/西南向</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-puzzle-piece"></i>
                            <div><strong>核心亮点：</strong>最大的卖点是“3+1”的灵动空间。客厅旁预留了可灵活改造的区域，能轻松变身为独立书房、儿童游戏区或临时客卧，适应性极强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-alt"></i>
                            <div><strong>体验升级：</strong>相比96㎡，客厅开间更大，并连接贯通式阳台，空间通透感和采光效果显著提升。居住体验从“够用”迈向“舒适”。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>适合人群：</strong>处于家庭结构变化期（如计划孕育小孩、需要居家办公）的成长型家庭，对空间功能弹性有较高要求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>价值判断：</strong>这是功能性向舒适性过渡的关键户型。多出的约15㎡和灵动设计，带来了远超面积增长的价值飞跃，是性价比非常高的选择。
                        </div>
                    </div>
                </div>
            </div>

            <div class="unit-type">
                <!-- 约121-122㎡户型 -->
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约121-122㎡</div>
                        <div class="unit-name">B/C户型 · 品质四房</div>
                    </div>
                    <div class="unit-body">
                        <h4>改善型中坚力量 · 格局双选项</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">横厅(B户)</span>
                            <span class="tag">双龙抱珠(C户)</span>
                            <span class="tag">纯粹四房</span>
                            <span class="tag">双面采光</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局分化：</strong>此面积段提供了两种截然不同的改善逻辑：<strong>B户型（约121㎡）为创新横厅</strong>，客厅与餐厅横向展开，空间开阔气派，动区体验感强。<strong>C户型（约122㎡）为经典“双龙抱珠”</strong>，卧室分列客厅两侧，动静分区彻底，隐私性与静音效果最佳。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>真正意义上的舒适四房，每个房间尺度得体，可明确区分主卧、儿童房、老人房及书房，满足二胎家庭或多代同堂的长期稳定居住需求。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>品质细节：</strong>通常拥有更优的朝向（如东南）和更宽的景观阳台。C户型更可能实现双面采光，室内明亮度更高。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选择关键：</strong>此面积段的选择，不再是功能有无，而是<strong>生活方式偏好</strong>：追求家庭公共活动空间与视觉震撼选B户型横厅；看重卧室隐私、休息质量与传统分区选C户型“双龙抱珠”。
                        </div>
                    </div>
                </div>
                
                <!-- 约142㎡户型 -->
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约142㎡</div>
                        <div class="unit-name">A户型 · 寰幕四房</div>
                    </div>
                    <div class="unit-body">
                        <h4>旗舰级顶豪体验 · 尺度与奢感</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">南北通透</span>
                            <span class="tag">超长阳台</span>
                            <span class="tag">主卧270°飘窗</span>
                            <span class="tag">终极改善</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>尺度革命：</strong>面积跃升带来的不仅是房间，更是“尺度感”。客餐厅南北通透，搭配<strong>贯通式超长宽境阳台</strong>，形成震撼的平面视觉通廊。主卧配备大面积弧形无柱飘窗，享270°景观视野。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-queen"></i>
                            <div><strong>格局巅峰：</strong>在“双龙抱珠”的隐私格局基础上，每个功能空间（厨房、卫生间、衣帽间）的尺度都得到顶级配置。动线设计更从容，充满了豪宅的仪式感与松弛感。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>景观独占：</strong>通常位于楼栋最佳位置，享有项目最稀缺、无遮挡的山海河景观资源。购买此户型，景观价值占比极高。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>终极意义：</strong>这超越了单纯的居住功能，是<strong>身份标签、资产标杆与顶级生活方式的集合体</strong>。它为高净值客群提供了在前海拥有一套“无短板”旗舰住宅的机会，稀缺性最强。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>项目整体设计理念：新规标杆，前海范本</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">湾啟紫荆</div>
                    <div class="unit-name">前海新规住区</div>
                </div>
                <div class="unit-body">
                    <h4>不止于住宅，更是前海建筑标准的实践者</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">建筑新规</span>
                        <span class="tag">分布式电梯</span>
                        <span class="tag">山海河景观</span>
                        <span class="tag">妈湾综合体</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-drafting-compass"></i>
                        <div><strong>产品革新：</strong>作为前海首个应用建筑新规的住宅项目，通过优化阳台、飘窗等设计，将户型使用率（含赠送）提升至92%-100%，远超传统住宅。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-city"></i>
                        <div><strong>片区规划：</strong>项目是招商局在妈湾片区统一运营开发的约500万㎡超大综合体的一部分，未来将享有集办公、商业、酒店、文化于一体的城市级配套。所在单元经调规后，增加了住宅与教育用地，生活功能更完善。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>生态资源：</strong>地处前海三湾中唯一拥有“山、海、河、城”多元生态资源的妈湾板块，背靠大小南山，近前湾水廊道公园，部分高楼层可享河景、海景。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>购买湾啟紫荆府，意味着购入的是“前海发展红利 + 稀缺新规产品力 + 招商品质背书”的组合。其价值与妈湾片区的整体开发进度深度绑定，享受长远规划红利的同时，也需要接受配套从蓝图到现实所需的建设周期。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】外部配套与未来生活图景</h4>
                <p><strong>交通：</strong>双地铁覆盖，距5号线妈湾站约550米，未来15号线（在建）于此换乘。规划有妈湾跨海隧道，直达大铲湾腾讯科技岛。
                <br><strong>商业：</strong>依赖片区综合体商业。近期有已开业的印里商业街，中期依赖建设中约5.8万㎡的自贸时代中心，远期可享规划的大型滨海商业集群。
                <br><strong>教育：</strong>自带18班幼儿园。学区存在不确定性，南侧规划九年制学校用地尚未招标，初期可能依赖邻近的南二外集团学校。周边国际学校资源丰富。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <div>
                        <h4>前海首个新规住宅标杆</h4>
                        <p>采用新版建筑设计规范，通过阳台、飘窗等革新设计，实现超高使用率（92%-100%），最大化居住空间，产品力领先市场。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-elevator"></i>
                    </div>
                    <div>
                        <h4>分布式电梯与专梯入户</h4>
                        <p>独创4梯5户分布式电梯设计，户户拥有独立电梯厅，即便小户型也享受私家入户的尊崇感与私密性，树立了新的品质标准。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>妈湾核心地段与规划红利</h4>
                        <p>位于前海深港合作区妈湾核心，享受国家级战略规划。作为招商妈湾超级综合体的住宅部分，共享未来城市级配套。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div>
                        <h4>稀缺的山海河生态景观</h4>
                        <p>坐拥前海三湾中最丰富的“山、海、林、城、河”生态资源，部分高楼层户型享有开阔河景、海景及城市景观，环境价值稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>招商品质与纯粹商品住房</h4>
                        <p>由招商局集团开发，品质背书强劲。社区为纯商品住房，无保障房、人才房混杂，居住人群和社区氛围纯粹。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>立体化交通与未来畅达性</h5>
                        <p>双地铁（现有5号线+在建15号线）上盖，规划多轨道、跨海隧道，可快速连接南山、宝安及大湾区，通勤与出行便利度高。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与客观考量</h2>
            
            <div class="floor-suggestion">
                <h4>户型与选择建议及综合权衡</h4>
                <p>基于项目高单价、高产品力及片区发展特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约96-111㎡ 三房 · 精英首置/首改</h4>
                <p><strong>选择逻辑：</strong>以前海第一梯队住宅的入门总价，锁定核心区资产并享受前沿产品设计。适合资金实力较强、看重地段稀缺性和产品创新的年轻精英家庭或单身人士。</p>
                <p><strong>户型建议：</strong>注重空间灵活性选111㎡“3+1”房；追求极致性价比和基本功能选96㎡三房。</p>
                <p><strong>楼层注意：</strong>中低楼层需关注前方建筑遮挡及临近道路的噪音影响，高楼层景观和静谧性更优。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约121-142㎡ 四房 · 高端改善/资产配置</h4>
                <p><strong>选择逻辑：</strong>追求一步到位的品质改善、家庭多代同堂居住，或进行长期资产配置。此类客群对价格敏感度较低，更看重产品的终极改善属性、稀缺景观和长期价值。</p>
                <p><strong>户型与楼层：</strong><strong>强烈建议优先选择中高楼层（20层以上）的142㎡或122㎡“双龙抱珠”户型。</strong>高楼层能最大化项目“山海河”的景观价值，充分体现其作为前海旗舰改善盘的核心优势。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">【客观综合权衡要点】</h4>
                <p>1. <strong>高总价与高预期：</strong>项目均价处于市场高位，购房者支付了较高的“地段+产品”溢价，因此对片区配套兑现速度、房产保值增值能力应有更高且理性的预期。
                <br>2. <strong>配套兑现周期：</strong>需清晰认识“未来蓝图”与“当前实景”的时间差。教育、大型商业等核心配套多在建设或规划中，入住后需经历一段“陪伴成长”期。
                <br>3. <strong>片区建设环境：</strong>妈湾作为正在大规模开发的新区，交房后仍可能面临周边工地施工带来的噪音、粉尘干扰，以及城市界面不断更新的过程。
                <br>4. <strong>产品力 vs 社区规模：</strong>项目在户型设计、电梯配置上领先，但社区本身占地较小，内部园林和活动空间相对有限，需结合个人对社区尺度的偏好进行选择。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>决策核心：</strong>湾啟紫荆府是为看重“不可复制的地段价值”和“敢为人先的产品创新”的购房者准备的。它非常适合那些相信前海长远规划、愿意为顶尖设计付费，并能耐心等待片区成熟的改善型买家或长期投资者。如果您对即享成熟配套、纯粹静谧居住环境有极高要求，或对短期内的价格波动较为敏感，则需要更加审慎地决策。</p>
            </div>

        </div>
    </div>
`
            },
            "观山海家园": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>观山海家园</h1>
            <div class="subtitle">南山前海·山海双景·改善型品质社区</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>观山海家园位于南山区前海片区，背靠大南山，面朝前海湾，是南山罕见的山海双景住宅项目。项目由知名开发商打造，定位为改善型品质社区，致力于为城市精英提供舒适居住环境。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>山海双景：</strong>背靠大南山，面朝前海湾，享受双重景观资源</li>
                    <li><strong>前海区位：</strong>位于前海扩容区，享受自贸区发展红利</li>
                    <li><strong>低密社区：</strong>容积率仅3.2，居住舒适度高</li>
                    <li><strong>品牌开发商：</strong>万科地产开发，品质有保障</li>
                    <li><strong>精工品质：</strong>采用高标准建筑工艺和装修材料</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>万科地产</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约2.8万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约9.8万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>3.2</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>35%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>8栋18-32层住宅，1栋社区会所</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>650户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>1:1.2（共780个车位）</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>万科物业</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>8.5元/㎡/月</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>特色配套与园林设计</h2>
            <p>项目注重社区品质与居住体验，打造了一系列特色配套：</p>
            
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>双主题园林：</strong>打造"山景园"与"海韵园"双主题园林，景观层次丰富</li>
                    <li><strong>社区会所：</strong>配备恒温泳池、健身房、瑜伽室、书吧等设施</li>
                    <li><strong>健康跑道：</strong>社区内部打造800米环形健康跑道</li>
                    <li><strong>儿童乐园：</strong>根据不同年龄段设置三个主题儿童活动区</li>
                    <li><strong>架空层泛会所：</strong>每栋楼均有主题架空层，设置茶室、棋牌室、共享厨房等</li>
                    <li><strong>精装标准：</strong>选用国际一线品牌家电，配置全屋净水系统</li>
                    <li><strong>智能化系统：</strong>社区智能安防、智能门禁、智能停车系统</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置</h3>
            <p>位于南山区前海片区，月亮湾大道与棉山路交汇处，背靠大南山，面朝前海湾，享山海双景资源。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离5号线荔湾站约800米，距离规划中的15号线约1公里</li>
                <li><strong>道路：</strong>紧邻月亮湾大道、前海路，快速连接南山中心区、宝安中心区</li>
                <li><strong>公交：</strong>周边多个公交站点，线路覆盖南山、福田主要区域</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <p><strong>南山外国语学校(集团)：</strong>周边有南山外国语学校(集团)前海分校，为九年一贯制学校，教学质量在南山名列前茅。</p>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>社区商业：</strong>项目自带约5000㎡社区商业，满足日常购物需求</li>
                <li><strong>大型商场：</strong>距离前海壹方城约3.5公里，万象前海约4公里</li>
                <li><strong>生活配套：</strong>周边有多个菜市场、超市，生活便利</li>
            </ul>
            
            <h3>🌳 景观资源</h3>
            <p>项目背靠大南山森林公园，面朝前海湾，享有一线山景和海景资源。距离大南山登山口仅500米，是登山爱好者的理想居所。</p>
            
            <h3>🏥 医疗配套</h3>
            <p>距离深圳市前海蛇口自贸区医院约3公里，南山医院约5公里，医疗资源丰富。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>景观资源优越：</strong>背山面海，享有双重景观资源，居住环境好</li>
                    <li><strong>低密度社区：</strong>容积率仅3.2，居住舒适度高</li>
                    <li><strong>品牌开发商：</strong>万科开发，品质有保障，物业服务好</li>
                    <li><strong>社区配套完善：</strong>会所、园林、儿童乐园等配套齐全</li>
                    <li><strong>教育资源优质：</strong>周边有南山外国语学校，教育资源好</li>
                    <li><strong>户型设计合理：</strong>南北通透，得房率高，改善型户型为主</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>交通不便：</strong>距离地铁站较远，依赖自驾或公交出行</li>
                    <li><strong>商业配套缺乏：</strong>周边大型商业配套不足，购物需出行</li>
                    <li><strong>周边环境杂乱：</strong>周边有部分工业区和物流园区，环境一般</li>
                    <li><strong>价格偏高：</strong>相比周边二手房价格偏高</li>
                    <li><strong>发展周期长：</strong>前海片区完全成熟需要较长时间</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>改善型家庭：</strong>追求舒适居住环境，需要大户型改善居住条件</li>
                    <li><strong>山景爱好者：</strong>喜欢登山、亲近自然的购房者</li>
                    <li><strong>前海上班族：</strong>在前海片区工作的白领、高管</li>
                    <li><strong>品质追求者：</strong>注重开发商品牌和社区品质的购房者</li>
                    <li><strong>有车一族：</strong>依赖自驾出行，对地铁依赖度不高的家庭</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>观山海家园是<strong>南山前海片区的改善型品质住宅</strong>，凭借其稀缺的山海双景资源和低密度社区规划，在区域市场中具有独特优势。项目定位明确，面向追求居住品质和自然环境的改善型家庭。</p>
            
            <div class="warning">
                <p><strong>宜居价值：</strong>项目最大的卖点是其背山面海的地理位置和低密度社区规划，为城市精英提供了一个远离喧嚣的宜居环境。</p>
            </div>
            
            <p>虽然项目在交通和商业配套方面存在一定不足，但其优越的景观资源、完善的社区配套和万科品牌保障，使其成为南山片区改善型购房者的优质选择。适合注重生活品质、对自然景观有要求的购房者。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>观山海家园</h1>
            <div class="subtitle">深圳南山 · 前海低密 · 山景家园</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供观山海家园项目的全面户型分析。项目位于南山区大南山脚下、前海合作区，以其约2.65的低容积率成为前海片区稀有的低密山居住宅社区。报告将深入解析目前主力的三大户型系列（约95㎡、约110-115㎡、约138㎡）的设计特点、空间价值与居住体验。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #2d5c48; margin-top: 0;">📍 项目核心价值与区位特点</h3>
                <p><strong>观山海家园</strong>位于南山区兴海大道东侧、沿山路南侧，大南山生态郊野公园西侧山脚下。项目距离地铁5号线荔湾站约650米，交通便利。作为前海片区容积率仅约2.65的低密社区，项目共规划12栋17-25层住宅，总计870户纯商品住宅，无政策保障型房源。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-mountain"></i> 大南山山景资源</span>
                    <span class="view-badge"><i class="fas fa-subway"></i> 地铁5号线上盖</span>
                    <span class="view-badge"><i class="fas fa-tree"></i> 2.65低容积率</span>
                    <span class="view-badge"><i class="fas fa-home"></i> 纯商品住宅社区</span>
                    <span class="view-badge"><i class="fas fa-school"></i> 规划36班小学</span>
                </div>
            </div>
            
            <h2>一、在售户型核心参数总览</h2>
            <p>观山海家园户型设计注重景观视野与空间实用性，所有户型均配备宽敞的观景阳台，主卧多采用L型或270°飘窗设计，最大化引入山景与自然光线。项目涵盖从三房到四房的全产品线，满足不同家庭的改善需求。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                        <th>主要分布楼栋</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>约95㎡</td>
                        <td>三房两厅两卫</td>
                        <td>竖厅格局，南北通透，约6米观景阳台连通次卧，主卧270°飘窗</td>
                        <td>2栋为主</td>
                    </tr>
                    <tr>
                        <td>约110-115㎡</td>
                        <td>四房两厅两卫</td>
                        <td>竖厅/横厅可选，约6米宽敞阳台，部分户型四开间朝南，主卧L型飘窗</td>
                        <td>1栋、5栋、6栋</td>
                    </tr>
                    <tr>
                        <td>约138㎡</td>
                        <td>四房两厅两卫</td>
                        <td>2梯2户纯板楼，独立电梯厅，南北通透，约6.1米宽景阳台，层高3.05米</td>
                        <td>3栋、4栋（17层小高层）</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 项目容积率</div>
                    <div class="parameter-value">约2.65</div>
                    <div class="parameter-desc">前海片区罕见的低密度住宅社区，居住舒适度高</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-car"></i> 车位配比</div>
                    <div class="parameter-value">约1:1.13</div>
                    <div class="parameter-desc">总车位987个，基本满足住户停车需求</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-ruler-combined"></i> 得房率表现</div>
                    <div class="parameter-value">85%-97%</div>
                    <div class="parameter-desc">含赠送面积，138㎡户型得房率表现尤为突出</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户配置</div>
                    <div class="parameter-value">多样配置</div>
                    <div class="parameter-desc">2梯2户/2梯4户/2梯5户，适应不同户型需求</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约95㎡</div>
                        <div class="unit-name">三房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>低密改善入门 · 三房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">竖厅格局</span>
                            <span class="tag">南北通透</span>
                            <span class="tag">约6米阳台</span>
                            <span class="tag">270°飘窗</span>
                            <span class="tag">高得房率</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>空间设计：</strong>传统竖厅格局，动静分区清晰，南北通透设计保障通风效果。客厅开间约3.5米，采用LDKB一体化设计。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>阳台与飘窗：</strong>阳台从客厅连通至次卧，长度约6-6.3米，拓展了使用空间。主卧配备270°观景飘窗，提升采光与景观视野。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>朝向与景观：</strong>主要为南向近山或西南向（部分看海）、东北向（看山景）。2栋的约95㎡户型为南向近山三房，可观赏园林水景。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>适合人群：</strong>追求低密山居环境的首次改善家庭，三代同堂或预算有限的品质改善客群。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>设计亮点：</strong>该户型在约95㎡面积内实现三房两卫功能，得房率含赠送可达约91.6%-95%。阳台连通设计增加了实用空间，适合家庭日常活动。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约110-115㎡</div>
                        <div class="unit-name">四房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>主流改善选择 · 四房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">竖厅/横厅可选</span>
                            <span class="tag">约6米阳台</span>
                            <span class="tag">多开间朝南</span>
                            <span class="tag">L型飘窗</span>
                            <span class="tag">动静分区</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间格局：</strong>提供竖厅和横厅两种设计。竖厅为"双龙抱珠"格局，独立入户；横厅设计客餐厅开间约6米，连接阳台形成宽敞公共区域。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光与朝向：</strong>部分户型实现四开间朝南布局，动线合理，通透性强。朝向包括东南、西南及西北向，采光充足。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>景观视野：</strong>约6米阳台直面大小南山，视野无遮挡。部分115㎡户型为大横厅设计，主卧带约270°飘窗，推窗可见大小南山。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>功能细节：</strong>两个卫生间紧邻布局，方便管道集中排布。部分115㎡户型为双套间设计，主卧套房含衣帽间与卫浴，长辈房也带独立卫浴。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>产品特点：</strong>此户型系列是项目的主力产品，在110-115㎡面积段实现紧凑实用的四房布局。横厅设计适合家庭社交，竖厅格局动静分区明确，满足不同家庭生活习惯。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>低密楼王户型解析</h3>
            
            <div class="unit-card" style="max-width: 850px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约138㎡</div>
                    <div class="unit-name">四房两厅两卫</div>
                </div>
                <div class="unit-body">
                    <h4>低密楼王 · 四房两卫</h4>
                    <div style="margin: 20px 0;">
                        <span class="tag">2梯2户纯板楼</span>
                        <span class="tag">独立电梯厅</span>
                        <span class="tag">17层小高层</span>
                        <span class="tag">3.05米层高</span>
                        <span class="tag">南北通透</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>产品定位：</strong>项目楼王单位，位于3栋、4栋，为17层小高层纯板楼设计，2梯2户配置，带独立电梯厅，私密性极强。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-ruler-combined"></i>
                        <div><strong>空间尺度：</strong>层高约3.05米，优于常规户型。南北通透竖厅格局，面宽约15.5米，进深约10.2米，呈"短进深、大面宽"的黄金比例。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观优势：</strong>楼栋处于社区中轴位置，部分房源可享270°一线大南山景，还能俯瞰小区内水庭院瀑布等园林景观。客厅衔接约6.1米宽景阳台，全屋环绕270°飘窗。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>得房表现：</strong>拓展后得房率约94%-97%，在同类产品中表现突出。LDKB一体化客餐厅拓展了公共活动空间，实用性强。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>楼王价值：</strong>此户型是项目的"压轴产品"，2梯2户纯板楼、独立电梯厅、3.05米层高、高得房率等配置，体现了低密社区的居住品质。仅17层的小高层设计，保障了居住的舒适性与私密性。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【户型共性】观山海家园户型设计特点</h4>
                <p>1. <strong>宽景阳台设计：</strong> 所有户型观景阳台横向长度均较宽敞，约6米左右，方便欣赏山景或海景；<br>
                2. <strong>飘窗优化采光：</strong> 约95-115㎡户型主卧多为L型或270°飘窗，采光和景观面俱佳；<br>
                3. <strong>高得房率：</strong> 受益于户型设计优化与赠送面积，得房率普遍较高，约138㎡户型尤为突出；<br>
                4. <strong>通透性强调：</strong> 多数户型注重南北通透设计，竖庭格局促进空气对流。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div>
                        <h4>稀缺低密属性</h4>
                        <p>容积率仅约2.65，在前海核心区属于罕见的低密度住宅社区，楼栋采用高低错落围合式布局，最高不过25层。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div>
                        <h4>景观视野最大化</h4>
                        <p>地处大南山脚下，多数户型可享山景资源。宽景阳台与大面积飘窗设计，最大化引入自然光线与景观视野。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>高实用率设计</h4>
                        <p>户型设计注重空间效率，通过阳台连通、飘窗赠送等设计，实现高得房率，部分户型得房率含赠送可达97%。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>交通便利性</h4>
                        <p>距离地铁5号线荔湾站约650米，步行可达。紧邻兴海大道、月亮湾大道等主干道，驾车出行便利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-school"></i>
                    </div>
                    <div>
                        <h4>教育资源优势</h4>
                        <p>项目一路之隔（非主干道）规划了36班小学，未来上学便利程度在妈湾片区具备优势。周边还有荔湾小学和深大附中等学校。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>生态与商业配套</h4>
                        <p>背靠大南山，周边有荔林公园、月亮湾公园、青青世界等生态资源。自带约6000㎡配套商业，西侧有泛海城市购物广场。</p>
                    </div>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <h4>纯商品住宅社区</h4>
                    <p>项目共870套住宅，均为商品房，无政策保障型房源，居住氛围相对纯粹。</p>
                </div>
                <div class="feature-item">
                    <h4>社区园林实景</h4>
                    <p>超8000㎡实景园林、约9米水庭院瀑布已实景呈现，未来生活场景清晰可见。</p>
                </div>
                <div class="feature-item">
                    <h4>户型选择多样</h4>
                    <p>覆盖95-138㎡面积段，提供三房到四房，竖厅与横厅等多种格局选择，适应不同家庭需求。</p>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择建议</h4>
                <p>基于观山海家园户型特点、山景资源及社区规划，结合不同楼栋的位置与环境因素，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #2d5c48;">约95㎡ 三房</h4>
                <p><strong>关注楼栋：</strong>2栋的约95㎡户型为南向近山三房，可观赏园林水景。</p>
                <p><strong>朝向选择：</strong>南向近山或西南向（部分看海）的户型景观视野更佳，东北向户型可看山景。</p>
                <p><strong>楼层建议：</strong>中高楼层（10层以上）可减少可能的地面噪音影响，并获得更好的山景视野。</p>
                
                <h4 style="margin-top: 28px; color: #2d5c48;">约110-115㎡ 四房</h4>
                <p><strong>关注楼栋：</strong>1栋的约115㎡户型采用大横厅设计，适合家庭社交。5栋、6栋的约113㎡户型为四开间朝南布局。</p>
                <p><strong>户型选择：</strong>注重空间开阔感与家庭互动可选横厅设计；偏好动静分区明确可选竖厅格局。</p>
                <p><strong>注意事项：</strong>部分靠近主干道的楼栋或户型可能受交通噪音影响，选择时需关注具体位置。</p>
                
                <h4 style="margin-top: 28px; color: #2d5c48;">约138㎡ 四房</h4>
                <p><strong>关注楼栋：</strong>3栋、4栋的17层小高层，为社区楼王单位。</p>
                <p><strong>产品优势：</strong>2梯2户纯板楼、独立电梯厅、3.05米层高，私密性与舒适度最高。</p>
                <p><strong>景观建议：</strong>中高楼层（8层以上）可最大化270°大南山景观视野，部分房源可俯瞰社区水庭院景观。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>景观与噪音权衡：</strong>项目部分楼栋临近兴海大道等主干道，选择户型时需权衡景观视野与潜在噪音影响。社区中央位置的楼栋（如3栋、4栋）通常更为安静。</p>
            </div>
            
            <div class="complement">
                <h4>【选择考量】观山海家园户型选择关键维度</h4>
                <p>1. <strong>家庭结构匹配：</strong> 根据家庭成员数量与年龄结构，选择三房或四房，是否需双卫、套间等配置；<br>
                2. <strong>生活偏好分析：</strong> 偏好开阔公共空间可选横厅设计，注重卧室私密性可选竖厅格局；<br>
                3. <strong>景观价值优先级：</strong> 注重山景资源的应优先选择面向大南山、中高楼层户型；<br>
                4. <strong>噪音敏感度评估：</strong> 对噪音敏感的客户应详细了解目标户型与主干道的距离及朝向；<br>
                5. <strong>楼栋位置比较：</strong> 社区中央楼栋更为安静，边侧楼栋可能视野更开阔但需关注噪音。</p>
            </div>
            
            <div class="highlight-box">
                <h4>观山海家园项目价值总结</h4>
                <p><strong>核心优势：</strong> 前海片区稀缺的约2.65低容积率山居住宅，纯商品住宅社区，大南山景观资源，地铁5号线便利交通，规划小学的教育配套优势。</p>
                <p><strong>户型特点：</strong> <strong>约95㎡三房</strong>是高性价比的改善入门选择；<strong>约110-115㎡四房</strong>是满足多口之家需求的主流产品，提供竖厅/横厅选择；<strong>约138㎡四房</strong>是追求低密舒适与私密性的楼王产品，得房率与配置标准最高。</p>
                <p style="margin-top: 15px;">项目为前海追求低密山居环境与成熟配套的改善家庭，提供了一个兼顾自然生态与都市便利的居住选择。</p>
            </div>
        </div>
    </div>
`
            },
            "山樾湾花园": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>山樾湾花园</h1>
            <div class="subtitle">前海核心区 · 小南山北麓 · 大型安居型商品房社区</div>
            <div class="property-tag">安居型商品房（人才房）</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>山樾湾花园位于南山区前海妈湾片区、小南山北麓，是前海核心板块内大型的纯安居型商品房社区。项目由国资主导开发，以不到同片区商品房一半的价格，为符合条件的人才和轮候家庭提供扎根南山前海核心区的机会。项目规划总户数约4900户，是目前南山唯一在售的安居房项目。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>稀缺安居房源：</strong>南山唯一在售的安居型商品房，限购区内的核心地段保障房</li>
                    <li><strong>价格优势显著：</strong>配售均价约4.26万元/㎡，为同地段商品房价格的约5折</li>
                    <li><strong>前海核心区位：</strong>地处前海妈湾门户，享受国家级战略发展红利</li>
                    <li><strong>大型纯居社区：</strong>总建筑面积约58.5万㎡，规划纯粹，居住氛围浓厚</li>
                    <li><strong>生态景观优越：</strong>背靠小南山，享自然山景，生态资源丰富</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>项目性质</strong></td>
                    <td>安居型商品房（保障性住房）</td>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市新建投资发展有限公司（国资主导）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约6.3万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约58.5万㎡</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>约4900户（由13座高层塔楼组成）</td>
                </tr>
                <tr>
                    <td><strong>主力户型</strong></td>
                    <td>约70㎡两房、约90㎡三房</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约4250个</td>
                </tr>
                <tr>
                    <td><strong>配售均价</strong></td>
                    <td>42,640元/平方米（精装交付）</td>
                </tr>
                <tr>
                    <td><strong>预计交付时间</strong></td>
                    <td>2026年8月31日</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2023-2093年）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>深圳市汉京物业服务有限公司</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>社区特色与配置</h2>
            <p>作为南山重点民生工程，项目在社区品质和配套上投入颇多，力求打造不输商品房的居住体验：</p>
            
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>超大空中园林：</strong>规划约5万㎡八大主题园林空间，包含草坪、泳池、健身跑道等</li>
                    <li><strong>完善公建配套：</strong>自带约1.9万㎡公配，包括社康中心、文化室、公交首末站等</li>
                    <li><strong>自有商业街区：</strong>配备约9500㎡社区商业，满足日常购物需求</li>
                    <li><strong>品质精装交付：</strong>全屋精装修，部分户型卧室采用夹胶中空LOW-E玻璃以提升隔音效果</li>
                    <li><strong>教育配套齐全：</strong>项目自带21班南山区机关幼儿园，并紧邻规划中的九年一贯制学校</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置</h3>
            <p>位于深圳市南山区前海路0005号，地处前海妈湾片区，小南山北麓，是连接前海与蛇口的门户位置。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁（近期）：</strong>距离在建的15号线“通港路站”约500米，预计2028年通车，该线路串联前海、后海、科技园等高价值节点。</li>
                <li><strong>地铁（现状）：</strong>距离已开通的5号线“荔湾站”约1.5公里。</li>
                <li><strong>道路交通：</strong>毗邻月亮湾大道、前海路、兴海大道等城市主干道，靠近妈湾跨海通道入口。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <p>项目自带一所21班的南山区机关幼儿园。东侧紧邻规划中的前海创新教育集团山樾湾学校（工程名：兴海学校），为一所54班九年一贯制公立学校，由南二外等优质教育集团联合创办。周边还有深大附中等学府。</p>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>社区商业：</strong>项目自带约9500㎡商业街区。</li>
                <li><strong>周边商圈：</strong>2公里范围内有泛海城市广场、佳兆业前海广场等。5公里可覆盖前海万象、蛇口海上世界等高端商圈。</li>
            </ul>
            
            <h3>🌳 生态与休闲</h3>
            <p>南侧无缝衔接小南山公园，可便捷登山览海。周边3公里内还分布有月亮湾公园、青青世界、前海运动公园等多个城市公园。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>极致性价比：</strong>以前海核心区商品房约5折的价格上车，总价255万起，首付门槛低。</li>
                    <li><strong>地段潜力巨大：</strong>占据前海国家级战略发展核心区，未来资产增值潜力与城市发展红利挂钩。</li>
                    <li><strong>社区规模与纯粹性：</strong>超大型纯安居社区，配套齐全，居住氛围单纯。</li>
                    <li><strong>未来交通升级：</strong>在建的15号线通车后，轨道交通将极为便利，直达多个核心就业区。</li>
                    <li><strong>国企开发保障：</strong>由国资平台主导，开发实力和工程进度相对稳健。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>当前交通不便：</strong>现阶段距离已开通的地铁站较远（约1.5公里），依赖公交或自驾，需等待15号线建成。</li>
                    <li><strong>周边城市界面待更新：</strong>项目西侧临近物流港口和堆场，存在一定的噪音、交通影响，环境完全改善需时间。</li>
                    <li><strong>交付等待期：</strong>预计2026年8月底交付，购买后需等待一段时间才能入住。</li>
                    <li><strong>安居房流通限制：</strong>作为政策性住房，其上市交易需满足特定年限和条件，流动性低于普通商品房。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>符合条件的轮候家庭：</strong>深圳市安居型商品房在册轮候人。</li>
                    <li><strong>深圳户籍无房家庭：</strong>符合“深户+社保”条件（社保5年，本科3年）的首次置业家庭。</li>
                    <li><strong>单身人才：</strong>年满30周岁（新增第三队列）或35周岁，符合学历和社保条件的单身人士。</li>
                    <li><strong>看重长期发展的购房者：</strong>能够接受短期周边环境不足，看重前海长远发展红利和房价差价的投资者。</li>
                    <li><strong>在前海、南山工作的刚需：</strong>预算有限但希望定居南山，且通勤能接受现阶段情况的上班族。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>山樾湾花园是一次用“政策资格”换取“核心区资产”的珍贵机会</strong>。它最大的价值在于，以极低的成本锁定了前海这一国家级战略发展区的入场券，让普通家庭也有机会分享城市顶级板块的发展红利。</p>
            
            <div class="warning">
                <p><strong>历史机遇属性：</strong>在深圳住房保障体系逐步转向“共有产权房”的背景下，此类具备完全产权、未来可合规上市交易的安居型商品房项目已非常稀缺，可视为“政策红利末班车”。对于符合申购条件的家庭而言，这不仅是一次买房，更可能是一次资产格局跃升的契机。</p>
            </div>
            
            <p>当然，选择它需要接受其作为“期房”的等待、当前交通的不足以及周边环境的过渡期。项目适合那些<strong>资格符合、预算严格受限，但极其看好前海未来，并愿意用时间换取空间和价值的购房者</strong>。这是一笔典型的“长期投资”，而非追求即刻完美享受的消费。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>山樾湾花园</h1>
            <div class="subtitle">深圳南山前海 · 限购区核心地段安居型商品房</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山前海核心区山樾湾花园安居型商品房项目的全面分析。项目地处前海路，是目前南山区唯一在售、限购区内唯一可买的安居型商品房。本报告将结合其安居房属性、高性价比与区位特点，深入解析产品价值与申请考量。
            </div>
            
            <h2>一、项目核心参数总览</h2>
            <p>山樾湾花园是深圳为保障中低收入家庭住房需求而建设的安居型商品房项目。项目总建筑面积约58.5万㎡，由13座高层塔楼及1所幼儿园组成，总户数达4900户，是一个规模宏大的纯居住社区。项目已为准现楼，预计将于2026年8月31日前毛坯交付。根据最新配售通知，本次可供配售的房源共3136套。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>主力户型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>配售套数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>两房户型</strong></td>
                        <td>约70㎡</td>
                        <td>两房两厅一卫</td>
                        <td>2352套</td>
                    </tr>
                    <tr>
                        <td><strong>三房户型</strong></td>
                        <td>约90㎡</td>
                        <td>三房两厅两卫</td>
                        <td>784套（含89套无障碍户型）</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tag"></i> 配售均价</div>
                    <div class="parameter-value">42,640元/㎡</div>
                    <div class="parameter-desc">按建筑面积计算的毛坯价格</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户比</div>
                    <div class="parameter-value">3-5梯/7-12户</div>
                    <div class="parameter-desc">根据楼栋有四种不同配置</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 标准层高</div>
                    <div class="parameter-value">2.88米</div>
                    <div class="parameter-desc">装配式建筑住宅塔楼</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-map-pin"></i> 项目区位</div>
                    <div class="parameter-value">南山区前海路0005号</div>
                    <div class="parameter-desc">前海核心板块小南山脚下</div>
                </div>
            </div>

            <div class="consideration-note">
                <h4>【核心性质与申请须知】</h4>
                <p>山樾湾花园是安居型商品房，与普通商品房的购买资格、流程、产权限制（如封闭流转）有根本区别。本次配售申请条件已放宽，分为三个队列：<br>
                1. <strong>第一队列</strong>：深圳市安居型商品房在册轮候家庭或领军人才。<br>
                2. <strong>第二队列</strong>：申请人及共同申请人（配偶、未成年子女）均需具有本市户籍，社保要求5年（本科及以上3年），单身需满35周岁。<br>
                3. <strong>第三队列</strong>：申请人需有本市户籍及相应社保年限（同上），但配偶和未成年子女可不受户籍限制，单身年龄要求降至30周岁。<br>
                选房按队列顺序进行。有意向者必须在<strong>2025年12月7日18时</strong>前完成线上认购申请。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约70㎡</div>
                        <div class="unit-name">实用两房 · 主力上车户型</div>
                    </div>
                    <div class="unit-body">
                        <h4>高性价比前海上车之选 · 功能型两房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">双龙抱珠(A户型)</span>
                            <span class="tag">动静分区</span>
                            <span class="tag">总价门槛低</span>
                            <span class="tag">市场稀缺</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>约70㎡户型细分三种。其中A户型为“双龙抱珠”竖厅结构，卧室分列客厅两侧，隐私性好。其余户型为竖厅动静分区结构。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>空间利用：</strong>在约70㎡内实现两房两厅一卫，功能齐全。每个功能间均设计有大凸窗，有利于提高实用性和采光。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-dollar-sign"></i>
                            <div><strong>价值定位：</strong>是当前前海乃至南山、福田新房市场中极为稀缺的小户型供应。以约300万起的毛坯总价，为符合条件的家庭提供了进驻前海核心区的绝佳机会。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>对于符合安居房申请条件的家庭而言，这是“用时间（轮候或等待）和资格，换取前海核心区一张珍贵入场券”的高性价比选择。解决了在南山、前海功能独立居住的迫切需求。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约90㎡</div>
                        <div class="unit-name">舒适三房 · 主流改善户型</div>
                    </div>
                    <div class="unit-body">
                        <h4>一步到位的安居改善 · 实用型三房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">动静分区</span>
                            <span class="tag">双卫配置</span>
                            <span class="tag">LDK结构</span>
                            <span class="tag">家庭友好</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>格局特点：</strong>约90㎡户型同样细分三种，均为竖厅动静分区结构。格局设计合理，室内动线清晰。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>功能升级：</strong>在紧凑面积内实现三房两厅两卫，主次卧分离，并配备两个卫生间，极大提升了多成员家庭的居住便利性和私密性。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足二胎家庭、三代同堂或有独立书房需求的安居改善家庭。LDK（客餐厨一体化）的户型结构设计，增强了家庭互动空间。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>以安居房的价格，提供了媲美普通商品房的户型功能配置。让符合条件的中低收入家庭，也能在深圳核心区实现体面、舒适且功能完备的“一步到位”式安居梦想。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>项目整体定位：前海核心区大型安居社区</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">配套全能</div>
                    <div class="unit-name">大型生活社区</div>
                </div>
                <div class="unit-body">
                    <h4>非单一住宅，而是配套齐全的安居生活大城</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">5万㎡园林</span>
                        <span class="tag">九年制学校</span>
                        <span class="tag">双地铁（含在建）</span>
                        <span class="tag">准现楼实景</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-tree"></i>
                        <div><strong>社区环境：</strong>项目规划有约5万㎡的空中园林，内含草坪、泳池、跑道、健身区等8大主题场景。社区已为准现楼，园林、外立面、公区等均已实景呈现，品质可观。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-graduation-cap"></i>
                        <div><strong>教育资源：</strong>项目自带机关幼儿园。东侧紧邻前海创新教育集团山樾湾九年一贯制学校及深大附中高中部，可实现“目送式”全龄段教育。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-subway"></i>
                        <div><strong>交通与商业：</strong>距离地铁5号线荔湾站约1.5公里，距离在建的15号线通港路站约700米，未来换乘便利。自带约9500㎡商业，周边2公里内有多个购物中心。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>山樾湾花园的核心吸引力在于其“地段+价格+配套”的稀缺组合。以前海核心区商品房约一半甚至更低的价格，获得一个配套成熟、居住氛围纯粹的大型社区。选择它意味着用购房资格和一定的等待，锁定核心区的居住权与资产。但购房者也需要清晰认识其作为安居房的特殊属性（如流转限制）和社区高密度（4900户）的特点。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】外部环境与生活场景</h4>
                <p><strong>生态环境：</strong>项目背靠小南山自然郊野公园，周边2公里范围内分布有兴海公园、月亮湾公园、大南山等多个公园，休闲资源丰富。
                <br><strong>片区现状：</strong>项目位于前海开发板块，周边仍有工地和物流园区，未来片区面貌将随着前海自贸区的建设持续升级，但短期内需接受一定的建设环境。
                <br><strong>交通通勤：</strong>经5号线，3站可达企鹅岛（腾讯科技岛），6站可达科技园，对在南山科技企业工作的群体通勤便利。自驾通过南海大道等主干道连接福田CBD也较为快捷。</p>
            </div>
            
            <h2>三、项目核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>无可比拟的地段与价格优势</h4>
                        <p>位于前海核心区，是限购区内唯一在售安居房。均价仅约4.26万/㎡，是同地段商品房价格的约五折，实现了“用宝安价买前海房”。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>航母级社区与实景品质</h4>
                        <p>总建面约58.5万㎡、4900户的大型纯粹居住社区。作为准现楼，约5万㎡园林、建筑外立面等均已实景呈现，品质远超市场对安居房的传统认知。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-school"></i>
                    </div>
                    <div>
                        <h4>全龄段目送式教育配套</h4>
                        <p>自带幼儿园，并紧邻九年一贯制学校及高中，实现了从幼儿园到高中的一站式教育配套，为家庭解决了核心教育需求。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div>
                        <h4>稀缺生态与规划红利</h4>
                        <p>坐拥小南山自然景观，公园环伺。同时地处“前海深港现代服务业合作区”，享有国家级战略规划带来的长远发展潜力。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁覆盖的便利交通</h4>
                        <p>现有5号线与在建15号线（通港路站）双地铁覆盖，可快速通达科技园、企鹅岛等核心就业区，通勤优势明显。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <div>
                        <h4>申请条件放宽与机会增加</h4>
                        <p>本次配售新增“第三队列”，放宽了对配偶及子女的户籍限制，并降低了单身申请年龄，让更多符合条件的家庭获得了申购机会。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、选择建议与客观考量</h2>
            
            <div class="floor-suggestion">
                <h4>户型选择与综合决策分析</h4>
                <p>基于项目安居房性质、高密度社区特点及不同家庭需求，为您提供以下参考：</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约70㎡ 两房 · 上车与过渡之选</h4>
                <p><strong>适合人群：</strong>单身、新婚夫妻、孩子年幼的三口之家。总价低，还款压力小。
                <br><strong>户型选择：</strong>若注重卧室隐私，可优先考虑“双龙抱珠”的A户型。
                <br><strong>注意事项：</strong>作为长期居所，需评估两房对未来5-10年家庭结构变化的适应性。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约90㎡ 三房 · 一步到位之选</h4>
                <p><strong>适合人群：</strong>已有或计划有二胎的家庭、需要老人同住帮忙带孩子的家庭、需要独立居家办公/学习空间的家庭。
                <br><strong>核心优势：</strong>双卫设计极大提升生活便利性，三房格局提供了更高的功能弹性和更长的居住周期。
                <br><strong>选择建议：</strong>作为主力改善户型，应更关注房间的采光、视野及动静分区的合理性。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">【客观综合权衡要点】</h4>
                <p>1. <strong>安居房特殊属性：</strong>必须彻底理解安居型商品房在购买资格（轮候/队列）、产权限制（封闭流转）、增值收益分享等方面与普通商品房的本质区别。购买的是“居住权”和“保值性”，而非完全的市场投资品。<br>
                2. <strong>高密度社区生活：</strong>4900户、多种梯户比（如5梯12户）意味着较高的居住密度。需评估对社区公共空间使用、电梯等待、邻里复杂度的接受度。<br>
                3. <strong>时间与现状的交换：</strong>项目2026年交付，周边片区仍处建设中。这是 “用当前价格和一定等待时间，购买未来前海成熟配套” 的典型选择。需要权衡眼前便利与长远价值。<br>
                4. <strong>决策时效性：</strong>本次配售的线上认购申请截止时间为<strong>2025年12月7日18时</strong>，具有严格的时效性，需提前备齐材料，果断决策。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>决策核心：</strong>山樾湾花园是深圳住房保障体系给予符合条件家庭的一份“时代红利”。它的决策逻辑非常清晰：<strong>在完全接受其安居房所有权特殊性的前提下，用“资格+较低总价”去交换“前海核心地段+齐全配套+实景品质”的居住解决方案。</strong>它不适合追求房产自由交易和短期市场溢价的投资者，而非常适合那些渴望在深圳核心区扎根、安稳居住，并愿意用时间换取空间的真实住房需求家庭。</p>
            </div>

        </div>
    </div>
`
            }
        },
        "华侨城": {
            "绿景白石洲": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>绿景白石洲</h1>
            <div class="subtitle">华侨城 · 深圳最大规模城市更新 · 总建面约358万㎡未来之城</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>绿景白石洲项目，正式名称为"白石洲城市更新项目"，是深圳市迄今为止规模最大、关注度最高的城市更新（旧改）项目之一。项目位于南山区华侨城片区东部，紧邻深南大道，总规划建筑面积高达约358万平方米，规划打造为一个集高端住宅、大型商业、星级酒店、商务办公、公共配套于一体的大都会级综合体，被誉为"深圳的未来之城"。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>史诗级规模：</strong>总建面约358万㎡，是深圳城市更新的标杆，足以改变片区格局。</li>
                    <li><strong>顶级核心区位：</strong>地处华侨城/香蜜湖豪宅区辐射带，坐拥深南大道主轴，地段价值无可比拟。</li>
                    <li><strong>全能城市配套：</strong>规划超大规模商业中心、多所学校、文化设施，宛如一座微型城市。</li>
                    <li><strong>未来交通枢纽：</strong>距离地铁1号线白石洲站直线距离约788米，未来与规划中的地铁29号线交汇，形成区域轨道交通枢纽。</li>
                    <li><strong>稀缺大体量住宅：</strong>提供市场上极为稀缺的成片高端住宅社区，选择多样。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>绿景集团</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区沙河街道，深南大道北侧，毗邻华侨城</td>
                </tr>
                <tr>
                    <td><strong>项目性质</strong></td>
                    <td>超大型城市更新综合体</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约358万平方米</td>
                </tr>
                <tr>
                    <td><strong>计容总建筑面积</strong></td>
                    <td>约307.7万平方米</td>
                </tr>
                <tr>
                    <td><strong>住宅体量</strong></td>
                    <td>约1,250,000平方米</td>
                </tr>
                <tr>
                    <td><strong>商业体量</strong></td>
                    <td>约550,000平方米</td>
                </tr>
                <tr>
                    <td><strong>规划总户数</strong></td>
                    <td>约13,000户</td>
                </tr>
                <tr>
                    <td><strong>首期产品</strong></td>
                    <td>以高端住宅为主，包含多种面积段户型</td>
                </tr>
                <tr>
                    <td><strong>开发周期</strong></td>
                    <td>超长周期分期开发，整体建成需耗时多年</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>项目特色与规划设计</h2>
            <p>作为一座"城中之城"，白石洲的规划理念超前，旨在打造一个自成一体的完整生态：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>立体城市设计：</strong>通过空中连廊、地下空间、地面公园等多层次连接，实现人车分流与高效流通。</li>
                    <li><strong>集中式商业巨擘：</strong>规划约55万㎡的商业面积，将引入旗舰购物中心、高端百货、特色街区等，重塑深圳商业格局。</li>
                    <li><strong>全龄教育体系：</strong>规划配置多所幼儿园、小学及中学，提供一站式的优质教育资源。</li>
                    <li><strong>文化地标营造：</strong>计划建设艺术中心、演艺场馆等公共文化设施，提升片区人文气质。</li>
                    <li><strong>生态与景观融合：</strong>在超高密度开发中，精心设计中央公园、屋顶花园、景观轴带等绿色空间。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>📍 地理位置与片区</h3>
            <p>项目地处传统豪宅区华侨城与新兴商务区香蜜湖的衔接地带，北望塘朗山，南邻深圳湾。深南大道作为城市主轴穿行而过，使其成为展示深圳城市形象的门户区域，区位战略价值极高。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>轨道交通（现状）：</strong>距离已运营的<strong>地铁1号线"白石洲站"</strong>直线距离约<strong>788米</strong>，步行时间约10-12分钟，是目前项目的主要轨道交通接驳方式。</li>
                <li><strong>轨道交通（规划）：</strong>在建的<strong>地铁29号线</strong>（预计2028年通车）将在白石洲区域设站，与1号线形成换乘枢纽。通车后，可快速串联西丽高铁新城、深圳湾超级总部基地、红树湾片区等重点区域。</li>
                <li><strong>道路交通：</strong>直面<strong>深南大道</strong>，无缝连接福田中心区、南山科技园；快速接入北环大道、沙河西路等城市干道，自驾通达性极强。</li>
                <li><strong>公交系统：</strong>项目本身及周边拥有密集的公交线路，深南大道上多路公交可达全城，最近的公交站距离项目约200米。</li>
            </ul>
            
            <h3>🏫 教育资源（已整合最新详细信息）</h3>
            <p>项目所在片区教育资源高度密集且优质。根据项目最新资料显示：</p>
            <ul class="feature-list">
                <li><strong>片区教学背景：</strong>项目所处片区已整体纳入<strong>南山外国语学校（集团）</strong>教学体系，享有该名校集团的教育资源与理念。</li>
                <li><strong>现有学校环绕：</strong>项目<strong>1公里范围内</strong>，已聚集了<strong>5所初中和7所小学</strong>，形成了成熟的教育氛围。周边现有学校包括<strong>沙河小学、南山第二实验学校</strong>等。</li>
                <li><strong>自身顶级配套：</strong>项目自身规划的教育设施规格极高，将建设：
                    <ul style="padding-left: 20px; margin-top: 5px;">
                        <li><strong>4所幼儿园</strong>，共计<strong>57个班</strong>。</li>
                        <li><strong>3所九年一贯制学校</strong>，共计<strong>90个班</strong>。其中已明确引入的核心学校为<strong>南山外国语学校（集团）白石洲学校</strong>，规划为63个班（小学42班，初中21班），是该集团规模最大、规格最高的王牌校区。</li>
                    </ul>
                </li>
                <li><strong>交付保障：</strong>这些学校将随项目<strong>一期建成时共同交付</strong>，确保业主入住即可享受全龄段的一站式优质教育。</li>
            </ul>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>未来级商业：</strong>项目自带的约55万㎡商业，将成为深圳新的商业目的地，规划包括大型购物中心、主题商业街区等。</li>
                <li><strong>现有商圈：</strong>现阶段可依赖距离约1136米的<strong>益田假日广场</strong>以及华侨城商圈。短距离车程可达<strong>万象天地</strong>、<strong>深圳湾万象城</strong>等顶级商圈，车程均在10-15分钟内。</li>
                <li><strong>生活配套：</strong>项目500米范围内有多个社区超市、便利店和菜市场，满足日常生活需求。</li>
            </ul>
            
            <h3>🌳 生态休闲</h3>
            <p>毗邻<strong>华侨城生态广场</strong>，距离<strong>深圳湾公园</strong>约3.5公里，<strong>塘朗山</strong>约4公里，均在便捷车程内。项目内部亦规划有大量集中绿地和休闲空间，包括约1.2公里的中央绿轴景观带。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>无与伦比的规模与能级：</strong>"深圳第一旧改"的称号带来极高的市场关注度、资源聚集力和未来增值预期。</li>
                    <li><strong>地段价值黄金法则：</strong>深南大道+华侨城的双重地段光环，是资产保值增值的核心保证。</li>
                    <li><strong>配套预期天花板：</strong>一旦建成，其商业、教育等配套将达到城市顶级水平，生活便利度和品质极高。</li>
                    <li><strong>稀缺的产品供应：</strong>在核心区提供如此大体量的新房住宅，对于高端改善客群是稀缺机会。</li>
                    <li><strong>未来交通升级明确：</strong>地铁29号线2028年通车后，将彻底改变项目当前距地铁站约788米的现状，形成真正的双地铁枢纽。</li>
                    <li><strong>教育配套确定性强：</strong>引入南山外国语集团王牌校区，且学校与一期同步交付，极大解决了学位顾虑。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>当前轨道交通便利性一般：</strong>距离最近的地铁1号线白石洲站约788米，需步行10分钟以上，非严格意义上的"地铁上盖"项目，对依赖地铁通勤的买家有影响。</li>
                    <li><strong>超长开发周期：</strong>整体项目完全建成需十年甚至更久，早期业主将长期处于"工地"环境中，居住体验受影响。</li>
                    <li><strong>人口密度极高：</strong>超高层、高容积率的开发模式，必然带来超高的人口密度，社区拥挤感和隐私性可能不足。</li>
                    <li><strong>交通压力巨大：</strong>未来上万住户和大量商业办公人流，将对片区交通（尤其是深南大道）带来严峻考验，拥堵可能加剧。</li>
                    <li><strong>价格预期高昂：</strong>基于其地段和定位，入市价格预计将处于市场顶端，上车门槛极高。</li>
                    <li><strong>学区不确定性：</strong>虽然学校品牌已确定，但具体的招生范围（学区划分）需待建成后由教育部门划定，存在一定变数。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>长期价值投资者：</strong>看好深圳核心区长期发展，能够忍受长周期建设，追求资产大幅增值的买家。</li>
                    <li><strong>依赖自驾出行的改善客群：</strong>对即时地铁依赖度不高，更看重项目长期规划和自驾的便利性，能接受当前距地铁站约788米的距离。</li>
                    <li><strong>重视教育的家庭：</strong>特别看重南山外国语学校品牌及确定性的学位保障，将优质教育作为核心购房因素的家庭。</li>
                    <li><strong>终极改善型家庭：</strong>追求顶级地段、未来顶级配套，且预算极其充足，将此处作为"终极住所"的家庭。</li>
                    <li><strong>地标资产收藏者：</strong>将购买"白石洲"这个标志性项目本身，视为一种资产和身份的象征。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>绿景白石洲不仅仅是一个楼盘，它是一个将深刻影响深圳城市格局的"超级工程"。</strong>其最大的价值在于"规模创造奇迹"——通过前所未有的体量，在深圳核心区重建一座功能齐全的"垂直城市"。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>购买白石洲，是一场"用当前距离换取未来空间"的长线投资。您需要充分接受其现阶段距地铁站约788米的通勤现实，但可以期待2028年29号线通车后形成双地铁枢纽的前景。它不适合追求即刻宁静舒适生活的买家，而更适合那些有远见、有耐心、且资本雄厚的"城市梦想家"。</p>
            </div>
            
            <p>项目首期住宅的入市，将是深圳楼市的一场盛宴。对于符合其客群定位的购房者而言，这是一个能够参与深圳城市发展史的标志性机会。但在做出决定前，必须对其带来的挑战，特别是当前的交通便利性和漫长的开发周期，有充分的预期。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>绿景白石洲·璟庭</h1>
            <div class="subtitle">深圳南山核心 · 500万㎡旧改航母首发作品</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山绿景白石洲项目一期璟庭的全面户型分析。作为深圳体量最大的城市更新项目“旧改航母”的首发之作，项目坐落于南山华侨城核心，地理位置优越。报告将结合项目定位与产品特点，深入解析各户型亮点与居住价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>绿景白石洲·璟庭是总建面约500万㎡城市综合体“旧改航母”的首期住宅部分。本次一期住宅建面约46万㎡，共推出约1257套住宅，户型覆盖约110-187㎡，定位为南山区核心地段的改善型产品。项目预计于2025年底交付，为准现房状态。项目容积率较高，建筑为超高层（74层），梯户比根据不同楼层区域有所区分。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>主力户型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与备注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>约110㎡户型</strong></td>
                        <td>约110㎡</td>
                        <td>三房两厅两卫</td>
                        <td>瞰景三房，动静分区，主卧配备独立卫浴。</td>
                    </tr>
                    <tr>
                        <td><strong>约118㎡户型</strong></td>
                        <td>约118㎡</td>
                        <td>三房两厅两卫</td>
                        <td>“双龙抱珠”格局，西南朝向，南向采光面宽约13.4米。</td>
                    </tr>
                    <tr>
                        <td><strong>约125㎡户型（A/B/C）</strong></td>
                        <td>约125㎡</td>
                        <td>三房两厅两卫</td>
                        <td>分为不同格局，其中B型为“双龙抱珠”，部分户型为双阳台设计。</td>
                    </tr>
                    <tr>
                        <td><strong>约187㎡户型</strong></td>
                        <td>约187㎡</td>
                        <td>四房两厅两卫</td>
                        <td>四开间朝南，横向创新布局，南北双阳台。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-vector-square"></i> 项目容积率</div>
                    <div class="parameter-value">10.3</div>
                    <div class="parameter-desc">容积率高，为超高层地标建筑群</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户比配置</div>
                    <div class="parameter-value">高区3梯6户<br>低区4梯7户</div>
                    <div class="parameter-desc">住宅部分梯户比</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 户型使用率</div>
                    <div class="parameter-value">约71%</div>
                    <div class="parameter-desc">含赠送面积后的实用率</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁交通</div>
                    <div class="parameter-value">1号线上盖</div>
                    <div class="parameter-desc">临近世界之窗站，未来多线交汇</div>
                </div>
            </div>

            <div class="consideration-note">
                <h4>【客观考量】关于高容积率与居住密度</h4>
                <p>需注意，项目容积率高达10.3，建筑为74层超高层，居住密度较高。此外，户型实用率约为71%，低于市场部分改善型项目，选择时需结合对公共空间、视野和居住私密性的要求进行综合权衡。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约110-118㎡</div>
                        <div class="unit-name">主流三房 · 约110㎡/118㎡</div>
                    </div>
                    <div class="unit-body">
                        <h4>核心区入门改善之选 · 功能型三房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">双龙抱珠(118㎡)</span>
                            <span class="tag">动静分区</span>
                            <span class="tag">观景阳台</span>
                            <span class="tag">准现房</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>约118㎡户型采用经典的“双龙抱珠”格局，客厅居中，卧室分列两侧，保障私密静音。约110㎡户型为经典的瞰景三房，动静分区。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>约118㎡户型拥有南向（西南）约13.4米宽采光面，采光充足。约110㎡户型卧室标配飘窗，观景阳台延展视野。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>功能定位：</strong>满足在南山核心地段首次改善或年轻家庭的功能性居住需求，以相对可控的总价进驻华侨城片区。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>设计细节：</strong>餐客一体化设计，连通阳台，增强空间感与家庭互动。主卧套房设计，配备独立卫浴和衣帽间。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>在深圳南山华侨城这一核心地段，提供总价门槛相对友好的三房改善选择，是“上车”稀缺核心区、分享旧改红利的入门产品。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约125-187㎡</div>
                        <div class="unit-name">舒居改善 · 约125㎡/187㎡</div>
                    </div>
                    <div class="unit-body">
                        <h4>尺度升级的改善产品 · 舒适三房与阔绰四房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">四开间朝南(187㎡)</span>
                            <span class="tag">双阳台设计</span>
                            <span class="tag">奢享主卧</span>
                            <span class="tag">创新横厅</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>空间尺度：</strong>约125㎡B户型同样为“双龙抱珠”，部分C户型位于端头，可实现三面采光。约187㎡户型为横向创新布局，四开间朝南，空间感与视野更佳。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wind"></i>
                            <div><strong>通风采光：</strong>约125㎡部分户型为双阳台设计（厨房连通生活阳台），功能性更强。约187㎡户型拥有南北双阳台，实现晾晒与休闲分区。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>面向对空间尺度和居住品质有更高要求的改善家庭，满足多代同堂、追求舒适度与功能性的需求。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-couch"></i>
                            <div><strong>居住体验：</strong>主卧普遍为套房设计，步入式衣帽间、独立卫浴提升私密性与尊贵感。LDK一体化设计（约125㎡A户型）增强公区互动性。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>在核心地段提供超越传统三房的空间体验和功能配置，特别是约187㎡四房产品，是追求一步到位、享受华侨城成熟氛围与未来城市级配套的改善家庭之选。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>项目整体定位：无边界共享之城</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">500万㎡航母</div>
                    <div class="unit-name">城市综合体</div>
                </div>
                <div class="unit-body">
                    <h4>住宅仅为起点，购买的是未来城市生活目的地</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">约40万㎡商业</span>
                        <span class="tag">南外集团学校</span>
                        <span class="tag">立体交通系统</span>
                        <span class="tag">智慧健康社区</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-city"></i>
                        <div><strong>超级配套：</strong>项目是总建面约500万㎡的“旧改航母”。除住宅外，还规划有约40万㎡商业集群（相当于约2个万象天地）、约400米双子塔写字楼、国际酒店、大型公共配套等。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-graduation-cap"></i>
                        <div><strong>教育保障：</strong>项目规划引入南山外国语集团学校，将配建多所幼儿园及九年一贯制学校，预计与一期交付同步。这为项目注入了重要的教育资源价值。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-tree"></i>
                        <div><strong>生态与艺术：</strong>规划有约1.2公里中央绿轴串联多元空间。项目注重公共艺术规划，旨在打造可逛可玩的开放街区。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>购买璟庭不仅是购买一套住宅，更是买入一个正在崛起的未来城市中心。其价值与整个白石洲超级综合体的兑现进度深度绑定。这带来了巨大的配套想象空间和资产增值潜力，但也意味着需要伴随片区度过较长的建设周期。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】户型之外的“超配”价值点</h4>
                <p><strong>交通：</strong>地铁1号线世界之窗站上盖，未来规划有20号线、29号线（建设中）经过，形成“四线三站”格局。<br>
                <strong>生态：</strong>地处华侨城低密公园带，周边环绕大沙河公园、华侨城湿地、深圳湾等多重生态资源。<br>
                <strong>精装与智慧：</strong>精装交付，由知名设计师团队参与设计。项目引入智慧健康人居系统，打造智慧社区。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>无可复制的核心地段</h4>
                        <p>位于南山华侨城片区深南大道主轴，处于深南大道与大沙河科创走廊十字轴心。毗邻世界之窗、华侨城，周边总部基地环伺，是深圳公认的黄金地段。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div>
                        <h4>航母级综合体配套</h4>
                        <p>作为约500万㎡城市更新的首发住宅，可享未来约40万㎡旗舰商业、超甲级写字楼、星级酒店群等全维配套红利，生活便利性与资产想象力远超单一住宅项目。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-school"></i>
                    </div>
                    <div>
                        <h4>优质教育资源规划</h4>
                        <p>规划引入南山外国语集团学校（九年一贯制），并配建多所幼儿园。教育配套的明确规划为项目增添了重要的家庭居住价值。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>立体化轨道交通</h4>
                        <p>地铁1号线上盖，现有交通便利。未来20号线、29号线（建设中）的规划，将进一步强化其作为城市枢纽的地位。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div>
                        <h4>稀缺生态与人文环境</h4>
                        <p>坐拥华侨城片区的低密度生态与人文艺术氛围，周边公园环抱，同时兼具城市繁华与自然静谧，此特质在深圳核心区尤为稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>准现房与品牌保障</h4>
                        <p>项目预计2025年底交付，为准现房，降低了期房等待的不确定性。绿景集团作为深耕深圳的开发商，具备城市更新运营经验。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与客观考量</h2>
            
            <div class="floor-suggestion">
                <h4>户型与选择建议及客观分析</h4>
                <p>基于项目超高层、高容积率的特点及不同户型格局，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约110-125㎡ 三房 · 功能性改善</h4>
                <p><strong>格局选择：</strong>注重卧室安静与私密性，可优先选择“双龙抱珠”格局的118㎡或125㎡B户型。偏好端头位更佳采光，可关注125㎡C户型（东南朝向）。</p>
                <p><strong>楼层建议：</strong>项目为74层超高层，中高楼层（30层以上）视野更开阔，能减少周边建筑遮挡，但需考虑电梯等待时间及对高度的适应性。低楼层性价比可能更高，但需仔细考察日照和景观视野。</p>
                <p><strong>价格策略：</strong>作为进入核心区的主力面积段，此户型总价相对可控，适合预算有限但看重地段的改善客群。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约187㎡ 四房 · 品质型改善</h4>
                <p><strong>核心价值：</strong>此户型主打四开间朝南的阔绰尺度与空间感，是项目中的高端产品。选择此户型应更加关注其景观视野和居住舒适度。</p>
                <p><strong>楼层建议：</strong><strong>强烈建议选择高区房源</strong>。高楼层能最大化发挥其超宽南向面的观景价值，俯瞰华侨城绿意或城市繁华，规避高容积率可能带来的压抑感，真正体现其改善价值。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">【客观综合考量】</h4>
                <p>1. <strong>高密度生活：</strong>容积率10.3、74层超高建筑、3梯6户/4梯7户的配置，意味着较高的居住密度。需评估自身对社区人口密度、电梯等待、公共空间共享度的接受能力。<br>
                2. <strong>长期建设环境：</strong>项目为巨型旧改首期，整个片区完全成熟可能需要数年甚至十年以上时间。在此期间，需面对周边持续施工、城市界面不断变化的状况。<br>
                3. <strong>使用率与得房率：</strong>约71%的使用率在改善型产品中不具备优势，实际室内空间需结合样板间实地感受。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>决策核心要点：</strong>绿景白石洲·璟庭的核心吸引力在于“以核心地段+未来航母级配套，换取长期资产价值与生活想象”。其选择逻辑应是：在能接受较高密度居住环境和较长片区成熟周期的前提下，用房产投资换取南山最核心地段的一张“门票”，并分享城市超级更新项目的长期红利。对于追求即享低密、静谧纯粹社区环境的购房者，需要慎重考虑。</p>
            </div>

        </div>
    </div>
`
            }
        },
        "南头": {
            "中海云启源境": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>中海云启源境是南山科技园板块唯一一个央企开发的项目，地处南山中心区与科技园辐射范围内，周边聚集了高新技术产业与总部经济资源。项目采用新规设计，实用率高达95-98%，尽享中山公园景观视野。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>唯一性：</strong>南山科技园板块唯一央企开发项目</li>
                    <li><strong>实用率：</strong>新规设计，实用率高达95-98%</li>
                    <li><strong>教育资源：</strong>楼下就是南山实验教育集团园丁学校</li>
                    <li><strong>智能家居：</strong>全屋Living OS智能系统，科技感十足</li>
                    <li><strong>景观资源：</strong>看中山公园景观视野，环境优美</li>
                </ul>
            </div>
        </section>
        
        <section class="price-info">
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>中海集团（央企）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约0.98万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约4.43万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>6.45</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>3栋21-47层高住宅（1栋1单元商品房47F，1栋2单元商品房21F，1栋3座保障性租赁住房46F）</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>708户（商品房298户，保障性租赁住房410户）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>598个停车位，车位占比约1:0.85</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>智能家居系统亮点</h2>
            <p>全屋采用Living OS智能系统，更敏锐的语音控制，还有各种黑科技：</p>
            
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>燃气检测系统：</strong>如遇到燃气泄漏，OS检测到会自动控制推窗，联动同步关闭燃气阀门</li>
                    <li><strong>防干烧技术：</strong>采用了动态追踪算法+抗干扰测温，让燃气灶自动防干烧</li>
                    <li><strong>水阀传感系统：</strong>配有水浸传感，家里漏水了会自动切断水阀，并且通知主人检修</li>
                    <li><strong>净水系统：</strong>直饮水会在系统记录滤芯周期，智能提醒更换</li>
                    <li><strong>餐厨系统：</strong>餐厨用了「深湾玖序」祖传同款的互动式可移动岛台；橱柜内藏了不少设备，基本上都是集成联动和智能的</li>
                    <li><strong>智能照明：</strong>全屋智能灯光系统，可根据时间、场景自动调节</li>
                    <li><strong>环境监测：</strong>实时监测室内空气质量，自动开启空气净化</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置</h3>
            <p>位于南山区北环大道南农路西侧，紧邻中山公园，距离中山公园地铁站约700米，交通便捷。项目地处南山中心区与科技园辐射范围内，周边聚集了高新技术产业与总部经济资源。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离12号线同乐站直线距离约300米，周边还有在建的15号线同乐关站，贯穿前海、后海、南山、宝安等重要片区</li>
                <li><strong>主干道：</strong>北环大道、南坪快速、南海大道等多条主干道环绕</li>
                <li><strong>公交：</strong>周边多个公交站点，线路覆盖全城</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <p><strong>南山实验教育集团园丁学校</strong> - 家门口一站式优质教育，目送式书香学府小学&初中。2017年9月开办，是隶属于南山区教育局的一所九年一贯制公办学校，小学初中成绩在南山区算是一个比较不错的学校。</p>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>社区商业：</strong>项目旁边是豪方天际的写字楼的配套商业以及和前海东岸的底商互动，总建筑面积约8.14万平米基本生活配套都有</li>
                <li><strong>大型商场：</strong>周边2-3公里还有约1万㎡隆尚Minitown、海雅缤纷城、沃尔玛、西丽约8万㎡云城万科里等</li>
                <li><strong>餐饮娱乐：</strong>周边多个美食街、电影院、健身房等设施</li>
            </ul>
            
            <h3>🌳 公园人文</h3>
            <p>项目南侧是南山区中山公园与项目相隔北环大道，通过人行天桥连接。中山公园是深圳最大、历史最悠久的城市公园，占地面积达49万平方米，是休闲健身的理想场所。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>位置绝佳：</strong>楼下就是南山实验园丁学校，南山第二梯队头部学校，近两年普高率均超85%，教育实力强大</li>
                    <li><strong>交通便利：</strong>地铁12号线同乐南站近在咫尺，多条主干道环绕。离南山科技园距离适中，通勤便捷</li>
                    <li><strong>使用率高：</strong>相比周边二手，云启源境户型使用率和实用性都更出色，所有户型使用率均超90%</li>
                    <li><strong>景观资源：</strong>看中山公园景观视野，环境优美</li>
                    <li><strong>智能家居：</strong>全屋采用Living OS智能系统，科技感强，生活便利</li>
                    <li><strong>开发商实力：</strong>中海集团，央企开发，品质有保障</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>噪音影响：</strong>项目靠近北环大道和南坪快速路车流量较大，靠马路的户型会有些噪音影响</li>
                    <li><strong>商业配套缺乏：</strong>大型商业配套缺乏，购物娱乐需要一定距离出行</li>
                    <li><strong>居住圈层不纯粹：</strong>保障房占比过大（410 / 708），商品房占比不高</li>
                    <li><strong>容积率高：</strong>6.45的容积率偏高，楼间距较近，居住的采光和视野有一定影响</li>
                    <li><strong>车位紧张：</strong>由于保障房占比过高，车位比例略显不足</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>科技园上班族：</strong>距离科技园仅几公里，通勤便利</li>
                    <li><strong>重视教育的家庭：</strong>楼下就是优质学校，九年一贯制</li>
                    <li><strong>改善型购房者：</strong>105-143㎡户型满足改善需求</li>
                    <li><strong>追求科技感的年轻人：</strong>全屋智能家居系统，科技感十足</li>
                    <li><strong>预算700-1100万：</strong>性价比高，总价可控</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>中海云启源境是<strong>南山科技园板块唯一央企开发的项目</strong>，其核心优势在于<strong>优越的地理位置、南山一梯队名校资源和智能家居系统</strong>。项目实用率高，户型设计合理，特别适合在科技园工作的家庭。</p>
            
            <div class="warning">
                <p><strong>特别推荐：</strong>目前项目加推最后54套，开盘优惠0.941折，性价比显著！对于预算在700-900万之间，希望在科技园周边置业的三房需求者，这是一个难得的机会。</p>
            </div>
            
            <p>项目兼具刚需和改善属性，90-105㎡三房适合首置或改善家庭，143㎡四房适合多代同堂的改善型家庭。虽然存在一些不足，但综合考虑地段、教育、价格等因素，中海云启源境无疑是当前市场中的优质选择。</p>
        </section>
        
         </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>中海云启源境</h1>
            <div class="subtitle">深圳南山 · 科技园北 · 新规奢宅</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山区中海云启源境项目的全面户型分析。作为南山科技园板块目前唯一的央企开发新盘，项目定位为“大湾区首个中海好房子”，主打90-143㎡的新规三至四房。项目以高使用率、地铁口便利及中山公园景观为核心卖点，是科技园片区稀缺的刚改及改善型产品。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>中海云启源境位于南山区北环大道北侧、南农路西侧，紧邻南山实验园丁学校。项目占地约0.98万㎡，总建筑面积约8.77万㎡，容积率约6.4。社区共3栋住宅（含1栋保障房），总户数708户，其中可售商品房仅298套，保障房410套，商品房占比约42%。项目预计于2027年4月底交付1#两栋商品房塔楼。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型命名</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>悦享三房</strong></td>
                        <td>约90㎡</td>
                        <td>三房两厅两卫</td>
                        <td>LDKB一体化竖厅，三开间朝南，高得房率约94%</td>
                    </tr>
                    <tr>
                        <td><strong>舒阔三房</strong></td>
                        <td>约105㎡</td>
                        <td>3+1房两厅两卫</td>
                        <td>约5米开间客厅，可变空间，得房率超96%</td>
                    </tr>
                    <tr>
                        <td><strong>尊邸四房</strong></td>
                        <td>约143㎡</td>
                        <td>四房两厅两卫</td>
                        <td>巨幕阳台，四开间朝南，得房率约96%</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约6.4</div>
                    <div class="parameter-desc">总户数708户（商品房298套）</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 核心亮点</div>
                    <div class="parameter-value">超高得房率</div>
                    <div class="parameter-desc">新规设计，得房率（含赠送）达94-96%</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约300-500米</div>
                    <div class="parameter-desc">近12号线同乐南站</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 核心景观</div>
                    <div class="parameter-value">中山公园</div>
                    <div class="parameter-desc">步行约5分钟可达49万㎡市政公园</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            <p>以下分析基于项目首推的1栋一座商品房（3梯5户）及近期加推的小高层产品。</p>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约105㎡</div>
                        <div class="unit-name">舒阔3+1房</div>
                    </div>
                    <div class="unit-body">
                        <h4>灵活多变的功能性三房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">5米宽厅</span>
                            <span class="tag">可变空间</span>
                            <span class="tag">高得房率</span>
                            <span class="tag">新规设计</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间尺度：</strong>客厅开间达约5米，LDKB一体化设计，空间感强。主卧实测面积约16.62㎡，次卧分别约11.31㎡和7.28㎡，居住尺度舒适。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>高拓展性：</strong>得益于新规设计，赠送的阳台或设备平台可改造为房间，实现“3+1”房的功能。得房率（含赠送）高达96.1-96.69%，实用性极强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>朝向与采光：</strong>主要为东南或东北朝向，三开间朝南，采光充足。部分中高楼层房源视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>适合需要独立书房、儿童活动空间或考虑未来家庭成员增加的三口之家及改善型家庭。折后总价约820-898万。 </div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是新规优势的集中体现，以约105㎡的面积，通过高得房率和可变空间设计，提供了媲美传统120㎡户型的实用功能。作为近期加推的小高层产品（21层），居住密度相对更低，更受市场关注。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约90㎡</div>
                        <div class="unit-name">悦享三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>高性价比全能三房 · 入驻南山核心</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">低总价门槛</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">高实用率</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>约90㎡为竖厅设计，LDKB一体化，空间通透。三开间朝南（西南向），配备U型厨房和干湿分离卫生间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wallet"></i>
                            <div><strong>价格优势：</strong>作为项目入门级产品，折后总价约701-751万，是科技园板块总价门槛较低的南山三房选择。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>设计细节：</strong>采用S墙设计预留冰箱位，得房率（含赠送）约94.1%。部分户型主卧带双飘窗，增强采光与舒适度。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>功能定位：</strong>总价敏感型刚需及首次改善客户的首选；追求便利通勤的科技园上班族；看重“中海好房子”品质与学区的家庭。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型以极具竞争力的总价，实现了入驻南山核心区、享受央企品质、地铁通勤便利及优质学区的核心价值，是“上车”科技园片区的关键产品。近期加推的90㎡小高层房源折后总价约700-754万。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>标杆改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约143㎡</div>
                    <div class="unit-name">尊邸四房</div>
                </div>
                <div class="unit-body">
                    <h4>阔景改善四房 · 诠释“好房子”标准</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">巨幕阳台</span>
                        <span class="tag">四开间朝南</span>
                        <span class="tag">头排公园景观</span>
                        <span class="tag">高得房率</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>奢阔尺度：</strong>客厅连接次卧出巨幕大阳台，开间宽阔，视野震撼。客餐厅LDKB一体化设计，面积可达约30㎡，空间通透。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-park"></i>
                        <div><strong>景观优势：</strong>东南朝向，四开间朝南。高区房源可享头排中山公园景观，部分楼层甚至拥有深圳湾视野，生态与城市景观兼得。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-chart-line"></i>
                        <div><strong>高实用率：</strong>得房率（含赠送）约96.14%，新规设计实现高空间利用率。作为“中海好房子”Living OS系统的落地项目，在安全、舒适、智慧等维度有系统化升级。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>面向多孩家庭、三代同堂或追求优质公园景观和完善社区功能的高端改善客户，是项目的品质标杆。折后总价约1070-1338万。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型不仅以四房配置满足大家庭的全功能需求，更通过巨幕阳台、优质景观和“好房子”科技系统，带来了全面的居住体验升级，是科技园片区稀缺的改善型产品。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目综合评估与动态</h4>
                <p>1. <strong>“好房子”标准落地：</strong>项目作为大湾区首个“中海好房子”，搭载了Living OS系统，在居家安全（如烟灶联动、燃气报警）、智慧控制（15.6寸智慧中控屏）、绿色节能等方面有系统性提升。<br>
                2. <strong>当前销售动态：</strong>项目处于持续销售期。首推1栋一座（47层，3梯5户）后，近期加推了1栋二座小高层（21层）最后90套90-105㎡房源。市场信息显示有0.918至0.941折的综合折扣。<br>
                3. <strong>需关注的方面：</strong>项目容积率较高（约6.4），且地块较小，社区花园空间可能受限。保障房占比约58%，与商品房共享社区，可能影响圈层纯粹性和公共资源使用体验。车位比约1:0.85，稍显紧张。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>央企中海“好房子”</h4>
                        <p>由央企中海地产开发，资金实力与交付保障强。作为“大湾区首个中海好房子”，产品在安全、舒适、智慧、绿色方面有系统性标准。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div>
                        <h4>新规超高使用率</h4>
                        <p>采用新版建筑设计规范，通过设备平台、飘窗等赠送，主力户型得房率（含赠送）高达94-96%，远超周边部分竞品，实用性强。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>优质学区资源</h4>
                        <p>紧邻南山实验教育集团园丁学校（九年一贯制公办），属南山中等偏上学校，2024年普高率近90%，对家庭客群吸引力强。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁覆盖</h4>
                        <p>距离12号线同乐南站约300-500米，步行可达。未来还有在建的15号线同乐关站，形成双地铁网络，快速通达科技园、前海、宝安。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-park"></i>
                    </div>
                    <div>
                        <h4>公园生态与成熟配套</h4>
                        <p>步行约5分钟可达49万㎡中山公园。周边2-3公里内有海雅缤纷城、沃尔玛等成熟商业。驱车经北环大道可快速抵达科技园等核心商务区。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tags"></i>
                    </div>
                    <div>
                        <h4>高性价比门槛</h4>
                        <p>在科技园板块，以总价约700万起的门槛提供南山三房，对比周边二手房（如豪方天际、前海东岸单价8-9万）及同区域新房，具备一定价格优势。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目不同楼栋（47层高塔楼 & 21层小高层）的分布、朝向及容积率较高的特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约90㎡ 三房</h4>
                <p><strong>朝向选择：</strong>主要为西南朝向。西南向午后采光佳。</p>
                <p><strong>楼栋选择：</strong>近期加推的1栋二座为21层小高层，居住密度和等梯时间可能优于47层的1栋一座，可根据推售情况优先关注。</p>
                <p><strong>建议楼层：</strong>鉴于项目容积率高、楼间距需关注，强烈建议选择中高楼层（建议15层及以上），以保障充足的采光、通风和视野，减少对视和遮挡。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约105㎡ 3+1房</h4>
                <p><strong>朝向特点：</strong>东南或东北朝向，三开间朝南。东南向上午阳光好，东北向夏季更凉爽。</p>
                <p><strong>空间优势：</strong>拥有约5米宽厅和可变空间，功能性更强。</p>
                <p><strong>建议楼层：</strong>作为功能性改善户型，同样建议优先选择中高楼层。高楼层能更好地展现客厅的宽阔感，并可能获得更优的通风和侧向景观。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约143㎡ 四房</h4>
                <p><strong>朝向与景观：</strong>东南朝向，四开间朝南。景观是此户型核心价值，高区可享中山公园乃至深圳湾视野。</p>
                <p><strong>建议楼层：</strong>务必选择高楼层（建议20层以上）。只有足够高的楼层，才能最大化其巨幕阳台的观景价值，规避前方建筑遮挡，实现“公园景观房”的溢价，充分体现其改善属性。</p>
                <p><strong>梯户比提示：</strong>主力楼栋为3梯5户。对于143㎡大户型买家，可结合房源在楼层中的具体位置，考察电梯厅的公共空间感和私密性。</p>
            </div>
            
        </div>
    </div>
`
            },
            "天源华府": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>天源华府</h1>
            <div class="subtitle">南头·中山公园旁 · 低密度公园住宅 · 地铁口准现房</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>天源华府位于南山区南头街道核心，地处南山大道与玉泉路交汇处，三面被中山公园环抱。项目定位为南山核心区的中高端改善型住宅，凭借极低的容积率（3.05）、稀缺的公园生态资源和准现房状态，主打为注重居住舒适度与环境品质的家庭提供纯粹的改善选择。项目已开盘，处于准现房阶段，外立面已呈现。</p>
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>公园环绕的生态居所：</strong>项目三面紧邻占地约49万㎡的中山公园，享有一线永久性公园景观，生态环境得天独厚。</li>
                    <li><strong>低密度舒适社区：</strong>容积率仅3.05，在南山新盘中极为稀缺，楼间距宽，居住密度和舒适度高。</li>
                    <li><strong>地铁口准现房：</strong>步行约300米可达已开通的地铁12号线中山公园站。项目已是准现房，预计2026年7月交付，等待周期较短。</li>
                    <li><strong>高品质精装标准：</strong>全屋精装交付，配备日立中央空调、汉斯格雅卫浴等一线品牌，外立面采用双层LOW-E玻璃与铝板。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr><th>项目信息</th><th>详细内容</th></tr>
                <tr><td><strong>开发商</strong></td><td>深圳市乾富控股有限公司、深圳市西岭股份合作公司</td></tr>
                <tr><td><strong>具体位置</strong></td><td>南山区南头街道，南山大道与玉泉路交汇处（中山公园东侧）</td></tr>
                <tr><td><strong>占地面积</strong></td><td>约1.61万㎡</td></tr>
                <tr><td><strong>总建筑面积</strong></td><td>约7.71万㎡</td></tr>
                <tr><td><strong>容积率</strong></td><td>3.05</td></tr>
                <tr><td><strong>绿化率</strong></td><td>30%-33.38%</td></tr>
                <tr><td><strong>楼栋构成</strong></td><td>3栋32层住宅塔楼</td></tr>
                <tr><td><strong>总规划户数</strong></td><td>429户（其中含回迁房约140套）</td></tr>
                <tr><td><strong>主力户型</strong></td><td>建面约90㎡两房、110-111㎡三房、155-186㎡四房</td></tr>
                <tr><td><strong>车位配置</strong></td><td>约500个（车位比约1:1.17）</td></tr>
                <tr><td><strong>交付标准/时间</strong></td><td>精装交付，预计2026年7月28日</td></tr>
                <tr><td><strong>物业公司</strong></td><td>深圳市华源物业</td></tr>
                <tr><td><strong>物业费</strong></td><td>6.9元/㎡/月</td></tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品特色与精装标准</h2>
            <p>项目在建筑品质和装修标准上着力塑造高端改善盘的质感：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>现代公建化外立面：</strong>采用双层LOW-E玻璃与铝板相结合，呈现现代简约风格，兼具良好的隔热、隔音性能。</li>
                    <li><strong>一线品牌精装体系：</strong>全屋精装交付，标配日立中央空调、汉斯格雅卫浴等国际一线品牌，提升居住品质。</li>
                    <li><strong>户型设计侧重景观与采光：</strong>部分大户型设计有转角天幕阳台或观景台，最大化面向中山公园的景观视野。多数户型采用板楼设计，追求南北通透。</li>
                    <li><strong>低容积率与板楼布局：</strong>3.05的低容积率配合点板结合的布局，有效减少了楼栋对视，保证了户型的采光和私密性。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>步行约300米可达已开通的地铁12号线中山公园站。未来规划中的地铁21号线预计也将在此设站，形成双地铁格局。</li>
                <li><strong>道路交通：</strong>紧邻南山大道、北环大道等城市主干道，自驾出行便捷，可快速通达科技园、前海、深圳湾等核心就业区。</li>
            </ul>
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>学区：</strong>项目所属学区为南头城学校（九年一贯制公办），该校于2018年完成重建升级，与项目仅一路之隔。但学区划分每年可能调整，需以当年教育局公布为准。</li>
                <li><strong>其他学校：</strong>周边还有南山实验教育集团麒麟中学、麒麟小学等知名学府。</li>
            </ul>
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>基础商业：</strong>项目配建有约7000㎡的地铁接驳商业及社区底商。</li>
                <li><strong>中型商场：</strong>步行约900米可达益田假日里购物中心（约6万㎡）。</li>
                <li><strong>大型商圈：</strong>车程15-30分钟内可抵达华润万象天地、壹方城等南山、宝安顶级商圈。</li>
            </ul>
            <h3>🌳 生态休闲</h3>
            <p>项目最大卖点是三面环绕的中山公园，此外步行可达南头古城、荷兰花卉小镇，1.3公里处有荔香公园，休闲资源非常丰富。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>稀缺的生态与低密属性：</strong>“公园环绕+容积率3.05”的组合在南山新房市场中绝无仅有，提供了极致的居住舒适性和不可复制的景观价值。</li>
                    <li><strong>产品品质与地段俱佳：</strong>一线品牌精装、公建化外立面，叠加南山核心区地段，确保了项目的基本品质和资产价值。</li>
                    <li><strong>通勤便利性高：</strong>双地铁（含规划）上盖，且位于几大就业中心（科技园、前海）的几何位置，对通勤族友好。</li>
                    <li><strong>准现房降低风险：</strong>相比期房，准现房状态大大降低了交付不确定性，可实现不久后入住。</li>
                </ul>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>社区内部配套匮乏：</strong>仅3栋楼，社区体量小，缺乏大型园林、会所、泳池等公共配套，活动空间有限。</li>
                    <li><strong>居住圈层纯粹性受影响：</strong>项目包含约140套回迁房（占比约32.6%），可能对社区管理的统一性和居住氛围的纯粹性带来挑战。</li>
                    <li><strong>周边城市界面一般：</strong>项目周边存在城中村和旧工业区，城市面貌新旧混杂，整体提升需要时间。</li>
                    <li><strong>噪音与价格门槛：</strong>北侧紧邻南山大道，低楼层可能受 traffic noise 影响。同时，单价和总价门槛较高，90㎡户型设计为两房，功能性不及同面积段竞品。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>追求静谧环境的改善家庭：</strong>将居住的宁静、舒适度和自然环境置于首位，愿意为公园景观和低密度支付溢价的家庭。</li>
                    <li><strong>在南山核心区工作的中高产：</strong>在科技园、前海等地工作，通勤依赖地铁或自驾，注重生活与工作平衡的精英人士。</li>
                    <li><strong>看重即期居住品质的买家：</strong>厌烦长期等待期房，希望尽快入住高品质新居，且对社区大型配套要求不高的购房者。</li>
                    <li><strong>资产配置型客户：</strong>看好南山核心区地段和稀缺公园资源的长期保值增值能力。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>天源华府是一个特点鲜明、定位精准的“偏科生”式改善盘。</strong>它将其核心优势——稀缺的公园生态与低密度——做到了片区极致，并以准现房和高标准装修呈现，为市场提供了一个与众不同的选择。</p>
            <div class="warning">
                <p><strong>选择建议：</strong>购买天源华府，本质上是为“宁静、公园与低密”这种独特的居住体验付费。如果您极度看重社区内部的静谧感、开阔的视野和推窗见绿的环境，并能接受其社区配套简单、周边界面普通的短板，那么它是一个极具吸引力的选项。但如果您更看重社区的豪华配套、纯粹的圈层或者极高的户型功能性，则需要谨慎权衡。</p>
            </div>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>天源华府</h1>
            <div class="subtitle">深圳南山 · 中山公园东侧 · 地铁口公园住宅</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山区天源华府项目的全面户型分析。项目位于南山核心区，紧邻49万㎡的中山公园，是真正“长在公园里的住宅”。作为地铁12号线中山公园站无缝接驳的“地铁口物业”，项目主打约92-185㎡的二至四房，以“公园景观+核心地段+便捷交通”为核心卖点。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>天源华府由乾富控股与西岭股份合作开发，项目已于2024年11月取得预售许可证并开盘入市。社区总户数约443户，本次可售商品房为297套。项目为精装修交付，预计于2026年7月交房。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型类型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>舒居两房</strong></td>
                        <td>约92-93㎡</td>
                        <td>两房两厅两卫</td>
                        <td>全南朝向，LDKB一体化，全明采光</td>
                    </tr>
                    <tr>
                        <td><strong>宽景三房</strong></td>
                        <td>约110-115㎡</td>
                        <td>三房两厅两卫</td>
                        <td>南北通透，约4米阔绰双厅，“景观+生活”双阳台</td>
                    </tr>
                    <tr>
                        <td><strong>奢阔四房</strong></td>
                        <td>约155-193㎡</td>
                        <td>四房两厅三卫</td>
                        <td>7.5米横厅，双套房、三阳台、中西双厨</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约3.0</div>
                    <div class="parameter-desc">占地面积约1.6万㎡，建筑面积约8.37万㎡</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 核心景观</div>
                    <div class="parameter-value">中山公园</div>
                    <div class="parameter-desc">西侧紧邻49万㎡市政公园，享永久生态景观</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约23米</div>
                    <div class="parameter-desc">无缝接驳12号线中山公园站D出口</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 交付标准</div>
                    <div class="parameter-value">精装现楼</div>
                    <div class="parameter-desc">2026年7月精装交付，外立面已呈现</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约155-193㎡</div>
                        <div class="unit-name">奢阔四房</div>
                    </div>
                    <div class="unit-body">
                        <h4>横厅尺度改善之选 · 公园景观最大化</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">7.5米横厅</span>
                            <span class="tag">双套房</span>
                            <span class="tag">中西双厨</span>
                            <span class="tag">三阳台</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>奢阔尺度：</strong>以193㎡户型为例，采用约7.5米大横厅设计，LDKB（客、餐、厨、阳台）四位一体，空间开阔通透。配备中西双厨及三个阳台，功能齐全。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>尊崇配置：</strong>双套房设计，保障多代家庭成员居住的私密性与舒适度。主卧套房可享优越景观。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-park"></i>
                            <div><strong>景观优势：</strong>户型为南北朝向，进深约2米多的阳台形成“I-Max巨幕”观景效果，将中山公园的绿意美景尽收眼底。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>面向追求极致空间尺度、优质公园景观和完善功能配置的高端改善家庭，是项目的标杆产品。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型将核心地段的稀缺性与公园景观的生态价值相结合，以大横厅和多功能设计，提供了市中心难得的阔绰居住体验。备案总价区间较大，约778-2945万元/套。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约92-115㎡</div>
                        <div class="unit-name">舒居两房/三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>全能刚改优选 · 高实用率功能宅</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">全南/南北通透</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">双阳台</span>
                            <span class="tag">低总价门槛</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>约93㎡两房为全南朝向，全明采光，采用LDKB一体化设计，动静分区。约115㎡三房为南北通透设计，拥有约4米阔绰双厅及“景观+生活”双阳台。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fasfa-sun"></i>
                            <div><strong>采光与视野：</strong>全明户型设计确保每个房间均有自然采光。部分户型客厅与次卧连通大阳台，视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wallet"></i>
                            <div><strong>价格与定位：</strong>作为项目入门级产品，折后总价约667万起，为首付预算有限但希望落户南山核心区、享受公园与地铁便利的刚需及首次改善家庭提供了选择。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>市场对比：</strong>有市场观点指出，其90㎡做三房的设计相比同价位某些新盘的“空间魔法”略显局促，但凭借核心地段和现房预期，仍具吸引力。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>这类户型以相对可控的总价，实现了入驻南山核心区、坐拥公园景观和地铁口便利的核心价值，是“上车”南山的重要选择之一。项目备案均价约11万元/平米，实际销售有折扣。
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目综合评估与提示</h4>
                <p>1. <strong>核心优势明确：</strong>“公园+地铁”双重稀缺资源叠加。地处南山核心，通勤便利，自驾前往前海、科技园等主要商务区均在20分钟内。<br>
                2. <strong>需关注的方面：</strong>项目容积率约3.0，在区域内属常规水平。社区规模中等，且需注意其回迁房占比约32.6%，可能影响居住圈层纯粹性。北侧紧邻南山大道，低楼层或面临交通噪音问题。<br>
                3. <strong>开发商与交付：</strong>由乾富控股开发（与华源物业合作）。有市场信息提及开发商存在一定的财务压力，曾通过促销调整价格。项目承诺2026年7月精装交付。<br>
                4. <strong>学区资源：</strong>项目属于南头城学校（九年一贯制）学区，学校距离很近。但学区划分政策可能存在变动，需以当年教育部门公布为准。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-park"></i>
                    </div>
                    <div>
                        <h4>绝版公园景观</h4>
                        <p>西侧紧邻49万㎡中山公园，享永久性、无遮挡的城市绿肺景观，生态价值稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>地铁口无缝接驳</h4>
                        <p>距离地铁12号线中山公园站D出口仅约23米，是真正的“地铁上盖”物业，通勤极其便利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>核心枢纽地段</h4>
                        <p>地处南山大道与玉泉路交汇处，位于前海、科技园、后海等多个核心板块的几何中心，自驾通达性高。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>就近学区资源</h4>
                        <p>所属南头城学校（九年一贯制）学区，教育资源优质，且与项目仅一路之隔，就学便利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <h4>成熟生活配套</h4>
                        <p>步行可达益田假日里等商场，周边生活氛围成熟。南头古城在侧，兼具历史人文气息。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <div>
                        <h4>充足车位配置</h4>
                        <p>规划约500个停车位，车位比约1:1.12，高于许多市区楼盘，对驾车家庭友好。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目“公园景观”和“临主干道”的特点，结合不同户型的分布，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约92-115㎡ 两房/三房</h4>
                <p><strong>朝向选择：</strong>两房多为全南朝向，三房多为南北通透。南向户型采光充足，且能更好享受小区内部或侧向景观。</p>
                <p><strong>景观与噪音权衡：</strong>项目北侧临南山大道。若优先考虑安静，建议避开北向低楼层；若更看重无遮挡的公园视野，西向中高楼层是优选。</p>
                <p><strong>建议楼层：</strong>综合考虑景观和噪音，建议选择中高楼层（建议8层及以上）。既能提升视野，有效规避低楼层可能受到的街道噪音和视线干扰，也能更好地欣赏中山公园景致。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约155-193㎡ 四房</h4>
                <p><strong>朝向与格局：</strong>主力为大面宽横厅设计，朝向佳，景观面开阔。</p>
                <p><strong>核心价值点：</strong>此类户型的核心价值在于极致的空间尺度和公园景观享受。</p>
                <p><strong>建议楼层：</strong>强烈建议选择高楼层（建议15层以上）。高楼层能最大化横厅的视野优势，将中山公园的浩瀚绿意作为专属背景，真正实现“公园之上”的居住体验，同时大幅减少道路噪音影响。</p>
                <p><strong>梯户比提示：</strong>项目不同单元梯户比不同（如2梯4户、3梯5户等）。对于大户型买家，可优先关注梯户比更低的单元，以提升私密性和出行效率。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于项目规划及市场信息分析，仅供参考。天源华府社区包含回迁房，整体居住氛围可能受到影响。开发商品牌实力与财务稳健性是购房决策中需谨慎评估的因素。最终选择务必<strong>结合实地看房感受</strong>，尤其要在不同时间段体验目标房源的光照、视野和噪声情况。同时，项目周边存在部分城中村，城市界面有待更新。所有关于价格、折扣、交付时间及学区划分的信息，请务必以开发商及政府部门的最终官方文件为准。</p>
            </div>
            
        </div>
    </div>
`
            },
            "前海东岸": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
<header>
                <h1>前海东岸</h1>
                <div class="subtitle">南头·中山公园北 · 南山稀缺小户型现房 · 双地铁口</div>
            </header>
            <section class="project-overview">
                <h2>项目概览</h2>
                <p>前海东岸位于南山区南头片区，地处中山公园北侧、北环大道以北。项目是深圳南山区目前**唯一在售的小户型现房住宅小区**，主打建面约36-76㎡的1-2房，以低总价门槛、即买即住的优势和成熟配套，吸引在科技园、前海等地工作的刚需客群。</p>
                <div class="highlight">
                    <h3>核心亮点</h3>
                    <ul class="feature-list">
                        <li><strong>稀缺现房小户型：</strong>南山在售新盘中罕有的小户型现房，即买即住，规避期房等待风险。</li>
                        <li><strong>优质学区资源：</strong>所属学区为**南山实验教育集团园丁学校**（九年一贯制），属南山区第一梯队教育资源。</li>
                        <li><strong>双地铁交通预期：</strong>距离已开通的**地铁12号线同乐南站约700米**；在建的**15号线同乐关站**未来将形成双地铁格局。</li>
                        <li><strong>生态景观优越：</strong>南侧紧邻占地约49万平方米的**中山公园**，享有一线公园景观。</li>
                        <li><strong>低门槛入住南山：</strong>为预算有限的购房者提供了入驻南山核心区的机会。</li>
                    </ul>
                </div>
            </section>
            <section class="project-details">
                <h2>项目基本信息</h2>
                <table>
                    <tr><th>项目信息</th><th>详细内容</th></tr>
                    <tr><td><strong>开发商</strong></td><td>深圳市新润园房地产开发有限公司等</td></tr>
                    <tr><td><strong>具体位置</strong></td><td>南山区南头片区，北环大道以北，南海大道以西，中山公园北侧</td></tr>
                    <tr><td><strong>项目性质</strong></td><td>住宅现房</td></tr>
                    <tr><td><strong>占地面积</strong></td><td>约1.9万㎡</td></tr>
                    <tr><td><strong>建筑面积</strong></td><td>约13.7万㎡</td></tr>
                    <tr><td><strong>容积率</strong></td><td>4.5</td></tr>
                    <tr><td><strong>绿化率</strong></td><td>40%</td></tr>
                    <tr><td><strong>楼栋构成</strong></td><td>4栋高层住宅</td></tr>
                    <tr><td><strong>总规划户数</strong></td><td>约1100户</td></tr>
                    <tr><td><strong>车位配置</strong></td><td>约1100个（车位比约1:1）</td></tr>
                    <tr><td><strong>交付标准</strong></td><td>精装现房，即买即住</td></tr>
                    <tr><td><strong>产权年限</strong></td><td>70年</td></tr>
                    <tr><td><strong>物业费</strong></td><td>约3.9-5.15元/㎡/月</td></tr>
                </table>
            </section>
            <section class="smart-features">
                <h2>项目特色与交付标准</h2>
                <p>作为稀缺的现房项目，前海东岸主打所见即所得的安心与成熟社区的便利：</p>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>现房实景，零风险：</strong>小区整体已建成，园林、大堂、户型均可实地查看，完全规避期房交付风险。</li>
                        <li><strong>成熟社区氛围：</strong>项目早已交付入住，社区生活氛围成熟，邻里关系稳定。</li>
                        <li><strong>精装交付，省心省力：</strong>全屋品牌精装修交付，配备基础厨卫电器，收房后购置家具即可入住。</li>
                        <li><strong>高实用率设计：</strong>虽为早期设计，但户型方正，部分户型带入户花园或阳台赠送，实际使用率高。</li>
                        <li><strong>公园式园林：</strong>社区内部打造了中心园林景观，搭配儿童游乐区、健身设施等。</li>
                    </ul>
                </div>
            </section>
            <section class="facilities">
                <h2>项目配套详情</h2>
                <h3>📍 地理位置</h3>
                <p>位于南山区南头片区，北环大道与南海大道两大主干道交汇处，北侧为北环大道，南侧紧邻中山公园。项目地处南山与宝安交界处，可同时享受两区资源，且位于科技园与前海的双辐射范围内。</p>
                <h3>🚇 交通配套</h3>
                <ul class="feature-list">
                    <li><strong>地铁：</strong>距离已运营的**地铁12号线同乐南站约700米**（步行约10分钟）。在建的**地铁15号线**（预计2028年通车）设有同乐关站，未来将形成双地铁口格局。</li>
                    <li><strong>主干道：</strong>紧邻北环大道、南海大道、南坪快速等多条城市主干道与快速路，自驾出行极为便捷。</li>
                    <li><strong>公交：</strong>周边设有“中山公园东门”、“北环中山立交”等多个公交站点，线路覆盖广泛。</li>
                </ul>
                <h3>🏫 教育资源</h3>
                <p><strong>南山实验教育集团园丁学校</strong> - 项目所属学区为这所九年一贯制公办学校。学校2017年9月开办，隶属于南山实验教育集团，小学初中成绩在南山区属中上水平。</p>
                <h3>🛍️ 商业配套</h3>
                <ul class="feature-list">
                    <li><strong>社区商业：</strong>项目自身及相邻的豪方天际项目配有底商，形成约8.14万㎡的基础生活商业配套。</li>
                    <li><strong>大型商场：</strong>周边2-3公里范围内有约1万㎡隆尚Minitown、海雅缤纷城、沃尔玛、云城万科里等大型商业体。</li>
                </ul>
                <h3>🌳 生态休闲</h3>
                <p>项目南侧通过人行天桥连接**中山公园**（占地49万平方米），是深圳最大、历史最悠久的城市公园。周边还有荔香公园、南山文体中心等休闲文化设施。</p>
            </section>
            <section class="analysis">
                <h2>优劣分析</h2>
                <div class="advantages">
                    <h3>✅ 项目优势</h3>
                    <ul class="feature-list">
                        <li><strong>现房零风险：</strong>所见即所得，完全规避期房烂尾、减配、延期交付等风险。</li>
                        <li><strong>学区优质确定：</strong>所属南山实验集团园丁学校学区，教育资源是核心硬通货。</li>
                        <li><strong>上车门槛极低：</strong>总价门槛低，是目前市场上难得的低总价住宅新房。</li>
                        <li><strong>配套成熟即享：</strong>所有配套均为已建成状态，无需等待规划落地。</li>
                        <li><strong>生态景观资源佳：</strong>紧靠中山公园，开窗见绿，拥有稀缺的城市公园景观。</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h3>⚠️ 项目不足</h3>
                    <ul class="feature-list">
                        <li><strong>产品设计非最新：</strong>户型为多年前设计，部分小户型为单面采光，通透性和空间布局与当前新规产品有差距。</li>
                        <li><strong>社区密度较高：</strong>容积率4.5，部分楼栋为公寓式内走廊设计，居住密度和私密性一般。</li>
                        <li><strong>当前地铁非零距离：</strong>距离最近的地铁站约700米，步行有一定距离。</li>
                        <li><strong>周边界面新旧混杂：</strong>地处南山与宝安交界处，部分区域城市界面相对老旧。</li>
                        <li><strong>噪音影响：</strong>临近北环大道，部分户型会受到道路交通噪音的影响。</li>
                    </ul>
                </div>
            </section>
            <section class="target-audience">
                <h2>适合人群</h2>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>南山刚需上车客：</strong>预算有限，但渴望在南山定居安家，将安全性（现房）和学区置于首位的年轻人或小家庭。</li>
                        <li><strong>教育优先的务实家庭：</strong>将子女教育作为购房第一要务，认可南山实验学校价值，且不希望承担期房学区不确定风险的家长。</li>
                        <li><strong>厌恶风险的保守型买家：</strong>对期房市场信心不足，追求绝对确定性，希望即买即住的购房者。</li>
                        <li><strong>在科技园/前海工作的首置青年：</strong>通勤距离适中，依赖自驾或可接受当前地铁通勤距离的上班族。</li>
                    </ul>
                </div>
            </section>
            <section class="summary">
                <h2>项目总结</h2>
                <p>前海东岸的核心价值在于 **“现房”、“学区”和“低总价”三者结合形成的稀缺性与安全性**。它为目标明确的刚需客户提供了一个以低成本、零等待时间入住南山、并锁定优质学位的务实选择。</p>
                <div class="warning">
                    <p><strong>选择建议：</strong>购买该项目，意味着您用“牺牲部分产品新颖度和居住舒适度”来换取“绝对的安全、确定的学位”。它不适合追求产品力极致和豪宅体验的买家，但如果您首要目标是 **“安全、快速地上车南山好学区”** ，那么前海东岸是一个值得重点考虑的选项。</p>
                </div>
            </section>
</div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>前海东岸</h1>
            <div class="subtitle">深圳南山 · 南头片区 · 核心学区现房</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山区前海东岸项目的全面户型分析。项目位于南山与宝安交界的南头片区，作为目前南山核心区唯一在售的现房小户型住宅，主打36-76㎡精巧户型，并以“学区+交通+现房”的核心优势引发市场关注。本报告将深入解析其产品特性与核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>前海东岸花园是一个已成熟的综合性社区，涵盖从单间到四房复式的多种产品。当前市场焦点集中于4栋“同德阁” 在售的现房小户型，该楼栋为3梯14户的公寓式内走廊设计。项目容积率4.5，绿化率40%，车位比约1:1，物业费为5.15元/㎡/月。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型类型（当前主推）</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>灵动单间</strong></td>
                        <td>约37㎡</td>
                        <td>单房</td>
                        <td>西南/东北朝向，带阳台，低总价上车首选</td>
                    </tr>
                    <tr>
                        <td><strong>舒适一房</strong></td>
                        <td>约50㎡</td>
                        <td>一房一厅</td>
                        <td>传统一房一厅布局，带生活阳台</td>
                    </tr>
                    <tr>
                        <td><strong>全能两房</strong></td>
                        <td>约76㎡</td>
                        <td>两房一厅</td>
                        <td>端头位户型，一层三户，实用性强</td>
                    </tr>
                </tbody>
            </table>
            <p style="font-size: 0.9em; color: #666;"><em>注：社区内其他楼栋还分布有约78-89㎡三房、约126-132㎡四房及约169㎡大平层等更大户型，构成完整产品线。下表数据综合自市场信息。</em></p>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">4.5</div>
                    <div class="parameter-desc">社区共5栋8个单元，最高38层</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-graduation-cap"></i> 核心优势</div>
                    <div class="parameter-value">梯队学区</div>
                    <div class="parameter-desc">对口南山实验园丁学校（九年一贯制）</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约700米</div>
                    <div class="parameter-desc">距12号线同乐南站约700米</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 生态资源</div>
                    <div class="parameter-value">中山公园</div>
                    <div class="parameter-desc">南侧紧邻深圳最大市政公园</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            <p>以下分析聚焦于当前主推的“同德阁”小户型现房，它们是低门槛入驻南山核心学区的关键产品。</p>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约76㎡</div>
                        <div class="unit-name">全能两房</div>
                    </div>
                    <div class="unit-body">
                        <h4>功能齐全的紧凑两房 · 现房即住</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">端头位户型</span>
                            <span class="tag">明厨明卫</span>
                            <span class="tag">高性价比</span>
                            <span class="tag">现房</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-vector-square"></i>
                            <div><strong>布局解析：</strong>户型方正，为两房一厅一卫设计。客厅面宽约3.5米，连接阳台；两间卧室分布合理，主卧面积可达约13.8㎡，空间利用率高。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光通风：</strong>作为端头位户型，通常具备更好的采光面和通风条件。户型测评显示采光通风性优秀。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wallet"></i>
                            <div><strong>价格与定位：</strong>折后总价约520-550万。以两房的功能，满足小家庭或需要独立书房空间人士的基本居住需求，是总价控制下获取南山户口和学区的实用选择。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-building"></i>
                            <div><strong>产品特点：</strong>位于“同德阁”，该楼栋为3梯14户，朝东南或西北向。现房销售，即买即住，无期房等待风险。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是项目在售面积最大的小户型，在有限的面积内实现了完整的两房功能，且享有现房和核心学区的双重确定性，对于有紧迫入学或自住需求的家庭吸引力显著。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约37-50㎡</div>
                        <div class="unit-name">灵动单间/一房</div>
                    </div>
                    <div class="unit-body">
                        <h4>低总价入驻南山的钥匙</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">门槛极低</span>
                            <span class="tag">现房</span>
                            <span class="tag">租金回报</span>
                            <span class="tag">学区占位</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>极致门槛：</strong>约37㎡单房折后总价约245万起，首付仅需约40万，堪称入驻南山核心区、锁定梯队学区的“最低成本”方案。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-compass"></i>
                            <div><strong>产品细节：</strong>37㎡单房为西南或东北朝向，带阳台。50㎡一房为传统一房一厅布局，带生活阳台。二者均能满足单身贵族或投资客的基础居住或资产配置需求。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chart-line"></i>
                            <div><strong>投资视角：</strong>据市场信息，37㎡户型月租金可达约5300元，具备一定的租金回报率。其核心价值在于稀缺的“南山小户型住宅”属性及附带的学位价值。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-plus"></i>
                            <div><strong>功能定位：</strong>总价敏感型刚需客户的首选；为孩子争取优质学位的“学区占位”工具；看好南山核心区长期价值的投资者的入门级标的。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>这类超小户型是项目最具差异化的产品，它打破了南山核心区高不可攀的价格壁垒，为预算有限的购房者提供了一个实实在在的“上车”机会，兼具居住、学区和投资三重属性。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>社区其他代表户型参考</h3>
            <p>为完整呈现社区全貌，以下提供非当前主推、但能体现项目品质的户型信息作为参考。请注意，这些户型的可售情况需以开发商实时信息为准。</p>
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约127㎡ | 约169㎡</div>
                    <div class="unit-name">舒适四房 / 阔景大平层</div>
                </div>
                <div class="unit-body">
                    <h4>社区内的高端改善型产品</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">大面宽阳台</span>
                        <span class="tag">低梯户比</span>
                        <span class="tag">主卧套房</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度（以127㎡四房为例）：</strong>户型方正，南北通透。客厅面宽约3.9米，连接大面宽阳台；主卧套房设计，次卧亦带卫生间，功能完善。得房率约77.5%。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>高端产品（以169㎡为例）：</strong>位于3栋“同泰阁”，为2梯2户的纯板楼设计，私密性极佳。更有稀缺的306㎡顶楼复式，代表社区最高产品规格。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>面向追求宽敞空间、优质社区环境和稀缺改善产品的高端家庭。体现了前海东岸项目除小户型外，同样具备打造高品质居所的能力。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>参考价值：</strong>这些大户型展示了项目的另一面，即在一个综合性社区内，提供了从极致紧凑到极度舒适的全产品线选择，满足不同阶段、不同预算家庭的多样化需求。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目现状与设计亮点</h4>
                <p>1. <strong>现房实景</strong>：项目为现房销售，社区园林、建筑立面、公共空间等均已实景呈现，即买即住，品质所见即所得。园林采用仿唐式古典设计，配备游泳池、健身房等设施。<br>
                2. <strong>建筑品质</strong>：据资料显示，项目采用干挂石材与铝板结合的外立面，部分楼栋大堂为挑高设计，硬件标准对标中高端楼盘。<br>
                3. <strong>当前销售动态</strong>：近期推出“同德阁”小户型清盘优惠，价格较前期有较大力度调整。看房需提前预约。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>第一梯队学区资源</h4>
                        <p>对口南山实验教育集团园丁学校（九年一贯制），属南山公办学校第一梯队，是项目最核心的价值点之一，解决了优质教育需求。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>稀缺现房小户型</h4>
                        <p>作为“南山唯一可售现楼小户型住宅”，产品形态稀缺。现房属性避免了期房等待和交付不确定性，降低了购房风险。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <div>
                        <h4>高效通勤与产业辐射</h4>
                        <p>10分钟车程可达科技园、前海、留仙洞总部基地。近地铁12号线同乐南站，未来还有规划中的15号线，通勤便利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-park"></i>
                    </div>
                    <div>
                        <h4>优渥生态与成熟配套</h4>
                        <p>南侧紧邻49万㎡的中山公园，生态资源得天独厚。周边2-3公里内覆盖海雅缤纷城、海岸城等成熟商圈，生活便利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                    <div>
                        <h4>确定性高 & 门槛清晰</h4>
                        <p>现房、学区、价格均为明确信息，决策确定性高。极低的首付门槛，让预算有限的客户拥有明确的“上车”路径和机会。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>综合性成熟社区</h4>
                        <p>非单体楼，为占地约1.2万㎡的围合式社区，内部配套完善，居住氛围成熟，提供优于单体楼或公寓的居住体验。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目当前主推的“同德阁”（4栋）具体情况进行建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约37㎡ 单房</h4>
                <p><strong>朝向特点：</strong>西南或东北朝向。西南向午后采光好，东北向则相对温和。</p>
                <p><strong>选择建议：</strong>作为总价最低的入门选项，房源本身稀缺。优先考虑房源是否存在，再权衡朝向。中高楼层可减少相邻建筑对视线的干扰。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约50㎡ 一房</h4>
                <p><strong>布局特点：</strong>传统一房一厅，功能分区明确。</p>
                <p><strong>选择建议：</strong>适合对卧室私密性有要求的单身或情侣。同样需关注具体房源的可选楼层。由于总价高于单房，可更从容地挑选中意楼层。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约76㎡ 两房</h4>
                <p><strong>房源特点：</strong>位于端头位，一层三户。通常采光和通风条件优于中间户型。</p>
                <p><strong>建议楼层：</strong>这是自住功能最强的在售户型，建议优先选择中高楼层（建议15层以上）。高楼层能最大化端头位的视野和采光优势，提升居住舒适度，更好地体现该户型的价值。</p>
                <p><strong>梯户比提示：</strong>“同德阁”为3梯14户，公寓式内走廊设计。在上下班高峰时段，电梯等待时间可能较长，选房时需将此纳入考量。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于当前主推楼栋的公开资料分析。前海东岸作为一个成熟社区，不同楼栋、户型的朝向、景观、梯户比差异很大。最终选择务必<strong>结合实地看房感受</strong>，考察目标房源的具体视野、噪声影响、楼道环境等因素。同时，项目周边存在部分老旧城市界面，也建议实地感受。社区规模中等，缺乏大型泳池、会所等设施，对此有要求的客户需注意。学区划分请以教育部门当年官方文件为准。</p>
            </div>
            
        </div>
    </div>
`
            },
            "卓越珑秀公馆": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
<header>
                <h1>卓越珑秀公馆</h1>
                <div class="subtitle">南头·同乐片区 · 新规高拓小户型 · 近科技园地铁口</div>
            </header>
            <section class="project-overview">
                <h2>项目概览</h2>
                <p>卓越珑秀公馆位于南山区南头街道同乐片区，是卓越集团在南山科技园辐射范围内打造的一个精品住宅项目。项目主打**新规下的高使用率小户型**，建面约65-81㎡即可做到2-3房，以“低总价、高实用、近地铁”为核心卖点，主要承接科技园、前海等地的年轻购房需求。</p>
                <div class="highlight">
                    <h3>核心亮点</h3>
                    <ul class="feature-list">
                        <li><strong>新规高实用率：</strong>采用新规设计，户型实用率高达88%-91%，约81㎡可做三房两卫，空间利用率极致。</li>
                        <li><strong>近地铁，通勤便捷：</strong>距离在建的**地铁12号线同乐南站约500米**（步行距离），未来1站达中山公园，4站到科技园。</li>
                        <li><strong>产业区位优越：</strong>地处南山科技园、前海自贸区、留仙洞总部基地三大产业带交汇处，潜在客群基础庞大。</li>
                        <li><strong>片区发展可期：</strong>所属同乐北区已纳入“西丽湖国际科教城”规划，未来城市界面和配套将逐步升级。</li>
                    </ul>
                </div>
            </section>
            <section class="project-details">
                <h2>项目基本信息</h2>
                <table>
                    <tr><th>项目信息</th><th>详细内容</th></tr>
                    <tr><td><strong>开发商</strong></td><td>卓越集团</td></tr>
                    <tr><td><strong>具体位置</strong></td><td>南山区南头街道同乐片区，中山园路与南坪快速交汇处北侧约150米</td></tr>
                    <tr><td><strong>项目性质</strong></td><td>商品住宅（含回迁）</td></tr>
                    <tr><td><strong>占地面积</strong></td><td>约3575.43㎡</td></tr>
                    <tr><td><strong>总建筑面积</strong></td><td>约2.6万㎡</td></tr>
                    <tr><td><strong>容积率</strong></td><td>4.97</td></tr>
                    <tr><td><strong>绿化率</strong></td><td>30%</td></tr>
                    <tr><td><strong>楼栋构成</strong></td><td>1栋32层住宅</td></tr>
                    <tr><td><strong>总规划户数</strong></td><td>248户（其中可售商品房161套，回迁87户）</td></tr>
                    <tr><td><strong>主力户型</strong></td><td>建面约65㎡两房、81㎡三房</td></tr>
                    <tr><td><strong>车位配置</strong></td><td>202个（含10个微型车位）</td></tr>
                    <tr><td><strong>交付标准/时间</strong></td><td>精装交付，预计2027年6月</td></tr>
                    <tr><td><strong>产权年限</strong></td><td>70年（2023.12-2093.12）</td></tr>
                </table>
            </section>
            <section class="smart-features">
                <h2>产品特色与精装标准</h2>
                <p>项目专注于为新青年打造高性价比的功能性居住空间：</p>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>极致空间魔法：</strong>巧妙利用新规，实现高拓展面积，将小面积的功能性做到最大化。</li>
                        <li><strong>实用型精装：</strong>精装交付标准注重实用性，配备品牌厨卫、玄关柜等，满足基本入住需求。</li>
                        <li><strong>收纳系统完善：</strong>户型设计强调收纳空间，提升小户型的实际居住体验。</li>
                    </ul>
                </div>
            </section>
            <section class="facilities">
                <h2>项目配套详情</h2>
                <h3>🚇 交通配套</h3>
                <ul class="feature-list">
                    <li><strong>地铁：</strong>距离在建的**地铁12号线同乐南站约500米**。在建的**15号线同乐关站**（预计2028年通车）将串联前海、深圳湾等核心区。</li>
                    <li><strong>道路交通：</strong>紧邻南坪快速、北环大道，可快速通达福田、宝安。</li>
                    <li><strong>高铁枢纽：</strong>距离在建的**西丽高铁站约2.3公里**（预计2028年通车），未来是大湾区重要交通节点。</li>
                </ul>
                <h3>🏫 教育资源</h3>
                <ul class="feature-list">
                    <li><strong>现有学校：</strong>距离项目约**100米**即为**南山区教科院同乐实验学校**（九年一贯制公办）。</li>
                    <li><strong>规划学校：</strong>周边规划有同安学校（54班九年制，在建）等多所学校，未来教育资源将增加。</li>
                </ul>
                <h3>🛍️ 商业配套</h3>
                <ul class="feature-list">
                    <li><strong>在建商业：</strong>项目附近规划有**约1万㎡的“隆尚 minitown”商业体**以及吉创中心商业（预计2026年建成），将弥补当前区域商业短板。</li>
                    <li><strong>周边商圈：</strong>依赖3-5公里范围内的万象天地、海岸城、海雅缤纷城等成熟商圈。</li>
                </ul>
            </section>
            <section class="analysis">
                <h2>优劣分析</h2>
                <div class="advantages">
                    <h3>✅ 项目优势</h3>
                    <ul class="feature-list">
                        <li><strong>产品力突出：</strong>新规下极高的得房率，以小面积实现多功能房间，精准击中刚需痛点。</li>
                        <li><strong>通勤区位优越：</strong>紧邻三大就业中心，且靠近地铁口，对上班族通勤友好。</li>
                        <li><strong>总价控制得当：</strong>通过小面积户型设计，将总价控制在南山入门级别，吸引力强。</li>
                        <li><strong>片区有成长预期：</strong>所在片区有明确的规划利好，具备一定的长期价值提升潜力。</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h3>⚠️ 项目不足</h3>
                    <ul class="feature-list">
                        <li><strong>社区品质一般：</strong>独栋楼设计，无大型花园社区，绿化休闲空间严重不足。</li>
                        <li><strong>周边环境与噪音：</strong>项目紧贴南坪快速路，存在明显的交通噪音和粉尘影响。</li>
                        <li><strong>配套兑现需等待：</strong>近期依赖的地铁、大型商业都处于在建状态，完全成熟需要时间。</li>
                        <li><strong>居住密度较高：</strong>单体楼、高容积率，居住的纯粹性和舒适度受限。</li>
                    </ul>
                </div>
            </section>
            <section class="target-audience">
                <h2>适合人群</h2>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>南山首置刚需青年：</strong>在科技园等地上班，预算严格受限，但对房间数有要求，追求极高实用率的购房者。</li>
                        <li><strong>对社区环境要求不高的实用主义者：</strong>更看重户型、价格和通勤，可以接受单体楼和噪音问题的买家。</li>
                    </ul>
                </div>
            </section>
            <section class="summary">
                <h2>项目总结</h2>
                <p><strong>卓越珑秀公馆是一个典型的“功能性”至上产品。</strong>它用极致的产品设计（高拓小户）和精准的区位（近产业、近地铁）来弥补其在社区环境、居住舒适度上的短板。</p>
                <div class="warning">
                    <p><strong>选择建议：</strong>购买该项目，意味着您用“牺牲部分居住品质”来换取“南山身份和通勤便利”。它非常适合预算卡得非常紧，但对房间数有硬性要求，且对噪音、小区花园不敏感的年轻刚需客。</p>
                </div>
            </section>
</div>
`,
                huxing: ``
            },
            "同乐公馆": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
<header>
            <h1>同乐公馆</h1>
            <div class="subtitle">南头·同乐片区 · 高使用率品质单体楼 · 双地铁+高铁辐射</div>
        </header>
            <section class="project-overview">
                <h2>项目概览</h2>
                <p>同乐公馆位于南山区南头街道同乐片区的核心位置，中山园路东侧。项目为1栋39层的超高层住宅，主打建面约91-123㎡的**高使用率三至四房**，凭借新规下最高约94%的得房率、较高的品质配置（如3.1米层高、铝板玻璃幕墙）以及“双地铁+高铁”的交通预期，成为南山总价500万级改善户型中的一个高性价比选择。</p>
                <div class="highlight">
                    <h3>核心亮点</h3>
                    <ul class="feature-list">
                        <li><strong>超高实用率与品质：</strong>新规设计，得房率（含赠送）达89%-94%，层高3.1米，采用铝板+LOW-E玻璃幕墙，品质感优于同价位楼盘。</li>
                        <li><strong>立体交通网络：</strong>步行约**500米**至**地铁12号线同乐南站**；在建**15号线同乐关站**（预计2028年通车）形成双地铁；距离**西丽高铁枢纽（在建）约2.3公里**。</li>
                        <li><strong>产业区位核心：</strong>直线3公里内覆盖科技园、前海、留仙洞总部基地，占位南山科创中轴。</li>
                        <li><strong>配套呈现“兑现进行时”：</strong>学校、商业等配套均在建设或升级中，未来几年可见证区域面貌提升。</li>
                    </ul>
                </div>
            </section>
            <section class="project-details">
                <h2>项目基本信息</h2>
                <table>
                    <tr><th>项目信息</th><th>详细内容</th></tr>
                    <tr><td><strong>开发商</strong></td><td>深圳市龙井实业股份有限公司、深圳市龙锦源投资有限公司</td></tr>
                    <tr><td><strong>具体位置</strong></td><td>南山区南头街道同乐片区中山园路东侧（中山园路229号）</td></tr>
                    <tr><td><strong>占地面积</strong></td><td>约2901㎡</td></tr>
                    <tr><td><strong>总建筑面积</strong></td><td>约2.48万㎡</td></tr>
                    <tr><td><strong>容积率</strong></td><td>4.97</td></tr>
                    <tr><td><strong>绿化率</strong></td><td>30%</td></tr>
                    <tr><td><strong>楼栋构成</strong></td><td>1栋39层超高层住宅</td></tr>
                    <tr><td><strong>总规划户数</strong></td><td>131户</td></tr>
                    <tr><td><strong>主力户型</strong></td><td>建面约91㎡三房、113㎡四房、123㎡四房</td></tr>
                    <tr><td><strong>梯户比</strong></td><td>3梯4户</td></tr>
                    <tr><td><strong>车位配置</strong></td><td>132个（车位比1:1）</td></tr>
                    <tr><td><strong>交付标准/时间</strong></td><td>简装交付，预计2026年12月前</td></tr>
                    <tr><td><strong>物业公司</strong></td><td>深业置地物业</td></tr>
                </table>
            </section>
            <section class="smart-features">
                <h2>产品特色与交付标准</h2>
                <p>项目在有限的条件下，力争在硬件上做到越级配置：</p>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>越级建材配置：</strong>外立面采用铝板与LOW-E玻璃幕墙，层高达到3.1米，远超普通住宅标准，提升了立面质感和室内空间感。</li>
                        <li><strong>高拓展实用户型：</strong>充分利用新规，户型方正，拓展面积多，实际得房率高，空间利用率佳。</li>
                        <li><strong>简装交付，改造灵活：</strong>项目为简装交付，为业主预留了更大的个性化装修空间，同时降低了首置装修成本。</li>
                    </ul>
                </div>
            </section>
            <section class="facilities">
                <h2>项目配套详情</h2>
                <h3>🚇 交通配套</h3>
                <ul class="feature-list">
                    <li><strong>地铁：</strong>步行约**500米**可达已开通的**地铁12号线同乐南站**。在建的**地铁15号线同乐关站**将与其形成双地铁口，极大提升通往南山、前海、宝安核心区的便利性。</li>
                    <li><strong>高铁枢纽：</strong>距离规划中的**西丽高铁枢纽约2.3公里**（预计2028年建成），该枢纽规模将超深圳北站，实现大湾区快速互联。</li>
                    <li><strong>道路交通：</strong>紧邻南坪快速、沙河西路，自驾出行便捷。</li>
                </ul>
                <h3>🏫 教育资源</h3>
                <ul class="feature-list">
                    <li><strong>现有学校：</strong>项目直线距离约**100米**即为**南山区教科院同乐实验学校**（九年一贯制公办）。周边300米内有华泰幼儿园、博纳国际学校等。</li>
                    <li><strong>规划学校：</strong>区域规划有**五十四班制九年一贯制学校（教科院同安学校）**及幼儿园，教育资源将持续增量。</li>
                </ul>
                <h3>🛍️ 商业配套</h3>
                <ul class="feature-list">
                    <li><strong>在建商业：</strong>项目自带约**1万㎡隆尚Minitown商业**（招商中），步行约200米可达建设中的吉创中心商业（2026年建成），将填补区域商业空白。</li>
                    <li><strong>成熟商圈：</strong>3公里范围内覆盖海雅缤纷城、万象天地、云城万科里等大型成熟商圈。</li>
                </ul>
            </section>
            <section class="analysis">
                <h2>优劣分析</h2>
                <div class="advantages">
                    <h3>✅ 项目优势</h3>
                    <ul class="feature-list">
                        <li><strong>产品性价比极高：</strong>在南山核心区，以相对较低的单价获得高得房率、高品质建材的改善户型，稀缺性强。</li>
                        <li><strong>交通规划能级高：</strong>双地铁+超级高铁枢纽的配置，远期交通优势非常明显，属于“潜力股”。</li>
                        <li><strong>配套兑现路径清晰：</strong>无论是地铁、商业还是学校，都有明确的建成时间表，未来生活便利度可预见性提升。</li>
                        <li><strong>户型设计实用：</strong>户型方正，利用新规拓展面积，空间舒适度优于传统同面积段产品。</li>
                    </ul>
                </div>
                <div class="disadvantages">
                    <h3>⚠️ 项目不足</h3>
                    <ul class="feature-list">
                        <li><strong>单体楼社区：</strong>无小区花园，社区公共活动空间匮乏，绿化率仅30%。</li>
                        <li><strong>周边现状待提升：</strong>当前城市界面一般，部分配套仍处于建设期，完全成熟需要等待。</li>
                        <li><strong>学区非顶尖：</strong>所属教科院同乐实验学校虽便捷，但教育口碑与南山实验、南外等顶级学区尚有差距。</li>
                        <li><strong>临近快速路：</strong>靠近南坪快速，部分户型可能受噪音影响。</li>
                    </ul>
                </div>
            </section>
            <section class="target-audience">
                <h2>适合人群</h2>
                <div class="highlight">
                    <ul class="feature-list">
                        <li><strong>南山性价比改善家庭：</strong>追求更大居住空间和更高产品品质，但总价预算控制在600-800万左右的家庭。</li>
                        <li><strong>看重远期价值的购房者：</strong>认可西丽高铁新城、双地铁规划的长远价值，愿意为未来潜力买单。</li>
                        <li><strong>在科技园等地上班的务实派：</strong>注重通勤效率和户型实用性，对小区花园要求不高的购房者。</li>
                    </ul>
                </div>
            </section>
            <section class="summary">
                <h2>项目总结</h2>
                <p><strong>同乐公馆的核心竞争力在于，在有限的总价内，提供了“越级”的产品硬件和充满想象的交通规划。</strong>它用更高的得房率、更好的建材和更顶级的远期交通规划，来对冲其在社区环境和当下界面上的不足。</p>
                <div class="warning">
                    <p><strong>选择建议：</strong>这是一个适合“用时间换空间和价值”的选择。如果您能接受当前它作为单体楼的现状，并愿意等待2-3年周边配套的逐步落地，那么它将是南山楼市中一个极具性价比的“潜力股”。</p>
                </div>
            </section>
</div>
`,
                huxing: ``
            },
        },
        "赤湾": {
            "天健湾时代府": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>天健湾时代府 (天健·湾TIME)</h1>
            <div class="subtitle">赤湾 · 2.8低密海景 · 新规超100%得房率 · 国企开发纯改善盘</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>天健湾时代府位于南山区招商街道赤湾片区，是深圳国企天健集团于2024年11月竞得的纯商品住宅地块。项目定位为赤湾板块首个新规后建设的低密度海景改善社区，以罕见的2.8容积率、一线永久海景、超100%得房率以及纯粹的圈层，在南山西部海岸线打造了一个高品质居住选择。项目已于2025年11月1日开盘。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>稀缺低密海景：</strong>容积率仅2.8，总高30层，是赤湾片区容积率最低的新盘之一。主力户型为朝南或西南向，高层可享一线永久无遮挡海景。</li>
                    <li><strong>新规超高得房率：</strong>采用新规设计，通过设备平台、飘窗等赠送，主力户型实际得房率（含赠送）达102%-105%，空间利用率极高。</li>
                    <li><strong>纯粹改善圈层：</strong>社区无配建人才房或保障房，规划约290户纯商品房，主力户型为113-139㎡的四至五房，圈层纯粹。</li>
                    <li><strong>国企品质与交标：</strong>由天健集团开发，精装交付标准高，配置LG中央空调、华为智能家居、汉斯格雅卫浴等一线品牌。</li>
                    <li><strong>双地铁交通便利：</strong>步行约400米可达地铁2号线与5号线交汇的赤湾站，通勤便捷。</li>
                </ul>
            </div>
        </section>
        
        <!-- 已按您要求，删除“在售房源价格信息（已开盘）”整个板块 -->
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市天璟置地有限公司（天健集团）</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区招商街道赤湾片区，赤湾六路与天后宫路交汇处以东</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约13,657.28㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约38,155㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>2.8</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>2栋30-31层高层住宅</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>约290户</td>
                </tr>
                <tr>
                    <td><strong>梯户比</strong></td>
                    <td>2梯4户或2梯5户（资料存在差异）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约380-388个（车位比约1:1.31-1.33）</td>
                </tr>
                <tr>
                    <td><strong>交付标准/时间</strong></td>
                    <td>精装交付，合同约定<strong>2028年6月30日</strong>交房</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>天健物业</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>7.6元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2024年12月-2094年12月）</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品特色与精装标准</h2>
            <p>项目主打新规下的高实用性与高品质装修，致力于打造赤湾片区的标杆改善产品：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>极致空间利用率：</strong>新规户型，通过设备平台、全屋飘窗（进深0.6-0.8米）、大阳台（进深1.8米）等实现高赠送，含赠送后得房率普遍超过100%，例如113㎡户型实得面积约115㎡。</li>
                    <li><strong>高规格精装体系：</strong>配备LG全屋中央空调及新风系统、华为全屋智能家居；厨房采用老板牌烟灶蒸烤一体机及洗碗机；卫浴为汉斯格雅品牌；客厅地面铺贴罗曼缔克瓷砖。</li>
                    <li><strong>优渥层高与景观面：</strong>标准层层高达到3.15米，空间感更开阔。主力户型设计有约6.4-6.8米宽的观景阳台，高层视野无遮挡。</li>
                    <li><strong>社区内部配套：</strong>规划有约25米标准泳池、健身房、瑜伽室、全龄书吧、儿童活动区及会客厅等，满足全年龄段休闲需求。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>步行约400米（直线距离）可达地铁2号线与5号线交汇的赤湾站。5号线4站可达前海湾，2号线6站直达科技园，通勤效率高。</li>
                <li><strong>道路交通：</strong>临近兴海大道、南海大道等城市主干道，自驾出行便利。在建的妈湾跨海通道和新小南山隧道（预计2027年竣工）将进一步提升片区交通能力。</li>
                <li><strong>公交：</strong>距离“天后宫”公交站约156米。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>学区学校：</strong>项目对口南二外（集团）赤湾学校（九年一贯制公办），直线距离约400米。该校创办于1964年，是区域内主要的公立教育资源。</li>
                <li><strong>其他教育：</strong>周边有南山中英文学校、深圳贝赛思国际学校、深美国际学校等多元教育选择。此外，片区还规划有新的九年一贯制学校及北师大南山附属高中新校区。</li>
            </ul>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>在建商业：</strong>紧邻项目旁的开云府，规划有约4.2万㎡的“赤湾汇”购物中心，预计2026年开业。</li>
                <li><strong>成熟商圈：</strong>地铁2站或短驱车可达蛇口海上世界大型商圈。距离已开业的亚洲最大太子湾K11购物艺术中心也仅约10分钟车程。</li>
            </ul>
            
            <h3>🌳 生态与休闲</h3>
            <p>项目坐拥山、海、港独特景观，周边三山（大小南山、赤湾山）环绕。休闲去处包括天后博物馆、赤湾公园、以及不远处的海上世界、渔人码头等。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>产品力突出：</strong>“2.8低容积率+新规超高得房率+一线海景”的组合，在南山新房市场中稀缺性极强，居住舒适度和空间实用性兼备。</li>
                    <li><strong>圈层纯粹，国企开发：</strong>纯商品住房社区，无保障房混杂，邻里圈层一致。天健集团作为深圳国企，资金和交付相对更有保障。</li>
                    <li><strong>区域发展有潜力：</strong>地处前海与蛇口交界，属于赤湾海洋科技城规划范围，未来有望承接产业和人才红利。</li>
                    <li><strong>交通便利性高：</strong>双地铁上盖，通勤便捷；未来隧道通车将进一步改善自驾条件。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>周边配套成熟度待提升：</strong>赤湾片区目前城市界面仍以港口、产业为主，大型商业、高端医疗等核心生活配套仍需依赖蛇口或前海，完全成熟尚需时间。</li>
                    <li><strong>教育资源非顶尖：</strong>所属的南二外赤湾学校虽为公办，但其教学质量和口碑与南山第一梯队的名校相比仍有差距。</li>
                    <li><strong>交付等待期较长：</strong>合同约定2028年6月底交付，从购买到入住有约2年半的等待期。</li>
                    <li><strong>部分视野与朝向：</strong>港口海景视野独特，但景观价值因人而异。且存在少量东北朝向户型，景观和采光相对较弱。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>南山品质改善家庭：</strong>注重居住空间感、舒适度和社区纯粹性，追求高性价比的改善型买家。</li>
                    <li><strong>前海/蛇口/科技园通勤族：</strong>工作地点在前海、蛇口或科技园，依赖地铁2号线、5号线通勤，能接受一定通勤时间的上班族。</li>
                    <li><strong>看好西海岸线发展的价值投资者：</strong>认可赤湾片区作为前海-蛇口连接点的区位价值和发展潜力，进行中长期资产配置的购房者。</li>
                    <li><strong>钟爱海景资源的置业者：</strong>对海景居住环境有明确偏好，且能接受港口海景特性的购房者。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>天健湾时代府是一个特点鲜明、优劣势都颇为突出的“产品力导向型”楼盘。</strong>它凭借新规下极高的得房率、低密度规划和一线海景资源，精准切中了重视室内空间和居住品质的改善型客户需求。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>购买该项目，意味着您高度认同其产品力（得房率、海景）和当前价格带来的性价比，同时需要接受其所在片区配套仍需时间成长、教育资源非顶级的现状。它非常适合将“房屋本身的空间价值”置于首位，且对片区发展有耐心、对通勤便利性有要求的改善家庭。如果您对当下即享有的顶级商圈、顶尖学区有硬性要求，则需要慎重考虑。</p>
            </div>
            
            <p>项目开盘即给出较大折扣，反映了开发商快速去化的策略，也为购房者创造了窗口机会。对于目标客群而言，这是一个用“眼前确定的产品优势”和“价格优势”来兑换“未来区域成长”的值得深入研究的选项。</p>
        </section>
        
        <!-- 根据您之前的要求，已删除“咨询看房”板块 -->
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>天健湾时代府</h1>
            <div class="subtitle">深圳南山 · 赤湾芯 · 一线海景低密住区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山区天健湾时代府项目的全面户型分析。项目位于前海蛇口自贸区中轴线，是赤湾片区首个严格遵循新版《住宅项目规范》（新国标）打造的住宅楼盘。作为片区“容积率最低”（约2.8）的新盘，项目以纯粹的商品房社区、超高得房率及头排一线海景资源为核心价值，重新定义了赤湾片区的居住标准。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>天健湾时代府是天健集团于2024年11月竞得的前海合作区纯商品住宅用地，无配建、不限售价，定位为片区品质标杆。项目规划2栋31层塔楼，总户数约290套，车位比约1:1.31，交付时间预计为2027年3月31日或2028年6月30日，并承诺“交房即发证”。首推房源为113-114㎡四房及139㎡五房。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型类型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>悦享四房</strong></td>
                        <td>约113-115㎡</td>
                        <td>四房两厅两卫</td>
                        <td>竖厅/横厅可选，四开间朝南，约6.4米景观阳台，得房率超100%</td>
                    </tr>
                    <tr>
                        <td><strong>尊邸五房</strong></td>
                        <td>约139㎡</td>
                        <td>五房两厅两卫</td>
                        <td>横厅设计，约6.8米阔景阳台，主卧套房，南北通透</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约2.8</div>
                    <div class="parameter-desc">赤湾片区最低密度新盘，仅2栋31层</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 核心亮点</div>
                    <div class="parameter-value">超高得房率</div>
                    <div class="parameter-desc">新规设计，得房率（含赠送）超100%</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约300-500米</div>
                    <div class="parameter-desc">双地铁（2号线/5号线赤湾站）覆盖</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑层高</div>
                    <div class="parameter-value">3.15米</div>
                    <div class="parameter-desc">单层层高，空间感更开阔</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约113-115㎡</div>
                        <div class="unit-name">悦享四房</div>
                    </div>
                    <div class="unit-body">
                        <h4>功能与尺度兼备的改善四房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高得房率</span>
                            <span class="tag">南向海景</span>
                            <span class="tag">可变空间</span>
                            <span class="tag">竖厅/横厅</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间魔法：</strong>得益于新规，通过设备平台、飘窗等赠送面积，得房率（含赠送）可超100%，实际使用面积接近甚至超过120㎡，实现了小面积做舒适四房的突破。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-vector-square"></i>
                            <div><strong>格局与灵活性：</strong>主力为竖厅设计，南北通透。约6.4米景观阳台连通次卧，可根据需求改造为开放式书房或儿童活动区；若仅需三房，可拆除隔断扩大客厅至约30㎡，实现“可变空间”。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>景观与朝向：</strong>户型以朝南、西南为主（仅少量东北向），4层以上即可越过前方建筑无遮挡看海，部分高层房源可同时俯瞰小南山公园，享受永久性头排海景。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>完美契合追求高实用率、优质景观和多功能房间的改善型家庭，在有限面积内实现了功能、舒适度与景观价值的三重平衡。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是项目的主力产品，占比约80%。它不仅是新规优势的集中体现，更以极具竞争力的总价门槛（折后总价约701万起），提供了媲美传统更大面积户型的空间体验和一线海景资源，是入驻前海-蛇口核心板块的高性价比选择。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约139㎡</div>
                        <div class="unit-name">尊邸五房</div>
                    </div>
                    <div class="unit-body">
                        <h4>阔绰横厅五房 · 终极改善之选</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">横厅巨幕</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">南北通透</span>
                            <span class="tag">山海双景</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>奢阔尺度：</strong>采用横厅设计，客厅开间达约6.8米，连接超大景观阳台，视觉通透开阔。全明户型，所有房间均带采光。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>尊崇主卧：</strong>主卧套房面积约22㎡，部分户型带双面飘窗实现270°采光，配备独立卫浴（部分含双台盆及浴缸）及步入式衣帽间，提供酒店式奢华体验。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chart-line"></i>
                            <div><strong>高拓展性：</strong>通过改造多功能房，可灵活满足三孩家庭、三代同堂或设立独立书房、影音室等多元需求，使用率（含赠送）同样超100%。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>面向多孩家庭、三代同堂或追求极致空间尺度、景观视野和私密性的高端改善客户，是项目内的品质标杆户型。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型代表了项目的最高产品规格，不仅以五房配置满足了大家庭的全功能需求，更通过横厅、大阳台、豪华主卧套房等设计，带来了强烈的空间感和奢阔的居住体验，占据片区改善产品的价值高地。
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】新规“好房子”设计亮点</h4>
                <p>1. <strong>低密纯粹社区</strong>：容积率仅2.8，为片区最低。规划2栋住宅，总户数仅290户，且为纯商品住房社区，无配建人才房或保障房，居住圈层纯粹。<br>
                2. <strong>高标精装交付</strong>：精装修交付，选用一线品牌厨具、卫浴（如嵌入式烤箱、智能马桶等）。社区内规划有泳池、健身房、私宴厅等高端配套。<br>
                3. <strong>优越产品指标</strong>：除超高得房率外，项目单层层高达到3.15米，远超普通住宅标准，搭配大面积玻璃窗，极大提升了室内空间感和舒适度。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div>
                        <h4>稀缺永久头排海景</h4>
                        <p>项目南向直面伶仃洋，4层以上即可享永久无遮挡的一线海景，同时坐拥三山（大小南山、赤湾山）环抱的生态资源，山海景观资源稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>超低密度品质社区</h4>
                        <p>容积率仅约2.8，是赤湾片区最低的新盘，仅规划2栋住宅，楼间距大，居住静谧性极高，在南山核心区属稀缺产品。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁立体交通</h4>
                        <p>距离地铁2号线与5号线换乘站赤湾站约300-500米，步行可达。2号线串联蛇口、深圳湾，5号线直达前海，通勤高效。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>多元教育资源覆盖</h4>
                        <p>直线距离约400米近邻南二外（集团）赤湾学校（九年一贯制公办）。周边还有南山中英文学校、深圳贝赛思国际学校等，满足多元化教育需求。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <h4>成熟高端商圈环伺</h4>
                        <p>3公里范围内有海上世界、蛇口花园城等成熟商圈；10分钟车程可达亚洲最大的K11 ECOAST艺术购物中心；一路之隔还有在建的赤湾汇购物中心。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>天健品牌与“交房即发证”</h4>
                        <p>由国企天健集团开发，品质有保障。竞地时即承诺提供“交房即发证”服务，保障购房者权益，减少不确定性。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目一线海景的核心卖点、户型朝向分布及周边环境，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约113-115㎡ 四房</h4>
                <p><strong>朝向选择：</strong>主力为<strong>南向、西南向</strong>，是享受海景和阳光的最佳选择。仅极少量东北向房源，视野可能正对相邻小区。</p>
                <p><strong>楼层建议：</strong>为实现项目最大价值——<strong>永久无遮挡海景</strong>，强烈建议选择<strong>中高楼层（建议10层及以上）</strong>。4层以上已可越过前方天后博物馆看海，楼层越高，海景视野越纯粹开阔，同时也能更好地俯瞰山景公园。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约139㎡ 五房</h4>
                <p><strong>朝向特点：</strong>同样以<strong>西南朝向</strong>为主，部分户型可实现南北通透。</p>
                <p><strong>景观优势：</strong>横厅搭配超大阳台，景观面极佳。中低楼层即可享受充足日照，高层更能坐拥山海双重景观。</p>
                <p><strong>建议楼层：</strong>作为终极改善户型，<strong>高楼层（建议15层以上）</strong>是首选。高楼层能最大化展现横厅大面宽的空间气势，并将无遮挡的巨幕海景价值发挥到极致，是资产属性与居住体验的双重保障。</p>
                <p><strong>梯户比提示：</strong>项目为2梯5户设计。对于追求更高私密性和候梯效率的139㎡户型买家，可结合房源具体位置综合考量。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于项目公开资料及周边环境分析，仅供参考。项目北面和东面部分低楼层房源视野可能受相邻楼盘遮挡。最终选择务必<strong>结合实地看房感受</strong>，亲身体验目标房源的具体视野、采光及噪声情况。同时，赤湾片区目前城市界面仍在更新中，周边存在部分在建工程和旧改区域，需实地了解。商业配套中的大型商场有待未来一至两年逐步成熟。所有学区划分、交付标准及时间请以政府及开发商最新官方文件为准。</p>
            </div>
            
        </div>
    </div>
`
            },
            "开云府": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>开云府</h1>
            <div class="subtitle">赤湾 · 双地铁上盖 · 超22万㎡大型综合体 · 自建“赤湾汇”购物中心</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>开云府位于南山区招商街道赤湾片区核心，是赤湾片区目前规模最大、配套最全的大型城市更新综合体项目之一。由招商蛇口与赤湾村股份公司合作开发，项目总建筑面积约22.9万平方米，集住宅、大型购物中心、商务公寓、幼儿园及社区配套于一体。其最大的亮点是自建约4.2万平方米的“赤湾汇”购物中心，并无缝衔接地铁2/5号线赤湾站，旨在打造赤湾片区的标杆性TOD综合生活枢纽。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>双地铁上盖交通枢纽：</strong>项目与地铁2号线、5号线赤湾站无缝接驳，真正实现“地铁到家”，通勤效率极高。</li>
                    <li><strong>自持大型商业综合体：</strong>自带约4.2万㎡“赤湾汇”购物中心（规划为区域级商业），将彻底改变赤湾缺乏大型商业的现状。</li>
                    <li><strong>片区规模标杆：</strong>作为赤湾体量最大的综合体之一，配套齐全，能形成自给自足的成熟生活圈。</li>
                    <li><strong>招商蛇口品牌开发：</strong>由央企招商蛇口主导开发，在品质、资金和后续运营（如商业、物业）上更有保障。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市赤湾房地产开发有限公司（招商蛇口 & 赤湾村股份公司）</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区招商街道赤湾片区，赤湾五路与少帝路交汇处</td>
                </tr>
                <tr>
                    <td><strong>项目性质</strong></td>
                    <td>大型城市更新综合体（住宅+商业+公寓）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约111,341.4㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约229,000㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>4.07</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>多栋高层住宅、商务公寓、集中商业及配套幼儿园</td>
                </tr>
                <tr>
                    <td><strong>住宅主力户型</strong></td>
                    <td>建面约89-136㎡的三至四房</td>
                </tr>
                <tr>
                    <td><strong>商业体量</strong></td>
                    <td>自持约4.2万㎡“赤湾汇”购物中心</td>
                </tr>
                <tr>
                    <td><strong>教育配套</strong></td>
                    <td>配建幼儿园及小学用地（具体引入学校待定）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>招商积余（招商蛇口旗下，预计）</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品特色与社区规划</h2>
            <p>作为大型TOD综合体，开云府在规划上强调生活的便利性与社区的完整性：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>TOD无缝生活圈：</strong>通过连廊、地下通道等方式，实现住宅、商业、地铁站之间的全天候无缝衔接，下雨天不打伞即可畅行。</li>
                    <li><strong>集中式商业驱动：</strong>自持运营的“赤湾汇”购物中心将引进超市、影院、零售、餐饮等多元业态，成为片区商业核心，极大提升生活便利度。</li>
                    <li><strong>全龄段社区配套：</strong>除商业外，项目还规划有幼儿园、社区文化活动室、公交首末站等丰富公共配套，满足从儿童到老人的全年龄段需求。</li>
                    <li><strong>山海景观资源：</strong>项目部分楼栋高层拥有开阔视野，可眺望小南山、赤湾港及深圳湾海景。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁（核心优势）：</strong>与地铁2号线、5号线赤湾站无缝对接，是真正的“地铁上盖”物业。2号线可快速直达蛇口、后海、福田，5号线连接前海、宝中。</li>
                <li><strong>道路交通：</strong>紧邻兴海大道、南海大道，自驾便利。在建的妈湾跨海通道及小南山隧道通车后，与前海核心区的连通将更为快捷。</li>
                <li><strong>公交与慢行：</strong>项目配建公交首末站，并规划完善的慢行系统。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>项目自带：</strong>配建幼儿园，并规划有小学用地，具体引入的教育品牌有待官方公布。</li>
                <li><strong>片区学校：</strong>周边有南山第二外国语学校（集团）赤湾学校（九年一贯制），是当前片区主要的公立教育资源。</li>
            </ul>
            
            <h3>🛍️ 商业配套（核心优势）</h3>
            <ul class="feature-list">
                <li><strong>自持大型商业：</strong>项目自带约4.2万㎡“赤湾汇”购物中心，预计将引进主力店、品牌商户，形成区域商业中心。</li>
                <li><strong>周边高端商业：</strong>地铁2站或短驱车可达蛇口海上世界商圈；距离在建的太子湾K11 ECOAST大型商业综合体也仅约10分钟车程。</li>
            </ul>
            
            <h3>🌳 生态与休闲</h3>
            <p>项目背靠小南山，可便捷前往赤湾公园、文天祥纪念公园登山休闲。距离海上世界、深圳湾公园海岸线也不远，兼得山景与海趣。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>交通便捷性无可比拟：</strong>双地铁上盖是项目的“王炸”优势，对于依赖轨道交通的通勤族极具吸引力。</li>
                    <li><strong>商业配套能级颠覆片区：</strong>自建4.2万㎡购物中心，将彻底改变赤湾商业匮乏的现状，成为片区的商业核心和生活中心。</li>
                    <li><strong>大盘综合体能级高：</strong>作为超22万㎡的大型综合体，配套齐全，生活便利度和未来社区成熟度预期很高。</li>
                    <li><strong>品牌开发商保障：</strong>招商蛇口的开发运营能力，尤其在商业和物业方面，为项目品质和未来价值提供了背书。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>片区整体面貌待提升：</strong>赤湾片区目前仍处于大规模旧改和建设期，城市界面以港口、产业和工地为主，完全成熟需要较长时间。</li>
                    <li><strong>教育资源确定性待观察：</strong>虽然规划有小学，但具体引入哪所品牌学校尚未确定，存在不确定性。</li>
                    <li><strong>可能存在环境干扰：</strong>临近赤湾港和主要干道，部分楼栋低楼层可能受到货柜车交通噪音或粉尘影响。</li>
                    <li><strong>居住密度不低：</strong>作为大型综合体，容积率不低，居住密度和社区人口复杂度会高于纯住宅小区。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>极度依赖地铁的通勤族：</strong>在福田、南山科技园、后海、前海等地工作，将轨道交通作为首要通勤方式，追求“零距离”地铁房的购房者。</li>
                    <li><strong>看重当下及未来生活便利度的买家：</strong>无法忍受当前片区商业的匮乏，期待未来在家门口就能享受一站式购物、休闲娱乐的便捷生活。</li>
                    <li><strong>看好赤湾长期发展的投资者：</strong>认可招商蛇口打造片区的能力，看好赤湾作为“蛇口国际海洋城”重要组成部分的长期发展潜力。</li>
                    <li><strong>喜欢热闹都市感的家庭：</strong>偏好大型综合体的繁华与便利，能接受一定社区密度和复杂度的家庭。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>开云府是赤湾片区一个以“顶级交通+旗舰商业”为核心驱动的标杆型TOD综合体。</strong>它最大的价值在于为购房者提供了当下赤湾乃至南山都稀缺的“双地铁上盖+自建大型购物中心”的确定性便利，这是其区别于周边其他项目的核心护城河。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>购买开云府，意味着您将“出行的极致便利和生活的未来繁华”置于最高优先级。您需要接受片区当前仍处于建设上升期、城市界面有待改善的现状，并对其商业运营成功抱有期待。如果您是一个地铁依赖者，或无法忍受配套缺失，那么开云府的优势是压倒性的。但如果您追求的是低密静谧的纯居住环境，或对顶级学区有即刻要求，则需要权衡其短板。</p>
            </div>
            
            <p>项目凭借招商蛇口的品牌和运营能力，有望成为撬动赤湾片区城市升级的重要支点。对于看重通勤效率、生活便利性及片区长期发展的购房者而言，这是一个定位清晰、优势突出的重量级选择。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>开云府</h1>
            <div class="subtitle">深圳南山蛇口 · 赤湾地铁上盖山海综合体</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山蛇口开云府项目的全面户型分析。项目为赤湾地铁上盖地标综合体的一部分，主推改善型户型，背山面海。报告将结合项目特点，深入解析各户型亮点、设计逻辑与选择考量。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>开云府为总建筑面积约32万㎡的大型城市综合体，包含住宅、购物中心、写字楼及五星级酒店。住宅部分共418套可售房源，均为精装交付，主力户型面积段为124-203㎡，定位高端改善市场。项目已于2025年竣工，为准现房状态。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型类别</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与备注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>A3户型</strong></td>
                        <td>约124㎡</td>
                        <td>三房两厅两卫</td>
                        <td>东南朝向，双龙抱珠格局，客厅带超大观景阳台。</td>
                    </tr>
                    <tr>
                        <td><strong>A1/A2户型</strong></td>
                        <td>约129㎡</td>
                        <td>三房两厅两卫</td>
                        <td>分西北(A1)与东南(A2)朝向，均为“双龙抱珠”格局，主卧270°采光。</td>
                    </tr>
                    <tr>
                        <td><strong>B2户型</strong></td>
                        <td>约133㎡</td>
                        <td>三房两厅两卫</td>
                        <td>西南朝向，竖厅设计，卧室面积分布平均。</td>
                    </tr>
                    <tr>
                        <td><strong>B1户型</strong></td>
                        <td>约203㎡</td>
                        <td>四房两厅三卫</td>
                        <td>南北通透，双套房设计，7.4米大阳台，私家电梯厅入户。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-mountain"></i> 项目容积率</div>
                    <div class="parameter-value">7.0</div>
                    <div class="parameter-desc">容积率较高，为超高层建筑群</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 绿化率</div>
                    <div class="parameter-value">30%</div>
                    <div class="parameter-desc">结合“空中连廊+屋顶花园”打造立体绿化</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 户型使用率</div>
                    <div class="parameter-value">约69%-83%</div>
                    <div class="parameter-desc">根据户型不同有所差异</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁交通</div>
                    <div class="parameter-value">2/5号线上盖</div>
                    <div class="parameter-desc">赤湾站E口，为地铁上盖物业</div>
                </div>
            </div>

            <div class="consideration-note">
                <h4>【客观考量】关于高容积率与使用率</h4>
                <p>需注意，项目容积率达7.0，建筑为超高层（49-54层），居住密度较高。此外，户型实用率约为69%-83%，其中约124㎡户型的部分卧室和卫生间可能存在采光不足或为暗卫的情况。此为选择时需权衡的因素。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约124-133㎡</div>
                        <div class="unit-name">A3 / A1&A2 / B2 户型</div>
                    </div>
                    <div class="unit-body">
                        <h4>山海景观舒居三房 · 主力改善之选</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">双龙抱珠</span>
                            <span class="tag">270°采光</span>
                            <span class="tag">观景阳台</span>
                            <span class="tag">精装现房</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>主流格局：</strong>约124㎡(A3)和129㎡(A1/A2)户型均采用“双龙抱珠”格局，客厅居中，卧室分列两侧，保障静音与隐私。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>129㎡户型主卧享有270°采光面。部分户型（如A2）客厅连接近7米超大观景阳台。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间尺度：</strong>作为改善三房，空间尺度感优于市场同类产品，客厅开间约4米。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-eye-slash"></i>
                            <div><strong>注意事项：</strong>约124㎡户型的公卫为暗卫，且小次卧可能对天井走廊，采光受影响。约129㎡的A2户型公卫亦为暗卫。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>在南山核心滨海板块，以“5字头”单价提供具备山海景观资源的精装三房，是上车南山优质地段的选择。项目为准现房，减少了交付等待期和不确定性。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约203㎡</div>
                        <div class="unit-name">B1 户型</div>
                    </div>
                    <div class="unit-body">
                        <h4>天幕大平层 · 顶改善旗舰户型</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">私家电梯厅</span>
                            <span class="tag">双主卧套房</span>
                            <span class="tag">7.4米阳台</span>
                            <span class="tag">南北通透</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-closed"></i>
                            <div><strong>入户体验：</strong>配备约6.27㎡的私家电梯厅，形成独立入户空间，隐私性极佳。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-bed"></i>
                            <div><strong>套房设计：</strong>双主卧套房配置，均配备独立卫生间，主卧带270°景观面和独立衣帽间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-vector-square"></i>
                            <div><strong>阔绰尺度：</strong>南北通透，拥有约7.4米面宽的阔尺阳台和约17.6米的连续景观面宽，空间感震撼。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-dollar-sign"></i>
                            <div><strong>价格特点：</strong>该户型定价策略独特，高低楼层价差极小（部分房源高低区总价仅差约26万），高楼层性价比突出。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>以南山稀缺的“总价段”，提供具备豪宅配置（私梯入户、双套房、超大面宽）的真正大平层产品，是追求终极改善和稀缺景观家庭的旗舰之选。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>项目整体设计理念：山海都会超体</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">赤湾先发</div>
                    <div class="unit-name">城市综合体</div>
                </div>
                <div class="unit-body">
                    <h4>非单一住宅，而是片区综合开发的一部分</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">地铁上盖TOD</span>
                        <span class="tag">约4.6万㎡商业</span>
                        <span class="tag">五星级酒店</span>
                        <span class="tag">总部办公</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-city"></i>
                        <div><strong>复合业态：</strong>项目是约3.2平方公里“赤湾先发”片区开发的核心，集住宅、约4.6万㎡购物中心（赤湾汇）、甲级写字楼、凯悦品牌五星级酒店于一体。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-subway"></i>
                        <div><strong>TOD模式：</strong>真正的地铁上盖（赤湾站），未来可通过项目底部商业无缝连接地铁，但同时也需关注人流车流带来的影响。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-anchor"></i>
                        <div><strong>片区规划：</strong>位于“蛇口国际海洋城”科技创新区内，规划有海洋科技产业园，未来将聚集大量产业与人口，兼具潜力与不确定性。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>购买开云府不仅是购买一套住宅，也是买入一个正在成型的城市综合体和一片规划宏大的湾区未来。这带来了便利的配套和增值潜力，但也意味着需要伴随片区度过一段开发建设期。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】户型选择的区域配套视角</h4>
                <p><strong>教育：</strong>项目学区为南二外（集团）赤湾学校（九年一贯制）。周边规划有国际化学校及市三十高中。<br>
                <strong>商业：</strong>自带商业体，但当前周边大型成熟商业（如海上世界、K11）需地铁1-2站或驱车前往。<br>
                <strong>生态人文：</strong>背靠大、小南山，近伶仃洋，周边有华英路樱花公园、赤湾公园及天后宫、左炮台等历史文化资源。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁上盖交通枢纽</h4>
                        <p>位于地铁2号线与5号线换乘站“赤湾站”上盖，20分钟左右可达前海、后海核心区，是真正意义上的轨交物业。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div>
                        <h4>稀缺的山海双景资源</h4>
                        <p>背靠大南山、小南山，南望伶仃洋，部分高楼层户型可同时享有山景与海景，自然资源在南山新房中稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>国企开发与准现房保障</h4>
                        <p>由中国南山集团开发，项目已全面封顶，为准现房（2025年交付），极大降低了购房者的交付风险与等待周期。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div>
                        <h4>南山区价格门槛优势</h4>
                        <p>单价约5-6万/㎡起，显著低于南山新房均价，为购房者提供了以相对较低总价进驻南山核心滨海板块的机会。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-hotel"></i>
                    </div>
                    <div>
                        <h4>综合配套与未来规划</h4>
                        <p>作为大型TOD综合体，自带高端商业、酒店和写字楼，享受片区“蛇口国际海洋城”的宏大规划红利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>精装交付与高梯户比</h4>
                        <p>精装修交付，配备国际一线品牌。梯户比配置较高（如4梯4户），部分大户型实现私梯入户。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与客观考量</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择建议及客观分析</h4>
                <p>基于项目户型特点、价格策略及周边环境，为您提供以下参考建议与客观信息：</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约124-133㎡ 三房 · A3/A1/A2/B2户型</h4>
                <p><strong>朝向选择：</strong>优先选择东南朝向（A2、A3），日照更佳；西南朝向（B2）午后阳光充足；西北朝向（A1）夏季西晒需注意。</p>
                <p><strong>楼层建议：</strong>项目为超高层，中高楼层（20层以上）视野和采光更优，能更好享受山海景观。低楼层价格可能更有优势，但需注意周围建筑和自身楼栋遮挡。</p>
                <p><strong>特别注意：</strong>选购约124㎡户型时，建议重点关注公卫及小次卧的通风采光情况。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约203㎡ 四房 · B1户型</h4>
                <p><strong>核心策略：</strong>“就高不就低”。该户型高低区价差极小，用几乎相同的总价购买更高楼层，能最大化获得视野、景观和静谧性价值。</p>
                <p><strong>楼层建议：</strong>强烈建议选择高区房源（如30层以上），以获得无遮挡的山海全景视野，真正体现大平层的空间与景观价值。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">【客观外部考量】</h4>
                <p>1. <strong>片区成熟度：</strong>赤湾片区仍处于开发建设阶段，大型商业、高端医疗等城市配套成熟度目前不及后海、科技园等传统片区，需要时间发展。<br>
                2. <strong>交通与环境：</strong>项目临近主干道兴海大道，需关注未来车流噪音影响。周边有物流产业规划，城市界面混合。<br>
                3. <strong>生活便利性：</strong>目前项目周边小型生活配套（如便利店、菜市场）有待完善，日常生活可能暂时依赖自驾或地铁出行。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>决策核心要点：</strong>开云府的核心价值在于“以南山区的门槛价，获得地铁上盖、山海景观和大型综合体规划”。其选择逻辑应是：在能接受片区当前开发状态和户型部分局限性的前提下，用总价预算换取核心地段的稀缺资源和未来潜力。对于看重即享成熟配套和静谧纯粹社区的购房者，则需要谨慎权衡。</p>
            </div>
        </div>
    </div>
`
            },
            "山海丹华府": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>山海丹华府 (山海丹华)</h1>
            <div class="subtitle">赤湾 · 非超高层山海社区 · 高得房率 · 近地铁口</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>山海丹华府位于南山区招商街道赤湾片区，少帝路与赤湾七路交汇处。项目是桑泰集团开发的二期住宅，定位为赤湾板块目前唯一在售的非超高层新房住宅小区。项目主打29-31层的低总高、高得房率以及一线山海景观，旨在为购房者提供一个居住舒适度高、性价比突出的选择。项目已开放展示，样板房近期已开放。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>板块唯一非超高层：</strong>楼栋总高仅29-31层，在赤湾乃至南山新房市场中都较为稀缺，居住密度和舒适度相对更高。</li>
                    <li><strong>高得房率与朝向：</strong>户型实用得房率（含赠送）约为88%-93%。设计上接近户户朝南，采光优越，高层户型可享一线海景。</li>
                    <li><strong>户型选择多样：</strong>主力户型覆盖建面约98㎡三房至152㎡五房，可满足不同家庭的改善需求。</li>
                    <li><strong>双地铁交汇区位：</strong>步行距离可至地铁2号线与5号线交汇的赤湾站，未来还规划有12号线延长线等，通勤潜力大。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市赤湾投资发展有限公司（桑泰集团全资控股）</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区招商街道赤湾片区，少帝路与赤湾七路交汇处西南角</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约29,386.66㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约143,175.14㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>3.37</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>5栋29-32层住宅（含1栋6班制幼儿园）</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>983户（其中可售商品房412户，回迁房571户）</td>
                </tr>
                <tr>
                    <td><strong>主力户型</strong></td>
                    <td>建面约98㎡三房、116㎡四房、132㎡五房、152㎡五房</td>
                </tr>
                <tr>
                    <td><strong>梯户比</strong></td>
                    <td>2梯4户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约990个（车位比约1:1.01）</td>
                </tr>
                <tr>
                    <td><strong>交付标准/时间</strong></td>
                    <td>精装交付，预计2026年中下旬</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2017年12月22日至2087年12月21日）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>厚德物业</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品特色与社区规划</h2>
            <p>项目在居住舒适度和空间实用性上着力打造特色，并拥有丰富的社区配套：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>低密舒适规划：</strong>作为板块内唯一的非超高层社区，结合3.37的容积率和40%的绿化率，楼间距和社区空间感相对更优。</li>
                    <li><strong>高实用性户型：</strong>户型设计方正，得房率高，部分高层可瞰山望海。部分户型设计有270°全景飘窗。</li>
                    <li><strong>完善社区配套：</strong>社区内规划有台地园林、约600㎡的泳池会所，并自带一所6班制幼儿园，满足业主日常休闲与亲子需求。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离地铁2号线与5号线交汇的赤湾站约1.1公里，步行约8分钟可达。可2站直达海上世界，快速换乘通达前海、后海等核心区。</li>
                <li><strong>道路交通：</strong>临近兴海大道、南海大道等主干道。未来，在建的小南山隧道和妈湾跨海通道通车后，将进一步提升与前海核心区、腾讯科技岛的连通效率。</li>
                <li><strong>远期规划：</strong>邻近规划中的地铁24号线、28号线，并靠近太子湾邮轮母港。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>基础教育：</strong>项目自带一所6班制幼儿园。周边有南山第二外国语学校（集团）赤湾学校（九年一贯制公办），该校设有41个班。</li>
                <li><strong>多元选择：</strong>周边还有南山中英文学校（12年制国际学校）、蛇口国际学校等，满足不同家庭需求。</li>
            </ul>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>在建商业：</strong>项目约1.1公里处规划有约4.6万㎡的“赤湾汇”商业，未来将提供区域级购物体验。</li>
                <li><strong>高端商圈：</strong>约2公里处有在建的太子湾高端商业（规划体量约46万㎡），内含K11 ECOAST等，将成为深圳商业新标杆。</li>
                <li><strong>成熟商圈：</strong>可便捷抵达海上世界（约2.2公里）、前海印里等成熟商业综合体。</li>
            </ul>
            
            <h3>🌳 生态与休闲</h3>
            <p>项目坐拥山、海、港景观，周边被小南山、大南山、赤湾山三面环伺。休闲去处包括赤湾公园、文天祥纪念公园、天后宫以及约16公里的黄金海岸线等，生态人文资源丰富。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>产品稀缺性：</strong>作为赤湾板块唯一的非超高层新房社区，总高仅29-31层，配合2梯4户和较高的得房率，居住舒适度在片区内有明显优势。</li>
                    <li><strong>优越的区位与规划：</strong>地处前海蛇口自贸区扩容范围，属于“蛇口国际海洋城”规划中的赤湾板块，未来享有区域发展和产业升级（如赤湾海洋科技园）带来的红利。</li>
                    <li><strong>交通与配套潜力大：</strong>双地铁上盖，未来随着小南山隧道、妈湾跨海通道及周边大型商业（赤湾汇、太子湾K11）的建成，片区交通和商业能级将大幅提升。</li>
                    <li><strong>山海景观资源：</strong>高层户型拥有一线海景及山景视野，结合户户朝南的设计，居住环境优越。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>回迁房占比较高：</strong>项目总户数983户中，回迁房达571户，占比约58%。虽然部分集中分布，但仍可能对社区的纯粹性和管理一致性带来挑战。</li>
                    <li><strong>当前配套成熟度一般：</strong>片区目前城市界面仍以港口、产业和旧改为主，大型商业配套多在建中，日常生活便利性短期内需依赖蛇口或社区底商。</li>
                    <li><strong>周边环境与噪音：</strong>临近赤湾港，存在货柜车通行；靠近兴海大道的楼栋低楼层可能受交通噪音影响；且周边有赤湾村旧改等施工项目，短期内可能存在噪音和粉尘干扰。</li>
                    <li><strong>地铁非“零距离”：</strong>距离赤湾站约1.1公里，步行有一定距离，对依赖地铁通勤的住户而言便利性打折扣。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>注重居住舒适度的改善家庭：</strong>看重非超高层社区的密度、得房率、朝向及未来山海景观，对社区内部环境要求高于对当下外部城市界面的要求。</li>
                    <li><strong>看好前海-蛇口发展潜力的购房者：</strong>认可赤湾作为“蛇口国际海洋城”组成部分的长期规划价值，愿意为片区未来成长支付溢价，并接受配套逐步成熟的过程。</li>
                    <li><strong>在蛇口、前海工作的通勤族：</strong>工作地点在蛇口、前海等地，能接受当前地铁接驳距离，并期待未来隧道通车后自驾便利性的提升。</li>
                    <li><strong>对海景资源有偏好的买家：</strong>向往山海景观居住环境，且能接受港口海景特色及可能存在的环境音。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>山海丹华府是一个优缺点鲜明、定位清晰的“潜力型”改善楼盘。</strong>其最大卖点在于提供了赤湾板块乃至南山都稀缺的“非超高层、高得房率、户户朝南”的居住产品，并坐拥一线山海景观和双地铁区位，具备较强的产品差异化和未来区域红利预期。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>购买该项目，意味着您用“接受当前片区配套的不足和较高的回迁房比例”来换取“未来片区升级的潜力和当下更舒适的居住产品力”。它非常适合看重房屋本身居住属性（空间、采光、视野、密度）、对社区纯粹性要求相对灵活，且对赤湾长远发展有信心的改善型买家。如果您无法接受较高的回迁房占比，或对当下成熟便利的商业、静谧环境有极高要求，则需要慎重考虑。</p>
            </div>
            
            <p>总体而言，山海丹华府为市场提供了一个在舒适度与成长性之间寻求平衡的选项。对于能看清其短板并认同其核心价值的购房者而言，这是一个值得深入研究的特色项目。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>山海·丹华府</h1>
            <div class="subtitle">深圳南山蛇口 · 赤湾低密山海人居</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳南山蛇口赤湾板块山海丹华府项目的全面户型分析。作为区域内稀缺的低密度、非超高层住宅，项目主打高得房率与山海景观。报告将结合其赤湾村旧改二期身份与产品特点，深入解析各户型亮点与核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>山海丹华府是赤湾村旧改项目二期，总建筑面积约21万㎡。项目二期（即本次出售部分）由5栋29-32层住宅及1栋幼儿园组成，共提供983套住宅。项目最大的特点是容积率仅约3.37，是赤湾板块当前唯一的非超高层新建住宅小区，居住密度与舒适度优势明显。项目预计于2026年下半年精装交付。 </p>
            
            <table>
                <thead>
                    <tr>
                        <th>主力户型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与备注</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>约98㎡户型</strong></td>
                        <td>约98㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，LDKB一体化，三开间朝南，动静分区。</td>
                    </tr>
                    <tr>
                        <td><strong>约116㎡户型 (C/F型)</strong></td>
                        <td>约116㎡</td>
                        <td>四房两厅两卫</td>
                        <td>竖厅南北通透，四开间朝南，C户型得房率高达93.13%。</td>
                    </tr>
                    <tr>
                        <td><strong>约132㎡户型</strong></td>
                        <td>约132㎡</td>
                        <td>五房两厅两卫</td>
                        <td>仅6B栋02户型，五开间朝南，客厅开间3.8米。</td>
                    </tr>
                    <tr>
                        <td><strong>约152㎡户型</strong></td>
                        <td>约152㎡</td>
                        <td>五房两厅三卫</td>
                        <td>仅5栋01户型，双主卧套间，客厅开间4.1米。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-vector-square"></i> 项目容积率</div>
                    <div class="parameter-value">约3.37</div>
                    <div class="parameter-desc">赤湾板块稀缺的低密度小区</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户比</div>
                    <div class="parameter-value">2梯4户</div>
                    <div class="parameter-desc">可售商品房均为2梯4户配置</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 得房率</div>
                    <div class="parameter-value">约88%-93%</div>
                    <div class="parameter-desc">含赠送面积，C户型可达93.13%</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 绿化率</div>
                    <div class="parameter-value">40%</div>
                    <div class="parameter-desc">配合台地式园林设计</div>
                </div>
            </div>

            <div class="consideration-note">
                <h4>【客观考量】关于社区构成与周边环境</h4>
                <p>需注意，项目二期983套房源中包含571套回迁房，可售商品房为412套。大量回迁房存在可能影响未来居住人群的纯粹性和社区氛围。此外，赤湾片区目前仍处于开发阶段，周边有施工项目，且赤湾港有大车来往，短期内可能存在噪音、灰尘及高峰期交通拥堵问题。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约98-116㎡</div>
                        <div class="unit-name">功能实用型 · 约98㎡/116㎡</div>
                    </div>
                    <div class="unit-body">
                        <h4>高性价比山海入门之选 · 紧凑三房/四房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高得房率</span>
                            <span class="tag">多开间朝南</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">精装交付</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>空间魔法：</strong>约98㎡做到三房两卫，总价约640-680万起，是上车南山山海片区门槛较低的选项。约116㎡C户型在紧凑面积内实现四房两卫，得房率高达93.13%。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光格局：</strong>约98㎡为三开间朝南，116㎡为四开间朝南。项目整体设计几乎实现户户朝南，以最大化景观视野。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>设计细节：</strong>采用LDKB（客、餐、厨、阳台）一体化或餐客厅一体化设计，增强空间感。厨房多为L型或U型设计，卫生间干湿分离。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>以南山核心区相对亲民的总价，提供功能完备、得房率极高的紧凑户型，满足年轻家庭、首次改善客户对功能性与山海景观的双重需求。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约132-152㎡</div>
                        <div class="unit-name">尺度舒适型 · 约132㎡/152㎡</div>
                    </div>
                    <div class="unit-body">
                        <h4>多房山海大宅 · 五开间朝南格局</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">五开间朝南</span>
                            <span class="tag">双主卧套(152㎡)</span>
                            <span class="tag">稀缺端头</span>
                            <span class="tag">270°观景</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>阔绰格局：</strong>约132㎡及152㎡户型均实现五开间朝南，采光面极佳。其中152㎡为双主卧套房设计，配备三个卫生间，私密性与便利性升级。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>景观视野：</strong>户型均位于特定楼栋的端头位置（如5栋01、6B栋02），视野无遮挡，部分户型拥有约270°环幕瞰海或观山条件。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>功能定位：</strong>满足多代同堂、追求一步到位改善的家庭需求，在低密社区内享受开阔的室内空间与顶级的山海景观资源。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>作为项目中的旗舰产品，其价值不仅在于多房间的功能性，更在于“五开间朝南+端头景观位”带来的极致采光、通风与观景体验，是追求品质与稀缺性的改善家庭之选。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>项目整体设计理念：盒中山水，山海之灵</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">蛇口赤湾</div>
                    <div class="unit-name">旧改山海社区</div>
                </div>
                <div class="unit-body">
                    <h4>非超高层、低密度的差异化山海生活</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">台地园林</span>
                        <span class="tag">五星级会所</span>
                        <span class="tag">山海城园融合</span>
                        <span class="tag">双湾C位</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-landmark"></i>
                        <div><strong>规划定位：</strong>项目地处前海湾和蛇口湾双湾交汇的C位，是“蛇口国际海洋城”三大主要承载区（赤湾、太子湾、蛇口）之一，享有片区升级红利。前海蛇口片区扩容后，赤湾被纳入“七板块”之一。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-tree"></i>
                        <div><strong>园林设计：</strong>以“盒中山水，山海之灵”为构想，通过地面抬高近10米打造台地式园林，实现“山海城园”融合，提升景观层次与私密性。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-swimming-pool"></i>
                        <div><strong>社区配套：</strong>对标五星级酒店会所标准，打造约600㎡泳池会所（含45米成人泳池及儿童泳池）。配备丛林探险主题儿童乐园、无边界运动空间等。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>山海丹华府的核心卖点在于其“低密非超高层+高得房率+山海景观”的组合，在遍地超高层的深圳新房市场中形成差异化。选择它意味着用可接受的价格，换取更舒适的建筑密度、更高的实用率以及未来的区域发展潜力，但同时也需接纳片区当前的建设环境和社区混合型人口结构。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】外部配套与生活场景</h4>
                <p><strong>交通：</strong>距离地铁2/5号线赤湾站约500-800米，未来有12号线、28号线（规划）。临近兴海大道、妈湾跨海隧道（建设中）等多条干道。
                <br><strong>商业：</strong>自建约4589㎡底商。依赖周边：约4.6万㎡赤湾汇（开云府）、约46万㎡太子湾K11购物中心（在建）、海上世界商圈，车程约10分钟。
                <br><strong>教育：</strong>自建6班幼儿园。学区为南山第二外国语赤湾学校（九年一贯制）。周边另有蛇口国际学校等私立选项。
                <br><strong>生态人文：</strong>背靠大小南山、赤湾山，南临伶仃洋，坐拥约270°山海景观。周边有文天祥纪念公园、赤湾天后宫、左炮台等历史人文资源。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div>
                        <h4>低容积率与非超高层设计</h4>
                        <p>容积率仅约3.37，住宅最高仅32层，是赤湾板块稀缺的低密度、非超高层新建住宅，居住舒适度与私密性远超周边高容积率项目。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>超高得房率与实用设计</h4>
                        <p>整体得房率高达88%-93%（含赠送），尤其紧凑户型（如116㎡做四房）空间利用率极高，部分卧室面积标注包含飘窗，可直接利用。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div>
                        <h4>极致朝向与山海景观</h4>
                        <p>通过台地园林与楼栋布局，几乎实现户户朝南，最大化南向采光与无遮挡的山海景观视野，部分户型可享约270°环景。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-umbrella-beach"></i>
                    </div>
                    <div>
                        <h4>高品质社区内部配套</h4>
                        <p>对标五星级酒店的泳池会所、主题儿童乐园、多功能运动场地等，提升了社区的休闲娱乐品质和度假式居住体验。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>双湾C位与规划红利</h4>
                        <p>地处前海与蛇口双湾交汇处，属于“蛇口国际海洋城”核心承载区，享有城市重大战略规划带来的长远发展潜力。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>成熟与规划中的交通网络</h4>
                        <p>现有双地铁（2/5号线）步行可达，未来还有多条轨道交通（12、28号线）及跨海隧道规划，远期交通通达性优秀。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与客观考量</h2>
            
            <div class="floor-suggestion">
                <h4>户型与选择建议及综合权衡</h4>
                <p>基于项目低密度、高得房率、山海景观及社区构成特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约98-116㎡ 三房/四房 · 功能实用型</h4>
                <p><strong>选择逻辑：</strong>追求南山核心区高性价比、高实用率的“上车盘”或首次改善。建议重点关注约116㎡C户型（得房率93.13%）。约98㎡户型总价门槛最低。</p>
                <p><strong>楼层建议：</strong>项目为小高层，中高楼层（15层以上）能更好地享受无遮挡的山海景观与园林视野。低楼层价格或有优势，但需注意园林树木的遮挡情况。</p>
                <p><strong>特别注意：</strong>部分户型可能存在阳台偏小的情况。建议结合样板间，实地感受各功能空间的尺度是否满足家庭需求。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">约132-152㎡ 五房 · 尺度舒适型</h4>
                <p><strong>选择逻辑：</strong>追求一步到位的改善，看重“五开间朝南”的阔绰格局、端头位的稀缺景观以及双主卧套的舒适性。152㎡双主卧套设计适合多代家庭。</p>
                <p><strong>楼层建议：</strong><strong>强烈建议选择高区房源</strong>。这类户型的核心价值在于景观，更高楼层能最大化其山海视野，规避周边可能的干扰，真正体现其作为景观改善盘的价值。</p>
                
                <h4 style="margin-top: 25px; color: #0c2e6d;">【客观综合权衡要点】</h4>
                <p>1. <strong>社区混合性：</strong>大量回迁房（571套）与商品房混居是重要考量点，可能影响未来邻居圈层、社区维护水准及二手房市场表现。
                <br>2. <strong>片区成熟度：</strong>赤湾正处于从“港区+旧村”向“海洋科技新城”转型的阵痛期，需接受未来数年周边持续施工、大车穿梭、配套逐步完善的过程。
                <br>3. <strong>当下 vs 未来：</strong>项目优势（低密、高得房率、景观）是即时的，而核心配套（大型商业、完整城市界面）和规划红利（海洋科技城）的兑现则需要时间，需评估个人对等待周期的容忍度。
                <br>4. <strong>户型细节：</strong>虽然得房率高，但部分户型为追求房间数量，单个空间（如次卧、阳台）可能做出妥协。务必以实际居住体验为准，实地勘测。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>决策核心：</strong>山海丹华府提供了一个“用当前相对实惠的价格，购买未来山海新城潜力与当下低密舒适度”的机会。它非常适合能接受片区当前状态、看重户型实用率、热爱自然景观，并且不过度追求纯粹商品房社区氛围的购房者。如果您对社区人口构成的纯粹性、即享的繁华商业有较高要求，则需要慎重考虑。</p>
            </div>

        </div>
    </div>
`
            },
            "赤湾琅玥湾佳园": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>赤湾琅玥湾佳园（赤湾华府）</h1>
            <div class="subtitle">赤湾 · 地铁口 · 山海景观 · 招商蛇口综合体 · 自建“赤湾汇”商业</div>
            <div class="project-alias">注：推广名“琅玥湾佳园”，备案名“赤湾华府”。以下信息基于项目备案资料及公开规划。</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>赤湾琅玥湾佳园（备案名：赤湾华府）位于南山区招商街道赤湾片区核心，少帝路与赤湾七路交汇处。项目是招商蛇口与赤湾村股份公司合作开发的城市更新综合体，总建筑面积约22.9万平方米，集住宅、商业、公寓、幼儿园及社区配套于一体。作为赤湾片区的重要建设项目，其核心优势在于便捷的地铁通勤、开阔的山海景观、自建的大型商业配套以及招商蛇口的品牌保障，旨在打造片区内的品质居住生活圈。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>双地铁口便利交通：</strong>项目距离地铁2号线与5号线交汇的赤湾站约300米（步行距离），可快速通达蛇口、前海、后海等核心区域。</li>
                    <li><strong>🔄 高层开阔海景视野：</strong>项目坐落在赤湾，部分楼栋的中高楼层拥有良好的视野，可远眺深圳西部海域及港口景观，具备稀缺的山海双重景观资源。</li>
                    <li><strong>自持大型商业配套：</strong>项目配建约4.2万平方米的集中商业“赤湾汇”，未来将极大改善片区商业氛围，提供一站式购物体验。</li>
                    <li><strong>品牌开发商保障：</strong>由央企招商蛇口主导开发，在项目品质、资金实力和后期运营（商业、物业）方面更具可靠性。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市赤湾房地产开发有限公司（招商蛇口 & 赤湾村股份公司）</td>
                </tr>
                <tr>
                    <td><strong>备案名 / 推广名</strong></td>
                    <td>赤湾华府 / 琅玥湾佳园</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区招商街道赤湾片区，少帝路与赤湾七路交汇处</td>
                </tr>
                <tr>
                    <td><strong>项目性质</strong></td>
                    <td>城市更新综合体（住宅、商业、公寓等）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约40,959.32平方米</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约229,000平方米</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>4.07</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>多栋高层住宅、商务公寓、集中商业及幼儿园</td>
                </tr>
                <tr>
                    <td><strong>住宅主力户型</strong></td>
                    <td>信息待进一步公布（预计以改善型三至四房为主）</td>
                </tr>
                <tr>
                    <td><strong>教育配套</strong></td>
                    <td>配建一所6班幼儿园</td>
                </tr>
                <tr>
                    <td><strong>商业体量</strong></td>
                    <td>自持约4.2万平方米“赤湾汇”购物中心</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>项目特色与社区规划</h2>
            <p>作为片区内的综合性大盘，项目在整体规划和未来生活场景营造上具有明显特点：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong> TOD生活模式：</strong>依托地铁站，规划便捷的步行连接系统，倡导绿色高效的出行与生活方式。</li>
                    <li><strong>商业驱动活力：</strong>自持运营的大型商业“赤湾汇”不仅是配套，更将成为片区的活力中心，吸引人流，带动区域价值提升。</li>
                    <li><strong>🔄 稀缺的山海景观资源：</strong>项目地处赤湾，背靠小南山，部分户型（尤其是中高楼层）拥有开阔的视野，可同时享受山景与海景，是项目重要的价值点之一。</li>
                    <li><strong>全龄友好社区：</strong>规划有幼儿园、社区文化活动室、公共绿地等设施，关注不同年龄段居民的需求。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离地铁2号线与5号线赤湾站约300米，步行可达。2号线串联蛇口、后海、福田，5号线连接前海、宝安中心。</li>
                <li><strong>道路交通：</strong>紧邻兴海大道、南海大道等城市主干道。未来妈湾跨海通道及小南山隧道通车后，与前海核心区的联系将更加紧密。</li>
                <li><strong>远期规划：</strong>周边规划有地铁24号线、28号线，未来轨道交通网络将进一步完善。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>项目自带：</strong>配建一所6班幼儿园。</li>
                <li><strong>片区学校：</strong>项目周边的主要公立教育资源为南山第二外国语学校（集团）赤湾学校（九年一贯制）。但具体学区划分需以项目交付后教育局当年公布的范围为准。</li>
            </ul>
            
            <h3>🛍️ 商业配套（核心优势）</h3>
            <ul class="feature-list">
                <li><strong>自建大型商业：</strong>项目自持约4.2万平方米“赤湾汇”购物中心，规划为区域型商业，将填补片区大型商业空白。</li>
                <li><strong>周边高端商圈：</strong>可便捷抵达太子湾K11 ECOAST（在建，规划体量庞大）、蛇口海上世界等高端商圈，车程均在合理范围内。</li>
            </ul>
            
            <h3>🌳 生态与休闲</h3>
            <p>背靠小南山，可方便前往赤湾公园、文天祥纪念公园等进行登山休闲活动。同时，项目凭借其区位，为业主提供了🔄 观赏海景、亲近海洋的独特休闲方式，兼得山、海自然之利。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>地铁通勤便利：</strong>约300米步行距离至双地铁口，对上班族通勤非常友好，是项目的硬核优势之一。</li>
                    <li><strong>🔄 稀缺的山海景观：</strong>部分楼栋中高楼层具备远眺海景的视野，结合背靠小南山的地理位置，提供了在都市中难得的山海双重景观体验，稀缺性显著。</li>
                    <li><strong>商业配套预期高：</strong>自带大体量商业，不仅能满足自身业主需求，更有望成为片区商业中心，提升整体生活便利度和区域价值。</li>
                    <li><strong>品牌与规模优势：</strong>招商蛇口开发，且作为大型综合体项目，在品质把控、社区成熟度和抗风险能力上相对更有保障。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>片区现状待改善：</strong>赤湾当前仍处于建设期，城市界面以港口、旧改和工地为主，完全成熟需要较长周期，短期内居住氛围和感官可能受影响。</li>
                    <li><strong>教育资源确定性存疑：</strong>项目配建了幼儿园，但小学和初中学区依赖周边的赤湾学校。学区划分存在年度调整的可能，并非百分百确定。</li>
                    <li><strong>🔄 景观视野存在差异：</strong>海景视野受具体楼栋、楼层和朝向影响较大，并非所有户型都能享有。且港口海景的审美和价值判断因人而异。</li>
                    <li><strong>项目具体信息待明确：</strong>目前关于户型、价格、交付时间等关键销售信息尚未全面公布，决策存在一定不确定性。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>依赖地铁通勤的置业者：</strong>在南山、前海乃至福田工作的上班族，将地铁作为主要通勤工具，看重通勤效率和成本。</li>
                    <li><strong>🔄 注重景观资源的改善家庭：</strong>对居住环境的景观有要求，希望在家中能享受开阔视野，尤其是青睐山海景观的购房者。</li>
                    <li><strong>看好赤湾长期发展的买家：</strong>认可招商蛇口的运营能力和片区规划前景，愿意陪伴区域成长，以当前价格布局未来价值的投资者或改善客群。</li>
                    <li><strong>注重生活便利性的家庭：</strong>无法忍受商业配套的缺失，期待未来在家门口就能享受丰富商业服务，对大型社区配套接受度高的家庭。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>赤湾琅玥湾佳园（赤湾华府）是一个集“地铁、海景、商业”于一体的片区标杆型综合大盘。</strong>它不仅解决了赤湾片区商业配套匮乏的核心痛点，更凭借其部分户型所拥有的开阔海景视野，在交通便利性之上，增加了稀缺的景观价值，为市场提供了一个更具吸引力的高品质居住选项。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>考虑该项目，意味着您同时看重地铁通勤的确定性、未来商业的繁华预期以及稀缺的山海景观资源。它非常适合在南山、前海沿线工作，注重生活便利性与居住环境，且对招商蛇口品牌有信心的通勤家庭或改善型买家。然而，如果您的首要需求是即刻享有的顶尖学区，或对港口区域的潜在环境影响非常敏感，则需要更审慎地评估。在选择具体房源时，应优先关注能实现景观价值的楼栋、楼层和朝向。</p>
            </div>
            
            <p>总体而言，该项目是理解并下注“赤湾未来”的一个典型标的。其成功与否，与自持商业“赤湾汇”的运营成效、片区整体升级步伐紧密相关，而其拥有的海景资源则构成了其独特的价值壁垒。对于目标客群而言，这是一个值得密切关注其后续动态的重要项目。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>赤湾华府</h1>
            <div class="subtitle">南山区赤湾 · 山海关三重景观大宅</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供赤湾琅玥湾佳园（赤湾华府）项目的全面户型分析，结合项目独特的山、海、城三重景观资源，深入解析各户型亮点与价值，帮助您系统了解项目优势，为决策提供专业参考。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #1a5c36; margin-top: 0;">📍 项目区位价值</h3>
                <p><strong>赤湾华府</strong>位于南山区赤湾片区，坐拥稀缺的山海景观资源，地处前海-蛇口自贸区辐射范围，享有"山景、海景、城景"三重景观视野。项目周边交通便利，地铁2号线、5号线、12号线（规划）环绕，临近太子湾、海上世界、蛇口港等核心商圈。</p>
                <div style="margin-top: 15px;">
                    <span class="view-badge"><i class="fas fa-mountain"></i> 山景资源</span>
                    <span class="view-badge"><i class="fas fa-water"></i> 海景视野</span>
                    <span class="view-badge"><i class="fas fa-city"></i> 城央地段</span>
                    <span class="view-badge"><i class="fas fa-subway"></i> 三地铁环绕</span>
                </div>
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>项目户型设计充分利用赤湾片区独特的地形和高差，实现户户有景、室室见光的设计理念，通过创新空间布局和精细化设计，最大化景观视野与居住舒适度。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型命名</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>湾景 · 悦山</strong></td>
                        <td>约89-95㎡</td>
                        <td>三房两厅一卫</td>
                        <td>全明户型，南向观景阳台，高实用率，主卧飘窗</td>
                    </tr>
                    <tr>
                        <td><strong>湾景 · 揽海</strong></td>
                        <td>约108-115㎡</td>
                        <td>三房两厅两卫</td>
                        <td>横厅设计，双景观阳台，主卧套房，U型厨房</td>
                    </tr>
                    <tr>
                        <td><strong>湾境 · 观澜</strong></td>
                        <td>约128-135㎡</td>
                        <td>四房两厅两卫</td>
                        <td>南北通透，双套房设计，独立家政间，270°转角阳台</td>
                    </tr>
                    <tr>
                        <td><strong>湾境 · 天宸</strong></td>
                        <td>约158-168㎡</td>
                        <td>四房两厅三卫</td>
                        <td>端厅设计，约6.8米宽厅，双主卧套房，中西双厨</td>
                    </tr>
                    <tr>
                        <td><strong>湾玺 · 府邸</strong></td>
                        <td>约195-220㎡</td>
                        <td>五房两厅三卫</td>
                        <td>大平层格局，独立电梯厅，总统套房式主卧，多功能家庭厅</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约3.2</div>
                    <div class="parameter-desc">合理密度，保障居住舒适度与景观视野</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">南向/东南向</div>
                    <div class="parameter-desc">主要户型均实现南向采光，部分户型享山海双景</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 实用率</div>
                    <div class="parameter-value">约78-82%</div>
                    <div class="parameter-desc">高实用率设计，空间利用率行业领先</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">高层/超高层住宅</div>
                    <div class="parameter-desc">现代简约风格，铝板+玻璃幕墙立面</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约108-115㎡</div>
                        <div class="unit-name">湾景 · 揽海</div>
                    </div>
                    <div class="unit-body">
                        <h4>轻改善典范 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">横厅设计</span>
                            <span class="tag">双阳台</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">南向采光</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间设计：</strong>约108㎡实现横厅设计+主卧套房配置，客厅开间约3.8米，空间感远超同类产品。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>LDK一体化横厅设计，连接南向景观阳台，形成约10米通透空间，增强家庭互动与景观延伸。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>双阳台设计，南向主阳台连接客厅，北向生活阳台服务厨房，实现空气对流与全方位采光。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足首次改善家庭、注重生活品质的年轻夫妇，兼顾功能性与舒适性。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是项目的主力产品，在有限面积内实现了改善型住宅的空间体验，高实用率设计让实际使用面积远超预期，是进入赤湾片区核心地段的高性价比选择。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约128-135㎡</div>
                        <div class="unit-name">湾境 · 观澜</div>
                    </div>
                    <div class="unit-body">
                        <h4>全景视野改善 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">南北通透</span>
                            <span class="tag">双套房</span>
                            <span class="tag">转角阳台</span>
                            <span class="tag">独立家政间</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>空间革新：</strong>创新L型布局，将走廊面积转化为实用空间，实现约128㎡面积内双套房+独立家政间配置。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>格局特点：</strong>南北通透，双卧朝南，客厅连接270°转角观景阳台，最大化山海景观视野。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>景观优势：</strong>高区户型可同时观赏山景、海景和城市景观，低区户型享社区园林景观，视野层次丰富。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>设计巧思：</strong>独立家政间连接生活阳台，实现洁污分区；玄关预留整面收纳墙；卧室采用飘窗+收纳柜一体化设计。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型充分利用赤湾地形高差，实现全景视野体验，在改善型面积段内提供了接近豪宅的空间感受和景观享受，是项目的明星产品。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约158-168㎡</div>
                    <div class="unit-name">湾境 · 天宸</div>
                </div>
                <div class="unit-body">
                    <h4>奢阔尺度标杆 · 四房三卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">端厅设计</span>
                        <span class="tag">双主卧套房</span>
                        <span class="tag">中西双厨</span>
                        <span class="tag">约6.8米宽厅</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度：</strong>客厅开间达约6.8米，连接南向全景阳台（约18㎡），形成约40㎡的公共活动空间，媲美豪宅尺度。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节品质：</strong>双主卧套房均配备独立衣帽间和卫浴，主卫实现四件套配置；中西双厨设计，中厨封闭式，西厨与餐厅一体。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观优势：</strong>端厅设计实现270°观景视野，主卧套房享南向山海景观，次卧套房北向观山景，实现景观资源最大化。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>追求极致空间体验、注重家庭社交与私密平衡的高净值改善家庭，兼顾会客与居住功能。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型是赤湾片区的标杆产品，不仅满足功能性需求，更注重居住仪式感、空间层次感和家庭社交需求，是南山稀缺的山海景观大平层产品。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】赤湾华府户型设计特色</h4>
                <p>项目户型设计充分结合赤湾片区特色：1) 利用地形高差，实现户户有景、高低区各有优势；2) 充分考虑深圳气候特点，采用穿堂风设计，增强自然通风；3) 创新阳台设计，部分户型配备转角阳台、双层挑高阳台等；4) 全屋配备智能家居系统，支持手机App控制；5) 采用健康住宅标准，配备新风除霾系统、净水软水系统。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-binoculars"></i>
                    </div>
                    <div>
                        <h4>三重景观视野</h4>
                        <p>充分利用赤湾山、海、城三重景观资源，高区享海景，中区观城景，低区览园景，户户有景，视野丰富。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div>
                        <h4>全明通风设计</h4>
                        <p>户户南北通透或双面采光，实现自然穿堂风，结合深圳海洋性气候特点，减少空调依赖，节能舒适。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>高实用率创新</h4>
                        <p>通过创新布局减少交通面积，实用率高达78-82%，在同等面积下实现更多功能空间，性价比突出。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>生态健康住宅</h4>
                        <p>采用低辐射玻璃、外墙保温系统、同层排水等绿色建筑技术，营造健康、舒适、节能的居住环境。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <div>
                        <h4>稀缺地段价值</h4>
                        <p>地处南山赤湾核心，前海蛇口自贸区双辐射，三地铁环绕，兼具稀缺景观资源与便利交通配套。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>全龄友好社区</h4>
                        <p>户型设计考虑全龄段需求，预留适老化设计，儿童活动空间，兼顾家庭各成员生活需求。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目户型特点、山海景观资源及日照分析，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约89-95㎡ 三房 · 湾景·悦山</h4>
                <p><strong>建议楼层：</strong>中低楼层（8-15层）</p>
                <p><strong>选择理由：</strong>性价比高，享受社区园林景观，避免高楼层风压问题，适合刚需及首改客户。</p>
                <p><strong>注意事项：</strong>建议选择南向或东南向户型，避开西晒，同时保证充足日照。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约108-115㎡ 三房 · 湾景·揽海</h4>
                <p><strong>景观选择：</strong>高区（20层以上）可享部分海景，中区（10-20层）性价比与视野平衡最佳。</p>
                <p><strong>朝向选择：</strong>东南朝向上午阳光充足，下午避免西晒；南向朝向全天采光均匀。</p>
                <p><strong>重点关注：</strong>横厅设计的空间感与双阳台的实用性，适合注重生活品质的改善家庭。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约128-135㎡ 四房 · 湾境·观澜</h4>
                <p><strong>建议楼层：</strong>中高楼层（15-25层）</p>
                <p><strong>选择理由：</strong>最大化270°转角阳台的景观价值，视野开阔度随楼层显著提升，同时避免过高楼层的风压与等电梯时间。</p>
                <p><strong>重点关注：</strong>东南朝向可享早晨阳光与海景，南向朝向视野最开阔，西向户型下午阳光充足但需注意西晒防护。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约158-168㎡ 四房 · 湾境·天宸</h4>
                <p><strong>建议楼层：</strong>高区优质楼层（25层以上）</p>
                <p><strong>选择理由：</strong>作为项目高端产品，应选择最佳景观视野楼层，最大化端厅设计的270°观景效果。</p>
                <p><strong>重点关注：</strong>关注楼栋在社区中的位置，优选无遮挡的楼王位置，同时考虑视野开阔度与私密性平衡。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约195-220㎡ 五房 · 湾玺·府邸</h4>
                <p><strong>建议楼层：</strong>次顶层或高区优质楼层</p>
                <p><strong>选择理由：</strong>作为项目顶级产品，应选择最佳景观视野楼层，实现产品价值最大化。</p>
                <p><strong>重点关注：</strong>独立电梯厅的私密性，主卧套房的尺度与配置，多功能厅的灵活性。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>赤湾华府项目容积率约3.2，整体居住密度适中、品质高。项目利用地形高差，低区享园林景观，高区享山海景观，各有优势。以上建议仅供参考，最终选择需结合实地看房感受、个人偏好、价格及房源实际情况等因素综合考虑。建议优先考虑南向或东南向户型，以最大化项目稀缺的山海景观资源。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】赤湾华府户型选择的七个维度</h4>
                <p>1. <strong>景观价值取向</strong>：高区享山海景观，中区观城景园景平衡，低区享社区园林；<br>
                2. <strong>家庭结构匹配</strong>：根据家庭人口结构、年龄分布选择合适户型；<br>
                3. <strong>生活方式偏好</strong>：社交型家庭优选宽厅户型，注重隐私家庭优选卧室分离户型；<br>
                4. <strong>预算与性价比</strong>：中低楼层性价比高，高楼层景观溢价明显；<br>
                5. <strong>日照与通风需求</strong>：南向/东南向日照最佳，端厅户型通风效果更佳；<br>
                6. <strong>功能空间优先级</strong>：根据家庭对书房、衣帽间、多功能房等需求排序选择；<br>
                7. <strong>资产配置考量</strong>：结合南山区域发展潜力和赤湾片区价值，选择最具保值增值潜力的户型与楼层。</p>
            </div>
            
            <div class="highlight-box">
                <h4>赤湾片区发展潜力分析</h4>
                <p>赤湾片区作为南山最后的发展洼地，正迎来重大发展机遇：1) 前海蛇口自贸区双辐射；2) 地铁12号线（在建）将进一步提升交通便利性；3) 太子湾国际邮轮母港带动片区商业升级；4) 赤湾总部基地规划吸引高端产业聚集。赤湾华府作为片区稀缺的新建住宅项目，兼具居住品质与资产增值潜力。</p>
            </div>
        </div>
    </div>
`
            }
        },
        "西丽": {
            "丹华公馆": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>丹华公馆项目详解</h1>
            <p class="subtitle">西丽留仙洞总部基地 · 深中学府 · 双高铁枢纽 · R3住宅用地</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>丹华公馆位于南山区西丽留仙洞总部基地核心区，是由桑泰集团开发的超大型住宅社区。项目坐拥留仙洞总部基地、西丽高铁新城和西丽湖国际科教城三大未来引擎，是深圳“十四五”规划的重点发展区域。项目最大的特点是其土地性质为R3（三类居住用地），以宿舍为主要属性，但具备70年住宅产权、可落户、享学区的核心优势，且目前不限购不限贷。</p>

            <div class="special-note">
                <h4>📌 核心属性说明：R3用地</h4>
                <p>丹华公馆的土地性质为 <strong>R3三类居住用地</strong>，区别于常见的R2普通住宅用地。其主要特点为：</p>
                <ul class="feature-list">
                    <li><strong>产权与权益：</strong>70年住宅产权，可落户，子女可积分入学。项目已在深中南山创新学校的招生范围内，且有业主子女成功入读。</li>
                    <li><strong>购买政策：</strong>当前购买无需深圳购房名额，这是其在限购政策下的独特吸引力。</li>
                    <li><strong>潜在影响：</strong>在入学积分上，虽与R2用地满分相同，但具体执行可能存在区域差异，且社区配套标准（如车位比）通常低于R2住宅。</li>
                </ul>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>地段潜力：</strong>坐拥留仙洞总部基地与西丽高铁新城双核心，未来规划能级高。</li>
                    <li><strong>名校资源：</strong>与深中南山创新学校（九年一贯制）仅一墙之隔，享有优质公办学位。</li>
                    <li><strong>低总价门槛：</strong>58㎡复式户型总价380万起，是南山核心区罕见的“300万级”新房。</li>
                    <li><strong>交通枢纽：</strong>临近规划中的西丽综合交通枢纽（规模将超深圳北站）及多条地铁线路。</li>
                </ul>
            </div>
        </section>

        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>桑泰集团（深圳市桑泰房地产开发有限公司）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>深圳市厚德物业服务有限公司</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约4.03万㎡ - 4.5万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约29万㎡ - 32万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>5.51 - 5.53</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>8栋高层住宅（37-46层）及1栋18班幼儿园</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>3019户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约2000个停车位，车位比约1:0.66-0.7</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2017-2087年）</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>5.9元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>交付时间</strong></td>
                    <td>2025年4月及10月分批交付</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>地处南山区西丽留仙洞总部基地，打石一路和创科路交汇处。片区定位为国际一流的战略性新兴产业总部基地，已吸引大疆、深信服等企业总部入驻，未来将聚集约60万高端就业人口。同时，项目位于规划中的西丽高铁新城范围内，该枢纽规模将超越深圳北站，成为湾区重要交通门户。</p>

            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离最近的是<strong>在建的15号线打石一路站</strong>，直线距离约150-400米。现有5号线留仙洞站距离约1.5-1.8公里，在建13号线石鼓站约900米。未来片区规划地铁线路密集。</li>
                <li><strong>高铁枢纽：</strong>距离规划中的西丽高铁站约1-2公里，该站将引入4条高铁、2条城际，实现1小时湾区生活圈。</li>
                <li><strong>自驾：</strong>紧邻留仙大道、南坪快速、南海大道等城市主干道，自驾出行便利。</li>
            </ul>

            <h3>🏫 教育资源</h3>
            <p><strong>深中南山创新学校</strong> - 项目东侧紧邻该校，是一所九年一贯制公办学校，由深圳中学直接管理，中考成绩在南山区属第一梯队。根据学区划分，项目在其招生范围内，2024年已有小区业主子女成功入读。此外，项目自带18班幼儿园。需再次强调，R3用地性质不影响其作为住宅参与积分入学的资格，但积分细则需以当年教育部门政策为准。</p>

            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>主要商业：</strong>依赖外部商业。距离约8万㎡的<strong>云城万科里</strong>约800米，是片区核心商业。1.5-3公里范围内还有悦方广场、西丽天虹、益田假日里等。</li>
            </ul>

            <h3>🌳 生态公园</h3>
            <p>项目西侧一路之隔便是占地约20公顷的<strong>西丽生态公园</strong>，为日常休闲提供了绝佳去处。周边还有塘朗山郊野公园、西丽水库等生态资源。</p>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>地段与规划价值高：</strong>位于留仙洞总部基地与西丽高铁新城双核心，享受高新产业与顶级交通枢纽规划红利，未来升值潜力明确。</li>
                    <li><strong>名校学位稀缺资源：</strong>“一墙之隔”即可入读深中嫡系学校，对于重视教育的家庭极具吸引力。</li>
                    <li><strong>低总价上车南山核心：</strong>58㎡户型总价380万起，门槛极低，让预算有限的购房者有机会入驻南山。</li>
                    <li><strong>购买政策宽松：</strong>当前不限购不限贷，为无购房名额的买家（如外地客群）提供了难得的机会。</li>
                </ul>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                <ul class="feature-list">
                    <li><strong>R3用地性质是核心争议点：</strong>土地性质为“三类居住用地/宿舍”，虽享有住宅权益，但在社区品质、市场认同度及长远流动性上可能与普通住宅（R2）存在差异。</li>
                    <li><strong>容积率高，居住密度大：</strong>5.5以上的容积率远超普通住宅，社区人口密集，58㎡户型为4梯12户，对居住舒适度和私密性有影响。</li>
                    <li><strong>当前交通与商业配套不便：</strong>距离已开通地铁站较远，依赖在建线路；缺乏大型社区商业，日常购物需短距离出行。</li>
                    <li><strong>车位配比紧张：</strong>约1:0.66的车位比偏低，未来停车可能成为问题。</li>
                    <li><strong>学区积分政策潜在风险：</strong>尽管目前可积分入学，但未来不排除教育政策调整对R3类房产的积分规则产生影响。</li>
                </ul>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>无购房名额的置业者：</strong>包括外地投资客、社保年限不足的年轻家庭等，是当前市场上稀缺的不限购住宅产品。</li>
                    <li><strong>预算有限但追求学位的家庭：</strong>总价400万以内即可获得南山名校学位，性价比突出。</li>
                    <li><strong>留仙洞总部基地的上班族：</strong>通勤距离极短，真正实现职住一体。</li>
                    <li><strong>看好片区长期发展的投资者：</strong>认同西丽高铁新城和留仙洞总部基地的未来规划价值。</li>
                    <li><strong>对居住密度不敏感的功能型买家：</strong>能够接受高容积率，更看重房屋的实用功能（如58㎡做4房）和总价优势。</li>
                </ul>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>丹华公馆是一个特点极其鲜明、优缺点都非常突出的项目。它的<strong>核心价值在于用极低的总价门槛，打包了南山核心区的名校学位和重磅规划地段</strong>。对于被名额或总价限制的购房者而言，它提供了一个“非标”的解决方案。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>是否选择丹华公馆，关键在于能否接受其<strong>R3用地性质</strong>所带来的全部衍生影响。它更适合将其视为一种“功能性资产”或“特定通行证”的买家，而非追求纯粹居住舒适度的改善型客户。购买前，务必深入理解R3用地的含义，并核实最新的学区积分政策。</p>
            </div>
            <p>与中海云启源境相比，两者定位截然不同：云启源境是位于成熟板块的纯商品住宅，主打居住品质和科技感；而丹华公馆则是新兴规划区的高性价比“上车盘”，以学位和总价取胜，但牺牲了部分居住属性和用地性质的纯粹性。购房者需根据自身核心需求进行抉择。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>丹华公馆</h1>
            <div class="subtitle">城央核心 · 典藏级精工大宅</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供丹华公馆项目的全面户型分析，结合项目"精工铸就、典藏传世"的核心价值理念，深入解析各户型的设计精髓、空间美学与居住价值，帮助您系统了解这一城央核心典藏级大宅的产品优势。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #5d4037; margin-top: 0;">📍 项目区位价值与设计理念</h3>
                <p><strong>丹华公馆</strong>坐落于城市核心区域，占据稀缺土地资源，以"现代东方美学"为设计理念，融合东方建筑意境与现代居住需求。项目采用全干挂石材立面、Low-E中空玻璃幕墙、铜质装饰构件等顶级材质，打造城市地标级建筑形象。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-landmark"></i> 城央核心地段</span>
                    <span class="view-badge"><i class="fas fa-palette"></i> 现代东方美学</span>
                    <span class="view-badge"><i class="fas fa-gem"></i> 精工材质</span>
                    <span class="view-badge"><i class="fas fa-tree"></i> 私密园林</span>
                    <span class="view-badge"><i class="fas fa-shield-alt"></i> 智慧安防</span>
                </div>
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>丹华公馆户型设计遵循"方正格局、南北通透、全明设计"三大原则，通过精细化空间尺度和人性化功能布局，实现"小面积、大尺度"的空间体验。所有户型均配备国际一线品牌精装，细节处体现精工品质。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型系列</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>丹韵 · 雅居</strong></td>
                        <td>约98-108㎡</td>
                        <td>三房两厅两卫</td>
                        <td>方正格局，南北通透，主卧套房，全明设计</td>
                    </tr>
                    <tr>
                        <td><strong>丹华 · 臻品</strong></td>
                        <td>约128-138㎡</td>
                        <td>四房两厅两卫</td>
                        <td>横厅设计，双套房，独立家政间，宽景阳台</td>
                    </tr>
                    <tr>
                        <td><strong>丹宸 · 尊享</strong></td>
                        <td>约168-178㎡</td>
                        <td>四房两厅三卫</td>
                        <td>端厅设计，270°视野，双主卧套房，中西双厨</td>
                    </tr>
                    <tr>
                        <td><strong>丹府 · 典藏</strong></td>
                        <td>约228-258㎡</td>
                        <td>五房两厅三卫</td>
                        <td>大平层格局，独立电梯厅，总统套房主卧，多功能厅</td>
                    </tr>
                    <tr>
                        <td><strong>丹玺 · 云端</strong></td>
                        <td>约328-388㎡</td>
                        <td>六房两厅四卫</td>
                        <td>顶层复式，私属空中花园，全景视野，专属电梯</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 项目容积率</div>
                    <div class="parameter-value">约2.5</div>
                    <div class="parameter-desc">低密度典藏社区，保证居住舒适度与私密性</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">南向/东南向</div>
                    <div class="parameter-desc">全部主力户型实现南向或东南向，日照充足</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 空间使用率</div>
                    <div class="parameter-value">约81-84%</div>
                    <div class="parameter-desc">超高使用率设计，空间无浪费，得房率高</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">高层精工大宅</div>
                    <div class="parameter-desc">全干挂石材+玻璃幕墙，现代东方建筑美学</div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【精工标准】丹华公馆建筑与精装标准</h4>
                <p><span class="gold-text">建筑标准：</span>全干挂石材立面、Low-E中空玻璃幕墙、铜质装饰构件、三层中空隔音玻璃、同层排水系统。<br>
                <span class="gold-text">精装标准：</span>德国柏丽橱柜、瑞士劳芬卫浴、美国摩恩五金、法国圣戈班玻璃、日本大金空调系统、全屋智能家居系统、瑞士吉博力同层排水。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约128-138㎡</div>
                        <div class="unit-name">丹华 · 臻品</div>
                    </div>
                    <div class="unit-body">
                        <h4>改善型标杆 · 四房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">横厅设计</span>
                            <span class="tag">双套房</span>
                            <span class="tag">宽景阳台</span>
                            <span class="tag">独立家政间</span>
                            <span class="tag">南北通透</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间设计：</strong>约6.2米横厅设计，连接约8.2米宽景阳台，形成约35㎡的开放式公共空间，视野开阔，采光极佳。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>双套房设计，主卧套房配备独立衣帽间与四件套卫浴；次卧套房满足老人或客人居住需求，动静分区清晰。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光通风：</strong>南北通透设计，三面采光，客厅与双卧朝南，实现全天候充足日照与自然通风。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足多孩家庭、需要居家办公空间或注重生活品质的改善型客户，兼顾功能性、舒适性与社交需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>精工细节：</strong>厨房配备德国柏丽橱柜与嵌入式厨电；主卫采用瑞士劳芬一体式智能马桶与汉斯格雅花洒；全屋采用大金中央空调与新风除霾系统。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约168-178㎡</div>
                        <div class="unit-name">丹宸 · 尊享</div>
                    </div>
                    <div class="unit-body">
                        <h4>奢华尺度标杆 · 四房三卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">端厅设计</span>
                            <span class="tag">双主卧套房</span>
                            <span class="tag">中西双厨</span>
                            <span class="tag">270°视野</span>
                            <span class="tag">独立玄关</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>阔绰尺度：</strong>端厅设计，客厅开间达约7.2米，连接270°转角全景阳台（约20㎡），形成近50㎡的奢华公共空间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>空间布局：</strong>双主卧套房均朝南，均配备独立衣帽间与豪华卫浴；中西双厨设计，中厨封闭式防油烟，西厨与餐厅一体增强互动。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>景观优势：</strong>端厅实现270°城市景观视野，主卧套房享南向全景，书房北向静谧，实现景观资源最大化利用。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>追求极致空间体验、注重家庭社交与私密平衡的高净值家庭，兼顾商务接待与家庭生活双重功能。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>尊享配置：</strong>配备德国旭格系统门窗、法国圣戈班三层中空玻璃；主卫采用杜拉维特智能卫浴与汉斯格雅境雨花洒；全屋配备美国control4智能家居系统。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>典藏级户型解析</h3>
            
            <div class="unit-card" style="max-width: 850px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约228-258㎡</div>
                    <div class="unit-name">丹府 · 典藏</div>
                </div>
                <div class="unit-body">
                    <h4>大平层典范 · 五房三卫</h4>
                    <div style="margin: 20px 0;">
                        <span class="tag">独立电梯厅</span>
                        <span class="tag">总统套房主卧</span>
                        <span class="tag">中西双厨</span>
                        <span class="tag">多功能厅</span>
                        <span class="tag">双景观阳台</span>
                        <span class="tag">私密玄关</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>奢阔尺度：</strong>独立电梯厅设计，私密入户；客厅开间达约8.5米，连接南北双景观阳台，形成超60㎡的殿堂级公共空间。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-crown"></i>
                        <div><strong>总统套房主卧：</strong>约40㎡主卧套房，包含睡眠区、独立衣帽间、豪华卫浴、书房/化妆区，配备德国当代卫浴与美国舒达智能床垫。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-utensils"></i>
                        <div><strong>中西双厨：</strong>中厨房配备嘉格纳全套嵌入式厨电；西厨房配备美诺咖啡机与蒸烤箱；配备独立酒柜与早餐吧台。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-home"></i>
                        <div><strong>多功能空间：</strong>独立多功能厅可根据需求改造为家庭影院、健身房、茶室或儿童游戏室，满足多元生活方式。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>典藏价值：</strong>此户型代表丹华公馆的顶级产品力，不仅满足居住功能，更彰显身份与品味，具备收藏价值。全屋采用意大利IMOLA瓷砖、美国白橡木实木地板、德国汉诺地板等顶级材质。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【精工分析】丹华公馆精装八大系统</h4>
                <p>1. <strong>空调新风系统</strong>：大金VRV中央空调+霍尼韦尔新风除霾系统；<br>
                2. <strong>智能家居系统</strong>：美国control4全屋智能控制+瑞士瑞讯智能安防；<br>
                3. <strong>厨房系统</strong>：德国柏丽/嘉格纳橱柜+嵌入式厨电+3M净水软水系统；<br>
                4. <strong>卫浴系统</strong>：瑞士劳芬/杜拉维特卫浴+汉斯格雅/当代五金+电热毛巾架；<br>
                5. <strong>门窗系统</strong>：德国旭格系统门窗+法国圣戈班三层中空玻璃；<br>
                6. <strong>收纳系统</strong>：瑞士柏丽定制收纳系统+步入式衣帽间；<br>
                7. <strong>灯光系统</strong>：德国欧科/西顿无主灯设计+智能调光系统；<br>
                8. <strong>健康系统</strong>：全屋净水软水+同层排水+防霉防潮处理。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-drafting-compass"></i>
                    </div>
                    <div>
                        <h4>东方美学设计</h4>
                        <p>以"现代东方美学"为设计理念，融合东方建筑意境与现代居住需求，打造具有文化底蕴的居住空间。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <div>
                        <h4>精工材质标准</h4>
                        <p>全干挂石材立面、铜质装饰构件、国际一线品牌精装，从建筑到室内体现精工品质与匠心精神。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div>
                        <h4>超高空间效率</h4>
                        <p>精细化设计减少交通面积浪费，空间使用率达81-84%，在同等面积下实现更多功能空间与舒适尺度。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div>
                        <h4>全明通透设计</h4>
                        <p>所有户型实现南北通透或三面采光，全明设计无暗室，保证充足日照与自然通风，提升居住健康度。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>全屋智能系统</h4>
                        <p>配备美国control4智能家居系统，实现灯光、空调、窗帘、安防等全屋智能控制，打造未来生活体验。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>私密园林社区</h4>
                        <p>低容积率设计，打造三重归家园林景观，实现"大隐于市"的居住体验，保障社区私密性与尊贵感。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于丹华公馆户型特点、城市景观资源及产品价值，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #5d4037;">约98-108㎡ 三房 · 丹韵·雅居</h4>
                <p><strong>建议楼层：</strong>中高楼层（15-25层）</p>
                <p><strong>选择理由：</strong>获得更好的城市景观视野，避免低楼层可能存在的视线干扰，同时享受充足的日照。</p>
                <p><strong>注意事项：</strong>建议选择东南朝向户型，可享受早晨阳光且避免西晒，提升居住舒适度。</p>
                
                <h4 style="margin-top: 28px; color: #5d4037;">约128-138㎡ 四房 · 丹华·臻品</h4>
                <p><strong>景观选择：</strong>高区（25层以上）可享城市全景，中区（15-25层）性价比与视野平衡最佳。</p>
                <p><strong>朝向选择：</strong>南向户型全天采光均匀，视野开阔；东南向户型早晨阳光充足，避免西晒。</p>
                <p><strong>重点关注：</strong>横厅设计的空间感与宽景阳台的景观价值，适合注重生活品质与社交功能的家庭。</p>
                
                <h4 style="margin-top: 28px; color: #5d4037;">约168-178㎡ 四房 · 丹宸·尊享</h4>
                <p><strong>建议楼层：</strong>高楼层（28层以上）</p>
                <p><strong>选择理由：</strong>最大化端厅设计的270°城市景观视野，视野开阔度随楼层显著提升，彰显产品价值。</p>
                <p><strong>重点关注：</strong>端厅户型应优先考虑景观视野最佳的楼栋位置，同时注意避免对视问题。</p>
                
                <h4 style="margin-top: 28px; color: #5d4037;">约228-258㎡ 五房 · 丹府·典藏</h4>
                <p><strong>建议楼层：</strong>次顶层或高区优质楼层</p>
                <p><strong>选择理由：</strong>作为项目典藏级产品，应选择最佳景观视野楼层，最大化独立电梯厅与总统套房主卧的产品价值。</p>
                <p><strong>重点关注：</strong>关注楼栋在社区中的位置，优选无遮挡的楼王位置，同时考虑视野开阔度与私密性平衡。</p>
                
                <h4 style="margin-top: 28px; color: #5d4037;">约328-388㎡ 复式 · 丹玺·云端</h4>
                <p><strong>建议楼层：</strong>顶层复式</p>
                <p><strong>选择理由：</strong>作为项目顶级产品，享受私属空中花园与全景视野，专属电梯直达，实现真正的"云端生活"。</p>
                <p><strong>重点关注：</strong>私属空中花园的设计与景观视野，复式空间的功能分区与动线设计。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>丹华公馆项目容积率仅约2.5，为城央核心区罕见的低密度典藏社区。项目采用全干挂石材立面与Low-E玻璃幕墙，建筑品质卓越。以上建议仅供参考，最终选择需结合实地看房感受、个人偏好、价格及房源实际情况等因素综合考虑。建议优先考虑南向或东南向中高楼层户型，以最大化项目景观资源和产品价值。</p>
            </div>
            
            <div class="complement">
                <h4>【价值分析】丹华公馆户型选择的八大考量维度</h4>
                <p>1. <strong>家庭生命周期匹配度</strong>：根据家庭当前及未来5-10年可能的变化选择户型；<br>
                2. <strong>生活方式与社交需求</strong>：社交型家庭优选宽厅/端厅户型，注重隐私家庭优选卧室分离户型；<br>
                3. <strong>景观价值取向</strong>：高楼层享城市全景，中楼层视野与性价比平衡，低楼层享社区园林；<br>
                4. <strong>精工细节关注度</strong>：关注精装品牌配置、材质细节、智能系统等精工标准；<br>
                5. <strong>功能空间优先级</strong>：根据家庭对书房、衣帽间、多功能房等需求排序选择；<br>
                6. <strong>资产配置与保值性</strong>：结合核心地段价值与精工品质，选择最具保值增值潜力的户型；<br>
                7. <strong>居住健康与舒适度</strong>：关注南北通透、全明设计、新风系统等健康住宅要素；<br>
                8. <strong>文化审美契合度</strong>：现代东方美学设计理念是否与个人审美偏好契合。</p>
            </div>
            
            <div class="highlight-box">
                <h4>丹华公馆典藏价值分析</h4>
                <p>丹华公馆作为城央核心区精工典藏大宅，具备以下核心价值：1) <strong>稀缺地段价值</strong>：占据城市核心稀缺土地资源；2) <strong>精工品质价值</strong>：全干挂石材立面、国际一线品牌精装；3) <strong>设计美学价值</strong>：现代东方美学设计理念；4) <strong>低密度社区价值</strong>：约2.5容积率保障居住舒适度；5) <strong>智能科技价值</strong>：全屋智能家居系统；6) <strong>健康住宅价值</strong>：全屋新风净水系统、同层排水。这六大价值共同构成了丹华公馆的典藏属性与长期保值增值潜力。</p>
            </div>
        </div>
    </div>
`
            },
            "鼎胜金域阳光": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>鼎胜金域阳光项目详解</h1>
            <p class="subtitle">西丽塘朗山畔 · 低密度生态住区 · 留仙洞辐射圈</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>鼎胜金域阳光家园位于南山区西丽珠光北路东侧，背靠塘朗山，面朝大沙河生态走廊。项目定位为低容积率的生态宜居社区，总户数仅312户，是一个规模不大但强调居住舒适度与自然环境融合的楼盘。项目由本土开发商深圳市浩兴投资有限公司开发，由中海物业管理有限公司提供服务。</p>

            <div class="special-note">
                <h4>🌳 核心生态亮点</h4>
                <p>项目的最大卖点在于其得天独厚的自然资源，这在南山新房中较为稀缺：</p>
                <ul class="feature-list">
                    <li><strong>山景与河景：</strong>项目南向塘朗山，西临大沙河生态走廊，北望西丽湖，生态优势突出，被宣传为“户户朝南/东南、户户看山”。</li>
                    <li><strong>低密度设计：</strong>容积率仅约3.34-3.36，远低于深圳许多新建高层住宅，意在营造更宽松的居住环境。</li>
                    <li><strong>准现楼状态：</strong>项目已完全封顶，外立面及园林基本完工，预计2025年至2026年交付，确定性较高。其陶板与玻璃幕墙的外立面设计也旨在更好地引入自然景观。</li>
                </ul>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>稀缺生态：</strong>坐拥塘朗山、大沙河、西丽湖三重景观，自然环境优越。</li>
                    <li><strong>低密社区：</strong>3.34的低容积率与312户的小规模，追求更安静的居住氛围。</li>
                    <li><strong>品质物管：</strong>由全国性品牌“中海物业”提供服务，品质有一定保障。</li>
                    <li><strong>总价优势：</strong>主力为建面约87-130㎡的户型，是进入南山门槛相对较低的选项之一。</li>
                </ul>
            </div>
        </section>

        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市浩兴投资有限公司/深圳市鼎胜投资有限公司（西丽本土企业）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>中海物业管理有限公司</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约10，000.1㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约51，559.61㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>3.34-3.36</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>3栋25层住宅（1栋、2栋A/B座）及1栋3层幼儿园</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>312户（其中可售商品房259套，含53套回迁房）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约350-365个（含充电车位），车位比约1:1.12</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2019-2089年）</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>5.5元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>交付时间</strong></td>
                    <td>预计2025年6月或2026年6月（信息待核实）</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目地处西丽片区，位于“留仙洞总部基地”与“大学城”之间。北侧为大学城创客小镇工业园区，南侧为明亮科技园，东靠塘朗山，西邻珠光北路与大沙河。片区未来受留仙洞总部基地（规划有大量高新技术企业总部）及规划中的西丽高铁枢纽辐射，有一定长期潜力，但当前城市界面仍以工业园区和部分旧村为主。</p>

            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>距离最近的地铁站是<strong>5号线和7号线的“西丽站”</strong>，步行距离约800-900米，需要10-15分钟。7号线“茶光站”也在约1公里范围内。</li>
                <li><strong>自驾：</strong>临近留仙大道、沙河西路、南坪快速等城市主干道，自驾通往科技园、福田中心区等地较为便利。</li>
                <li><strong>高铁：</strong>距离规划中的西丽高铁站约2.1公里。未来该枢纽建成后，长途出行将更便捷。</li>
            </ul>

            <h3>🏫 教育资源</h3>
            <p>项目<strong>自带一所9班公立幼儿园</strong>。根据学区划分，小学对口<strong>南山第二外国语学校（集团）平山小学</strong>，初中可能对口<strong>南二外初中部或深圳大学城丽湖实验学校初中部</strong>。需要注意的是，这些学校在南山区内不属于公认的第一梯队名校，且适龄儿童上学可能需要穿越周边工业区。</p>

            <h3>🛍️ 商业与生活配套</h3>
            <ul class="feature-list">
                <li><strong>社区商业：</strong>项目自带约1500㎡社区底商，可满足基本生活需求。</li>
                <li><strong>大型商场：</strong>距离项目约1-1.8公里范围内有西丽天虹商场、益田假日里（大学城站）、悦方广场等。云城万科里距离稍远。总体依赖外部商业，需短途出行。</li>
                <li><strong>生态休闲：</strong>这是项目最强配套。下楼即是大沙河生态长廊，背靠塘朗山郊野公园，还有西丽湖、深圳野生动物园等环绕，非常适合休闲健身。</li>
            </ul>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>独一无二的生态景观：</strong>山、河、湖景观资源叠加，在南山新房中非常稀缺，居住环境安静清新。</li>
                    <li><strong>低容积率与低密度：</strong>3.34的容积率和小社区规模，意味着更少的户数、更宽松的公共空间和更宁静的社区氛围。</li>
                    <li><strong>品牌物业保障：</strong>引入“中海物业”进行管理，对社区未来的维护和物业服务品质是积极因素。</li>
                    <li><strong>准现楼与性价比：</strong>项目实景可见，烂尾风险低。相较于南山核心区动辄10万+的单价，该项目有一定的价格优势，是上车南山的较低门槛选择。</li>
                </ul>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                <ul class="feature-list">
                    <li><strong>周边城市界面一般：</strong>紧邻大学城创客小镇等工业园区，珠光北路东侧存在农民房，城市更新缓慢，城市形象与南山区整体水平有落差。</li>
                    <li><strong>教育资源非顶尖：</strong>对口的学校在南山区内不属于第一梯队，对于有顶尖学位要求的家庭吸引力有限。</li>
                    <li><strong>商业配套依赖外部：</strong>缺乏大型高端商业综合体，日常购物娱乐需要短距离通勤，便利性打折扣。</li>
                    <li><strong>社区规模小，开发商品牌力弱：</strong>社区仅312户，园林和公共配套空间可能受限。开发商为本土企业，品牌溢价和后期运营能力与头部房企相比有差距。</li>
                    <li><strong>交通便利度中规中矩：</strong>距离地铁站有约800米步行距离，非严格意义上的地铁上盖物业。</li>
                </ul>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>崇尚自然生活的家庭或个人：</strong>对山景、河景等自然资源有强烈偏好，将居住环境静谧性放在首位。</li>
                    <li><strong>在科技园北区或留仙洞工作的上班族：</strong>通勤距离适中，能兼顾工作与生活。</li>
                    <li><strong>对顶级学位需求不迫切的置业者：</strong>更看重居住舒适度和性价比，而非顶尖学区房属性。</li>
                    <li><strong>寻求南山置业门槛的买家：</strong>希望在总预算有限的情况下，购买南山区的正规住宅小区。</li>
                    <li><strong>能接受“现状”的购房者：</strong>不介意当前周边城市界面，且看好西丽片区长期发展潜力。</li>
                </ul>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>鼎胜金域阳光是一个特点与短板都同样鲜明的项目。它最大的价值在于用相对较低的容积率和总价门槛，提供了一个拥有稀缺山河水系景观的居住空间。对于厌倦了高密度都市、渴望亲近自然的购房者来说，它具有独特的吸引力。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>选择该项目，本质上是用周边城市界面的成熟度、商业的便利性和顶级学位的确定性，来换取优越的自然生态环境和更宽松的社区密度。它非常适合将“居住环境”置于购房决策第一顺位的买家。购买前，务必实地感受周边环境、通勤路径和商业配套，确认自己能否接受其现状。</p>
            </div>
            <p>与之前分析的丹华公馆（主打R3不限购和深中学位） 和中海云启源境（主打科技园地段和智能家居） 相比，鼎胜金域阳光开辟了另一条赛道：生态宜居。三者分别代表了“学位通行证”、“核心地段科技住宅”和“自然资源改善盘”，购房者应根据自身最核心的需求进行抉择。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>鼎胜金域阳光</h1>
            <div class="subtitle">阳光社区 · 品质人居 · 幸福家园</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供鼎胜金域阳光项目当前在售户型的全面分析。目前项目主力在售户型包括：约87㎡ A户型、约89㎡ B户型、约122㎡ C户型和约130㎡ D户型。报告将深入解析各户型的设计理念、空间布局与居住价值，帮助您选择最适合自己的阳光之家。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #ff7e00; margin-top: 0;">📍 项目核心价值与在售户型概览</h3>
                <p><strong>鼎胜金域阳光</strong>项目以"阳光、健康、幸福"为设计理念，打造全龄友好型社区。目前项目在售户型覆盖刚需到改善的全产品线，满足不同家庭结构和预算需求。所有户型均采用全明设计，最大化自然采光，营造明亮通透的居住环境。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-home"></i> 四款在售户型</span>
                    <span class="view-badge"><i class="fas fa-sun"></i> 全明户型设计</span>
                    <span class="view-badge"><i class="fas fa-tree"></i> 阳光园林社区</span>
                    <span class="view-badge"><i class="fas fa-child"></i> 全龄友好配套</span>
                    <span class="view-badge"><i class="fas fa-check-circle"></i> 即买即住</span>
                </div>
            </div>
            
            <h2>一、在售户型核心参数总览</h2>
            <p>金域阳光在售户型设计遵循"方正实用、全明通透、高实用率"三大原则，通过科学的空间布局和人性化细节设计，在有限面积内实现功能最大化。所有户型均注重采光通风，打造真正的"阳光户型"。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型编号</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                        <th>适合人群</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>A户型</strong> <span class="sales-status">在售</span></td>
                        <td>约87㎡</td>
                        <td>三房两厅一卫</td>
                        <td>全明设计，方正格局，高实用率，功能三房</td>
                        <td>首次购房者，新婚夫妇，小家庭</td>
                    </tr>
                    <tr>
                        <td><strong>B户型</strong> <span class="sales-status">在售</span></td>
                        <td>约89㎡</td>
                        <td>三房两厅一卫</td>
                        <td>南北通透，双卧朝南，主卧飘窗，空间优化</td>
                        <td>刚需改善家庭，注重性价比</td>
                    </tr>
                    <tr>
                        <td><strong>C户型</strong> <span class="sales-status">在售</span></td>
                        <td>约122㎡</td>
                        <td>四房两厅两卫</td>
                        <td>横厅设计，双阳台，主卧套房，独立家政间</td>
                        <td>改善型家庭，多孩家庭</td>
                    </tr>
                    <tr>
                        <td><strong>D户型</strong> <span class="sales-status">在售</span></td>
                        <td>约130㎡</td>
                        <td>四房两厅两卫</td>
                        <td>南北通透，双套房，宽景阳台，多功能房</td>
                        <td>品质改善，多代同堂家庭</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 项目容积率</div>
                    <div class="parameter-value">约2.8</div>
                    <div class="parameter-desc">适宜密度，保障居住舒适度与社区绿化空间</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 户型采光面</div>
                    <div class="parameter-value">全明设计</div>
                    <div class="parameter-desc">所有在售户型均实现全明设计，无暗室</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 空间使用率</div>
                    <div class="parameter-value">约80-83%</div>
                    <div class="parameter-desc">高使用率设计，空间利用率行业领先</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-arrows-alt-h"></i> 面积跨度</div>
                    <div class="parameter-value">87-130㎡</div>
                    <div class="parameter-desc">覆盖刚需到改善全产品线，选择丰富</div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【产品定位】在售四款户型精准定位</h4>
                <p><span class="type-badge">A户型 87㎡</span> <strong>刚需精品：</strong> 门槛最低的三房户型，总价可控，功能齐全，适合首次购房者。<br>
                <span class="type-badge">B户型 89㎡</span> <strong>刚需升级：</strong> 在A户型基础上优化空间布局，南北通透，居住舒适度更高。<br>
                <span class="type-badge">C户型 122㎡</span> <strong>改善首选：</strong> 横厅设计+四房配置，满足多孩家庭或功能细分需求。<br>
                <span class="type-badge">D户型 130㎡</span> <strong>品质改善：</strong> 双套房设计+宽景阳台，提供更高居住品质与舒适度。</p>
            </div>
            
            <h2>二、在售户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约87㎡</div>
                        <div class="unit-name">A户型 · 阳光悦居</div>
                    </div>
                    <div class="unit-body">
                        <h4>刚需精品 · 三房一卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">全明设计</span>
                            <span class="tag">方正格局</span>
                            <span class="tag">功能三房</span>
                            <span class="tag">高实用率</span>
                            <span class="tag">总价优势</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间设计：</strong>约87㎡实现功能齐全的三房户型，客厅开间约3.5米，方正格局无浪费空间，总价门槛低。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>经典竖厅设计，动静分区；双卧朝南，客厅连接南向阳台，实现良好采光。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fasfa-sun"></i>
                            <div><strong>采光优势：</strong>全明户型设计，每个房间都有自然采光；南向卧室配备飘窗，增加采光面和实用空间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足首次购房者、新婚夫妇或小型家庭的需求，在有限预算内实现三房功能，兼具实用性与经济性。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>此户型是项目的"入门之选"，以最低总价实现三房功能，空间利用率高。厨房U型布局提高操作效率，卫生间干湿分离设计，主卧飘窗增加休闲空间。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89㎡</div>
                        <div class="unit-name">B户型 · 阳光悦享</div>
                    </div>
                    <div class="unit-body">
                        <h4>刚需升级 · 三房一卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">南北通透</span>
                            <span class="tag">双卧朝南</span>
                            <span class="tag">主卧飘窗</span>
                            <span class="tag">空间优化</span>
                            <span class="tag">性价比高</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间优化：</strong>在A户型基础上优化空间布局，实现南北通透，通风效果更好；主卧空间更宽敞舒适。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>格局特点：</strong>双卧朝南，客厅南向连接阳台；厨房与卫生间布局更合理，动线更流畅。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wind"></i>
                            <div><strong>通风优势：</strong>南北通透设计，实现自然穿堂风，居住舒适度更高；全明设计保证充足日照。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>适合注重居住舒适度的刚需改善家庭，在有限预算内获得更好的通风与空间体验。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>升级亮点：</strong>相比A户型，B户型在通风、空间尺度和动线设计上均有优化。虽面积仅增加2㎡，但居住体验提升明显，是刚需客户的高性价比选择。
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约122㎡</div>
                        <div class="unit-name">C户型 · 金域悦景</div>
                    </div>
                    <div class="unit-body">
                        <h4>改善首选 · 四房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">横厅设计</span>
                            <span class="tag">双阳台</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">独立家政间</span>
                            <span class="tag">南北通透</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间设计：</strong>约6米横厅设计，连接南向景观阳台与北向生活阳台，形成约30㎡的开放式公共空间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>格局特点：</strong>主卧套房设计，配备独立卫生间；独立家政间连接生活阳台，实现洁污分区。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光通风：</strong>南北双阳台设计，实现穿堂风；三面采光，客厅与双卧朝南，全天候充足日照。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>功能定位：</strong>满足多孩家庭、需要居家办公空间或注重生活品质的改善型客户，兼顾功能性、舒适性与社交需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>改善标杆：</strong>此户型是项目的"改善标杆"，横厅设计增强家庭互动，四房配置满足功能细分需求，主卧套房提升居住品质，独立家政间体现人性化设计。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约130㎡</div>
                        <div class="unit-name">D户型 · 金域悦澜</div>
                    </div>
                    <div class="unit-body">
                        <h4>品质改善 · 四房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">南北通透</span>
                            <span class="tag">双套房</span>
                            <span class="tag">宽景阳台</span>
                            <span class="tag">多功能房</span>
                            <span class="tag">全明设计</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>奢阔尺度：</strong>客厅开间达约4米，连接约7米宽景阳台，形成宽敞公共空间，适合家庭聚会与社交。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-crown"></i>
                            <div><strong>空间布局：</strong>双套房设计，主卧套房朝南配备独立卫生间；次卧套房可作为老人房或儿童房。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-utensils"></i>
                            <div><strong>功能设计：</strong>独立玄关设计，保障隐私；U型厨房操作高效；多功能房可改造为书房或儿童活动室。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>居住体验：</strong>南北通透，四开间朝南，实现最佳日照与通风；全明设计无暗室，每个空间都明亮舒适。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>品质典范：</strong>此户型是项目的"品质典范"，双套房设计满足多代同堂需求，宽景阳台最大化景观视野，多功能房提供灵活使用空间，是追求高品质生活家庭的理想选择。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>C户型与D户型对比分析</h3>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>对比维度</th>
                        <th>C户型 (约122㎡)</th>
                        <th>D户型 (约130㎡)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>客厅设计</td>
                        <td>横厅设计，空间感强，增强家庭互动</td>
                        <td>传统竖厅，空间分区明确，私密性更好</td>
                    </tr>
                    <tr>
                        <td>卧室配置</td>
                        <td>主卧套房+三间次卧</td>
                        <td>双套房+两间次卧，居住舒适度更高</td>
                    </tr>
                    <tr>
                        <td>阳台设计</td>
                        <td>双阳台（景观+生活），功能分区明确</td>
                        <td>宽景阳台，视野开阔，景观效果好</td>
                    </tr>
                    <tr>
                        <td>适合家庭</td>
                        <td>多孩家庭，需要多功能房间</td>
                        <td>多代同堂，需要双套房配置</td>
                    </tr>
                    <tr>
                        <td>价格区间</td>
                        <td>中等，性价比高</td>
                        <td>偏高，品质改善</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="complement">
                <h4>【选择建议】如何选择适合自己的户型？</h4>
                <p><span class="gold-text">A户型 (87㎡)：</span>适合预算有限的首次购房者、新婚夫妇，总价门槛最低，功能齐全。<br>
                <span class="gold-text">B户型 (89㎡)：</span>适合注重居住舒适度的刚需改善家庭，通风更好，空间优化。<br>
                <span class="gold-text">C户型 (122㎡)：</span>适合多孩家庭、需要书房或客房的功能型改善家庭。<br>
                <span class="gold-text">D户型 (130㎡)：</span>适合多代同堂、追求居住品质的品质改善家庭。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div>
                        <h4>全明阳光设计</h4>
                        <p>所有在售户型实现全明设计，无暗室，最大化自然采光，打造真正意义上的"阳光户型"，提升居住健康度与舒适度。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div>
                        <h4>高实用率设计</h4>
                        <p>通过精细化设计减少交通面积浪费，空间实用率达80-83%，在同等面积下实现更多功能空间，性价比突出。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div>
                        <h4>优良通风性能</h4>
                        <p>B、C、D户型均实现南北通透，结合大面宽短进深布局，实现自然穿堂风，减少空调依赖，节能舒适。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-child"></i>
                    </div>
                    <div>
                        <h4>全产品线覆盖</h4>
                        <p>四款在售户型覆盖87-130㎡，从刚需到改善全产品线，满足不同家庭结构和预算需求，选择丰富。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>方正实用格局</h4>
                        <p>所有户型格局方正实用，空间利用率高，家具摆放容易，减少空间浪费，符合中国人居住习惯。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>社区环境融合</h4>
                        <p>户型设计与社区阳光园林相融合，通过阳台、飘窗、玻璃窗等设计元素，将室外景观引入室内。</p>
                    </div>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <h4>收纳系统优化</h4>
                    <p>全屋系统化收纳设计，玄关柜、衣柜、橱柜、阳台柜一体化设计，解决家庭收纳痛点。</p>
                </div>
                <div class="feature-item">
                    <h4>智能家居预留</h4>
                    <p>全屋预留智能家居接口，支持智能灯光、窗帘、安防等系统扩展，适应未来生活需求。</p>
                </div>
                <div class="feature-item">
                    <h4>健康住宅标准</h4>
                    <p>采用环保建材，配备新风系统（部分户型），同层排水设计，打造健康居住环境。</p>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于金域阳光在售户型特点、日照分析与社区规划，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #ff7e00;">约87㎡ A户型 · 阳光悦居</h4>
                <p><strong>建议楼层：</strong>中低楼层（6-15层）</p>
                <p><strong>选择理由：</strong>性价比高，适合预算有限的首次购房者；中低楼层便于使用楼梯，减少等电梯时间。</p>
                <p><strong>重点关注：</strong>建议选择南向户型，保证充足日照；关注楼间距，避免低楼层采光受影响。</p>
                
                <h4 style="margin-top: 28px; color: #ff7e00;">约89㎡ B户型 · 阳光悦享</h4>
                <p><strong>建议楼层：</strong>中楼层（10-20层）</p>
                <p><strong>选择理由：</strong>视野与性价比平衡最佳，既能享受社区园林景观，又有良好通风效果。</p>
                <p><strong>重点关注：</strong>优先选择南北通透的楼栋位置，最大化通风优势；南向户型日照最佳。</p>
                
                <h4 style="margin-top: 28px; color: #ff7e00;">约122㎡ C户型 · 金域悦景</h4>
                <p><strong>建议楼层：</strong>中高楼层（15-25层）</p>
                <p><strong>选择理由：</strong>横厅设计需要良好视野，中高楼层视野开阔，采光充足，能最大化横厅的空间感。</p>
                <p><strong>重点关注：</strong>横厅的空间体验与双阳台的实用性，适合注重生活品质与社交功能的改善家庭。</p>
                
                <h4 style="margin-top: 28px; color: #ff7e00;">约130㎡ D户型 · 金域悦澜</h4>
                <p><strong>建议楼层：</strong>中高楼层（18-28层）</p>
                <p><strong>选择理由：</strong>改善型产品需要良好视野与日照，中高楼层能最大化宽景阳台的景观价值与采光效果。</p>
                <p><strong>重点关注：</strong>双套房设计的实用性，南北通透的通风效果，以及多功能房的灵活使用。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>鼎胜金域阳光项目容积率约2.8，为适宜的居住密度。项目注重日照分析，通过科学楼栋布局保证每户充足日照。以上建议仅供参考，最终选择需结合实地看房感受、个人偏好、价格及房源实际情况等因素综合考虑。建议优先考虑南向或东南向户型，以最大化项目的"阳光价值"。</p>
            </div>
            
            <div class="complement">
                <h4>【决策指南】金域阳光在售户型选择四大步骤</h4>
                <p>1. <strong>明确预算范围</strong>：根据总价承受能力确定可选户型范围；<br>
                2. <strong>分析家庭需求</strong>：根据家庭成员数量、年龄结构、生活习惯确定所需房间数量和功能；<br>
                3. <strong>比较户型特点</strong>：结合本报告分析，对比各户型优缺点，选择最适合的户型；<br>
                4. <strong>实地体验感受</strong>：参观样板间，实地感受空间尺度、采光通风等实际体验。</p>
            </div>
            
            <div class="highlight-box">
                <h4>金域阳光在售户型价值总结</h4>
                <p><span class="gold-text">A户型 (87㎡)：</span>门槛最低，功能齐全，适合首次购房者，投资自住皆宜。<br>
                <span class="gold-text">B户型 (89㎡)：</span>空间优化，通风良好，性价比高，刚需改善优选。<br>
                <span class="gold-text">C户型 (122㎡)：</span>横厅设计，四房配置，功能全面，改善家庭首选。<br>
                <span class="gold-text">D户型 (130㎡)：</span>双套房设计，品质标杆，适合追求高品质生活的家庭。</p>
                <p style="margin-top: 15px;">所有户型均秉承"阳光社区"设计理念，全明设计，高实用率，结合社区全龄配套与智慧系统，打造健康幸福的居住环境。</p>
            </div>
        </div>
    </div>
`
            },
            "方直珑樾山": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>方直珑樾山项目详解</h1>
            <p class="subtitle">深圳城央 · 塘朗山南麓 · 地铁口低密山景豪宅</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>方直珑樾山位于南山区北环大道以北、塘朗山南麓，是一个定位为“城央低密山居豪宅”的项目。项目最大特点是同时享有地铁口的便捷与塘朗山的一线山景，通过低容积率、大师设计、专梯入户、私家园林等元素，旨在为高端改善型家庭打造一个不离繁华而享静谧的山居住所。项目已于2024年11月完成毛坯交付。</p>

            <div class="special-note">
                <h4>🏔️ 核心定位：地铁口山景豪宅</h4>
                <p>项目精准切入了一个细分市场：追求顶级居住环境，又不愿牺牲城市通勤便利的高净值人群。其核心价值在于：</p>
                <ul class="feature-list">
                    <li><strong>“零距离亲山”与“零距离地铁”的结合：</strong>距离地铁7号线深云站约50-150米，是深圳罕见的真正“亲山地铁口物业”。业主可快速通达全城，归家即入山林。</li>
                    <li><strong>国际大师手笔：</strong>项目由设计过香港“傲璇”等顶级豪宅的吕元祥建筑师事务所操刀建筑设计，公区园林也由其设计，旨在对标国际豪宅标准。</li>
                    <li><strong>现房实景兑现：</strong>所有楼栋已全面交付，园林、标志性的台地式无边际泳池等配套设施均已实景呈现，购房确定性极高。</li>
                </ul>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>绝版地段组合：</strong>塘朗山南麓一线山景，与地铁7号线深云站（C出口）步行仅约3分钟，兼得自然与繁华。</li>
                    <li><strong>低密纯粹社区：</strong>容积率约3.62，规划520户（含回迁房），在城央已属低密度。主力为大户型，社区圈层相对纯粹。</li>
                    <li><strong>豪宅级设计与配置：</strong>由香港吕元祥建筑师事务所设计，外立面采用玻璃幕墙与铝板。拥有“五进藏院”中式园林、台地式无边际泳池、双会所等高端配套。</li>
                    <li><strong>专梯入户与高实用率：</strong>采用两梯两户/三户设计，并实现专梯入户，保障私密性。大户型使用率可达约90%。</li>
                </ul>
            </div>
        </section>

        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市龙廷房地产开发有限公司</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>方直“心生活”物业</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约2.13万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约11.36万-11.52万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>3.62</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>4栋高层住宅（24-32层）及10户商业别墅</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>520户（其中商品房约347套，回迁房约173套）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约635个，车位比约1:1.3</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>8.7-9.5元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>交付状态</strong></td>
                    <td>已全面交付（毛坯交付时间为2024年11月）</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与周边</h3>
            <p>项目位于南山区桃源街道，北环大道北侧，塘朗山南麓。地处安托山板块边缘，被形容为“左手香蜜湖，右手华侨城”，周边环绕六大总部基地。但需注意，项目具体位置在北环大道以北，与主干道南侧的核心区存在一定的物理和心理隔阂。</p>

            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>项目最大交通优势。距离7号线深云站C出口仅约50-150米，是名副其实的地铁上盖物业，步行3分钟内可达。通过7号线可便捷换乘，通达车公庙、福田、南山等核心区。</li>
                <li><strong>自驾：</strong>紧邻北环大道、南坪快速，未来侨城东路北延线开通后，通往南山的路径将更便捷。但北环大道也可能带来噪音影响。</li>
            </ul>

            <h3>🏫 教育资源</h3>
            <p>项目周边教育资源尚可，但非顶尖学区。附近有深圳市大学实验幼儿园香瑞分园、深圳市教育幼儿园深云分校等。中小学方面，提及哈工大深圳实验学校、中科先进技术院实验学校（九年一贯制）等。这些学校有一定实力，但在南山区不属于第一梯队顶尖名校。</p>

            <h3>🛍️ 商业与生活配套</h3>
            <ul class="feature-list">
                <li><strong>主要劣势：</strong>缺乏大型集中商业配套是项目公认的短板。自身仅有少量主题商业（如私厨、健身会所），主要依赖周边社区底商（如深云村的福到来购物中心）。</li>
                <li><strong>外部商业：</strong>需驾车或乘地铁前往约15分钟车程内的万象天地、益田假日广场、山姆会员店（福田）等大型商业中心。</li>
                <li><strong>生态与人文：</strong>这是项目的强项。背靠塘朗山郊野公园，享有天然氧吧。周边还有安托山博物馆群（规划中）、华侨城创意文化园等人文资源。</li>
            </ul>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>不可复制的稀缺性：</strong>“地铁口+一线山景”的组合在深圳城央极为罕见，提供了独一无二的生活体验。</li>
                    <li><strong>顶级的产品力与设计：</strong>国际大师设计、高品质用材（玻璃幕墙+铝板）、专梯入户、高实用率、台地式园林与泳池等，产品本身硬件素质突出。</li>
                    <li><strong>出行极度便利：</strong>7号线深云站近在咫尺，对依赖地铁通勤的买家吸引力巨大。</li>
                    <li><strong>现房销售，风险低：</strong>实景园林、外立面、公共区域全部可见，即买即住或即收楼，避免了期房的不确定性。</li>
                    <li><strong>低密度宜居环境：</strong>3.62的容积率在当下新房市场中已属低密，社区居住氛围更舒适。</li>
                </ul>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                <ul class="feature-list">
                    <li><strong>商业配套严重缺失：</strong>日常生活购物不便，是项目最大的短板，需依赖外部或远距离出行。</li>
                    <li><strong>区位存在“割裂感”：</strong>位于北环大道以北，与南山、福田核心区存在心理和物理上的隔离，城市界面和区位价值感不及南侧。</li>
                    <li><strong>噪音与朝向问题：</strong>临近北环大道和隧道，部分户型可能受交通噪音影响。同时，因背山而建，部分朝西北的户型可能日照和通风不佳。</li>
                    <li><strong>学区优势不突出：</strong>对口学校在南山区内并非顶尖，对于有强烈名校需求的家庭吸引力有限。</li>
                    <li><strong>开发商品牌力相对较弱：</strong>与招商、华润、万科等一线品牌相比，方直集团在深圳高端市场的号召力和口碑积累稍显不足。</li>
                </ul>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>追求山居生活的高净值改善家庭：</strong>将居住环境的静谧、自然景观放在首位，能接受为稀缺山景支付溢价。</li>
                    <li><strong>依赖地铁通勤的精英人士：</strong>在福田、南山等地工作，看重地铁出行的绝对便利性，追求职住平衡。</li>
                    <li><strong>注重产品品质与私密性的买家：</strong>欣赏国际级设计、专梯入户、高品质园林等硬件，对社区纯粹性有要求。</li>
                    <li><strong>“现房主义者”或厌恶期房风险的购房者：</strong>希望所见即所得，立即享受成熟的社区环境。</li>
                    <li><strong>对大型商业配套依赖度不高的家庭：</strong>生活模式相对简单，或习惯驾车前往商圈消费。</li>
                </ul>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>方直珑樾山是一个优点和缺点都极其鲜明的“偏科生”型豪宅项目。它并非全能选手，而是将其核心资源（山景和地铁）以及产品力做到了区域内的极致。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>选择该项目，意味着您高度认同 “城央山居”+“地铁便利” 这一价值组合，并愿意为此接受其商业配套匮乏、区位略显孤立的短板。它非常适合将自然生态和通勤效率置于购房决策顶端的改善型买家。建议务必实地感受不同楼栋、户型的噪音、日照和景观情况，并体验一次从项目到常用商圈的出行，判断配套短板是否在可接受范围内。</p>
            </div>
            <p>与西丽其他项目对比：它不像丹华公馆主打总价门槛和学位，也不像鼎胜金域阳光侧重生态性价比，更不像中海云启源境位于成熟居住区。方直珑樾山走的是 “精品山景豪宅” 路线，用更高的单价和总价，换取更顶级的设计、更私密的体验和“出则繁华，入则宁静”的特定生活方式。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>方直珑樾山</h1>
            <div class="subtitle">深圳南山 · 半山豪宅 · 山景大宅</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供方直珑樾山项目的全面户型分析。项目位于南山区塘朗山南麓，定位为半山豪宅，拥有稀缺的山景资源。报告将深入解析目前在售的三大主力户型（约120㎡、193㎡、268㎡）的设计理念、空间价值与居住体验，为您提供专业的户型分析参考。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #2d5a3e; margin-top: 0;">📍 项目核心价值与稀缺属性</h3>
                <p><strong>方直珑樾山</strong>位于南山区北环大道北侧、塘朗山南麓，紧邻地铁7号线深云站，是深圳罕见的"地铁上盖半山豪宅"。项目背靠塘朗山，坐拥稀缺的山景资源，由香港吕元祥建筑师事务所设计，采用玻璃幕墙+铝板外立面。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-mountain"></i> 塘朗山山景资源</span>
                    <span class="view-badge"><i class="fas fa-subway"></i> 地铁7号线上盖</span>
                    <span class="view-badge"><i class="fas fa-building"></i> 全玻璃幕墙立面</span>
                    <span class="view-badge"><i class="fas fa-tree"></i> 台地式立体园林</span>
                </div>
            </div>
            
            <h2>一、在售户型核心参数总览</h2>
            <p>方直珑樾山目前主力在售三大户型系列，覆盖从改善到终极改善的全产品线。项目采用玻璃幕墙+铝板外立面，所有户型均注重景观视野最大化，打造真正的"山景豪宅"。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                        <th>主要特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>约120㎡</td>
                        <td>三房两厅两卫</td>
                        <td>双龙抱珠格局，7.1米超宽阳台，三开间朝南</td>
                        <td>入门级改善，山景视野，功能齐全</td>
                    </tr>
                    <tr>
                        <td>约193-204㎡</td>
                        <td>四房两厅三卫</td>
                        <td>横厅设计，270°环幕山景，双套房配置</td>
                        <td>品质改善，环幕视野，空间阔绰</td>
                    </tr>
                    <tr>
                        <td>约268㎡</td>
                        <td>五房两厅四卫</td>
                        <td>专梯入户，南北四阳台，45㎡主卧套房</td>
                        <td>终极改善，私密尊贵，功能完善</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 项目容积率</div>
                    <div class="parameter-value">3.62</div>
                    <div class="parameter-desc">由4栋高层住宅及10户商业别墅组成</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-car"></i> 车位配比</div>
                    <div class="parameter-value">1:1.3</div>
                    <div class="parameter-desc">总计692个车位，满足高端社区需求</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-ruler-combined"></i> 户型使用率</div>
                    <div class="parameter-value">74-90%</div>
                    <div class="parameter-desc">120㎡户型约74-78%，大平层可达90%</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-shield-alt"></i> 物业管理费</div>
                    <div class="parameter-value">9.5元/㎡/月</div>
                    <div class="parameter-desc">由方直物业提供管家服务</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约120㎡</div>
                        <div class="unit-name">三房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>山景改善户型 · 三房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">双龙抱珠格局</span>
                            <span class="tag">7.1米超宽阳台</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">正南朝向</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>空间设计：</strong>采用"双龙抱珠"经典格局，中庭为客餐厅，主次卧分布于两侧，动静分区明确。正南朝向，三开间朝南，南向面宽超10米。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>景观优势：</strong>7.1米超长景观阳台连接客厅与次卧，70%以上户型可远眺塘朗山景。东北向可俯瞰小区园林及山景，20层以上视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>功能细节：</strong>主卧套房设计，带观景浴室；厨房U型布局，操作动线流畅；客卫干湿分离。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>适合人群：</strong>追求山景资源、注重居住品质的改善家庭，三口之家或三代同堂的首次豪宅置业者。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>户型特点：</strong>120㎡户型有横厅和竖厅两种设计。横厅户型看山景，视野开阔；竖厅户型更靠近北环大道。建议优先选择横厅、中高楼层户型，以最大化山景价值。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约193-204㎡</div>
                        <div class="unit-name">四房两厅三卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>环幕山景户型 · 四房三卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">270°环幕视野</span>
                            <span class="tag">横厅设计</span>
                            <span class="tag">双套房配置</span>
                            <span class="tag">3.6米层高</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间尺度：</strong>横厅设计让客餐厅一体化空间达约40㎡，连接南向7.5米阳台与北向生活阳台，形成南北通透的"空气对流轴"。层高3.6米，空间感开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-binoculars"></i>
                            <div><strong>全景视野：</strong>270°环幕视野是核心亮点，客厅、主卧、次卧均能直面塘朗山景。部分高层可同时眺望安托山与深圳湾海岸线，实现"三山一海"景观。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>功能配置：</strong>四房三卫设计，其中两个为套房（主卧+老人房），满足多代同住需求。主卧套房约35㎡，配备独立卫浴（带浴缸+双台盆）和转角飘窗。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>适合人群：</strong>追求空间阔度与顶级景观资源的高净值家庭，注重社交与私密平衡的商务人士，多代同堂的品质改善需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>户型定位：</strong>此户型是项目从"改善"到"豪宅"的进阶产品，270°环幕山景、3.6米层高、双套房配置，提供了接近深圳湾豪宅的空间体验。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>顶阶大平层户型解析</h3>
            
            <div class="unit-card" style="max-width: 850px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约268㎡</div>
                    <div class="unit-name">五房两厅四卫</div>
                </div>
                <div class="unit-body">
                    <h4>楼王大平层 · 五房四卫</h4>
                    <div style="margin: 20px 0;">
                        <span class="tag">专梯入户</span>
                        <span class="tag">南北四阳台</span>
                        <span class="tag">三套房设计</span>
                        <span class="tag">45㎡主卧套房</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>奢阔尺度：</strong>五房四卫三套房设计，公共区域面积超60㎡。南北四阳台设计（南向双阳台+北向双阳台），形成"双轴通风+多面观景"格局。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-crown"></i>
                        <div><strong>私密尊贵：</strong>专梯入户设计，电梯厅独立使用，私密性极强。动静分区极致划分，公共区域与卧室完全分离。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观巅峰：</strong>270°无遮挡山景+部分海景，北向阳台观塘朗山，南向阳台望安托山，高层可远眺深圳湾。主卧套房书房连接北向阳台，办公时沉浸在山林绿意中。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-utensils"></i>
                        <div><strong>功能完善：</strong>中厨+西厨分离，西厨连接岛台与横厅，适合举办家庭私宴。保姆房带独立卫浴和专用通道，与主人动线分离。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>产品定位：</strong>此户型是项目的"楼王产品"，专梯入户、南北四阳台、45㎡主卧套房等配置，对标深圳湾顶级豪宅。适合高净值人群的终极改善需求。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【设计特点】方直珑樾山产品亮点</h4>
                <p>1. <strong>国际大师设计：</strong> 香港吕元祥建筑师事务所操刀，玻璃幕墙+铝板外立面。<br>
                2. <strong>台地式立体园林：</strong> 五进藏院格局，打造"流水森林"无边际泳池，深圳首创的台地式山林泳池。<br>
                3. <strong>全冠移植绿植：</strong> 园林苗种均来自自有苗场，所有树种100%全冠移植，保证园林即时效果。<br>
                4. <strong>文化区位优势：</strong> 位于安托山博物馆群核心辐射区，人文氛围浓厚。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div>
                        <h4>稀缺山景资源</h4>
                        <p>背靠塘朗山，北望安托山、燕晗山，部分高层可远眺深圳湾，坐拥"三山一海"的稀缺景观资源，是项目最大价值点。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>地铁上盖便利</h4>
                        <p>紧邻地铁7号线深云站，真正的地铁上盖豪宅，兼顾山居静谧与都市繁华。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>国际豪宅标准</h4>
                        <p>香港吕元祥建筑师事务所设计，玻璃幕墙+铝板外立面，3.6米层高（大户型），专梯入户，对标豪宅品质。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>创新园林设计</h4>
                        <p>五进藏院格局，台地式立体园林，深圳首创的"流水森林"无边际泳池，营造独特的山居体验。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-university"></i>
                    </div>
                    <div>
                        <h4>人文区位价值</h4>
                        <p>位于安托山博物馆群核心区，周边有哈工大深圳实验学校等教育资源，兼具自然与人文价值。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div>
                        <h4>视野最大化设计</h4>
                        <p>所有户型均注重景观视野，7.1米超宽阳台、270°环幕视野、南北四阳台等设计，最大化引入山景。</p>
                    </div>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <h4>现房/准现房优势</h4>
                    <p>项目毛坯已于2024年11月交付，精装2025年交付，即买即住或短期等待，减少期房不确定性。</p>
                </div>
                <div class="feature-item">
                    <h4>圈层纯粹性</h4>
                    <p>总户数520套（含回迁），主力户型120-268㎡，购房门槛较高，保障社区圈层纯粹性。</p>
                </div>
                <div class="feature-item">
                    <h4>户型多样性</h4>
                    <p>覆盖120-268㎡面积段，满足从入门级改善到终极改善的不同需求，选择丰富。</p>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择建议</h4>
                <p>基于方直珑樾山户型特点、山景资源及项目规划，结合当前销售阶段，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #2d5a3e;">约120㎡ 三房</h4>
                <p><strong>建议楼层：</strong>中高楼层（15层及以上）</p>
                <p><strong>选择理由：</strong>最大化山景视野，20层以上视野开阔，可俯瞰小区园林及塘朗山景。避免低楼层可能存在的视线遮挡。</p>
                <p><strong>户型选择：</strong>优先选择横厅户型（看山），避免竖厅户型（靠近北环大道）。正南朝向最佳，三开间朝南采光充足。</p>
                
                <h4 style="margin-top: 28px; color: #2d5a3e;">约193-204㎡ 四房</h4>
                <p><strong>建议楼层：</strong>高楼层（20层以上）</p>
                <p><strong>选择理由：</strong>270°环幕视野需要足够高度，高楼层可同时眺望安托山与深圳湾海岸线，实现景观价值最大化。</p>
                <p><strong>重点关注：</strong>横厅的空间体验与山景视野，双套房配置的实用性，3.6米层高的空间感。</p>
                
                <h4 style="margin-top: 28px; color: #2d5a3e;">约268㎡ 五房</h4>
                <p><strong>建议楼层：</strong>次顶层或高区优质楼层</p>
                <p><strong>选择理由：</strong>作为楼王产品，应选择最佳景观视野楼层，实现"三山一海"全景视野，最大化专梯入户、南北四阳台的产品价值。</p>
                <p><strong>重点关注：</strong>专梯入户的私密性，45㎡主卧套房的舒适度，中西双厨的功能性。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>景观价值优先：</strong>项目最大价值点在于山景，应优先选择视野好、看山角度佳的户型与楼层。对于噪音敏感的客户应避开靠近北环大道的楼栋和低楼层，选择社区中心的户型。</p>
            </div>
            
            <div class="complement">
                <h4>【价值分析】方直珑樾山户型选择考量维度</h4>
                <p>1. <strong>景观价值优先级：</strong> 项目最大价值点在于山景，应优先选择视野好、看山角度佳的户型与楼层；<br>
                2. <strong>家庭结构匹配：</strong> 根据家庭人口、年龄结构选择合适的房间数量和套房配置；<br>
                3. <strong>功能需求分析：</strong> 评估对书房、衣帽间、多功能房等空间的需求；<br>
                4. <strong>空间尺度要求：</strong> 根据对客厅开阔度、卧室舒适度等空间要求选择户型面积；<br>
                5. <strong>预算与价值平衡：</strong> 结合预算选择最具性价比的户型与楼层组合。</p>
            </div>
            
            <div class="highlight-box">
                <h4>方直珑樾山项目总结</h4>
                <p><strong>核心优势：</strong> 稀缺山景资源与地铁上盖的独特组合，国际大师设计与豪宅标准品质，现房/准现房交付，安托山人文区位的长期价值。</p>
                <p><strong>户型特点：</strong> <strong>120㎡户型</strong>适合追求山景资源的改善家庭；<strong>193-204㎡户型</strong>是项目的进阶选择，270°环幕山景体验突出；<strong>268㎡户型</strong>是终极改善选择，配置对标顶级豪宅。</p>
                <p style="margin-top: 15px;">项目重新定义了深圳半山豪宅的标准，为追求山居生活又不愿远离都市繁华的高净值人群，提供了独特的置业选择。</p>
            </div>
        </div>
    </div>
`
            },
            "汉园茗院": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>汉园茗院项目详解</h1>
            <p class="subtitle">西丽大学城 · 地铁口准现房 · 山河景观大社区</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>汉园茗院位于南山区西丽大学城片区的核心地段，是一个分A、B两区开发的大型住宅社区。项目由打造过热盘“海德园”的深圳市汉园房地产开发有限公司开发，自2019年启动以来备受关注，现已以准现房状态入市。其最显著的特点是紧邻地铁5号线长岭陂站，同时享有塘朗山和大沙河的双重生态景观，定位为集交通便利、自然景观与成熟配套于一体的改善型住宅。</p>

            <div class="special-note">
                <h4>🏙️ 核心特点：双区开发，定位清晰</h4>
                <p>项目分A、B两区，产品定位和社区构成有所不同：</p>
                <ul class="feature-list">
                    <li><strong>A区：</strong>规模较大，包含商品住宅、保障房、幼儿园及社区商业，是一个综合性社区，计划精装交付。</li>
                    <li><strong>B区：</strong>为纯商品住宅组团，无保障房，圈层相对纯粹，毛坯交付，部分楼王单位层高可达3.6米，定位更高。</li>
                    <li><strong>准现房优势：</strong>项目楼体已基本建成，外立面呈现，极大地降低了购房的期房风险，所见即所得。</li>
                </ul>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>地铁零距离：</strong>距离5号线长岭陂站A1出口仅约80-150米，是真正的“地铁上盖”物业，一站直达深圳北站。</li>
                    <li><strong>稀缺山河景观：</strong>东望塘朗山，西临大沙河生态走廊，自然环境优越。</li>
                    <li><strong>成熟商圈环绕：</strong>自身配建商业，且周边1-2站地铁内拥有宝能环球汇、塘朗城广场、益田假日里等多个大型综合体。</li>
                    <li><strong>开发商口碑背书：</strong>与备受市场追捧的“海德园”系出同门，产品品质有一定预期。</li>
                </ul>
            </div>
        </section>

        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市汉园房地产开发有限公司（新润园集团）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>总占地约3.2万-3.25万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约27.7万-28万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>A区约6.58， B区约6.14</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>A区5栋45-46层超高层；B区3栋39-45层超高层</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>总计约1400余套（A区1014户，B区474户）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>A区1088个（约1:1.07），B区450个（约1:0.95）</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>B区约5.6元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>交付状态</strong></td>
                    <td>准现房。A区计划2025年4月精装交付，B区计划2025年6月毛坯交付</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目地处西丽湖国际科教城核心，南方科技大学东侧。周边环绕留仙洞总部基地、西丽国际科教城、深圳北站总部基地三大产业高地，远期发展潜力与片区能级受到西丽高铁枢纽（规划中）等重大基建的利好。</p>

            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>项目最大亮点。紧邻5号线长岭陂站，步行约1-3分钟。一站可达深圳北站（换乘4/6号线及高铁），三站达西丽站（换乘7号线），四站达留仙洞总部基地（换乘13号线）。</li>
                <li><strong>自驾：</strong>门口即为主干道留仙大道，可快速接驳南坪快速、福龙路、北环大道，通达全城。</li>
                <li><strong>高铁：</strong>距离规划中的西丽高铁枢纽（规模将超深圳北站）不远，未来是重要的轨道交通节点。</li>
            </ul>

            <h3>🏫 教育资源</h3>
            <p>项目配建一所9班幼儿园。根据共享学区划分，小学可选择南科大实验一小、南科大实验二小、深大附属实验小学等；中学对口哈工大实验学校、龙珠学校初中部、南山外国语桃源中学等。教育资源较为丰富，但非深圳顶尖名校。此外，项目南侧紧邻深圳道尔顿新华公学（国际学校）。</p>

            <h3>🛍️ 商业与生活配套</h3>
            <ul class="feature-list">
                <li><strong>社区商业：</strong>A区规划有约4650㎡商业及底商，B区无集中商业。</li>
                <li><strong>大型商场：</strong>依赖周边成熟商业。一路之隔有京基御景峯约3.7万㎡集中商业；地铁一站可达塘朗站，拥有宝能环球汇（约14万㎡）、塘朗城广场（约6万㎡）；地铁两站有益田假日里（逾5万㎡）。</li>
                <li><strong>生态休闲：</strong>坐拥塘朗山公园、大沙河生态长廊、长岭陂水库、西丽湖等优质自然资源，适宜休闲健身。</li>
            </ul>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>无可比拟的交通便利性：</strong>与地铁站近乎零距离，对于依赖轨道交通通勤的买家而言是核心吸引力，通往深圳北站、西丽总部基地、科技园等地极为便捷。</li>
                    <li><strong>准现房，风险低：</strong>楼体、外立面、社区轮廓均已呈现，大大降低了交付标准和工期的不确定性，购买更安心。</li>
                    <li><strong>商业配套成熟且多元：</strong>并非孤盘，周边多个已开业的大型商业综合体通过地铁高效连接，购物娱乐选择丰富。</li>
                    <li><strong>自然环境优越：</strong>同时拥有山景和河景资源，在主打交通便利的楼盘中较为难得。</li>
                    <li><strong>B区圈层相对纯粹：</strong>B区为纯商品住宅，无保障房混杂，社区纯粹度更高。</li>
                </ul>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                <ul class="feature-list">
                    <li><strong>高容积率与高密度：</strong>A区容积率高达6.58，社区户数超过千户，人口密度大，居住的静谧性和公共资源（如电梯、花园）的分享可能面临压力。</li>
                    <li><strong>混合社区属性：</strong>A区内包含保障房和回迁房，与商品房共享社区公共配套，可能对部分追求纯粹圈层的改善买家产生影响。</li>
                    <li><strong>周边城市界面有待提升：</strong>项目位于南山边缘，周边存在部分旧村和待开发地块，城市面貌不够现代化和整洁。</li>
                    <li><strong>部分户型存在硬伤：</strong>根据资料，部分靠近马路和地铁的户型可能受噪音影响较大。</li>
                    <li><strong>教育资源非顶级：</strong>学区内的学校在南山区属于中等偏上水平，并非第一梯队的顶尖名校。</li>
                </ul>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>极度依赖地铁通勤的上班族：</strong>在福田、南山科技园、留仙洞总部基地等地工作，将轨道交通便利性作为首要考虑因素的购房者。</li>
                    <li><strong>看重即买即住/低风险的买家：</strong>对期房交付质量心存顾虑，偏好准现房或现房的确定性。</li>
                    <li><strong>需要成熟商业配套的家庭：</strong>家庭生活对大型商场、多样化餐饮娱乐有较强依赖度。</li>
                    <li><strong>兼顾自然与便利的改善家庭：</strong>希望小区外有自然景观资源，同时又不愿牺牲城市生活便利度的家庭。</li>
                    <li><strong>认可西丽片区远期发展的投资者：</strong>看好西丽高铁新城、留仙洞总部基地的长期规划价值，进行资产配置。</li>
                </ul>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>汉园茗院是一个优缺点分明、定位精准的项目。它完美地诠释了“地铁口物业”的价值，将交通便利性做到了极致，并以此为核心，叠加了成熟的商圈和不错的自然资源。对于将通勤效率置于首位的购房者来说，它具有难以替代的吸引力。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>选择该项目，意味着您高度认同 “地铁便利+成熟配套” 的核心价值，并愿意为此接受其高容积率、混合社区等方面可能带来的妥协。在选择时，建议优先考虑B区的纯商品住宅，并务必实地感受不同楼栋、楼层对噪音（来自留仙大道和地铁）的隔绝情况，以及社区内部花园的尺度感。同时，需根据家庭需求，仔细权衡A区（精装、含保障房）和B区（毛坯、纯商品房）的差异。</p>
            </div>
            <p>与西丽其他项目对比：它不像丹华公馆以总价和特殊产权取胜，也不像鼎胜金域阳光主打低密山居，更不像方直珑樾山追求城央山景豪宅的调性。汉园茗院走的是 “务实型地铁大盘” 路线，用强大的交通和商业配套，服务于最广泛的、追求生活效率与便利的改善型家庭。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>汉园茗院</h1>
            <div class="subtitle">南山西丽 · 地铁口准现楼 · 大学城人文住区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供汉园茗院项目的全面户型分析。项目位于南山西丽大学城片区，紧邻地铁5号线长岭陂站，为片区稀有的地铁口准现楼项目。报告将深入解析目前在售的主力户型（约110-112㎡、约117-121㎡、约158-168㎡、约186-187㎡）的设计特点、功能定位与价值分析，为您提供客观的参考。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #8b4513; margin-top: 0;">📍 项目核心价值与区位特点</h3>
                <p><strong>汉园茗院</strong>位于南山区西丽留仙大道南侧，距离地铁5号线长岭陂站仅约150米，是名副其实的地铁上盖物业。项目分为A、B两区开发，毗邻南方科技大学、清华大学深圳国际研究生院等高等学府，坐拥浓厚的科教人文氛围。项目最大特点是所有楼栋均已封顶，为准现楼销售，预计2025年上半年交付，极大降低了购房者的交付风险。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-subway"></i> 地铁5号线上盖</span>
                    <span class="view-badge"><i class="fas fa-graduation-cap"></i> 大学城人文住区</span>
                    <span class="view-badge"><i class="fas fa-home"></i> 准现楼发售</span>
                    <span class="view-badge"><i class="fas fa-tree"></i> 近塘朗山郊野公园</span>
                    <span class="view-badge"><i class="fas fa-school"></i> 自带幼儿园</span>
                </div>
            </div>
            
            <h2>一、在售户型核心参数总览</h2>
            <p>汉园茗院户型设计以改善型需求为核心，产品线完整覆盖从紧凑三房到奢华大平层/复式。项目备案均价约7.2万元/平方米，为南山大学城片区提供了高确定性的居住选择。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                        <th>产品定位</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>约110-112㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，动静分区，动线合理，入门级改善</td>
                        <td>首次改善/三口之家</td>
                    </tr>
                    <tr>
                        <td>约117-121㎡</td>
                        <td>四房两厅两卫</td>
                        <td>功能性强，满足多孩或居家办公需求，主力改善</td>
                        <td>多口之家/功能改善</td>
                    </tr>
                    <tr>
                        <td>约158-168㎡</td>
                        <td>四房/五房两厅三卫</td>
                        <td>南北通透，双阳台，主卧套房，空间阔绰</td>
                        <td>高端改善/品质追求</td>
                    </tr>
                    <tr>
                        <td>约186-187㎡</td>
                        <td>大平层/复式</td>
                        <td>专梯入户，270°视野，居住尺度感极佳</td>
                        <td>终极改善/楼王产品</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 项目容积率</div>
                    <div class="parameter-value">5.72 - 6.58</div>
                    <div class="parameter-desc">高层高密度社区，分A、B两区开发</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-car"></i> 车位配比</div>
                    <div class="parameter-value">约1:1.2</div>
                    <div class="parameter-desc">车位数量基本满足社区停车需求</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-ruler-combined"></i> 户型使用率</div>
                    <div class="parameter-value">约75%</div>
                    <div class="parameter-desc">不含赠送面积，为市场常规水平</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户配置</div>
                    <div class="parameter-value">3梯3-5户</div>
                    <div class="parameter-desc">不同楼栋及户型梯户比有差异</div>
                </div>
            </div>
            
            <div class="attention-note">
                <h4><i class="fas fa-exclamation-circle"></i> 需要关注的要点</h4>
                <p><strong>密度与得房率：</strong> 项目容积率较高，居住密度感强；使用率（约75%）在当下市场中不算突出。<br>
                <strong>社区构成：</strong> 项目内含保障性住房，社区纯粹性可能不及纯商品房小区。<br>
                <strong>部分户型细节：</strong> 部分约110㎡户型为达成三房功能，其中一个房间可能相对紧凑；部分户型存在入户门正对主卧等情况。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约110-112㎡</div>
                        <div class="unit-name">三房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>紧凑实用的改善入门</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">经典竖厅</span>
                            <span class="tag">动静分区</span>
                            <span class="tag">动线合理</span>
                            <span class="tag">总价可控</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局设计：</strong>采用市场接受度最高的竖厅设计，公共区域与卧室区明确分离。厨房多采用“U”型或“L”型布局，操作动线流畅。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>功能细节：</strong>卧室普遍设计有衣橱位，提升了收纳便利性。客厅连接景观阳台，保障了采光和通风。部分户型客厅可直出大景观阳台。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-alt"></i>
                            <div><strong>空间注意点：</strong>为控制总价与实现三房功能，部分户型可能将其中一个房间设计为“+1房”或书房，空间感相对紧凑。选购时需关注房间的实际可用尺寸。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>适合人群：</strong>首次在南山置业或追求地段升级的年轻家庭、三口之家，希望在核心片区上车改善型产品的客户。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选择建议：</strong>此户型是项目控制总价门槛的主力产品。建议优先选择客厅出阳台、卧室全明且动静分区清晰的户型，并实地感受房间尺度是否满足家庭需求。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约117-121㎡</div>
                        <div class="unit-name">四房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>功能完备的经典改善</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">功能性强</span>
                            <span class="tag">多开间朝南</span>
                            <span class="tag">动静分区</span>
                            <span class="tag">性价比高</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间格局：</strong>在竖厅基础上，通过精细化设计实现四房布局，满足多代同堂或二胎家庭的独立空间需求。部分优秀户型可实现四开间朝南，采光面大。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>居住体验：</strong>客餐厅一体化设计，连接宽敞阳台，延伸了视觉感和活动空间。明厨明卫，全屋通透性较好。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>产品定位：</strong>此面积段户型在市场上最具竞争力，是项目的主力走量产品，实现了功能与面积、总价的较好平衡。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>适合人群：</strong>成员较多的家庭、需要独立书房居家办公的人士、注重每位家庭成员私密空间的改善客群。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>核心价值：</strong>对于大多数改善家庭而言，此户型是性价比最高的选择。其核心价值在于在有限面积内实现了完备的居住功能，是典型的“一步到位”型产品。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端与楼王户型解析</h3>
            
            <div class="unit-card" style="max-width: 850px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约158-168㎡ & 约186-187㎡</div>
                    <div class="unit-name">四房/五房 & 大平层/复式</div>
                </div>
                <div class="unit-body">
                    <h4>奢阔尺度与顶配体验</h4>
                    <div style="margin: 20px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">主卧套房</span>
                        <span class="tag">专梯入户</span>
                        <span class="tag">270°视野</span>
                        <span class="tag">层高优越</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>尺度与设计：</strong>约158-168㎡户型开始出现横厅、端厅等更显奢阔的设计，通常配备两个以上套房。约186-187㎡楼王产品则拥有专梯入户、270°观景视野等顶配设计，部分户型层高达3.6米。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-crown"></i>
                        <div><strong>功能升级：</strong>主卧套房面积可观，集睡眠区、衣帽间、豪华卫浴于一体。三卫设计解决高峰期使用冲突。部分约168㎡户型采用南北双阳台甚至四阳台设计，通风和观景效果极佳。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观资源：</strong>此类户型多分布于社区景观视野最佳的位置，部分中高楼层可享开阔的塘朗山、长岭陂水库景观，将稀缺自然资源引入室内。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>适合人群：</strong>追求高品质居住体验、有多代同住需求、注重社交宴请与私密性的高净值家庭，寻求终极改善的客户。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>价值核心：</strong>选择此类户型的客户，核心价值在于对“景观”和“空间感”的极致追求。它们代表了项目的品质标杆，旨在提供一步到位的尊贵改善体验。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【产品共性】汉园茗院户型设计特点</h4>
                <p>1. <strong>准现楼确定性：</strong> 所有户型所在楼栋均已封顶，极大降低了交付风险，所见即所得。<br>
                2. <strong>功能导向明确：</strong> 户型设计以实用性和满足家庭结构变化需求为核心，从三房到五房产品线完整。<br>
                3. <strong>地铁口便利性加持：</strong> 所有户型均共享距离地铁站仅150米的突出区位优势，通勤价值显著。<br>
                4. <strong>得房率与密度平衡：</strong> 在南山核心地段、地铁口和准现楼的多重价值下，需接受相对常规的使用率和较高的社区密度。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div>
                        <h4>准现楼交付，风险极低</h4>
                        <p>所有楼栋均已封顶，实景可见，极大降低了购房者对项目工期、质量和交付标准的担忧，居住确定性高。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>地铁口物业，通勤核心优势</h4>
                        <p>距离地铁5号线长岭陂站仅约150米，是真正的“地铁上盖”，对于依赖轨道交通的通勤族而言是无可替代的核心价值。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>大学城人文氛围</h4>
                        <p>毗邻南方科技大学、深圳大学西丽校区等多所高校，享有独特的科教人文环境，且自带9班幼儿园，教育资源环绕。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>稀缺山景资源</h4>
                        <p>部分中高楼层户型拥有开阔的塘朗山、长岭陂水库景观，在都市核心区难得地将自然生态与便捷生活相结合。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div>
                        <h4>“价格洼地”属性</h4>
                        <p>相较于南山前海、后海等热点片区，西丽大学城片区新房价格仍具备一定优势，为预算有限但希望安家南山的客户提供了机会。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <div>
                        <h4>产品线完整</h4>
                        <p>从约110㎡的三房到约187㎡的楼王大宅，覆盖了从首次改善到终极改善的全系列需求，客户选择面广。</p>
                    </div>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <h4>高确定性选择</h4>
                    <p>在房地产市场波动期，准现楼是规避风险、保障资产安全的重要属性。</p>
                </div>
                <div class="feature-item">
                    <h4>通勤时间价值</h4>
                    <p>地铁口物业节省的通勤时间，是长期且不可替代的生活品质提升。</p>
                </div>
                <div class="feature-item">
                    <h4>片区成长潜力</h4>
                    <p>西丽湖国际科教城是深圳重点发展片区，未来具备良好的成长预期。</p>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择建议</h4>
                <p>基于汉园茗院户型特点、资源分布及项目客观条件，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #8b4513;">约110-112㎡ 三房</h4>
                <p><strong>选择重点：</strong>应优先考虑客厅出阳台、卧室全明且动静分区清晰的户型。需特别关注每个房间的实际尺寸，确保满足家具摆放与基本活动空间。</p>
                <p><strong>楼层建议：</strong>中低楼层（如6-15层）通常性价比较高。若预算允许，可选择中高楼层以获得更好的采光和视野。</p>
                
                <h4 style="margin-top: 28px; color: #8b4513;">约117-121㎡ 四房</h4>
                <p><strong>选择重点：</strong>建议优先选择朝南向、多开间采光的户型。对于有老人或小孩的家庭，需关注卫生间的数量与位置是否便利。</p>
                <p><strong>注意事项：</strong>详细了解楼栋在社区中的位置，尽量选择远离主干道（留仙大道）的楼栋，以获得更安静的居住环境。</p>
                
                <h4 style="margin-top: 28px; color: #8b4513;">约158㎡以上大户型</h4>
                <p><strong>选择核心：</strong>景观和空间感是核心价值。务必选择中高楼层（建议15层以上），以最大化塘朗山景观视野，规避低楼层的视线遮挡。</p>
                <p><strong>产品优先级：</strong>对于带“南北双阳台”、“豪华主卧套房”、“专梯入户”等设计的户型，应给予更高优先级，这些是提升居住品质的关键。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>客观决策：</strong>汉园茗院的核心优势（地铁口、准现楼、南山价）与客观条件（高容积率、常规得房率、混合社区）同样明显。决策时，需明确自身最看重的需求：是极致的通勤便利与交付确定性，还是极低的密度与超高的得房率。前者是汉园茗院的强项，后者则需在其他项目中寻找。</p>
            </div>
            
            <div class="complement">
                <h4>【价值决策】汉园茗院户型选择关键维度</h4>
                <p>1. <strong>核心需求排序：</strong> 将“通勤便利”、“交付确定性”、“总价预算”、“居住尺度”、“社区纯粹性”进行排序，明确优先项。<br>
                2. <strong>家庭结构匹配：</strong> 根据当前及未来5-8年的家庭人口变化，选择能满足功能需求的房间数量。<br>
                3. <strong>景观价值取舍：</strong> 若看重山景资源，需为视野支付溢价并选择中高楼层；若对景观不敏感，则可选择性价比更高的中低楼层。<br>
                4. <strong>噪音敏感度评估：</strong> 对噪音敏感的客户，必须深入研究楼栋分布图，优先选择社区中央、远离主干道和地铁轨道的楼栋及户型。</p>
            </div>
            
            <div class="highlight-box">
                <h4>汉园茗院项目价值总结</h4>
                <p><strong>核心定位：</strong> 一个为注重通勤效率、追求高交付确定性、且希望在南山核心区上车的改善型家庭量身打造的地铁口准现楼项目。</p>
                <p><strong>户型价值：</strong> 
                <strong>约110-112㎡三房</strong>是上车主城区的务实选择；<strong>约117-121㎡四房</strong>是满足功能需求的性价比之王；<strong>约158㎡以上大户型</strong>则为追求品质与景观的家庭提供了南山北的改善选项。</p>
                <p style="margin-top: 15px;">选择汉园茗院，本质上是选择一种 “高确定性、高效率” 的生活方式。它用相对亲民的总价，将地铁通勤的便捷、大学城的人文气息和准现楼的安心感打包提供。购房者需要在明确其突出优势的同时，理性接纳其客观存在的密度与得房率等问题。</p>
            </div>
        </div>
    </div>
`
            }
        },
        "粤海": {
            "翰熙典居": {
                peitao: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        .feature-list {
            padding-left: 20px;
        }
        .feature-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .highlight-list {
            padding-left: 20px;
        }
        .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .advantages, .disadvantages {
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .advantages {
            background-color: #e8f6f3;
            border-left: 4px solid #28b463;
        }
        .disadvantages {
            background-color: #fdedec;
            border-left: 4px solid #e74c3c;
        }
        .pros {
            background-color: #e8f6f3;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #28b463;
        }
        .cons {
            background-color: #fdedec;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #e74c3c;
        }
        .pros ul, .cons ul {
            padding-left: 20px;
        }
        .pros li, .cons li {
            margin-bottom: 10px;
        }
        .pros-cons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin: 20px 0;
        }
        @media (max-width: 768px) {
            .pros-cons {
                grid-template-columns: 1fr;
            }
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .info-card {
            background: #f8f9fa;
            padding: 18px;
            border-radius: 8px;
            border-left: 4px solid #1a6dcc;
        }
        .info-card h4 {
            color: #1a6dcc;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .reminder {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .content {
            padding: 25px;
        }
        .footer-note {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid #eee;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1 {
                font-size: 24px;
            }
            section {
                padding: 15px;
            }
            .content {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>翰熙典居</h1>
            <div class="subtitle">粤海街道核心 · 双地铁上盖 · 超50万㎡地标综合体</div>
        </header>
        
        <section class="project-overview">
            <h2>项目概览</h2>
            <p>翰熙典居位于深圳南山区“最牛街道”粤海街道的核心地段，是2025年入市的全新住宅项目。项目由桂庙新村城市更新而来，定位为超50万㎡的地标级综合体，涵盖住宅、商业、办公、酒店及公共配套设施。项目坐拥深圳大学与南山科技园环绕的独特区位，是粤海街道时隔多年的稀缺新盘，主打改善型住宅。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                <ul class="feature-list">
                    <li><strong>顶级核心地段：</strong>地处粤海街道核心，紧邻深圳大学，背靠腾讯等科技总部，产业与人才集聚。</li>
                    <li><strong>双地铁上盖交通：</strong>步行约300米可达地铁9号线深大南站，未来与在建的15号线（预计2028年通车）换乘，形成双地铁枢纽。</li>
                    <li><strong>高实用率新规户型：</strong>采用新规设计，户型实用率（含赠送）高达约84%-95%，部分接近100%，空间利用率显著提升。</li>
                    <li><strong>全能综合体配套：</strong>自带约5.7万㎡潮流商业街区、1.9万㎡酒店及丰富公共配套，形成自足生活圈。</li>
                    <li><strong>一线教育资源：</strong>项目规划12班幼儿园，并位于南山区第二外国语学校（集团）学府一小和学府中学的学区范围内（具体以当年教育局公布为准）。</li>
                </ul>
            </div>
        </section>
        
        <section class="project-details">
            <h2>项目基本信息</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>深圳市贯凯投资有限公司（隶属阳光华艺集团）</td>
                </tr>
                <tr>
                    <td><strong>具体位置</strong></td>
                    <td>南山区粤海街道白石路与学府路交叉口西北侧</td>
                </tr>
                <tr>
                    <td><strong>项目性质</strong></td>
                    <td>大型城市更新综合体（含住宅、商业、办公、酒店）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约4.17万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约51.6万㎡（超50万㎡）</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>较高（不同地块9.0-11.44）</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>约3030户（其中可售商品房仅714套）</td>
                </tr>
                <tr>
                    <td><strong>首推产品</strong></td>
                    <td>02地块建面约105-120-140㎡三至四房</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付（预计2027年中旬）</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品特色与精装标准</h2>
            <p>项目在设计、装修和社区营造上投入颇多，旨在打造高品质改善型住宅：</p>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>大师级设计团队：</strong>由CCD（郑中设计）、华汇设计、迈丘设计等国内外知名团队联袂打造建筑、园林及公区。</li>
                    <li><strong>新东方风格园林：</strong>打造约1万㎡新东方风格园林，融合度假式无边泳池、樱花大道等景观。</li>
                    <li><strong>高定艺术公区：</strong>电梯厅、入户大堂等公共区域采用欧洲灰石材等高端材料，由CCD操刀设计，彰显低调奢华。</li>
                    <li><strong>国际品牌精装：</strong>全屋精装交付，配备国际品牌厨卫设备，墙面使用岩板，客厅及卧室铺设多层实木地板。</li>
                    <li><strong>高拓展户型：</strong>巧妙利用新规，通过飘窗、阳台等实现约5-12㎡的面积赠送，提升实际得房率与空间感。</li>
                </ul>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套详情</h2>
            
            <h3>📍 地理位置与产业</h3>
            <p>位于粤海街道“总部经济轴”与“科技创新轴”黄金交汇点。东临白石路，西近南海大道，北靠深圳大学，南邻腾讯滨海大厦（直线约1公里）。周边汇聚腾讯、大疆、百度等超1600家国家高新技术企业，GDP产值雄厚，形成高净值人才聚集地。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="feature-list">
                <li><strong>地铁：</strong>双地铁上盖。距已运营的<strong>9号线深大南站</strong>约300米。在建的<strong>15号线</strong>（预计2028年通车）将在此交汇，未来可快速串联前海、科技园、留仙洞总部基地。</li>
                <li><strong>道路：</strong>毗邻滨海大道、南海大道、桂庙路等城市主干道，自驾通达性高。</li>
                <li><strong>公交：</strong>项目配建2900㎡公交首末站，周边1公里内多达33个公交站点。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="feature-list">
                <li><strong>学区：</strong>项目在<strong>南山区第二外国语学校（集团）学府一小</strong>（约522米）和<strong>学府中学</strong>（约800米）的学区范围内。学区划分以教育局当年公布为准。</li>
                <li><strong>自带幼儿园：</strong>规划一所12班制幼儿园。</li>
                <li><strong>高等学府：</strong>紧邻深圳大学，人文与学术氛围浓厚。</li>
            </ul>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="feature-list">
                <li><strong>自带商业：</strong>规划约5.7万㎡“未来潮流街区”，满足日常生活需求。</li>
                <li><strong>核心商圈：</strong>步行可达约30万㎡的<strong>海岸城商圈</strong>；短距离车程覆盖<strong>深圳湾万象城、万象天地、后海汇</strong>等顶流商业体。</li>
            </ul>
            
            <h3>🌳 生态休闲</h3>
            <p><strong>荔香公园</strong>（约800米）：23万㎡城市绿肺，提供休闲健身场所。此外，深圳湾体育中心、保利剧院等城市级文体配套也在短距离内。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                <ul class="feature-list">
                    <li><strong>地段价值稀缺：</strong>粤海街道核心区，十年一遇的综合体新盘，产业、人才、经济基础扎实，资产保值增值潜力强。</li>
                    <li><strong>交通能级超高：</strong>现有及规划的双地铁上盖，通达全城核心就业区，通勤便利度极高。</li>
                    <li><strong>产品设计领先：</strong>新规下的高实用率户型、大师设计、精装标准，产品力在片区具有竞争力。</li>
                    <li><strong>配套成熟全能：</strong>坐拥海岸城商圈，自带大型商业，教育、生态资源优质，生活便利度满分。</li>
                </ul>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                <ul class="feature-list">
                    <li><strong>居住密度较高：</strong>项目容积率高（部分地块超11），为超高层建筑，居住密度大，可能影响部分居住舒适度。</li>
                    <li><strong>社区构成复杂：</strong>总户数中回迁房、保障房占比较大，可售商品房仅约714套，社区纯粹性一般。</li>
                    <li><strong>部分户型细节：</strong>少数户型（如105㎡的“双龙抱珠”结构）的厨房或次卧因楼栋布局，采光可能受影响。</li>
                    <li><strong>价格门槛较高：</strong>尽管有折扣，但总价仍近900万起，属于高端改善盘，上车门槛高。</li>
                </ul>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                <ul class="feature-list">
                    <li><strong>南山科技园精英：</strong>在腾讯、大疆等周边科技企业工作的高收入员工，追求极短通勤时间。</li>
                    <li><strong>深区改善家庭：</strong>看重粤海街道地段、南二外学区，需要三房或四房改善居住条件的家庭。</li>
                    <li><strong>城市核心资产持有者：</strong>看好深圳核心区长期价值，寻求资产配置的购房者。</li>
                    <li><strong>追求便利的都市型买家：</strong>注重生活、交通、商业等综合配套的成熟度和便利性。</li>
                </ul>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p><strong>翰熙典居是粤海街道核心区稀缺的“全能型”高端改善综合体项目。</strong>其最大的价值在于不可复制的顶级地段、双地铁上盖的顶级交通配置以及成熟的全维配套，这使其成为在南山科技园片区工作的精英人群“职住一体”的理想选择。</p>
            
            <div class="warning">
                <p><strong>选择建议：</strong>购买本项目，本质上是为绝佳的地段和顶配的城市资源付费。它能提供极致的生活便利性和通勤效率，但需要接受高密度、高容积率以及社区人员相对复杂的居住环境。适合将地段和配套置于首位，且预算充足的改善型买家。</p>
            </div>
            
            <p>项目户型在高实用率上做出了创新，精装和公区标准较高，但部分户型有优化空间。总体而言，它是一个典型的“地段为王”的项目，对于目标客群而言，其综合优势显著，是2025年南山楼市中一个值得重点关注的标志性楼盘。</p>
        </section>
    </div>
`,
                huxing: `
<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
            overflow: hidden;
        }
        header {
            background: linear-gradient(135deg, #1a6dcc, #0d4a9e);
            color: white;
            padding: 30px;
            text-align: center;
        }
        header h1, .project-title {
            font-size: 28px;
            margin-bottom: 10px;
            color: white;
        }
        .subtitle, .project-subtitle {
            font-size: 18px;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        .content {
            padding: 25px;
        }
        section {
            padding: 25px;
            border-bottom: 1px solid #eee;
        }
        section:last-child {
            border-bottom: none;
        }
        h2 {
            color: #1a6dcc;
            font-size: 22px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e0e6ed;
        }
        h2:after {
            display: none;
        }
        h3 {
            color: #333;
            font-size: 18px;
            margin: 15px 0 10px;
        }
        h4 {
            color: #1a6dcc;
            font-size: 16px;
            margin: 15px 0 10px;
        }
        p {
            margin-bottom: 15px;
            font-size: 16px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th {
            background: #1a6dcc;
            color: white;
            padding: 12px;
            text-align: left;
        }
        td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        tr:hover {
            background-color: #f5f9ff;
        }
        tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        .feature-list, .highlight-list {
            padding-left: 20px;
        }
        .feature-list li, .highlight-list li {
            margin-bottom: 12px;
            position: relative;
            padding-left: 20px;
        }
        .feature-list li:before, .highlight-list li:before {
            content: "•";
            color: #1a6dcc;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .warning {
            background-color: #fff8e6;
            border-left: 3px solid #ffc107;
            padding: 15px;
            border-radius: 0 4px 4px 0;
            margin: 15px 0;
        }
        .highlight, .highlight-box {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .section-intro {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
            font-size: 16px;
        }
        .parameter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .parameter-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 18px;
            border-top: 4px solid #1a6dcc;
        }
        .parameter-title {
            font-weight: 700;
            color: #1a6dcc;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .parameter-value {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin-bottom: 5px;
        }
        .parameter-desc {
            font-size: 14px;
            color: #666;
        }
        .unit-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .unit-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e6ed;
        }
        .unit-name {
            font-size: 20px;
            font-weight: 700;
            color: #1a6dcc;
        }
        .unit-area {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        .unit-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            padding: 12px;
            background-color: white;
            border-radius: 5px;
        }
        .unit-feature i {
            color: #1a6dcc;
            margin-right: 12px;
            font-size: 16px;
        }
        .view-badge {
            display: inline-block;
            background: #e8f4ff;
            color: #1a6dcc;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 14px;
            margin: 3px;
        }
        .location-highlight {
            background-color: #e8f4ff;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #1a6dcc;
        }
        .attention-note {
            background-color: #fff8e6;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #ffc107;
        }
        .floor-tip {
            background-color: #e8f4ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            border-left: 4px solid #1a6dcc;
        }
        .gold-text {
            color: #b8860b;
            font-weight: 600;
        }
        @media (max-width: 768px) {
            .container {
                border-radius: 0;
                box-shadow: none;
            }
            header {
                padding: 20px;
            }
            header h1, .project-title {
                font-size: 24px;
            }
            .content, section {
                padding: 15px;
            }
            table {
                font-size: 14px;
            }
            th, td {
                padding: 8px;
            }
            .parameter-grid {
                grid-template-columns: 1fr;
            }
            .unit-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
<div class="container">
        <header>
            <h1>翰熙典居</h1>
            <div class="subtitle">深圳南山 · 粤海核心 · 科技园地铁口综合体</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供翰熙典居项目的全面户型分析。项目位于南山区粤海街道核心，为原桂庙新村城市更新项目，是片区近十年来首个入市的住宅新盘。作为超50万㎡的地标级综合体，项目首推建面约105-140㎡的精装住宅，以其核心地段、地铁上盖及高得房率设计，成为科技园板块的现象级改善型产品。
            </div>
            
            <div class="location-highlight">
                <h3 style="color: #2c3e50; margin-top: 0;">📍 项目核心价值与稀缺属性</h3>
                <p><strong>翰熙典居</strong>位于南山区粤海街道白石路与学府路交汇处，东临白石路，西近南海大道，北靠深圳大学，南邻腾讯滨海大厦。项目地处“中国硅谷”粤海街道核心，该街道2024年GDP达约4500亿元，聚集了腾讯、大疆、华为等超1600家高新技术企业。作为片区断供多年后首个新盘，项目具有极高的地段稀缺性。</p>
                <div style="margin-top: 20px;">
                    <span class="view-badge"><i class="fas fa-subway"></i> 9/15号线双地铁上盖</span>
                    <span class="view-badge"><i class="fas fa-graduation-cap"></i> 紧邻深圳大学</span>
                    <span class="view-badge"><i class="fas fa-building"></i> 超50万㎡综合体</span>
                    <span class="view-badge"><i class="fas fa-school"></i> 学府一小/中学学区</span>
                    <span class="view-badge"><i class="fas fa-shopping-bag"></i> 海岸城商圈800米</span>
                </div>
            </div>
            
            <h2>一、在售户型核心参数总览</h2>
            <p>翰熙典居首推02地块建面约105-140㎡户型，共328套精装住宅。户型设计遵循新规，通过飘窗、阳台等赠送实现高使用率，主力产品定位为科技园片区改善型需求。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                        <th>主要特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>约105㎡</td>
                        <td>三房两厅两卫</td>
                        <td>双龙抱珠/经典竖厅双布局，6.5米宽景阳台，得房率约90%</td>
                        <td>门槛级改善，赠送约10㎡，使用空间近115㎡</td>
                    </tr>
                    <tr>
                        <td>约120㎡</td>
                        <td>3+1房两厅两卫</td>
                        <td>竖厅设计，主卧套房超30㎡，可改灵动空间，得房率约90%</td>
                        <td>功能改善，预留改造空间，适合成长型家庭</td>
                    </tr>
                    <tr>
                        <td>约140㎡</td>
                        <td>3+1房两厅两卫</td>
                        <td>南北通透横厅，客厅开间约6.6米，主卧约40㎡，三面采光</td>
                        <td>奢阔改善，02地块稀缺户型，占比仅约15%</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-building"></i> 整体容积率</div>
                    <div class="parameter-value">8.9 - 11.44</div>
                    <div class="parameter-desc">超高层综合体社区，分01、02、03地块开发</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-car"></i> 车位配比</div>
                    <div class="parameter-value">1:0.83 - 1:0.91</div>
                    <div class="parameter-desc">不同地块车位比略有差异</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-ruler-combined"></i> 户型使用率</div>
                    <div class="parameter-value">84% - 95%</div>
                    <div class="parameter-desc">含赠送面积，新规后设计实现高得房率</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户配置</div>
                    <div class="parameter-value">3梯5户</div>
                    <div class="parameter-desc">首推02地块主流配置</div>
                </div>
            </div>
            
            <div class="attention-note">
                <h4><i class="fas fa-exclamation-circle"></i> 需要关注的要点</h4>
                <p><strong>高容积率与密度：</strong> 项目为超高层综合体，容积率高，居住密度感强。<br>
                <strong>混合社区：</strong> 项目包含可售商品房、回迁房及保障房，社区纯粹性需考量。<br>
                <strong>部分户型采光：</strong> 采用“双龙抱珠”结构的105㎡ A1/A2户型，其厨房和次卧开窗位于U型槽中，采光可能受影响。<br>
                <strong>交付时间：</strong> 预计2027年中精装交付，合同约定2028年3月，需关注工期。</p>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约105㎡</div>
                        <div class="unit-name">三房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>高赠入门改善 · 三房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">双布局可选</span>
                            <span class="tag">6.5米阳台</span>
                            <span class="tag">高得房率</span>
                            <span class="tag">东南/正南朝向</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>双布局设计：</strong>提供两种选择：1) A1/A2户型为“类双龙抱珠”竖厅结构，客厅3.6米开间，动静分区；2) B户型为经典竖厅，LDKB一体化，三开间朝南。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-alt"></i>
                            <div><strong>空间赠送：</strong>通过约6.5米宽景阳台（半赠）和飘窗（全赠）实现约10㎡赠送，实际得房率可达90%，使用面积接近传统115㎡户型。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>朝向与景观：</strong> A1户型东南朝向可远眺深圳湾；A2户型正南朝向俯瞰小区园林；B户型正南/东南朝向，6.4米阳台直面花园。部分高楼层可见腾讯滨海大厦。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>适合人群：</strong>预算有限但追求核心地段的三口之家，或首次在科技园板块置业的改善客户。是项目总价门槛最低的户型。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选择对比：</strong>“双龙抱珠”户型私密性更优，但部分房间采光需注意；经典竖厅户型采光通风更佳，动线传统。建议根据对私密性和采光的偏好进行选择，并优先考虑中高楼层以规避可能的遮挡。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约120㎡</div>
                        <div class="unit-name">3+1房两厅两卫</div>
                    </div>
                    <div class="unit-body">
                        <h4>功能灵动改善 · 3+1房两卫</h4>
                        <div style="margin: 18px 0;">
                            <span class="tag">主卧超大套房</span>
                            <span class="tag">灵动空间</span>
                            <span class="tag">竖厅设计</span>
                            <span class="tag">西北/东南朝向</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>空间核心：</strong>最大亮点为主卧套房，面积超30㎡，空间奢阔。户型预留了一个可改造的灵动空间，可根据家庭需求变为书房、儿童活动区或客房。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>格局与细节：</strong>竖厅设计，客厅开间约3.85米，LDKB一体化。主卧约16.65㎡并含独立衣帽间，次卧约9.9㎡。通过阳台和飘窗赠送约12㎡。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-binoculars"></i>
                            <div><strong>景观资源：</strong>主要为西北朝向，高层可俯瞰深圳大学校园及西丽高尔夫球场，部分房源可远眺塘朗山。东南朝向房源采光更优，但景观以城市界面为主。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-tie"></i>
                            <div><strong>适合人群：</strong>追求主卧舒适度、需要灵活可变空间的三至四口之家，或有居家办公、二孩计划的成长型家庭。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>注意事项：</strong>西北朝向户型夏季可能存在西晒问题。此户型相比105㎡，在功能空间数量上提升明显，但需权衡朝向与景观偏好。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>奢阔旗舰户型解析</h3>
            
            <div class="unit-card" style="max-width: 850px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约140㎡</div>
                    <div class="unit-name">3+1房两厅两卫</div>
                </div>
                <div class="unit-body">
                    <h4>横厅楼座标杆 · 3+1房两卫</h4>
                    <div style="margin: 20px 0;">
                        <span class="tag">南北通透横厅</span>
                        <span class="tag">稀缺户型</span>
                        <span class="tag">主卧约40㎡</span>
                        <span class="tag">三面采光</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>奢阔尺度：</strong>采用南北通透的横厅设计，客餐厅开间约6.6米，连接阳台形成约32㎡的宽敞公共区域。主卧套房面积约40㎡，配备270°环幕飘窗，尺度感媲美豪宅。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-crown"></i>
                        <div><strong>产品稀缺性：</strong>此户型在首推的02地块中占比仅约15%，是2栋的稀缺户型。部分房源采用“独门独户前厅”设计，增强归家仪式感。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观视野：</strong>西南或东南朝向，三面采光无遮挡。高层房源可同时俯瞰深大校园和深圳湾海景，部分直面中央花园。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>功能潜力：</strong>阳台进深达2.1米，具备拓展为茶室或休闲区的潜力。入户玄关可定制整墙收纳柜，提升实用性。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>终极改善之选：</strong>此户型是项目的旗舰产品，面向追求极致空间尺度、优质景观和稀缺性的高端改善客户。其横厅设计、主卧套房的配置，以及对稀缺景观资源的占有，构成了核心价值点。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【设计共性】翰熙典居户型核心特点</h4>
                <p>1. <strong>新规高赠：</strong> 充分利用新规，通过飘窗（全赠）、阳台（半赠）大幅提升使用率，得房率普遍在90%左右。<br>
                2. <strong>精装交付：</strong> 全屋精装交付，采用国际品牌厨卫，墙面地面使用岩板，公区由知名设计机构CCD操刀。<br>
                3. <strong>主卧套房化：</strong> 所有户型均强调主卧的舒适性与独立性，面积尺度在同面积段产品中具备优势。<br>
                4. <strong>科技园基因：</strong> 户型设计考虑科技精英家庭的生活习惯，注重实用性、空间效率及适度的灵活性。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-pin"></i>
                    </div>
                    <div>
                        <h4>顶级稀缺地段</h4>
                        <p>位于“中国硅谷”粤海街道核心，北邻深圳大学，南接科技园，为片区断供多年后首个新盘，地段价值无可复制。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁TOD上盖</h4>
                        <p>无缝接驳已运营的9号线和在建的15号线“深大南站”，步行约300米，是核心区罕有的真正地铁上盖物业。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>高实用率设计</h4>
                        <p>新规后户型，通过优化设计实现高赠送，实际使用率最高可达95%，实用性强，变相降低单价。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>优质教育资源</h4>
                        <p>项目划片南山区第二外国语学校（集团）学府一小和学府中学，均为区重点公办学校，教育资源优质稳定。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div>
                        <h4>成熟商圈环伺</h4>
                        <p>步行800米可达海岸城商圈，周边2公里内涵盖深圳湾万象城、万象天地等顶流商业，生活配套成熟度极高。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>生态与人文融合</h4>
                        <p>毗邻深圳大学，坐享人文氛围与校园生态；周边荔香公园、人才公园等环绕，实现都市繁华与自然静谧的平衡。</p>
                    </div>
                </div>
            </div>
            
            <div class="feature-grid">
                <div class="feature-item">
                    <h4>价格倒挂潜力</h4>
                    <p>项目折后均价约10万/㎡，部分房源“8字头”起，与周边房龄较老的二手房（如阳光粤海花园约9万/㎡）形成价格倒挂。</p>
                </div>
                <div class="feature-item">
                    <h4>综合体多元配套</h4>
                    <p>项目自身规划约5.7万㎡潮流街区、1.9万㎡精奢酒店等，打造自成一体的生活圈。</p>
                </div>
                <div class="feature-item">
                    <h4>开发商旧改经验</h4>
                    <p>由深耕深圳旧改23年的阳光华艺集团开发，具备城市更新项目操盘经验。</p>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择建议</h4>
                <p>基于翰熙典居户型特点、稀缺地段价值及超高层社区的属性，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 28px; color: #2c3e50;">约105㎡ 三房</h4>
                <p><strong>选择重点：</strong>在“双龙抱珠”A户型和经典竖厅B户型间，优先根据采光偏好和动线习惯选择。注重隐私选A户型，注重明厨明卫和通风选B户型。<br>
                <strong>楼层建议：</strong>建议选择15层以上中高楼层。一方面可规避低楼层可能存在的采光遮挡和噪音，另一方面能获得更好的城市景观或远眺视野。<br>
                <strong>价格策略：</strong>此户型是项目最低总价入口，折后单价可低至约8.5万/㎡起，对于预算有限的南山改善客户性价比较高。</p>
                
                <h4 style="margin-top: 28px; color: #2c3e50;">约120㎡ 3+1房</h4>
                <p><strong>选择重点：</strong>明确对“西北朝向深大校园景观”和“东南朝向更优采光”的取舍。注重主卧尺度和功能灵活性是该户型的核心。<br>
                <strong>楼层建议：</strong>若选择西北朝向看深大景观，建议20层以上高楼层，以最大化校园绿地和远眺视野。中低楼层景观效果会打折扣。<br>
                <strong>注意事项：</strong>需实地感受样板间不同时间段的采光，特别是西晒问题是否在可接受范围。</p>
                
                <h4 style="margin-top: 28px; color: #2c3e50;">约140㎡ 3+1房</h4>
                <p><strong>选择核心：</strong>此户型的价值在于“稀缺性”、“横厅尺度”和“优质景观”。应优先选择视野无遮挡、朝向好的房源。<br>
                <strong>楼层建议：</strong>强烈建议选择25层及以上高区优质楼层。高楼层能完全发挥其三面采光、俯瞰深大与深圳湾的双重景观优势，是产品价值最大化的关键。<br>
                <strong>决策优先级：</strong>对于此户型，楼栋位置、楼层高度和景观视野的优先级应高于单纯的价格折让。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>综合决策建议：</strong>选择翰熙典居，本质上是为 “粤海街道核心地段+双地铁上盖+优质学区” 这组无法复制的城市资源付费。其户型的高使用率是加分项，而高容积率、混合社区等是需要接受的客观条件。在户型选择上，应首先明确家庭核心需求是“低总价上车地段”、“功能与主卧舒适度”还是“终极改善的尺度与稀缺性”，再对应选择105㎡、120㎡或140㎡户型，并在预算内尽可能选择高楼层以提升居住体验和资产价值。</p>
            </div>
            
            <div class="complement">
                <h4>【价值决策】翰熙典居户型选择五大维度</h4>
                <p>1. <strong>地段价值优先度：</strong> 是否将“粤海核心区”和“地铁口”作为不可妥协的底线条件？<br>
                2. <strong>家庭功能需求：</strong> 当前及未来5年，对房间数量、主卧尺度、灵活空间的需求如何？<br>
                3. <strong>景观与朝向偏好：</strong> 更看重深大校园/深圳湾景观，还是更偏好正南/东南的优质采光？<br>
                4. <strong>社区环境接受度：</strong> 对高容积率、超高层密度、混合社区的居住氛围接受程度如何？<br>
                5. <strong>预算与价值平衡：</strong> 在给定预算下，是选择本项目小户型，还是牺牲地段选择其他片区更大面积产品？</p>
            </div>
            
            <div class="highlight-box">
                <h4>翰熙典居项目价值总结</h4>
                <p><strong>核心定位：</strong> 一个为 “极度看重通勤效率、稀缺地段价值、优质教育资源，并愿意为此接受高密度城市居住形态的科技精英和改善家庭” 量身打造的地铁口综合体项目。</p>
                <p><strong>户型价值：</strong> 
                <strong>约105㎡三房</strong>是入驻“中国硅谷”核心区的门槛之选，高赠设计提升性价比；<strong>约120㎡ 3+1房</strong>在功能与舒适度间取得平衡，主卧套房和灵动空间是亮点；<strong>约140㎡ 3+1房</strong>则是片区内稀缺的横厅改善产品，占有最佳景观资源。</p>
                <p style="margin-top: 15px;">项目最大优势在于其地段的绝对稀缺性和配套的成熟完整性。它并非追求低密舒居的产品，而是为追求城市核心资源效率的人群提供的高效解决方案。对于目标客群而言，其户型设计上的高得房率和实用主义导向，有效放大了寸土寸金地段下的空间价值。</p>
            </div>
        </div>
    </div>
`
            }
        }
    }
};
