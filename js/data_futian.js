// data_futian.js - 仅包含 福田区 的数据
const db_futian = {
    "福田区": {
        "_PRICE_MAP": `
            <section class="price-map-summary">
                <h2>💰 福田区楼盘价格及户型总览</h2>
                <p>以下为福田区在售楼盘及主要面积段、起步总价对比，供快速查阅。</p>

                <h3>中心区 / CBD核心</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>卓越缦悦</strong></td><td>92㎡：883-982万<br>105㎡：1003-1144万<br>123㎡：1183-1346万<br>126㎡：1257-1427万<br>173㎡：1701-2068万</td><td>福田中心区、新规设计、使用率超90%</td></tr>
                        <tr><td><strong>新世界香蜜四季家园</strong></td><td>106㎡：1173-1260万<br>123㎡：1412-1534万<br>125㎡：1306-1408万<br>129㎡：1423-1475万<br>143㎡：1715-1787万<br>144㎡：1769-1826万<br>220㎡：2900-2995万<br>280㎡：3684-3754万</td><td>香蜜湖片区、91折、特价房源优惠多</td></tr>
                        <tr><td><strong>金地环湾城</strong></td><td>111-112㎡：1016-1115万<br>124-125㎡：1120-1436万<br>183㎡：1900万<br>253㎡：2500-3000万<br>270㎡：3600-3900万</td><td>单价8字头起、清盘节奏</td></tr>
                    </tbody>
                </table>

                <h3>福田南 / 上沙片区</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>京基宸悦府</strong></td><td>单价：7.1万/㎡起<br>110㎡三房两卫：830-860万（售罄）<br>114㎡四房两卫：781万<br>133㎡四房两卫：1100-1200万（售罄）</td><td>单价7字头、福田南上车盘</td></tr>
                    </tbody>
                </table>
            </section>
        `,
        "福田项目": {
            "卓越缦悦": {
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
            <h1>卓越缦悦项目详解</h1>
            <p class="subtitle">福田中心区皇岗旧改首期品质盘 | 深圳中轴线南北双核交汇处 | 新规高使用率住宅</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>卓越缦悦是福田中心区目前唯一在售的新盘，由卓越集团与皇岗实业联合开发，为皇岗村超200万㎡旧改的首期作品。项目地处深圳中轴线核心，北承福田CBD，南接河套深港科技创新合作区，是融合现代生活与历史文脉的城市更新综合体。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>唯一性</th><td>福田中心区唯一在售新盘，占据深圳中轴线核心位置</td></tr>
                    <tr><th>超高使用率</th><td>新规设计，所有户型使用率均超过90%，部分达95%</td></tr>
                    <tr><th>立体交通</th><td>四线地铁环绕，紧邻7号线皇岗村站，距皇岗口岸仅2站</td></tr>
                    <tr><th>商业配套</th><td>自带约7万㎡轻奢商业MALL，周边五大商圈环伺</td></tr>
                    <tr><th>教育资源</th><td>学区涵盖省一级皇岗小学和中考优异的皇岗创新实验学校</td></tr>
                </table>
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
                    <td>深圳市卓越皇岗旧村改造有限公司（卓越集团+皇岗股份）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>卓越物业</td>
                </tr>
                <tr>
                    <td><strong>物业管理费</strong></td>
                    <td>7.8元/㎡·月</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约3.14万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约27.3万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>5.077</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>35%-40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>6栋住宅，商品房45-46层</td>
                </tr>
                <tr>
                    <td><strong>总规划户数</strong></td>
                    <td>2151户（其中可售商品房723套）</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>1987个停车位，车位占比约1:0.92</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2024年12月21日-2094年12月20日）</td>
                </tr>
                <tr>
                    <td><strong>交楼时间</strong></td>
                    <td>预计2027年12月或2028年5月</td>
                </tr>
            </table>
        </section>
        
        <section class="smart-features">
            <h2>产品设计亮点</h2>
            <p>作为福田第二个入市的新规楼盘，项目在户型设计和社区规划上有多项创新：</p>
            
            <div class="highlight">
                                <table>
                    <tr><th>超高使用率</th><td>采用新规设计，所有户型使用率超过90%，远超传统住宅75%-85%的水平</td></tr>
                    <tr><th>精致户型</th><td>主力户型91-173㎡的3-4房，采用多飘窗、设备平台和弹性方厅设计</td></tr>
                    <tr><th>高品质建筑</th><td>外立面采用LOW-E玻璃搭配铝板，窗墙比达行业领先水平</td></tr>
                    <tr><th>智能家居</th><td>精装交付搭载华为鸿蒙全屋智能系统，支持场景化智控</td></tr>
                    <tr><th>园林设计</th><td>规划林下客厅、香草花园和空中云墅三大主题中庭，4层打造约12000㎡空中花园</td></tr>
                    <tr><th>全龄配套</th><td>配备室内恒温泳池、室外泳池、儿童活动区、健身区和宠物乐园</td></tr>
                </table>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置</h3>
            <p>位于福田区福民路与皇岗二街交汇处西北角，地处深圳中轴线核心，北承福田CBD金融中心，南接河套深港科技创新合作区。</p>
            
            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>紧邻7号线皇岗村站（步行约3分钟），距4/10号线福民站约300米，距3号线石厦站约500米，形成四线地铁环绕</td></tr>
                    <tr><th>口岸</th><td>距皇岗口岸仅2站地铁，新皇岗口岸将于2026年启用，采用“合作查验、一次放行”模式</td></tr>
                    <tr><th>主干道</th><td>紧邻滨河大道、新洲路等主干道，10分钟车程覆盖福田CBD核心商圈</td></tr>
                </table>
            
            <h3>🏫 教育资源</h3>
                            <table>
                    <tr><th>小学学区</th><td>皇岗小学（省一级学校，距离约300米）与荔园外国语小学（水围校区，距离约800米）</td></tr>
                    <tr><th>中学学区</th><td>皇岗创新实验学校（初中部），2024年中考成绩位列福田公办初中前五</td></tr>
                    <tr><th>项目配套</th><td>自带18班幼儿园，形成12年一站式教育体系</td></tr>
                </table>
            
            <h3>🛍️ 商业配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>项目自带约7万㎡轻奢商业MALL，一期商业面积达4.1万㎡</td></tr>
                    <tr><th>周边商圈</th><td>2公里内覆盖福田五大商圈，包括星河COCOPARK、皇庭广场、卓越中心等18个大型商业体，总商业体量达250万㎡</td></tr>
                    <tr><th>生活配套</th><td>规划引入高端零售、餐饮及亲子业态，形成“会展南广场”商业集群</td></tr>
                </table>
            
            <h3>🌳 生态休闲</h3>
            <p>项目南侧邻近皇岗公园，周边被约138座公园环绕，包括莲花山公园、深圳中心公园等优质生态资源。高层北向户型可眺望市民中心灯光秀及莲花山景，南向户型可俯瞰社区花园或远眺香港山景。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>核心地段</th><td>福田中心区唯一在售新盘，深圳中轴线核心，北接CBD，南望香港</td></tr>
                    <tr><th>交通网络</th><td>四线地铁环绕，紧邻皇岗口岸，深港通勤便捷</td></tr>
                    <tr><th>产品领先</th><td>新规超高使用率，部分户型达95%，远超市场平均水平</td></tr>
                    <tr><th>商业丰富</th><td>自带约7万㎡商业MALL，周边五大商圈环伺</td></tr>
                    <tr><th>教育优质</th><td>学区涵盖省一级皇岗小学和中考成绩优异的皇岗创新实验学校</td></tr>
                    <tr><th>开发商实力</th><td>卓越集团深耕深圳近30年，开发过多个人居标杆项目</td></tr>
                </table>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                                <table>
                    <tr><th>居住密度高</th><td>容积率5.07，6栋超高层最高达45层，低楼层可能存在采光遮挡</td></tr>
                    <tr><th>周边环境待改善</th><td>属于皇岗村旧改项目，旧改周期需5年以上，目前周边仍有农民房</td></tr>
                    <tr><th>噪音影响</th><td>北侧紧邻滨河大道，夜间实测噪音超70分贝，可能影响临路户型居住体验</td></tr>
                    <tr><th>圈层纯粹性不足</th><td>一期回迁房占比超60%，可能对社区高端居住氛围产生一定影响</td></tr>
                </table>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>福田改善型家庭</th><td>需要优质学区和完善配套的四房需求者</td></tr>
                    <tr><th>深港双城通勤人士</th><td>项目距皇岗口岸仅2站地铁，适合频繁往来深港的人群</td></tr>
                    <tr><th>追求核心地段资产者</th><td>看重福田中心区稀缺新盘的保值增值潜力</td></tr>
                    <tr><th>注重产品品质的购房者</th><td>欣赏新规高使用率户型和智能家居系统</td></tr>
                </table>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>卓越缦悦作为<strong>福田中心区皇岗旧改的首期项目</strong>，其核心价值在于<strong>无可替代的地理位置、新规下的高使用率产品以及丰富的综合配套</strong>。项目地处深圳中轴线，同时享受福田CBD的成熟配套和河套合作区的未来潜力。</p>
            
            <div class="warning">
                <p><strong>置业建议：</strong>项目已于2025年11月8日正式开盘，首推1栋5单元共232套房源。对于追求福田核心地段、优质学区和改善居住品质的购房者，这是一个值得重点关注的选择。</p>
            </div>
            
            <p>尽管项目存在旧改周期较长、居住密度高等不足，但考虑到福田中心区新盘的极度稀缺性，以及项目自身在户型设计、智能家居和商业配套上的优势，卓越缦悦仍是当前市场中改善型置业的重要选项。随着皇岗口岸升级和河套合作区发展，区域价值有望进一步提升。</p>
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
            <h1>卓越缦悦</h1>
            <div class="subtitle">城市核心 · 高端品质住宅社区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供卓越缦悦项目的全面户型分析，结合卓越集团高端住宅设计标准，深入解析各户型亮点与价值，帮助您系统回顾项目优势，为决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>项目户型采用卓越集团新一代高端住宅设计理念，通过精细化空间布局和人性化细节设计，实现功能与美学的完美平衡，部分户型通过创新设计，在合理面积内营造出超越预期的空间体验。</p>
            
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
                        <td><strong>悦享 / 悦景</strong></td>
                        <td>约95-98㎡</td>
                        <td>三房两厅两卫</td>
                        <td>横厅设计，双面采光，LDK一体化，主卧套房</td>
                    </tr>
                    <tr>
                        <td><strong>悦澜 / 悦海</strong></td>
                        <td>约118-125㎡</td>
                        <td>四房两厅两卫</td>
                        <td>端厅设计，270°观景视野，双套房设计，独立家政间</td>
                    </tr>
                    <tr>
                        <td><strong>悦峰 / 悦宸</strong></td>
                        <td>约143-150㎡</td>
                        <td>四房两厅三卫</td>
                        <td>南北通透，客厅开间约6.2米，双主卧套房，中西双厨</td>
                    </tr>
                    <tr>
                        <td><strong>悦府 / 悦庭</strong></td>
                        <td>约185-210㎡</td>
                        <td>五房两厅三卫</td>
                        <td>大平层格局，独立电梯厅，总统套房式主卧，多功能厅</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约2.8</div>
                    <div class="parameter-desc">低密度高端社区，居住舒适度高</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">南向/东南向</div>
                    <div class="parameter-desc">主要户型均实现最佳日照与通风</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 空间利用率</div>
                    <div class="parameter-value">超高效率</div>
                    <div class="parameter-desc">精细化设计，空间无浪费</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">超高层住宅</div>
                    <div class="parameter-desc">采用卓越高端产品线标准</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约118-125㎡</div>
                        <div class="unit-name">悦澜 / 悦海</div>
                    </div>
                    <div class="unit-body">
                        <h4>全景视野改善典范 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">端厅设计</span>
                            <span class="tag">270°视野</span>
                            <span class="tag">双套房</span>
                            <span class="tag">独立家政间</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间革新：</strong>创新端厅设计，将传统走廊面积转化为实用空间，实现约118㎡面积内双套房配置。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>客厅位于户型端头，实现270°观景视野，卧室集中布局保障私密性，动静分区清晰。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>三面采光，主次卧均配备大面积飘窗，部分户型配置全景落地窗，视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足多孩家庭、需要独立办公空间或注重景观视野的改善型客户需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型代表了新一代改善住宅的设计趋势，在有限面积内实现了以往大平层才有的空间体验和景观享受，是项目的明星产品。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约95-98㎡</div>
                        <div class="unit-name">悦享 / 悦景</div>
                    </div>
                    <div class="unit-body">
                        <h4>品质刚改首选 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">横厅设计</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">双面采光</span>
                            <span class="tag">全明格局</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>约95㎡实现横厅设计+主卧套房配置，空间利用率达行业领先水平。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>设计亮点：</strong>LDK一体化横厅设计，增强家庭互动；主卧套房配置，提升居住品质。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>追求品质生活的首次改善家庭、注重空间感的年轻夫妇的理想选择。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>设计巧思：</strong>U型厨房搭配早餐台设计；卫生间三分离；玄关预留全身镜位置，细节体现人性化。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在主流面积段内实现改善型产品的空间体验，是进入卓越高端社区的最低门槛，兼具自住舒适性与资产增值潜力。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约143-150㎡</div>
                    <div class="unit-name">悦峰 / 悦宸</div>
                </div>
                <div class="unit-body">
                    <h4>奢阔尺度标杆 · 四房三卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">双主卧套房</span>
                        <span class="tag">中西双厨</span>
                        <span class="tag">宽厅设计</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度：</strong>客厅开间达约6.2米，搭配观景阳台（约16.5㎡），空间感媲美豪宅。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节品质：</strong>双主卧套房设计，满足两代主人的居住尊严；中西双厨配置，适应多元生活方式。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观优势：</strong>南北通透，双主卧均享南向视野，客厅270°观景，实现景观资源最大化利用。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>追求极致空间体验、注重家庭社交与私密平衡的高净值改善家庭。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型代表了项目的高端定位，不仅满足功能性需求，更注重居住仪式感、空间层次感和家庭社交需求，是城市核心区稀缺的改善型产品。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】户型设计前瞻性</h4>
                <p>项目户型设计充分考虑未来十年居住趋势：1) 全屋智能家居系统预埋，支持语音控制、场景联动；2) 充分考虑居家办公与学习需求，设置独立书房或可灵活改造的多功能空间；3) 健康住宅理念贯穿设计，配备新风系统、净水系统、防霉防潮处理；4) 适老化设计考量，预留电梯担架尺寸，卫生间扶手预埋件。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>端厅创新设计</h4>
                        <p>部分户型采用端厅设计，将传统走廊面积转化为实用空间，同时实现270°观景视野，革新传统户型格局。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>全景视野最大化</h4>
                        <p>大面积落地窗、转角飘窗、观景阳台组合设计，最大化采光面和景观视野，实现"窗即是景"的居住体验。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>卓越精装体系</h4>
                        <p>搭载卓越集团高端精装体系，选用国际一线品牌，在收纳系统、智能家居、健康科技方面体现人性化考量。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>精细化空间设计</h4>
                        <p>中西双厨、独立家政间、三分离卫生间、玄关收纳系统等精细化设计，提升居住便利性与生活品质。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h4>超高空间效率</h4>
                        <p>创新布局减少交通面积浪费，在同等面积下实现更多功能空间，实际使用感受远超传统户型。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>私密性与社交平衡</h4>
                        <p>动静分区清晰，主次卧分离设计，保障家庭成员隐私，同时客厅餐厅一体化增强家庭互动与社交功能。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目户型特点、周边环境及日照分析，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #0c4b8a;">约95-98㎡ 三房 · 悦享/悦景</h4>
                <p><strong>建议楼层：</strong>中高楼层（15层及以上）</p>
                <p><strong>选择理由：</strong>获得更好的视野和采光，避免低楼层可能存在的视线干扰。</p>
                <p><strong>注意事项：</strong>建议选择东南朝向户型，可享受早晨阳光且避免西晒。</p>
                
                <h4 style="margin-top: 25px; color: #0c4b8a;">约118-125㎡ 四房 · 悦澜/悦海</h4>
                <p><strong>景观选择：</strong>悦澜户型（端厅设计）景观视野更开阔，注重景观的客户可优先考虑。</p>
                <p><strong>隐私选择：</strong>悦海户型（传统布局）卧室私密性更佳，注重休息安静的客户可优先考虑。</p>
                <p><strong>楼层建议：</strong>中高楼层（20层以上）可最大化端厅设计的景观价值，中楼层（10-20层）性价比更高。</p>
                
                <h4 style="margin-top: 25px; color: #0c4b8a;">约143-150㎡ 四房 · 悦峰/悦宸</h4>
                <p><strong>建议楼层：</strong>高楼层（25层及以上）</p>
                <p><strong>选择理由：</strong>最大化约6.2米宽厅和双主卧套房的景观价值，视野开阔度随楼层显著提升。</p>
                <p><strong>重点关注：</strong>东南朝向可享受全天候优质日照，西南朝向下午阳光更充足但需注意西晒。</p>
                
                <h4 style="margin-top: 25px; color: #0c4b8a;">约185-210㎡ 五房 · 悦府/悦庭</h4>
                <p><strong>建议楼层：</strong>次顶层或高区优质楼层</p>
                <p><strong>选择理由：</strong>作为项目顶级产品，应选择最佳景观视野楼层，实现产品价值最大化。</p>
                <p><strong>重点关注：</strong>关注楼栋在社区中的位置，优选中心景观楼王位置，同时考虑视野开阔度。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>项目为卓越集团高端产品线，容积率仅约2.8，整体居住密度低、品质高。以上建议仅供参考，最终选择需结合实地看房感受、个人偏好、价格及房源实际情况等因素综合考虑。建议优先考虑中高楼层户型，以最大化项目景观资源和产品价值。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】户型选择的六个维度</h4>
                <p>1. <strong>家庭生命周期匹配</strong>：根据家庭当前及未来5-10年可能的变化选择户型；<br>
                2. <strong>生活方式偏好</strong>：爱好社交的家庭优选宽厅户型，注重隐私的家庭优选卧室分离户型；<br>
                3. <strong>景观价值取向</strong>：端厅户型景观视野开阔，传统户型实用性更强；<br>
                4. <strong>日照与通风需求</strong>：南向/东南向日照最佳，端厅户型通风效果更佳；<br>
                5. <strong>功能空间优先级</strong>：根据家庭对厨房、书房、衣帽间等功能空间的需求排序选择；<br>
                6. <strong>资产配置考量</strong>：结合预算和资产配置计划，选择最具保值增值潜力的户型与楼层。</p>
            </div>
        </div>
    </div>
