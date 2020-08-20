# v0.9.5 (Thu Aug 20 2020)

#### ✨ Improvements

- ci: fix publish workflow [#99](https://github.com/TheSweaterGuys/nucleus-style/pull/99) ([@loreina](https://github.com/loreina))

#### Authors: 1

- Loreina Chew ([@loreina](https://github.com/loreina))

---

# v0.9.4 (Wed Aug 19 2020)

#### ✨ Improvements

- ci: update publish workflow [#98](https://github.com/TheSweaterGuys/nucleus-style/pull/98) ([@loreina](https://github.com/loreina))

#### Authors: 1

- Loreina Chew ([@loreina](https://github.com/loreina))

---

# v0.9.3 (Wed Aug 19 2020)

#### ✨ Improvements

- ci: update release workflow to use auto shipit [#97](https://github.com/TheSweaterGuys/nucleus-style/pull/97) ([@loreina](https://github.com/loreina))

#### Authors: 1

- Loreina Chew ([@loreina](https://github.com/loreina))

---

# v0.9.2 (Wed Aug 19 2020)

#### ✨ Improvements

- ci: add workflow to publish package on new release [#96](https://github.com/TheSweaterGuys/nucleus-style/pull/96) ([@loreina](https://github.com/loreina))
- docs: reformat changelog to match auto format [#95](https://github.com/TheSweaterGuys/nucleus-style/pull/95) ([@loreina](https://github.com/loreina))

#### Authors: 1

- Loreina Chew ([@loreina](https://github.com/loreina))

---

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

# 0.9.1 (2020-08-18)

#### ✨ Improvements

- ci: fix release workflow [#94](https://github.com/TheSweaterGuys/nucleus-style/pull/94) ([@loreina](https://github.com/loreina))
- ci: setup auto [#93](https://github.com/TheSweaterGuys/nucleus-style/pull/93) ([@loreina](https://github.com/loreina))

#### Authors: 1

- Loreina Chew ([@loreina](https://github.com/loreina))

# 0.9.0 (2020-08-18)


#### 🚀 Features

* add Switch component ([#91](https://github.com/TheSweaterGuys/nucleus-style/issues/91)) ([16f6159](https://github.com/TheSweaterGuys/nucleus-style/commit/16f61593f35c255128e85b3dacd2d5639e25f6a7))


#### ✨ Improvements

* add cursor to Flex ([#90](https://github.com/TheSweaterGuys/nucleus-style/issues/90)) ([1349d99](https://github.com/TheSweaterGuys/nucleus-style/commit/1349d99aada5551f445896bda1b7cdbc758ffed2))

# 0.8.2 (2020-08-14)


#### 🐛 Bug Fixes

* remove Box default color ([#88](https://github.com/TheSweaterGuys/nucleus-style/issues/88)) ([ea0786f](https://github.com/TheSweaterGuys/nucleus-style/commit/ea0786f6b82544d41b94fa93c352abc179f0f13e))
* remove default margins from Heading and Text ([#87](https://github.com/TheSweaterGuys/nucleus-style/issues/87)) ([420603e](https://github.com/TheSweaterGuys/nucleus-style/commit/420603e67bf4812b95e0555c4a7e81b7edb3b644))

# 0.8.1 (2020-08-14)


#### 🐛 Bug Fixes

- Rebuild and publish package

# 0.8.0 (2020-08-14)


#### ✨ Improvements

* `Box` and `Card` now accepts a `cursor` prop ([#82](https://github.com/TheSweaterGuys/nucleus-style/issues/82)) ([7b304e8](https://github.com/TheSweaterGuys/nucleus-style/commit/7b304e89601a12c7566e13985fb617d082c854d6))
* `Image` accepts `height` prop for rectangular sizes ([#76](https://github.com/TheSweaterGuys/nucleus-style/issues/76)) ([8e53c54](https://github.com/TheSweaterGuys/nucleus-style/commit/8e53c54d09dc7452b96b5a5b1677237345f2cc1c))
* `Tag` has a `text` prop instead of scraping from component children ([#78](https://github.com/TheSweaterGuys/nucleus-style/issues/78)) ([f0011fb](https://github.com/TheSweaterGuys/nucleus-style/commit/f0011fb7f082623aaa88c99a251f379d9147633d))
* `Box` supports a `border` prop ([#86](https://github.com/TheSweaterGuys/nucleus-style/issues/86)) ([c57e713](https://github.com/TheSweaterGuys/nucleus-style/commit/c57e713304fefae24842346c6122e87e7ae1ea08))
* Tag has `button` prop to toggle render as `<button>` instead of `<div>` ([#85](https://github.com/TheSweaterGuys/nucleus-style/issues/85))

#### 🐛 Bug Fixes

* remove Heading default color ([08d210c](https://github.com/TheSweaterGuys/nucleus-style/commit/08d210ce4bcd00fbaced0c7049e4558ae1c54724))

#### 🚨 Breaking Changes

* `Tag` now default renders as `<div>` instead of `<span>` ([#85](https://github.com/TheSweaterGuys/nucleus-style/issues/85))
* `Image` component's `size` prop is deprecated in favour of using `width` and `height` props ([#76](https://github.com/TheSweaterGuys/nucleus-style/issues/76))

# 0.7.0 (2020-08-10)


#### ✨ Improvements

* add Avatar prop types, stories, tests ([#73](https://github.com/TheSweaterGuys/nucleus-style/issues/73)) ([42d0685](https://github.com/TheSweaterGuys/nucleus-style/commit/42d0685dcf9930acf2ded4e14fa632a7f98b5f6e))
* add Link prop types, stories, tests ([#71](https://github.com/TheSweaterGuys/nucleus-style/issues/71)) ([fad37fa](https://github.com/TheSweaterGuys/nucleus-style/commit/fad37fa870472faa27e9542c1da65f721d9579d2))
* add Tag prop types, stories, tests ([#72](https://github.com/TheSweaterGuys/nucleus-style/issues/72)) ([887b874](https://github.com/TheSweaterGuys/nucleus-style/commit/887b87417b0628e221e6c03031b8b6f3ec3fc494))

#### 🚨 Breaking Changes
* `LinkButton` deprecated in favour of using `<Link button />` prop

# 0.6.1 (2020-08-05)


#### ✨ Improvements

* add `.yarnrc` to allow downloading the package through Yarn

# 0.6.0 (2020-08-04)


#### ✨ Improvements

* add Card stories and define prop types ([#65](https://github.com/TheSweaterGuys/nucleus-style/issues/65)) ([e707a7d](https://github.com/TheSweaterGuys/nucleus-style/commit/e707a7df9d2efa32763ed4f5bfb4590896212abf))
* add deploy workflow CI to README ([681f5e5](https://github.com/TheSweaterGuys/nucleus-style/commit/681f5e523bcd464e45f4c1d85ff53d4dd54ad8ec))
* define Image props. stories, tests ([#69](https://github.com/TheSweaterGuys/nucleus-style/issues/69)) ([665f0f8](https://github.com/TheSweaterGuys/nucleus-style/commit/665f0f81aa16488b3fc21a0c00276e3e11598c03))
* write Card tests ([#67](https://github.com/TheSweaterGuys/nucleus-style/issues/67)) ([ab98df0](https://github.com/TheSweaterGuys/nucleus-style/commit/ab98df04777585e6b6901070129d7a452efe4603))
* write Flex stories and tests ([#68](https://github.com/TheSweaterGuys/nucleus-style/issues/68)) ([d09e90b](https://github.com/TheSweaterGuys/nucleus-style/commit/d09e90b9b720c0e1255d26c6af08d549f7303402))

#### 🚨 Breaking Changes

* `Card` prop renamed from `rounded` to `round`
* `Image` prop renamed from `rounded` to `round`

# 0.5.1 (2020-08-03)


#### ✨ Improvements

* add Box prop types ([#60](https://github.com/TheSweaterGuys/nucleus-style/issues/60)) ([5de484a](https://github.com/TheSweaterGuys/nucleus-style/commit/5de484a771906ed650f6bdd53c05adb920649aad))
* add Box stories ([#61](https://github.com/TheSweaterGuys/nucleus-style/issues/61)) ([c3a41b2](https://github.com/TheSweaterGuys/nucleus-style/commit/c3a41b23009dc3bc6c604bd5aab2257c5dee8f26))
* add Button disabled styling ([#57](https://github.com/TheSweaterGuys/nucleus-style/issues/57)) ([2e46142](https://github.com/TheSweaterGuys/nucleus-style/commit/2e4614215255466121d1c068183ab18e1f4c82ea))
* add PR template ([#59](https://github.com/TheSweaterGuys/nucleus-style/issues/59)) ([2528930](https://github.com/TheSweaterGuys/nucleus-style/commit/252893071e5e38e37101bcd0a61adc422f5c08b9))
* write Box tests ([#63](https://github.com/TheSweaterGuys/nucleus-style/issues/63)) ([c3a11cb](https://github.com/TheSweaterGuys/nucleus-style/commit/c3a11cb9baeec7ba9bc68cd38580892dd4ad5331))
* write tests for Button component ([#58](https://github.com/TheSweaterGuys/nucleus-style/issues/58)) ([26f0b3f](https://github.com/TheSweaterGuys/nucleus-style/commit/26f0b3f4b5046f4fe83a75a07a6f447832cac273))
* write tests for Heading component ([#56](https://github.com/TheSweaterGuys/nucleus-style/issues/56)) ([6e42c4d](https://github.com/TheSweaterGuys/nucleus-style/commit/6e42c4d23962ef32ec7a9742994680433dcc5b61))

# 0.5.0 (2020-08-03)


#### 🚀 Features

* new implementation of Heading component ([#47](https://github.com/TheSweaterGuys/nucleus-style/issues/47)) ([5daee69](https://github.com/TheSweaterGuys/nucleus-style/commit/5daee691976f92be567cd9a24981791425df646d))
* new implementation of Button component ([#49](https://github.com/TheSweaterGuys/nucleus-style/issues/49)) ([45e59f6](https://github.com/TheSweaterGuys/nucleus-style/commit/45e59f62b229e93ba7a50b5642ec561080945002))
* new implementation of Text component ([#48](https://github.com/TheSweaterGuys/nucleus-style/issues/48)) ([0cc7f40](https://github.com/TheSweaterGuys/nucleus-style/commit/0cc7f4067bd222964b6cd1c70afdf02b5ddddf0f))


#### ✨ Improvements

* add Button hovers ([6c04787](https://github.com/TheSweaterGuys/nucleus-style/commit/6c047874472dab32a4253f37e75e929c9163ecb9))
* add contributing guide ([#37](https://github.com/TheSweaterGuys/nucleus-style/issues/37)) ([dd8c6c4](https://github.com/TheSweaterGuys/nucleus-style/commit/dd8c6c45f3ce1570392a616de51c113f444b022e))
* add fonts theming ([957118f](https://github.com/TheSweaterGuys/nucleus-style/commit/957118f53c1bd3edd8d9e5d58a1b2785a6468d5a))
* add installation guide ([#52](https://github.com/TheSweaterGuys/nucleus-style/issues/52)) ([7935249](https://github.com/TheSweaterGuys/nucleus-style/commit/79352497fc48ca2a71db14a2209c2b251f2fd44a))
* add tests for Text component ([#53](https://github.com/TheSweaterGuys/nucleus-style/issues/53)) ([2f0e1bc](https://github.com/TheSweaterGuys/nucleus-style/commit/2f0e1bc8ad7e5fdfe2714bc7bd35f74af2402d2d))
* add colors and screens theming ([#40](https://github.com/TheSweaterGuys/nucleus-style/issues/40)) ([8e1ab2c](https://github.com/TheSweaterGuys/nucleus-style/commit/8e1ab2c5ecb117d003e5de074e1e9ec614e448be))
* display event handlers for Button ([03a9add](https://github.com/TheSweaterGuys/nucleus-style/commit/03a9addbd3507ebb42a71d768957fc902e9b11e6))
* separate test and build workflows ([#54](https://github.com/TheSweaterGuys/nucleus-style/issues/54)) ([4181b21](https://github.com/TheSweaterGuys/nucleus-style/commit/4181b21014eafe209c936edac9a479b50b7381c9))
* switch to storybook ([#43](https://github.com/TheSweaterGuys/nucleus-style/issues/43)) ([2fb46ed](https://github.com/TheSweaterGuys/nucleus-style/commit/2fb46ed6ca544f9095e62bd2d437338a286ce9f9))


#### 🚨 Breaking Changes

* old Heading components are deprecated and removed: `Heading20`, `Heading23`, `Heading25`, `Heading30`, `Heading35`, `Heading38`, `Heading40`, `Heading50`, `Heading65`, `Heading68`, `Heading80`
* old Button components are deprecated: `ButtonMaxWidth`, `ButtonRounded`


# 0.4.1 (2020-08-01)


#### ✨ Improvements

* add fonts theming ([5456304](https://github.com/TheSweaterGuys/nucleus-style/commit/545630427cc33ae595729545615ea71d1e77cdb8))
* add colors and screens theming ([#40](https://github.com/TheSweaterGuys/nucleus-style/issues/40)) ([8e1ab2c](https://github.com/TheSweaterGuys/nucleus-style/commit/8e1ab2c5ecb117d003e5de074e1e9ec614e448be))
* switch docs generator from docz to storybook ([#43](https://github.com/TheSweaterGuys/nucleus-style/issues/43)) ([bf50ea9](https://github.com/TheSweaterGuys/nucleus-style/commit/bf50ea9902b975421daad343907377573384e6b3))


# 0.4.0 (2020-07-31)


#### 🚀 Features

* add Image component ([#35](https://github.com/TheSweaterGuys/nucleus-style/issues/35)) ([c6a61cc](https://github.com/TheSweaterGuys/nucleus-style/commit/c6a61cc76f626bc93e3b12a50b5bdcc1f53c4907))

#### ✨ Improvements

* add contributing guide ([#37](https://github.com/TheSweaterGuys/nucleus-style/issues/37)) ([e64d983](https://github.com/TheSweaterGuys/nucleus-style/commit/e64d9834fbde00bb8f302b2a666e418ce38a82d7))


# 0.3.0 (2020-07-29)


#### 🚀 Features

* add `Avatar` component ([#31](https://github.com/TheSweaterGuys/nucleus-style/issues/31)) ([9338b45](https://github.com/TheSweaterGuys/nucleus-style/commit/9338b4502d12d758133a8944422d10a907d3e35d))
* add `Card` component ([#30](https://github.com/TheSweaterGuys/nucleus-style/issues/30)) ([dd9d840](https://github.com/TheSweaterGuys/nucleus-style/commit/dd9d840928bab633f89223fdbc4402eb16466d9a))
* add umd bundle in package ([#34](https://github.com/TheSweaterGuys/nucleus-style/issues/34)) ([0d67bb7](https://github.com/TheSweaterGuys/nucleus-style/commit/0d67bb79123ff89f922e71e21278605a7ff826d8))


#### 🐛 Bug Fixes

* update rollup build to transform jsx ([#33](https://github.com/TheSweaterGuys/nucleus-style/issues/33)) ([fdb6061](https://github.com/TheSweaterGuys/nucleus-style/commit/fdb60616f40d8db72abf764b9fbe2cf1f698b3fe))


# 0.2.0 (2020-07-24)


#### 🚀 Features

* `Box` component ([#25](https://github.com/TheSweaterGuys/nucleus-style/issues/25)) ([399a8b7](https://github.com/TheSweaterGuys/nucleus-style/commit/399a8b794cd6adc0cb0cd493f7cfddccac90cf0e))
* `Flex` component ([#27](https://github.com/TheSweaterGuys/nucleus-style/issues/27)) ([de7274b](https://github.com/TheSweaterGuys/nucleus-style/commit/de7274b0c75af5372a252874bf86d0845c8ed924))
* `Tag` component ([#24](https://github.com/TheSweaterGuys/nucleus-style/issues/24)) ([53fe5f4](https://github.com/TheSweaterGuys/nucleus-style/commit/53fe5f4e9aece9e740f1e7f612071c68021c98e2))


# 0.1.0 (2020-07-21)


#### 🚀 Features

* `Button`, `ButtonMaxWidth`, `ButtonRounded` components [#12](https://github.com/TheSweaterGuys/nucleus-style/pull/12) ([2869675](https://github.com/TheSweaterGuys/nucleus-style/pull/22/commits/286967560ba545bd30a3338443c144fbc6191fa8))
* `Link`, `LinkButton` components [#21](https://github.com/TheSweaterGuys/nucleus-style/issues/21)) ([333ee48](https://github.com/TheSweaterGuys/nucleus-style/commit/333ee4858638d7213e23f1ba69cec2047c03747f))
* Heading components: `Heading20`, `Heading23`, `Heading25`, `Heading30`, `Heading35`, `Heading38`, `Heading40`, `Heading50`, `Heading65`, `Heading68`, `Heading80`, [#9](https://github.com/TheSweaterGuys/nucleus-style/pull/9) ([dfc2c17](https://github.com/TheSweaterGuys/nucleus-style/pull/22/commits/dfc2c175f1501811329176946c9b8cfb396bd0a5))
