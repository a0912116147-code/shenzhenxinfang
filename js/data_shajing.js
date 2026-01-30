// data_shajing.js - 包含 沙井区 的数据 (含福永、塘尾)
const db_shajing = {
    "沙井": {
        "_PRICE_MAP": `

          <section class="price-map-summary">
                <h2>💰 沙井区楼盘价格及户型总览</h2>
                <p>以下为沙井区在售楼盘（含福永、塘尾、会展湾）及主要面积段、起步总价对比，供快速查阅。</p>

                <h3>定位：240万 - 400万 (会展极低门槛)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>前海未来城 (会展湾)</strong></td><td>折后价格区间（2026年1月）<br>63㎡两房一卫：折后总价238万-248万，折后单价3.77万-3.92万/㎡<br>76㎡三房一卫：折后总价278万-309万，折后单价3.68万-4.04万/㎡<br>86㎡三房两卫：折后总价330万-361万，折后单价3.83万-4.15万/㎡<br>113㎡四房两卫：折后总价481万-511万，折后单价4.29万-4.51万/㎡</td><td>新规产品（高得房率）、百万TOD大城、近地铁12号线</td></tr>
                        <tr><td><strong>珑湾上城花园 (沙井)</strong></td><td>78-79㎡三房一卫：总价286万起，单价约3.6万元/㎡<br>89㎡三房两卫：总价338万起<br>113㎡四房两卫：总价446万起</td><td>精装现房、总价门槛低、自带九年制学校</td></tr>
                        <tr><td><strong>鸿桥世纪名园 (福永)</strong></td><td>89-91㎡三房两厅两卫：总价约328-404万元<br>112㎡四房两厅两卫：总价约498-517万元<br>123-125㎡四房两厅两卫：总价约530-576万元<br>188㎡五房两厅三卫：总价约874-924万元</td><td>3.5万/㎡起、近11号线桥头站、纯商品房社区</td></tr>
                        <tr><td><strong>鸿荣源珈誉 (塘尾)</strong></td><td>77㎡ 3房 330万起<br>85㎡ 3房 362万起<br>94㎡ 3房 405万起</td><td>网红大盘、深圳外国语名校、近11号线塘尾站</td></tr>
                        <tr><td><strong>招商雍境名邸 (会展湾)</strong></td><td>折后均价约4.53万元/㎡<br>78㎡三房一卫：334-379万元<br>89㎡三房两卫：343-430万元<br>92㎡三房两卫：392-459万元<br>115㎡四房两卫：516-608万元</td><td>央企招商、11号线后亭站地铁口、会展配套</td></tr>
                        <tr><td><strong>拾悦城楠园 (沙井)</strong></td><td>参考均价3.6万元/㎡<br>86㎡：总价320万-345万，单价3.8万-4.06万元/㎡<br>94㎡：总价330万-340万，单价3.57万-3.7万元/㎡<br>100㎡：总价350万-400万，单价3.5万-4.1万元/㎡<br>104㎡：总价365万-410万，单价3.5万-4.13万元/㎡<br>115㎡：总价420万-430万，单价3.8万-3.9万元/㎡<br>126㎡：总价480万-500万，单价3.8万-4.03万元/㎡<br>140㎡：总价630万-660万，单价4.4万-4.6万元/㎡</td><td>宝中外国语、近11号线沙井站、定岗湖公园</td></tr>
                    </tbody>
                </table>

                <h3>定位：400万 - 650万 (改善/海岸城)</h3>
                <table>
                    <thead><tr><th style='width:25%'>楼盘名称</th><th style='width:35%'>价格/户型</th><th>核心卖点</th></tr></thead>
                    <tbody>
                        <tr><td><strong>万丰海岸城檀府</strong></td><td>折后均价约5.14万元/㎡<br>89-91㎡三房：折后均价约4.7万元/㎡<br>93-103㎡四房：折后均价约5.1万元/㎡<br>121-125㎡四房：折后均价约5.2万元/㎡<br>139㎡五房：折后均价约5.4万元/㎡<br>169㎡六房：折后均价约5.6万元/㎡</td><td>沙井标杆、深外南名校、海岸城商圈、地铁11号线马安山</td></tr>
                        <tr><td><strong>特区建发·云海臻府 (会展湾)</strong></td><td>89㎡三房二厅二卫：总价区间380万-436万/套，备案单价4.07万-4.87万/㎡<br>108㎡四房二厅二卫：总价区间514万-550万/套，备案单价4.76万-5.1万/㎡<br>117㎡四房二厅二卫：总价区间527万-609万/套，备案单价4.49万-5.19万/㎡</td><td>会展湾核心区、品质装修、花园社区</td></tr>
                        <tr><td><strong>中粮悦享凤凰里</strong></td><td>114㎡ 4房 460万</td><td>现房、大户型改善</td></tr>
                        <tr><td><strong>绿城锦和玉鸣</strong></td><td>备案均价4.98万/㎡，总价395-678万<br>折后均价约95折后为4.73万/㎡，总价375-644万<br>89㎡三房：折后总价375-406万，单价4.2-4.53万/㎡<br>104-107㎡四房：折后总价466-529万，单价4.47-4.98万/㎡<br>127-130㎡四房：折后总价590-644万，单价4.56-5.06万/㎡</td><td>大户型改善</td></tr>
                    </tbody>
                </table>
            </section>
        
`,
        "会展湾": {
            "前海未来城": {
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
            <h1>前海未来城项目详解</h1>
            <p class="subtitle">会展海洋城 · 178万㎡超级都会综合体 · 前海2.0扩容核心</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>前海未来城（备案名：蔚蓝海尚花园）是卓越集团在深圳前海2.0扩容区——会展海洋城板块打造的约178万㎡超级都会综合体。项目定位为“百万级综合体”，分五期开发，集住宅、旗舰商业、商办、教育等多元业态于一体。其最大特点在于<strong>坐拥“黄金内湾”几何中心位置，依托前海8倍扩容政策红利，同时享受地铁12号线海上田园东站“零距离”交通便利与海上田园国家4A级景区生态资源</strong>，旨在打造一个集发展潜力与生态宜居于一体的未来大城。</p>

            <div class="special-note">
                <h4>🏙️ 核心定位：前海2.0超级综合体</h4>
                <p>项目是前海扩容后会展海洋城板块的标杆性大盘，其价值基于多重战略叠加：</p>
                                <table>
                    <tr><th>政策引擎</th><td>位于前海2.0扩容区（会展海洋城），享受前海8倍扩容（总面积达120.56平方公里）的政策红利，是深圳向西发展的核心引擎。</td></tr>
                    <tr><th>产业规划</th><td>占据会展经济、海洋经济、文旅经济三大千亿级产业规划核心区位，周边环绕全球最大国际会展中心、在建的华发冰雪世界及金蚝小镇历史街区，形成“产业+文旅”双驱动格局。</td></tr>
                    <tr><th>生态宜居</th><td>被海上田园国家4A级景区（约163万㎡）与福海河生态长廊环抱，兼具发展潜力与生态宜居属性。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>超级规模与全能配套</th><td>约178万㎡体量，规划自带约10万㎡商业综合体、约5万㎡商业街区、多所幼儿园及中小学教育地块，自成一城。</td></tr>
                    <tr><th>地铁零距离</th><td>紧邻地铁12号线海上田园东站A出口，是名副其实的前海扩容区地铁盘。</td></tr>
                    <tr><th>低总价上车前海</th><td>一期主打建面约63-113㎡的二至四房，以“价格信息已删除”的低门槛，为刚需及改善家庭提供上车前海的机会。</td></tr>
                    <tr><th>卓越品牌与品质</th><td>由中国房地产23强卓越集团开发，具备CBD地标及造城经验，品质有一定保障。</td></tr>
                </table>
            </div>
        </section>

        <section class="project-details">
            <h2>项目基本信息（以一期为例）</h2>
            <table>
                <tr>
                    <th>项目信息</th>
                    <th>详细内容</th>
                </tr>
                <tr>
                    <td><strong>开发商</strong></td>
                    <td>卓越集团（中国房地产23强）</td>
                </tr>
                <tr>
                    <td><strong>备案名</strong></td>
                    <td>蔚蓝海尚花园</td>
                </tr>
                <tr>
                    <td><strong>占地面积（一期）</strong></td>
                    <td>约4.51万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积（一期）</strong></td>
                    <td>约31.25万㎡（计容约24.95万㎡）</td>
                </tr>
                <tr>
                    <td><strong>容积率（一期）</strong></td>
                    <td>4.77</td>
                </tr>
                <tr>
                    <td><strong>绿化率（一期）</strong></td>
                    <td>35%</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成（一期）</strong></td>
                    <td>8栋45-47层超高层住宅，分A、B、C三个区域建设</td>
                </tr>
                <tr>
                    <td><strong>总户数（一期）</strong></td>
                    <td>2394户</td>
                </tr>
                <tr>
                    <td><strong>车位配置（一期）</strong></td>
                    <td>规划停车位2352个，车位比约1:1</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>深圳市卓越物业管理有限责任公司</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2023.11.17-2093.11.16）</td>
                </tr>
                <tr>
                    <td><strong>交付时间</strong></td>
                    <td>计划2026年12月底带精装交付</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安区沙井街道，地处前海2.0扩容区会展海洋城板块，大湾区的“黄金内湾”几何中心。板块规划为“三城一港”（国际会展城、海洋新城、会展田园城、综合港区），聚焦千亿级产业，是前海扩容后的新中心。</p>

            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>紧邻<strong>12号线海上田园东站</strong>，步行约100米，零距离地铁口。可快速换乘11、20号线，通达宝中、南山、福田。</td></tr>
                    <tr><th>城际与高铁</th><td>距离沙井西站（穗莞深城轨）直线约1.1-1.5公里。未来西丽高铁枢纽（规划中）也将提升片区轨道能级。</td></tr>
                    <tr><th>自驾与航空</th><td>周边有广深沿江、京港澳等高速及快速路网；距离深圳宝安国际机场约20分钟车程。</td></tr>
                </table>

            <h3>🏫 教育资源</h3>
            <p>项目<strong>自带一所9班制幼儿园</strong>。根据共享学区划分，小学学区包括茭塘小学、和一学校小学部；初中学区包括沙井中学、荣根学校等。此外，周边还规划有深圳沙井街道会展中心学校（规划）、一所36班制小学和一所54班九年一贯制学校。需注意，目前学区并非顶尖名校，但未来有引入名校集团的可能。</p>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>规划有<strong>约10万㎡的卓越MALL</strong>（集中式商业体）及约5万㎡商业街区，未来将满足一站式购物需求。</td></tr>
                    <tr><th>周边商圈</th><td>一站地铁可达国际会展中心商业综合体（约32万㎡）、华发冰雪主题商业（约10万㎡）；周边还有京基百纳（约18万㎡）、天虹（约10万㎡）等。</td></tr>
                    <tr><th>生态文旅</th><td>北邻海上田园国家4A级景区，西靠福海河生态长廊；项目直线距离深圳冰雪文旅城（在建）约600米，未来休闲娱乐资源丰富。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>战略区位与政策红利</th><td>位于前海2.0扩容核心区，享受政策倾斜和千亿级产业规划，长期发展潜力巨大。</td></tr>
                    <tr><th>交通便捷性突出</th><td>真正的地铁口物业，且具备多维立体交通网络，通勤效率高。</td></tr>
                    <tr><th>超级大盘全能配套</th><td>自身规划了大型商业、学校等，未来生活便利度有望自给自足，降低对外部依赖。</td></tr>
                    <tr><th>生态景观资源稀缺</th><td>拥有国家级景区和生态河廊资源，在大型综合体中实属难得。</td></tr>
                    <tr><th>上车门槛相对较低</th><td>以小户型、低总价策略，为更多家庭提供了入驻前海辐射圈的机会。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>周边现状与成熟度</th><td>位于沙井片区，当前城市界面仍以旧村、工业区为主，配套和城市形象的提升需要时间兑现。</td></tr>
                    <tr><th>学区质量不确定</th><td>当前对口的学校在宝安区并非顶尖，且规划中的学校尚未确定是否有名校加持，教育优势不明显。</td></tr>
                    <tr><th>开发周期长</th><td>项目分五期开发，整个社区完全成熟可能需要8-10年时间，前期入住业主可能需忍受较长时间的施工环境影响。</td></tr>
                    <tr><th>容积率较高</th><td>一期容积率达4.77，社区居住密度较大，可能影响居住的静谧性和舒适度。</td></tr>
                    <tr><th>依赖规划兑现</th><td>项目的核心价值（如商业、产业、文旅配套）很大程度上依赖于区域规划的逐步落地，存在一定的不确定性。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>看好前海西部长期发展的投资者</th><td>认可会展海洋城板块的规划能级和产业前景，愿意伴随区域成长进行中长期资产配置。</td></tr>
                    <tr><th>预算有限但想上车“前海”的刚需家庭</th><td>总价预算在250-500万之间，希望以较低门槛入住深圳西部有潜力的地铁盘。</td></tr>
                    <tr><th>在宝安、南山西部通勤的上班族</th><td>依赖地铁12号线通勤，工作地点在宝中、南山等地，通勤时间可控。</td></tr>
                    <tr><th>对大型社区和未来配套有偏好的家庭</th><td>喜欢大盘的规模感和内部丰富的配套，不急于要求当前周边环境成熟。</td></tr>
                    <tr><th>注重生态宜居环境的改善家庭</th><td>对自然景观有要求，希望同时享有城市发展红利和绿色生活环境。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>前海未来城是一个<strong>典型的大盘、新城开发模式项目</strong>。它的核心价值不在于当下的成熟与繁华，而在于其所处的<strong>战略区位、宏大的整体规划以及可预见的未来城市资源</strong>。项目用“地铁口+超级配套+生态景区”的组合，描绘了一幅未来城市生活的图景。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>选择该项目，本质上是<strong>一场与城市发展预期的对赌</strong>。您需要充分认可会展海洋城作为前海2.0扩容核心的规划前景，并有耐心陪伴区域成长5-10年。它非常适合追求资产长期增值、对当前居住环境成熟度要求不高、且高度依赖地铁通勤的购房者。建议务必实地考察周边现状，并仔细评估家庭对学区、商业即时便利性的需求是否能在短期内得到满足。</p>
            </div>
            <p>总而言之，前海未来城是一个以 <strong>“超级规划+亲民总价”</strong> 为核心吸引力的项目，面向的是相信深圳西部发展蓝图、愿意用时间换取空间和价值的刚需及改善型买家。</p>
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
            <h1>卓越·前海未来城</h1>
            <div class="subtitle">深圳前海·178万㎡超级都会综合体</div>
        </header>
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供卓越前海未来城（备案名：蔚蓝海尚花园）项目的全面户型分析。作为总建面约178万㎡的超级综合体，项目以前海2.0扩容区核心区位、“地铁口+新规高实用户型”为突出亮点。报告将深入解析其全系“2024新规”户型的高效设计、核心价值及选择逻辑，为您的决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>卓越前海未来城位于宝安沙井，地处前海会展海洋城板块，是大湾区“黄金内湾”几何中心。项目分五期开发，集住宅、旗舰商业、商办、教育等多元业态于一体。一期目前在售A区1栋1、2单元，均为45-47层超高层，全部采用2024年深圳建筑新规设计，显著提升了阳台、飘窗的尺度与空间利用率。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与定位</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与梯户比</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>臻选两房（稀缺上车）</strong></td>
                        <td>约63㎡</td>
                        <td>两房两厅一卫</td>
                        <td>新规阳台，LDKB一体化，总价门槛低；3梯7户</td>
                    </tr>
                    <tr>
                        <td><strong>明星三房（高性价比）</strong></td>
                        <td>约76㎡</td>
                        <td>三房两厅一卫</td>
                        <td>空间利用率“天花板”，设备平台可改造；3梯7户</td>
                    </tr>
                    <tr>
                        <td><strong>舒居三房（品质改善）</strong></td>
                        <td>约86㎡</td>
                        <td>三房两厅两卫</td>
                        <td>三开间朝南，主卧套房，部分可看海景；3梯7户</td>
                    </tr>
                    <tr>
                        <td><strong>奢阔四房（终极改善）</strong></td>
                        <td>约113㎡</td>
                        <td>四房两厅两卫（可改4+1房）</td>
                        <td>横厅南北通透，五开间朝南，270°环幕阳台；3梯7户</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">4.77</div>
                    <div class="parameter-desc">一期规划，由8栋45-47层住宅组成</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 得房率（含赠送）</div>
                    <div class="parameter-value">约87%-96%</div>
                    <div class="parameter-desc">新规+赠送（阳台、设备平台）显著提升实用率</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 新规尺度</div>
                    <div class="parameter-value">阳台进深约1.8-2.1米</div>
                    <div class="parameter-desc">飘窗进深约0.8米，拓展实用空间</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 车位比/交付</div>
                    <div class="parameter-value">约1:1 / 2026年底</div>
                    <div class="parameter-desc">车位充足，计划2026年12月底精装交付</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约76㎡</div>
                        <div class="unit-name">明星三房 · 空间效率标杆</div>
                    </div>
                    <div class="unit-body">
                        <h4>极致功能主义 · 三房一卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高空间利用率</span>
                            <span class="tag">新规阳台</span>
                            <span class="tag">低总价门槛</span>
                            <span class="tag">地铁口</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间魔法：</strong>在76㎡内实现标准三房，被誉为“空间高实用天花板”。得益于2024新规，阳台进深达约1.8米，飘窗可利用搭载床体，实际使用率（含赠送）大幅提升。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>人性化设计：</strong>独立玄关及多功能收纳。LDKB一体化设计（客、餐、厨、阳台联动），增强家庭互动。卫生间三段式分离，设备平台可改造为家政间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>性价比之王：</strong>折后总价约278-310万元，是入手前海扩容区地铁口三房的极低门槛。主卧开间约2.95米，各卧室尺度均满足基本功能。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型完美诠释了新规对“小面积多功能”的极致优化，是预算有限但追求功能完整性的刚需及首改家庭的理想选择，投资与自住属性兼备。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约113㎡</div>
                        <div class="unit-name">奢阔四房 · 横厅改善典范</div>
                    </div>
                    <div class="unit-body">
                        <h4>一步到位的家庭主场 · 四房两卫（可改4+1）</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">南北通透横厅</span>
                            <span class="tag">五开间朝南</span>
                            <span class="tag">270°环幕阳台</span>
                            <span class="tag">景观看海</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>阔绰尺度：</strong>约5.4米开间的横厅设计，搭配南北双阳台，空间感震撼。五开间朝南，采光面最大化。北向预留约6㎡灵动空间，可改造为兴趣室或第五房。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>豪华配置：</strong>近20㎡超大主卧套房，配备800mm转角飘窗，享270°视野。独立衣帽间、双台盆卫浴、全屋中央空调及智能马桶，精装标准向豪宅看齐。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-mountain"></i>
                            <div><strong>稀缺景观：</strong>270°环幕阳台直面海上田园4A级景区，部分高楼层房源可远眺珠江口海景，景观资源在刚改盘中极为罕见。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是项目乃至片区的“终极改善”标杆，以横厅、多房、全景为核心卖点，完美适配多孩家庭、三代同堂及追求品质生活的改善客群，折后总价约480-510万元。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>其他在售户型亮点解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约63㎡ / 约86㎡</div>
                    <div class="unit-name">多元化的功能之选</div>
                </div>
                <div class="unit-body">
                    <h4>覆盖全客群的产品矩阵</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">低总价上车</span>
                        <span class="tag">三开间朝南</span>
                        <span class="tag">主卧套房</span>
                        <span class="tag">实用至上</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>约63㎡两房：</strong>项目“上车”门槛，折后总价约238-249万元。采用LDKB一体化设计，U型厨房，全屋飘窗。对于年轻首置客群或投资者，是入住前海大盘的稀缺机会。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>约86㎡三房两卫：</strong>核心改善之选。三开间朝南，主卧套房带独立卫浴，尊享私密。LDKB空间延伸至东南/西南双阳台，部分高楼层可俯瞰海上田园及福海河生态绿廊。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>综合点评：</strong>从63㎡的极致上车到113㎡的终极改善，前海未来城通过精准的户型梯度，实现了对市场客群的全覆盖。所有户型均受益于新规，在实用性上表现突出，满足了不同预算和家庭结构客户的需求。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】“2024新规户型”带来的核心变革</h4>
                <p>1. <strong>公摊减少，得房率实质提升：</strong>新规规定部分非居住空间不纳入“计容建筑面积”，直接减少了公摊比例。结合阳台半赠送、飘窗全赠送等传统方法，项目户型实际使用率（含赠送）最高可达约96%，相当于“买100㎡得110㎡”。<br>
                2. <strong>空间尺度革命性突破：</strong>阳台最大进深增至约1.9-2.1米（含墙体），可轻松改造为家庭小花园、茶室或健身区。飘窗进深增至0.8米，使其从“景观台”变为可搭载床体的“实用空间”。<br>
                3. <strong>产品力全面超越旧规楼盘：</strong>在同等建筑面积下，新规户型能提供更阔绰的阳台、更实用的飘窗和更高的实际得房率，这使得前海未来城的户型在片区内具有明显的代际优势。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>前海2.0核心区位与规划红利</h4>
                        <p>地处前海8倍扩容区（会展海洋城板块），坐拥“三城一港”（国际会展城、海洋新城等）千亿级产业规划，兼具发展潜力与生态宜居属性。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>2024新规首发，高实用率典范</h4>
                        <p>全系户型采用新规标准，更大阳台、飘窗，更高得房率，实现“小面积、多功能、大空间”的居住体验，产品力领先同片区楼盘。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>地铁口物业，立体交通网络</h4>
                        <p>紧邻地铁12号线海上田园东站（约100米），2站换乘20号线，快速通达宝中、南山。近高速、城际及机场，交通便利度高。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>百万方综合体全能配套</h4>
                        <p>自带规划约10万㎡卓越MALL、约4.2万㎡园林、多所幼儿园及中小学教育用地，下楼即享成熟生活圈。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>稀缺生态景观资源环绕</h4>
                        <p>被163万㎡海上田园国家4A级景区与福海河生态长廊环抱，86㎡及以上部分户型享有永久性生态景观，提升居住舒适度与资产价值。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>卓越品牌护航与精工品质</h4>
                        <p>中国房地产23强卓越集团开发，拥有卓越前海壹号等多个标杆项目。精装交付，品质有保障。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目超高层、新规户型、景观差异化的特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #0056b3;">约63㎡两房 / 约76㎡三房（刚需上车）</h4>
                <p><strong>核心逻辑：总价优先，兼顾采光。</strong> 这两个户型核心优势是低总价。在预算范围内，尽量选择中高楼层（建议20层以上），以改善通风采光。63㎡户型西北朝向，更需高楼层规避遮挡。76㎡户型有东北、东南、西南等多种朝向可选，东南朝向为优。</p>
                <p><strong>注意：</strong>因梯户比为3梯7户，中低楼层需关注等电梯时间及隐私性。</p>
                
                <h4 style="margin-top: 25px; color: #0056b3;">约86㎡三房两卫（品质改善）</h4>
                <p><strong>核心逻辑：朝向与景观并重。</strong> 此户型价值在于“三开间朝南”和“生态景观”。务必选择<strong>纯南向</strong>单位。同时，其景观价值与楼层强相关，<strong>中高楼层（25层及以上）</strong>是享受海上田园或福海河景观的前提。若预算充足，优先选择高区、南向看园林或景观的房源。</p>
                
                <h4 style="margin-top: 25px; color: #0056b3;">约113㎡四房两卫（终极改善）</h4>
                <p><strong>核心逻辑：为视野与尺度付费。</strong> 横厅、270°阳台、看海/看园景是此户型的核心价值。因此，<strong>必须选择高楼层（30层及以上）</strong>。优先选择朝向海上田园景区或东南/西南向的单元，以确保横厅和主卧拥有最佳视野。为稀缺景观支付一定的楼层溢价是值得的。</p>
                
                <h4 style="margin-top: 25px; color: #0056b3;">通用建议</h4>
                <p>1. <strong>“买高不买低”：</strong>对于超高层住宅，高楼层在视野、通风、采光、隐私、噪音方面的优势是低楼层无法比拟的，这对提升居住体验和未来资产流动性至关重要。<br>
                2. <strong>现场核实：</strong>务必实地查看样板间及工地，感受不同楼层、朝向的视野和光线，特别是下午时段的西晒情况。<br>
                3. <strong>平衡取舍：</strong>明确家庭核心需求（总价、房间数、景观），在预算框架内做出最优排序和取舍。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>卓越前海未来城的价值是“区位潜力+地铁便利+新规产品力”的综合体现。选择时，需将长期规划红利与户型自身的实用性、舒适度结合考量。当前周边城市界面和部分配套仍在建设中，需有合理的预期。以上建议仅供参考，最终决策请务必结合实地看房感受。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】不同客群的决策聚焦点</h4>
                <p>1. <strong>年轻首置/投资客群：</strong>紧盯63㎡及76㎡户型。聚焦总价和租金回报潜力，选择中楼层、朝向佳的单元，在控制总价的同时保证产品流动性。<br>
                2. <strong>成长型/首改家庭：</strong>在76㎡和86㎡中权衡。若预算紧张但急需三房，76㎡是性价比之王；若追求三房两卫的舒适性与南向采光，86㎡更优。务必选择中高楼层。<br>
                3. <strong>品质改善/多代同堂家庭：</strong>直接考虑113㎡。将<strong>高楼层、南向、景观视野</strong>作为不可妥协的底线，为核心家庭资产配置最优选。<br>
                4. <strong>所有客群：</strong>建议致电售楼处（400-992-0669）预约参观实体样板房，这是感受新规户型空间尺度的最佳方式。</p>
            </div>
        </div>
    </div>
`
            },
            "招商雍境名邸": {
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
            <h1>招商雍境名邸项目详解</h1>
            <p class="subtitle">前海会展湾 · 地铁口新规盘 · 约96%-105%超高得房率 · 300万级上车盘</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>招商雍境名邸（招商会展湾雍境二期）是央企招商蛇口在深圳前海扩容区——会展海洋城板块打造的地铁口住宅项目。项目于2025年4月30日取得预售许可并开盘，主打建面约78-117㎡的精装三至四房。其最大亮点在于作为“新规产品”，通过阳台半封闭、凸窗全赠送等创新设计，实现了约96%-105%的超高得房率，同时以折后总价约336万起的亲民门槛，为刚需及初步改善家庭提供了上车“大前海”板块的机会。</p>

            <div class="special-note">
                <h4>🎯 核心定位：高拓展“新规”上车盘</h4>
                <p>项目精准定位于预算有限但渴望更高居住空间效率的购房者：</p>
                                <table>
                    <tr><th>“新规”高得房率</th><td>响应深圳新建筑设计规范，通过大量赠送面积，将78㎡户型做到实用三房，89㎡横厅户型使用率最高可达105%，空间利用率远超传统户型。</td></tr>
                    <tr><th>“雍系”品质传承</th><td>作为招商蛇口“雍系”作品，延续了一期提前交付的品质口碑，并升级了精装与社区标准。</td></tr>
                    <tr><th>准现房开发</th><td>项目北地块已封顶，预计2027年9月精装交付，开发进度可见，确定性较高。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>极致空间效率</th><td>超高得房率是最大卖点，同等建筑面积下多出一个房间的功能。</td></tr>
                    <tr><th>双地铁便捷出行</th><td>距离12号线“海上田园南站”仅约50-100米，真正地铁口物业；一站可换乘20号线。</td></tr>
                    <tr><th>亲民总价门槛</th><td>价格信息已删除即可置业前海扩区，是片区门槛较低的“上车”选择之一。</td></tr>
                    <tr><th>产业规划能级高</th><td>坐享会展海洋城“会展+海洋+文旅”三大千亿级产业规划红利。</td></tr>
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
                    <td><strong>开发商/物业</strong></td>
                    <td>招商蛇口（央企） / 深圳招商物业管理有限公司</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约2.52万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约16.95万-17.01万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>4.3-4.6</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>35%-40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋户数</strong></td>
                    <td>6栋26-32层住宅，总1534户（商品房804套，保障房730套）</td>
                </tr>
                <tr>
                    <td><strong>车位比</strong></td>
                    <td>约1:0.93</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>4.5元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（从2023年起算）</td>
                </tr>
                <tr>
                    <td><strong>装修交付</strong></td>
                    <td>精装交付（含智能家居、品牌厨卫），预计2027年9月</td>
                </tr>
            
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安区沙井街道，地处前海合作区扩容后的“会展海洋城”板块，属于深圳西部重点发展的新兴区域。片区规划集合了全球最大的深圳国际会展中心、在建的华发冰雪文旅城、海洋新城及海上田园景区，定位为“会展+海洋+文旅”的产业融合新高地。</p>

            <h3>🚇 交通配套（核心优势）</h3>
                            <table>
                    <tr><th>地铁</th><td><strong>距离12号线“海上田园南站”A出口仅约50-100米</strong>。一站可达“国展北站”换乘20号线（在建二期将通达南山），5站到“福永站”换乘11号线。</td></tr>
                    <tr><th>自驾</th><td>临近广深沿江高速入口（约500米）、深中通道，可快速连通深圳中心区及珠江西岸。</td></tr>
                    <tr><th>机场与码头</th><td>距离深圳宝安国际机场约8公里；步行可达福永码头，乘船可直达香港、澳门。</td></tr>
                </table>

            <h3>🏫 教育资源</h3>
            <p>项目<strong>自带一所9班制幼儿园</strong>。<strong>距离约500米为已开学的会展湾实验学校</strong>，是一所由宝安中学（集团）第二外国语学校承办的九年一贯制公办学校（72个班），2024年小一录取积分96.8分。周边还规划有其他教育用地。</p>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>规划大型商业</th><td>周边规划有超50万㎡的会展城商业集群（含免税店）及约10万㎡的华发冰雪世界主题商街，预计2025年起逐步开业。</td></tr>
                    <tr><th>现有及周边商业</th><td>依赖已开业的会展湾·公园里（约2万㎡）、稍远些的万丰海岸城（约16万㎡）及即将开业的山姆会员店等。</td></tr>
                    <tr><th>生态休闲</th><td>邻近海上田园国家4A级景区、福海河生态长廊及国际会展中心公园。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>超高实用率，性价比突出</th><td>“新规”设计带来的超高得房率是核心优势，让中小户型拥有媲美更大户型的实用空间，总价控制得当。</td></tr>
                    <tr><th>地铁通勤极其便利</th><td>名副其实的“地铁口”物业，对于在南山、宝安等地工作的通勤族是巨大吸引力。</td></tr>
                    <tr><th>央企品牌与交付保障</th><td>招商蛇口开发，一期已有提前交付的良好记录，品牌和交付品质更令人安心。</td></tr>
                    <tr><th>片区发展潜力大</th><td>位于前海扩容区及会展海洋城规划核心，享受长期政策与产业红利。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>周边配套仍处建设期</th><td>片区目前城市界面仍以工地和规划为主，标志性大型商业、文旅配套完全成熟尚需数年时间。</td></tr>
                    <tr><th>混合社区属性</th><td>社区内包含保障性住房和企业自持租赁住房，部分购房者可能介意社区圈层的纯粹性。</td></tr>
                    <tr><th>容积率偏高，居住密度大</th><td>超过4.3的容积率意味着社区人口密度较大，可能影响居住的静谧性和公共资源使用体验。</td></tr>
                    <tr><th>教育资源有待时间检验</th><td>虽然家门口有九年制学校，但其教学质量和口碑仍需时间积累，并非传统顶尖名校。</td></tr>
                    <tr><th>依赖规划全面落地</th><td>项目的远期价值与片区的“会展、海洋、文旅”三大产业规划能否成功兑现紧密绑定，存在不确定性。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>追求空间效率的首次置业者</th><td>预算在340-450万之间，希望用有限总价买到房间数更多、实用性更强的住房。</td></tr>
                    <tr><th>依赖地铁通勤的上班族</th><td>在南山科技园、宝安中心、机场片区等地工作，将地铁便利作为首要考虑因素的购房者。</td></tr>
                    <tr><th>看好前海西翼发展的长期主义者</th><td>认可会展海洋城的规划前景，愿意伴随新区成长，用时间换取资产增值空间的买家。</td></tr>
                    <tr><th>对招商品牌有信赖的改善家庭</th><td>重视开发商口碑和交付确定性，从“老破小”或租房状态升级到品牌新房小区的家庭。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>招商雍境名邸是一个定位精准、特色鲜明的“功能性上车盘”。它牢牢抓住了“高得房率”和“地铁口” 两大刚需核心痛点，并用相对亲民的总价将它们打包呈现。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>是否选择该项目，关键在于您是否高度认同其“用面积换空间、用时间换配套”的核心逻辑。如果您极度看重当下的通勤便利和居住空间实用性，并能接受周边环境在未来3-5年内逐步成熟的现状，那么它是一个性价比突出的选择。反之，如果您追求即时的成熟城市界面、顶尖学区或低密度社区氛围，则需要慎重考虑。</p>
            </div>
            <p>与同区域的“前海未来城”相比，两者共享会展湾的宏大规划，但路径不同：前海未来城是超大体量的“造城”式综合开发，配套自成一体；而招商雍境名邸则是更聚焦、更务实的“地铁口住宅”，以极高的产品力和可控的总价，精准服务特定的购房需求。</p>
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
            <h1>招商雍境名邸</h1>
            <div class="subtitle">深圳宝安 · 会展湾芯 · 央企品质</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳宝安招商雍境名邸项目的全面户型分析。项目位于大前海会展湾核心片区，由央企招商蛇口开发，已于2025年4月30日取证入市。报告将基于新版《住宅项目规范》设计标准，深入解析其高拓展率户型的核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>招商雍境名邸是招商蛇口在会展湾打造的第二代“新规”住宅，通过阳台半封闭、凸窗全赠送等创新设计，实现了远超传统户型的超高使用率，部分户型使用率高达105%。项目首推北地块1栋3单元，共195套房源。</p>
            
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
                        <td><strong>刚需上车型</strong></td>
                        <td>约78-80㎡</td>
                        <td>三房两厅一卫</td>
                        <td>LDKB一体化竖厅，270°主卧转角飘窗，高赠送</td>
                    </tr>
                    <tr>
                        <td><strong>主流改善型</strong></td>
                        <td>约89-92㎡</td>
                        <td>三房两厅两卫</td>
                        <td>提供竖厅/横厅双版本，三开间朝南，最高105%使用率</td>
                    </tr>
                    <tr>
                        <td><strong>品质再改型</strong></td>
                        <td>约115-117㎡</td>
                        <td>四房两厅两卫</td>
                        <td>横厅设计，南北双阳台，主卧套房带独立衣帽间</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约4.3</div>
                    <div class="parameter-desc">总规划1534户（商品房804套）</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 核心优势</div>
                    <div class="parameter-value">高使用率</div>
                    <div class="parameter-desc">得房率93%-105%，新规设计典范</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约50米</div>
                    <div class="parameter-desc">紧邻12号线海上田园南站A口</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 交付时间</div>
                    <div class="parameter-value">2027年9月</div>
                    <div class="parameter-desc">精装修交付（含智能家居）</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89-92㎡</div>
                        <div class="unit-name">主流改善三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>双版本全能三房 · 满足多元需求</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">竖厅/横厅双选</span>
                            <span class="tag">超高使用率</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">双卫配置</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-vector-square"></i>
                            <div><strong>双版本设计：</strong>提供竖厅与横厅两种选择。竖厅户型（约91㎡）三开间朝南，采光面约10.2米，可直面会展河景；横厅户型（约92㎡）客厅开间达5.1米，连接景观阳台，空间感更强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>空间魔术：</strong>得益于新规，使用率极高。其中横厅版本因凸窗全赠送，使用率可达105%，套内面积远超产权面积，实用性极强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>朝向与景观：</strong>竖厅有西南（看冰雪世界）和东南（看花园）朝向；横厅主要为东南朝向。部分中高楼层房源视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>适合首次改善家庭、需要独立书房或考虑三代同堂的客户，在有限面积内实现了功能与舒适度的最佳平衡。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此面积段是项目的绝对主力，以“一步到位”的三房两卫配置，在总价可控的前提下，提供了媲美传统100㎡户型的实际使用空间，是片区内极具竞争力的产品。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约78-80㎡</div>
                        <div class="unit-name">高拓刚需三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>极致空间利用 · 刚需上车优选</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">低总价门槛</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">270°飘窗</span>
                            <span class="tag">高得房率</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>高效布局：</strong>采用传统竖厅与LDKB（客餐厨阳台）一体化设计，约9.5米进深提升空间利用率。在主卧创新性设计了270°全赠送转角飘窗，拓展了使用空间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-compass"></i>
                            <div><strong>朝向特点：</strong>主要为西北朝向，高层房源可远眺海上田园及海景，视野无遮挡。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wallet"></i>
                            <div><strong>价格优势：</strong>折后总价约336-384万，是项目乃至片区内的低总价上车选择，极大降低了置业门槛。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>设计细节：</strong>配备U型厨房、三段式干湿分离卫生间，得房率约93%-99%，实际套内面积相当于传统85㎡户型。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在深圳核心发展区域，以三房的功能实现安家梦想，为年轻家庭和首次置业者提供了难得的机遇。其高拓展性设计让小户型也能拥有宽敞的居住体验。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>品质再改户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约115-117㎡</div>
                    <div class="unit-name">奢阔改善四房</div>
                </div>
                <div class="unit-body">
                    <h4>横厅阔景四房 · 诠释尺度与舒适</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">横厅巨幕阳台</span>
                        <span class="tag">主卧套房</span>
                        <span class="tag">四分离卫浴</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度：</strong>采用横厅设计，客厅开间约6.5米，连接超大景观阳台。南北双阳台设计，实现通透采光与通风。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>尊崇主卧：</strong>主卧套房面积约20㎡，配备独立衣帽间及配备双台盆、浴缸的豪华卫浴，私密性与舒适度兼得。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-chart-line"></i>
                        <div><strong>高实用率：</strong>使用率高达102%-105%，实际套内面积约118-123㎡，相当于传统130㎡户型，空间利用率极高。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>面向多孩家庭或三代同堂的深度改善需求，追求空间尺度、功能独立性与高品质社区环境。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型是项目品质的标杆，不仅满足了多房间的功能性需求，更通过横厅、大阳台、套房等设计，带来了强烈的空间感和改善居住体验，占据了片区四房产品的价值高地。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】精装交付与品牌标准</h4>
                <p>项目为精装修交付，预计搭载全屋智能家居系统（如智能门锁）、中央空调。厨房配置方太品牌厨电，卫生间采用科勒、杜拉维特等国际品牌洁具，品质有保障。一期项目曾提前1年交付且品质获市场认可，为二期提供了良好信誉背书。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div>
                        <h4>“新规”设计典范</h4>
                        <p>作为深圳首代新规住宅之一，通过设计创新实现93%-105%的超高使用率，同等面积多出更多实用空间，产品力领先。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>地铁口物业</h4>
                        <p>距地铁12号线“海上田园南站”A口仅约50米，真正地铁上盖；一站换乘20号线，快速通达机场、前海。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>千亿级板块</h4>
                        <p>位于会展海洋城核心，享受国际会展中心、海洋新城、冰雪文旅城三大千亿级产业规划红利，发展潜力巨大。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>优质教育资源</h4>
                        <p>项目配建幼儿园，距离宝中集团第二外国语学校承办的会展湾实验学校（九年一贯制）仅约500米，已于2024年开学。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-snowflake"></i>
                    </div>
                    <div>
                        <h4>旗舰商业配套</h4>
                        <p>一路之隔规划约10万㎡冰雪主题商圈；周边规划超50万㎡会展城商业集群；同时可享已开业的万丰海岸城等成熟商业。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>央企品质保障</h4>
                        <p>开发商招商蛇口为央企，品牌实力雄厚。项目一期已实现提前高品质交付，为二期提供了坚实的信誉保障。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目首推楼栋（1栋3单元）的户型分布、朝向及景观资源，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约78-80㎡ 三房一卫</h4>
                <p><strong>朝向特点：</strong>主要为西北朝向（03/04户型）。</p>
                <p><strong>景观视野：</strong>可观海上田园景观，中高楼层可远眺海景，视野开阔无遮挡。</p>
                <p><strong>建议楼层：</strong>建议选择中高楼层（15层及以上），以最大化观景价值，规避低楼层可能的视线干扰。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约89-92㎡ 三房两卫（竖厅版）</h4>
                <p><strong>朝向与景观：</strong>01/02户型为西南向，可观在建的华发冰雪世界；06/07户型为东南向，面向小区内部花园，更为安静。</p>
                <p><strong>选择要点：</strong>偏好城市地标景观和午后阳光可选西南向；偏好安静园林和上午阳光可选东南向。中高楼层景观更佳。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约89-92㎡ 三房两卫（横厅版）及 约115-117㎡四房</h4>
                <p><strong>朝向特点：</strong>横厅三房（05户型）及四房主要为东南朝向。</p>
                <p><strong>空间优势：</strong>横厅设计空间感强，客厅开间大。四房户型南北通透，功能齐全。</p>
                <p><strong>建议楼层：</strong>对于横厅及四房户型，强烈建议选择中高楼层（建议15层以上）。高楼层能充分展现横厅的空间气势，获得更佳通风采光及视野，最大化户型价值。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于首推楼栋的公开资料分析，仅供参考。最终选择需结合实地看房感受、样板间体验、个人对日照/视野/噪音的具体偏好、价格及房源实际情况等因素综合决策。项目梯户比主要为3梯7户，看房前建议通过官方热线（400-992-0669）预约。学区划分等以政府当年公布为准。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】决策核心关注点</h4>
                <p>1. <strong>总价与功能平衡：</strong>明确自身总价预算与对房间数、卫生间的硬性要求，在“小面积三房”和“大面积三房/四房”间做首要取舍。<br>
                2. <strong>户型格局偏好：</strong>思考家庭对传统竖厅（动静分区）与时尚横厅（空间开阔）的偏好，两者生活方式略有不同。<br>
                3. <strong>景观与朝向取舍：</strong>权衡西北向的开阔远景与东南/西南向的阳光、园林或城市景观，根据家庭成员生活习惯选择。<br>
                4. <strong>长期居住规划：</strong>考虑未来5-10年家庭结构变化，评估户型是否能满足生育、老人同住等潜在需求。<br>
                5. <strong>价值增长预期：</strong>结合会展新城、海洋新城的长期规划，理解所选户型在该板块发展周期中的价值定位。</p>
            </div>
        </div>
    </div>
`
            },
            "云海臻府": {
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
            <h1>云海臻府项目详解</h1>
            <p class="subtitle">会展海洋城 · 地铁口山海景盘 · 生态宜居社区</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>云海臻府（备案名：云海臻府）是位于宝安区沙井街道会展海洋城板块的品质住宅项目。项目定位为“地铁口山海景盘”，依托得天独厚的地理位置，融合了便捷的城市交通与优质的自然资源。作为会展湾板块的重要住宅项目，它旨在为追求生活品质与自然环境的家庭提供一个宜居选择。</p>

            <div class="special-note">
                <h4>🌊 核心定位：山海之间的品质住区</h4>
                <p>项目紧扣“云海”主题，力图在繁华都市与自然静谧间找到平衡：</p>
                                <table>
                    <tr><th>自然资源</th><td>项目临近海上田园景区，享有较好的生态景观视野，部分户型可远眺海景或山景。</td></tr>
                    <tr><th>交通便利</th><td>毗邻地铁12号线，属于地铁盘范畴，方便连接城市核心区。</td></tr>
                    <tr><th>品质居住</th><td>以打造宜居社区为目标，在户型设计、社区园林等方面强调舒适度。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>地铁通勤便利</th><td>距离地铁12号线海上田园东站约数百米，属于步行可达范围，通勤便利。</td></tr>
                    <tr><th>生态景观优越</th><td>临近海上田园国家4A级景区，周边有河涌等自然水系，居住环境舒适。</td></tr>
                    <tr><th>片区发展可期</th><td>身处深圳重点发展的会展海洋城板块，享受区域规划升级带来的长期红利。</td></tr>
                    <tr><th>宜居户型设计</th><td>户型设计注重实用性与居住体验，满足主流家庭需求。</td></tr>
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
                    <td>深圳市会展湾发展有限公司（关联深圳地铁、招商蛇口等）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>招商积余物业（具体以合同为准）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约数万平方米（具体以官方公示为准）</td>
                </tr>
                <tr>
                    <td><strong>建筑面积</strong></td>
                    <td>约十余万平方米（具体以官方公示为准）</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>约3.0-4.0（具体以官方公示为准）</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>约30%-35%（具体以官方公示为准）</td>
                </tr>
                <tr>
                    <td><strong>楼栋构成</strong></td>
                    <td>多栋高层住宅楼</td>
                </tr>
                <tr>
                    <td><strong>主力户型</strong></td>
                    <td>涵盖建面约80-140㎡的三房至四房</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>规划地下停车场，车位配比接近或达到1:1</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>交付标准</strong></td>
                    <td>预计为精装修交付</td>
                </tr>
                <tr>
                    <td><strong>交付时间</strong></td>
                    <td>预计2025年或之后（具体以合同为准）</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安区沙井街道，地处深圳西部重点发展的“会展海洋城”板块。该板块规划集国际会展中心、海洋新城、海上田园生态旅游于一体，是深圳面向未来的重要增长极。</p>

            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>距离<strong>地铁12号线海上田园东站</strong>约数百米，可便捷换乘11号线、20号线（在建），快速通达宝安中心、南山前海等地。</td></tr>
                    <tr><th>自驾</th><td>靠近广深沿江高速、京港澳高速，可通过快速路网连接深圳各区及东莞。</td></tr>
                    <tr><th>城际与航空</th><td>距离深圳宝安国际机场车程约20-30分钟；未来可通过穗莞深城际铁路加强湾区联系。</td></tr>
                </table>

            <h3>🏫 教育资源</h3>
            <p>项目周边规划有多处教育用地。目前，片区已有及规划中的学校包括会展湾实验学校（九年一贯制，已开学）、沙井中学等。具体学区划分需以项目交付当年教育部门公布的信息为准。</p>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>规划大型商业</th><td>享会展城超大规模商业规划，包括国际会展中心配套商业、华发冰雪世界主题商街等。</td></tr>
                    <tr><th>现有及周边商业</th><td>目前依赖周边社区底商及已开业的会展湾·公园里商业，大型购物需前往万丰海岸城或更远商圈。</td></tr>
                    <tr><th>生态文旅</th><td>最大亮点。紧邻海上田园国家4A级景区，拥有湖景、绿道等生态资源；靠近福海河生态长廊。</td></tr>
                    <tr><th>文体医疗</th><td>周边规划有大型文体设施；医疗资源目前依赖沙井人民医院等，未来片区会规划新建医院。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>优越的生态景观资源</th><td>临近海上田园景区及水系，提供了在深圳都市中难得的亲近自然的生活环境。</td></tr>
                    <tr><th>便捷的轨道交通</th><td>与地铁12号线站点距离适中，通勤便利，符合现代城市生活需求。</td></tr>
                    <tr><th>片区成长潜力大</th><td>位于深圳重点发展的会展海洋城，长期看可享受城市规划升级和人口产业导入的红利。</td></tr>
                    <tr><th>产品定位清晰</th><td>主打山海景和宜居性，能满足对居住环境有较高要求家庭的需求。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>周边配套成熟度较低</th><td>片区仍处于大规模开发建设阶段，城市界面较新但生活便利性不足，完全成熟需要较长时间。</td></tr>
                    <tr><th>对规划依赖度高</th><td>项目的核心价值与片区的“会展、海洋、文旅”三大产业规划能否成功兑现紧密相关。</td></tr>
                    <tr><th>通勤距离仍较远</th><td>对于在福田、罗湖等东部核心区工作的上班族而言，通勤时间和成本依然较高。</td></tr>
                    <tr><th>教育资源有待发展</th><td>片区内现有学校的口碑和成绩尚未经过长期检验，优质教育资源是短板。</td></tr>
                    <tr><th>开发商知名度与品牌力</th><td>相较于招商、华润等一线品牌，项目开发商的市场号召力和既往作品知名度相对有限。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>注重生态环境的改善家庭</th><td>将自然景观和居住舒适度放在首位，愿意为更好的环境支付溢价或接受配套等待期。</td></tr>
                    <tr><th>在宝安、南山西部工作的通勤族</th><td>工作地点在机场、福永、宝中、前海等地，依靠地铁12号线通勤较为便利。</td></tr>
                    <tr><th>看好会展湾板块的长期投资者</th><td>认同该区域的规划前景，进行中长期资产配置，对短期租金回报和配套完善度要求不高。</td></tr>
                    <tr><th>首次置业且预算相对充足的年轻人</th><td>追求品质新房，对通勤时间有一定容忍度，更看重未来社区环境和片区发展。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>云海臻府是一个特色鲜明、优缺点并存的新区品质盘。它最大的吸引力在于将“地铁便利”与“生态景观”进行了结合，为购房者提供了一种区别于传统高密度市区住宅的生活想象。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>是否选择该项目，取决于您对 “未来生态宜居环境”的看重程度能否超越对“当下成熟便利配套”的需求。如果您的工作生活圈与项目地理位置匹配，且不介意用3-5年的时间等待片区配套成熟，同时非常看重社区的景观环境和居住氛围，那么值得考虑。建议务必亲自实地考察，感受当前周边的建设氛围和通勤路径。</p>
            </div>
            <p>总而言之，云海臻府主打的是 “景观+地铁”的改善型居住牌，适合那些在预算范围内，愿意用一定的通勤距离和配套等待时间，来换取更优居住环境和长期区域发展潜力的购房者。</p>
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
            <h1>云海臻府</h1>
            <div class="subtitle">深圳宝安 · 会展新城·海洋新城双核驱动</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳宝安云海臻府项目的全面户型分析，项目位于前海扩容区、会展新城及海洋新城三大国家级战略规划交汇处，是片区唯一全南向户型社区。报告将深入解析各户型亮点与核心价值。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>云海臻府由特区建发集团开发，占地约2.96万㎡，总建面约16.19万㎡，容积率4.14，规划4栋住宅，共提供1448套住房，其中可售商品房744套。项目预计于2025年6月交付。</p>
            
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
                        <td><strong>经典三房</strong></td>
                        <td>约89㎡</td>
                        <td>三房两厅两卫</td>
                        <td>三开间朝南，奢阔主卧套房，动静分区</td>
                    </tr>
                    <tr>
                        <td><strong>阔景四房</strong></td>
                        <td>约108㎡</td>
                        <td>四房两厅两卫</td>
                        <td>稀缺南北通透，约5.9米阔绰阳台，三分离卫生间</td>
                    </tr>
                    <tr>
                        <td><strong>尊享四房</strong></td>
                        <td>约117㎡</td>
                        <td>四房两厅两卫</td>
                        <td>大横厅格局，约6.6米阔景阳台，四分离卫生间</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约4.14</div>
                    <div class="parameter-desc">规划4栋高层住宅，共1448户</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 朝向特色</div>
                    <div class="parameter-value">全南向</div>
                    <div class="parameter-desc">片区唯一全南向3-4房社区</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 核心面积</div>
                    <div class="parameter-value">89-117㎡</div>
                    <div class="parameter-desc">覆盖刚需至品质改善全需求</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">高层住宅</div>
                    <div class="parameter-desc">32层，层高约3米</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约108-117㎡</div>
                        <div class="unit-name">阔景四房 / 尊享四房</div>
                    </div>
                    <div class="unit-body">
                        <h4>横厅阔景改善之选 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">南北通透</span>
                            <span class="tag">超大面宽阳台</span>
                            <span class="tag">多分离卫生间</span>
                            <span class="tag">横厅格局</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-expand-arrows-alt"></i>
                            <div><strong>阔绰尺度：</strong>约108㎡户型客餐厅开间约5.9米，约117㎡户型客餐厅开间约6.6米，均连通超大阳台，空间感十足。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-wind"></i>
                            <div><strong>通透格局：</strong>均为稀缺的南北通透户型，通风采光俱佳。约117㎡户型更是约108㎡的放大升级版，各功能空间更为宽敞。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-bath"></i>
                            <div><strong>细节品质：</strong>约108㎡配备三分离卫生间，约117㎡升级为四分离卫生间，极大提升使用效率与舒适度。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>满足二胎家庭、三代同堂或需要独立书房/居家办公空间的改善型家庭全方位需求。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在大前海扩容区及海洋新城核心，以高性价比获得拥有超大横厅与全景阳台的改善四房，是抢占区域发展红利的优质资产。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89㎡</div>
                        <div class="unit-name">经典三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>全能高效上车首选 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">三开间朝南</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">动静分区</span>
                            <span class="tag">高实用率</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>采用传统竖厅格局，实现动静分区。客厅开间约3.6米，主卧开间约3.05米，空间利用率高。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>全南向采光：</strong>三开间朝南，确保主要生活空间日照充足，为片区稀缺产品。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-plus"></i>
                            <div><strong>功能定位：</strong>首次置业年轻家庭、追求便利的单身精英或注重资产升值的投资客优质选择，总价门槛优势突出。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-star"></i>
                            <div><strong>设计亮点：</strong>配备奢阔主卧套房，提升居住品质。户型方正，明厨明卫，实用性强。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在“黄金内湾+大前海”的世界级规划核心区，能以三房两卫的全南向配置实现安家梦想，是难得的刚需上车机会。
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目规划前瞻性</h4>
                <p>项目位于深圳国际会展中心（距离约1km）与海洋新城双重价值辐射区，坐享千亿级产业集群与配套红利。交通上拥有“五维交通+双地铁口”（12号线海上田园南站、20号线，11号线及规划中的18号线），快速连接大前海、宝中、南山及福田。周边规划有大型冰雪文旅城、多所九年一贯制学校及综合医院，未来发展潜力巨大。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>片区唯一全南向</h4>
                        <p>所有主力户型（约89-117㎡）均实现全南向或主要功能间朝南，确保最佳的日照与健康居住环境，为片区市场稀缺属性。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-vector-square"></i>
                    </div>
                    <div>
                        <h4>横厅+超大阳台</h4>
                        <p>约108㎡及以上户型采用横厅设计，并配备约5.9米至6.6米的超阔景阳台，极大拓展了景观视野与活动空间。</p>
                    </div>
                </div>
                
                 <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <div>
                        <h4>国企开发 & 品质交付</h4>
                        <p>由特区建发集团开发，品质有保障。预计精装交付，搭载人性化精装体系。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-train"></i>
                    </div>
                    <div>
                        <h4>立体交通网络</h4>
                        <p>坐拥“轨、海、陆、空、铁”五维立体交通，双地铁口（12/20号线），快速通达全城及大湾区。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>顶级规划赋能</h4>
                        <p>位于前海合作区、会展新城、海洋新城三大国家级战略规划交汇点，享受未来千亿产值与人口红利。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>高绿化与丰富配套</h4>
                        <p>小区绿化率约40%，自带幼儿园与商业。周边有海上田园、冰雪文旅城、大型公园等多重生态与商业配套。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目户型特点、梯户比（主要为2梯6户）及周边规划，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约89㎡ 三房</h4>
                <p><strong>朝向选择：</strong>有西南和东南朝向可选。西南向午后采光更充足，东南向上午阳光柔和温暖。</p>
                <p><strong>建议楼层：</strong>中高楼层（12层及以上）。</p>
                <p><strong>选择理由：</strong>可有效规避低楼层可能受到的视线或噪音干扰，获得更开阔的视野和更优的采光。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约108㎡ 四房</h4>
                <p><strong>朝向特点：</strong>主要为西南朝向。</p>
                <p><strong>景观亮点：</strong>客厅连通约5.9米阳台，中高楼层景观视野更佳。</p>
                <p><strong>楼层建议：</strong>优先选择中高层（15层以上），以最大化横厅及阳台的观景价值。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约117㎡ 四房</h4>
                <p><strong>朝向特点：</strong>主要为东南朝向。</p>
                <p><strong>阔绰空间：</strong>客餐厅开间约6.6米，为项目内尺度最大的户型。</p>
                <p><strong>建议楼层：</strong>中高楼层（15层及以上）。</p>
                <p><strong>选择理由：</strong>高楼层能充分展现大横厅与超长阳台的空间气势，并将东南向的景观与采光优势发挥到极致。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于公开户型资料分析，仅供参考。最终选择需结合实地看房感受、个人对日照/视野/噪音的具体偏好、价格及房源实际情况等因素综合决策。建议在选购前，详细查阅官方户型分布图并实地考察。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】置业决策的五个维度</h4>
                <p>1. <strong>规划匹配度</strong>：权衡家庭当前结构与未来3-5年可能的变化，选择能满足成长需求的户型；<br>
                2. <strong>朝向与视野</strong>：明确对日照时长、光线角度的偏好，以及对城市景观、园林景观的重视程度；<br>
                3. <strong>功能空间权重</strong>：思考家庭生活中客厅社交、厨房操作、卧室安静等不同功能空间的优先级；<br>
                4. <strong>资产属性考量</strong>：结合片区发展规划，评估所选户型的未来流通性与保值增值潜力；<br>
                5. <strong>个性化需求</strong>：考虑如居家办公、儿童活动、老人起居等特殊生活场景对户型细节的要求。</p>
            </div>
        </div>
    </div>
`
            }
        },
        "沙井中心": {
            "珑湾上城花园": {
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
            <h1>珑湾上城花园项目详解</h1>
            <p class="subtitle">沙井中心 · 大型现房综合体 · 约300万级上车盘</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>珑湾上城花园（别名：中熙·珑湾上城）位于宝安区沙井街道核心，南环路与西环路交汇处，是一个总建筑面积约42万平方米的大型城市综合体。项目集品质住宅、商务公寓、甲级写字楼及特色商业街区于一体，已于2024年底完成交付，目前处于精装现房销售状态，主打建面约78-113㎡的三至四房，以折后价格信息已删除的亲民门槛，主要面向沙井及周边区域的刚需和初步改善家庭。</p>

            <div class="special-note">
                <h4>🏙️ 核心定位：沙井中心区大型现房综合体</h4>
                <p>项目的核心价值在于其成熟的区域位置和“所见即所得”的现房优势：</p>
                                <table>
                    <tr><th>现房销售，即买即住</th><td>社区已实景呈现，园林、外立面、房屋质量一目了然，完全规避了期房的交付风险和等待周期。</td></tr>
                    <tr><th>综合体业态丰富</th><td>自身配备约2.2万㎡开放式商业街区，满足基础生活需求，同时涵盖办公、公寓等多重功能，自成小型生活圈。</td></tr>
                    <tr><th>沙井成熟生活区</th><td>相较于正在开发中的会展湾板块，项目地处沙井已发展多年的成熟区域，周边生活氛围和基础配套更为完善。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>现房确定性</th><td>精装现房，品质可见，收房周期短，居住或投资计划可立即实施。</td></tr>
                    <tr><th>总价门槛亲民</th><td>78㎡三房价格信息已删除，是入驻宝安成熟片区的较低门槛之一。</td></tr>
                    <tr><th>商业配套成熟</th><td>除自带商业外，1公里范围内聚集新沙天虹、京基百纳广场、海岸城（含山姆会员店）等多个大型商业中心。</td></tr>
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
                    <td>深圳市中熙房地产开发有限公司（与沙井和一股份合作公司联合开发）</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>深圳市中熙物业管理有限公司</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约4.88万㎡</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约42万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>约5.94 - 6.87</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋与户数</strong></td>
                    <td>共11栋塔楼，规划总户数约2526-3220户</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>约1927个，车位比约1:0.76 - 1:1.24</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>住宅70年</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>住宅约4.5元/㎡/月</td>
                </tr>
                <tr>
                    <td><strong>装修交付</strong></td>
                    <td>精装交付，配置美的、方太等一线品牌</td>
                </tr>
                <tr>
                    <td><strong>当前状态</strong></td>
                    <td><strong>现房销售</strong>（已于2024年12月交付），剩余约170套房源</td>
                </tr>
                <tr>
               
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与片区</h3>
            <p>项目地处沙井街道传统核心区，沙井南环路与西环路交汇处。片区发展成熟，生活气息浓厚，与正在大规模开发、以产业和规划为导向的“会展海洋城”核心区有所区别，更侧重于满足现有居民的日常生活需求。</p>

            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>轨道交通（主要短板）</th><td>距离现有地铁<strong>11号线马安山站约2公里</strong>，在建的<strong>12号线沙蚝站约1.5公里</strong>，均需依赖公交、骑行或自驾接驳，非严格意义上的地铁口物业。</td></tr>
                    <tr><th>自驾路网</th><td>紧邻宝安大道、107国道、京港澳高速、沿江高速等城市主干道，自驾出行较为便利，约30-40分钟可通达前海、南山。</td></tr>
                </table>

            <h3>🏫 教育资源（核心优势）</h3>
                            <table>
                    <tr><th>一站式教育</th><td>项目<strong>自带一所已开学的9班公立幼儿园</strong>。并<strong>紧邻已开学的深圳市宝安区和一学校</strong>（九年一贯制公办），真正实现从家门口幼儿园到初中的“目送式”教育。</td></tr>
                    <tr><th>周边学校</th><td>此外，周边还有荣根学校、沙井中学等口碑学校可供选择。</td></tr>
                </table>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>规划约2.2万㎡开放式特色商业街区。</td></tr>
                    <tr><th>成熟商圈环绕</th><td>1公里范围内汇集<strong>新沙天虹（约10万㎡）、京基百纳广场（约20万㎡）、万丰海岸城（约18万㎡，含山姆会员店）</strong>等多个已开业的大型商业综合体，购物、休闲、餐饮选择极其丰富。</td></tr>
                    <tr><th>生态与医疗</th><td>紧邻大王山公园，周边有沙井公园、立新湖公园。2公里内有深圳市中西医结合医院、沙井人民医院等医疗资源。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>现房销售，风险极低</th><td>最大优点。所有配套、园林、房屋质量均为实景，即买即住或即收租，无烂尾、延期或减配风险。</td></tr>
                    <tr><th>商业配套极其成熟</th><td>坐享沙井最核心的成熟商圈，日常生活和娱乐消费极为便利，非待开发新区可比。</td></tr>
                    <tr><th>总价门槛控制得当</th><td>以300万出头的总价提供三房功能，在宝安成熟片区具有性价比。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>轨道交通是明显短板</th><td>距离现有及在建地铁站均超过1.5公里，对依赖地铁通勤的上班族非常不便，需依靠其他交通方式接驳。</td></tr>
                    <tr><th>高容积率，居住密度大</th><td>容积率高达5.94-6.87，社区户数超过2500户，人口密集，可能影响居住的静谧性和公共空间体验。</td></tr>
                    <tr><th>户型设计较为紧凑</th><td>尤其是78-79㎡做三房，部分房间尺度可能偏小，适合功能性需求大于舒适度需求的家庭。</td></tr>
                    <tr><th>城市界面新旧混杂</th><td>沙井老城区城市界面相对陈旧，周边存在农民房和旧工业区，城市观感一般。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>厌恶期房风险的“现房主义者”</th><td>追求购房的确定性和安全性，希望尽快入住或投入使用的买家。</td></tr>
                    <tr><th>孩子在读或即将入读的家庭</th><td>对“家和学校零距离”有强烈需求的家庭，项目教育配套是核心吸引力。</td></tr>
                    <tr><th>生活圈在沙井及宝安北部的客群</th><td>在沙井、福永、松岗等地工作或生活，对地铁依赖度不高，更看重生活便利度。</td></tr>
                    <tr><th>预算有限的宝安刚需上车族</th><td>总价预算在300-400万之间，希望在关内置业三房，并能接受相对紧凑户型的首次购房者。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>珑湾上城花园是一个优缺点都非常鲜明的大型成熟区现房综合体。它完美地解决了购房者对于“交付不确定”的焦虑，并用“家门口的学校”和“举步即达的商圈”提供了极高的生活便利度，但其遥远的轨道交通距离也构成了主要短板。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>是否选择这个项目，取决于您的生活半径和对通勤方式的依赖程度。如果您的工作生活圈主要在宝安北部，出行以自驾为主，且非常看重教育的便捷性和现房的确定性，那么它是一个务实的选择。反之，如果您在南山、福田等东部核心区工作，高度依赖地铁通勤，则需要谨慎考虑其交通不便带来的时间成本。</p>
            </div>
            <p>与此前分析的会展湾项目（如前海未来城、招商雍境名邸）相比，珑湾上城花园代表了另一种开发逻辑：它不依赖于宏大的未来规划，而是立足于已经成熟的配套和即买即住的现实，服务于当下既有明确生活需求的客群。</p>
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
            <h1>珑湾上城花园</h1>
            <div class="subtitle">深圳宝安沙井 · 国际会展核芯精装现房大城</div>
        </header>
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳宝安珑湾上城花园（别名：中熙·珑湾上城）项目的全面户型分析。作为沙井国际会展中心片区的精装现房大盘，项目以“高实用率、即买即住、全龄教育”为核心卖点。报告将深入解析其主力户型设计、核心价值及作为现房的稀缺性，为您的决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>珑湾上城花园位于宝安区沙井街道沙井南环路与西环路交汇处西北侧，紧邻深圳国际会展中心（约2公里），属于前海发展主轴辐射范围。项目总建筑面积约42万㎡，是一个集住宅、公寓、办公、商业于一体的城市综合体。当前主力在售为精装现房，房源集中在2C、3A、3B栋，共计约170席。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与定位</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与梯户比</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>高性价比入门三房</strong></td>
                        <td>约78-79㎡</td>
                        <td>三房两厅一卫</td>
                        <td>布局紧凑实用，部分房源朝南采光优；2梯5户/3梯6户设计。</td>
                    </tr>
                    <tr>
                        <td><strong>改善舒适三房（主力）</strong></td>
                        <td>约89㎡</td>
                        <td>三房两厅两卫</td>
                        <td>东南朝向，双阳台设计，主卧套房；3梯5户设计。</td>
                    </tr>
                    <tr>
                        <td><strong>稀缺通透四房（主力）</strong></td>
                        <td>约113㎡</td>
                        <td>四房两厅两卫</td>
                        <td>南北通透，三阳台（含约4米阔景阳台），主卧带衣帽间；梯户比因楼栋而异。</td>
                    </tr>
                    <tr>
                        <td><strong>其他在售产品</strong></td>
                        <td>约32-131㎡</td>
                        <td>一居室至五房</td>
                        <td>涵盖小面积公寓及大面积改善产品，满足多元需求。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">5.94-6.87</div>
                    <div class="parameter-desc">密度较高，楼间距需重点关注</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 整体均价</div>
                    <div class="parameter-value">约4.2-4.3万元/㎡</div>
                    <div class="parameter-desc">总价314万起，覆盖刚需及改善</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 总户数/车位比</div>
                    <div class="parameter-value">2526户 / 约1.24:1</div>
                    <div class="parameter-desc">社区规模大，车位配置相对充足</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 绿化率/风格</div>
                    <div class="parameter-value">40% / Art Deco</div>
                    <div class="parameter-desc">Art Deco建筑风格，AECOM设计园林</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约78-79㎡</div>
                        <div class="unit-name">高性价比三房 · 上车之选</div>
                    </div>
                    <div class="unit-body">
                        <h4>极致实用的功能三房 · 三房一卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">紧凑实用</span>
                            <span class="tag">部分朝南</span>
                            <span class="tag">低总价门槛</span>
                            <span class="tag">精装现房</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间效率：</strong>户型布局紧凑，空间利用率高，在约79㎡内实现三房功能，被誉为“高性价比之选”。部分房源朝南，采光条件优越。精装交付，含全屋收纳系统。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>功能定位：</strong>完美适配新婚夫妇、三口之家等首次置业或预算有限的刚需家庭。折后总价314万-322万元，是入住沙井会展核心区大型社区的最低门槛之一。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>附加价值：</strong>作为现房，品质可见，即买即住，规避了期房交付的不确定性。部分低楼层特惠房源总价可低至约290万起，进一步降低了上车难度。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选房建议：</strong>此户型核心优势在于总价。选择时应优先考虑朝南向房源以保证采光。由于项目容积率高，中高楼层视野和通风会更好，但低楼层价格优势明显，需根据预算和个人对光照的敏感度权衡。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89㎡</div>
                        <div class="unit-name">改善型舒适三房 · 明星户型</div>
                    </div>
                    <div class="unit-body">
                        <h4>品质与功能兼备 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">东南朝向</span>
                            <span class="tag">双阳台</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">通风采光佳</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>格局亮点：</strong>核心优势为东南朝向，配备双阳台（生活阳台+景观阳台），实现了良好的通风与采光。主卧采用套房式布局，带独立卫浴，极大提升了居住的私密性和舒适性。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>设计细节：</strong>公共卫生间干湿分离，客厅与餐厅相连延伸了活动空间。整体户型设计方正，动线合理，兼顾了功能性、舒适性与家庭互动性。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>适合对居住品质有更高要求的改善型刚需家庭，或需要父母同住协助带孩的三代同堂雏形家庭。折后总价360万-383万元。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选房建议：</strong>作为项目的明星户型，其价值与楼层、景观视野关联度高。部分景观视野好的房源单价可达4.5万元/㎡。建议优先选择中高楼层，以最大化其东南朝向和双阳台的景观与采光价值。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约113㎡</div>
                    <div class="unit-name">稀缺通透四房 · 终极改善</div>
                </div>
                <div class="unit-body">
                    <h4>一步到位的家庭空间 · 四房两卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">三阳台设计</span>
                        <span class="tag">阔景阳台</span>
                        <span class="tag">主卧衣帽间</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>奢阔尺度与通透性：</strong>稀缺的南北通透户型，配备三阳台，其中包含一个约4米宽的阔景阳台，视野开阔。客餐厅一体化设计，极大地提升了整个公共区域的空间感。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>豪华配置：</strong>主卧套房不仅带独立卫浴，还配备了步入式衣帽间。精装细节包含智能家电控制系统，提升了居住的便捷与现代化体验。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-users"></i>
                        <div><strong>功能定位：</strong>完美满足多孩家庭、长期三代同堂或需要独立书房、影音室等多功能空间的终极改善需求。折后总价469万-510万元，是区域内少有的大户型精装现房选择。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>选房建议：</strong>此户型的核心价值在于“通透”和“尺度”。务必选择纯正的南北通透单元，并优先考虑高楼层，以享受无遮挡的通风效果和更广阔的视野。该户型为清盘阶段的稀缺产品，选择面可能有限，遇到合适房源需果断。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目核心价值：精装现房与“目送式”教育</h4>
                <p>1. <strong>精装现房，即买即住零风险：</strong>项目已于2024年底完成交付，目前处于现房销售状态。客户可实地查验房屋质量、园林实景和周边环境，完全规避了期房的交付延期、品质不符等风险，付清款项后可快速办理产权证并入住，确定性极高。<br>
                2. <strong>12年“目送式”教育配套：</strong>项目自带已开学的公立幼儿园，并紧邻九年一贯制公办学校——深圳市宝安区和一学校。这实现了从幼儿园到初中的“目送式”教育衔接，无需家长长途接送，是项目最硬核的配套优势之一。<br>
                3. <strong>高密度下的品质营造：</strong>尽管项目容积率高，但开发商通过聘请AECOM设计“城市万花筒”主题园林（绿化率40%）、采用Art Deco建筑风格、规划社区泛会所（如四点半学堂、第二书房）等方式，力图在都会综合体中提升居住体验。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>实景现房销售，品质确定零风险</h4>
                        <p>社区已成熟，园林、建筑、装修品质一览无余，即买即住，彻底规避期房交付不确定性，是当前市场下稀缺的“确定性”选择。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>户型实用率高，功能定位清晰</h4>
                        <p>从78㎡极致三房到113㎡通透四房，户型设计紧凑实用，得房率表现不错（整体约80%），精准覆盖刚需到改善的全生命周期需求。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>12年目送式优质教育配套</h4>
                        <p>自带幼儿园+紧邻九年一贯制和一学校，实现家门口的全龄教育，是吸引家庭客户的核心王牌。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>醇熟商圈环绕与立体交通</h4>
                        <p>自带商业，1公里内汇聚新沙天虹、京基百纳、海岸城（含山姆）等大型商场。近地铁11号线、12号线（在建）及多条主干道，自驾出行便利。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>国际会展核芯区位与规划红利</h4>
                        <p>坐享大前海、国际会展中心（约2公里）、海洋新城等多重战略规划辐射，具备长期发展潜力。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>所见即所得的品质与设计</h4>
                        <p>Art Deco建筑风格、AECOM设计园林、社区泛会所等，在实景中得以呈现，品质感更具说服力。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目高容积率、非地铁上盖、现房等核心特点，为您提供以下针对性建议：</p>
                
                <h4 style="margin-top: 25px; color: #A0522D;">通用黄金法则：现房时代，眼见为实</h4>
                <p><strong>核心建议：</strong>因为是现房，<strong>务必进行实地看房！</strong>这是线上分析无法替代的环节。亲自感受不同楼栋、楼层、朝向的采光、视野、通风及噪音情况，尤其是下午时段的西晒影响。<br>
                <strong>楼层策略：</strong>项目容积率高（5.94-6.87），楼栋可能较密集。强烈建议优先选择<strong>中高楼层（建议15层及以上）</strong>，以有效规避周边建筑遮挡，保障基本的日照时长、视野开阔度和通风效果。</p>
                
                <h4 style="margin-top: 25px; color: #A0522D;">分户型选择策略</h4>
                <p><strong>约78-79㎡三房（刚需上车）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>朝向：</strong>优先选择<strong>朝南</strong>户型，确保核心居住空间采光。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼层：</strong>在预算范围内尽量选高。若预算极其有限，可选低楼层特价房，但务必白天实地验证采光。<br><br>
                <strong>约89㎡三房（品质改善）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>朝向/景观：</strong>坚持<strong>东南朝向</strong>，这是其核心价值。同时关注阳台外的景观视野，中高楼层景观溢价明显。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼栋：</strong>了解不同楼栋的梯户比（如3梯5户），偏好更低密度楼栋。<br><br>
                <strong>约113㎡四房（终极改善）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>通透性验证：</strong>实地确认是否为真正的<strong>南北通透</strong>，感受空气对流效果。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼层与视野：</strong>必须选择<strong>高楼层</strong>，以匹配其改善定位，并享受阔景阳台带来的视野价值。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>房源稀缺性：</strong>此为清盘户型，遇到符合条件的房源应加快决策节奏。</p>
                
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>珑湾上城花园的核心价值在于“确定的现房”和“硬核的教育配套”。对于依赖地铁通勤的客户，需注意项目距离现有地铁站约1.5-2公里，需依赖公交或自驾接驳。选择时，应将教育需求、通勤方式、对现房的偏好与户型本身的优劣结合起来，做出综合决策。以上建议仅供参考，最终选择请以实地考察感受为准。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】不同客群的决策聚焦点</h4>
                <p>1. <strong>预算严格的首次置业者：</strong>聚焦78-79㎡朝南户型。利用现房优势，仔细查验心仪房源的采光，在总价和居住体验间找到最佳平衡点。<br>
                2. <strong>有孩的改善家庭：</strong>89㎡三房是重点。将“东南朝向”、“中高楼层”和“教育资源”作为不可妥协的底线，优先保障孩子成长环境的舒适与便利。<br>
                3. <strong>多代同堂或一步到位改善者：</strong>瞄准113㎡四房。将“南北通透”、“高楼层视野”和“主卧套房配置”作为核心筛选标准，确保家庭长期居住的舒适度。<br>
                4. <strong>所有客户：</strong>充分利用现房优势，在不同天气、不同时段多次实地看房，并与已入住邻居交流，获取最真实的居住反馈。</p>
            </div>
        </div>
    </div>
`
            },
            "拾悦城楠园": {
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
            <h1>拾悦城楠园项目详解</h1>
            <p class="subtitle">沙井中心 · 地铁口超大型综合体 · 拾悦城二期 · 高实用率新规户型</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>拾悦城楠园是深圳沙井中心区超大型综合体“拾悦城”的二期住宅项目，由招商蛇口、华侨城、沙井本土股份公司联手开发。作为总建面约80万㎡大城的全新组团，楠园主打建面约89-140㎡的三至四房改善户型，采用新规设计实现高实用率。项目坐拥地铁12号线沙三站上盖的黄金位置，无缝衔接约10万㎡集中商业“欢乐港湾”（规划），是沙井片区定位较高、配套能级突出的核心地铁盘。</p>

            <div class="special-note">
                <h4>🏙️ 核心定位：沙井中心地铁口大型综合体升级之作</h4>
                <p>作为拾悦城二期的“楠园”，项目在区位和产品上均有升级：</p>
                                <table>
                    <tr><th>地铁上盖+大型商业</th><td>位于12号线沙三站地铁口，并与规划中的约10万㎡“欢乐港湾”商业直接连通，形成“地铁+商业+住宅”的一体化TOD模式。</td></tr>
                    <tr><th>大城二期，配套成熟</th><td>共享拾悦城一期已呈现的园林、学校等成熟配套，同时又作为新组团拥有独立的升级设计和社区氛围。</td></tr>
                    <tr><th>产品力升级</th><td>相较于一期，户型设计进一步优化，实用率更高，定位更偏向改善家庭。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>黄金交通组合</th><td>12号线沙三站地铁上盖，一站换乘11号线，快速通达前海、南山。</td></tr>
                    <tr><th>旗舰商业规划</th><td>无缝衔接约10万㎡“欢乐港湾”商业（规划），建成后将成沙井商业新标杆。</td></tr>
                    <tr><th>目送式教育</th><td>自带幼儿园，并紧邻已开学的九年一贯制公办学校——华中师大宝安附属学校（创新实验学校）。</td></tr>
                    <tr><th>新规高实用率</th><td>采用深圳新建筑设计规范，通过阳台半赠送、飘窗全赠送等方式，实现约80%-85%的高实用率。</td></tr>
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
                    <td>招商蛇口、华侨城、深圳市壆岗股份合作公司（实力央企+本土联合）</td>
                </tr>
                <tr>
                    <td><strong>所属大城</strong></td>
                    <td>拾悦城（总建面约80万㎡超大型综合体）二期住宅</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约1.8万㎡（楠园地块）</td>
                </tr>
                <tr>
                    <td><strong>建筑面积</strong></td>
                    <td>约12.7万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>约5.0-5.5</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>约30%-35%</td>
                </tr>
                <tr>
                    <td><strong>楼栋与户数</strong></td>
                    <td>约4栋高层住宅，总户数约700余户</td>
                </tr>
                <tr>
                    <td><strong>主力户型</strong></td>
                    <td>建面约89-140㎡三房至四房，定位改善</td>
                </tr>
                <tr>
                    <td><strong>车位配置</strong></td>
                    <td>车位比预计约1:1.1</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>装修交付</strong></td>
                    <td>预计为精装修交付</td>
                </tr>
                <tr>
                    <td><strong>物业公司</strong></td>
                    <td>招商积余物业（预计）</td>
                </tr>
                <tr>
                    <td><strong>参考价格</strong></td>
                    <td><strong>待定（以取得预售证后公示为准）</strong><br>市场预计单价可能在5万元/㎡区间，总价约价格信息已删除</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与片区</h3>
            <p>项目位于宝安区沙井街道中心路与民主大道交汇处，地处沙井传统的核心居住区。周边生活氛围成熟，同时作为拾悦城的一部分，共享大城的整体规划和高能级配套，属于沙井片区第一梯队的居住板块。</p>

            <h3>🚇 交通配套（核心优势）</h3>
                            <table>
                    <tr><th>地铁</th><td><strong>与地铁12号线“沙三站”无缝接驳</strong>，是真正的地铁上盖物业。一站可达“沙井站”换乘11号线，快速连接前海、南山、福田。</td></tr>
                    <tr><th>自驾</th><td>临近宝安大道、广深公路、外环高速等主干道，自驾出行便利。但沙井老城区高峰期部分路段可能拥堵。</td></tr>
                </table>

            <h3>🏫 教育资源（核心优势）</h3>
                            <table>
                    <tr><th>一站式优质教育</th><td>项目<strong>自带一所9班幼儿园</strong>。并<strong>紧邻已开学的华中师范大学宝安附属学校（创新实验学校）</strong>，该校为九年一贯制公办学校，由名校华中师大合作管理，是片区内备受关注的教育资源。</td></tr>
                    <tr><th>共享大城教育</th><td>拾悦城大城内还规划有更多教育用地，未来教育资源丰富。</td></tr>
                </table>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>旗舰商业规划</th><td>最大亮点。规划中的<strong>约10万㎡“欢乐港湾”集中式商业</strong>（与项目同期建设）将直接与地铁、住宅连通，预计引进一线品牌，改变沙井商业格局。</td></tr>
                    <tr><th>成熟商圈环绕</th><td>3公里范围内有<strong>约18万㎡万丰海岸城（含山姆会员店）、京基百纳广场、新沙天虹</strong>等，当前购物选择已非常丰富。</td></tr>
                    <tr><th>生态与医疗</th><td>靠近立新湖公园、沙井市民广场。周边有深圳市中西医结合医院、沙井人民医院等。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>交通与商业的顶级组合</th><td>“地铁上盖+大型规划商业”的TOD模式，在沙井乃至宝安都极具稀缺性和竞争力。</td></tr>
                    <tr><th>优质且确定的教育资源</th><td>家门口的九年一贯制名校已开学，教育价值确定且优质，对家庭客户吸引力强。</td></tr>
                    <tr><th>央企品牌与综合大城</th><td>由招商、华侨城两大央企操刀，品质和交付有保障。作为80万㎡大城的一部分，能享受超配的公共设施和成熟的社区氛围。</td></tr>
                    <tr><th>产品定位清晰，实用率高</th><td>户型面向改善家庭，设计合理，新规下的高实用率提升了空间性价比。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>价格预期较高</th><td>作为沙井的标杆项目，预计单价和总价会处于片区高位，上车门槛较高。</td></tr>
                    <tr><th>核心商业仍需等待</th><td>最大的商业亮点“欢乐港湾”尚在建设中，完全呈现并成熟运营需要时间。</td></tr>
                    <tr><th>周边城市界面待更新</th><td>沙井老城区部分区域仍存在旧村和厂房，城市面貌新旧混杂。</td></tr>
                    <tr><th>容积率不低，居住密度大</th><td>作为地铁上盖综合体，容积率较高，社区户数多，居住密度和人口流动性相对较大。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>重视教育与通勤的改善家庭</th><td>孩子在读或即将入学，且工作地点在南山、前海等地，依赖地铁通勤，追求品质学区房的家庭。</td></tr>
                    <tr><th>看好沙井核心区发展的置业者</th><td>认同沙井中心区的成熟度和未来发展，愿意为地段、交通、商业、教育的“全能配套”支付溢价的买家。</td></tr>
                    <tr><th>信赖央企品牌的品质追求者</th><td>对开发商品质、物业服务和大型社区氛围有较高要求。</td></tr>
                    <tr><th>预算较为充足的沙井本地改善客群</th><td>希望在沙井本地升级居住环境，追求更优质产品和社区的家庭。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>拾悦城楠园是沙井中心区定位最高、配套能级最强的住宅项目之一。它集齐了“地铁上盖、旗舰商业、名校学区、央企大城”等多重核心价值要素，旨在打造沙井片区的 “标杆改善型住宅” 。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>该项目适合追求综合性居住价值、且预算相对充足的改善型家庭。如果您的主要生活、工作圈在深圳西部，并高度看重出行的便捷性、子女教育的确定性以及未来商业的升级潜力，那么拾悦城楠园是沙井乃至宝安北部的首选之一。选择前，需考虑其较高的价格预期，并权衡对大型综合体社区高密度特点的接受程度。</p>
            </div>
            <p>与同属沙井中心的珑湾上城花园相比：珑湾上城是成熟区的现房，主打“所见即所得”的确定性和高性价比，但地铁是短板；而拾悦城楠园则是 “未来城市生活”的期房代表，以顶级规划配套和更高产品定位为导向，适合不同需求的购房者。</p>
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
            <h1>拾悦城楠园</h1>
            <div class="subtitle">深圳宝安沙井 · 地铁口准现房全能大城</div>
        </header>
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供拾悦城楠园（拾悦城二期）项目的全面户型分析。作为沙井中心区的70万㎡进阶生活大城二期作品，项目以“精装准现房、地铁口、高性价比”为核心卖点。报告将深入解析其全系竖厅户型的特点、高容积率下的产品逻辑及作为2025年底交付的确定性价值，为您的决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>拾悦城楠园位于宝安沙井中心片区，寮丰路与岗头路交汇处，是拾悦城大城二期的住宅部分。项目为大型城市更新项目，整体分三期开发，一期已交付。楠园占地约3.54万㎡，总建面约22.6-32.3万㎡，由7栋48-53层超高层住宅围合而成，容积率高达6.4-6.66，计划于2025年12月底带简装交付，是当前市场上稀缺的准现房项目。社区内规划有幼儿园，北侧地块规划有九年一贯制学校。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与定位</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与梯户比</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>极致刚需三房</strong></td>
                        <td>约86㎡</td>
                        <td>三房两厅一卫</td>
                        <td>竖厅设计，客厅开间3.3米，U型厨房；全东北朝向；部分房源折后总价约320-345万。</td>
                    </tr>
                    <tr>
                        <td><strong>主流舒适三房</strong></td>
                        <td>约100-107㎡</td>
                        <td>三房两厅两卫</td>
                        <td>竖厅，客厅开间3.4-3.6米；西南或东南朝向；100㎡户型折后总价约350-400万。</td>
                    </tr>
                    <tr>
                        <td><strong>横厅改善四房</strong></td>
                        <td>约115-118㎡</td>
                        <td>四房两厅两卫</td>
                        <td>横厅南北通透，客餐厅开间约6.3米；西南/东南向；部分可看定岗湖景；折后总价约420-448万。</td>
                    </tr>
                    <tr>
                        <td><strong>奢阔功能五房</strong></td>
                        <td>约140㎡</td>
                        <td>五房两厅两卫</td>
                        <td>竖厅南北通透，客厅开间4.1-4.7米；东北朝向；折后总价约630-660万。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">6.66</div>
                    <div class="parameter-desc">超高层围合式社区，楼间距需重点关注</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 整体折后均价</div>
                    <div class="parameter-value">约3.8-4.2万/㎡</div>
                    <div class="parameter-desc">工抵特价房最低约3.46万/㎡起，性价比突出</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 得房率（不含赠送）</div>
                    <div class="parameter-value">约74%-77%</div>
                    <div class="parameter-desc">户型以实用紧凑为主，得房率中等</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户比 / 车位比</div>
                    <div class="parameter-value">4梯7户 / 约1:1.18</div>
                    <div class="parameter-desc">梯户比符合超高层定位，车位配置充足</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约86㎡</div>
                        <div class="unit-name">极致刚需三房 · 上车之选</div>
                    </div>
                    <div class="unit-body">
                        <h4>“麻雀虽小，五脏俱全” · 三房一卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">紧凑实用</span>
                            <span class="tag">东北朝向</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">低总价</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间效率：</strong>得房率约76.92%，在86㎡内实现标准三房格局，是典型的刚需功能型产品。采用LDKB一体化设计，U型厨房与三段式分离卫生间，功能齐全。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>经典竖厅，动静分区。客厅开间约3.3米，略显局促。阳台宽约1.8米，较为开敞。户型仅有东北朝向，采光时间集中于上午，下午及冬季日照可能受限。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>预算严格限制的首次置业者、年轻三口之家。其核心优势在于极低的总价门槛，折后总价约320万起即可拥有沙井地铁口准现房三房。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选房建议：</strong>此户型的核心价值是总价和功能。鉴于仅为东北朝向，<strong>务必选择中高楼层（建议20层以上）</strong>，以最大程度保障采光和视野，规避低楼层因高容积率可能带来的严重遮挡。若预算允许，可比较同面积段但朝向更优的其他项目。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约100-107㎡</div>
                        <div class="unit-name">主流舒适三房 · 品质升级</div>
                    </div>
                    <div class="unit-body">
                        <h4>功能与舒适兼顾 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">双卫配置</span>
                            <span class="tag">西南/东南向</span>
                            <span class="tag">部分湖景</span>
                            <span class="tag">性价比之选</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>尺度升级：</strong>相比86㎡户型，核心升级在于双卫生间配置，极大提升了家庭居住的便利性和隐私性。客厅开间3.4-3.6米，空间感略有改善。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>格局与朝向：</strong>同样为经典竖厅。优势在于提供了西南或东南朝向的选择，采光条件远优于86㎡户型。部分B座、G座房源可享有定岗湖景观。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>追求一步到位、对居住品质有一定要求的首改家庭，或需要双卫配置的三代同堂雏形家庭。折后总价约350-400万，是项目最具性价比的舒适三房选择。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选房建议：</strong>务必优先选择<strong>东南朝向</strong>，以获得更舒适的早晨阳光并避免西晒。注重景观的客户，可关注B座、G座看湖房源。由于梯户比为4梯7户，中高楼层（15层以上）在电梯等待时间和居住私密性上会更优。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约115-118㎡</div>
                    <div class="unit-name">横厅改善四房 · 空间革新</div>
                </div>
                <div class="unit-body">
                    <h4>奢阔横厅，通透生活 · 四房两卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">横厅南北通透</span>
                        <span class="tag">约6.3米开间</span>
                        <span class="tag">无过道设计</span>
                        <span class="tag">改善标杆</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>空间革命：</strong>这是项目唯一采用横厅设计的户型序列。客餐厅开间约6.3米，连接1.8米宽阳台，形成极度开阔的公共活动空间。南北通透设计，通风采光效果为全盘最佳。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节与配置：</strong>采用无过道设计，空间利用率高。主卧开间可达3.55米，尺度舒适。朝向主要为西南或东南，部分高楼层单位享有优质景观。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-users"></i>
                        <div><strong>功能定位：</strong>追求现代居住体验、注重家庭社交与空间感的多孩家庭或终极改善客群。以约118㎡实现四房两卫横厅格局，折后总价约440-480万，在片区内具备一定稀缺性。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>选房建议：</strong>作为项目的改善标杆，此户型价值与<strong>楼层、景观视野强相关</strong>。强烈建议选择<strong>中高楼层（25层及以上）</strong>的南向或东南向单位，以最大化其横厅的采光、通风及景观价值。务必实地感受不同楼栋的视野差异。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】高容积率下的产品逻辑与准现房价值</h4>
                <p>1. <strong>产品定位清晰：</strong>在6.66的高容积率下，项目通过“高梯户比（4梯7户）、紧凑实用户型、围合式布局”来平衡成本与居住密度。户型设计以刚需和首改的竖厅产品为主，主打功能性和总价控制。<br>
                2. <strong>精装准现房的确定性：</strong>项目预计2025年12月交付，已是准现房状态。这意味着购房者可以实地考察楼栋、园林甚至房屋质量，极大规避了期房的交付风险，所见即所得，是当前市场环境下重要的价值保障。<br>
                3. <strong>用材与品牌亮点：</strong>虽为刚需改善盘，但项目在建材上有所投入，如采用日本SKK真石漆外墙、贝克洛系统门窗等，旨在提升产品质感。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>准现房销售，交付确定风险低</h4>
                        <p>预计2025年底交付，工程进度可见，极大降低了期房的不确定性，实现“即买即住”的安心。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁口便利交通</h4>
                        <p>距离11号线沙井站约700-800米，马安山站约900米，5站达机场，7站至宝安中心，通勤效率高。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>公园环绕的生态宜居</h4>
                        <p>紧邻约9.5万㎡定岗湖湿地公园，周边壆岗湖、大钟山等公园环抱，生态资源优越。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>目送式教育配套（规划中）</h4>
                        <p>项目配建18班幼儿园，北侧规划36班九年一贯制学校（已纳入宝中外国语学校集团），叠加一期拾悦小学，教育资源丰富。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <h4>成熟商圈与醇熟大城</h4>
                        <p>约3公里内享有天虹、京基百纳、沃尔玛等超48万㎡商圈。作为70万㎡大盘二期，共享一期已形成的成熟居住氛围。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tag"></i>
                    </div>
                    <div>
                        <h4>突出的价格与性价比</h4>
                        <p>折后均价约4万/㎡，工抵特价房单价低至约3.46万/㎡起，总价320万起，对比沙井同区域新房具有显著价格优势。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目<strong>高容积率（6.66）、超高层（48-53层）、围合式布局</strong>的核心特点，为您提供以下针对性极强的建议：</p>
                
                <h4 style="margin-top: 25px; color: #556B2F;">核心原则：高容积率下，“买高不买低”是铁律</h4>
                <p>对于超高密度社区，<strong>中高楼层是保障基本居住体验（采光、通风、视野、隐私）的生命线</strong>。低楼层受遮挡严重，日照时间短，视野和私密性差，未来资产流动性也较弱。</p>
                
                <h4 style="margin-top: 25px; color: #556B2F;">分户型选择策略</h4>
                <p><strong>约86㎡三房（预算优先型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>选择逻辑：</strong>牺牲部分朝向和舒适度，换取总价优势。若非要选择，<strong>必须挑尽可选范围内最高的楼层</strong>，以弥补东北朝向的采光劣势。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>建议：</strong>实地验证心仪房源在一天中不同时段的采光情况。</p>
                
                <p><strong>约100-107㎡三房（平衡品质型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>朝向：</strong>无条件选择<strong>东南朝向</strong>，避开西晒并获得更好采光。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼层：</strong><strong>建议15层及以上</strong>。若预算充足，优选高区看湖单位，景观溢价显著。</p>
                
                <p><strong>约115-118㎡四房（改善享受型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼层与景观：</strong>作为改善产品，<strong>25层及以上是基准线</strong>。横厅和通透性的价值，必须依靠高楼层和无遮挡的视野才能完全体现。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>朝向：</strong>首选<strong>东南向</strong>，其次南向、西南向。</p>
                
                <p><strong>约140㎡五房（功能至上型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>注意：</strong>此户型主要为东北朝向，且总价较高。若非对房间数有硬性要求，建议优先考虑朝向更优的115-118㎡四房。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>如果选择：</strong>同样遵循“买高”原则，并综合评估功能性与朝向采光的取舍。</p>
                
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>拾悦城楠园的核心卖点是“准现房+地铁口+低单价”。选择时，务必亲自在不同时间段（尤其是下午）前往实地，感受目标房源的真实采光、视野和可能存在的噪音影响。对于高容积率小区，现场感受远比户型图更重要。以上建议仅供参考，最终决策请以实地考察为准。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】不同客群的决策聚焦点</h4>
                <p>1. <strong>绝对刚需、预算极紧的客户：</strong>紧盯86㎡特价房。将“总价”置于首位，但必须接受其朝向和紧凑的局限，并通过选择高楼层来尽量优化。<br>
                2. <strong>首置/首改家庭，追求性价比与便利：</strong>100-107㎡三房是主力选择。聚焦“东南朝向”和“中高楼层”，在预算内寻找最优解，这是最稳健的选择。<br>
                3. <strong>注重空间感与改善体验的家庭：</strong>直接考虑115-118㎡横厅四房。将“高楼层”、“南向/东南向”和“景观视野”作为不可妥协的底线，为居住品质付费。<br>
                4. <strong>所有客户：</strong>充分利用准现房优势，进入楼栋内部考察公区、梯户比感受，并与销售人员确认具体的交付标准与时间。</p>
            </div>
        </div>
    </div>
`
            },
            "绿城·锦和玉鸣": {
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
            <h1>绿城·锦和玉鸣核心价值报告</h1>
            <p class="subtitle">深圳西部新国标低密盘 · 成熟地铁口 · 深外学区 · 价格倒挂显著</p>
        </header>
        
        <div class="content">
            <h2>项目概览</h2>
            <p>绿城·锦和玉鸣是由绿城中国与越秀地产联袂打造的深圳西部低密度标杆住宅。项目位于宝安区沙井街道核心地段，是片区稀有的“地铁口+深外学区+大型商业”三位一体项目。凭借约3.1的低容积率、“新国标”好房子设计以及与周边二手房的显著价格倒挂，成为沙井乃至深圳西部极具竞争力的改善型选择。</p>
            
            <h2>核心亮点</h2>
            <div class="highlight-box">
                <ul class="highlight-list">
                    <li><strong>稀缺低密：</strong>容积率仅约3.1，由5栋16-25层建筑组成，在沙井高密度旧改片区中居住舒适度突出。</li>
                    <li><strong>价格倒挂：</strong>项目售价4万+，而一街之隔的二手标杆盘挂牌价已达5万/㎡左右，价值空间坚实。</li>
                    <li><strong>顶级学区：</strong>位于深圳外国语学校宝安学校学区范围内，享有深圳顶级的公办教育资源。</li>
                    <li><strong>地铁上盖：</strong>距离地铁11号线沙井站约300-550米，真正地铁口物业，快速连接前海、南山。</li>
                    <li><strong>新国标标杆：</strong>严格遵循新版《住宅项目规范》设计，层高、隔音、日照等标准全面提升。</li>
                </ul>
            </div>
            
            <h2>预计价格与主力户型</h2>
            <div class="reminder">
                <strong>最新动态：</strong>项目首推6号楼，总高16层，2梯6户，
89㎡3房2卫，折后区间单价约4.4-4.价格信息已删除，折后区间总价约393-410万
104-107㎡4房2卫，折后区间单价约4.62-价格信息已删除，折后区间总价约490-530万
127-130㎡南北通4房2卫，折后区间单价约4.75-5.价格信息已删除，折后区间总价约617-价格信息已删除
            <table>
                <thead>
                    <tr>
                        <th>户型</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心特点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>锦翠/锦云</strong></td>
                        <td>约88-89㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，三开间朝南，LDKB一体化设计</td>
                    </tr>
                    <tr>
                        <td><strong>锦月/锦和/锦瑟</strong></td>
                        <td>约104-107㎡</td>
                        <td>四房两厅两卫</td>
                        <td>“双龙抱珠”格局，四开间朝南，得房率超高</td>
                    </tr>
                    <tr>
                        <td><strong>玉澜/玉堂</strong></td>
                        <td>约127-130㎡</td>
                        <td>四房两厅两卫</td>
                        <td>横厅设计，约5.1米开间，独立玄关，改善标杆</td>
                    </tr>
                </tbody>
            </table>
            <div class="reminder">
                <strong>特别提醒：</strong>最终售价以开发商公示为准，但相比周边二手房存在的显著价差，是项目核心优势之一。
            </div>
            
            <h2>项目基本信息</h2>
            <div class="info-grid">
                <div class="info-card">
                    <h4>开发商</h4>
                    <p>绿城中国、越秀地产（联合开发）</p>
                </div>
                <div class="info-card">
                    <h4>占地面积/建筑面积</h4>
                    <p>约1.9万㎡ / 约5.97万㎡</p>
                </div>
                <div class="info-card">
                    <h4>容积率/绿化率</h4>
                    <p>约3.1 / 约40%</p>
                </div>
                <div class="info-card">
                    <h4>楼栋构成</h4>
                    <p>5栋16-25层住宅</p>
                </div>
                <div class="info-card">
                    <h4>总户数/车位比</h4>
                    <p>约462户 / 约1:1.15（530个车位）</p>
                </div>
                <div class="info-card">
                    <h4>交付标准/产权</h4>
                    <p>预计精装交付 / 70年</p>
                </div>
            </div>
            
            <h2>项目配套</h2>
            <h3>📍 地理位置</h3>
            <p>项目位于宝安区沙井街道，沙井路与企安路交汇处东南侧。地处沙井传统核心生活区，周边居住氛围成熟，各项配套完善。</p>
            
            <h3>🚇 交通配套</h3>
            <ul class="highlight-list">
                <li><strong>地铁：</strong>距离地铁11号线<strong>沙井站</strong>约300-550米，步行可达。11号线为快速线，可速达前海、南山、福田。</li>
                <li><strong>道路：</strong>临近宝安大道、广深公路等城市主干道，自驾出行便利。</li>
            </ul>
            
            <h3>🏫 教育资源</h3>
            <ul class="highlight-list">
                <li><strong>学区学校：</strong>属于<strong>深圳外国语学校宝安学校</strong>学区范围（具体以当年教育局划分为准）。</li>
                <li><strong>自带教育：</strong>项目配建一所9班幼儿园，方便业主子女就近入学。</li>
            </ul>
            
            <h3>🛍️ 商业配套</h3>
            <ul class="highlight-list">
                <li><strong>一站式购物：</strong>北侧紧邻约12万㎡的<strong>百佳华佳漾汇</strong>大型商业综合体（内含沃尔玛）。</li>
                <li><strong>片区商圈：</strong>2公里范围内有约20万㎡的<strong>万丰海岸城</strong>、天虹商场等，未来还有规划的山姆会员店。</li>
                <li><strong>社区底商：</strong>项目自身配有底商，满足日常生活需求。</li>
            </ul>
            
            <h3>🌳 公园人文</h3>
            <ul class="highlight-list">
                <li>周边分布有<strong>沙井市民广场、新桥市民广场</strong>等公共休闲空间。</li>
                <li>距离<strong>海上田园</strong>旅游区车程约20分钟，可供周末度假游玩。</li>
            </ul>
            
            <h2>优劣分析</h2>
            <div class="pros-cons">
                <div class="pros">
                    <h3>✅ 项目优势</h3>
                    <ul>
                        <li><strong>全能配套：</strong>“地铁+深外学区+大型商业”组合稀缺且能级高，自住便利，资产保值力强。</li>
                        <li><strong>价格优势：</strong>与周边二手房存在明显价差，具备高性价比和安全边际。</li>
                        <li><strong>居住舒适：</strong>低容积率、高绿化率，在片区形成差异化竞争力，居住密度更低。</li>
                        <li><strong>产品力强：</strong>绿城“海棠系”精工品质与“新国标”设计标准，保障了户型实用率和居住体验。</li>
                        <li><strong>品牌保障：</strong>绿城与越秀双强联袂，均为口碑开发商，项目品质与交付有保障。</li>
                    </ul>
                </div>
                <div class="cons">
                    <h3>⚠️ 项目注意</h3>
                    <ul>
                        <li><strong>片区面貌：</strong>沙井片区仍有部分旧改和城市更新在进行中，整体城市界面提升需要时间。</li>
                        <li><strong>通勤距离：</strong>对于在福田、罗湖东部工作的客户，通勤时间和距离仍具挑战。</li>
                        <li><strong>学区确定性：</strong>学区划分以每年教育部门最新政策为准，存在微调可能。</li>
                        <li><strong>竞争项目：</strong>沙井及周边新房供应量不小，面临市场竞争。</li>
                    </ul>
                </div>
            </div>
            
            <h2>适合人群</h2>
            <div class="highlight-box">
                <ul class="highlight-list">
                    <li><strong>宝安本地改善家庭：</strong>追求更好居住品质、看重深外学区的升级置业者。</li>
                    <li><strong>西部上班族：</strong>在前海、宝中、南山科技园等地工作，依赖11号线通勤的刚需及刚改客户。</li>
                    <li><strong>价值投资者：</strong>看重地铁口、名校学区稀缺性以及一二手房价格倒挂带来的价值潜力。</li>
                    <li><strong>绿城品牌追随者：</strong>认可绿城产品力和园林品质的购房者。</li>
                </ul>
            </div>
            
            <h2>项目总结</h2>
            <p>绿城·锦和玉鸣是沙井片区一个定位清晰、优势突出的优质改善盘。其核心价值在于将<strong>“地铁口物业”、“深外学区”、“低密社区”和“价格倒挂”</strong>四大稀缺要素集于一身，这在当前市场中尤为难得。对于在深圳西部工作、注重子女教育、且追求更高居住舒适度的家庭而言，该项目是一个非常值得重点关注的选项。</p>
            <p>尽管片区整体面貌仍在提升中，但项目周边成熟的商业与生活配套已能完全满足日常所需。凭借绿城与越秀的品牌力、出色的产品设计以及显著的价格优势，该项目有望成为沙井市场的新标杆。</p>
            
            <div class="footer-note">
                <p>*以上信息根据公开资料整理，仅供参考，具体以开发商实际公示及政府最终文件为准。</p>
            </div>
        </div>
    </div>
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
            <h1>绿城·锦和玉鸣</h1>
            <div class="subtitle">深圳宝安 · 新桥中心 · 国标新规低密住区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳宝安绿城·锦和玉鸣项目的全面户型分析。项目是宝安区首个严格按照新版《住宅项目规范》（GB55038-2025）国标打造的住宅楼盘，由绿城与越秀两大品牌联合开发，将绿城高端“海棠系”产品力与新规标准结合。项目容积率仅3.1，为西部稀缺的低密度社区，旨在重新定义沙井改善居住标准。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>绿城·锦和玉鸣是新规“好房子”标准下的典范作品。项目在土地供应和设计环节均遵循了关于高度超80米住宅的严格规定，实现了低容积率、高使用率与居住舒适度的统一。首推户型集中在1栋和6栋，产品力突出。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型命名（示意）</th>
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
                        <td>经典竖厅，三开间朝南，LDKB一体化，全屋飘窗</td>
                    </tr>
                    <tr>
                        <td><strong>锦月 / 锦和 / 锦瑟</strong></td>
                        <td>约104-107㎡</td>
                        <td>四房两厅两卫</td>
                        <td>“双龙抱珠”格局（部分户型），四开间朝南，270°飘窗</td>
                    </tr>
                    <tr>
                        <td><strong>玉澜 / 玉堂</strong></td>
                        <td>约127-130㎡</td>
                        <td>四房两厅两卫</td>
                        <td>南北通透，独立玄关，约5.1米开间大客厅，约14㎡超大阳台</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约3.1</div>
                    <div class="parameter-desc">限高80米低密社区，共5栋16-25层住宅</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 核心亮点</div>
                    <div class="parameter-value">超高使用率</div>
                    <div class="parameter-desc">新规设计，使用率最高可达105%</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-subway"></i> 地铁距离</div>
                    <div class="parameter-value">约300-550米</div>
                    <div class="parameter-desc">近地铁11号线沙井站，步行可达</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 社区规模</div>
                    <div class="parameter-value">共462户</div>
                    <div class="parameter-desc">纯商品住宅，车位比约1:1.15</div>
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
                        <h4>“双龙抱珠”格局 · 高能四房</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高使用率</span>
                            <span class="tag">四开间朝南</span>
                            <span class="tag">双龙抱珠</span>
                            <span class="tag">家庭友好</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间魔法：</strong>在约104-107㎡面积内实现舒适四房两卫，是新规设计典范。部分户型（如107㎡）使用率高达104.06%，套内空间超越传统户型。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>107㎡户型采用经典的“双龙抱珠”格局，客厅居中，卧室分列两侧，有效保障家庭成员间的隐私与静音。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>采光视野：</strong>四开间朝南，搭配270°无柱转角飘窗（部分户型主卧及两个次卧均有），实现阳光满屋，视野开阔。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>完美解决二胎家庭、三代同堂或需要独立书房/影音室的刚改及改善型需求，在有限面积内实现功能最大化。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是新规优势的集中体现，以约107㎡的建筑面积，通过超高使用率和精巧布局，提供了媲美传统120㎡户型的实用空间，性价比极高。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约88-89㎡</div>
                        <div class="unit-name">锦翠 / 锦云</div>
                    </div>
                    <div class="unit-body">
                        <h4>全能高效刚需优选 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">高得房率</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">全明格局</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>高效布局：</strong>采用经典竖厅，LDKB（客、餐、厨、阳台）一体化设计，空间通透。三开间朝南，客厅开间约3.5米，主卧及次卧配备270°飘窗，得房率约97.47%。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-compass"></i>
                            <div><strong>朝向与景观：</strong>主要为西南或东南朝向，全南向采光。部分楼层可享小区园林或外部城市景观。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-home"></i>
                            <div><strong>细节设计：</strong>S墙设计预留冰箱位，U型厨房烟道外置，卫生间干湿分离，体现了人性化与实用性考量。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-user-plus"></i>
                            <div><strong>功能定位：</strong>首次置业年轻家庭、追求功能完备的单身精英或注重总价控制的投资客的优质选择。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在沙井核心区，以三房两卫的全能配置和绿城品质，满足了小家庭一步到位的安居梦想，是新规下小户型设计的优秀代表。
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
                    <h4>阔尺通透改善平层 · 四房两卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北通透</span>
                        <span class="tag">独立玄关</span>
                        <span class="tag">主卧套房</span>
                        <span class="tag">IMAX光幕</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>阔绰尺度：</strong>客厅开间达约5.1米，连接约14.09㎡超大阳台，部分户型拥有约14.7米南向IMAX光幕，空间感与视野震撼。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>细节品质：</strong>设有独立玄关，增强归家仪式感。主卧套房设计，部分户型配备独立衣帽间，提升居住品质。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-wind"></i>
                        <div><strong>通透格局：</strong>采用竖厅南北通透格局，通风采光俱佳。客餐厅分离化设计，功能分区明确。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>追求宽阔空间体验、高品质社区环境和私密性的高端改善家庭。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型代表了项目的品质标杆，不仅满足多房间功能性需求，更通过大面宽、大阳台、套房等设计，带来强烈的空间感和奢阔的改善居住体验，是片区内的稀缺改善产品。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】新规设计前瞻性</h4>
                <p>作为国标新规住宅，项目在设计上充分体现了未来居住趋势：1) 高标准建造：严格按照新国标设计，对层高（不低于3米）、隔音、日照、电梯配置等均有更高要求；2) 高使用率：通过优化设计，实现了远超传统户型的得房率；3) 全龄友好：必须配建无障碍和适老化设施，满足长期居住需求；4) 智慧社区：要求移动通信信号全覆盖，为智能家居预留空间。</p>
            </div>
            
            <h2>三、项目核心优势与配套</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-gem"></i>
                    </div>
                    <div>
                        <h4>双强品牌 & 新规标杆</h4>
                        <p>绿城（产品设计）与越秀（开发运营）双品牌保障，且为宝安首个国标新规楼盘，兼具品牌力与产品创新力。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>稀缺低密住区</h4>
                        <p>容积率仅3.1，限高80米，在沙井乃至整个深圳西部都属稀缺的低密度、高舒适度社区。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>成熟地铁口物业</h4>
                        <p>距离地铁11号线沙井站约300-550米，真正步行可达。11号线为快线，通勤前海、福田、机场高效便捷。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>优质教育资源</h4>
                        <p>自带9班幼儿园。根据2025年划分，属深圳外国语学校宝安分校（集团）共享学区，毗邻万丰小学。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div>
                        <h4>完善商业配套</h4>
                        <p>自带约1500㎡商业。北邻约12万㎡百佳华佳漾汇（含沃尔玛），2公里内可达万丰海岸城、天虹等大型商圈。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <div>
                        <h4>匠心园林与归家仪式</h4>
                        <p>园林以“锦瑟栖谷”为灵感，打造下沉水院、立体庭院。近51米恢弘门头、酒店式大堂，营造宝格丽酒店般的归家仪式感。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目首推楼栋（1栋和6栋）的户型分布、朝向及周边环境分析，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约88-89㎡ 三房两卫（锦翠/锦云）</h4>
                <p><strong>分布楼栋：</strong>主要位于6栋01/02/03/04户型。</p>
                <p><strong>朝向特点：</strong>西南或东南朝向，均为南向，采光佳。西南向午后阳光充足，东南向上午阳光柔和。</p>
                <p><strong>建议楼层：</strong>鉴于周边有已建成小区（如鸿荣源禧园），建议选择中高楼层（10层及以上），以获得更开阔的视野和更优的采光。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约104-107㎡ 四房两卫（锦月/锦和/锦瑟）</h4>
                <p><strong>格局与朝向：</strong>104㎡（西南）、106㎡（东南）为常规竖厅；107㎡为“双龙抱珠”格局，东北朝向（主要看花园）。</p>
                <p><strong>选择要点：</strong>注重卧室私密安静可选107㎡“双龙抱珠”格局；偏好南向阳光和外部视野可根据喜好选104㎡（西南）或106㎡（东南）。</p>
                <p><strong>楼层建议：</strong>中高楼层（12层以上）可最大化景观和采光价值。东北向户型中低楼层也可享受良好花园景观。</p>
                
                <h4 style="margin-top: 25px; color: #1a5c36;">约127-130㎡ 四房两卫（玉澜/玉堂）</h4>
                <p><strong>朝向特点：</strong>127㎡为西南或东南朝向，130㎡为东北朝向。</p>
                <p><strong>空间优势：</strong>拥有约5.1米大开间客厅和超大阳台，空间尺度感强。</p>
                <p><strong>建议楼层：</strong>强烈建议选择中高楼层（建议15层以上）。高楼层能充分展现大面宽客厅的空间优势，获得更佳通风、采光及视野（南向看城市景观，东北向俯瞰园林），最大化该户型的改善价值。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>以上建议基于首推楼栋的公开资料及周边环境分析，仅供参考。最终选择需结合实地看房感受、样板间体验、个人对日照/视野/噪音的具体偏好、价格及房源实际情况等因素综合决策。项目参观需提前预约。学区划分、交付标准等请以政府及开发商最新官方文件为准。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】决策核心关注点</h4>
                <p>1. <strong>新规价值认知：</strong>理解“新规住宅”在得房率、建造标准、居住舒适度上的实质提升，这是本项目的核心价值之一。<br>
                2. <strong>户型功能与面积权衡：</strong>思考在约107㎡做四房和约127㎡做四房之间的差异，明确自身对房间尺度与功能密度的偏好。<br>
                3. <strong>朝向景观的个性化取舍：</strong>权衡南向（阳光/外部视野）与东北向（花园景观/私密格局）的不同价值，结合家庭生活习惯选择。<br>
                4. <strong>长期居住与资产属性：</strong>绿城与越秀的品牌背书、低密稀缺性、成熟地段配套，共同构成了项目的保值增值基础。<br>
                5. <strong>全龄化设计考量：</strong>关注新规标配的无障碍与适老化设施，评估其对家庭长远居住的便利性。</p>
            </div>
        </div>
    </div>
`
            }
        },
        "福永": {
            "鸿桥世纪名园": {
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
            <h1>鸿桥世纪名园项目详解</h1>
            <p class="subtitle">福永（福海） · 地铁口高性价比盘 · 前海与会展湾双辐射区</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>鸿桥世纪名园（备案名：鸿德园二期）位于宝安区福海街道桥头社区，是深圳西部一个定位清晰的高性价比地铁口住宅项目。项目已于2024年11月开盘，主打建面约89-188㎡的三至五房，并以“备案价9折”的显著优惠吸引市场，折后总价约价格信息已删除。其核心价值在于以亲民的价格，提供了便捷的地铁通勤（近11号线桥头站）和位于“前海扩区”及“会展海洋城”双规划辐射区的区位潜力。</p>

            <div class="special-note">
                <h4>🎯 核心定位：高性价比的“双区”辐射地铁盘</h4>
                <p>项目的吸引力主要建立在价格、交通和区位规划的三角组合上：</p>
                                <table>
                    <tr><th>价格优势显著</th><td>项目推出9折优惠，折后均价约4.价格信息已删除，显著低于福永板块及周边新房均价，对刚需和刚改客户极具吸引力。</td></tr>
                    <tr><th>地铁通勤便利</th><td>距离地铁11号线桥头站约600-800米，属步行可达范围，3站达机场，5站到宝中，7站至前海，通勤效率高。</td></tr>
                    <tr><th>享受规划红利</th><td>项目所在福海街道部分区域被纳入前海合作区扩区范围，同时西邻深圳国际会展中心，可享受双重战略规划带来的长期发展预期。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>突出的价格竞争力</th><td>折后单价3.56万/㎡起，是入驻深圳西部地铁房的门槛之选。</td></tr>
                    <tr><th>地铁出行便捷</th><td>紧邻已运营的11号线，无需等待规划落地，即买即享轨道交通便利。</td></tr>
                    <tr><th>户型覆盖全面</th><td>产品线从紧凑三房到奢阔五房，能满足从首置到多代同堂改善的不同家庭需求。</td></tr>
                    <tr><th>片区产业支撑强</th><td>福海街道是宝安工业重镇，规上工业产值超1500亿元，有扎实的产业和人口基础。</td></tr>
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
                    <td><strong>开发商/物业</strong></td>
                    <td>深圳市桥头房地产开发有限公司 / 深圳市鸿运物业管理有限公司</td>
                </tr>
                <tr>
                    <td><strong>宗地号/产权</strong></td>
                    <td>A208-0987 / 70年（从2020年起算）</td>
                </tr>
                <tr>
                    <td><strong>占地面积</strong></td>
                    <td>约2.4万㎡（23987.29㎡）</td>
                </tr>
                <tr>
                    <td><strong>总建筑面积</strong></td>
                    <td>约17.89万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率</strong></td>
                    <td>约4.8-4.93</td>
                </tr>
                <tr>
                    <td><strong>绿化率</strong></td>
                    <td>30%</td>
                </tr>
                <tr>
                    <td><strong>楼栋户数</strong></td>
                    <td>6栋23-24层住宅，总785户，首推392套</td>
                </tr>
                <tr>
                    <td><strong>车位比</strong></td>
                    <td>约1:1.77（共1389个），较为充足</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>4.5元/㎡·月</td>
                </tr>
                <tr>
                    <td><strong>装修交付</strong></td>
                    <td>简装（带简单装修）交付，预计2026年7月</td>
                </tr>
                <tr>
                    <td><strong>当前价格（折后）</strong></td>
                    <td><strong>折后均价约4.价格信息已删除，单价区间3.56-4.价格信息已删除</strong><br>
                        • 89-91㎡三房两卫：折后总价约323-价格信息已删除<br>
                        • 112-125㎡四房两卫：折后总价约498-价格信息已删除<br>
                        • 188㎡五房三卫：折后总价约874-价格信息已删除
                    </td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安福海街道桥头社区，该片区是深圳西部重要的产城融合区域。福海街道已被纳入前海合作区扩区范围（6.4平方公里），同时西侧紧邻深圳国际会展中心及会展新城，东侧衔接海洋新城规划。片区定位为“深港先进制造业合作区”核心，拥有坚实的制造业基础（2023年规上工业总产值1525亿元），产业升级和人口导入潜力较大。 </p>

            <h3>🚇 交通配套</h3>
                            <table>
                    <tr><th>地铁</th><td>距离<strong>11号线桥头站约600-800米</strong>，步行可达。通过11号线可快速抵达机场、宝安中心、前海等地。此外，未来还可通过换乘接驳深大城际、规划中的深江高铁等。</td></tr>
                    <tr><th>自驾</th><td>靠近宝安大道、广深高速、沿江高速等快速路网，驾车前往南山、福田等核心区相对便利。</td></tr>
                    <tr><th>机场与枢纽</th><td>距离深圳宝安国际机场仅3站地铁；建设中的深圳机场东综合交通枢纽未来将进一步提升片区交通能级。</td></tr>
                </table>

            <h3>🏫 教育资源</h3>
                            <table>
                    <tr><th>项目配套</th><td>自带一所9班制幼儿园。</td></tr>
                    <tr><th>学区划分（参考）</th><td>根据现有信息，小学可能划分至桥头学校小学部、塘尾万里学校等；初中可能包括桥头学校初中部等。片区内还有已启用的立新湖九年一贯制学校。需注意，具体学区以当年教育局划分为准。</td></tr>
                </table>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>自带商业</th><td>规划有约3.6万㎡的社区商业Mall，计划引入影院、餐饮等业态。</td></tr>
                    <tr><th>周边商圈</th><td>周边已有华强城商业（约10万㎡）、京基百纳广场（约18万㎡）、同泰时代广场等。规划中的鸿荣源奥特莱斯（约50万㎡）、山姆会员店等将进一步提升商业能级。</td></tr>
                    <tr><th>生态休闲</th><td>靠近立新湖公园（约120万㎡）、凤凰山森林公园，生态资源尚可。</td></tr>
                    <tr><th>医疗资源</th><td>规划中的福海人民医院（三甲标准）距离项目约250米；现有福永人民医院、深圳市中西医结合医院等在车程范围内。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>价格优势突出，性价比高</th><td>在当前市场下，提供9折优惠，折后单价和总价在宝安地铁盘中具有较强的竞争力。</td></tr>
                    <tr><th>地铁通勤便利且确定</th><td>依赖已成熟运营的11号线，通勤价值立竿见影，无需漫长等待。</td></tr>
                    <tr><th>车位配比充足</th><td>约1:1.77的车位比远超许多新建小区，能较好满足业主停车需求。</td></tr>
                    <tr><th>片区产业基础与规划前景</th><td>坐享前海扩区和会展新城双重规划概念，且所在街道有扎实的实体经济支撑。</td></tr>
                    <tr><th>户型选择多样</th><td>产品线覆盖刚需到改善，为不同预算和需求的家庭提供了选择空间。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>开发商品牌力相对较弱</th><td>开发商为本土企业，市场口碑和品牌号召力与头部央企、国企相比有差距。</td></tr>
                    <tr><th>片区现状城市界面一般</th><td>福海桥头片区目前仍存在较多旧工业区和城中村，城市面貌、生活环境品质的提升需要时间。</td></tr>
                    <tr><th>教育资源非顶尖</th><td>对口的学校在宝安区不属于第一梯队名校，对于有强烈名校需求的家庭吸引力有限。</td></tr>
                    <tr><th>容积率偏高</th><td>超过4.8的容积率意味着社区居住密度较大，可能影响居住的静谧性和舒适度。</td></tr>
                    <tr><th>依赖区域规划全面落地</th><td>项目的长期价值提升与“前海扩区”、“会展海洋城”的规划兑现深度绑定，存在不确定性。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>预算有限的首次置业者</th><td>总价预算在300-450万之间，希望在深圳西部购买正规地铁口住宅的刚需客户。</td></tr>
                    <tr><th>在宝中、前海、南山通勤的上班族</th><td>工作地点在地铁11号线沿线，对通勤时间和成本敏感，追求性价比的购房者。</td></tr>
                    <tr><th>看好福海片区长期发展的投资者</th><td>认可该区域“前海+会展”的规划前景，愿意伴随区域成长进行中长期资产配置。</td></tr>
                    <tr><th>需要多房间功能的大家庭</th><td>对房间数有要求，能以相对可控的总价获得四房甚至五房的功能性空间。</td></tr>
                    <tr><th>对开发商品牌要求不高的务实买家</th><td>更看重价格、地段和户型等硬指标，而非开发商品牌溢价。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>鸿桥世纪名园是一个定位精准的“高性价比地铁盘”。它没有追求顶级配置或概念，而是用实在的价格、确定的地铁和看得见的区域规划，来满足预算有限但渴望在深圳西部安家的核心需求。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>是否选择该项目，关键在于您是否能接受其价格优势背后所对应的短板（如开发商品牌、当前城市界面、非顶尖学区）。如果您是价格敏感型买家，首要诉求是以最低门槛“上车”深圳西部地铁房，并且工作通勤与11号线高度契合，那么它是一个值得重点考虑的务实选择。建议务必实地考察周边环境，并确认学区划分等细节。</p>
            </div>
            <p>与同属福永/福海板块的其他项目相比，鸿桥世纪名园走的是亲民实用路线，与一些主打高端改善或大型综合体的楼盘形成了差异化竞争。对于首付预算在百万左右、渴望三房的刚需家庭而言，它提供了一个明确的选项。</p>
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
            <h1>鸿桥世纪名园</h1>
            <div class="subtitle">深圳沙井（福海）· 低密纯商品住宅社区</div>
        </header>
        
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供深圳沙井（福海）鸿桥世纪名园项目的全面户型分析。项目位于宝安福海街道，是由深圳市桥头房地产开发有限公司打造的纯商品房社区。报告将结合项目低密、高拓展、全系南北通透的设计特点，深入解析各户型亮点与价值，助您决策参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>鸿桥世纪名园（备案名：鸿德园二期）已于2024年11月23日正式开盘，预计2026年7月交付带简单装修的房源。项目主打89-188㎡的3-5房，户型设计强调实用性、高拓展率与南北通透，是片区稀缺的低密住区。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积段</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>主流三房</strong></td>
                        <td>约89-91㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，三开间朝南，LDKB一体化，客厅开间约3.5米</td>
                    </tr>
                    <tr>
                        <td><strong>改善四房</strong></td>
                        <td>约112-125㎡</td>
                        <td>四房两厅两卫</td>
                        <td>竖厅/奢阔横厅设计，主卧套房带飘窗，四开间朝南</td>
                    </tr>
                    <tr>
                        <td><strong>终极改善五房</strong></td>
                        <td>约188㎡</td>
                        <td>五房两厅三卫</td>
                        <td>南北双阳台，双主卧套房，客厅开间约4.3米，7.7米长景观阳台</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">约2.8（住宅部分）</div>
                    <div class="parameter-desc">区域稀缺低密住区，楼间距开阔，采光通风俱佳</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">南/东南/东北</div>
                    <div class="parameter-desc">三房多朝南/东南，四房可选东南/东北，采光充足</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 得房率（不含赠送）</div>
                    <div class="parameter-value">约76.9% (89㎡)</div>
                    <div class="parameter-desc">LDKB一体化布局，高拓展率，空间利用率高</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 建筑类型</div>
                    <div class="parameter-value">小高层住宅</div>
                    <div class="parameter-desc">23-24层，2梯4户/2梯5户设计</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89-91㎡</div>
                        <div class="unit-name">主流三房 · 全能上车之选</div>
                    </div>
                    <div class="unit-body">
                        <h4>高性价比功能三房 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">三开间朝南</span>
                            <span class="tag">高得房率</span>
                            <span class="tag">低总价门槛</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间效率：</strong>得房率约76.9%，采用LDKB（客、餐、厨、阳台）一体化设计，极大提升空间利用率与互动性。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局特点：</strong>经典竖厅格局，客厅开间约3.5米，主卧面宽超3米，实现三开间朝南，采光面充足。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>细节配置：</strong>L型厨房带生活阳台，公卫三段式分离，部分户型南北通透，实用性强。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>首次置业年轻家庭、二孩家庭或追求低总价入住纯商品房的客户，折后总价约323万起。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型以宝安区罕见的“3字头”单价，提供了功能完整的三房两卫配置，是入住该低密纯商品住宅社区的最高性价比选择。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约112-125㎡</div>
                        <div class="unit-name">改善四房 · 三代同堂优选</div>
                    </div>
                    <div class="unit-body">
                        <h4>尺度与功能兼备 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">主卧套房</span>
                            <span class="tag">奢阔横厅</span>
                            <span class="tag">四开间设计</span>
                            <span class="tag">双阳台</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>尺度升级：</strong>客厅开间达约3.9米（112㎡）或更阔，主卧面宽约3.2-3.7米，搭配双阳台，空间感显著提升。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>格局特点：</strong>部分户型提供奢阔横厅设计，直面中庭园林；四开间朝南，配置双阳台，带独立玄关，功能分区清晰。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>功能定位：</strong>完美解决二胎家庭、三代同堂或需要独立书房/影音室的改善型需求，折后总价约498万起。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>设计巧思：</strong>全系户型南北通透，大面宽采光，通风效率提升30%，主卧套房预留衣帽间空间。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>在约125㎡面积段内，通过高拓展设计实现舒适四房，并享有低密社区的园林景观，是片区改善客群的标杆产品。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>终极改善户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约188㎡</div>
                    <div class="unit-name">终极改善 · 家族式居住典范</div>
                </div>
                <div class="unit-body">
                    <h4>资源集大成者 · 五房三卫</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">南北双阳台</span>
                        <span class="tag">双主卧套房</span>
                            <span class="tag">7.7米长阳台</span>
                        <span class="tag">多套房配置</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>极致尺度：</strong>南北通透双阳台设计，客厅开间约4.3米，连接次卧的景观阳台总长达约7.7米，视野与空间感震撼。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>配置顶级：</strong>双主卧套房设计，满足两代主人的居住尊严；五房三卫配置，适合多人口家族居住。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观与舒适：</strong>正南向采光极佳，直面社区核心园林或远景，享受低密社区带来的静谧与开阔。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-user-tie"></i>
                        <div><strong>功能定位：</strong>追求终极改善的多人口家庭、家族式居住或需要顶级社交空间的客户，折后总价约874万起。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>附加价值：</strong>此户型是项目乃至片区的产品力标杆，不仅提供了豪宅尺度的空间，更通过双主卧、长阳台等设计，定义了新一代家族居住的典范。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】项目核心价值与区位潜力</h4>
                <p>1. <strong>低密纯粹住区：</strong>项目由6栋23-24层小高层围合而成，容积率仅约2.8，绿化率30%，规划有围合式花园和架空园林，居住纯粹性高。
                2. <strong>交通枢纽能级：</strong>距离地铁11号线桥头站约600米，3站达宝安机场，5站至宝安中心，7站到前海，深大城际（在建）将进一步扩展大湾区1小时生活圈。
                3. <strong>区域发展红利：</strong>项目位于福海街道，属于前海扩区范围，西邻深圳国际会展中心，东接海洋新城，享受双千亿级战略平台辐射。
                4. <strong>全能社区配套：</strong>自带约2万㎡社区商业（规划中），配备1399个停车位（车位比约1:1.78），物业为鸿运物业（物业费4.5元/㎡·月）。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>全系南北通透 & 高拓展率</h4>
                        <p>户型均强调南北通透，大面宽采光，部分配备双阳台，通风效率提升30%。高拓展设计实现“同等面积多一房”。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>低密社区 & 板正格局</h4>
                        <p>容积率仅约2.8，楼间距开阔。户型格局板正，实用率高，突破区域同质化，提供更舒适的居住尺度。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>人性化细节设计</h4>
                        <p>主卧套房预留衣帽间，L型厨房带生活阳台，公卫三段式分离，部分户型配置双阳台，细节体现人性化考量。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>高性价比 & 价格优势</h4>
                        <p>折后均价约4.25万/㎡，单价区间3.56-4.91万/㎡，对比周边同类型新房性价比突出，三房总价门槛约323万起。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h4>纯商品房属性 & 小高层设计</h4>
                        <p>项目为纯商品房，居住人群纯粹。采用23-24层小高层设计，梯户比多为2梯4户/2梯5户，居住舒适度高。</p>
                    </div>
                </div>
                
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>立体园林 & 全能配套</h4>
                        <p>打造“一轴三境”立体园林，涵盖全龄段活动空间。自带商业、近邻地铁、学校，满足一站式生活需求。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目低密、小高层、户型朝向多样化的特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #8B4513;">约89-91㎡ 三房 · 主流上车户型</h4>
                <p><strong>朝向选择：</strong>优先选择<strong>东南朝向</strong>，兼顾采光与通风，且未来转手流动性更好。西南朝向也可考虑，但需注意西晒。</p>
                <p><strong>楼层建议：</strong>建议选择<strong>中高楼层（8层及以上）</strong>，以获得更开阔的视野和更优的采光，规避低楼层可能存在的遮挡。</p>
                <p><strong>注意事项：</strong>不同朝向价差明显，正南向单价最高，东北/西北朝向单价最低，可根据预算权衡。</p>
                
                <h4 style="margin-top: 25px; color: #8B4513;">约112-125㎡ 四房 · 改善品质户型</h4>
                <p><strong>格局选择：</strong>注重景观和社交空间感，可选<strong>横厅设计</strong>户型；注重传统格局和私密性，可选经典竖厅户型。</p>
                <p><strong>朝向与景观：</strong>东南或东北朝向，中高楼层（10层以上）更能享受社区围合式园林景观，视野更佳。</p>
                <p><strong>楼层建议：</strong>总高23-24层，<strong>中区（12-18层）</strong>通常是性价比和视野的平衡点，既能规避低区干扰，又不过分溢价。</p>
                
                <h4 style="margin-top: 25px; color: #8B4513;">约188㎡ 五房 · 终极改善户型</h4>
                <p><strong>建议楼层：</strong>作为顶级产品，<strong>高楼层（18层及以上）</strong>是必选项，以最大化其南北双阳台、7.7米长景观阳台的视野价值。</p>
                <p><strong>重点关注：</strong>优先选择<strong>正南向</strong>或<strong>南北通透</strong>的单元，确保主客厅和双主卧均有最佳采光与景观面。</p>
                <p><strong>位置考量：</strong>关注楼栋在社区中的位置，优选朝向中心园林、远离主干道的楼王单元，保障静谧性。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>项目为低密纯商品房社区，容积率低，楼间距较大，整体居住舒适度高。以上建议仅供参考，最终选择需结合实地看房感受、个人对日照/景观的偏好、具体楼层价差及房源实际情况等因素综合考虑。建议务必现场感受不同楼层、朝向的采光与视野差异。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】客群选择逻辑与决策维度</h4>
                <p>1. <strong>首置刚需客群：</strong>紧盯89㎡东南向三房，以最低总价入住，兼顾自住舒适度与未来资产流动性。<br>
                2. <strong>改善家庭客群：</strong>在112-125㎡四房中，根据家庭结构（是否需要横厅、独立书房）和景观偏好选择朝向与楼层。<br>
                3. <strong>终极改善/多代居客群：</strong>188㎡五房是片区稀缺产品，选择时应将“楼层与朝向”置于价格之前，确保产品价值完全体现。<br>
                4. <strong>价值投资者：</strong>关注项目所在福海街道的前海扩区、会展新城规划红利，中小户型更易租赁与转手。</p>
            </div>
        </div>
    </div>
`
            },
            "鸿荣源珈誉玖玺": {
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
            <h1>鸿荣源珈誉玖玺项目详解</h1>
            <p class="subtitle">沙井塘尾 · 地铁口超级大盘收官之作 · 鸿荣源“玖系”顶配</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>鸿荣源珈誉玖玺是深圳西部超大型综合体项目——总建面约248万平方米的“珈誉府” 的第三期住宅，也是整个大盘的收官之作。项目定位为鸿荣源“玖系”高端产品线，以其“下楼即地铁、下楼即商业、下楼即高配”的全能配套著称，自面市以来长期占据深圳新房销售榜首。目前主推楼王单位，户型为84㎡三房及137㎡四房，准现房状态，预计2026年12月精装交付，但建设进度已大概率可提前。</p>

            <div class="special-note">
                <h4>🏙️ 核心定位：全能型地铁口大盘收官作</h4>
                <p>项目是鸿荣源在沙井打造的标杆性产品，其核心价值在于几乎没有短板的综合实力：</p>
                                <table>
                    <tr><th>顶级配套组合</th><td>集齐了“地铁11号线+深外宝安学校（规划）+约50万㎡湾区壹方商业”这三大顶配资源，且均为步行可达的近距离。</td></tr>
                    <tr><th>纯粹高端社区</th><td>项目共计2479户住宅，全部为商品房，无任何保障房、回迁房等混杂，圈层纯粹。</td></tr>
                    <tr><th>超级大盘红利</th><td>作为248万㎡大城的组成部分，能享受超大体量带来的内部商业、园林和社区配套，具备很强的独立性和便利性。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>地铁零距离</th><td>紧邻地铁11号线（快线）塘尾站，约300米，6站达宝中，7站达前海，通勤效率极高。</td></tr>
                    <tr><th>商业能级强大</th><td>自带约50万㎡“湾区壹方”商业（规划中），体量为前海壹方城的1.5倍，由原班团队运营。</td></tr>
                    <tr><th>名校教育预期</th><td>项目旁规划有深圳外国语学校宝安学校（集团）南校区（两所九年一贯制学校），教育资源预期优质。</td></tr>
                    <tr><th>市场高度认可</th><td>项目是深圳近年来的“现象级”红盘，已连续两年（2023、2024）夺得深圳住宅销售套数、面积“双冠王”。</td></tr>
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
                    <td><strong>开发商/物业</strong></td>
                    <td>鸿荣源集团 / 深圳市鸿荣源物业服务有限公司</td>
                </tr>
                <tr>
                    <td><strong>所属大城</strong></td>
                    <td>鸿荣源珈誉府（总建面约248万㎡综合体）三期住宅</td>
                </tr>
                <tr>
                    <td><strong>占地面积/建筑面积</strong></td>
                    <td>约4.79万㎡ / 约40.53万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率/绿化率</strong></td>
                    <td>5.42 / 40%</td>
                </tr>
                <tr>
                    <td><strong>楼栋与户数</strong></td>
                    <td>10栋31-48层住宅，总2479户（全为商品房）</td>
                </tr>
                <tr>
                    <td><strong>梯户比/车位比</strong></td>
                    <td>2梯2户/3梯5户等 / 约1:1.127（2795个）</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年（2022.5-2092.5）</td>
                </tr>
                <tr>
                    <td><strong>物业费</strong></td>
                    <td>5.9元/㎡·月</td>
                </tr>
                <tr>
                    <td><strong>装修与交付</strong></td>
                    <td>精装交付，计划2026年12月（可能提前），准现房状态</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安区沙井街道塘尾片区，宝安大道与凤塘大道交汇处。该片区是沙井的核心发展区域，通过鸿荣源珈誉府的连片开发，未来将形成住宅、商业、办公、酒店、教育于一体的城市新中心。</p>

            <h3>🚇 交通配套（核心优势）</h3>
                            <table>
                    <tr><th>地铁</th><td><strong>距离11号线塘尾站C出口仅约300米</strong>。11号线为快线，<strong>4站到机场，6站到宝中，7站到前海湾，8站到南山</strong>，通勤优势巨大。</td></tr>
                    <tr><th>自驾</th><td>门口即宝安大道、凤塘大道等主干道，可快速接驳广深沿江高速、京港澳高速。</td></tr>
                </table>

            <h3>🏫 教育资源（核心优势）</h3>
                            <table>
                    <tr><th>规划名校</th><td>项目旁规划有<strong>深圳外国语学校宝安学校（集团）南校区</strong>，包含一所63班和一所27班的九年一贯制学校，预计2025年建成。该校本部（深圳外国语学校宝安学校）过往录取积分较高，教学质量备受认可。</td></tr>
                    <tr><th>现有学区（参考）</th><td>在规划学校投入使用前，项目小学学区可能涵盖桥头学校、塘尾万里学校等；初中学区包括立新湖学校、福永中学等。具体需以交付当年教育局划分为准。</td></tr>
                </table>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>旗舰商业</th><td>最大亮点。项目自带<strong>约50万㎡“湾区壹方”购物中心</strong>（规划），定位为潮奢奥莱，由打造前海壹方城的原班团队运营。</td></tr>
                    <tr><th>成熟商圈环绕</th><td>周边已开业<strong>万丰海岸城（约18万㎡，含山姆会员店）</strong>、<strong>华强广场（约10万㎡，“熊出没”主题）</strong>，商业氛围浓厚。</td></tr>
                    <tr><th>生态休闲</th><td>靠近万丰湖湿地公园、立新湖公园，社区内部也有约2.9万㎡的艺术园林。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>“全能型”配套无短板</th><td>地铁、商业、教育（规划）三大核心资源均为顶配且距离极近，生活便利度和未来价值支撑非常强劲。</td></tr>
                    <tr><th>强大的品牌与产品力</th><td>鸿荣源“玖系”高端产品线，品质有保障。社区纯粹（全商品房），园林、车位比等硬件标准较高。</td></tr>
                    <tr><th>准现房与热销背书</th><td>项目主体已封顶，实景可见，交付风险低。持续的热销纪录（深圳双冠王）反映了市场的广泛认可。</td></tr>
                    <tr><th>超级大盘的独立生态</th><td>身处248万㎡大城内，能享受内部完整、高能的配套设施，形成自给自足的生活圈。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>容积率偏高，密度大</th><td>5.42的容积率导致社区居住密度较高，部分楼栋为3梯5户或7户，可能影响居住的静谧感。</td></tr>
                    <tr><th>规划配套的兑现时间</th><td>最核心的“湾区壹方”商业和深外南校区仍在建设中，其最终呈现效果和开业/开学时间存在等待期。</td></tr>
                    <tr><th>价格处于片区高位</th><td>作为沙井的标杆项目，其单价和总价均处于区域第一梯队，上车门槛相对较高。</td></tr>
                    <tr><th>周边城市界面待提升</th><td>项目位于沙井塘尾，周边仍存在部分旧工业区和城中村，整体城市面貌的升级需要时间。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>追求综合配套完美的改善家庭</th><td>对地铁、商业、教育有全面高要求，希望一步到位解决所有生活需求的家庭。</td></tr>
                    <tr><th>在西部通勤的精英人士</th><td>工作地点在宝中、前海、南山、福田，极度依赖地铁11号线快速通勤的上班族。</td></tr>
                    <tr><th>看重开发商品牌和社区纯粹度的买家</th><td>信赖鸿荣源品质，且希望生活在纯商品房社区，避免保障房混杂的购房者。</td></tr>
                    <tr><th>看好沙井核心区长期发展的投资者</th><td>认可珈誉府超级大盘的造城能力和区域中心潜力，进行中长期资产配置。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>鸿荣源珈誉玖玺是沙井片区乃至深圳西部一个 “六边形战士”式的标杆项目。它几乎没有任何明显的配套短板，将 “地铁、商业、教育” 这三大刚需改善要素都做到了片区的顶级水平，并辅以鸿荣源的高端产品力和纯粹社区氛围。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>该项目适合预算充足、追求生活便利性与综合品质最大化的购房者。如果您认同“用较高单价购买顶级确定性配套”的逻辑，且工作生活圈与11号线高度契合，那么珈誉玖玺无疑是沙井的最优选择之一。需要注意的是，其为高容积率、高密度的大社区，且部分核心配套需等待落地。建议优先选择南向、中高楼层、景观视野好的户型。</p>
            </div>
            <p>与同区域的拾悦城楠园（同为地铁口大盘，但商业能级和品牌定位略低）和珑湾上城花园（主打成熟区现房和性价比，但非地铁口）相比，鸿荣源珈誉玖玺凭借其无死角的顶配资源组合和强大的品牌号召力，站在了沙井新房市场的价值顶端。</p>
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
            <h1>鸿荣源·珈誉玖玺</h1>
            <div class="subtitle">深圳宝安沙井 · 248万㎡珈誉大城收官之作</div>
        </header>
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供鸿荣源·珈誉玖玺项目的全面户型分析。作为鸿荣源珈誉府三期的收官住宅地块，珈誉玖玺集“地铁、名校、商业”三大核心配套于一体，并延续了鸿荣源“玖”系产品的高端基因。报告将深入解析其高得房率设计、特色户型及作为准现房的稀缺价值，为您的决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>鸿荣源·珈誉玖玺是总建面约248万㎡珈誉大城的收官住宅部分，总建筑面积约40.53万㎡，容积率5.42。项目规划10栋31-48层的高层住宅，总计2479户纯商品房，车位比约1:1.127，采用围合式布局打造约2.9万㎡艺术园林。当前主力在售户型覆盖从77㎡功能性三房到137㎡改善四房，满足不同家庭阶段需求。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与定位</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与梯户比</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>高性价比三房</strong></td>
                        <td>约77-84㎡</td>
                        <td>三房两厅两卫</td>
                        <td>经典竖厅，三开间朝南，LDKB一体化，得房率（含赠送）约88%；部分楼栋2梯2户/3梯5户/3梯7户</td>
                    </tr>
                    <tr>
                        <td><strong>舒适/横厅三房</strong></td>
                        <td>约89-94㎡</td>
                        <td>三房两厅两卫</td>
                        <td>部分为稀缺横厅设计，采光面更优，空间感更强；高实用率</td>
                    </tr>
                    <tr>
                        <td><strong>功能性四房</strong></td>
                        <td>约110㎡</td>
                        <td>四房两厅两卫</td>
                        <td>在紧凑面积内实现四房功能，性价比突出的改善选择</td>
                    </tr>
                    <tr>
                        <td><strong>奢阔改善四房</strong></td>
                        <td>约137㎡</td>
                        <td>四房两厅两卫</td>
                        <td>大横厅双阳台，南北通透，客餐厅开间约6.6米，得房率（含赠送）高达约94%；部分楼栋（如6栋）为纯板楼2梯2户设计</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 项目容积率</div>
                    <div class="parameter-value">5.42</div>
                    <div class="parameter-desc">超高层围合式社区，打造约2.9万㎡中心园林</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 主力朝向</div>
                    <div class="parameter-value">南向/东南/西南</div>
                    <div class="parameter-desc">主力户型实现三开间或四开间朝南，采光充足</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 得房率（含赠送）</div>
                    <div class="parameter-value">约88%-94%</div>
                    <div class="parameter-desc">高赠送设计，84㎡实得约74㎡，137㎡实得近129㎡</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 产品系列</div>
                    <div class="parameter-value">鸿荣源“玖”系</div>
                    <div class="parameter-desc">延续宝中壹方玖誉高端基因，定位片区标杆</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约84㎡</div>
                        <div class="unit-name">高性价比全能三房</div>
                    </div>
                    <div class="unit-body">
                        <h4>刚需上车与品质兼顾 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">三开间朝南</span>
                            <span class="tag">LDKB一体化</span>
                            <span class="tag">高得房率</span>
                            <span class="tag">准现房</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间效率：</strong>套内约65.1㎡，加上赠送面积实得约74.27㎡，得房率（含赠送）约88.19%，在有限面积内高效实现三房两卫全明格局。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局设计：</strong>经典竖厅，动静分区。客厅开间约3.2米，三开间朝南。采用LDKB一体化设计（客、餐、厨、阳台联动），增强空间感与家庭互动。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>细节亮点：</strong>U型厨房，公卫三段式干湿分离，S墙设计预留冰箱位。卧室面积分配合理，主卧约13.27㎡。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-users"></i>
                            <div><strong>功能定位：</strong>首次置业客户、追求高性价比的刚需家庭。折后总价约378-405万，是入住鸿荣源“玖”系综合体门槛较低的选择。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型以“3字头”总价，提供了品牌开发商、地铁口、准现房、高得房率的稀缺组合。作为项目的“入门级藏品”，实现了功能与预算的完美平衡。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约137㎡</div>
                        <div class="unit-name">奢阔景观四房（次楼王）</div>
                    </div>
                    <div class="unit-body">
                        <h4>一步到位的改善标杆 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">大横厅双阳台</span>
                            <span class="tag">南北通透</span>
                            <span class="tag">超高得房率</span>
                            <span class="tag">园景/山景</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>奢阔尺度：</strong>套内约105.61㎡，加上赠送实得约128.8㎡，得房率（含赠送）高达约94.28%。客餐厅开间约6.6米，连接同宽观景大阳台，空间震撼。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>格局特点：</strong>大横厅+双阳台设计，南北通透，通风采光极佳。四房布局方正，主卧宽敞约19.35㎡，其余卧室面积均在9㎡左右，实用性高。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>景观与定位：</strong>作为“次楼王”单位，部分高楼层可享园林、山景乃至远眺海景。适合二孩家庭、三代同堂或追求一步到位改善的客户，折后总价约711-748万。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-lightbulb"></i>
                            <div><strong>产品稀缺性：</strong>在整个珈誉大城内属于“绝版四房”产品，本次加推数量有限。部分楼王栋（如6栋）采用纯板楼、2梯2户、3.15米层高等豪宅配置。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型代表了珈誉玖玺作为“收官之作”的产品力巅峰。它不仅拥有极致的空间效率和舒适度，更占据了社区最优的景观资源，是资产属性与居住价值兼备的稀缺选择。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>其他在售户型亮点解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约77-110㎡</div>
                    <div class="unit-name">多样化的功能之选</div>
                </div>
                <div class="unit-body">
                    <h4>覆盖全生命周期的产品矩阵</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">门槛极致</span>
                        <span class="tag">横厅创新</span>
                        <span class="tag">功能四房</span>
                        <span class="tag">灵活选择</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>约77㎡三房：</strong>被称为“绝版户型”，以约340-370万的总价，实现了片区极具竞争力的上车门槛，是预算严格客户的焦点。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>约89-94㎡三房：</strong>部分户型提供稀缺的横厅设计，空间感与采光面优于传统竖厅，是追求现代居住体验的升级之选。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>约110㎡四房：</strong>在紧凑面积内实现了四房功能，折后总价约608-627万，为需要更多房间但预算相对有限的改善家庭提供了完美解决方案。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>综合点评：</strong>珈誉玖玺通过77-137㎡的面积梯度，精准覆盖了从“极致刚需”到“品质改善”的全客群需求。这种丰富的产品线，确保了不同预算和家庭结构的客户都能在此找到合适的选择，也增强了社区的未来活力。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】“珈誉玖玺”的三大核心价值支点</h4>
                <p>1. <strong>“玖”系品牌溢价与品质保障：</strong>作为鸿荣源高端“玖”系产品，传承了宝中壹方玖誉的基因。历史数据显示，“玖”系二手房常享有高于周边楼盘10%-20%的溢价，其精工品质和品牌效应是重要的价值基石。<br>
                2. <strong>“准现房”的确定性与即享红利：</strong>项目主体已封顶，外立面、门窗及约2.9万㎡园林已基本呈现，合同约定2026年12月交付带简装（含中央空调），大概率提前。这极大降低了购房者的等待风险和品质疑虑，可即享未来成熟的社区环境。<br>
                3. <strong>“绝版地段”内的稀缺收官资产：</strong>作为整个248万㎡珈誉大城最后开发的纯住宅地块，珈誉玖玺坐享前期一、二期已兑现和在建的顶级配套（地铁、学校、商业），是片区发展红利的集大成者，其收官属性决定了未来供应的稀缺性。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>超高实用率与拓展空间</h4>
                        <p>通过优化设计和飘窗、阳台等赠送，实现高得房率（含赠送84㎡约88%，137㎡约94%），“小面积办大事”，实用性强。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-window-maximize"></i>
                    </div>
                    <div>
                        <h4>王牌地铁口与快线资源</h4>
                        <p>无缝连接地铁11号线塘尾站（约300米），6站宝安中心，7站前海，9站后海，高效连接深圳西部核心就业区。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <div>
                        <h4>顶级学府与商业配套</h4>
                        <p>属深圳外国语宝安学校（集团）南校区招生范围；自带约50万㎡“湾区壹方”超级商业（规划），下楼即享顶配生活。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>围合式园林与纯粹住区</h4>
                        <p>约2.9万㎡艺术园林，最大楼间距约161米，保障采光与视野。2479户均为商品房，无保障房掺杂，居住氛围纯粹。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div>
                        <h4>鸿荣源品牌与精工品质</h4>
                        <p>33年深耕深圳，拥有多个标杆项目。珈誉府系列连续两年蝉联深圳销售冠军，市场认可度高，品质与保值性有保障。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>准现房销售与交付保障</h4>
                        <p>实景可见，建设工程进度快，极大减少了期房的不确定性，让购房更安心，入住周期更可预期。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目高容积率、围合式园林及户型特点，为您提供以下参考建议：</p>
                
                <h4 style="margin-top: 25px; color: #4B0082;">约77-89㎡ 功能性三房</h4>
                <p><strong>朝向选择：</strong>优先选择<strong>南向或东南向</strong>户型，确保主要居住空间采光充足。西南向需综合考虑价格与对西晒的接受度。</p>
                <p><strong>楼层建议：</strong>建议选择<strong>中高楼层（15层及以上）</strong>。因项目容积率高，中高楼层能有效规避遮挡，获得更好的通风、视野及园林景观，居住体验提升显著。</p>
                <p><strong>价格权衡：</strong>低楼层单价优势明显，但需实地感受视野和采光影响。对于77㎡等极致户型，若预算有限，中低楼层可作为高性价比备选。</p>
                
                <h4 style="margin-top: 25px; color: #4B0082;">约110-137㎡ 改善型四房</h4>
                <p><strong>景观优先原则：</strong>改善型客户应更关注景观价值。尤其是137㎡户型，务必选择<strong>中高区楼层（20层以上）</strong>，方能享受其横厅大阳台设计的视野优势，俯瞰园林或远眺山景。</p>
                <p><strong>楼栋与位置：</strong>关注楼栋在围合式布局中的位置。优选朝向中心园林、视野开阔的楼栋。例如，10栋一单元作为“次楼王”，位置较优。</p>
                <p><strong>配置差异：</strong>留意不同楼栋的梯户比和配置差异。如6栋为纯板楼、2梯2户、3.15米层高，产品力更强，但价格也相应更高。</p>
                
                <h4 style="margin-top: 25px; color: #4B0082;">通用选择策略</h4>
                <p><strong>“买高不买低，买景不买街”：</strong>在高层住宅中尤为适用。高楼层在采光、通风、隐私、视野和抗噪音方面通常有不可替代的优势。</p>
                <p><strong>平衡预算与需求：</strong>明确家庭核心需求（如房间数、朝向、景观），在预算范围内优先满足核心项。可利用项目多样的户型梯度，寻找最优解。</p>
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>鸿荣源·珈誉玖玺作为大型综合体的收官之作，其价值不仅在于户型本身，更在于已经和即将兑现的顶级城市配套。选择时，应将其“品牌+地铁+学校+商业+准现房”的综合价值纳入考量。以上建议仅供参考，最终决策请务必结合实地看房感受、个人偏好及财务状况。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】不同客群的决策聚焦点</h4>
                <p>1. <strong>首次置业/投资客群：</strong>聚焦77-84㎡三房，关注总价门槛和租金回报潜力。选择中楼层、南向户型，在控制总价的同时保证产品流动性。<br>
                2. <strong>首改/成长型家庭：</strong>在89-110㎡三至四房中权衡。若看重空间感和采光，可选横厅三房；若急需更多房间，110㎡功能性四房性价比突出。楼层建议中高区。<br>
                3. <strong>品质改善/一步到位客群：</strong>直奔137㎡四房。将<strong>楼层、朝向、景观</strong>作为首要筛选条件，优先保证产品核心价值的完全体现，其次再考虑价格细节。<br>
                4. <strong>所有客群：</strong>务必进行实地看房，感受不同楼层、朝向的实景视野、采光及噪音情况，这是线上资料无法替代的关键一步。</p>
            </div>
        </div>
    </div>
`
            },
            "万丰海岸城檀府": {
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
            <h1>万丰海岸城·檀府项目详解</h1>
            <p class="subtitle">沙井塘尾 · 新规户型改善标杆 · 深外学区 · 地铁口百万综合体</p>
        </header>

        <section class="project-overview">
            <h2>项目概览</h2>
            <p>万丰海岸城·檀府是总建面超500万㎡的超级城市综合体——万丰海岸城的全新B区首发住宅作品。项目已于2025年10月25日开盘，首推北地块3栋，主打建面约89-169㎡的新规三至六房。其最突出的亮点在于通过深圳建筑设计新规，实现了最高104%的惊人使用率（以93㎡四房为代表），并以“深外名校+地铁口+山姆会员店”的顶配资源组合，旨在成为深圳西部改善型住宅的价值新标杆。</p>

            <div class="special-note">
                <h4>🎯 核心定位：新规下的全能型改善标杆</h4>
                <p>作为海岸城系产品的全面进阶之作，檀府在多个维度定义了片区新标准：</p>
                                <table>
                    <tr><th>“空间魔术”新规户型</th><td>响应新规，通过大量飘窗、阳台半赠送等方式，将93㎡户型做到实用四房，使用面积高达96.72㎡，空间效率颠覆传统。</td></tr>
                    <tr><th>配套“王炸”组合</th><td>集齐了已开业的深圳外国语学校宝安学校、约300米外的地铁11号线马安山站，以及已开业的海岸城购物中心和宝安首家山姆会员店，配套成熟度与能级极高。</td></tr>
                    <tr><th>品质全面对标豪宅</th><td>外立面采用铝板、石材与玻璃幕墙，园林由国际大师户田芳树操刀，公区用料标准向南山、福田的10万+豪宅看齐。</td></tr>
                </table>
            </div>

            <div class="highlight">
                <h3>核心亮点</h3>
                                <table>
                    <tr><th>超高实用率</th><td>93㎡做四房，使用率高达104%，套内面积相当于传统100㎡户型。</td></tr>
                    <tr><th>顶级教育资源</th><td>位于深圳外国语学校宝安学校学区范围内，中考成绩（八大录取率超16.6%，普高率超80%）位居宝安区前列，可实现“目送式上学”。</td></tr>
                    <tr><th>地铁与商业零距离</th><td>距离11号线马安山站约300米；家门口即是已开业的约20万㎡海岸城购物中心及山姆会员店。</td></tr>
                    <tr><th>首推纯商品地块</th><td>本次首开的北地块为纯商品房，无保障房混杂，共1100户。</td></tr>
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
                    <td><strong>开发商/物业</strong></td>
                    <td>海岸集团与万丰股份合作开发</td>
                </tr>
                <tr>
                    <td><strong>所属大城</strong></td>
                    <td>万丰海岸城（总建面超500万㎡综合体）B区首发住宅</td>
                </tr>
                <tr>
                    <td><strong>占地面积（整体）</strong></td>
                    <td>约2平方公里（整体更新单元）</td>
                </tr>
                <tr>
                    <td><strong>首推地块（北地块）</strong></td>
                    <td>建设用地约1.89万㎡，总建面约17.93万㎡，计容建面12.85万㎡</td>
                </tr>
                <tr>
                    <td><strong>容积率（北地块）</strong></td>
                    <td>6.78</td>
                </tr>
                <tr>
                    <td><strong>楼栋与户数（整体）</strong></td>
                    <td>共7栋超高层住宅+1所幼儿园。总2496户（商品房1392户，保障房1104户）。<br><strong>首推北地块：</strong>4栋45-47层住宅，纯商品房1100户。</td>
                </tr>
                <tr>
                    <td><strong>梯户比（首推楼栋）</strong></td>
                    <td>3栋1单元：3梯7户；3栋2单元（楼王）：3梯4户</td>
                </tr>
                <tr>
                    <td><strong>车位比（北地块）</strong></td>
                    <td>约1:1.19（1309个车位）</td>
                </tr>
                <tr>
                    <td><strong>产权年限</strong></td>
                    <td>70年</td>
                </tr>
                <tr>
                    <td><strong>装修与交付</strong></td>
                    <td>简装（带基础装修）交付，计划2028年12月</td>
                </tr>
            </table>
        </section>

        <section class="facilities">
            <h2>项目配套</h2>
            <h3>📍 地理位置与规划</h3>
            <p>项目位于宝安区新桥街道（沙井）大朗山片区，南环路与中心路交汇处。属于深圳“西部城市中心”及“黄金内湾”规划的核心区域，是沙井从传统工业区向现代化城市中心转型的标杆项目。作为540万㎡产城融合大城的一部分，未来将享有产业、商业、居住一体化的成熟环境。</p>

            <h3>🚇 交通配套（核心优势）</h3>
                            <table>
                    <tr><th>地铁</th><td><strong>距离11号线马安山站约300米</strong>，步行约4-5分钟。11号线为快线，5站达机场，7站达宝安中心，快速连接前海、南山。</td></tr>
                    <tr><th>自驾</th><td>紧邻宝安大道、凤塘大道、广深公路等城市主干道，可快速接入高速路网。实测早高峰地铁发车间隔仅3分钟，通勤效率高。</td></tr>
                </table>

            <h3>🏫 教育资源（核心优势）</h3>
                            <table>
                    <tr><th>名校学区</th><td>项目紧邻<strong>深圳外国语学校宝安学校</strong>（九年一贯制），属于其学区范围。该校由海岸集团代建，2023年首届中考均分即位列宝安区前三，2024年八大录取率超16.6%，普高率超80%，是宝安北的头部公立教育资源。</td></tr>
                    <tr><th>目送式上学</th><td>学校与项目近在咫尺，真正实现从家到学校的“目送式”便捷教育。</td></tr>
                    <tr><th>项目配套</th><td>自带一所12班制幼儿园。</td></tr>
                </table>

            <h3>🛍️ 商业与生活配套</h3>
                            <table>
                    <tr><th>旗舰商业</th><td>最大亮点之一。项目自带<strong>约20万㎡的万丰海岸城购物中心</strong>已开业，引入超300家品牌。更关键的是，<strong>宝安首家山姆会员店</strong>已正式开业，与项目通过空中廊桥相连，下楼即达。</td></tr>
                    <tr><th>生态公园</th><td>东侧紧邻<strong>大钟山公园</strong>，周边还有已开放的海岸公园、万丰公园，实现“三园环抱”。</td></tr>
                    <tr><th>品质园林</th><td>社区内部打造约2万㎡中央园林，由国际大师设计，配备风雨连廊、全龄活动区、环形跑道等。</td></tr>
                </table>
        </section>

        <section class="analysis">
            <h2>优劣分析</h2>
            <div class="advantages">
                <h3>✅ 项目优势</h3>
                                <table>
                    <tr><th>无短板的“王牌”配套</th><td>“深外学区+地铁口+山姆&海岸城”的组合，每一项都是顶配且已兑现，生活便利度和教育资源确定性极高。</td></tr>
                    <tr><th>颠覆性的户型产品力</th><td>新规下最高104%的使用率是核心竞争力，以中小面积实现多功能空间，性价比和实用性突出。</td></tr>
                    <tr><th>肉眼可见的高品质</th><td>外立面、园林、公区均采用高端用材和设计，品质感在宝安北片区处于第一梯队，有望历久弥新。</td></tr>
                    <tr><th>大盘综合体的稳定预期</th><td>作为超500万㎡成熟大城的新作，享受现成的醇熟氛围，且由口碑开发商操盘，过往期次销售火爆。</td></tr>
                    <tr><th>首期纯商品房的纯粹性</th><td>本次推出的北地块无保障房，社区圈层相对统一。</td></tr>
                </table>
            </div>
            <div class="disadvantages">
                <h3>⚠️ 项目不足与风险</h3>
                                <table>
                    <tr><th>容积率偏高，密度大</th><td>北地块容积率达6.78，整体规划近2500户，是典型的高密度超高层社区，对追求低密静谧感的买家是个考验。</td></tr>
                    <tr><th>交付周期较长</th><td>计划2028年底交付，等待时间超过三年，存在一定的期房风险和时间成本。</td></tr>
                    <tr><th>价格处于片区高位</th><td>折后均价约5.价格信息已删除，高于沙井片区新房均价（约4.7万/㎡），上车门槛较高。</td></tr>
                    <tr><th>周边城市界面仍在更新</th><td>虽然自身配套顶级，但沙井片区整体城市面貌的提升仍需时间。</td></tr>
                    <tr><th>潜在学位压力</th><td>尽管学区优质，但面对此类近2500户的大型社区，未来深外宝安学校的学位竞争激烈程度和积分政策存在不确定性。</td></tr>
                </table>
            </div>
        </section>

        <section class="target-audience">
            <h2>适合人群</h2>
            <div class="highlight">
                                <table>
                    <tr><th>追求顶级学区的家庭</th><td>将子女教育置于首位，且希望学校就在家门口的改善型或一步到位型家庭。</td></tr>
                    <tr><th>重视生活便利的效率主义者</th><td>依赖地铁通勤（尤其11号线沿线），且日常生活高度依赖大型商超（如偏好山姆），希望所有需求步行解决的购房者。</td></tr>
                    <tr><th>认可“空间效率”价值的买家</th><td>青睐新规户型，愿意为更高的实用率和功能性支付溢价，特别是在预算有限但又需要多房间功能的家庭。</td></tr>
                    <tr><th>信赖大盘品质的改善客群</th><td>看好海岸城系品牌的造城能力和品质兑现度，从区域旧盘升级或外地迁入的客群。</td></tr>
                </table>
            </div>
        </section>

        <section class="summary">
            <h2>项目总结</h2>
            <p>万丰海岸城·檀府是沙井片区一个配套能级拉满、产品力突出的改善型标杆项目。它几乎集合了当前市场最受追捧的所有要素：顶尖名校、地铁口、旗舰商业和颠覆性的高使用率户型。</p>
            <div class="warning">
                <p><strong>购买建议：</strong>该项目非常适合将教育资源和生活便利性作为核心决策因素的改善家庭。如果您的工作生活圈在深圳西部，且预算能够覆盖其单价，那么檀府提供的综合价值包确实难以替代。选择时需重点考虑：1）能否接受其高容积率下的居住密度；2）能否接受长达3年的交付等待期；3）是否首选其“王炸”户型（如93㎡四房）以最大化产品力优势。建议将总价折合到实际使用面积单价进行横向比较，更能凸显其性价比。</p>
            </div>
            <p>与同区域近期分析的鸿荣源珈誉府系列相比，两者在“地铁+商业+名校”的大配套逻辑上相似，但产品路径不同：珈誉府是超级大盘的持续开发，户型覆盖广；而檀府则凭借“新规户型”这一利器，在空间效率和产品创新上做出了更极致的表达，更适合对户型功能有极致要求的家庭。</p>
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
            <h1>万丰海岸城·檀府</h1>
            <div class="subtitle">深圳宝安沙井 · 540万㎡超级都会综合体B区首发新规之作</div>
        </header>
        <div class="content">
            <div class="section-intro">
                本报告旨在为您提供万丰海岸城·檀府项目的全面户型分析。作为总建面约540万㎡海岸城大城的B区首发住宅及首个新规设计项目，檀府承载着定义区域高端改善的使命。项目以“地铁口、深外学区、新规高得房率”三大王牌为核心。报告将深入解析其颠覆性的空间设计、核心价值及作为片区标杆的选择逻辑，为您的决策提供专业参考。
            </div>
            
            <h2>一、全系户型核心参数总览</h2>
            <p>万丰海岸城·檀府位于宝安区新桥街道，是海岸城大城继A区（玺园、锦园、瑧园、瀚府）完整落成后的B区开篇之作。项目由海岸集团与万丰股份合作开发，占地约3.64万㎡，总建面约36.24万㎡，规划7栋45-53层超高层住宅及1所幼儿园。首推北地块（纯商品房）的3栋1单元及2单元“楼王”，共443套房源，全部采用2024建筑新规设计，备案均价约5.46万/㎡，带装修交付。</p>
            
            <table>
                <thead>
                    <tr>
                        <th>户型面积与命名</th>
                        <th>建筑面积</th>
                        <th>户型格局</th>
                        <th>核心设计亮点与稀缺性</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>刚需改善三房</strong></td>
                        <td>约89-91㎡</td>
                        <td>三房两厅两卫</td>
                        <td>竖厅设计，东南/西南向，约9米采光面，全屋6个飘窗，使用率约93%。</td>
                    </tr>
                    <tr>
                        <td><strong>“王炸”极致四房</strong></td>
                        <td>约93㎡</td>
                        <td>四房两厅两卫</td>
                        <td>四开间朝南，约11.7米采光面，使用率高达约104%，套内堪比100㎡，仅约40套。</td>
                    </tr>
                    <tr>
                        <td><strong>舒适/横厅四房</strong></td>
                        <td>约103-125㎡</td>
                        <td>四房两厅两卫</td>
                        <td>103㎡为竖厅，121-125㎡为约6.5米宽横厅，部分主卧带270°L型飘窗。</td>
                    </tr>
                    <tr>
                        <td><strong>功能五房</strong></td>
                        <td>约139㎡</td>
                        <td>五房两厅两卫</td>
                        <td>全南向布局，赠送面积约14.69㎡，功能性强。</td>
                    </tr>
                    <tr>
                        <td><strong>楼王瞰景六房</strong></td>
                        <td>约169㎡</td>
                        <td>六房两厅两卫</td>
                        <td>东南向超16米采光面，7米宽阳台，主卧进深4.5米，全屋11个飘窗，仅约40席。</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="parameter-grid">
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-home"></i> 首推地块容积率</div>
                    <div class="parameter-value">6.78</div>
                    <div class="parameter-desc">北地块为纯商品房，无保障房掺杂</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-sun"></i> 折后均价/门槛</div>
                    <div class="parameter-value">约5.14万/㎡ 起</div>
                    <div class="parameter-desc">综合折扣约94折，89㎡折后总价约407万起</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-expand-alt"></i> 最高使用率</div>
                    <div class="parameter-value">约104%</div>
                    <div class="parameter-desc">新规设计典范，93㎡实得堪比传统100㎡</div>
                </div>
                <div class="parameter-card">
                    <div class="parameter-title"><i class="fas fa-layer-group"></i> 梯户比（楼王）</div>
                    <div class="parameter-value">3梯4户</div>
                    <div class="parameter-desc">3栋2单元为楼王单位，层高3.05米，配置高</div>
                </div>
            </div>
            
            <h2>二、主力户型深度解析</h2>
            
            <div class="unit-type">
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约93㎡</div>
                        <div class="unit-name">“王炸”极致四房 · 如梦</div>
                    </div>
                    <div class="unit-body">
                        <h4>颠覆性空间效率 · 四房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">使用率约104%</span>
                            <span class="tag">四开间朝南</span>
                            <span class="tag">南北通透</span>
                            <span class="tag">极度稀缺</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-magic"></i>
                            <div><strong>空间革命：</strong>这是新规下的设计奇迹。套内使用面积约96.72㎡，相当于传统100㎡户型。通过玄关餐厅一体化压缩过道，实现四房两卫全功能，赠送面积约8.2㎡。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-chess-board"></i>
                            <div><strong>格局与采光：</strong>四开间朝南，采光面约11.7米，南北通透。主卧配备双飘窗（进深1.2米），可拓展为独立衣帽间。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-sun"></i>
                            <div><strong>价值与定位：</strong>兼具顶级学区与一步到位改善属性。折后总价约450-490万，折算实际使用面积单价仅约4.3万/㎡，性价比极具穿透力。货量仅约40套，预计开盘即罄。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>附加价值：</strong>此户型是项目乃至深圳新房市场的“现象级产品”。它彻底打破了面积与功能的传统关系，让首置或首改客户能以三房的总价获得四房的尺度和功能，是资产属性与居住价值最大化的稀缺选择。
                        </div>
                    </div>
                </div>
                
                <div class="unit-card">
                    <div class="unit-header">
                        <div class="unit-size">约89-91㎡</div>
                        <div class="unit-name">刚需改善三房 · 入门首选</div>
                    </div>
                    <div class="unit-body">
                        <h4>全能品质三房 · 三房两卫</h4>
                        <div style="margin: 15px 0;">
                            <span class="tag">竖厅方正</span>
                            <span class="tag">双阳台</span>
                            <span class="tag">主卧套房</span>
                            <span class="tag">低总价门槛</span>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-ruler-combined"></i>
                            <div><strong>实用设计：</strong>经典竖厅，动静分区。东南或西南朝向，采光面约9米。配备双阳台，通风效率提升。玄关预留家政柜，U型厨房，全屋6个飘窗，主卧带L型转角飘窗。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-door-open"></i>
                            <div><strong>功能定位：</strong>完美适配追求品质与学区的年轻首置家庭。折后总价约407-443万，是入住海岸城大城、享受深外学区的最低门槛之一。</div>
                        </div>
                        
                        <div class="unit-feature">
                            <i class="fas fa-city"></i>
                            <div><strong>分布与选择：</strong>占首推房源约25%，多集中于中低楼层。虽不如93㎡户型惊艳，但以合理的总价提供了品牌、地段、学区的均衡之选。</div>
                        </div>
                        
                        <div class="highlight-box">
                            <strong>选房建议：</strong>作为入门首选，核心价值在于总价和功能的平衡。在梯户比3梯7户的单元中，建议尽量选择中高楼层以获得更好视野。若预算允许，可优先考虑东南朝向。
                        </div>
                    </div>
                </div>
            </div>
            
            <h3>高端改善及楼王户型解析</h3>
            
            <div class="unit-card" style="max-width: 800px; margin: 0 auto;">
                <div class="unit-header">
                    <div class="unit-size">约121-169㎡</div>
                    <div class="unit-name">横厅四房/楼王六房 · 云照</div>
                </div>
                <div class="unit-body">
                    <h4>尺度与景观的巅峰 · 四房/六房</h4>
                    <div style="margin: 15px 0;">
                        <span class="tag">奢阔横厅</span>
                        <span class="tag">270°环幕视野</span>
                        <span class="tag">楼王藏品</span>
                        <span class="tag">公园景观</span>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-expand-arrows-alt"></i>
                        <div><strong>约121-125㎡横厅四房：</strong>约6.5米开间横厅连接宽景阳台。主卧配备L型飘窗，享270°环幕视野。部分户型主卫采用双台盆设计。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-star"></i>
                        <div><strong>约169㎡楼王六房：</strong>东南朝向，采光面超16米，连接约7米宽阳台。主卧进深4.5米，带L型转角飘窗。全屋精设11处飘窗，收纳与景观兼顾。主卫双飘窗设计，可升级双台盆+浴缸。</div>
                    </div>
                    
                    <div class="unit-feature">
                        <i class="fas fa-mountain"></i>
                        <div><strong>景观与定位：</strong>高楼层可无遮挡俯瞰大钟山公园全景。169㎡户型仅40席，定位片区终极改善标杆，折后总价约930-1195万。</div>
                    </div>
                    
                    <div class="highlight-box">
                        <strong>综合价值：</strong>此户型段代表了海岸城产品的顶端水准，面向多代同堂的家族改善或资产配置客群。其价值不仅在于室内尺度，更在于独占性的公园景观、3梯4户的楼王配置以及“藏品级”的稀缺属性，是追求终极居住体验的终极选择。
                    </div>
                </div>
            </div>
            
            <div class="complement">
                <h4>【补充分析】海岸城大城IP的全面兑现与檀府的特殊站位</h4>
                <p>1. <strong>成熟大城IP，配套所见即所得：</strong>不同于全新片区，万丰海岸城A区已醇熟（超4000户入住）。约20万㎡海岸城购物中心已开业，宝安首家山姆会员店（约2万㎡）已开业，深圳外国语宝安学校本部已于2021年开学。檀府买家购入的是“已兑现的当下”，而非规划蓝图。<br>
                2. <strong>首个新规作品，产品代际领先：</strong>檀府是海岸城系列中首个采用2024建筑新规设计的项目。其约104%的使用率、加大的飘窗和阳台尺度，相比A区旧规产品形成了“代际差”，在产品力上具备碾压性优势，未来在二手房市场也更容易获得溢价。<br>
                3. <strong“双名校”学区加持，含金量十足：</strong>项目毗邻已开学的深外宝安学校本部，北校区也在建设中。该校是宝安区引入的首个深圳“四大名校”，规模为深圳最大九年一贯制学校之一，其教育溢价是项目核心价值支柱。</p>
            </div>
            
            <h2>三、项目户型核心优势</h2>
            
            <div class="advantages-list">
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-compass"></i>
                    </div>
                    <div>
                        <h4>新规设计典范，超高实用率</h4>
                        <p>全系新规户型，最高使用率约104%。约93㎡实现四房两卫，套内堪比100㎡，空间效率颠覆市场认知。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-subway"></i>
                    </div>
                    <div>
                        <h4>双地铁口+醇熟商业综合体</h4>
                        <p>距11号线马安山站约300米。自身体验约20万㎡海岸城购物中心及已开业的山姆会员店，下楼即享顶配商业，生活便利度极高。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h4>深圳外国语宝安学校双校区</h4>
                        <p>属深外宝安学校（本部+北校区）学区范围。该校为宝安引入的首个四大名校，教育确定性及附加值极强。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <div>
                        <h4>纯商品地块与豪宅级公区品质</h4>
                        <p>首推北地块为纯商品房，无保障房。外立面采用铝板、石材、玻璃幕墙；设计六重归家礼序、禅意园林，品质标准向市中心豪宅看齐。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <div>
                        <h4>540万㎡超级综合体收官红利</h4>
                        <p>作为已成熟大城的新篇章，享受前期全部配套红利。海岸城品牌历次开盘“日光”战绩，奠定了强大的市场口碑与资产保值预期。</p>
                    </div>
                </div>
                <div class="advantage-item">
                    <div class="advantage-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4>准现楼状态，交付风险低</h4>
                        <p>项目工程进展顺利，为准现楼销售，极大降低了购房者的等待风险与不确定性，所见即所得。</p>
                    </div>
                </div>
            </div>
            
            <h2>四、户型选择与楼层建议</h2>
            
            <div class="floor-suggestion">
                <h4>户型与楼层选择专业建议</h4>
                <p>基于项目新规高使用率、梯户比差异、景观资源分布及稀缺性，为您提供以下决策框架：</p>
                
                <h4 style="margin-top: 25px; color: #8B4513;">核心原则：根据总价预算与核心需求锁定户型</h4>
                <p><strong>第一步：明确首要目标。</strong> 是“总价优先上车”、“追求极致空间效率”、“改善一步到位”还是“占有稀缺景观资源”？这将直接决定户型选择。</p>
                
                <h4 style="margin-top: 25px; color: #8B4513;">分户型决策策略</h4>
                <p><strong>约89-91㎡三房（总价优先型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>选择逻辑：</strong>用最低总价获取海岸城品牌、地铁、学区三大核心价值。在总价范围内，选择尽量高的楼层以优化居住体验。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>注意：</strong>3梯7户设计，中低楼层需综合评估等梯时间。</p>
                
                <p><strong>约93㎡四房（价值首选型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>选择逻辑：</strong>此户型是“必争之地”。货量仅40套，稀缺性极高。若能入围，应优先考虑户型本身，对楼层不宜过分挑剔。当然，中高楼层视野更佳。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>核心：</strong>抢到即是核心。</p>
                
                <p><strong>约121-139㎡四房/五房（品质改善型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>楼层与景观：</strong>横厅户型价值需高楼层视野支撑。建议选择<strong>20层及以上</strong>，以享受开阔视野。优先选择东南向看公园景观的单位。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>梯户比：</strong>留意部分楼王单位（3栋2单元）为3梯4户，居住舒适度更高。</p>
                
                <p><strong>约169㎡六房（终极藏品型）：</strong><br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>铁律：</strong>必须选择<strong>高楼层（30层及以上）</strong>。该户型的价值一半在于室内尺度，另一半在于无遮挡的公园全景视野。低楼层将严重折损其价值。<br>
                &nbsp;&nbsp;&nbsp;&nbsp;• <strong>位置：</strong>优先选择3栋2单元东南端头的楼王单位。</p>
                
            </div>
            
            <div class="floor-tip">
                <p><strong>特别提示：</strong>万丰海岸城·檀府是一个优点极其突出、几乎没有短板的“六边形战士”项目。其价值是“顶级配套+颠覆性产品力+强大品牌IP”的总和。选择时，应在自身预算内，优先匹配最能解决家庭核心痛点（如房间数、学区、通勤）的户型。对于像93㎡四房这样的稀缺产品，决策需要更果断。以上建议仅供参考，最终决策请务必结合实地看房感受及销售情况。</p>
            </div>
            
            <div class="complement">
                <h4>【补充建议】不同客群的终极决策聚焦点</h4>
                <p>1. <strong>有深外学区需求的家庭：</strong>在所有条件中，将“确保在深外宝安学校学区范围内”作为不可动摇的底线。檀府是目前该学区内最新、产品力最强的选择。<br>
                2. <strong>追求资产保值与流动性的投资者：</strong>重点关注约93㎡四房和约89㎡三房。前者因极致产品力具备最强增值潜力；后者因总价门槛低，未来在二手房市场流动性最好。<br>
                3. <strong>多孩/多代同堂的改善家庭：</strong>在121㎡及以上户型中，将“房间数量与功能完整性”置于首位，并优先选择梯户比更低、朝向景观更优的楼王单元。<br>
                4. <strong>所有客群：</strong>务必进行预约后实地看房，亲自感受不同户型、不同楼层的空间尺度、采光及视野差异，这是线上分析无法替代的关键环节。</p>
            </div>
        </div>
    </div>
`
            }
        }
    }
};
Object.assign(db, db_shajing);