`
            },
            "金地环湾城": {
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
            <h1>金地环湾城项目详解</h1>
            <p class="subtitle">福田红树林超百万平米综合体 | 深港超级湾战略节点 | 红岭直属学区海景大城</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>金地环湾城是坐落于福田红树林片区的超百万平方米城市综合体，聚合住宅、商业、办公、酒店、学校等八大业态。项目占据“深港超级湾”核心战略位置，北接香蜜湖新金融中心，南连河套深港科技创新合作区，坐拥红树林湿地与深圳湾海景双重稀缺资源。作为福田区2025年的热门改善楼盘，它以其核心地段、顶尖配套和稀缺景观，成为高净值人群置业的焦点。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>稀缺景观</th><td>直面约15公里深圳湾海景与国家级红树林湿地，部分户型可远眺香港米埔自然保护区。</td></tr>
                    <tr><th>顶尖教育</th><td>配建红岭教育集团红树林校区（九年一贯制72班公立学校），为红岭集团直属旗舰校区。</td></tr>
                    <tr><th>交通枢纽</th><td>双地铁上盖物业（7号线沙尾站+规划22号线），1站可达香蜜湖与河套合作区。</td></tr>
                    <tr><th>全能配套</th><td>自带约15万㎡高端商业、大湾区首座嘉佩乐隐奢酒店，形成“城中之城”生活体系。</td></tr>
                    <tr><th>核心地段</th><td>地处福田三大新引擎（香蜜湖、河套、环中心公园）辐射核心，区位价值突出。</td></tr>
                </table>
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
                    <td>深圳市金地新沙房地产开发有限公司（金地集团）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>金地物业</td>
                </tr>
                <tr>
                    <td><strong>物业管理费</strong></td>
                    <td>8.9元/㎡·月</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约9.6万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约113万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>约8.6</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>约23%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>由4个地块组成，包含超高层住宅、公寓、写字楼、商业、学校等</td>
                </tr>
                <tr>
                    <td><strong>总房源（住宅）</strong></td>
                    <td>848套</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>1499个停车位，车位比约1:1.3</td>
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
                    <td><strong>最新动态</strong></td>
                    <td>加推最后一栋住宅T5单元，面积为111-125㎡3-4房</td>
                </tr>
            </table>
        </section>
        
        <section class="product-features">
            <h2>产品与设计亮点</h2>
            <p>作为福田中心区罕有的全能型大盘，金地环湾城在产品打造上汇聚了众多国际资源，旨在提供一种集自然、繁华与人文于一体的“漫调生活”。</p>
            
            <div class="highlight">
                                <table>
                    <tr><th>国际大师团队</th><td>项目邀请了福斯特建筑事务所（Foster + Partners）、商业设计团队LEAD8（深圳湾万象城设计团队）等全球知名公司操刀设计。</td></tr>
                    <tr><th>生态融合设计</th><td>商业以“公园”为灵感，打造自然与建筑融合共生的空间；规划41层约150米高的空中生态庭院。</td></tr>
                    <tr><th>多元产品线</th><td>涵盖约75-270㎡的住宅，以及160-290㎡的70年产权公寓（通燃气、带阳台），满足不同客群需求。</td></tr>
                    <tr><th>精装品质</th><td>精装交付标准较高，配备国际品牌厨电与智能家居系统。</td></tr>
                    <tr><th>超高层视野</th><td>住宅层高在3.05米至3.5米之间，超高层设计带来开阔的城市与海景视野。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置与景观</h3>
            <p>位于福田区福强路与沙嘴路交汇处，地处深圳湾海岸线核心。项目独享“山、海、林、岭、湖”五重稀缺景观：远眺山景与香蜜湖，窗瞰深圳湾滨海长廊，步览红树林国家级湿地，尽览高尔夫果岭，形成“一面城市繁华，一面山海盛景”的格局。</p>
            
            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>下楼即达7号线沙尾站A口，真正地铁上盖；步行约5分钟可达7号线上沙站。规划中的22号线将在上沙站交汇，预计2028年开通，1站直达香蜜湖与河套。</td></tr>
                    <tr><th>自驾</th><td>周边福强路、沙嘴路、滨河大道等主干道环绕，5分钟上滨河大道，15分钟覆盖福田CBD、深圳湾口岸。</td></tr>
                    <tr><th>城际与口岸</th><td>临近皇岗口岸（正在升级改造），可通过地铁快速换乘广深港高铁；穗莞深城际铁路将串联前海、超总基地等核心。</td></tr>
                </table>
            
            <h3>🏫 教育资源</h3>
                            <table>
                    <tr><th>配建学校</th><td>投资超8亿，配建红岭教育集团红树林校区。这是一所九年一贯制72班（小学48班+初中24班）公立学校，占地面积约3.2万㎡，为福田规模最大的新校之一。</td></tr>
                    <tr><th>学区划分</th><td>目前小学学区为绿洲小学（正拆除扩建），中学学区为上沙中学（红岭实验）。</td></tr>
                    <tr><th>项目配套</th><td>自带幼儿园。</td></tr>
                </table>
            
            <h3>🛍️ 商业与酒店配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>打造约15万㎡的全球潮流商业，由LEAD8设计，以开放式公园商业为理念，计划引入高端零售、餐饮等业态。</td></tr>
                    <tr><th>顶奢酒店</th><td>引入国际顶奢品牌——嘉佩乐酒店，这也是该品牌首次进入大湾区。</td></tr>
                    <tr><th>周边商业</th><td>步行可达绿景佐阾红树林购物中心，1.5公里内还有KK ONE、中洲C Future City等大型商场。</td></tr>
                </table>
            
            <h3>🌳 生态与文体</h3>
            <p>项目南侧紧邻红树林生态湿地与深圳湾公园。周边汇聚深圳博物馆、音乐厅、图书馆、少年宫、中心书城等市级文化设施。</p>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>地段与景观稀缺</th><td>福田核心区+深圳湾海景+红树林湿地，自然资源与城市资源双重占优，抗跌性强。</td></tr>
                    <tr><th>配套全能且高端</th><td>自带高端商业、顶奢酒店、红岭直属名校，形成高度自给自足的“微缩城市”。</td></tr>
                    <tr><th>交通极其便利</th><td>双地铁上盖，快速连接福田CBD、香蜜湖、河套及香港，通勤效率高。</td></tr>
                    <tr><th>产品设计国际化</th><td>汇聚全球顶尖设计团队，建筑品质与美学标准高。</td></tr>
                    <tr><th>大盘规模效应</th><td>超百万平米综合体，业态丰富，生活便利性极高，是福田罕有的大社区。</td></tr>
                </table>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                                <table>
                    <tr><th>居住密度高</th><td>容积率约8.6，楼栋均为超高层，楼间距相对较近，低层户型视野和采光可能受影响。</td></tr>
                    <tr><th>户型使用率</th><td>部分户型赠送前使用率在70-72%之间，相对于深圳新规后的户型有所偏低。</td></tr>
                    <tr><th>周边环境待提升</th><td>项目位于大金沙旧改片区，周边仍存在部分城中村，城市界面完全更新尚需时间。</td></tr>
                    <tr><th>新学校有待观察</th><td>红岭红树林校区为新学校，师资力量和教学成果需要时间验证。</td></tr>
                    <tr><th>价格门槛高</th><td>主力改善户型总价在千万级别，购房门槛较高。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>高端改善型家庭</th><td>追求福田核心地段、稀缺景观、顶级学区和完整配套的多次置业者。</td></tr>
                    <tr><th>深港双城生活者</th><td>工作往来于深港两地的专业人士，看重临近口岸与高效交通。</td></tr>
                    <tr><th>重视教育的家庭</th><td>将红岭直属名校作为重要考量因素的家长。</td></tr>
                    <tr><th>看重综合价值的投资者</th><td>认可福田核心区资产保值增值潜力，看重大盘综合配套带来的长期价值。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>金地环湾城是福田中心区近年来规模最大、业态最全的综合体项目之一，其核心价值在于将 “稀缺生态资源”、“顶尖城市配套”与“核心枢纽地段” 三者合一。项目打造的不是单纯的住宅，而是一个功能完整的“城中之城”，满足了高端客群对一站式品质生活的几乎所有想象。</p>
            
            <div class="warning">
                <p><strong>置业提示：</strong>项目正处于收官阶段，加推最后一栋T5住宅。对于预算充足、尤其看重稀缺海景景观和红岭学位的改善型买家而言，这是一个极具吸引力的选择。但同时需理性考量高容积率下的居住密度和周边环境成熟度等问题。建议实地感受样板间视野和不同楼层的采光情况。</p>
            </div>
            
            <p>总体而言，金地环湾城凭借其难以复制的区位和综合实力，已成为深圳楼市中的一个标志性作品。它代表了当下高端置业的一种趋势：从追求单一住房属性，转向追求融合自然、繁华、文化与便利的复合型生活场。</p>
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
            <h1>金地环湾城</h1>
            <div class="subtitle">深圳福田 · 百万方世界级都会综合体</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳福田金地环湾城项目的全面户型分析，作为福田中心区罕见的百万方都市综合体，项目以“八大业态”重构城市生活。报告将深入解析其“动态成长户型”理念与垂直空间价值，助您系统了解项目核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>金地环湾城是福田大金沙片区的核心旧改项目，总建筑面积约103万㎡，涵盖住宅、公寓、商业、办公、学校、酒店、公园及文化设施八大业态。项目通过超高层设计实现生态、城市、人文三重景观的立体分层，户型梯度全面覆盖从刚需到顶豪的全生命周期需求。当前主力在售二期T5、T6栋精装住宅。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与命名</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>D户型 (入门海景藏品)</strong></td>
                        <td>约111-112㎡</td>
                        <td>三房两厅两卫</td>
                        <td>三开间朝南，主卧270°飘窗，三分离卫浴，LDKB一体化</td>
                    </tr>
                    <tr>
                        <td><strong>A/B/C户型 (功能型奢宅)</strong></td>
                        <td>约122-125㎡</td>
                        <td>3+1房两厅两卫</td>
                        <td>270°阔景阳台，横厅/竖厅可选，多功能灵动空间</td>
                    </tr>
                    <tr>
                        <td><strong>高净值改善户型</strong></td>
                        <td>约183㎡</td>
                        <td>四房两厅三卫</td>
                        <td>双玄关设计，约7.4米宽厅，主卧行宫式套房</td>
                    </tr>
                    <tr>
                        <td><strong>楼王顶层藏品</strong></td>
                        <td>约253-270㎡</td>
                        <td>4+1房两厅四卫</td>
                        <td>南北通透，270°环幕视野，洄游动线，空中会所级阳台</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约8.6</div>
                    <div class="parameter-desc">超高层都市综合体，立体集约开发</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">东南/西南向</div>
                    <div class="parameter-desc">东南向城景，西南向享红树林海景</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 得房率</div>
                    <div class="parameter-value">约77%</div>
                    <div class="parameter-desc">含赠送后实用率提升</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">超高层住宅</div>
                    <div class="parameter-desc">53-60层，4梯3户/4梯6户</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约122-125㎡</div>
                        <div class="unit-name">A/B/C户型 · 功能型奢宅</div>
                    </div>
                    <div class="unit-body">
                        <h4>“动态成长”的改善标杆 · 3+1房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">270°观景</span>
                            <span class="tag">横厅/竖厅</span>
                            <span class="tag">多功能空间</span>
                            <span class="tag">入门海景藏品</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间魔法：</strong>创新“动态成长户型”理念，约6.5㎡多功能空间可灵活改造为书房、琴房或临时客房，适应家庭结构变化。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>C户型为约6.2米时尚大横厅，搭配270°转角阳台，营造IMAX级观景面；A/B户型可选择经典竖厅或“双龙抱珠”格局。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>西南朝向，高楼层户型可无遮挡远眺红树林湿地及深圳湾海景，部分户型拥有约6.7米双开间阳台。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>追求景观与功能兼备的改善家庭，既能满足二孩成长需求，又能享受福田核心区稀缺的生态景观资源。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>作为项目的“入门级海景藏品”，以千万级总价门槛，即可拥有福田中心区难以复制的永久性山海城湾景观，稀缺性显著。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约111-112㎡</div>
                        <div class="unit-name">D户型 · 全能三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>高效实用的品质首选 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">三开间朝南</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">高性价比</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>面宽约9.2米实现三开间朝南，LDKB一体化设计（客餐厨阳台联动），在有限面积内营造出开阔的空间视觉效果。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>设计亮点：</strong>主卧配备步入式衣帽间及三分离卫浴，干湿互不干扰；U型厨房操作台面长约5.2米，实用性极强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>福田CBD通勤的年轻家庭、首次改善客群，以总价约1023万起入住福田核心区综合体，性价比突出。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>设计巧思：</strong>东南朝向，中高楼层可远眺城市地标景观；户型方正，动静分区清晰，保障休息私密性。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在福田同面积段产品中，罕有能同时做到三开间朝南、主卧套房及双卫配置，是进入该顶级综合体的高性价比选择。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端及顶级户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约253-270㎡</div>
                    <div class="unit-name">楼王 · 空中府邸</div>
                </div>
                <div class="unit-body">
                    <h4>资源垄断的顶豪藏品 · 4+1房四卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">270°环幕</span>
                        <span class="tag">四卫配置</span>
                        <span class="tag">洄游动线</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>极致尺度：</strong>约8.7米南向主阳台，可打造空中会所；南北通透，形成“玄关→中西厨→餐厅→客厅→阳台”的奢华洄游动线。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节品质：</strong>四卫配置满足大家庭及社交需求；精装可选国际顶奢品牌或现代艺术主题，提供“私人管家式”软装托管服务。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观垄断：</strong>270°环幕视野，从红树林湿地延伸至香港米埔保护区，饱览深圳湾海景与城市天际线，景观资源无可复制。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>塔尖圈层客群，追求极致空间尺度、无敌景观和顶级圈层社交场域的企业主、财富家族。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型代表了福田滨海片区的资产高度，不仅是对奢侈空间的占有，更是对深圳湾最核心稀缺自然景观资源的永久占有，具备强大的资产保值与增值潜力。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】垂直空间价值与八大业态</h4>
                <p>项目核心竞争力在于“垂直空间价值重构”：1) 通过超高层将生态（红树林）、城市（CBD）、人文（繁华）景观立体分层；2) “八大业态”于一体，下楼即享约15万㎡公园式商业、红岭教育集团旗舰校区、大湾区首座嘉佩乐酒店，实现真正的“微缩城市”生活；3) 交通网络发达，坐拥7号线双地铁口，未来22号线、穗莞深城际铁路无缝接驳，迅捷连通深港广。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>永久性稀缺景观</h4>
                        <p>占据福田最为稀缺的瞰海席位，饱览红树林湿地、深圳湾海景、香蜜湖、城市CBD五重景观，高区户型视野无遮挡。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>动态成长户型理念</h4>
                        <p>创新性提出“动态成长户型”，通过多功能灵动空间设计，让户型能随家庭生命周期变化而“成长”，破解改善家庭痛点。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>精装细节与人性化考量</h4>
                        <p>精装交付，主卧普遍采用三分离卫浴、步入式衣帽间；部分大户型配备双玄关、中西双厨、智能化安防及适老化细节。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>百万方综合体全能配套</h4>
                        <p>自成一城，集住宅、顶级酒店、大型商业、名校、公园于一体，生活、教育、社交需求在步行范围内全能解决。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h4>核心区位与交通枢纽</h4>
                        <p>地处福田核心，毗邻车公庙、香蜜湖、河套合作区；双地铁上盖，未来是三条城轨交汇的超级枢纽，连通深港广。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>金地匠心与国资背书</h4>
                        <p>由“理科生”金地集团与福田区属国企福田投控联袂打造，品质与交付有强力保障，是区域城市更新的标杆之作。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目超高层、高容积率的特性及差异化的景观资源，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #003366;">约111-112㎡ D户型 · 高性价比三房</h4>
                <p><strong>建议楼层：</strong>中高楼层（20层及以上）</p>
                <p><strong>选择理由：</strong>东南朝向，中高楼层能有效越过前方建筑，获得更开阔的城市景观视野，采光更优。</p>
                <p><strong>注意事项：</strong>该户型总价优势明显，但需注意容积率较高，低楼层视野和采光可能受较大影响。</p>
                
                <h4 style="margin-top: 25px; color: #003366;">约122-125㎡ A/B/C户型 · 功能型海景奢宅</h4>
                <p><strong>景观优先：</strong>强烈建议选择高楼层（40层以上），这是实现“红树林+深圳湾”无遮挡海景价值的唯一途径。</p>
                <p><strong>格局选择：</strong>追求IMAX观景和社交空间选C户型（横厅+转角阳台）；注重传统格局和私密性可选A/B户型。</p>
                <p><strong>朝向解读：</strong>西南朝向为景观面，看海；东南朝向看城市景观，可根据对景观的执着程度选择。</p>
                
                <h4 style="margin-top: 25px; color: #003366;">约183㎡及以上 高端改善及楼王户型</h4>
                <p><strong>建议楼层：</strong>次顶或高区楼王楼层</p>
                <p><strong>选择理由：</strong>此类户型客群对尺度和景观有极致要求，必须选择能最大化其270°环幕视野的楼层，否则产品价值大打折扣。</p>
                <p><strong>重点关注：</strong>除了楼层，应关注楼栋在社区中的位置，优选远离主干道、视野开阔无遮挡的单元。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>项目为容积率约8.6的超高层综合体，楼间距相对紧凑。因此，“买高不买低”的原则在此项目尤为重要，高层与低层的视野、景观价值差异巨大。同时，项目自带顶级配套，选择时应更聚焦于户型内部格局和景观资源本身。最终选择需结合实地看房感受、个人偏好及价格等因素综合考虑。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】金地环湾城客群选择逻辑</h4>
                <p>1. <strong>总价预算导向型</strong>：约111㎡D户型是入住福田核心综合体的最低门槛，适合预算有限但看重地段与潜力的客户。<br>
                2. <strong>景观价值执着型</strong>：约125㎡高区户型是“海景入场券”，为痴迷深圳湾景观的改善家庭量身定制。<br>
                3. <strong>全能配套依赖型</strong>：看重“楼下即一切”的便利性，包含教育、商业、公园等，适合追求高效生活的城市精英。<br>
                4. <strong>资产配置塔尖型</strong>：约253-270㎡楼王产品，属于稀缺资产配置，客户更看重其不可复制的景观资源与圈层属性。</p>
            </div>
        </div>
    </div>
`
            },
            "新世界四季家园": {
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
            <h1>新世界香蜜四季家园项目详解</h1>
            <p class="subtitle">福田香蜜湖新规大宅 | 华泰旧改15年蜕变 | 争议与机遇并存的改善盘</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>新世界香蜜四季家园是位于福田区景田片区的超高层综合体，前身为历时约15年（约2010-2025年）的“华泰小区”旧改项目。项目营销主打“香蜜湖新规大宅”，享有紧邻香蜜湖金融中心的地理优势。然而，其实际行政区域归属景田南片区，而非官方香蜜湖片区，加之较高的容积率、复杂的社区配比和开发商背景，使其市场评价颇具争议，被部分市场观点称为“伪豪宅”。项目已于2025年9月29日开盘入市。预计于2028年6月交付使用。</p>
            
            <div class="highlight">
                <h3>核心争议与亮点</h3>
                                <table>
                    <tr><th>地段光环与归属争议</th><td>营销借力“香蜜湖”，但实际属于景田南，学区等关键配套与香蜜湖豪宅区有别。</td></tr>
                    <tr><th>稀缺供应与复杂社区</th><td>片区多年断供后的大型新盘，但社区内含回迁房、保障房、公寓等，商品房仅占一半。</td></tr>
                    <tr><th>新规设计与高容积率</th><td>采用新规设计，据称部分户型使用率高，但容积率高达7.628，楼栋密集。</td></tr>
                    <tr><th>成熟配套与环境短板</th><td>交通、商业等配套成熟，但临近垃圾转运站的问题引发过周边居民投诉。</td></tr>
                </table>
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
                    <td>深圳市新世界房地产开发有限公司（深圳新世界集团）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>深圳市新投物业管理有限公司</td>
                </tr>
                <tr>
                    <td><strong>物业管理费</strong></td>
                    <td>信息缺失</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约4.11万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约46.6万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>7.628</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>共10栋+1栋幼儿园。其中商品房5栋，保障房1栋，回迁房3栋，酒店公寓1栋</td>
                </tr>
                <tr>
                    <td><strong>总户数（住宅）</strong></td>
                    <td>923户（不含公寓、保障性住宅），可售商品房约770套</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>2681个</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2013年-2083年）</td>
                </tr>
                <tr>
                    <td><strong>最新动态</strong></td>
                    <td>已于2025年9月29日开盘</td>
                </tr>
            </table>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置与争议</h3>
            <p>位于福田区香梅路与新闻路交汇处东北角，行政上隶属莲花街道景田南片区，紧邻但非严格意义上的香蜜湖核心片区。项目南侧临近深圳高尔夫俱乐部，周边有香蜜湖金融中心、市民中心等地标。</p>
            
            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>双地铁口物业，距离9号线香梅站约300-400米，距离1号线香蜜湖站约400-500米，步行5-8分钟可达。</td></tr>
                    <tr><th>自驾</th><td>周边有深南大道、香蜜湖路、新洲路等城市主干道，自驾出行便捷。</td></tr>
                </table>
            
            <h3>🏫 教育资源（重要关注点）</h3>
                            <table>
                    <tr><th>学区划分</th><td>根据福田区教育局学区划分，小学对口景鹏小学，初中对口黄埔学校初中部。黄埔中学在福田区处于中等偏下梯队。</td></tr>
                    <tr><th>周边学校</th><td>周边分布有荔园外国语小学（景田校区、深南校区）、耀华实验学校等，但并非项目直接对口学区。</td></tr>
                    <tr><th>项目配套</th><td>自建一所9班制幼儿园。</td></tr>
                </table>
            
            <h3>🛍️ 商业配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>项目规划有约5万㎡集中式商业。</td></tr>
                    <tr><th>周边商业</th><td>周边有香蜜湖沃尔玛、1979文化新天地、山姆会员店以及福田CBD的星河COCO Park、皇庭广场等大型商业体。</td></tr>
                </table>
            
            <h3>⚠️ 环境与不利因素</h3>
                            <table>
                    <tr><th>垃圾站问题</th><td>项目附近存在景田南垃圾转运站，曾因异味问题引发周边居民投诉，虽经整改但问题未彻底搬迁。</td></tr>
                    <tr><th>旧改环境</th><td>周边有香蜜二村等旧改项目，长期可能面临施工噪音和粉尘影响。</td></tr>
                </table>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>地段稀缺性</th><td>位于福田核心区，香蜜湖/景田片区断供多年后的大型新盘，区位价值认可度高。</td></tr>
                    <tr><th>交通便利</th><td>双地铁上盖，公共交通极为便利，通达全城。</td></tr>
                    <tr><th>配套成熟</th><td>周边商业、医疗、公园等生活配套非常成熟，生活便利度高。</td></tr>
                    <tr><th>产品改善定位</th><td>主力户型为三房以上改善型，满足高端客群一步到位的需求。</td></tr>
                </table>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>区域标签错位</th><td>营销上的“香蜜湖”与实际“景田南”的学区、资源分配存在差距，可能影响价值预期。</td></tr>
                    <tr><th>社区纯粹性差</th><td>回迁房、保障房、公寓占比高，商品房仅占一半，未来社区氛围和物业管理可能面临挑战。</td></tr>
                    <tr><th>高密度居住体验</th><td>7.6的超高容积率导致楼间距近，居住密度大，影响采光、视野和私密性。</td></tr>
                    <tr><th>开发商争议</th><td>新世界集团有“捂盘”历史，且存在司法纠纷和被处罚记录，其开发的楼盘也曾出现维权问题。</td></tr>
                    <tr><th>周边环境短板</th><td>临近垃圾转运站（异味问题）和旧改施工区域，存在潜在环境风险。</td></tr>
                    <tr><th>学区优势不突出</th><td>对口的景鹏小学和黄埔中学，在名校林立的福田区并不占优势。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>注重福田核心地段的改善家庭</th><td>对通勤便利性和成熟生活配套有强烈要求，能接受高密度居住环境。</td></tr>
                    <tr><th>对“香蜜湖”品牌有情节但预算受限者</th><td>项目价格低于传统香蜜湖豪宅，提供了一个“上车”该片区的选项。</td></tr>
                    <tr><th>对学区要求不极致的购房者</th><td>能接受项目现有的学区配置，或将教育需求寄托于私立学校。</td></tr>
                    <tr><th>风险承受能力较强的投资者</th><td>能辩证看待项目的争议点，相信其地段稀缺性带来的长期价值，并愿意承担相应的社区、开发商等潜在风险。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>新世界香蜜四季家园是一个特点与缺点都极其鲜明的争议性楼盘。它的核心价值在于福田中心区、特别是香蜜湖辐射范围内极度稀缺的新房供应，以及成熟到位的城市配套。对于长期苦于该片区无新盘可选的改善客群，它具有天然的吸引力。</p>
            
            <div class="warning">
                <p><strong>置业警示：</strong>购房者必须清醒认识到其“光环”下的现实：高昂价格并未匹配纯粹的豪宅基因。超高密度、复杂的社区构成、存在争议的开发商背景、不占优的学区以及周边环境短板，都是实实在在的减分项。这更像是一个位于好地段的“高端改善盘”，而非传统意义上的“顶级豪宅”。</p>
            </div>
            
            <p>最终决策取决于购房者的价值排序：如果顶级地段和成熟便利性是你的最高优先级，并且你能包容或忽略其在社区纯粹性、居住密度和学区上的妥协，那么这个项目值得考虑。反之，如果追求极致的居住体验、纯粹的圈层和确定性的顶级教育资源，则需要非常谨慎。</p>
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
            <h1>香蜜四季家园</h1>
            <div class="subtitle">深圳福田 · 低密纯商品住宅社区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳福田新世界香蜜四季家园项目的全面户型分析，结合新版《住宅项目规范》设计标准，深入解析各户型亮点与价值，帮助您系统回顾项目优势，为决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>项目户型严格遵循2025年5月起实施的新版《住宅项目规范》（新国标）设计，通过优化布局和提升赠送面积，得房率远超市场平均水平，部分户型通过巧妙设计，实现在紧凑面积内营造奢阔空间感。</p>
            
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
                        <td><strong>锦翠 / 锦云</strong></td>
                        <td>约88-89㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，三开间朝南，LDKB一体化设计</td>
                    </tr>
                    <tr>
                        <td><strong>锦月 / 锦和 / 锦瑟</strong></td>
                        <td>约104-107㎡</td>
                        <td>四房两厅两卫</td>
                        <td>"双龙抱珠"格局，四开间朝南，部分户型270°飘窗</td>
                    </tr>
                    <tr>
                        <td><strong>玉澜 / 玉堂</strong></td>
                        <td>约127-130㎡</td>
                        <td>四房两厅两卫</td>
                        <td>独立玄关，客厅约5.1米开间，南向连续景观面</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约3.1</div>
                    <div class="parameter-desc">低密度纯商品房社区，居住舒适度高</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 南向开间</div>
                    <div class="parameter-value">3-4开间</div>
                    <div class="parameter-desc">主要户型均实现南向最大化设计</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 平均得房率</div>
                    <div class="parameter-value">超100%</div>
                    <div class="parameter-desc">含赠送面积，远超市场平均水平</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">高层住宅</div>
                    <div class="parameter-desc">采用新国标设计规范，居住品质升级</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约104-107㎡</div>
                        <div class="unit-name">锦月 / 锦和 / 锦瑟</div>
                    </div>
                    <div class="unit-body">
                        <h4>"空间魔术师"级刚改王牌 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高使用率</span>
                            <span class="tag">四开间朝南</span>
                            <span class="tag">双龙抱珠</span>
                            <span class="tag">家庭友好</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间魔法：</strong>在约104㎡面积内实现舒适四房两卫，使用率高达100.71%-104.06%（含赠送），堪称户型设计典范。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>部分户型（如107㎡）采用经典的"双龙抱珠"格局，客厅居中，卧室分列两侧，保障家庭成员间的隐私与静音。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>四开间朝南，搭配大面积飘窗（主卧及次卧配备270°无柱转角飘窗），实现阳光满屋。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>完美解决二胎家庭、三代同堂或需要独立书房/影音室的改善型需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型设计巧妙融合了功能性与舒适度，在有限面积内实现了传统130+㎡户型的功能配置，是项目中最具性价比的改善选择。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约88-89㎡</div>
                        <div class="unit-name">锦翠 / 锦云</div>
                    </div>
                    <div class="unit-body">
                        <h4>全能高效刚需首选 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高得房率</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">全明格局</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>在有限面积内做到全明格局、双卫配置，得房率约97.47%（含赠送），实用性极强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>设计亮点：</strong>LDKB（客、餐、厨、阳台）一体化设计，空间通透，增强家庭互动。客厅开间约3.5米，三开间朝南，采光充足。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>首次置业年轻家庭、追求便利的单身贵族或投资客的优质选择，总价门槛优势突出。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>设计巧思：</strong>U型厨房设计，烟道外置；卫生间干湿分离；预留冰箱卡槽位，细节体现人性化考量。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在福田核心区域，能以三房两卫的功能配置满足小家庭全方位需求，是稀缺的高效户型产品。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>标杆改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约127-130㎡</div>
                    <div class="unit-name">玉澜 / 玉堂</div>
                </div>
                <div class="unit-body">
                    <h4>尺度感十足的改善平层 · 四房两卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">奢阔尺度</span>
                        <span class="tag">独立玄关</span>
                        <span class="tag">主卧套房</span>
                        <span class="tag">全景视野</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度：</strong>客厅开间达约5.1米，搭配超大阳台（约14.09㎡），空间感与视野震撼。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节品质：</strong>设有独立玄关，增强归家仪式感；主卧套房配备270°转角飘窗及独立衣帽间。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观优势：</strong>南向连续景观面，部分高楼层可享城市天际线视野，实现景观资源最大化。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>追求宽阔空间体验、高品质社区环境和景观视野的高端改善家庭。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型代表了项目的品质标杆，不仅满足功能性需求，更注重空间感、仪式感和景观享受，是福田中心区稀缺的改善型产品。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】户型设计前瞻性</h4>
                <p>项目户型设计充分考虑未来居住趋势：1) 全屋预留智能化设备接口；2) 充分考虑居家办公需求，书房空间可灵活改造；3) 玄关处设置消杀功能区，符合后疫情时代健康居住需求；4) 厨房动线按照"取-洗-切-炒-盛"黄金流程设计，提升使用效率。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>南向最大化设计</h4>
                        <p>几乎所有户型均为南向或主要功能间朝南，确保最佳的日照与通风，提升居住健康度。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>高窗地比 & 全景视野</h4>
                        <p>广泛应用大面积飘窗、转角窗，部分户型配备270°无柱观景飘窗，最大化采光面和视野。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>全屋精装体系</h4>
                        <p>预计将精装交付，预计搭载绿城标志性的精装体系，在收纳、厨卫、智能化等方面体现人性化考量。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-ruler-combined"></i>
                    </div>
                    <div>
                        <h4>标准化细节设计</h4>
                        <p>U型厨房（烟道外置）、干湿分离卫生间、预留冰箱卡槽位等设计成为户型标配，提升居住便利性。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h4>高使用率与得房率</h4>
                        <p>巧妙利用新版《住宅项目规范》设计空间，赠送面积多，实际使用面积远超产权面积。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>私密性与静音设计</h4>
                        <p>"双龙抱珠"等格局有效分离动区与静区，减少家庭成员间干扰，提升居住私密性。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目户型特点、周边环境及日照分析，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约88-89㎡ 三房 · 锦翠/锦云</h4>
                <p><strong>建议楼层：</strong>中高楼层（8层及以上）</p>
                <p><strong>选择理由：</strong>获得更好的采光和视野，避免低楼层可能存在的遮挡。</p>
                <p><strong>注意事项：</strong>部分楼栋（如5、6栋）东南朝向低楼层可能受相邻书城建筑遮挡，建议实地查看光照情况。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约104-107㎡ 四房 · 锦月/锦和/锦瑟</h4>
                <p><strong>格局选择：</strong>"双龙抱珠"格局的107㎡户型（东北朝向）私密性更佳，注重卧室安静的客户可优先考虑。</p>
                <p><strong>景观选择：</strong>104㎡、106㎡户型（西南/东南朝向）景观视野可能更开阔，可根据对阳光和景观的偏好选择。</p>
                <p><strong>楼层建议：</strong>中高楼层（10层以上）可最大化景观价值，中低楼层（5-10层）性价比更高。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约127-130㎡ 四房 · 玉澜/玉堂</h4>
                <p><strong>建议楼层：</strong>中高楼层（12层及以上）</p>
                <p><strong>选择理由：</strong>实现其约5.1米开间客厅和超大阳台的景观价值最大化，视野开阔度随楼层递增。</p>
                <p><strong>重点关注：</strong>西南朝向高楼层或有更佳城市景观视野，东南朝向可享受更充足日照。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>项目为纯商品房社区，容积率仅约3.1，整体居住密度较低。以上建议仅供参考，最终选择需结合实地看房感受、个人偏好、价格及房源实际情况等因素综合考虑。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】户型选择的五个维度</h4>
                <p>1. <strong>家庭结构匹配度</strong>：根据家庭成员数量和年龄选择合适户型；<br>
                2. <strong>日照与通风偏好</strong>：南向户型日照最佳，但东西向可能有特殊景观；<br>
                3. <strong>景观价值取向</strong>：高楼层视野开阔，低楼层亲近园林；<br>
                4. <strong>隐私需求等级</strong>："双龙抱珠"格局隐私性最佳，适合多代同堂家庭；<br>
                5. <strong>未来可变性</strong>：考虑户型是否可随家庭需求变化进行改造。</p>
            </div>
        </div>
    </div>
