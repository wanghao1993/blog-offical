import MainLayout from "@/components/Layouts/MainLayout";
import AboutCss from "./page.module.css";
import {
  NotoVideoGame,
  IconParkPiano,
  MarketeqTelescope,
  IconParkBike,
  IconParkMovie,
  LucideOrigami,
} from "@/components/Icon/icon";
import { GoogleTagManager } from "@next/third-parties/google";
export default function About() {
  const interests = [
    {
      title: "游戏",
      icon: <NotoVideoGame />,
    },
    {
      title: "钢琴",
      icon: <IconParkPiano />,
    },
    {
      title: "天文",
      icon: <MarketeqTelescope />,
    },
    {
      title: "户外",
      icon: <IconParkBike />,
    },
    {
      title: "电影",
      icon: <IconParkMovie />,
    },
    {
      title: "手工",
      icon: <LucideOrigami />,
    },
  ];
  return (
    <>
      <MainLayout>
        <GoogleTagManager gtmId="G-4Z3CSGWXGR" />
        <header className="py-12">
          <div className="  items-center text-center">
            <h1 className="text-3xl font-bold mb-2">汪浩（Isaac Wang）</h1>
            <p>前端开发工程师</p>
          </div>
        </header>
        <main className="py-12 grid gap-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">关于我</h2>
            <div className={AboutCss.prose}>
              <p>
                Hi，我是汪浩，英文名 Isaac Wang，是的，
                <a
                  href="https://en.wikipedia.org/wiki/Isaac_Newton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Isaac Newton(牛顿)
                </a>
                是我的偶像。我是一名前端工程师，对软件设计、编程和用户体验都充满热情，希望成为大佬。
              </p>
              <p>
                我拥有不多的计算机科学知识和经验，并且对设计和开发都有浓厚的兴趣。我喜欢探索新技术，并喜欢与同行分享我的知识。
              </p>
              <p>
                在业余时间，我热爱一些艺术，喜欢阅读一些科技博客，以及尝试新的技术和接触不同事物，也喜欢打游戏，手游，主机游戏，Switch都有，也喜欢与他人分享我的知识。
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">教育</h2>
            <div className="grid gap-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">机械设计制造及自动化</h3>
                <p>柳州工学院</p>
                <p>2011 - 2015</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">工作经历</h2>
            <div className="grid gap-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">高级前端开发</h3>
                <p>佛山美的(外包)-大数据</p>
                <p>2024 - current</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      开发和维护PC应用，使用
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue3
                      </a>
                      ,
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Typescript
                      </a>
                      ,
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pinia
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">资深前端开发</h3>
                <p>上海蔚来汽车-质量效能团队</p>
                <p>2022 - 2024</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      开发和维护PC应用，使用
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue2/3
                      </a>
                      ,
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Typescript
                      </a>
                      ,
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pinia
                      </a>
                      ，
                      <a
                        href="https://vuex.vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vuex
                      </a>
                      ,
                      <a
                        href="https://nginx.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nginx
                      </a>
                      ,
                      <a
                        href="http://nodejs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Node
                      </a>
                      ,
                      <a
                        href="https://nestjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NestJs
                      </a>
                      ,
                      <a href="https://typeorm.io/" target="_blank">
                        TypeOrm，
                      </a>
                      , Mysql
                    </li>
                    <li>业务组件库/脚手架开发</li>
                    <li>产品设计以及产品运营推广</li>
                    <li>参与Code Review和指导实习生。</li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">高级前端开发</h3>
                <p>深圳依时货拉拉-大数据</p>
                <p>2019 - 2022</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      开发和维护PC应用，使用
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue2/3
                      </a>
                      ,
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Typescript
                      </a>
                      ,
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pinia
                      </a>
                      ,
                      <a
                        href="https://vuex.vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vuex
                      </a>
                      ， AMap, BMap, GoogleMap
                    </li>
                    <li>参与招聘，培训和指导实习生。。</li>
                    <li>参与产品设计和Code Review。</li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">前端开发</h3>
                <p>中竞互联-技术部</p>
                <p>2018 - 2019</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      开发和维护小程序，使用mpvue, uni-app，qiniu云开发IM。
                    </li>
                    <li>使用Fluttr, Dart开发App。</li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">前端开发</h3>
                <p>腾讯（外包）- IEG运营</p>
                <p>2017 - 2018</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      开发和维护PC应用以及小程序，使用
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vue2
                      </a>
                      ，Jquery。
                    </li>
                    <li>参与组件库的开发。</li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">结构设计工程师</h3>
                <p>深圳千帆医疗- 技术部</p>
                <p>2015 - 2017</p>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      负责医疗器械的结构设计和外形设计，使用Pro/E，UG，AutoCad
                    </li>
                    <li>编写工艺说明书。</li>
                    <li>医疗器械的注册申请和体系ISO9001，13485的审核。</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">时间线</h2>
            <div className="grid gap-6">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2024</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      从蔚来离职，换了一份新工作，从事和仓库管理相关的项目
                    </li>
                    <li>
                      学习React的SSR升级个人博客，使用
                      <a
                        href="http://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nextjs
                      </a>
                      ,
                      <a
                        href="http://www.prisma.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Prisma
                      </a>
                      ,
                      <a
                        href="http://www.mongodb.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        MongoDB
                      </a>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2023</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>完成人生大事，我结婚了</li>
                    <li>
                      学习
                      <a href="https://nestjs.com/" target="_blank">
                        NestJs
                      </a>
                      ，使用NestJs开发一个通知系统的后端，React实现前端
                    </li>
                    <li>
                      掌握了
                      <a href="https://typeorm.io/" target="_blank">
                        TypeOrm，
                      </a>
                      快速实现数据库表的操作
                    </li>
                    <li>
                      学习web3的Dapp/智能合约的开发，学习区块链的相关知识，并成功部署一个智能合约
                    </li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2022</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>入职蔚来汽车，接触到了不同的业务领域</li>
                    <li>
                      了解到了整个项目开发的生命周期是怎么样的，开发了各种测试工具，API用例，自动化用例，手工用例，场景用例，也了解到测试和项目管理的日常工作和流程。
                    </li>
                    <li>开发了项目管理平台和测试管理平台以及压测平台</li>
                    <li>开始需要像一个产品去思考业务，去推广产品</li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2021</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      了解到了整个项目开发的生命周期是怎么样的，开发了各种测试工具，API用例，自动化用例，手工用例，场景用例，也了解到测试和项目管理的日常工作和流程。
                    </li>
                    <li>开发了项目管理平台和测试管理平台以及压测平台</li>
                    <li>开始需要像一个产品去思考业务，去推广产品</li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2020</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>开始接触大数据项目，开发报表和地图项目</li>
                    <li>
                      开发了A/BTest项目，并且对项目的业务逻辑和实现算法了解的很清楚
                    </li>
                    <li>开始学习Vue3/TS，促使项目的升级。</li>
                    <li>沉淀业务组件库实现项目提升开发效率。</li>
                    <li>多次获得前端最佳员工，升级2次。</li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2019</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      职业发展考虑，离开了腾讯外包，入职创业公司，发誓要和公司一起成长。
                    </li>
                    <li>开始学习小程序开发，发现性能问题，更换技术栈解决</li>
                    <li>
                      开始阅读
                      <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        vue
                      </a>
                      ，
                      <a
                        href="https://vuex.vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        vuex
                      </a>
                      ，
                      <a
                        href="https://router.vuejs.org/zh/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        vue-router
                      </a>
                      ，
                      <a
                        href="https://lodash.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        lodash
                      </a>
                      ，
                      <a
                        href="https://element.eleme.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        element-ui
                      </a>
                      ，等源码
                    </li>
                    <li>
                      搭建个人博客，购买服务器，注册域名，学会如何部署，
                      <a
                        href="https://nginx.org/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Nginx
                      </a>
                      ,
                      <a
                        href="http://www.docker.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Docker
                      </a>
                      等等
                    </li>
                    <li>
                      学习
                      <a
                        href="https://flutter.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Flutter
                      </a>
                      和
                      <a
                        href="https://dart.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dart
                      </a>
                      进行跨端开发
                    </li>
                    <li>公司经营不善，倒闭了，随后入职了深圳依时货拉拉</li>
                    <li>由于经常发文章，认识了我现在的老婆</li>
                  </ol>
                </div>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2018</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      在自己的项目上游刃有余，开始接触组件库的设计和开发和测试，参与设计和开发组件库
                      <a
                        href="https://magicbox.bk.tencent.com/static_api/v3/main/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Magicbox
                      </a>
                      。
                    </li>
                    <li>
                      开始思考各种工具函数和API的实现原理并尝试去手写相关代码，在相关技术平台上发布文章。
                    </li>
                    <li>
                      学习
                      <a href="https://www.selenium.dev/" target="_blank">
                        selenium
                      </a>
                      如何在项目中实现UI自动化测试
                    </li>
                    <li>多次获得5星评价</li>
                  </ol>
                </div>
              </div>

              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">2017</h3>
                <div className={AboutCss.prose}>
                  <ol>
                    <li>
                      转行成功，开始进入前端行业，作为一名真正的前端开发开始工作
                    </li>
                    <li>熟悉前端开发流程，开始夯实基础学习vue。</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">爱好</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {interests.map((item, index) => (
                <div
                  className="flex flex-col items-center gap-4 cursor-pointer hover:shadow-md duration-300 "
                  key={index}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </MainLayout>
    </>
  );
}
