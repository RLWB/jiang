<template>
  <div class="page flex-col">
    <div class="block1 flex-col">
      <div class="outer1 flex-col">
        <div class="box1 flex-row">
          <img
            class="img1"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng07aef776ab10e42443397599c68848b421ac6cdc8116d930c8cda62827374754.png"
          />
          <div class="bd1 flex-col"><span class="word1">发现音乐</span></div>
          <span class="word2">我的音乐</span>
          <span class="txt1">音乐人开放平台</span>
          <span class="info1">关于我们</span>
          <div class="bd2 flex-col"><span class="txt2">搜索音乐人、音乐、用户、专辑、歌单</span></div>
          <span class="txt3">登录/注册</span>
        </div>
      </div>
      <div class="outer2 flex-col">
        <div class="group1 flex-row justify-between">
          <span class="info2">推荐</span>
          <span class="txt4">音乐人</span>
          <span class="info3">排行榜</span>
          <span class="word3">歌手</span>
          <span class="word4">专辑</span>
          <span class="word5">歌单</span>
          <span class="info4">MV</span>
        </div>
      </div>
      <div class="outer3 flex-col">
        <div class="layer1 flex-col justify-between">
          <div class="section1 flex-col">
            <div class="block2 flex-col justify-between">
              <div class="group2 flex-row justify-between">
                <img
                  class="label1"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng72bab4928b5e5cca888a6c6b8d9e9b97c1eb4e381b3d28576d7c2dd633138172.png"
                />
                <img
                  class="label2"
                  referrerpolicy="no-referrer"
                  src="./assets/img/SketchPng96cc63d898004eb2bd8a787d82284ec9fd45bf84a8bf88d08bed8d2c0336d0a1.png"
                />
              </div>
              <div class="group3 flex-col">
                <div class="section2 flex-row">
                  <img
                    class="icon1"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng96c9f6d5af613ac84bc647fd4336ea45cbeae4a5b4466493129e3a750974ee1d.png"
                  />
                  <img
                    class="pic1"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng27f350e2048812e09be3b2300352c7a8188033bd5fd6d8dc77c7b870dfa84de0.png"
                  />
                  <span class="word6">02:12&nbsp;/&nbsp;04:39</span>
                  <img
                    class="icon2"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng7c63ab890b704667697cb54378063b279691465cd8c08245958615d0c25a8871.png"
                  />
                  <img
                    class="label3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng91b8edde667f224cc8eeef953bb0ab5d0516bf5a71f32ec68ae62e8473dcba85.png"
                  />
                  <img
                    class="pic2"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="section3 flex-row justify-between">
            <div class="box2 flex-col justify-between">
              <span class="info5">欧美流行丨即刻沦陷于音籁世界</span>
              <div class="group4 flex-row">
                <div class="box3 flex-col"></div>
                <span class="txt5">哈哈哈哈哈</span>
                <div class="box4 flex-col"></div>
                <div class="box5 flex-col"></div>
                <span class="word7">播放量：23645</span>
                <div class="box6 flex-col"></div>
                <span class="word8">发布时间：2022-01-25</span>
              </div>
            </div>
            <div class="box7 flex-row justify-between">
              <div class="layer2 flex-col">
                <div class="wrap1 flex-row justify-between">
                  <img
                    class="icon3"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPnga9839b7c6668af9005769dc198767f3ef0059f88cf5ace5bea917c737d6b86f3.png"
                  />
                  <span class="txt6">下载</span>
                </div>
              </div>
              <div class="layer3 flex-col">
                <div class="layer4 flex-row justify-between">
                  <img
                    class="label4"
                    referrerpolicy="no-referrer"
                    src="./assets/img/SketchPng8051ae0b77ca2f34c7aaa49c7854fb5dcd251858cf7d0c993229d45f6db86e88.png"
                  />
                  <span class="txt7">收藏</span>
                </div>
              </div>
              <div class="layer5 flex-col">
                <div class="bd3 flex-row justify-between">
                  <div class="box8 flex-col"></div>
                  <span class="word9">评论</span>
                </div>
              </div>
              <div class="layer6 flex-col">
                <div class="mod1 flex-row justify-between">
                  <div class="wrap2 flex-col"></div>
                  <span class="txt8">分享</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layer7 flex-col"></div>
        <div class="layer8 flex-col"><span class="word10">个人音乐人</span></div>
      </div>
      <div class="outer4 flex-col">
        <div class="group5 flex-col">
          <div class="layer9 flex-row justify-between">
            <div class="section4 flex-col"></div>
            <span class="word11">热门MV</span>
          </div>
          <div class="layer10 flex-col"></div>
          <div class="layer11 flex-row">
            <div class="wrap3 flex-col" v-for="(item, index) in loopData0" :key="index">
              <div class="wrap3 flex-col justify-between">
                <div class="layer12 flex-col" :style="{ background: item.lanhuBg2 }">
                  <div class="group6 flex-col"><span class="info6" v-html="item.lanhutext0"></span></div>
                </div>
                <span class="word12" v-html="item.lanhutext1"></span>
              </div>
            </div>
          </div>
          <div class="layer13 flex-row">
            <span class="word13">5-Uzi</span>
            <span class="txt9">5-Uzi</span>
            <span class="word14">蒋一侨</span>
            <span class="txt10">5-Uzi</span>
          </div>
          <div class="layer14 flex-row">
            <div class="section5 flex-col"></div>
            <span class="word15">2354</span>
            <div class="section6 flex-col"></div>
            <span class="word16">2021-10-10</span>
            <div class="section7 flex-col"></div>
            <span class="word17">2354</span>
            <div class="section8 flex-col"></div>
            <span class="word18">2021-10-10</span>
            <div class="section9 flex-col"></div>
            <span class="word19">2354</span>
            <div class="section10 flex-col"></div>
            <span class="info7">2021-10-10</span>
            <div class="section11 flex-col"></div>
            <span class="info8">2354</span>
            <div class="section12 flex-col"></div>
            <span class="word20">2021-10-10</span>
          </div>
        </div>
      </div>
      <div class="outer5 flex-row justify-between">
        <div class="box9 flex-col">
          <div class="box10 flex-col">
            <span class="word21">评论（100）</span>
            <div class="group7 flex-col"></div>
            <div class="group8 flex-col">
              <div class="section13 flex-row"><span class="word22">说说你的感受吧～</span></div>
              <div class="section14 flex-row"><span class="word23">0/300</span></div>
            </div>
            <div class="group9 flex-row justify-between">
              <div class="bd4 flex-col"><span class="info9">发表评论</span></div>
              <div class="bd5 flex-col"><span class="word24">发表评论</span></div>
            </div>
            <div class="group10 flex-row justify-between">
              <div class="bd8 flex-col"></div>
              <div class="mod3 flex-col justify-between">
                <div class="outer15 flex-row justify-between">
                  <span class="txt26">我</span>
                  <div class="layer17 flex-col"></div>
                  <div class="layer18 flex-col">
                    <div class="group40">
                      <span class="info23">Lv</span>
                      <span class="txt27">.</span>
                      <span class="info24">7</span>
                    </div>
                  </div>
                </div>
                <span class="word58">2022-01-05&nbsp;10:00:19</span>
              </div>
            </div>
            <span class="txt28">
              梦过三旬，少年已经毕业了。曾经特别怕早晨，因为醒来就要上学。现在特别怕早晨因为醒来就要上班。曾经的那个有理想的少年，心事重重。只是被岁月磨去了棱角，变得不善于表达了
            </span>
            <div class="group11 flex-row">
              <img
                class="icon18"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng68c0b13c137b201bff62ca5bf5eb55a99e716366dddfd61a6a780b56b68a6a45.png"
              />
              <span class="word59">举报</span>
              <span class="word60">回复</span>
              <img
                class="icon19"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPnge920d0f06c9c7756cab068f913794d7c173468a8457a25c93e2c6ee8072df1fc.png"
              />
              <span class="word61">123</span>
              <img
                class="label13"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngbf6e5fdb99abccf460c4f53c766b6a7d244724d4e0a3489b93f6da2bd8cbc711.png"
              />
            </div>
            <div class="block6 flex-col"></div>
            <div class="block7 flex-row">
              <div class="bd9 flex-col"></div>
              <div class="wrap5 flex-col justify-between">
                <div class="bd6 flex-row justify-between">
                  <span class="txt29">浪里个浪儿</span>
                  <div class="wrap6 flex-col"></div>
                </div>
                <span class="info25">2022-01-05&nbsp;10:00:19</span>
              </div>
              <div class="bd10 flex-col">
                <div class="block8">
                  <span class="info23">Lv</span>
                  <span class="txt27">.</span>
                  <span class="info24">7</span>
                </div>
              </div>
            </div>
            <span class="txt30">
              梦过三旬，少年已经毕业了。曾经特别怕早晨，因为醒来就要上学。现在特别怕早晨因为醒来就要上班。曾经的那个有理想的少年，心事重重。只是被岁月磨去了棱角，变得不善于表达了
            </span>
            <div class="group14 flex-row">
              <img
                class="icon20"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng68c0b13c137b201bff62ca5bf5eb55a99e716366dddfd61a6a780b56b68a6a45.png"
              />
              <span class="word62">举报</span>
              <span class="txt31">取消</span>
              <img
                class="label14"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngbf6e5fdb99abccf460c4f53c766b6a7d244724d4e0a3489b93f6da2bd8cbc711.png"
              />
              <span class="info26">123</span>
            </div>
            <div class="block9 flex-col">
              <div class="box11 flex-col justify-between">
                <span class="info27">
                  珍惜拥有的，感恩给予的，勿念失去的，沉淀放下的，聆听心的声音，向往美好的，直追理想的，尝遍好吃的……听陈楚生的歌，回味人生
                </span>
                <div class="box23">
                  <span class="word33">120</span>
                  <span class="word34">/300</span>
                </div>
              </div>
            </div>
            <div class="block10 flex-col"><span class="word63">发表评论</span></div>
            <div class="block11 flex-col"></div>
            <div class="group18 flex-row justify-between">
              <div class="mod8 flex-col"></div>
              <div class="mod5 flex-col justify-between">
                <div class="group41 flex-row justify-between">
                  <span class="word64">喵喵喵喵</span>
                  <div class="wrap7 flex-col">
                    <div class="layer19">
                      <span class="info23">Lv</span>
                      <span class="txt27">.</span>
                      <span class="info24">7</span>
                    </div>
                  </div>
                </div>
                <span class="word65">2022-01-05&nbsp;10:00:19</span>
              </div>
            </div>
            <span class="txt32">
              梦过三旬，少年已经毕业了。曾经特别怕早晨，因为醒来就要上学。现在特别怕早晨因为醒来就要上班。曾经的那个有理想的少年，心事重重。只是被岁月磨去了棱角，变得不善于表达了
            </span>
            <div class="group19 flex-row">
              <img
                class="icon21"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPng68c0b13c137b201bff62ca5bf5eb55a99e716366dddfd61a6a780b56b68a6a45.png"
              />
              <span class="info28">举报</span>
              <span class="info29">回复</span>
              <img
                class="icon22"
                referrerpolicy="no-referrer"
                src="./assets/img/SketchPngbf6e5fdb99abccf460c4f53c766b6a7d244724d4e0a3489b93f6da2bd8cbc711.png"
              />
              <span class="word66">123</span>
            </div>
          </div>
          <div class="box12 flex-col"></div>
          <div class="mod9 flex-col"></div>
          <div class="mod10 flex-col"><span class="word67">个人音乐人</span></div>
          <span class="word68">查看4条回复</span>
          <div class="mod11 flex-col"></div>
          <div class="mod12 flex-col"><span class="word69">个人音乐人</span></div>
          <span class="word70">查看4条回复</span>
          <span class="word71">查看4条回复</span>
        </div>
        <div class="box19 flex-col">
          <div class="mod6 flex-col">
            <div class="main3 flex-row justify-between">
              <div class="section15 flex-col"></div>
              <span class="info15">下载客户端</span>
            </div>
            <div class="main4 flex-col"></div>
            <img
              class="pic3"
              referrerpolicy="no-referrer"
              src="./assets/img/SketchPngf685e583fd036dd3c08a27c29abb85c8c649b07d97f5885b1226726a6b4921a9.png"
            />
            <span class="word43">手机扫描二维码下载客户端</span>
          </div>
        </div>
      </div>
      <div class="outer8 flex-col">
        <div class="box20 flex-col">
          <div class="section16 flex-row justify-between">
            <span class="txt16">关于我们</span>
            <span class="info16">监督举报</span>
            <span class="word44">广告服务</span>
            <span class="txt17">版权指引</span>
            <span class="info17">隐私政策</span>
            <span class="txt18">招聘信息</span>
            <span class="info18">客服中心</span>
          </div>
          <div class="section17 flex-col"></div>
          <img
            class="img2"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPnga90c6790ddde2a18b5a5da756b4a43375fc303bd7dda167e93154c216d58cb66.png"
          />
          <span class="infoBox1">
            网络文化经营许可证京网文（2020）&nbsp;2496-386号
            <br />
            <br />
            增值电信业务经营许可证京B2—20202416
            <br />
            <br />
            广播电视节目制作经营许可证:（京）字第15434号
            <br />
            <br />
            京公网安备&nbsp;11010502041730号
            <br />
            版权所有&nbsp;曹氏俊杰科技发展（北京）有限公司&nbsp;保留一切权利&nbsp;【京ICP备20004051号-1】
          </span>
        </div>
      </div>
    </div>
    <div class="block3 flex-col">
      <div class="main5 flex-row justify-between">
        <img
          class="icon8"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng90baa7c7cb465d0fbb7f1e0e5a71ba5d1c3f7eaa1f80c86537627b19caca80c8.png"
        />
        <span class="info19">已收藏</span>
      </div>
    </div>
    <span class="word72">123</span>
    <div class="mod13 flex-col">
      <div class="group20 flex-row">
        <div class="wrap8 flex-col"></div>
        <div class="wrap9 flex-col justify-between">
          <div class="box24 flex-row">
            <span class="word73">simple</span>
            <div class="main8 flex-col"></div>
            <div class="main9 flex-col">
              <div class="section18">
                <span class="info23">Lv</span>
                <span class="txt27">.</span>
                <span class="info24">7</span>
              </div>
            </div>
          </div>
          <span class="word74">2022-01-05&nbsp;10:00:19</span>
        </div>
        <img
          class="icon23"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge920d0f06c9c7756cab068f913794d7c173468a8457a25c93e2c6ee8072df1fc.png"
        />
        <span class="word75">123</span>
      </div>
      <div class="group22 flex-row">
        <span class="word76">
          梦过三旬，少年已经毕业了。曾经特别怕早晨，因为醒来就要上学。现在特别怕早晨因为醒来就要上班。
        </span>
      </div>
      <div class="group23 flex-row">
        <div class="group42 flex-col"></div>
        <div class="group43 flex-col justify-between">
          <div class="layer20 flex-col">
            <div class="section19">
              <span class="info23">Lv</span>
              <span class="txt27">.</span>
              <span class="info24">7</span>
            </div>
          </div>
          <span class="txt33">2022-01-05&nbsp;10:00:19</span>
        </div>
        <img
          class="icon24"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge920d0f06c9c7756cab068f913794d7c173468a8457a25c93e2c6ee8072df1fc.png"
        />
        <span class="word77">123</span>
      </div>
      <div class="group24 flex-row">
        <span class="word78">
          小小的《光字片》，平凡的周氏三代人的生活。让我们看见了国家翻天覆地的变化，也看到了人民美好向上的内心！！“周周”联合，双强合作，周深又一新作品！！
        </span>
      </div>
      <div class="group25 flex-row">
        <div class="bd11 flex-col"></div>
        <div class="bd12 flex-col justify-between">
          <div class="group44 flex-row">
            <span class="word79">simple</span>
            <div class="bd13 flex-col"></div>
            <div class="bd14 flex-col">
              <div class="layer21">
                <span class="info23">Lv</span>
                <span class="txt27">.</span>
                <span class="info24">7</span>
              </div>
            </div>
          </div>
          <span class="info30">2022-01-05&nbsp;10:00:19</span>
        </div>
        <img
          class="icon25"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge920d0f06c9c7756cab068f913794d7c173468a8457a25c93e2c6ee8072df1fc.png"
        />
        <span class="word80">123</span>
      </div>
      <div class="group26 flex-row"><span class="word81">梦过三旬，少年已经毕业了。</span></div>
      <div class="group27 flex-row">
        <div class="layer22 flex-col"></div>
        <div class="layer23 flex-col justify-between">
          <div class="box25 flex-col">
            <div class="section20">
              <span class="info23">Lv</span>
              <span class="txt27">.</span>
              <span class="info24">7</span>
            </div>
          </div>
          <span class="word82">2022-01-05&nbsp;10:00:19</span>
        </div>
        <img
          class="icon26"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPnge920d0f06c9c7756cab068f913794d7c173468a8457a25c93e2c6ee8072df1fc.png"
        />
        <span class="txt34">123</span>
      </div>
      <div class="group28 flex-row">
        <span class="word83">
          小小的《光字片》，平凡的周氏三代人的生活。让我们看见了国家翻天覆地的变化，也看到了人民美好向上的内心！！“周周”联合，双强合作，周深又一新作品！！
        </span>
      </div>
      <div class="section21 flex-col"></div>
      <div class="section22 flex-col"><span class="word84">个人音乐人</span></div>
      <span class="txt35">哈哈</span>
      <div class="section23 flex-col"></div>
      <div class="section24 flex-col"><span class="info31">个人音乐人</span></div>
      <span class="word85">嘻嘻</span>
    </div>
    <div class="block5 flex-col">
      <div class="group33 flex-row">
        <div class="group34 flex-col">
          <img
            class="label8"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPngc90bbe5b50ae3e82bb1ff232c0918fe3cb71df41ebc90ef69f1345381bba1076.png"
          />
        </div>
        <div class="group35 flex-col justify-between">
          <div class="layer16 flex-row">
            <span class="info21">慢慢喜欢你</span>
            <span class="word56">王靖雯&nbsp;/唐汉霄&nbsp;/信&nbsp;/马伯骞</span>
            <span class="info22">02:12&nbsp;/&nbsp;04:39</span>
          </div>
          <img
            class="img3"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng723d0a5af4d9b7b509374e8d59a46bef65b8eb9a68077e27eef50558674bc9e2.png"
          />
        </div>
        <img
          class="label9"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng28a999af10cbcf0678c493fbf6fd29c6dbdc7b6f546615de6c8c4ce0efcfbd53.png"
        />
        <img
          class="icon13"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngb227ec223e61ac5bb452f4e755e2c6f95e65410ad9a5128c3009b451e8b9388c.png"
        />
        <img
          class="icon14"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc673ef1998bb8d46994a0bda9e4253bbe4c75bfe2396630430a29443061870c1.png"
        />
        <img
          class="pic4"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc5db3890ad51c9095442f400781084f85f32c711b8c17db582423ca7f8923ecc.png"
        />
        <img
          class="icon15"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng9177df24ae622bfd112e1d895426742506b59d71abb8d3cddd0fedd157865b1f.png"
        />
        <img
          class="icon16"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng1f1a4db1616fd924ba92fc48dc766a88c9e14d0adce57cac36ff8ce31c1e478c.png"
        />
        <div class="group36 flex-col">
          <img
            class="label10"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng6dbe33ada25859c9b34a462ad4f6d32b4c376501a65734c18b42dd9e287aaa7a.png"
          />
        </div>
        <img
          class="label11"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPngc6a486fcc0b4df7bb57013b9939dd956e12165481c0426f42c0a3601ed267b00.png"
        />
        <img
          class="pic5"
          referrerpolicy="no-referrer"
          src="./assets/img/SketchPng22e5b1818509273949bec1d74f73175deff64d6f7e5cc8bd4f02d6abf9ad2573.png"
        />
        <div class="group37 flex-col justify-between">
          <img
            class="label12"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng936fb1ba0ddb9f0951bf06a559ee091f9eafa1ecf5c8463912e68957748d8f67.png"
          />
          <img
            class="icon17"
            referrerpolicy="no-referrer"
            src="./assets/img/SketchPng8b5e5882e19e2150ed6c2294b204b7c5fe7a3729ade75209386cdf63dfe69607.png"
          />
        </div>
      </div>
      <div class="group38 flex-col"><span class="word57">123</span></div>
      <div class="bd15 flex-col"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1625b7b2dddc1c07a53660b6687fd1fc180291b37d1239f8f7604e80e0f04107) 100% no-repeat',
          lanhutext0: '03:55',
          lanhutext1: 'INTO1沉浸纪录EP《万里》'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge883c427e424ab2981068f0fe58cf708dc9a5459f9a92a5bfc5eba0d4b05b7bc) 0px 0px no-repeat',
          lanhutext0: '03:55',
          lanhutext1: 'Immer&nbsp;immer&nbsp;wieder(An&nbsp;der&nbsp;C…'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2054afae7394b4ef13525ad365e413c070ea583dfb83ce04199db4b9a519754f) 0px 0px no-repeat',
          lanhutext0: '03:55',
          lanhutext1: '亲爱的爸妈，我们终将会离开&nbsp;(微…'
        },
        {
          lanhuBg2:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng43c3bef74d4528b938f1dbe5c453e62c40c89c45d1049c9058b840a3b4fb9b3c) 100% no-repeat',
          lanhutext0: '03:55',
          lanhutext1: 'INTO1沉浸纪录EP《万里》'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="scss" src="./assets/index.scss" />