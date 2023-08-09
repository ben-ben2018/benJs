// import "./index.css"
import html from "./news.htm"
import { Ref, init, reRender } from "../../../ben/ben"
import "./news.css"
let v = {
    newsItem: [
        [{
            monthTime: '3/24',
            yearTime: '2023',
            title: '对话力码科技：保险科技应用有待深入，价值落地更重要',
            word: '在力码科技看来，保险科技行至今日，解决问题是关键。以力码科技为例，我们面对的客户往往处于不同的发展阶段，面对客户的各类现实需求，在标准化产品的基础上，提供更有针对性的解决方案，非常考验公司的交付能力。',
            src: 'https://mp.weixin.qq.com/s/scKsB5qR53VEt2M2fTPVtw',
        }, {
            monthTime: '3/07',
            yearTime: '2023',
            title: '国内首本《数据要素安全流通白皮书》正式发布',
            word: '2月25日，《数据要素安全流通白皮书》（以下简称《白皮书》）在第三届数字经济科技大会上正式发布。《白皮书》由国家工业信息安全发展研究中心指导，华东江苏大数据交易中心、贵州赛昇工业信息研究院、深圳国家金融科技测评中心等共同发起并主编，力码科技等各领域代表性企业参与...',
            src: 'https://mp.weixin.qq.com/s/RjDDHo_A-VQscbURyjW_Wg',
        }, {
            monthTime: '2/27',
            yearTime: '2023',
            title: '当金融业遇上ChatGPT：它会威胁到那些人的饭碗？',
            word: '近日，ChatGPT火爆出圈，正在引起金融业的广泛关注。对此，力码科技产品负责人王泽接受华夏时报采访，畅谈ChatGPT之于保险行业的影响。',
            src: 'https://mp.weixin.qq.com/s/PzKBMg2i8rNgakmUyMMw_g',
        }, {
            monthTime: '1/10',
            yearTime: '2023',
            title: '数字经济时代如何破局？保险信托大咖共探财富管理趋势',
            word: '1月6日，由华夏时报社主办的华夏机构投资者年会在京召开，同时揭晓第十六届金蝉奖。本次年会主题为“新变革 新趋势 新未来”，来自监管、学界、上市公司和金融机构等领域的重磅嘉宾，齐聚一堂，为全球及中国经济发展建言献策、贡献力量。',
            src: 'https://mp.weixin.qq.com/s/ZQcp0Bc6tD8zD9kPfuNfqQ',
        }, {
            monthTime: '12/06',
            yearTime: '2022',
            title: '个人养老金市场万亿规模开闸 力码科技湛勇：保险机构具备天然优势',
            word: ' 近期，为贯彻落实《国务院办公厅关于推动个人养老金发展的意见》（国办发〔2022〕7号），加强个人养老金业务管理，规范个人养老金运作流程，人力资源社会保障部、财政部、国家税务总局、银保监会、证监会等联合发布了《个人养老金实施办法》，正式开启了个人养老金市场的万亿...',
            src: 'https://mp.weixin.qq.com/s/Tu33Cj-k5Gn8d1l5iObliA',
        }, {
            monthTime: '12/01',
            yearTime: '2022',
            title: '力码科技入选信通院EDCC低代码/无代码推进中心成员单位',
            word: '12月1日，中国信息通信研究院、中国通信标准化协会主办的第三期“低代码/无代码应用深度探索系列沙龙”成功举办，会上公布了“企业数字化发展共建共享平台（EDCC）”新成员名单，致力于“让保险经营更简单”的北京力码科技有限公司凭借其科技创新以及多年来深耕保险业数字化的实践...',
            src: 'https://mp.weixin.qq.com/s/bUSzm70EwcZ9983m_Z4UqQ',
        }, {
            monthTime: '11/21',
            yearTime: '2022',
            title: '保险业数字化转型的助力者与护航者，力码科技入选36氪#年度数字化创新服务商#',
            word: '近日，知名科创媒体36氪发布了#2022年度数字化创新服务商#，36家各自领域的杰出数字化服务商成功入榜。专注于以持续不断的科技创新为保险经营机构数字化转型提供助力和护航，致力于让保险经营更简单的北京力码科技有限公司获得组委会青睐，成功入榜。',
            src: 'https://mp.weixin.qq.com/s/LTNEWebaTgB6xRY8qZTGnQ',
        }], [{
            monthTime: '11/18',
            yearTime: '2022',
            title: '力码科技湛勇：打击退保黑产需多方协同，大数据预警可防患未然',
            word: '“退保黑产具有极大的社会危害性，遏制、打击退保黑产需要保险监管机构、公检法、保险公司以及中介机构等多方共同努力。”湛勇表示，“作为保险行业的参与者和建设者，力码科技会积极投入到本次集中打击整治“代理退保”黑产违法犯罪专项行动中来，并将打击退保黑产等范围行为常态化、长期化...',
            src: 'https://mp.weixin.qq.com/s/kxLLfRDpegZzCIjHclbVjA',
        }, {
            monthTime: '10/01',
            yearTime: '2022',
            title: '力码科技入选「钛媒体」创新场景50',
            word: '近日，国内知名财经科技平台钛媒体推出「创新场景50」系列经典实例，遴选全行业优先应用案例，用通俗易懂的语言针对数字化创新实例进行解读汇总，建立可检索的企业数字化应用案例库。凭借在保险数字化领域的突出成绩和长期耕耘，北京力码科技有限公司成功入围。',
            src: 'https://mp.weixin.qq.com/s/cJtHiD8c9mHewsbaGPgH4Q',
        }, {
            monthTime: '9/22',
            yearTime: '2022',
            title: '力码科技荣膺“2022中国信科潜在独角兽企业”',
            word: '独角兽企业作为世界级创业生态的标志，其数量多少在很大程度上也折射出一个国家创新能力的强弱及其创业生态的完整性。',
            src: 'https://mp.weixin.qq.com/s/DuMQrUSwE8fvvYZ90VoYgg',
        }, {
            monthTime: '8/23',
            yearTime: '2022',
            title: '马经纬：布局保险新基建，打造“业务中台+数据中台”',
            word: '马经纬表示，力码科技的成长贯穿了保险业数字化的演变历程。随着行业从高速增长进入高质量发展阶段，依托长期以来的数据积累和对整个保险行业及其上下游价值链、底层技术架构有着深厚的认知与了解，力码科技积极布局保险新基建，打造“业务中台+数据中台”，业务中台实现了保险业务全...',
            src: 'https://mp.weixin.qq.com/s/Uy9jHPXsKqwx3DofrsWlWw',
        }, {
            monthTime: '8/10',
            yearTime: '2022',
            title: '科技赋能互联网保险发展，力码科技戴建军：技术是保险变革的“催化剂”',
            word: '8月9日，「共生 平等-2022分子保险科技节」在乌镇正式拉开帷幕，致力于让保险经营更简单的北京力码科技有限公司受邀出席本次活动，与行业学者大咖们”天南海北，一壶浊酒，重拾人间烟火“。',
            src: 'https://mp.weixin.qq.com/s/uFeiGk1Dodbql_HckqJNvQ',
        }, {
            monthTime: '8/01',
            yearTime: '2022',
            title: '力码科技李超：打造与时俱进的客户服务旅程',
            word: '“这是由于保险科技行业开始调整发展模式，逐步由追求快速增长调整为追求业务质量和盈利能力的提升，行业进入更加理性、健康的发展阶段，行业竞争格局日趋稳定，先发优势、行业积累逐渐显现，后入者进入壁垒加深。”力码科技联合创始人李超告诉《金融时报》记者。',
            src: 'https://mp.weixin.qq.com/s/LTCMIrs2lHcmLlyvFjtblA',
        }, {
            monthTime: '7/18',
            yearTime: '2022',
            title: '力码科技马经纬荣膺“年度保险中介杰出领导力奖”',
            word: '近日，以“释放增长信心，构建中介市场新体系”为主题的中国保险中介发展高峰论坛”在北京举办，近500名行业领导、专家学者、中介机构及险企高层齐聚一堂，共议数字化浪潮下国内保险中介市场的升维方法论。论坛重磅揭晓了“今日·保险中介榜颁奖典礼获奖名单”，凭借其带领力码科技持续深耕...',
            src: 'https://lima-tech.com/news/news-detail.html',
        }]
    ],
    current: 0
}
let { mod, el } = init(html, v);
function bind() {
    let last = mod.init("last")
    last.on("click", function () {
        if (v.current > 0) {
            v.current -= 1
            el.reBind(reRender(html, v)).then(() => {
                mod.init("page").dom.innerHTML = v.current + 1
            })
        }
    })
    let next = mod.init("next")
    next.on("click", () => {
        if (v.current < v.newsItem.length - 1) {
            v.current += 1
            el.reBind(reRender(html, v)).then(() => {
                mod.init("page").dom.innerHTML = v.current + 1
            })

        }
    })
    return el
}
bind.async = true
export default { bind }