`
            },
            "京基宸悦府": {
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
            <h1>京基宸悦府项目详情</h1>
            <p class="subtitle">福田中轴·地铁双线上盖·核心商圈·精装准现房</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>京基宸悦府是位于福田区上梅林片区的城市更新项目，由上梅林村祠堂村片区旧改而来。作为京基集团在福田中轴打造的综合体，项目地处福田CBD与梅林生态带的交界处，以“双地铁上盖+核心商圈+成熟配套”为核心卖点，是福田区近年来稀缺的新建住宅供应。</p>
            
            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>双地铁上盖</th><td>距离地铁4/9号线上梅林站仅约300米，真正的地铁口物业。</td></tr>
                    <tr><th>核心商圈环绕</th><td>步行400米直达卓悦汇购物中心（约20万㎡），周边商圈高度成熟。</td></tr>
                    <tr><th>福田中轴区位</th><td>地处福田CBD北延发展轴，自驾15分钟可达福田中心区。</td></tr>
                    <tr><th>生态资源丰富</th><td>北靠梅林山，南临莲花山公园，享“三山一水三公园”生态格局。</td></tr>
                    <tr><th>精装准现房</th><td>住宅预计2025年12月31日精装交付，购房风险较低。</td></tr>
                </table>
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
                    <td>京基集团（深圳市京基房地产股份有限公司）</td>
                </tr>
                <tr>
                    <td><strong>项目位置</strong></td>
                    <td>福田区上梅林片区，上梅街与祠堂西街交汇处东南侧</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约1.98万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约22.9万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>8.63</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>约31.5%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>4栋48层住宅 + 1栋45层商务公寓 + 1所6班幼儿园</td>
                </tr>
                <tr>
                    <td><strong>住宅总户数</strong></td>
                    <td>1011户（其中可售商品房约402套，回迁房约609套）</td>
                </tr>
                <tr>
                    <td><strong>梯户比</strong></td>
                    <td>住宅3梯5/6户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>车位比约1:1.24</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>精装交付</td>
                </tr>
                <tr>
                    <td><strong>住宅交付时间</strong></td>
                    <td>2025年12月31日</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>京基物业</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>约5.5元/㎡·月</td>
                </tr>
            </table>
        </section>
        
        <section class="facilities">
            <h2>项目配套</h2>
            
            <h3>📍 地理位置与规划</h3>
            <p>项目位于福田“深圳智谷”——梅林-彩田片区内，该片区是福田八大重点规划片区之一，规划投资约500亿打造高科技总部基地。项目本身是上梅林村城市更新单元二期，享受旧改带来的区域升级红利，但周边仍有部分城中村和老旧小区。</p>
            
            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>双地铁上盖，距离4/9号线换乘站上梅林站仅约300米；在建的22号线（未来凯丰站）也将在附近设站。</td></tr>
                    <tr><th>自驾</th><td>紧邻北环大道、新洲路等城市主干道，自驾通达福田中心区、南山、罗湖等地约15分钟。</td></tr>
                    <tr><th>公交</th><td>周边公交线路密集，接驳便利。</td></tr>
                </table>
            
            <h3>🏫 教育资源</h3>
                            <table>
                    <tr><th>幼儿园</th><td>项目自带一所6班制幼儿园。</td></tr>
                    <tr><th>小学学区</th><td>对口梅丽小学（2024年录取积分72.9分）。</td></tr>
                    <tr><th>初中学区</th><td>划入福田实验翰林学校初中部（2024年四大率约3.2%）。</td></tr>
                    <tr><th>客观评价</th><td>学区资源在福田区属于中等水平，并非顶尖名校。</td></tr>
                </table>
            
            <h3>🛍️ 商业配套</h3>
                            <table>
                    <tr><th>大型商场</th><td>步行约400米可达卓悦汇购物中心（约20万㎡）和新世界百货。</td></tr>
                    <tr><th>高端商圈</th><td>地铁3站内可达深业上城、中航城君尚等商圈。</td></tr>
                    <tr><th>社区商业</th><td>项目自带约9000㎡社区底商。</td></tr>
                </table>
            
            <h3>🏥 医疗与生态配套</h3>
                            <table>
                    <tr><th>医疗</th><td>200米内即福田区第二人民医院，1.2公里有北大深圳医院（三甲）。</td></tr>
                    <tr><th>生态</th><td>北靠梅林山、笔架山，南临莲花山公园，周边超460公顷“三山一水三公园”环绕，生态资源优越。</td></tr>
                </table>
        </section>
        
        <section class="project-features">
            <h2>项目特色</h2>
            
            <div class="highlight">
                <h3>社区规划与设计</h3>
                                <table>
                    <tr><th>现代风格立面</th><td>采用流线型外立面设计，搭配金属线条与玻璃幕墙。</td></tr>
                    <tr><th>围合式园林</th><td>楼栋呈阵列式排布，形成约1.2万㎡中央花园，打造“无界都市中心花园”。</td></tr>
                    <tr><th>全龄化配套</th><td>社区内规划有轻氧健身区、林荫剧场、儿童乐园、恒温泳池等六大主题空间。</td></tr>
                    <tr><th>酒店式归家动线</th><td>配备10.5米挑高门楼、礼仪水景等，提升归家仪式感。</td></tr>
                </table>
            </div>
            
            <div class="highlight">
                <h3>多元产品线</h3>
                                <table>
                    <tr><th>住宅产品（70年产权）</th><td>主力为建面85-143㎡的精装2-4房，面向家庭自住客户。</td></tr>
                    <tr><th>公寓产品（70年产权）</th><td>建面38-70㎡的精装1-2房，民水民电、通燃气、带阳台，可积分入学，面向投资及单身客户。</td></tr>
                    <tr><th>价格参考</th><td>住宅折后单价约7.5万/㎡起，公寓折后单价约3.9万/㎡起。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="analysis">
            <h2>优劣分析</h2>
            
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>地段与交通无敌</th><td>福田中轴核心，双地铁口（4/9号线上梅林站），通勤和出行极其便利。</td></tr>
                    <tr><th>生活配套成熟</th><td>紧邻卓悦汇等大型商圈，医疗、生态资源丰富，日常生活便利度极高。</td></tr>
                    <tr><th>品牌开发商</th><td>京基集团开发，品牌和后期物业服务有一定保障。</td></tr>
                    <tr><th>产品类型丰富</th><td>提供从38㎡公寓到143㎡住宅的多样选择，满足不同预算和需求的客户。</td></tr>
                    <tr><th>准现房销售</th><td>住宅即将交付，降低了期房不确定性风险。</td></tr>
                </table>
            </div>
            
            <div class="disadvantages">
                <h3>⚠️ 项目不足</h3>
                                <table>
                    <tr><th>高容积率与密度</th><td>容积率高达8.63，由48层超高层组成，居住密度大，高峰期电梯等待、社区公共空间拥挤是潜在问题。</td></tr>
                    <tr><th>社区纯粹性一般</th><td>项目为旧改小区，回迁房占比高（约60%），居住人群可能较为复杂。</td></tr>
                    <tr><th>学区资源普通</th><td>对口学校在福田区不算顶尖，对于有强烈“名校”需求的家庭吸引力有限。</td></tr>
                    <tr><th>周边城市界面混杂</th><td>虽然位于福田，但项目周边被部分城中村和老旧小区包围，城市界面新旧混杂，不如纯粹的新规划片区。</td></tr>
                    <tr><th>部分户型得房率中等</th><td>部分户型得房率约73%-75%，在当前深圳新规楼盘普遍高赠送的背景下不算突出。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>依赖地铁通勤的都市上班族</th><td>在福田、南山、罗湖等地工作，对地铁通勤便利性要求极高的客户。</td></tr>
                    <tr><th>看重成熟生活圈的务实家庭</th><td>希望步行范围内解决购物、休闲、医疗等日常需求，享受即时便利的家庭。</td></tr>
                    <tr><th>追求福田核心区位的购房者</th><td>预算相对充足，希望置业福田中轴，对城市核心地段有执念的客户。</td></tr>
                    <tr><th>低总价上车福田的投资者或单身人士</th><td>预算有限，希望通过公寓产品以较低门槛入驻福田核心区，用于投资或自住。</td></tr>
                    <tr><th>对学区要求不极致的家庭</th><td>能接受福田中等水平学区，更看重生活便利性和通勤效率。</td></tr>
                </table>
            </div>
        </section>
        
        <section class="summary">
            <h2>项目总结</h2>
            <p>京基宸悦府是一个优势与短板都非常鲜明的“地段型”项目。其核心价值在于 “福田中轴无可替代的地段+双地铁上盖的极致便利+触手可及的成熟生活圈” 。项目将所有城市核心资源都凝聚在步行范围内，为追求高效、便利都市生活的购房者提供了一个扎实的选择。</p>
            
            <div class="warning">
                <p><strong>购买建议：</strong>该项目最适合将地段和通勤便利性置于首位的购房者。如果您的工作生活圈高度依赖地铁4/9号线，且无法接受每日长途通勤，那么宸悦府的地段价值凸显。建议务必实地感受高容积率社区的居住密度，并在不同时间段考察电梯运行情况。对于住宅买家，若预算允许，可优先考虑高楼层或大户型以提升居住体验；对于公寓买家，需明确其与住宅在学位、税费、市场流动性上的差异。接受其学区一般、社区密度高的特点，是做出购买决策的前提。</p>
            </div>
            
            <p>总而言之，京基宸悦府不是一个追求“顶级学区”或“低密舒适”的楼盘，而是一个为都市效率和生活便利买单的选项。它用福田核心的确定性和即时可享的成熟配套，来平衡高密度和普通学区的不足。对于生活在深圳快节奏中、珍视时间成本的购房者来说，这是一个需要认真权衡的务实之选。</p>
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
            <h1>京基宸悦府 (114㎡ 四房)</h1>
            <div class="subtitle">深圳福田 · 上梅林中轴 · 都会中心公园住区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳福田区京基宸悦府项目114㎡四房户型的深度分析。该户型是项目在售的主力及标杆产品，在梅林片区近12年来首个新盘中，以其创新的“双龙抱珠”格局和双主卧套房设计，满足多代同堂家庭的改善需求。报告将结合项目“超高容积率”、“高回迁房占比”等特点，解析此户型的核心价值。
            </div>
            
            <h2>一、核心户型参数总览</h2>
            <p>京基宸悦府为上梅林村城市更新单元二期项目，地处福田“一轴两翼”战略核心。项目占地约1.98万㎡，总建面约22.9万㎡，容积率高达8.63。本次聚焦分析的114㎡四房户型，位于项目的住宅部分，预计于2025年12月31日交付。</p>
            
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
                        <td><strong>奢阔四房 (主力标杆)</strong></td>
                        <td>约114㎡</td>
                        <td>四房两厅两卫</td>
                        <td>“双龙抱珠”格局，四开间朝南，双主卧套房，LDKB一体</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约8.63</div>
                    <div class="parameter-desc">超高密度社区，共4栋48层住宅</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 户型得房率</div>
                    <div class="parameter-value">约75%</div>
                    <div class="parameter-desc">套内使用面积约85.5㎡（以实际为准）</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约300米</div>
                    <div class="parameter-desc">距4/9号线上梅林站约300米</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-tree"></i> 核心景观</div>
                    <div class="parameter-value">三山环抱</div>
                    <div class="parameter-desc">北靠梅林山、笔架山，南邻莲花山</div>
                </div>
            </div>
            
            <h2>二、114㎡四房户型深度解析</h2>
            <p>以下为针对约114㎡四房户型的专项分析：</p>
            
            <div class="unit-card" style="max-width: 800px; margin: 30px auto;">
                <div class="unit-header">
                    <div class="unit-size">约114㎡</div>
                    <div class="unit-name">奢阔四房</div>
                </div>
                <div class="unit-body">
                    <h4>“双龙抱珠”格局 · 多代同堂改善首选</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">双龙抱珠</span>
                        <span class="tag">四开间朝南</span>
                        <span class="tag">双主卧套房</span>
                        <span class="tag">LDKB一体</span>
                        <span class="tag">南北通透</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-vector-square"></i>
                        <div><strong>创新格局：</strong>户型采用创新的“双龙抱珠”格局，客厅与餐厅居中，卧室分列两侧，有效保障家庭成员间的隐私与静音，减少相互干扰。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-sun"></i>
                        <div><strong>极致采光：</strong>实现四开间朝南，主要功能空间（客厅及三间卧室）均能享受充沛的日照，采光面宽大。客厅开间约4米，连接阳台，视野开阔。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-users"></i>
                        <div><strong>双套房尊崇体验：</strong>配备<strong>双主卧套房</strong>设计，均带独立卫生间。这完美解决了三代同堂或二孩家庭中，父母与年轻夫妻都需要私密、尊崇居住空间的核心痛点，是该户型最大亮点之一。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>开阔空间感：</strong>采用LDKB（客、餐、厨、阳台）一体化设计，减少隔墙阻隔，使公共区域显得格外开阔通透，增强了家庭互动与空间感。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-wallet"></i>
                        <div><strong>价格与定位：</strong>作为项目内的改善标杆，折后总价约825万起。其定位明确面向多孩家庭、三代同堂或追求高品质居住空间与私密性的高端改善客户，是福田中心区门槛相对较低的稀缺新房四房选择。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值与考量：</strong>此户型在约114㎡的有限面积内，通过精巧的“双龙抱珠”格局和双套房配置，实现了极高的功能性与私密性，在福田同面积段产品中具有显著差异性。需要留意的是，项目整体<strong>容积率较高（约8.63）</strong>，且<strong>回迁房占比较大（约60%）</strong>，可能影响社区整体居住密度和氛围。选择<strong>中高楼层</strong>对于保障本户型的采光、视野和居住体验至关重要。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目综合评估</h4>
                <p>1. <strong>稀缺性与复杂性：</strong>作为梅林片区十余年来的唯一新盘，地段稀缺性高。但需综合考量其<strong>高容积率、高回迁房占比、高梯户比</strong>等特点对居住体验的影响。<br>
                2. <strong>配套顶级，学区普通：</strong>地铁（4/9号线）、商业（卓悦汇）、生态（三山公园）等配套均为顶级。学区为梅丽小学及翰林学校初中部，属福田中等水平。<br>
                3. <strong>明确的性价比：</strong>住宅折后单价约7.5万/㎡起，对比周边二手房（均价约8万/㎡）具备价格优势，提供了入驻福田核心区的明确路径。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h4>福田中轴核心区位</h4>
                        <p>位于福田CBD北拓关键区域，属“一轴两翼”战略核心，地处福田中心区与梅林生态带交界处，地段价值稀缺。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-train"></i>
                    </div>
                    <div>
                        <h4>双地铁口立体交通</h4>
                        <p>距离4/9号线上梅林站仅约300米，真正地铁口物业。紧邻北环大道、彩田路，自驾通达全城。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <div>
                        <h4>顶级成熟商业环伺</h4>
                        <p>步行约400米直达卓悦汇购物中心（20万㎡），周边新世界百货、深业上城等商圈密集，生活便利度极高。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-park"></i>
                    </div>
                    <div>
                        <h4>稀缺“三山一水”生态</h4>
                        <p>北靠梅林山、笔架山、梅林水库，南邻莲花山公园，片区绿地率超40%，生态资源在中心区难能可贵。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>京基品牌与准现房</h4>
                        <p>由京基集团开发，品牌实力有保障。住宅2025年底即交付，兑现周期短，降低了期房不确定性。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-home"></i>
                    </div>
                    <div>
                        <h4>户型产品力突出</h4>
                        <p>114㎡四房凭借“双龙抱珠”格局和双主卧套房设计，在功能性和私密性上打造了差异化竞争力，精准匹配多代家庭改善需求。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>114㎡四房户型选择专业建议</h4>
                <p>鉴于本户型是项目的改善标杆，且项目自身具有高密度特点，选择时需格外关注以下几点：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">核心选择原则</h4>
                <p><strong>1. 朝向优先：</strong>务必选择东南或西南朝向的房源。东南向采光柔和，西南向午后阳光充足，且部分高区西南向房源可能拥有更佳的山景或城市景观视野。应尽量避免东北朝向。</p>
                <p><strong>2. 楼层是关键：</strong>由于项目容积率极高（约8.63），楼栋非常密集。<strong>强烈建议必须选择中高楼层（强烈建议25层及以上）</strong>。高楼层是保障该户型四开间朝南的采光优势不被遮挡、获得良好通风、规避周边建筑视野干扰以及争取潜在景观资源的决定性因素。</p>
                <p><strong>3. 景观视野核实：</strong>下订前，应尽量核实意向房源在楼栋中的具体位置和视野景观图，确认是否面向花园、城市或山体，避免直接对视其他楼栋或受不利因素影响。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">关于社区构成的考量</h4>
                <p>项目回迁房占比约60%，与商品房共享社区。这意味着社区人口结构可能相对复杂，公共设施（如电梯、花园、车库）的使用频率和损耗可能较高。对此应有充分预期，并在物业管理和社区维护方面保持关注。</p>
            </div>
            
        </div>
    </div>
`
            }
        }
    }
};
Object.assign(db, db_futian);
