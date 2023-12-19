import { useHistory } from 'react-router';

export function DesktopHomePage() {
  const history = useHistory();

  return (
    <>
      <meta charSet="utf-8" />
      <title>
        ▷ Find where and with whom to play Padel &amp; Tennis instantly ❘
        Sportytime
      </title>
      <meta name="apple-itunes-app" content="app-id=1242321076" />
      <meta
        name="description"
        content="Improve your racket game (Padel & Tennis) even if you have nowhere or with whom to play. Whether you’ve never played before, you are a beginner or an advanced player, Sportytime adapts to what you need and helps you find same level partners for your matches thanks to the player level estimation system.
Don’t know where or with whom to play? Join the largest Padel & Tennis community in the world. Create or join public or private matches, find courts anywhere on the planet and compete in tournaments organised by clubs around the world."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/assets/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/assets/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/assets/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/assets/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/assets/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/assets/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/assets/apple-touch-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/apple-touch-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/assets/safari-pinned-tab.svg"
        color="#0E2433"
      />
      <meta name="apple-mobile-web-app-title" content="Playtomic" />
      <meta name="application-name" content="Playtomic" />
      <meta name="msapplication-TileColor" content="#0E2433" />
      <meta
        name="msapplication-TileImage"
        content="/assets/mstile-144x144.png"
      />
      <meta name="theme-color" content="#0E2433" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@playtomic_app" />
      <meta property="og:url" content="https://playtomic.io" />
      <meta property="og:title" content="Playtomic" />
      <meta
        property="og:description"
        content="Improve your racket game (Padel & Tennis) even if you have nowhere or with whom to play. Whether you’ve never played before, you are a beginner or an advanced player, Playtomic adapts to what you need and helps you find same level partners for your matches thanks to the player level estimation system.
Don’t know where or with whom to play? Join the largest Padel & Tennis community in the world. Create or join public or private matches, find courts anywhere on the planet and compete in tournaments organised by clubs around the world."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/playtomic/image/upload/c_fill,f_auto,h_256,w_256/v1538389193/playtomic/web/banner-00.webp"
      />

      <link rel="manifest" href="/assets/manifest.json" />
      <link rel="shortcut icon" href="/assets/favicon.ico" />
      <link href="/static/css/main.6fc2f340.chunk.css" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        @import url(https://fonts.googleapis.com/css?family=Work+Sans:400,500,700);.button {\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: 0 16px;\n    border-radius: 32px;\n    border: 1px solid rgba(51,95,255,0.3);\n    background-color: transparent;\n    text-decoration: none;\n    cursor: pointer;\n    color: #335fff;\n    -webkit-transition: border-color .25s,opacity .25s;\n    transition: border-color .25s,opacity .25s\n}\n\n.button,.button>div {\n    justify-content: center;\n    align-items: center\n}\n\n.button>div {\n    display: flex;\n    line-height: 1;\n    height: 48px;\n    font-size: 16px;\n    white-space: nowrap\n}\n\n.button--secondary {\n    border: 1px solid #335fff;\n    color: #335fff\n}\n\n.button--danger {\n    color: #f66\n}\n\n.button--danger,.button:focus,.button:hover {\n    border-color: currentColor\n}\n\n.button--filled {\n    color: #fff;\n    border-color: transparent;\n    background-color: #0e2433\n}\n\n.button--disabled {\n    pointer-events: none;\n    opacity: .4\n}\n\n.button--filled.button--secondary,.button--filled.button--toggled {\n    color: #fff;\n    background-color: #335fff\n}\n\n.button--filled.button--secondary {\n    border-color: transparent\n}\n\n.button--filled.button--primary:focus,.button--filled.button--primary:hover {\n    border-color: transparent;\n    background-color: rgba(14,36,51,0.8)\n}\n\n.button--big>div {\n    height: 64px\n}\n\n.cookies {\n    z-index: 1000000;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition: max-height .3s ease-out;\n    transition: max-height .3s ease-out;\n    background-color: #f3f4f5;\n    will-change: max-height\n}\n\n.cookies--shown {\n    max-height: 100%\n}\n\n.cookies>div {\n    display: flex;\n    align-items: center;\n    line-height: 1.5;\n    padding: 16px 24px;\n    opacity: 0;\n    -webkit-transition: opacity .15s ease-out;\n    transition: opacity .15s ease-out\n}\n\n.cookies.cookies--shown>div {\n    opacity: 1\n}\n\n.cookies__text {\n    flex: 1 1;\n    text-align: left;\n    padding-right: 32px\n}\n\n.cookies__accept a {\n    border: 1px solid rgba(47,51,51,.2);\n    color: rgb(47,51,51)\n}\n\n.cookies__mobile {\n    position: static\n}\n\n.cookies__mobile>div {\n    flex-direction: column\n}\n\n.cookies__mobile .cookies__accept {\n    margin-top: 8px;\n    width: 100%\n}\n\n.cookies__mobile .cookies__text {\n    font-size: 14px;\n    line-height: 1.2;\n    padding-right: 0\n}\n\n.cookies__mobile .button>div {\n    height: 32px;\n    font-size: 14px\n}\n\n.icon {\n    display: block;\n    fill: currentColor\n}\n\n.icon--40x40 {\n    width: 40px;\n    height: 40px\n}\n\n.icon--24x24 {\n    width: 24px;\n    height: 24px\n}\n\n.icon--arrow {\n    width: 18px;\n    height: 13px\n}\n\n.icon--arrow-left {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg)\n}\n\n.icon--calendar {\n    width: 24px;\n    height: 24px\n}\n\n.icon--calendar path,.icon--calendar rect {\n    fill: none;\n    stroke: currentColor\n}\n\n.icon--cashPayment {\n    width: 24px;\n    height: 24px;\n    fill: currentColor\n}\n\n.icon--check {\n    width: 10px;\n    height: 8px\n}\n\n.icon--chevron {\n    width: 16px;\n    height: 10px\n}\n\n.icon--chevron-up {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg)\n}\n\n.icon--chevron-down {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg)\n}\n\n.icon--chevron-left {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg)\n}\n\n.icon--clock {\n    width: 12px;\n    height: 12px\n}\n\n.icon--cross {\n    width: 10px;\n    height: 10px\n}\n\n.icon--dollar {\n    width: 24px;\n    height: 24px;\n    fill: currentColor\n}\n\n.icon--dots {\n    width: 20px;\n    height: 4px\n}\n\n.icon--crossed-eye,.icon--eye {\n    width: 18px;\n    height: 18px\n}\n\n.icon--eye {\n    fill: transparent;\n    stroke: currentColor\n}\n\n.icon--facebook {\n    width: 18px;\n    height: 18px\n}\n\n.icon--failure {\n    width: 52px;\n    height: 52px\n}\n\n.icon--filter {\n    width: 24px;\n    height: 24px;\n    stroke: currentColor;\n    fill: none\n}\n\n.icon--gender {\n    width: 20px;\n    height: 20px\n}\n\n.icon--golf {\n    width: 15px;\n    height: 16px\n}\n\n.icon--google {\n    width: 18px;\n    height: 18px\n}\n\n.icon--hand-wave {\n    width: 16px;\n    height: 16px\n}\n\n.icon--inbox {\n    width: 56px;\n    height: 50px\n}\n\n.icon--level {\n    width: 20px;\n    height: 20px\n}\n\n.icon--magnifier {\n    height: 12px;\n    width: 12px\n}\n\n.icon--marker {\n    width: 9px;\n    height: 12px\n}\n\n.icon--menu {\n    width: 12px;\n    height: 12px\n}\n\n.icon--minus {\n    width: 12px;\n    height: 1.5px\n}\n\n.icon--paddle {\n    width: 16px;\n    height: 16px\n}\n\n.icon--paper-plane {\n    width: 14px;\n    height: 15px\n}\n\n.icon--plus {\n    width: 12px;\n    height: 12px\n}\n\n.icon--power {\n    width: 16px;\n    height: 18px\n}\n\n.icon--shield {\n    width: 10.5px;\n    height: 13.5px\n}\n\n.icon--shield path {\n    fill: none;\n    stroke-width: 1px;\n    stroke: currentColor\n}\n\n.icon-social-copy,.icon-social-facebook,.icon-social-mail,.icon-social-messenger,.icon-social-twitter,.icon-social-whatsapp {\n    width: 32px;\n    height: 32px\n}\n\n.icon-social-share {\n    width: 24px;\n    height: 24px\n}\n\n.icon--star {\n    width: 20px;\n    height: 20px\n}\n\n.icon--success {\n    width: 52px;\n    height: 52px\n}\n\n.icon--target {\n    width: 16px;\n    height: 16px\n}\n\n.icon--target circle,.icon--target path {\n    fill: none;\n    stroke: currentColor;\n    stroke-width: .5px\n}\n\n.icon--target path {\n    stroke-linejoin: miter\n}\n\n.icon--tennis {\n    width: 16px;\n    height: 16px\n}\n\n.icon--trash {\n    width: 18px;\n    height: 18px\n}\n\n.icon--trash path {\n    fill: currentColor;\n    stroke-width: 1px;\n    stroke: none\n}\n\n.icon--user {\n    width: 16px;\n    height: 18px\n}\n\n.icon--warning {\n    width: 24px;\n    height: 24px;\n    fill: none;\n    stroke: currentColor\n}\n\n.select {\n    display: block;\n    position: relative\n}\n\n.select select {\n    display: block;\n    cursor: pointer;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    font-size: 16px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0\n}\n\n.select>div {\n    display: flex;\n    align-items: center\n}\n\n.select>div>div {\n    white-space: nowrap\n}\n\n.select>div>div+div {\n    margin-left: 8px;\n    color: #335fff\n}\n\n.tab-menu {\n    display: flex;\n    align-items: center;\n    font-size: 16px\n}\n\n.tab-menu>a {\n    display: block;\n    padding: 1em 0;\n    line-height: 1em;\n    border-bottom: 2px solid transparent;\n    text-decoration: none;\n    opacity: .6;\n    -webkit-transition: all .15s;\n    transition: all .15s;\n    position: relative\n}\n\n.tab-menu>a+a {\n    margin-left: 2em\n}\n\n.tab-menu>a.tab-menu__link--active {\n    opacity: 1;\n    border-bottom-color: #335fff\n}\n\n.tab-menu>a.tab-menu__link--danger {\n    color: #f66\n}\n\n.tab-menu>a.tab-menu__link--danger:after {\n    content: "";\n    position: absolute;\n    top: 12px;\n    right: -4px;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: #f66\n}\n\n.spinner {\n    position: relative;\n    width: 3em\n}\n\n.spinner:before {\n    content: "";\n    display: block;\n    padding-top: 100%\n}\n\n.spinner svg {\n    -webkit-animation: spinner-rotate 2s linear infinite;\n    animation: spinner-rotate 2s linear infinite;\n    height: 100%;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto\n}\n\n.spinner circle {\n    stroke-dasharray: 1,200;\n    stroke-dashoffset: 0;\n    -webkit-animation: spinner-dash 1.5s ease-in-out infinite;\n    animation: spinner-dash 1.5s ease-in-out infinite;\n    stroke-linecap: round;\n    stroke: currentColor;\n    stroke-width: 6px;\n    stroke-miterlimit: 10;\n    fill: none\n}\n\n.button .spinner {\n    width: 25px;\n    margin-right: 8px\n}\n\n.button .spinner+* {\n    margin-left: 15px\n}\n\n@-webkit-keyframes spinner-rotate {\n    to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn)\n    }\n}\n\n@keyframes spinner-rotate {\n    to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn)\n    }\n}\n\n@-webkit-keyframes spinner-dash {\n    0% {\n        stroke-dasharray: 1,200;\n        stroke-dashoffset: 0\n    }\n\n    50% {\n        stroke-dasharray: 89,200;\n        stroke-dashoffset: -35\n    }\n\n    to {\n        stroke-dasharray: 89,200;\n        stroke-dashoffset: -124\n    }\n}\n\n@keyframes spinner-dash {\n    0% {\n        stroke-dasharray: 1,200;\n        stroke-dashoffset: 0\n    }\n\n    50% {\n        stroke-dasharray: 89,200;\n        stroke-dashoffset: -35\n    }\n\n    to {\n        stroke-dasharray: 89,200;\n        stroke-dashoffset: -124\n    }\n}\n\n.drop-down {\n    position: absolute;\n    min-width: 100%;\n    top: 100%;\n    right: 0;\n    border-radius: 0 0 4px 4px;\n    background-color: #fdfdfd;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s;\n    z-index: 1000\n}\n\n.drop-down--open {\n    visibility: visible;\n    opacity: 1\n}\n\n.avatar,.drop-down__container {\n    position: relative\n}\n\n.avatar {\n    display: flex;\n    align-items: center\n}\n\n.avatar__name {\n    border-bottom: 1px solid rgba(47,51,51,.2);\n    margin-right: 12px;\n    padding-bottom: 4px\n}\n\n.avatar__image,.avatar__name {\n    cursor: pointer;\n    -webkit-transition: border-color .25s;\n    transition: border-color .25s\n}\n\n.avatar__image {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    padding: 2px;\n    border: 1px solid rgba(47,51,51,.05);\n    overflow: hidden\n}\n\n.avatar__image:focus,.avatar__image:hover,.avatar__name:hover {\n    border-color: rgba(47,51,51,.6)\n}\n\n.avatar__image>div {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: rgba(51,95,255,0.1);\n    background-image: url(/static/media/placeholder.276c01a7.svg);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover\n}\n\n.avatar__drop {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    padding: 8px 16px;\n    border-radius: 0 0 4px 4px;\n    background-color: #fdfdfd;\n    box-shadow: 0 24px 32px 0 rgba(47,51,51,.05);\n    visibility: hidden;\n    opacity: 0;\n    z-index: 1000\n}\n\n.avatar__drop,.avatar__drop>a {\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.avatar__drop>a {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 48px;\n    font-size: 16px;\n    opacity: .6;\n    text-decoration: none;\n    cursor: pointer\n}\n\n.avatar__drop>a+a {\n    border-top: 1px solid rgba(47,51,51,.05)\n}\n\n.avatar__drop>a:hover {\n    opacity: 1\n}\n\n.avatar__drop>a>div {\n    white-space: nowrap;\n    margin-right: 24px\n}\n\n.avatar__drop--open {\n    visibility: visible;\n    opacity: 1\n}\n\n.account .spinner {\n    color: #335fff\n}\n\n.avatar__manager {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    line-height: 48px;\n    height: 48px;\n    border: solid rgba(47,51,51,.05);\n    border-width: 1px 0 0;\n    background-color: transparent;\n    font-size: 16px;\n    opacity: .6;\n    cursor: pointer;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.avatar__manager:hover {\n    opacity: 1\n}\n\n.avatar__manager svg {\n    margin-right: -13px\n}\n\n.modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    position: fixed;\n    z-index: 1000\n}\n\n.modal,.modal__background {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n}\n\n.modal__background {\n    position: absolute;\n    background-color: #292933;\n    opacity: .9;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.modal__win {\n    position: relative\n}\n\n.modal__content {\n    border-radius: 4px;\n    background-color: #fff;\n    max-height: calc(100vh - 96px);\n    overflow: auto\n}\n\n.modal__close {\n    display: block;\n    position: absolute;\n    padding: 0 0 4px 4px;\n    top: 0;\n    right: 0;\n    -webkit-transform: translate(100%,-100%);\n    transform: translate(100%,-100%);\n    color: #fff;\n    font-size: 1.6px;\n    pointer-events: none\n}\n\n.modal__close .icon {\n    width: 16px;\n    height: 16px\n}\n\n@media (max-width: 575px) {\n    .modal__close {\n        -webkit-transform:translateY(-100%);\n        transform: translateY(-100%)\n    }\n}\n\n.privacy__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding-bottom: 24px\n}\n\n.privacy__subtitle {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 16px\n}\n\n.privacy__option+.privacy__option {\n    margin-top: 32px\n}\n\n.privacy__checkbox {\n    margin-bottom: 8px\n}\n\n.privacy__text {\n    margin-left: 24px;\n    opacity: .6;\n    font-size: 16px;\n    line-height: 1.5\n}\n\n.privacy__textDelete {\n    margin-left: 0\n}\n\n.privacy__delete {\n    margin-top: 16px;\n    width: 182px\n}\n\n.privacy__buttons {\n    display: flex;\n    margin-top: 48px\n}\n\n.privacy__buttons>a+a {\n    margin-left: 16px\n}\n\n.privacy__modal {\n    padding: 48px;\n    max-width: 500px\n}\n\n.privacy__checkbox .spinner {\n    width: 16px;\n    height: 16px;\n    color: #335fff\n}\n\n@media (max-width: 600px) {\n    .privacy {\n        padding:24px\n    }\n\n    .privacy__title {\n        display: none\n    }\n\n    .privacy__subtitle {\n        font-size: 16px;\n        line-height: 1.19\n    }\n\n    .privacy__checkbox .check-box__tick {\n        width: 24px;\n        height: 24px;\n        margin-right: 16px\n    }\n\n    .privacy__checkbox .check-box__label {\n        flex: 1 1;\n        line-height: normal\n    }\n\n    .privacy__text {\n        font-size: 14px;\n        margin-left: 0\n    }\n\n    .privacy__textDelete {\n        margin-left: 0\n    }\n\n    .privacy__delete {\n        width: 100%\n    }\n\n    .privacy__buttons {\n        flex-direction: column;\n        margin-top: 32px\n    }\n\n    .privacy__buttons>a+a {\n        margin-left: 0;\n        margin-top: 16px\n    }\n}\n\n.check-box {\n    display: flex;\n    align-items: center;\n    cursor: pointer\n}\n\n.check-box__input {\n    display: none\n}\n\n.check-box__tick {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 8px;\n    width: 16px;\n    height: 16px;\n    border-radius: 4px;\n    color: #335fff;\n    border: 1px solid;\n    background-color: #fff;\n    -webkit-transition: background-color .15s;\n    transition: background-color .15s;\n    flex-shrink: 0\n}\n\n.check-box__tick .icon {\n    color: #fff\n}\n\n.check-box--checked .check-box__tick {\n    background-color: currentColor\n}\n\n.check-box--error,.check-box--error .check-box__tick {\n    color: #f66\n}\n\n.check-box__label {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n\n.profile__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding-bottom: 24px\n}\n\n.field {\n    min-height: 48px\n}\n\n.field__input {\n    position: relative\n}\n\n.field__label {\n    color: rgba(47,51,51,.4);\n    display: block;\n    font-size: 14px;\n    line-height: 16px;\n    height: 16px\n}\n\n.field__error {\n    font-size: 14px;\n    line-height: 1.2;\n    min-height: 1.2em;\n    margin-top: 4px\n}\n\n.field--error .field__label,.field__error {\n    color: #ee3663\n}\n\nform>.field+.field {\n    margin-top: 4px\n}\n\n.alert {\n    display: flex;\n    justify-content: space-between;\n    padding: 24px;\n    font-size: 16px;\n    line-height: 1.12;\n    border-radius: 4px;\n    background-color: rgba(250,202,100,.2)\n}\n\n.alert--error {\n    color: #fff;\n    background-color: #f66\n}\n\n.alert>a {\n    margin-left: 24px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    height: 1.4em\n}\n\n.alert>div {\n    line-height: 1.4\n}\n\n@-webkit-keyframes alert {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-24px);\n        transform: translateY(-24px)\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0)\n    }\n}\n\n@keyframes alert {\n    0% {\n        opacity: 0;\n        -webkit-transform: translateY(-24px);\n        transform: translateY(-24px)\n    }\n\n    to {\n        opacity: 1;\n        -webkit-transform: translate(0);\n        transform: translate(0)\n    }\n}\n\n.ui-text-input {\n    font-size: 16px;\n    font-weight: 400;\n    box-sizing: border-box;\n    outline: none;\n    --moz-appearance: none;\n    -webkit-appearance: none;\n    display: block;\n    width: 100%;\n    border: solid rgba(14,36,51,0.3);\n    border-width: 0 0 1px;\n    -webkit-transition: color .15s,border-color .15s,opacity .15s;\n    transition: color .15s,border-color .15s,opacity .15s;\n    height: 40px;\n    text-align: left;\n    background: transparent\n}\n\n.ui-text-input::-webkit-input-placeholder {\n    color: rgba(47,51,51,.4)\n}\n\n.ui-text-input::-moz-placeholder {\n    color: rgba(47,51,51,.4)\n}\n\n.ui-text-input:-ms-input-placeholder {\n    color: rgba(47,51,51,.4)\n}\n\n.ui-text-input::-ms-input-placeholder {\n    color: rgba(47,51,51,.4)\n}\n\n.ui-text-input::placeholder {\n    color: rgba(47,51,51,.4)\n}\n\n.ui-text-input[type=button] {\n    cursor: pointer\n}\n\n.ui-text-input:disabled {\n    opacity: .4\n}\n\n.ui-text-input:focus {\n    border-color: #335fff\n}\n\n.ui-text-input--invalid {\n    color: #ee3663;\n    border-color: rgba(238,54,99,.4)\n}\n\n.ui-text-input--invalid:focus {\n    border-color: #ee3663\n}\n\n.option-list__icon {\n    display: block;\n    width: 24px;\n    height: 24px;\n    margin-right: 8px\n}\n\n.option-list__icon * {\n    fill: currentColor\n}\n\n.option-list {\n    margin: 0;\n    padding: 0;\n    list-style: none\n}\n\n.option-list__option {\n    display: flex;\n    align-items: center;\n    padding: 10px 0;\n    cursor: pointer;\n    border-bottom: 1px solid #e7e9eb\n}\n\n.option-list__title {\n    color: #33302e;\n    font-size: 14px;\n    font-weight: 700;\n    margin-top: 16px;\n    margin-bottom: 8px\n}\n\n.option-list__option--active {\n    color: #335fff\n}\n\n.option-list__option--active .option-list__label {\n    font-weight: 700\n}\n\n.option-list__label {\n    font-weight: 400;\n    font-size: 14px\n}\n\n.suggest__main {\n    position: relative\n}\n\n.suggest__list {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    left: 0;\n    max-height: 0;\n    overflow-y: auto;\n    padding: 0 24px;\n    border-radius: 0 0 4px 4px;\n    background-color: #fafafa;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    visibility: hidden;\n    opacity: 0;\n    z-index: 10;\n    -webkit-transition: max-height .25s ease-out;\n    transition: max-height .25s ease-out\n}\n\n.suggest__list>* {\n    opacity: 0;\n    -webkit-transition: opacity .15s ease-out;\n    transition: opacity .15s ease-out\n}\n\n.suggest__open {\n    visibility: visible;\n    opacity: 1;\n    max-height: 250px;\n    will-change: max-height\n}\n\n.suggest__open>* {\n    opacity: 1\n}\n\n.phone-input__inputs {\n    display: flex\n}\n\n.phone-input__code {\n    position: relative;\n    width: 80px\n}\n\n.phone-input__code>svg {\n    position: absolute;\n    top: 14px;\n    right: 16px\n}\n\n.phone-input__number {\n    flex: 1 1\n}\n\n.phone-input__icon {\n    width: 12px;\n    height: 12px;\n    fill: #335fff\n}\n\n.phone-input--invalid {\n    fill: #f66\n}\n\n.phone-input--disabled {\n    opacity: .4\n}\n\n.edit-profile__alert {\n    margin-bottom: 42px\n}\n\n.m-edit-profile {\n    padding: 16px\n}\n\n.m-edit-profile .edit-profile__alert {\n    margin-bottom: 0\n}\n\n.m-edit-profile .buttons {\n    display: flex;\n    flex-direction: column;\n    margin-top: 40px\n}\n\n.m-edit-profile .buttons>.button+.button {\n    margin-left: 0;\n    margin-top: 16px\n}\n\n.mobile-modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #fff;\n    -webkit-transform: translateY(120%);\n    transform: translateY(120%);\n    -webkit-transition: -webkit-transform .15s ease-out;\n    transition: -webkit-transform .15s ease-out;\n    transition: transform .15s ease-out;\n    transition: transform .15s ease-out,-webkit-transform .15s ease-out;\n    z-index: 100;\n    overflow: scroll;\n    -webkit-overflow-scrolling: touch;\n    will-change: transform\n}\n\n.mobile-modal--shown {\n    -webkit-transform: translate(0);\n    transform: translate(0)\n}\n\n.mobile-modal__top {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: 16px\n}\n\n.mobile-modal__content {\n    min-height: calc(100vh - 64px)\n}\n\n.mobile-modal__title {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6\n}\n\n.mobile-modal__cross {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 16px;\n    opacity: .3;\n    cursor: pointer;\n    flex-shrink: 0\n}\n\n.mobile-modal__cross>svg {\n    height: 16px;\n    width: 16px\n}\n\n.popup {\n    max-width: 536px;\n    padding: 48px\n}\n\n.popup__title {\n    border-bottom: 1px solid rgba(47,51,51,.2);\n    padding-bottom: 24px\n}\n\n.popup__text {\n    font-size: 14px;\n    line-height: 1.43;\n    opacity: .6\n}\n\n.popup__text+.popup__text {\n    margin-top: 16px\n}\n\n.popup__buttons {\n    margin-top: 32px\n}\n\n.popup__buttons>.button+.button {\n    margin-top: 16px\n}\n\n.sign-buttons {\n    display: flex;\n    align-items: center\n}\n\n.sign-buttons .account {\n    flex-shrink: 0\n}\n\n.sign-buttons>.button {\n    border: none;\n    color: rgb(47,51,51);\n    padding-bottom: 4px\n}\n\n.sign-buttons.Static>.button {\n    color: rgb(255,255,255);\n    width: auto\n}\n\n.sign-buttons .button>div {\n    height: 26px;\n    font-weight: 400;\n    -webkit-transition: border-bottom .25s;\n    transition: border-bottom .25s;\n    border-bottom: 1px solid rgba(47,51,51,.2)\n}\n\n.sign-buttons.Static>.button>div {\n    border-bottom: 1px solid rgba(255,255,255,.2)\n}\n\n.sign-buttons>.button>div:hover {\n    border-bottom: 1px solid rgba(47,51,51,.6)\n}\n\n.sign-buttons.Static>.button>div:hover {\n    border-bottom: 1px solid rgba(255,255,255,.6)\n}\n\n.sign-buttons.Static>.button:last-child {\n    background-color: #ecff00;\n    margin-left: 16px;\n    -webkit-transition: background-color .25s;\n    transition: background-color .25s;\n    padding: 0 16px;\n    color: #0e2433\n}\n\n.sign-buttons.Static>.button:last-child:hover {\n    background-color: rgba(238,255,0.8)\n}\n\n.sign-buttons.Static>.button:last-child>div {\n    border-bottom: none;\n    height: 40px\n}\n\n.sign-buttons__modal {\n    width: 536px;\n    padding: 48px\n}\n\n.sign-buttons__title {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.25;\n    text-align: center;\n    margin: 0 0 8px\n}\n\n.sign-buttons__subtitle {\n    font-size: 16px;\n    line-height: 1.75;\n    margin: 0 0 16px;\n    opacity: .6;\n    text-align: center\n}\n\n.button--facebook {\n    color: #fff\n}\n\n.button--facebook,.button--facebook:hover {\n    background-color: rgb(47,78,139);\n    border-color: transparent\n}\n\n.button--facebook>div {\n    height: 40px\n}\n\n.button--facebook span {\n    font-weight: 500\n}\n\n.button--facebook .icon {\n    margin-left: -12px;\n    width: 36px;\n    height: 36px\n}\n\n.password-input {\n    position: relative\n}\n\n.password-input__toggle {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    border: none;\n    cursor: pointer;\n    margin: 0;\n    opacity: .6;\n    background: transparent\n}\n\n.input--error+.password-input__toggle {\n    color: #f66\n}\n\n.separator {\n    display: flex;\n    align-items: center;\n    min-height: 18px;\n    margin: 24px 0\n}\n\n.separator:after,.separator:before {\n    content: "";\n    display: block;\n    height: 1px;\n    flex: 1 1;\n    background-color: rgba(47,51,51,.1)\n}\n\n.separator>div {\n    margin: 0 24px;\n    color: rgba(47,51,51,.4)\n}\n\n.sign__title {\n    line-height: 1.25;\n    font-size: 24px;\n    font-weight: 700\n}\n\n.sign__title--checkout {\n    font-size: 36px;\n    font-weight: 700;\n    line-height: 1.25;\n    padding-bottom: 24px;\n    margin-bottom: 24px;\n    border-bottom: 1px solid rgba(47,51,51,.1)\n}\n\n.sign__subtitle {\n    font-size: 16px;\n    line-height: 1.75;\n    margin-top: 8px;\n    opacity: .6;\n    text-align: center\n}\n\n.sign__text {\n    font-size: 16px;\n    line-height: 1.5;\n    margin: 32px 0 24px;\n    opacity: .6\n}\n\n.sign__caption {\n    opacity: .4;\n    font-size: 14px;\n    line-height: 1.5;\n    text-align: center\n}\n\n.sign__icon {\n    display: flex;\n    justify-content: center\n}\n\n.sign__icon svg {\n    color: rgb(1,112,105);\n    margin-bottom: 24px;\n    width: 100%;\n    height: 60px\n}\n\n.sign__button {\n    margin-top: 40px\n}\n\n.sign__oauth {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-top: 24px;\n    grid-gap: 16px;\n    gap: 16px\n}\n\n.sign__oauth>* {\n    flex: 1 1 auto;\n    max-width: 300px;\n    overflow: hidden\n}\n\n.sign__form .field:last-child {\n    margin-bottom: 24px\n}\n\n.sign form button#sign-in__submit,.sign form button#sign-up__submit {\n    border: 1px solid rgba(47,51,51,.2);\n    color: rgb(47,51,51)\n}\n\n.sign form button#sign-in__submit:hover,.sign form button#sign-up__submit:hover {\n    border: 1px solid rgba(47,51,51,.05);\n    color: rgba(47,51,51,.6)\n}\n\n.sign form button#sign-up__submit {\n    margin-top: 16px\n}\n\n.sign__little-note {\n    font-size: 14px;\n    margin-top: 24px;\n    opacity: .4\n}\n\n.sign__bar {\n    background-color: rgba(47,51,51,.05);\n    color: rgba(47,51,51,.6);\n    font-size: 14px;\n    margin: 24px 0 -48px -48px;\n    width: calc(100% + 96px);\n    padding: 24px;\n    text-align: center\n}\n\n.sign__form>.sign-up__checkBox+.sign-up__checkBox {\n    margin-top: 16px\n}\n\n.sign-up__checkBox .check-box__tick {\n    width: 24px;\n    height: 24px;\n    margin-right: 16px\n}\n\n.sign-up__checkBox .check-box__label {\n    font-size: 14px;\n    font-weight: 700;\n    opacity: .9\n}\n\n.sign-up__checkBox .sign-up__checkText {\n    margin-left: 40px;\n    opacity: .6;\n    font-size: 14px\n}\n\n.sign .link--secondary {\n    opacity: 1;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.sign .link--secondary:hover {\n    opacity: .4\n}\n\n.snack {\n    position: fixed;\n    left: 50%;\n    max-width: calc(100vw - 48px);\n    box-sizing: content-box;\n    padding: 16px;\n    line-height: 1.4;\n    border-radius: 4px;\n    background-color: rgba(47,51,51,.9);\n    box-shadow: 0 8px 24px 0 rgba(34,34,34,.03);\n    color: hsla(0,0%,100%,.6);\n    opacity: 0;\n    bottom: 0;\n    -webkit-transform: translate(-50%,100%);\n    transform: translate(-50%,100%);\n    -webkit-animation: snack-in .25s forwards;\n    animation: snack-in .25s forwards;\n    visibility: hidden;\n    z-index: 10000\n}\n\n.snack--out,.snack:last-child {\n    visibility: visible\n}\n\n.snack--out {\n    -webkit-animation: snack-out .35s forwards;\n    animation: snack-out .35s forwards\n}\n\n.snack--error {\n    color: #f66;\n    background-color: #f4e7e5\n}\n\n@-webkit-keyframes snack-in {\n    0% {\n        opacity: 0;\n        bottom: 0;\n        -webkit-transform: translate(-50%,100%);\n        transform: translate(-50%,100%)\n    }\n\n    to {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%);\n        transform: translate(-50%)\n    }\n}\n\n@keyframes snack-in {\n    0% {\n        opacity: 0;\n        bottom: 0;\n        -webkit-transform: translate(-50%,100%);\n        transform: translate(-50%,100%)\n    }\n\n    to {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%);\n        transform: translate(-50%)\n    }\n}\n\n@-webkit-keyframes snack-out {\n    0% {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%);\n        transform: translate(-50%)\n    }\n\n    10% {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%,-10%);\n        transform: translate(-50%,-10%)\n    }\n\n    to {\n        opacity: 0;\n        bottom: 0;\n        -webkit-transform: translate(-50%,100%);\n        transform: translate(-50%,100%)\n    }\n}\n\n@keyframes snack-out {\n    0% {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%);\n        transform: translate(-50%)\n    }\n\n    10% {\n        opacity: 1;\n        bottom: 24px;\n        -webkit-transform: translate(-50%,-10%);\n        transform: translate(-50%,-10%)\n    }\n\n    to {\n        opacity: 0;\n        bottom: 0;\n        -webkit-transform: translate(-50%,100%);\n        transform: translate(-50%,100%)\n    }\n}\n\n.modal .oAuthSignUp {\n    width: 536px;\n    padding: 48px\n}\n\n.mobile-modal .oAuthSignUp {\n    padding: 16px\n}\n\n.mobile-modal .oAuthSignUp__title {\n    font-size: 24px;\n    margin-bottom: 16px\n}\n\n.oAuthSignUp__checkBox+.oAuthSignUp__checkBox {\n    margin-top: 16px\n}\n\n.oAuthSignUp__checkBox .check-box__tick {\n    width: 24px;\n    height: 24px;\n    margin-right: 16px\n}\n\n.oAuthSignUp .check-box__label {\n    font-size: 14px;\n    font-weight: 700;\n    opacity: .9\n}\n\n.oAuthSignUp__checkBox .oAuthSignUp__checkText {\n    font-size: 14px;\n    margin-left: 40px;\n    margin-top: 4px;\n    opacity: .6\n}\n\n.oAuthSignUp__form>button {\n    margin-top: 24px\n}\n\n.welcome {\n    padding: 48px;\n    width: 536px\n}\n\n.welcome__title {\n    font-size: 24px;\n    font-weight: 700;\n    letter-spacing: -.5px;\n    text-align: center;\n    margin: 0 0 24px\n}\n\n.welcome__description p {\n    font-size: 14px;\n    line-height: 1.5\n}\n\n.welcome__description p+p {\n    margin-top: 24px\n}\n\n.welcome__actions {\n    margin-top: 56px\n}\n\n.welcome .icon {\n    display: block;\n    margin: 0 auto 24px;\n    height: 64px;\n    width: 64px;\n    color: rgb(1,112,105)\n}\n\n.disclaimer {\n    color: #f66;\n    font-size: 12px\n}\n\n.radio-list__option {\n    display: flex;\n    align-items: center;\n    padding: 16px;\n    border-radius: 4px;\n    -webkit-transition: background-color .15s;\n    transition: background-color .15s;\n    cursor: pointer;\n    background-color: rgba(51,95,255,0.1)\n}\n\n.radio-list__option:hover {\n    background-color: #d6dfff\n}\n\n.radio-list__option+.radio-list__option {\n    margin-top: 8px\n}\n\n.radio-list__radio {\n    width: 16px;\n    height: 16px;\n    margin-right: 8px;\n    border-radius: 50%;\n    border: 1px solid #335fff;\n    background-color: #fff;\n    -webkit-transition: border-width .15s;\n    transition: border-width .15s\n}\n\n.radio-list__option--picked,.radio-list__option--picked:hover {\n    background-color: rgba(1,112,105,.2)\n}\n\n.radio-list__option--picked .radio-list__radio {\n    border-width: 4px\n}\n\n.radio-list__label {\n    flex: 1 1\n}\n\n.booking {\n    display: flex;\n    flex-direction: column\n}\n\n.booking__layers {\n    flex: 1 1;\n    overflow: auto\n}\n\n.booking--desktop {\n    width: 500px;\n    height: 590px;\n    padding: 32px\n}\n\n.booking--mobile {\n    padding: 0 16px 16px\n}\n\n.booking__header {\n    flex-shrink: 0\n}\n\n.booking__header .disclaimer {\n    margin-left: 32px\n}\n\n.booking-layer__body {\n    overflow: hidden;\n    max-height: 0;\n    -webkit-transition: max-height .15s;\n    transition: max-height .15s;\n    will-change: max-height\n}\n\n.booking-layer:last-child .booking-layer__body {\n    max-height: 100vh\n}\n\n.booking__header-text {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: 700;\n    font-size: 20px;\n    overflow: hidden;\n    line-height: 1.2\n}\n\n.booking__header-date {\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    margin-top: 4px\n}\n\n.booking__header-date>div:first-letter {\n    text-transform: uppercase\n}\n\n.booking__header .icon--calendar {\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n    opacity: .5\n}\n\n.booking-layer {\n    background-color: #fff\n}\n\n.booking-layer__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 56px;\n    padding: 0 8px;\n    font-size: 16px;\n    cursor: default;\n    border-bottom: 1px solid rgba(47,51,51,.1)\n}\n\n.booking__finalStep {\n    font-weight: 700\n}\n\na.booking-layer__header {\n    cursor: pointer\n}\n\n.booking-layer__header .icon {\n    color: #335fff;\n    height: 14px\n}\n\n.booking-layer__body>p {\n    line-height: 1.5;\n    opacity: .6;\n    padding: 16px 0 32px\n}\n\n.booking-layer__option-price {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.list-input .input {\n    cursor: pointer\n}\n\n.list-input .drop-down {\n    max-height: 300px;\n    overflow-y: auto;\n    padding: 0 0 24px\n}\n\n.list-input__option {\n    display: block;\n    padding: 0 24px;\n    font-size: 16px;\n    font-weight: 500;\n    cursor: pointer;\n    color: #000\n}\n\n.list-input__option:hover {\n    background-color: transparent;\n    color: #335fff\n}\n\n.list-input__option>div {\n    line-height: 24px;\n    padding: 10px 0;\n    border-bottom: 1px solid #f3f4f5\n}\n\n@font-face {\n    font-family: Arbeit;\n    src: url(/assets/fonts/woff/Arbeit-SemiBold.woff2) format("woff2"),url(/assets/fonts/woff/Arbeit-SemiBold.woff) format("woff"),url(/assets/fonts/otf/Arbeit-SemiBold.otf) format("opentype");\n    font-weight: 800\n}\n\n@font-face {\n    font-family: Arbeit;\n    src: url(/assets/fonts/woff/Arbeit-Regular.woff2) format("woff2"),url(/assets/fonts/woff/Arbeit-Regular.woff) format("woff"),url(/assets/fonts/otf/Arbeit-Regular.otf) format("opentype");\n    font-weight: 400\n}\n\n@font-face {\n    font-family: Arbeit;\n    src: url(/assets/fonts/woff/Arbeit-Light.woff2) format("woff2"),url(/assets/fonts/woff/Arbeit-Light.woff) format("woff"),url(/assets/fonts/otf/Arbeit-Light.otf) format("opentype");\n    font-weight: 300\n}\n\n.intercom-lightweight-app-launcher {\n    background-color: #335fff!important\n}\n\na,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    vertical-align: baseline\n}\n\narticle,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {\n    display: block\n}\n\nbody {\n    line-height: 1\n}\n\nol,ul {\n    list-style: none\n}\n\nblockquote,q {\n    quotes: none\n}\n\nblockquote:after,blockquote:before,q:after,q:before {\n    content: none\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0\n}\n\nhtml {\n    font-family: Arbeit,sans-serif;\n    color: #000;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    scroll-behavior: smooth\n}\n\n* {\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    font-family: inherit;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    outline: none;\n    color: inherit\n}\n\nb,strong {\n    font-weight: 700\n}\n\n.modal-title {\n    font-size: 24px;\n    letter-spacing: -.5px;\n    text-align: center;\n    margin: 0 0 32px\n}\n\n.link {\n    cursor: pointer;\n    padding: 4px 0;\n    border-width: 0 0 1px;\n    border-bottom-style: solid;\n    opacity: .4;\n    text-decoration: none;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s;\n    font-size: inherit;\n    background-color: transparent\n}\n\n.link:hover {\n    opacity: 1\n}\n\n.link--primary {\n    border-bottom-color: #0e2433\n}\n\n.link--secondary {\n    border-bottom-color: #cfd3d6\n}\n\n.input,.textarea {\n    display: block;\n    width: 100%;\n    font-size: 16px;\n    padding: 7px 0;\n    line-height: 1.8;\n    background-color: transparent;\n    border: 0;\n    border-bottom: 1px solid rgba(14,36,51,0.3);\n    -webkit-transition: border-color .25s;\n    transition: border-color .25s\n}\n\n.textarea {\n    min-height: 100px;\n    resize: vertical\n}\n\n.input--focus,.input:focus,.textarea--focus,.textarea:focus {\n    border-bottom-color: #335fff\n}\n\n.input--error,.input--error:focus,.textarea--error,.textarea--error:focus {\n    border-bottom-color: #f66\n}\n\n.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder {\n    color: rgba(1,1,1,.4);\n    font-size: 16px\n}\n\n.input::-moz-placeholder,.textarea::-moz-placeholder {\n    color: rgba(1,1,1,.4);\n    font-size: 16px\n}\n\n.input:-ms-input-placeholder,.textarea:-ms-input-placeholder {\n    color: rgba(1,1,1,.4);\n    font-size: 16px\n}\n\n.input::-ms-input-placeholder,.textarea::-ms-input-placeholder {\n    color: rgba(1,1,1,.4);\n    font-size: 16px\n}\n\n.input::placeholder,.textarea::placeholder {\n    color: rgba(1,1,1,.4);\n    font-size: 16px\n}\n\n.inertia-scroll {\n    -webkit-overflow-scrolling: touch;\n    -webkit-transform: translateZ(0);\n    overflow-y: scroll\n}\n\n.error {\n    color: #ee3663;\n    margin-bottom: 16px;\n    line-height: 1.4\n}\n\n.little-note {\n    font-size: 14px;\n    opacity: .4\n}\n\n.little-note,.text-center {\n    text-align: center\n}\n\n.big-text {\n    color: rgba(47,51,51,.6);\n    font-size: 20px;\n    margin-top: 32px;\n    line-height: 1.1\n}\n\n.medium-text {\n    line-height: 1.5;\n    opacity: .8\n}\n\n.big-title {\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.1\n}\n\n.medium-title {\n    font-weight: 600;\n    line-height: 1.4;\n    font-size: 32px;\n    margin-bottom: 32px\n}\n\n.small-title {\n    font-weight: 500;\n    line-height: 1.8;\n    font-size: 16px;\n    margin-bottom: 32px\n}\n\n.medium-subtitle {\n    font-size: 32px;\n    font-weight: 600;\n    line-height: 1.175;\n    margin-bottom: 24px\n}\n\n.buttons {\n    display: flex;\n    align-items: center;\n    margin-top: 48px\n}\n\n.buttons>.button+.button {\n    margin-left: 32px\n}\n\n.field+.buttons {\n    margin-top: 80px\n}\n\n.semi-bold {\n    font-weight: 600\n}\n\n.bold,.m-big-title {\n    font-weight: 700\n}\n\n.m-big-title {\n    font-size: 28px;\n    line-height: 1.07\n}\n\n.m-medium-title {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.25\n}\n\n.m-small-title {\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.19\n}\n\n.m-medium-subtitle {\n    font-size: 20px;\n    line-height: 1.5\n}\n\n.m-small-subtitle {\n    opacity: .8;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.75\n}\n\n.m-big-text {\n    font-size: 16px;\n    line-height: 1.5;\n    opacity: .6\n}\n\n.m-medium-text {\n    font-size: 14px\n}\n\n@media (min-width: 576px) {\n    .d-sm-none {\n        display:none!important\n    }\n\n    .d-sm-block {\n        display: block!important\n    }\n}\n\n@media (min-width: 768px) {\n    .d-md-none {\n        display:none!important\n    }\n\n    .d-md-block {\n        display: block!important\n    }\n}\n\n@media (min-width: 992px) {\n    .d-lg-none {\n        display:none!important\n    }\n\n    .d-lg-block {\n        display: block!important\n    }\n}\n\n@media (min-width: 1200px) {\n    .d-xl-none {\n        display:none!important\n    }\n\n    .d-xl-block {\n        display: block!important\n    }\n}\n\n.error-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    background-color: #fafafa\n}\n\n.error-page__button {\n    margin-top: 32px\n}\n\n.date-picker {\n    width: 280px\n}\n\n.date-picker__nav {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.date-picker__nav .button+.button {\n    margin-left: 16px\n}\n\n.date-picker__nav .button {\n    flex: 1 1;\n    border-radius: 2px\n}\n\n.date-picker__week {\n    display: flex;\n    padding-bottom: 8px;\n    margin-bottom: 4px;\n    font-size: 14px;\n    font-weight: 400;\n    color: rgba(1,1,1,.6);\n    border-bottom: 1px solid rgba(1,1,1,.1)\n}\n\n.date-picker__week>li {\n    flex: 1 1;\n    text-align: center;\n    text-transform: uppercase\n}\n\n.date-picker__days:after {\n    content: "";\n    display: block;\n    clear: both\n}\n\n.date-picker__days>li {\n    float: left;\n    width: 40px;\n    height: 40px\n}\n\n.date-picker__day,.date-picker__days>li {\n    display: flex;\n    justify-content: center;\n    align-items: center\n}\n\n.date-picker__day {\n    font-size: 16px;\n    width: 100%;\n    height: 100%;\n    border-radius: 40px;\n    color: rgb(47,51,51);\n    cursor: pointer\n}\n\n.date-picker__day--out {\n    color: rgba(51,95,255,0.4)\n}\n\n.date-picker__day--disabled {\n    color: rgba(1,1,1,.4);\n    pointer-events: none\n}\n\n.date-picker__day--picked {\n    color: #fff;\n    background-color: #335fff\n}\n\n.date-picker__month {\n    margin: 24px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-decoration: none\n}\n\n.date-picker__month-text {\n    text-transform: lowercase;\n    font-size: 16px;\n    font-weight: 700\n}\n\n.date-picker__month-text:first-letter {\n    text-transform: uppercase\n}\n\n.date-picker__month-arrow {\n    cursor: pointer\n}\n\n.date-picker__month-arrow .icon {\n    color: #335fff;\n    font-size: 1.4px\n}\n\n.date-input .input {\n    cursor: pointer\n}\n\n.date-input .drop-down {\n    padding: 24px;\n    border-radius: 0 0 4px 4px;\n    left: 50%;\n    right: auto;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%)\n}\n\n.bbq-search {\n    display: flex;\n    border-radius: 4px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n    background-color: #fff\n}\n\n.bbq-search__form {\n    flex: 1 1;\n    display: flex;\n    padding: 0 32px;\n    box-sizing: border-box\n}\n\n.bbq-search__form>div {\n    width: 176px;\n    padding-top: 6px\n}\n\n.bbq-search__form>div+div {\n    margin-left: 24px\n}\n\n.bbq-search__form .field {\n    margin-top: 1em\n}\n\n.bbq-search__form .field__error {\n    min-height: 1em\n}\n\n.bbq-search__form .input {\n    padding: 10px 0;\n    height: 50px\n}\n\n.bbq-search__info {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f4f5f5;\n    padding: 16px 32px\n}\n\n.bbq-search__info>div+div {\n    margin-left: 56px\n}\n\n.bbq-search__infoSubtitle {\n    font-size: 14px;\n    color: rgba(47,51,51,.4);\n    padding-bottom: 8px\n}\n\n.bbq-search__infoText {\n    font-size: 20px;\n    letter-spacing: -.6px;\n    color: rgba(47,51,51,.8);\n    font-weight: 500\n}\n\n.reservations-empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 80px\n}\n\n.reservations-empty__icon {\n    color: #335fff\n}\n\n.reservations-empty__title {\n    margin-top: 32px\n}\n\n.reservations-empty__body {\n    color: #566670;\n    line-height: 1.2\n}\n\n.reservations-empty__body p+p {\n    margin-top: 1em\n}\n\n.filter-input {\n    position: relative;\n    font-size: 16px\n}\n\n.filter-input__label {\n    display: flex;\n    align-items: center;\n    padding: 16px;\n    cursor: pointer\n}\n\n.filter-input__count {\n    opacity: .6;\n    flex: 1 1;\n    margin: 0 8px\n}\n\n.filter-input__label .icon {\n    color: #335fff\n}\n\n.filter-input__options {\n    position: absolute;\n    min-width: 100%;\n    max-height: 300px;\n    overflow-y: auto;\n    top: 100%;\n    left: 0;\n    border-radius: 0 0 4px 4px;\n    background-color: #fdfdfd;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s;\n    z-index: 100;\n    padding: 8px\n}\n\n.filter-input__options--open {\n    visibility: visible;\n    opacity: 1\n}\n\n.filter-input__option {\n    padding: 16px;\n    border-radius: 4px\n}\n\n.filter-input__option+.filter-input__option {\n    margin-top: 8px\n}\n\n.filter-input__buttons {\n    display: flex\n}\n\n.filter-input__buttons>a {\n    display: block;\n    flex: 1 1;\n    font-weight: 700;\n    line-height: 1;\n    padding-top: 24px;\n    padding-bottom: 24px;\n    cursor: pointer;\n    text-align: center\n}\n\n.filter-input__buttons--disabled {\n    opacity: .4;\n    pointer-events: none\n}\n\n.filter-input__button-apply {\n    color: #335fff;\n    padding-right: 8px\n}\n\n.filter-input__button-cancel {\n    color: #566670;\n    padding-left: 8px\n}\n\n.filter {\n    display: flex;\n    align-items: center;\n    border: solid rgba(1,1,1,.05);\n    border-width: 1px 0 0;\n    background-color: #fafafa\n}\n\n.filter>li+li {\n    border-left: 1px solid rgba(1,1,1,.05)\n}\n\n.filter>li {\n    min-width: 175px\n}\n\n.filter__resource_feature,.filter__resource_type {\n    width: 220px\n}\n\n.filter-reset {\n    display: flex;\n    align-items: center;\n    border: none;\n    background-color: transparent;\n    font-size: 16px;\n    height: 48px;\n    padding: 0 16px;\n    cursor: pointer\n}\n\n.filter-reset__icon {\n    margin-right: 8px;\n    padding: 4px;\n    border: 1px solid;\n    border-radius: 50%;\n    color: #335fff\n}\n\n.filter-reset__icon .icon {\n    width: 7px;\n    height: 7px\n}\n\n.filter-reset--disabled {\n    pointer-events: none;\n    opacity: .4\n}\n\n.bbq-activity__container {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n}\n\n.bbq-activity__modal .bbq-activity__row {\n    margin-bottom: 16px\n}\n\n.bbq-activity__modal .bbq-activity__row:last-child {\n    margin-bottom: 0\n}\n\n.bbq-activity__row>.bbq-activity__tag+.bbq-activity__tag {\n    margin-left: 8px\n}\n\n.bbq-activity__tag {\n    display: flex;\n    align-items: center;\n    background-color: rgb(47,51,51,.1);\n    border-radius: 16px;\n    padding: 4px 8px;\n    white-space: nowrap\n}\n\n.bbq-activity__tag svg {\n    margin-right: 4px;\n    flex-shrink: 0\n}\n\n.bbq-activity__modal .spinner {\n    color: #335fff;\n    margin-bottom: 16px;\n    width: 32px\n}\n\n.bbq-activity__players {\n    justify-content: space-around\n}\n\n.bbq-match__team {\n    display: flex\n}\n\n.bbq-match__level-bar svg {\n    display: block;\n    width: 57px;\n    -webkit-transform: rotate(-120deg);\n    transform: rotate(-120deg);\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%\n}\n\n.bbq-match__level-bar .level-colored,.bbq-match__level-bar .level-gray {\n    fill: none;\n    stroke-width: 4px;\n    stroke-linecap: round\n}\n\n.bbq-match__level-bar .level-colored {\n    stroke: url(#level-bar__gradient);\n    stroke-dasharray: 0,100;\n    -webkit-transition: stroke-dasharray .35s ease-out;\n    transition: stroke-dasharray .35s ease-out\n}\n\n.bbq-match__level-bar .level-gray {\n    stroke: rgba(47,51,51,.1);\n    stroke-dasharray: 66,100\n}\n\n.bbq-match__player {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative\n}\n\n.bbq-match__player+.bbq-match__player {\n    margin-left: 8px\n}\n\n.bbq-match__avatar {\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    border-radius: 50%;\n    width: 41px;\n    height: 41px;\n    position: absolute;\n    top: 8px;\n    left: 8px\n}\n\n.bbq-activity__players .vs {\n    padding: 8px\n}\n\n.bbq-match__level {\n    font-size: 12px;\n    width: 50px;\n    text-align: center;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap\n}\n\n.bbq-match__player-empty {\n    background-clip: padding-box;\n    background-color: rgb(250,250,250);\n    border: 1px dashed rgb(164,217,108);\n    border-radius: 50%;\n    margin: 8px 0;\n    width: 41px;\n    height: 41px\n}\n\n.bbq-hours {\n    left: 0;\n    width: 2em;\n    flex-shrink: 0;\n    border-right: 1px solid rgba(0,0,0,.1);\n    background-color: #fff;\n    box-shadow: 0 4px 16px 0 rgba(1,1,1,.2),0 2px 2px 0 rgba(0,0,0,.15)\n}\n\n.bbq-hours,.bbq-hours:before {\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 10\n}\n\n.bbq-hours:before {\n    top: 0;\n    display: block;\n    content: "";\n    height: 55px;\n    border-bottom: 1px solid rgba(0,0,0,.25);\n    box-shadow: 0 4px 8px 0 rgba(1,1,1,.04),0 2px 2px 0 rgba(0,0,0,.05);\n    background-color: inherit\n}\n\n.bbq-hours__hour,.bbq-hours__hours {\n    list-style: none;\n    padding: 0;\n    margin: 0\n}\n\n.bbq-hours__hour {\n    height: 1em;\n    background: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));\n    background: -webkit-linear-gradient(top,rgba(0,0,0,.1),rgba(0,0,0,.1) 100%);\n    background: linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.1));\n    background-repeat: no-repeat;\n    background-size: 100% 1px;\n    background-position: bottom\n}\n\n.bbq-hours__hour>div {\n    font-size: 14px;\n    padding: .25em;\n    text-align: right;\n    opacity: .4\n}\n\n.bbq-resources {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    height: 56px;\n    background-color: #fff;\n    padding: 0;\n    border-bottom: 1px solid rgba(0,0,0,.25);\n    box-shadow: 0 4px 8px 0 rgba(1,1,1,.04),0 2px 2px 0 rgba(0,0,0,.05);\n    z-index: 9\n}\n\n.bbq-resource,.bbq-resources {\n    list-style: none;\n    margin: 0;\n    display: flex\n}\n\n.bbq-resource {\n    flex-shrink: 0;\n    flex-grow: 1;\n    width: 0;\n    max-width: 350px;\n    padding: 0 8px;\n    box-sizing: border-box;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    font-size: 14px;\n    border-right: 1px solid rgba(0,0,0,.05)\n}\n\n.bbq-resource>div {\n    text-align: center;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 100%;\n    flex-shrink: 1\n}\n\n.bbq-resource__name {\n    margin-bottom: 4px;\n    font-weight: 700;\n    opacity: .8;\n    text-transform: uppercase\n}\n\n.bbq-resource__props {\n    opacity: .45\n}\n\n.bbq-resource__props,.bbq-resource__tooltip {\n    text-transform: lowercase\n}\n\n.bbq-resource__tooltip {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%,100%);\n    transform: translate(-50%,100%);\n    border-radius: 4px;\n    color: #2f3333;\n    background-color: currentColor;\n    padding: 12px;\n    text-align: center;\n    z-index: 10;\n    list-style: none;\n    margin: 0;\n    display: none;\n    box-sizing: border-box;\n    box-shadow: 0 8px 16px 0 rgba(50,50,50,.08),0 1px 3px 0 rgba(50,50,50,.08),0 0 0 1px rgba(50,50,50,.04);\n    pointer-events: none\n}\n\n.bbq-resource__tooltip:before {\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    width: 0;\n    height: 0;\n    border: 8px solid transparent;\n    border-bottom-color: currentcolor\n}\n\n:hover>.bbq-resource__tooltip {\n    display: block\n}\n\n.bbq-resource__tooltip>li {\n    color: #fff;\n    margin: 0;\n    padding: 0;\n    line-height: 1.2;\n    white-space: nowrap\n}\n\n.bbq-resource__tooltip>li+li {\n    margin-top: 8px\n}\n\n.bbq-activity {\n    position: absolute;\n    right: 0;\n    left: 0;\n    padding: 4px\n}\n\n.bbq-activity__content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    background-color: #6475dc;\n    border-radius: 4px;\n    color: #fff;\n    cursor: pointer;\n    height: 100%;\n    font-size: 14px;\n    padding: 4px;\n    overflow: hidden;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.bbq-activity__content:hover {\n    opacity: .8\n}\n\n.bbq-activity__row {\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.bbq-activity__content .bbq-activity__row {\n    pointer-events: none\n}\n\n.bbq-hole {\n    position: absolute;\n    right: 0;\n    left: 0;\n    padding: 4px;\n    cursor: not-allowed\n}\n\n.bbq-hole>div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    border-radius: 4px;\n    background-color: #f4f5f5;\n    color: rgba(47,51,51,.6);\n    font-size: 14px;\n    font-weight: 500;\n    overflow: hidden\n}\n\n.bbq-hole__text {\n    font-weight: 600;\n    text-align: right\n}\n\n.bbq-slot__hover {\n    position: absolute;\n    right: 0;\n    left: 0;\n    cursor: pointer\n}\n\n.bbq-slot__hover:hover+.bbq-slot__visual {\n    opacity: 1;\n    z-index: 1\n}\n\n.bbq-slot__visual {\n    position: absolute;\n    right: 0;\n    left: 0;\n    padding: 4px;\n    box-sizing: border-box;\n    opacity: 0;\n    pointer-events: none\n}\n\n.bbq-slot__visual>div {\n    box-sizing: border-box;\n    padding: 4px;\n    height: 100%;\n    line-height: 1;\n    font-size: 14px;\n    border-radius: 4px;\n    background-color: rgb(164,217,108);\n    color: #fff;\n    position: relative\n}\n\n.bbq-slot__top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.bbq-slot__word {\n    font-weight: 700\n}\n\n.bbq-slot__hour {\n    font-size: 12px\n}\n\n.bbq-slot__price {\n    font-size: 12px;\n    margin-top: 4px;\n    font-weight: 500\n}\n\n.bbq-past {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    background-color: rgba(47,51,51,.25);\n    border-bottom: 1px solid rgb(164,217,108)\n}\n\n.bbq-columns-wrap {\n    position: relative\n}\n\n.bbq-columns {\n    border-bottom: 1px solid rgba(0,0,0,.1)\n}\n\n.bbq-columns,.bbq-columns__column {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex\n}\n\n.bbq-columns__column {\n    flex-shrink: 0;\n    flex-grow: 1;\n    min-width: 120px;\n    max-width: 350px;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    background: -webkit-linear-gradient(bottom,rgba(0,0,0,.05),rgba(0,0,0,.05) 1px,#fff 0);\n    background: linear-gradient(0deg,rgba(0,0,0,.05),rgba(0,0,0,.05) 1px,#fff 0);\n    background-repeat: repeat-y;\n    background-size: 100% 1em;\n    background-position: 0 2em;\n    border-right: 1px solid rgba(0,0,0,.05)\n}\n\n.bbq-form {\n    display: block\n}\n\n.bbq-form__durations {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    max-height: 136px;\n    overflow-y: auto\n}\n\n.bbq-form__duration {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: rgba(1,112,105,.1);\n    border-radius: 4px;\n    line-height: 2.4;\n    cursor: pointer;\n    outline: none;\n    font-size: 14px\n}\n\n.bbq-form__duration+.bbq-form__duration {\n    margin-top: 8px\n}\n\n.bbq-form__button {\n    display: block;\n    margin: 8px 0 0;\n    padding: 0;\n    width: 100%;\n    background-color: #a4d96c;\n    color: #fff;\n    height: 40px;\n    line-height: 40px;\n    border: none;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    text-decoration: none\n}\n\n.bbq-form__picked {\n    background-color: rgba(1,112,105,.35)\n}\n\n.bbq-checkout {\n    position: absolute;\n    z-index: 100;\n    width: 100%;\n    border-radius: 4px;\n    background-color: rgba(55,58,245,.35);\n    -webkit-transition: height .25s ease-out;\n    transition: height .25s ease-out\n}\n\n.bbq-activity__modal,.bbq-checkout__modal {\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    padding: 16px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    background-color: #fff;\n    box-shadow: 0 8px 16px 0 rgba(50,50,50,.08),0 1px 3px 0 rgba(50,50,50,.08),0 0 0 1px rgba(50,50,50,.04);\n    z-index: 100;\n    -webkit-transform: translate(-50%,-4px);\n    transform: translate(-50%,-4px);\n    font-size: 16px\n}\n\n.bbq-checkout__modal {\n    width: 260px\n}\n\n.bbq-activity__modal {\n    display: flex;\n    flex-direction: column;\n    min-width: 260px\n}\n\n.bbq-activity__modal:after,.bbq-checkout__modal:after {\n    content: "";\n    border: 8px solid transparent;\n    border-top-color: #fff;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    pointer-events: none\n}\n\n.bbq-checkout__title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 8px;\n    font-size: 16px\n}\n\n.bbq-checkout__club {\n    font-weight: 600;\n    margin-right: 8px\n}\n\n.bbq-checkout__time {\n    padding-left: 1.2em;\n    background: transparent url(/static/media/clock.c270b6a5.svg) no-repeat 0;\n    background-size: auto 14px\n}\n\n.bbq-checkout__empty {\n    text-align: center;\n    font-weight: 600\n}\n\n.bbq-activity__close,.bbq-checkout__close {\n    margin: 0;\n    padding: 0;\n    border: none;\n    width: 24px;\n    height: 24px;\n    background-color: #fff;\n    outline: none;\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    font-size: 12px;\n    -webkit-transform: translate(25%,-25%);\n    transform: translate(25%,-25%);\n    border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 8px 16px 0 rgba(50,50,50,.08),0 1px 3px 0 rgba(50,50,50,.08),0 0 0 1px rgba(50,50,50,.04)\n}\n\n.bbq-layer__checkout,.bbq-layer__slot {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n}\n\n.bbq-layer__slot {\n    pointer-events: none;\n    overflow: hidden\n}\n\n.bbq-layer__slot>div {\n    position: absolute;\n    width: 2em;\n    height: 0;\n    background-color: rgba(1,112,105,.35);\n    border-radius: 4px;\n    -webkit-transition: height .25s ease-out;\n    transition: height .25s ease-out\n}\n\n.bbq {\n    position: relative;\n    font-size: 32px;\n    border-radius: 4px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n    background-color: #fff\n}\n\n.bbq__grid {\n    max-height: 560px;\n    overflow: scroll\n}\n\n.bbq__content {\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start\n}\n\n.bbq__availability {\n    flex-shrink: 0;\n    flex-grow: 1\n}\n\n.bbq-empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 560px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n    background-color: #fff;\n    font-size: 1rem\n}\n\n.bbq-button {\n    background-color: #fff;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 5px;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\n    color: rgb(1,112,105);\n    cursor: pointer;\n    position: absolute;\n    z-index: 10\n}\n\n.bbq-button__hide {\n    display: none\n}\n\n.bbq-button.left,.bbq-button.right {\n    top: 62px;\n    padding: 8px 4px\n}\n\n.bbq-button.right {\n    right: 6px\n}\n\n.bbq-button.down,.bbq-button.left {\n    left: 6px\n}\n\n.bbq-button.down,.bbq-button.up {\n    bottom: 6px;\n    padding: 4px\n}\n\n.bbq-button.up {\n    left: 34px\n}\n\n.bbq .filter {\n    background-color: #fff;\n    border-top: 1px solid rgba(0,0,0,.1);\n    border-bottom: 1px solid rgba(0,0,0,.1)\n}\n\n.bbq .filter__resource_feature,.bbq .filter__resource_size,.bbq .filter__resource_type {\n    width: 220px\n}\n\n.home__advantages {\n    display: flex;\n    margin-top: -80px;\n    border-top: 80px solid #fff;\n    position: relative;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1643907450/playtomic/web/info.png);\n    background-position: 50%;\n    background-size: cover;\n    background-repeat: no-repeat\n}\n\n.advantages__content {\n    width: 50%;\n    padding-left: 156px;\n    padding-right: 144px;\n    padding-bottom: 175px;\n    background-color: rgba(14,36,51,0.6)\n}\n\n.advantages__item {\n    margin-top: 48px\n}\n\n.advantages__title {\n    border-bottom: 1px solid #fff;\n    color: #fff;\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 1.175;\n    padding-bottom: 16px\n}\n\n.advantages__info {\n    color: #fff;\n    font-size: 16px;\n    line-height: 1.45;\n    margin-top: 24px\n}\n\n.advantages__image>img {\n    width: 240px;\n    margin-left: 96px\n}\n\n.advantages__seal {\n    width: 200px;\n    position: absolute;\n    bottom: -100px;\n    right: 140px\n}\n\n.logo {\n    display: block;\n    margin: 0;\n    width: 41px;\n    height: 43px\n}\n\n.logo--big {\n    font-size: 4px\n}\n\n.logo--mobile {\n    width: 24.6px;\n    height: 25.8px\n}\n\n.logo--large {\n    width: 174px\n}\n\n.logo--mobile.logo--large {\n    width: 104.4px\n}\n\n.logo__a {\n    fill: rgb(1,112,105)\n}\n\n.logo__b {\n    fill: rgb(164,217,108)\n}\n\n.logo__c {\n    fill: rgb(47,51,51)\n}\n\n.sticky {\n    box-shadow: 0 32px 48px 0 rgba(1,1,1,.05);\n    position: fixed;\n    top: 0;\n    z-index: 10;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%)\n}\n\n.home__banner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 720px;\n    width: 100%\n}\n\n.banner__images {\n    overflow: hidden;\n    height: 720px;\n    width: 100%;\n    position: relative\n}\n\n.banner__image {\n    top: 0;\n    left: 0;\n    position: absolute;\n    height: 780px;\n    width: 100%\n}\n\n.banner__image--animated {\n    -webkit-animation-name: imageAnimation;\n    animation-name: imageAnimation;\n    -webkit-animation-duration: 7s;\n    animation-duration: 7s;\n    -webkit-animation-timing-function: cubic-bezier(.04,.68,.18,.15),linear;\n    animation-timing-function: cubic-bezier(.04,.68,.18,.15),linear\n}\n\n.banner__image:before {\n    background: #0e2433;\n    opacity: .1;\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n}\n\n.banner__image img {\n    width: 100%;\n    height: 780px;\n    object-fit: cover\n}\n\n.banner__elements {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    width: 100%\n}\n\n.banner__header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 56px;\n    position: relative;\n    width: 100%;\n    padding: 24px 24px 0 32px;\n    z-index: 100\n}\n\n.banner__header .logo * {\n    fill: rgb(255,255,255)\n}\n\n.banner__header .account .avatar__name {\n    color: rgb(255,255,255);\n    border-bottom: 1px solid rgba(255,255,255,.2);\n    -webkit-transition: border-bottom .25s;\n    transition: border-bottom .25s\n}\n\n.banner__header .account .avatar__name:hover {\n    border-bottom: 1px solid rgba(255,255,255,.6)\n}\n\n.banner__header .account .avatar__image>div {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1536584655/playtomic/web/avatar-white.svg)\n}\n\n.banner__header .avatar__image:focus,.banner__header .avatar__image:hover {\n    border-color: rgba(255,255,255,.6)\n}\n\n.banner__header .account .avatar__drop {\n    color: rgb(47,51,51)\n}\n\n.banner__content {\n    color: rgb(255,255,255);\n    width: 1008px;\n    position: relative;\n    z-index: 10\n}\n\n.banner__content h1 {\n    font-size: 56px;\n    font-weight: 700;\n    line-height: 1.13;\n    letter-spacing: -.3px;\n    margin-bottom: 24px\n}\n\n.banner__content h2 {\n    font-size: 20px;\n    line-height: 1.5;\n    margin-bottom: 40px\n}\n\n.banner__content .search {\n    background-color: rgb(255,255,255);\n    border-radius: 4px;\n    color: #000;\n    padding: 24px\n}\n\n.banner__content .search .search__button {\n    flex: 1 1\n}\n\n.home__banner .sticky {\n    z-index: 10\n}\n\n.home__banner .sticky-search {\n    display: flex;\n    align-items: center;\n    background-color: rgb(255,255,255);\n    height: 80px;\n    justify-content: space-between;\n    padding: 0 16px 0 32px;\n    width: 100vw\n}\n\n.home__banner .sticky-search__search {\n    display: flex\n}\n\n.home__banner .sticky-search__search>*+* {\n    padding-left: 32px\n}\n\n@-webkit-keyframes imageAnimation {\n    0% {\n        opacity: .7;\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    25% {\n        opacity: 1\n    }\n\n    to {\n        -webkit-transform: translateY(-60px);\n        transform: translateY(-60px)\n    }\n}\n\n@keyframes imageAnimation {\n    0% {\n        opacity: .7;\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    25% {\n        opacity: 1\n    }\n\n    to {\n        -webkit-transform: translateY(-60px);\n        transform: translateY(-60px)\n    }\n}\n\n.home__description {\n    margin: 0 auto;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    width: 800px\n}\n\n.description__title {\n    color: #000;\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.13;\n    letter-spacing: -.3px;\n    margin-bottom: 64px;\n    width: 592px\n}\n\n.description__block h3 {\n    color: #000;\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 16px\n}\n\n.description__block p {\n    color: #566670;\n    font-size: 14px;\n    line-height: 1.71;\n    text-align: justify\n}\n\n.description__block>div>p {\n    margin-bottom: 16px\n}\n\n.description__block h4 {\n    color: #000;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 1.71\n}\n\n.description__block ul li {\n    display: flex;\n    margin-bottom: 16px\n}\n\ndiv[class^=description__element] {\n    background-color: #f3f4f5;\n    flex-shrink: 0;\n    background-repeat: no-repeat;\n    background-size: auto calc(100% + 5px)\n}\n\n.description__element1,.description__element2 {\n    background-position: -1%;\n    margin-left: 32px\n}\n\n.description__element3,.description__element4,.description__element5 {\n    margin-right: 32px;\n    background-position: 101%\n}\n\n.description__element1 {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1537347329/playtomic/web/1.svg);\n    width: 275px\n}\n\n.description__element2 {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1537347658/playtomic/web/2.svg);\n    width: 436px\n}\n\n.description__element3 {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1537347658/playtomic/web/3.svg);\n    width: 323px\n}\n\n.description__element4 {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1537347658/playtomic/web/4.svg);\n    width: 447px\n}\n\n.description__element5 {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1537347658/playtomic/web/5.svg);\n    background-position: 103%;\n    width: 323px\n}\n\n.home__description .slides {\n    position: relative\n}\n\n.home__description .slides__page {\n    padding-bottom: 0\n}\n\n.home__description .slides__arrows>.slides__arrow:first-child {\n    position: absolute;\n    top: 35%;\n    left: -80px\n}\n\n.home__description .slides__arrows>.slides__arrow:last-child {\n    position: absolute;\n    top: 35%;\n    left: 101%\n}\n\n.app_download_buttons {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.app_download_buttons a {\n    display: block;\n    flex: 1 1\n}\n\n.app_download_buttons a+a {\n    margin-left: 8px\n}\n\n.app_download_buttons img {\n    width: 100%;\n    height: 56px\n}\n\n@media (max-width: 576px) {\n    .app_download_buttons a+a {\n        margin-left:8px\n    }\n\n    .app_download_buttons img {\n        height: 36px\n    }\n}\n\n.home__downloadApp {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1643908291/playtomic/web/navy_bg.webp);\n    background-position: 100% 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 696px\n}\n\n.downloadApp__content {\n    display: flex;\n    justify-content: center\n}\n\n.downloadApp__image>img {\n    height: 750px;\n    -webkit-transform: translateY(-27px);\n    transform: translateY(-27px);\n    -webkit-filter: drop-shadow(8px 8px 24px rgba(47,51,51,.4));\n    filter: drop-shadow(8px 8px 24px rgba(47,51,51,.4))\n}\n\n.downloadApp__info {\n    padding-top: 56px\n}\n\n.downloadApp__title {\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.13;\n    letter-spacing: -.3px;\n    color: #fff;\n    width: 488px;\n    padding-left: 80px\n}\n\n.downloadApp__rating {\n    background-color: #d6dfff;\n    border-radius: 4px;\n    color: #0e2433;\n    font-size: 14px;\n    line-height: 1.71;\n    margin: 40px 0 0 80px;\n    padding: 24px;\n    width: 384px\n}\n\n.downloadApp__stars {\n    display: flex;\n    margin-top: 16px\n}\n\n.downloadApp__stars>.icon+.icon {\n    margin-left: 8px\n}\n\n.downloadApp__list {\n    color: rgba(255,255,255,.8);\n    font-size: 14px;\n    line-height: 1.71;\n    margin: 40px 0 40px 80px;\n    padding-left: 24px\n}\n\n.downloadApp__links {\n    display: flex;\n    justify-content: space-between;\n    margin-left: 80px;\n    width: 384px\n}\n\n.slides__page {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 32px;\n    padding-bottom: 40px\n}\n\n.slides__dots {\n    display: flex;\n    justify-content: center;\n    font-size: 8px;\n    margin-top: 40px\n}\n\n.slides__dot {\n    display: block;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    background-color: rgb(1,112,105);\n    opacity: .2;\n    cursor: pointer;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.slides__dot--current {\n    opacity: 1\n}\n\n.slides__dot+.slides__dot {\n    margin-left: 1em\n}\n\n.slides__arrow,.slides__arrows {\n    display: flex;\n    justify-content: center\n}\n\n.slides__arrow {\n    align-items: center;\n    background-color: #fff;\n    border-radius: 50%;\n    border: 1px solid #f0f0f0;\n    color: rgba(0,0,0,.2);\n    cursor: pointer;\n    height: 48px;\n    width: 48px;\n    -webkit-transition: border .25s,color .25s;\n    transition: border .25s,color .25s\n}\n\n.slides__arrow:hover {\n    color: #000\n}\n\n.slides__arrow+.slides__arrow {\n    margin-left: 16px\n}\n\n.slides__arrow .icon--chevron {\n    font-size: 1.5px\n}\n\n.home__highlight-clubs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #f3f4f5;\n    padding: 140px 112px 80px;\n    margin-top: -60px\n}\n\n.home__highlight-clubs>* {\n    max-width: 1216px\n}\n\n.highlight-clubs__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline\n}\n\n.highlight-clubs__subtitle {\n    margin-bottom: 48px\n}\n\n.highlight-clubs__show-more {\n    font-size: 14px;\n    line-height: 1.14\n}\n\n.highlight-clubs__show-more .link {\n    opacity: 1\n}\n\n.highlight-clubs__show-more .link--secondary {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    -webkit-transition: border-bottom .25s;\n    transition: border-bottom .25s\n}\n\n.highlight-clubs__show-more .link--secondary:hover {\n    border-bottom: 1px solid rgba(47,51,51,.7)\n}\n\n.highlight-clubs__madrid {\n    margin-bottom: 80px\n}\n\n.highlight-clubs__content {\n    display: flex\n}\n\n.highlight-clubs__content .slides .slides__pages>div {\n    max-width: 1216px\n}\n\n.highlight-clubs__content .card {\n    box-shadow: 0 6px 24px rgba(0,0,0,.15);\n    -webkit-transition: box-shadow .25s;\n    transition: box-shadow .25s\n}\n\n.highlight-clubs__content .card:hover {\n    box-shadow: 0 6px 24px rgba(0,0,0,.2)\n}\n\n.highlight-clubs__content .button {\n    border: 1px solid #335fff;\n    color: #335fff\n}\n\n.highlight-clubs__content .button:hover {\n    border: 1px solid rgba(51,95,255,0.8);\n    color: rgba(51,95,255,0.8)\n}\n\n.home__media {\n    padding: 100px 0 136px;\n    margin-top: -20px;\n    background-color: #f3f4f5\n}\n\n.home__media>* {\n    max-width: 1216px;\n    margin: 0 auto\n}\n\n.media__title {\n    color: #000;\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 1.14;\n    margin-bottom: 56px;\n    text-align: center\n}\n\n.media__news {\n    display: flex\n}\n\n.news2 {\n    display: block;\n    padding: 0 16px;\n    text-decoration: none\n}\n\n.news2 * {\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.news2:hover * {\n    opacity: 1\n}\n\n.news2__content {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.news2__logo {\n    margin-bottom: 40px\n}\n\n.news2__logo svg {\n    opacity: .4\n}\n\n.news2__title {\n    color: #566670;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 8px;\n    opacity: .32\n}\n\n.news2__text {\n    color: #566670;\n    font-size: 14px;\n    line-height: 1.71;\n    opacity: .16;\n    text-align: center\n}\n\n.home__metrics {\n    background-color: rgb(255,255,255);\n    display: none;\n    flex-direction: column;\n    padding: 80px 112px;\n    align-items: center;\n    position: relative\n}\n\n.metrics__content {\n    display: flex;\n    justify-content: space-between;\n    width: 100%\n}\n\n.metrics__data {\n    color: #000\n}\n\n.metrics__number {\n    font-size: 64px;\n    font-weight: 700;\n    letter-spacing: -.3px;\n    margin-bottom: 16px\n}\n\n.metrics__number,.metrics__text {\n    line-height: 1.175;\n    text-align: right\n}\n\n.metrics__text {\n    font-size: 22px;\n    color: #879199;\n    text-transform: lowercase\n}\n\n.home__ratings {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-bottom: 80px;\n    padding-top: 80px;\n    margin-top: -80px\n}\n\n.home__ratings>* {\n    max-width: 1216px\n}\n\n.ratings__title {\n    border-top: 1px solid #f3f4f5;\n    font-size: 48px;\n    font-weight: 700;\n    line-height: 1.14;\n    margin-bottom: 48px;\n    padding-top: 48px;\n    text-align: center;\n    width: 100%\n}\n\n.ratings__rating {\n    display: flex\n}\n\n.ratings__rating>.rating+.rating {\n    margin-left: 32px\n}\n\n.rating {\n    display: flex;\n    flex-direction: column;\n    background-color: #0e2433;\n    height: 264px;\n    padding: 32px;\n    width: 100%;\n    border-radius: 12px\n}\n\n.rating__header {\n    display: flex;\n    align-items: center;\n    margin-bottom: 24px\n}\n\n.rating__image {\n    background-position: 50%;\n    background-repeat: no-repeat;\n    border-radius: 50%;\n    background-size: 56px 56px;\n    width: 56px;\n    height: 56px\n}\n\n.rating__info {\n    display: flex;\n    flex-direction: column;\n    margin-left: 16px\n}\n\n.rating__title {\n    font-size: 20px;\n    font-weight: 600;\n    line-height: 1.6;\n    color: #fff\n}\n\n.rating__name {\n    font-size: 14px;\n    line-height: 1.71;\n    color: #fff\n}\n\n.rating__stars {\n    display: flex;\n    margin-bottom: 24px\n}\n\n.rating__stars>.icon+.icon {\n    margin-left: 8px\n}\n\n.rating__opinion {\n    font-size: 14px;\n    line-height: 1.71;\n    color: #fff\n}\n\n.home__steps {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/f_auto,q_20/v1536584658/playtomic/web/3steps.webp);\n    background-position: 50%;\n    background-size: cover;\n    background-repeat: no-repeat;\n    padding-top: 80px;\n    height: 856px;\n    position: relative\n}\n\n.home__steps:before {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: #000;\n    opacity: 1%;\n    content: "";\n    top: 0;\n    left: 0\n}\n\n.home__steps>div {\n    max-width: 1216px\n}\n\n.steps__title {\n    margin: 80px 0;\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.13;\n    letter-spacing: -.3px;\n    color: #fff;\n    text-align: center;\n    z-index: 1\n}\n\n.steps__content {\n    display: flex;\n    position: relative;\n    justify-content: center;\n    grid-gap: 34px;\n    gap: 34px\n}\n\n.step {\n    min-height: 200px;\n    background-color: #fff;\n    padding: 26px 24px;\n    border-radius: 12px;\n    border: 1px solid #cfd3d6\n}\n\n.step__circle {\n    background-color: #ecff00;\n    border-radius: 50%;\n    height: 21px;\n    width: 21px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 16px;\n    font-size: 14px;\n    font-weight: 600\n}\n\n.step__title {\n    font-weight: 800;\n    font-size: 20px;\n    line-height: 23.5px;\n    display: flex\n}\n\n.step__divider {\n    height: 1px;\n    background-color: #cfd3d6;\n    border-radius: 12px;\n    margin: 26.5px 0\n}\n\n.step__text {\n    font-size: 14px;\n    color: #879199;\n    line-height: 21px\n}\n\n.links__title {\n    font-weight: 500;\n    margin-bottom: 16px\n}\n\n.links a,.links p {\n    border: none;\n    line-height: 1.75;\n    text-decoration: none;\n    color: rgba(14,36,51,0.4)\n}\n\n.links a {\n    cursor: pointer\n}\n\n.links a .badge {\n    background-color: #335fff;\n    color: #fff;\n    padding: 2px 16px;\n    border-radius: 30px;\n    font-size: 12px\n}\n\n.links a:hover {\n    opacity: 1\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    padding: 112px 24px\n}\n\n.footer__links {\n    display: grid;\n    grid-template-columns: repeat(4,minmax(280px,1fr));\n    grid-gap: 24px;\n    font-size: 16px;\n    max-width: 1216px\n}\n\n.footer__links+.footer__links {\n    border-top: 1px solid rgba(0,0,0,.05);\n    margin-top: 56px;\n    padding-top: 56px\n}\n\n.footer__download-links {\n    margin-top: 36px;\n    margin-bottom: 40px;\n    width: 100%\n}\n\n.footer__download-links .links__title {\n    font-size: 14px\n}\n\n.footer__download {\n    display: flex;\n    margin-top: 8px\n}\n\n.footer__download>a {\n    flex: 1 1;\n    background-color: #000;\n    border-radius: 4px;\n    color: #fff;\n    height: 40px\n}\n\n.footer__download>a+a {\n    margin-left: 16px\n}\n\n.footer__icon {\n    background-repeat: no-repeat;\n    background-size: auto 24px;\n    background-position: 50%;\n    height: 100%\n}\n\n@media screen and (max-width: 1200px) {\n    .footer__links {\n        grid-template-columns:repeat(2,minmax(280px,1fr))\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .footer {\n        justify-content:flex-start;\n        padding: 64px 24px\n    }\n\n    .footer>div {\n        width: 100%\n    }\n\n    .footer__links {\n        display: block\n    }\n\n    .footer__links>li+li {\n        margin-top: 24px\n    }\n\n    .footer__links+.footer__links {\n        margin-top: 40px;\n        padding-top: 40px\n    }\n}\n\n.home__apparel {\n    background-color: #f3f4f5;\n    padding-bottom: 70px\n}\n\n.apparel__title {\n    text-align: center;\n    max-width: 1216px;\n    margin-bottom: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.apparel__title img {\n    margin-right: 8px;\n    height: 26px\n}\n\n.apparel__claim {\n    color: #0e2433;\n    font-size: 12px;\n    background-color: #ecff00;\n    padding: 2px 10px;\n    border-radius: 16px;\n    align-self: flex-start;\n    margin-left: 8px\n}\n\n.apparel__title__separator {\n    margin-left: 16px;\n    margin-right: 16px;\n    line-height: 1\n}\n\n.apparel__subtitle {\n    text-align: center;\n    max-width: 1216px;\n    color: #000;\n    font-size: 28px;\n    font-weight: 300;\n    margin: 0 auto 32px\n}\n\n.apparel__collections {\n    display: flex;\n    flex-wrap: nowrap;\n    grid-gap: 8px;\n    gap: 8px;\n    position: relative\n}\n\n.apparel__seal {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    top: 60px;\n    height: 90px;\n    z-index: 1\n}\n\n.apparel__collection {\n    height: 750px;\n    background-color: grey;\n    width: 50%;\n    background-size: cover;\n    background-position: 50%;\n    position: relative\n}\n\n.apparel__collection--men {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1653302442/playtomic/web/coleccion-hombre.jpg)\n}\n\n.apparel__collection--women {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1653302442/playtomic/web/coleccion-mujer.jpg)\n}\n\n.apparel__collection .button {\n    max-width: 314px;\n    text-align: center;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    position: absolute;\n    bottom: 100px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    font-weight: 300\n}\n\n.apparel__collection .button:hover {\n    color: #0e2433;\n    background-color: #fff;\n    opacity: 1;\n    border-color: #0e2433\n}\n\n.not-found-page {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: calc(100vh - 80px);\n    background-color: #fafafa\n}\n\n.not-found-page__button {\n    margin-top: 32px\n}\n\n.page-header .date-input .drop-down {\n    z-index: 1000\n}\n\n.page-header .search__container {\n    position: relative;\n    flex: 1 1;\n    margin-left: 24px\n}\n\n.button__container {\n    background-color: rgb(250,250,250);\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n    -webkit-transition: all .35s;\n    transition: all .35s;\n    z-index: 10;\n    overflow: hidden\n}\n\n.button__container--hide {\n    left: 100%;\n    opacity: 0\n}\n\n.button__container .button {\n    border: none;\n    border-radius: 0;\n    border-bottom: 1px solid #879199;\n    width: 190px\n}\n\n.button__container .button>div {\n    color: #879199;\n    justify-content: flex-start;\n    font-size: 16px;\n    font-weight: 400\n}\n\n.button__container .button>div>svg {\n    font-size: 1.7px;\n    margin-right: 8px\n}\n\n.search-page {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden\n}\n\n.search-page__header {\n    position: relative;\n    background-color: #fff;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.1),inset 0 -1px 0 0 rgba(47,51,51,.15);\n    z-index: 10\n}\n\n.search-page__header>div:first-child {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 80px;\n    padding: 16px;\n    box-sizing: border-box\n}\n\n.search-page__header>div:first-child>div {\n    display: flex;\n    align-items: center\n}\n\n.search-page__logo {\n    padding: 0 24px 0 8px\n}\n\n.search-page__body {\n    display: flex;\n    flex: 1 1\n}\n\n.search-page__results {\n    position: relative;\n    z-index: 5;\n    width: 60vw;\n    padding: 24px;\n    min-width: 800px;\n    box-shadow: 8px 0 24px 0 rgba(47,51,51,.1),inset -1px 0 0 0 rgba(47,51,51,.15);\n    height: calc(100vh - 132px)\n}\n\n.search-page__total {\n    margin-bottom: 38px\n}\n\n.search-page__cards:after {\n    content: "";\n    display: block;\n    clear: both\n}\n\n.search-page__cards>* {\n    float: left;\n    width: calc(50% - 12px)\n}\n\n.search-page__cards>:nth-child(2n) {\n    float: left;\n    margin-left: 24px\n}\n\n.search-page__cards>:nth-child(n+3) {\n    margin-top: 24px\n}\n\n.search-page__map {\n    flex: 1 1;\n    height: calc(100vh - 129px);\n    background-color: #e5e3df\n}\n\n.clubs-page,.page__content {\n    background-color: rgb(250,250,250)\n}\n\n.clubs-page {\n    margin: 96px auto 0;\n    max-width: 800px\n}\n\n.clubs-page__title {\n    font-size: 34px;\n    font-weight: 700;\n    margin-bottom: 40px\n}\n\n.clubs-page__letters {\n    background-color: rgb(250,250,250);\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 16px;\n    font-weight: 700;\n    padding: 24px 0;\n    position: -webkit-sticky;\n    position: sticky;\n    text-transform: uppercase;\n    top: 0;\n    z-index: 1;\n    letter-spacing: 1em;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    white-space: nowrap\n}\n\n.clubs-page__letters a {\n    text-decoration: none\n}\n\n.clubs-page__letters span {\n    opacity: .2\n}\n\n.clubs-page__group {\n    padding-top: 72px\n}\n\n.clubs-page__group:first-child {\n    margin-top: -8px\n}\n\n.clubs-page__tenant-letter h3 {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 16px;\n    font-weight: 700;\n    padding-bottom: 8px;\n    text-transform: uppercase\n}\n\n.clubs-page__tenants-link {\n    -webkit-columns: 2;\n    -moz-columns: 2;\n    column-count: 2;\n    font-size: 16px;\n    line-height: 1.75;\n    margin-top: 16px;\n    opacity: .6;\n    text-align: left\n}\n\n.clubs-page__tenants-link a {\n    display: block\n}\n\n.clubs-page__tenants-link a+a {\n    margin-top: 1em\n}\n\n@media only screen and (max-width: 600px) {\n    .clubs-page {\n        margin-top:0;\n        padding: 16px 16px 0\n    }\n\n    .clubs-page__tenants-link {\n        -webkit-columns: auto auto;\n        -moz-columns: auto auto;\n        columns: auto\n    }\n}\n\n.markdown {\n    line-height: 1.4\n}\n\n.markdown h2 {\n    font-weight: 700;\n    font-size: 36px;\n    margin-bottom: 24px\n}\n\n.markdown h3 {\n    font-weight: 700;\n    font-size: 20px;\n    margin-bottom: 8px\n}\n\n.markdown *+h3 {\n    margin-top: 32px\n}\n\n.markdown h4 {\n    font-weight: 700;\n    font-size: 16px;\n    margin-bottom: 6px\n}\n\n.markdown p {\n    line-height: 1.5\n}\n\n.markdown p+p {\n    margin-top: 16px\n}\n\n.markdown ul {\n    list-style: disc;\n    padding-left: 1em\n}\n\n.markdown li+li,.markdown ul {\n    margin-top: 1em\n}\n\n.anchors {\n    background-color: #fff;\n    border-bottom: 1px solid rgba(1,1,1,.05);\n    color: rgba(1,1,1,.8);\n    font-size: 14px;\n    font-weight: 500;\n    letter-spacing: -.5px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 100\n}\n\n.anchors>ul {\n    display: flex;\n    margin: 0 auto;\n    width: 1008px\n}\n\n.anchors>ul>li {\n    padding: 16px;\n    border-top: 2px solid transparent;\n    border-bottom: 2px solid transparent\n}\n\n.anchors>ul>li:hover {\n    border-bottom-color: rgba(51,95,255,0.1)\n}\n\n.anchors>ul>li>a {\n    text-decoration: none;\n    text-transform: uppercase\n}\n\n.anchors .selected {\n    border-bottom-color: #335fff\n}\n\n.tenant-cash-payment {\n    display: flex\n}\n\n.tenant-cash-payment__icon {\n    margin-right: 24px\n}\n\n.tenant-cash-payment__icon>svg {\n    width: 64px;\n    height: 64px;\n    color: rgb(1,112,105)\n}\n\n.tenant-cash-payment__title {\n    font-size: 14px;\n    font-weight: 700;\n    color: #33302e\n}\n\n.tenant-cash-payment__text {\n    color: #010101;\n    font-size: 14px;\n    line-height: 1.43;\n    margin-top: 8px;\n    opacity: .4;\n    width: 302px\n}\n\n.m-tenant-page .tenant-cash-payment__text {\n    width: auto\n}\n\n.facilities {\n    flex-wrap: wrap\n}\n\n.facilities,.facility {\n    display: flex;\n    align-items: center\n}\n\n.facility {\n    justify-content: flex-start;\n    opacity: .6;\n    width: 50%\n}\n\n.facility:nth-child(n+3) {\n    margin-top: 32px\n}\n\n.facility__icon {\n    width: 32px;\n    margin-right: 24px;\n    fill: currentColor\n}\n\n.tenant-page__map {\n    height: 430px\n}\n\n.tenant-page__address {\n    border-bottom: 1px solid rgba(47,51,51,.05);\n    margin-top: 16px;\n    padding: 16px 0\n}\n\n.tenant-page__address>div {\n    font-weight: 500\n}\n\n.tenant-page__transport {\n    margin-top: 16px;\n    opacity: .6\n}\n\n.tenant-page__transport>li {\n    display: flex;\n    align-items: center;\n    margin-top: 8px\n}\n\n.transport__icon {\n    fill: currentColor;\n    height: 20px;\n    margin-right: 8px\n}\n\n.tenant-schedule__day {\n    border-bottom: 1px solid rgba(47,51,51,.05);\n    display: flex;\n    justify-content: space-between;\n    padding: 8px 0\n}\n\n.tenant-schedule__day:last-child {\n    border-bottom: none;\n    display: block;\n    padding-top: 24px\n}\n\n.tenant-schedule__day:last-child>.tenant-schedule__dayOfWeek,.tenant-schedule__day:last-child>.tenant-schedule__hours {\n    display: inline-block\n}\n\n.tenant-schedule__day:last-child>.tenant-schedule__hours {\n    color: rgba(47,51,51,.4);\n    font-size: 14px;\n    margin-left: 0\n}\n\n.tenant-schedule__day:last-child>.tenant-schedule__hours:before {\n    content: "\\00a0"\n}\n\n.tenant-schedule__dayOfWeek {\n    color: rgba(47,51,51,.4);\n    font-size: 14px;\n    line-height: 2\n}\n\n.tenant-schedule__hours {\n    color: rgba(47,51,51,.8);\n    font-size: 16px;\n    line-height: 1.75\n}\n\n.tenant-pageBBQ .sports {\n    display: block\n}\n\n.tenant-pageQB .sports {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap\n}\n\n.tenant-pageBBQ .sport,.tenant-pageQB .sport {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    opacity: .6\n}\n\n.tenant-pageQB .sport {\n    width: 50%\n}\n\n.tenant-pageBBQ .sport+.sport,.tenant-pageQB .sport:nth-child(n+3) {\n    margin-top: 32px\n}\n\n.tenant-pageBBQ .sport__icon,.tenant-pageQB .sport__icon {\n    width: 32px;\n    margin-right: 24px;\n    fill: currentColor\n}\n\n.carousel {\n    max-width: 800px\n}\n\n.carousel__images {\n    position: relative;\n    height: 400px;\n    overflow: hidden;\n    border-radius: 4px;\n    background-color: rgba(47,51,51,.1)\n}\n\n.carousel__image {\n    position: absolute;\n    display: block;\n    object-fit: cover;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n\n.carousel__image--first {\n    z-index: 2;\n    opacity: 1\n}\n\n.carousel__image--current:not(.carousel__image--first) {\n    z-index: 2;\n    -webkit-animation: carousel-show .15s ease-out;\n    animation: carousel-show .15s ease-out\n}\n\n.carousel__image--before {\n    z-index: 1;\n    opacity: 1\n}\n\n.carousel__controls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 24px\n}\n\n.carousel__controls>*+* {\n    margin-left: 48px\n}\n\n.carousel__progress {\n    width: 280px;\n    background-color: rgba(47,51,51,.1)\n}\n\n.carousel__progress>div {\n    height: 1px;\n    background-color: rgb(47,51,51);\n    -webkit-transition: width .15s ease-out;\n    transition: width .15s ease-out\n}\n\n.carousel__numbers {\n    font-size: 14px;\n    font-weight: 500\n}\n\n.carousel__numbers>span {\n    opacity: .4\n}\n\n.carousel__arrows {\n    display: flex\n}\n\n.carousel__arrows>button {\n    display: block;\n    padding: 8px;\n    border: none;\n    background-color: transparent;\n    margin: 0;\n    cursor: pointer\n}\n\n.carousel__arrows--disabled {\n    pointer-events: none;\n    opacity: .4\n}\n\n@-webkit-keyframes carousel-show {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes carousel-show {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n.breadcrumbs {\n    font-size: 14px\n}\n\n.breadcrumbs>li {\n    display: inline\n}\n\n.breadcrumbs>li+li:before {\n    content: "/";\n    color: rgba(47,51,51,.4);\n    margin: 0 8px\n}\n\n.breadcrumbs>li>a {\n    border-bottom: 1px solid rgba(47,51,51,.4);\n    padding: 4px 0;\n    opacity: 1;\n    color: #879199\n}\n\n.breadcrumbs>li>a:hover {\n    color: #000\n}\n\n.breadcrumbs>li:last-child {\n    pointer-events: none\n}\n\n.breadcrumbs>li:last-child>a {\n    border-bottom: none\n}\n\n.tenant-page__title {\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.1;\n    margin-top: 24px;\n    color: #fff\n}\n\n.tenant-page__subtitle {\n    font-weight: 500;\n    padding-bottom: 24px;\n    margin-bottom: 24px;\n    border-bottom: 1px solid rgba(47,51,51,.05);\n    color: rgba(47,51,51,.8)\n}\n\n.tenant-page__header {\n    position: relative;\n    padding: 32px 120px;\n    color: #fff;\n    background-color: rgb(1,112,105);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between\n}\n\n.tenant-page__header:before {\n    content: "";\n    display: block;\n    position: absolute;\n    border-radius: inherit;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(16%,rgba(0,0,0,.16)),to(#000));\n    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.16) 16%,#000);\n    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.16) 16%,#000)\n}\n\n.tenant-page__header>* {\n    position: relative\n}\n\n.tenant-page__header__address {\n    font-size: 16px;\n    font-weight: 400;\n    opacity: .6\n}\n\n.tenant-page__anchors .anchors {\n    padding: 0 120px\n}\n\n.tenant-page__anchors .anchors>ul {\n    width: auto\n}\n\n.tenant-page__breadcrumbs {\n    padding: 32px 120px 16px\n}\n\n.tenant-page__disclaimer {\n    padding: 0 120px\n}\n\n.tenant-page__side {\n    width: 384px;\n    margin-left: 32px;\n    z-index: 3\n}\n\n.tenant-content {\n    max-width: 1440px;\n    margin: 0 auto\n}\n\n.tenant-content,.tenant-qb__content {\n    display: flex;\n    justify-content: space-between;\n    padding: 0 120px\n}\n\n.tenant-page__main {\n    max-width: 1000px;\n    margin-top: 24px\n}\n\n.tenant-page__main .markdown {\n    text-align: justify\n}\n\n.tenant-content__left-side {\n    flex: 1 1;\n    padding-top: 64px;\n    margin-top: -32px\n}\n\n.tenant-content__left-side .markdown {\n    text-align: justify\n}\n\n.tenant-content__right-side {\n    padding-top: 64px;\n    margin-top: -32px;\n    min-width: 280px;\n    margin-left: 160px\n}\n\n.tenant-content__right-side>div+div {\n    padding-top: 64px\n}\n\n.tenant-content__left-side>div+div,.tenant-page__main>div+div {\n    padding-top: 32px\n}\n\n.tenant-page__bbq {\n    padding: 32px 120px\n}\n\n.tenant-page__book .button {\n    color: #fff;\n    border-color: currentColor\n}\n\n.tenant-page--bg {\n    background-color: #fafafa\n}\n\n@media screen and (max-width: 1200px) {\n    .tenant-content {\n        display:block\n    }\n\n    .tenant-content__right-side {\n        min-width: 280px;\n        margin-left: 0\n    }\n}\n\n.tenant-availability {\n    width: 384px;\n    padding: 32px;\n    margin: 16px 0 48px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n    position: -webkit-sticky;\n    position: sticky;\n    top: 64px\n}\n\n.tenant-availability__title {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.2\n}\n\n.tenant-availability__text {\n    margin: 24px 0;\n    font-size: 14px;\n    line-height: 1.71;\n    opacity: .8\n}\n\n.tenant-availability__loading {\n    display: flex;\n    align-items: center;\n    height: 48px;\n    color: rgba(47,51,51,.6);\n    letter-spacing: -.5px\n}\n\n.tenant-availability__loading .spinner {\n    color: #335fff;\n    width: 1.2em;\n    margin-right: 8px\n}\n\n.tenant-availability__message {\n    margin-bottom: 16px\n}\n\n.tenant-availability .tenant-cash-payment {\n    bottom: -112px;\n    left: 8px;\n    position: absolute\n}\n\n.page-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: rgb(250,250,250);\n    height: 80px;\n    padding: 16px 16px 16px 32px\n}\n\n.page__body {\n    display: flex;\n    flex-direction: column;\n    min-height: calc(100vh - 80px)\n}\n\n.page__content {\n    flex: 1 1;\n    display: flex;\n    flex-direction: column\n}\n\n.debts {\n    padding: 16px\n}\n\n.debts__title {\n    display: none\n}\n\n.debts__total {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start\n}\n\n.debts__debt-text {\n    margin-bottom: 8px\n}\n\n.debts__caption {\n    color: #f66;\n    font-size: 34px;\n    font-weight: 700\n}\n\n.debts__total>.button {\n    flex-basis: 20%\n}\n\n.debts__history {\n    margin-top: 24px\n}\n\n.debts__history-text {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    color: rgba(47,51,51,.6);\n    padding-bottom: 8px\n}\n\n.debts__month {\n    font-size: 14px;\n    font-weight: 700;\n    margin-top: 24px\n}\n\n.debt__element {\n    display: flex;\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding: 16px 0\n}\n\n.debt__date {\n    margin-right: 16px;\n    text-align: center\n}\n\n.debt__day {\n    font-size: 28px;\n    font-weight: 700\n}\n\n.debt__weekday {\n    font-size: 14px;\n    opacity: .8;\n    text-align: center\n}\n\n.debt__info {\n    font-size: 14px;\n    font-weight: 500;\n    padding: 4px;\n    width: 100%\n}\n\n.debt__description,.debt__info {\n    display: flex;\n    justify-content: space-between\n}\n\n.debt__description {\n    flex-direction: column\n}\n\n.debt__amount {\n    color: #f66\n}\n\n.debts-empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 40px\n}\n\n.debts-empty__title {\n    font-size: 22px;\n    font-weight: 700;\n    margin-top: 16px;\n    margin-bottom: 8px\n}\n\n.debts-empty__icon {\n    color: #335fff\n}\n\n.debts-empty__icon svg {\n    width: 36px;\n    height: 36px\n}\n\n.debts-empty__text {\n    color: #566670;\n    line-height: 1.2\n}\n\n@media only screen and (min-width: 576px) {\n    .debts {\n        padding:0\n    }\n\n    .debts__title {\n        display: block;\n        border-bottom: 1px solid rgba(47,51,51,.1);\n        padding-bottom: 24px\n    }\n\n    .debts__history {\n        margin-top: 36px\n    }\n}\n\n.m-account-page__menu {\n    border-top: 1px solid rgb(47,51,51,.1)\n}\n\n.m-account-page__menu .select.input {\n    padding: 16px;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.05)\n}\n\n.m-account-page__menu .select>div {\n    justify-content: space-between\n}\n\n.m-account-page__content {\n    background-color: rgb(250,250,250)\n}\n\n.m-checkout-login,.mobile-modal__content {\n    min-height: inherit\n}\n\n.m-checkout-login>.sign,.mobile-modal__content>.sign {\n    display: flex;\n    flex-direction: column;\n    min-height: calc(100vh - 64px)\n}\n\n.m-checkout-login>.sign>*,.mobile-modal__content>.sign>* {\n    padding: 0 16px\n}\n\n.m-checkout-login>.sign>.sign__bar,.mobile-modal__content>.sign>.sign__bar {\n    margin: 24px 0 0;\n    padding: 24px 16px;\n    width: auto;\n    flex: 1 1\n}\n\n.checkout-page-details {\n    font-size: 14px;\n    line-height: 1.2;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%\n}\n\n.checkout-page-details__image {\n    height: 141px;\n    background-size: cover;\n    background-color: rgba(47,51,51,.4);\n    background-position: 50%;\n    background-repeat: no-repeat;\n    border-radius: 4px\n}\n\n.checkout-page-details header {\n    margin-bottom: 24px\n}\n\n.checkout-page-details header>* {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n}\n\n.checkout-page-details header>*+* {\n    margin-top: 8px\n}\n\n.checkout-page-details h1 {\n    font-size: 16px\n}\n\n.checkout-page-details h2 {\n    font-size: 16px;\n    opacity: .4\n}\n\n.checkout-page-details footer,.checkout-page-details li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.checkout-page-details li {\n    line-height: 1.8;\n    padding: 8px 0\n}\n\n.checkout-page-details li+li {\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout-page-details footer>div+div,.checkout-page-details li>div+div {\n    text-align: right\n}\n\n.checkout-page-details h3,.checkout-page-details li>div+div {\n    opacity: .4\n}\n\n.checkout-page-details__taxes {\n    margin-left: 8px;\n    opacity: .4\n}\n\n.checkout-page-details__price {\n    display: flex;\n    flex-direction: column;\n    margin-top: 8px\n}\n\n.checkout-page-details__price>div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.checkout-page-details__price>div+div {\n    margin-top: 8px\n}\n\n.checkout-page-details__total-price {\n    font-size: 28px;\n    font-weight: 700;\n    text-align: right;\n    color: rgb(1,112,105)\n}\n\n.checkout-page-details__total-price--discount {\n    color: #f66\n}\n\n.checkout-page__cancelation-policy {\n    margin-top: 24px\n}\n\n.checkout-page__cancelation-policy .m-small-title {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.5\n}\n\n.checkout-page__cancelation-policy>div+div {\n    margin-top: 16px\n}\n\n.checkout-page__cancelation-policy .spinner circle {\n    color: #335fff\n}\n\n.checkout-page__disclaimer {\n    margin-top: 8px\n}\n\n.m-checkout-page {\n    padding: 16px\n}\n\n.m-checkout-page__club {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 8px\n}\n\n.m-checkout-page__info {\n    opacity: .6;\n    margin-bottom: 24px\n}\n\n.m-checkout-page__info>div+div {\n    margin-top: 8px\n}\n\n.m-checkout-page__button {\n    margin-top: 24px\n}\n\n.m-checkout-error {\n    padding: 0 16px 16px\n}\n\n.checkout-loading {\n    display: flex;\n    align-items: center;\n    height: 1.4em;\n    color: rgba(47,51,51,.6);\n    letter-spacing: -.5px;\n    padding: 16px\n}\n\n.checkout-loading .spinner {\n    color: #335fff;\n    width: 1.2em;\n    margin-right: 8px\n}\n\n.m-home__advantages {\n    background-color: #f3f4f5;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 200px;\n    position: relative\n}\n\n.m-home__advantages>div+div {\n    padding: 0 16px\n}\n\n.m-advantages__image img {\n    width: 100%;\n    height: 360px;\n    object-fit: cover\n}\n\n.m-advantages__title {\n    color: #000;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 1.28;\n    margin-top: 16px\n}\n\n.m-advantages__item {\n    border-radius: 4px;\n    margin-top: 16px;\n    padding: 16px\n}\n\n.m-advantages__subtitle {\n    color: #000;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.5;\n    padding-bottom: 16px\n}\n\n.m-advantages__subtitle:after {\n    content: "";\n    display: block;\n    width: 60px;\n    height: 1px;\n    background-color: #566670;\n    margin-top: 22px\n}\n\n.m-advantages__text {\n    color: #566670;\n    font-size: 16px;\n    line-height: 1.5;\n    padding-top: 16px\n}\n\n.m-advantages__seal {\n    width: 176px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translate(-50%,50%);\n    transform: translate(-50%,50%)\n}\n\n.m-home__banner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgb(250,250,250);\n    padding: 40px 16px 0;\n    text-align: center\n}\n\n.m-banner__title {\n    margin-bottom: 16px\n}\n\n.m-banner__search {\n    margin-top: 48px;\n    width: 100%\n}\n\n.m-banner__search .button {\n    background-color: #fff;\n    border: none;\n    box-shadow: 0 8px 32px 0 rgba(47,51,51,.05);\n    color: rgba(47,51,51,.6);\n    font-weight: 400\n}\n\n.m-banner__search .button>div {\n    font-weight: 400;\n    position: relative\n}\n\n.m-banner__search .button svg {\n    width: 20px;\n    height: 20px;\n    margin-right: 16px;\n    position: absolute;\n    left: 0\n}\n\n.m-home__description {\n    padding: 168px 16px 40px\n}\n\n.m-home__description h3 {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 16px\n}\n\n.m-home__description h4 {\n    font-weight: 700;\n    margin-bottom: 8px\n}\n\n.m-home__description p {\n    font-size: 16px;\n    color: #566670;\n    line-height: 1.5;\n    margin-bottom: 16px\n}\n\n.m-home__description .button {\n    margin-top: 16px\n}\n\n.m-home__description .button>div {\n    font-weight: 400\n}\n\n.m-description__text {\n    max-height: 490px;\n    overflow: hidden;\n    -webkit-transition: max-height 1.5s;\n    transition: max-height 1.5s\n}\n\n.m-description__text--opened {\n    max-height: 5000px\n}\n\n.m-home__downloadApp {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1643908291/playtomic/web/navy_bg.webp);\n    background-position: 100% 0;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding: 48px 16px 0;\n    margin-bottom: 100px\n}\n\n.m-downloadApp__title {\n    color: #fff;\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 1.28\n}\n\n.m-downloadApp__rating {\n    background-color: rgba(47,51,51,.2);\n    border-radius: 4px;\n    color: rgba(255,255,255,.8);\n    font-size: 16px;\n    line-height: 1.5;\n    margin-top: 48px;\n    padding: 16px 16px 32px\n}\n\n.m-downloadApp__stars {\n    display: flex;\n    margin-top: 16px\n}\n\n.m-downloadApp__stars>.icon+.icon {\n    margin-left: 8px\n}\n\n.m-downloadApp__list {\n    margin-top: 32px;\n    padding: 0 16px\n}\n\n.m-downloadApp__list>ul>li {\n    color: rgba(255,255,255,.8);\n    font-size: 14px;\n    line-height: 1.5;\n    margin-top: 4px\n}\n\n.m-downloadApp__links {\n    display: flex;\n    margin-top: 40px;\n    margin-bottom: 56px\n}\n\n.m-downloadApp__image {\n    display: flex;\n    justify-content: center;\n    -webkit-transform: translateY(100px);\n    transform: translateY(100px)\n}\n\n.m-downloadApp__image img {\n    height: 588px\n}\n\n.m-home__highlight-clubs {\n    background-color: #f3f4f5;\n    padding: 48px 0 40px\n}\n\n.m-highlight-clubs__title {\n    padding: 0 16px 16px;\n    font-size: 16px;\n    font-weight: 700;\n    line-height: 1.25\n}\n\n.m-highlight-clubs__content .slides__dots {\n    margin-top: 8px\n}\n\n.m-highlight-clubs__content .slides__dot {\n    background-color: #0e2433\n}\n\n.m-highlight-clubs__card {\n    padding: 0 16px;\n    max-width: 100%\n}\n\n.m-highlight-clubs__barcelona {\n    padding-top: 40px\n}\n\n.m-highlight-clubs__content .button {\n    border: 1px solid #335fff;\n    color: #335fff\n}\n\n.m-home__media {\n    background-color: #f3f4f5;\n    padding: 40px 0\n}\n\n.m-media__title {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 40px;\n    text-align: center\n}\n\n.m-media__news .news2__logo svg,.m-media__news .news2__title {\n    opacity: 1\n}\n\n.m-media__news .news2__text {\n    opacity: .8\n}\n\n.m-media__news .slides__dots {\n    margin-top: 0\n}\n\n.m-media__news .slides__dot {\n    background-color: #0e2433\n}\n\n.m-home__metrics {\n    padding: 32px 16px 0;\n    display: none\n}\n\n.m-metrics__content {\n    background-color: #fff;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-column-gap: 16px;\n    grid-row-gap: 24px;\n    padding-bottom: 24px\n}\n\n.m-metrics__number {\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 1.28;\n    text-align: center;\n    color: #000\n}\n\n.m-metrics__text {\n    font-size: 16px;\n    line-height: 1.5;\n    opacity: .6;\n    text-align: center;\n    text-transform: lowercase;\n    color: #879199\n}\n\n.m-home__ratings {\n    padding: 24px 16px 32px\n}\n\n.m-ratings__title {\n    color: #000;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6;\n    margin-bottom: 24px\n}\n\n.m-ratings__rating .slides__dots {\n    margin-top: 0\n}\n\n.m-ratings__rating .slides__dot {\n    background-color: #0e2433\n}\n\n.m-home__steps {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1644226768/playtomic/web/3steps-m.webp);\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-color: #f3f4f5;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 40px\n}\n\n.m-home__steps>div+div {\n    padding: 0 16px\n}\n\n.m-steps__title {\n    color: #000;\n    font-size: 28px;\n    font-weight: 500;\n    line-height: 1.175;\n    margin-top: 66px;\n    padding: 0 32px;\n    width: 200px;\n    margin-bottom: 328px\n}\n\n.m-steps__item {\n    background-color: #fff;\n    border: 1px solid #cfd3d6;\n    border-radius: 4px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.03);\n    margin-top: 24px;\n    padding: 16px;\n    min-height: 200px;\n    box-shadow: 0 2px 20px rgba(0,0,0,.2)\n}\n\n.m-steps__subtitle {\n    border-bottom: 1px solid #cfd3d6;\n    color: #000;\n    padding-bottom: 16px;\n    font-weight: 800;\n    font-size: 20px;\n    line-height: 23.5px;\n    display: flex\n}\n\n.m-steps__text {\n    color: #879199;\n    font-size: 14px;\n    line-height: 1.175;\n    padding-top: 16px\n}\n\n.m-steps__circle {\n    background-color: #ecff00;\n    border-radius: 50%;\n    height: 21px;\n    width: 21px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 16px;\n    font-size: 14px;\n    font-weight: 600\n}\n\n.m-home__apparel {\n    background-color: #f3f4f5;\n    padding-bottom: 70px\n}\n\n.m-apparel__title {\n    text-align: center;\n    padding: 0 16px;\n    margin: 0 auto 16px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n    color: #000\n}\n\n.m-apparel__title img {\n    height: 16px\n}\n\n.m-apparel__claim {\n    color: #0e2433;\n    font-size: 12px;\n    background-color: #ecff00;\n    padding: 2px 10px;\n    border-radius: 16px;\n    align-self: flex-start;\n    margin-left: 8px\n}\n\n.m-apparel__title__separator {\n    margin-left: 16px;\n    margin-right: 16px\n}\n\n.m-apparel__subtitle {\n    text-align: center;\n    color: #000;\n    font-size: 18px;\n    font-weight: 300;\n    margin: 0 auto 32px\n}\n\n.m-apparel__collections {\n    display: flex;\n    flex-wrap: wrap;\n    grid-gap: 5px;\n    gap: 5px;\n    position: relative\n}\n\n.m-apparel__collection {\n    height: 360px;\n    background-color: grey;\n    width: 100%;\n    background-size: cover;\n    background-position: 50%;\n    position: relative\n}\n\n.m-apparel__collection--men {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1653302442/playtomic/web/coleccion-hombre.jpg)\n}\n\n.m-apparel__collection--women {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1653302442/q_auto,f_auto/playtomic/web/coleccion-mujer.jpg)\n}\n\n.m-apparel__seal {\n    position: absolute;\n    right: 45px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    top: 50%;\n    height: 60px;\n    z-index: 1\n}\n\n.m-apparel__collection .button {\n    max-width: 314px;\n    text-align: center;\n    padding-top: 16px;\n    padding-bottom: 16px;\n    position: absolute;\n    bottom: 54px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    font-weight: 300;\n    font-size: 18px\n}\n\n.m-apparel__collection .button:hover {\n    color: #0e2433;\n    background-color: #fff;\n    opacity: 1;\n    border-color: #0e2433\n}\n\n.m-not-found-page {\n    background-color: rgb(250,250,250);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 24px 16px;\n    text-align: center\n}\n\n.m-not-found-page__cta,.m-not-found-page__text {\n    margin-top: 24px\n}\n\n.m-not-found-page__cta__buttons {\n    display: grid;\n    grid-gap: 16px;\n    gap: 16px;\n    grid-template-columns: repeat(1,minmax(0,1fr));\n    margin-bottom: 16px\n}\n\n.mobile-menu__icon .icon--menu {\n    width: 24px;\n    height: 24px;\n    color: #000\n}\n\n.mobile-menu__drawer {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 16px;\n    background-color: #fff;\n    z-index: 100;\n    -webkit-transform: translate(100%);\n    transform: translate(100%);\n    -webkit-transition: -webkit-transform .15s;\n    transition: -webkit-transform .15s;\n    transition: transform .15s;\n    transition: transform .15s,-webkit-transform .15s;\n    will-change: transform\n}\n\n.mobile-menu__drawer--open {\n    -webkit-transform: translate(0);\n    transform: translate(0)\n}\n\n.mobile-menu__top {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 16px\n}\n\n.mobile-menu__cross {\n    opacity: .3\n}\n\n.mobile-menu__cross>svg {\n    height: 16px;\n    width: 16px\n}\n\n.mobile-menu__links+.mobile-menu__links {\n    margin-top: 16px;\n    padding-top: 16px;\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.mobile-menu__link,.mobile-menu__links a {\n    display: flex;\n    align-items: center\n}\n\n.mobile-menu__links a {\n    height: 40px;\n    margin-left: 16px;\n    text-decoration: none\n}\n\n.mobile-menu__links form {\n    margin-left: 16px\n}\n\n.mobile-menu__links form button {\n    background-color: transparent;\n    border: none;\n    opacity: 1\n}\n\n.mobile-avatar {\n    display: flex;\n    align-items: center;\n    margin-bottom: 24px\n}\n\n.mobile-avatar .avatar__image {\n    border: none;\n    padding: 0\n}\n\n.mobile-avatar__name {\n    margin-left: 16px;\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.6\n}\n\n.m-page-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px;\n    background-color: rgb(250,250,250)\n}\n\n.m-page-header__white {\n    background-color: #fff\n}\n\n.m-search-page__header {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    background-color: #fff;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.1),inset 0 -1px 0 0 rgba(47,51,51,.15);\n    z-index: 10\n}\n\n.m-search-page__body {\n    display: flex;\n    flex: 1 1\n}\n\n.m-search-page__results {\n    padding: 16px;\n    width: 100%\n}\n\n.m-search-page__total {\n    margin-bottom: 24px\n}\n\n.m-search-page__cards>* {\n    margin-top: 24px\n}\n\n.web-or-app__stay {\n    display: block;\n    width: 100%;\n    height: 1.4em;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 1.4;\n    padding: 0;\n    margin: 24px 0 0;\n    border: none;\n    background: transparent\n}\n\n.m-facilities {\n    margin-top: 20px\n}\n\n.m-facility {\n    align-items: center;\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 24px;\n    opacity: .6\n}\n\n.m-facility__icon {\n    width: 32px;\n    margin-right: 24px;\n    fill: currentColor\n}\n\n.m-tenant-page__map {\n    height: 200px\n}\n\n.m-tenant-page__address {\n    padding: 16px 0;\n    border-bottom: 1px solid rgba(47,51,51,.05)\n}\n\n.m-tenant-page__address>div {\n    font-weight: 500\n}\n\n.m-tenant-page__transport {\n    opacity: .6;\n    margin-top: 16px\n}\n\n.m-tenant-page__transport>li {\n    display: flex;\n    align-items: center;\n    margin-top: 8px\n}\n\n.m-transport__icon {\n    height: 20px;\n    margin-right: 8px;\n    fill: currentColor\n}\n\n.m-sports {\n    margin-top: 20px\n}\n\n.m-sport {\n    align-items: center;\n    display: flex;\n    justify-content: flex-start;\n    margin-top: 24px;\n    opacity: .6\n}\n\n.m-sport__icon {\n    width: 32px;\n    margin-right: 24px;\n    fill: currentColor\n}\n\n.m-tenant-availability__button {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    padding: 16px;\n    background-color: #fff;\n    box-shadow: 0 0 24px 0 rgba(1,1,1,.1);\n    z-index: 10\n}\n\n.m-tenant-availability,.m-tenant-unbookable {\n    padding: 16px\n}\n\n.m-tenant-unbookable__button {\n    margin-top: 32px\n}\n\n.m-tenant-page__header {\n    position: relative;\n    padding: 64px 0;\n    color: #fff;\n    background-color: rgb(1,112,105);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover\n}\n\n.m-tenant-page__header:before {\n    content: "";\n    display: block;\n    position: absolute;\n    border-radius: inherit;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(16%,rgba(0,0,0,.16)),to(#000));\n    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.16) 16%,#000);\n    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.16) 16%,#000)\n}\n\n.m-tenant-page__header>* {\n    position: relative\n}\n\n.m-tenant-page__header-content {\n    padding: 0 16px\n}\n\n.m-tenant-page__header-title {\n    margin-top: 24px\n}\n\n.m-tenant-page__header__seo {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.4\n}\n\n.m-tenant-page__header__address {\n    font-size: 14px;\n    font-weight: 500;\n    opacity: .8;\n    margin-top: 8px\n}\n\n.m-tenant-page__content {\n    padding: 48px 16px\n}\n\n.m-tenant-page__main .breadcrumbs {\n    margin-top: -24px;\n    font-size: 16px\n}\n\n.m-tenant-page__main>*+* {\n    margin-top: 24px\n}\n\n.m-tenant-page__subtitle {\n    padding-bottom: 24px;\n    border-bottom: 1px solid rgba(47,51,51,.05)\n}\n\n.m-tenant-page__image {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50%;\n    height: 200px;\n    border-radius: 4px\n}\n\n.m-page.tenant-page .m-footer {\n    padding-bottom: 112px\n}\n\n.offers__switch {\n    margin-top: 32px\n}\n\n.offers__switch .spinner {\n    color: #335fff;\n    margin-left: 16px;\n    width: 32px\n}\n\n.offers-title {\n    display: flex\n}\n\n.offers-title.medium-title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    margin-bottom: 0;\n    padding-bottom: 24px\n}\n\n.offers-list {\n    margin-bottom: 32px\n}\n\n.offers-list__text {\n    line-height: 24px;\n    padding: 24px 0;\n    opacity: .4\n}\n\n.offers-item,.offers-item>a {\n    display: flex\n}\n\n.offers-item {\n    padding: 16px\n}\n\n.offers-item:last-child>a {\n    padding-bottom: 0\n}\n\n.offers-item+.offers-item {\n    border-top: 1px solid rgba(1,1,1,.05)\n}\n\n.offers-item__info {\n    cursor: pointer\n}\n\n.offers-item__money {\n    margin-right: 16px;\n    text-align: center;\n    font-size: 24px;\n    font-weight: 700\n}\n\n.offers-item__money>div:first-child {\n    margin-bottom: 4px\n}\n\n.offers-item__money>div:last-child {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.14\n}\n\n.offers-item__name {\n    opacity: .9;\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 8px\n}\n\n.offers-item__expiry {\n    opacity: .4;\n    font-size: 14px\n}\n\n.offers-item__button {\n    margin-left: auto\n}\n\n.offers-add-vouchers>.button>div {\n    justify-content: unset\n}\n\n.offers-add-vouchers__icon {\n    padding-left: 8px\n}\n\n.offers-add-vouchers__text {\n    width: 100%;\n    text-align: center\n}\n\n.offers-empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 40px\n}\n\n.offers-empty__title.medium-title {\n    font-size: 22px;\n    margin-top: 16px;\n    margin-bottom: 8px\n}\n\n.offers-empty__icon {\n    color: #335fff\n}\n\n.offers-empty__icon svg {\n    width: 36px;\n    height: 36px\n}\n\n.offers-empty__body {\n    color: #566670;\n    line-height: 1.2\n}\n\n.offers-empty__body p+p {\n    margin-top: 1em\n}\n\n.offer-movements {\n    min-width: 536px;\n    padding: 48px\n}\n\n.offer-movements .spinner {\n    color: #335fff\n}\n\n.offer-movements__offer-tenant.medium-title {\n    margin-bottom: 24px\n}\n\n.offer-movements__offer-title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 14px;\n    font-weight: 700;\n    padding-bottom: 16px\n}\n\n.offer-movements__balance {\n    display: flex;\n    justify-content: space-between;\n    margin-top: 8px\n}\n\n.offer-movements__balance .button {\n    width: auto\n}\n\n.offer-movements__qty {\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.25\n}\n\n.offer-movements__balance-title {\n    font-size: 14px;\n    opacity: .6\n}\n\n.movements__month-date {\n    font-size: 14px;\n    font-weight: 700;\n    margin-top: 24px\n}\n\n.movement {\n    display: flex;\n    padding: 16px 0;\n    border-bottom: 1px solid rgba(47,51,51,.1)\n}\n\n.movements .movement:last-child {\n    border-bottom: none\n}\n\n.movement-date {\n    margin-right: 16px\n}\n\n.movement-date__day {\n    font-size: 28px;\n    font-weight: 700\n}\n\n.movement-date__weekday {\n    font-size: 14px;\n    opacity: .8;\n    text-align: center\n}\n\n.movement-description {\n    font-size: 14px;\n    font-weight: 500;\n    margin-right: 8px;\n    padding: 4px 0;\n    max-width: 500px\n}\n\n.movement-description>div {\n    margin-bottom: 4px\n}\n\n.movement-balance {\n    margin-left: auto;\n    padding: 4px 0\n}\n\n.movement-units {\n    color: #f66\n}\n\n.movement-units.movement-units__positive {\n    color: rgb(1,112,105)\n}\n\n.movement-units.movement-units__positive:before {\n    content: "+"\n}\n\n.addvouchermodal {\n    width: 592px;\n    padding: 48px\n}\n\n.addvouchermodal__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 34px;\n    font-weight: 700;\n    line-height: 1.25;\n    padding-bottom: 24px\n}\n\n.addvouchermodal__detail {\n    width: 60%\n}\n\n.addvouchermodal__detail>* {\n    margin-bottom: 12px\n}\n\n.addvouchermodal__button {\n    margin-top: 32px\n}\n\n.addvouchermodal__text {\n    line-height: 24px;\n    opacity: .6;\n    padding-bottom: 8px;\n    padding-top: 16px\n}\n\n.addvouchermodal__input {\n    padding-top: 40px;\n    padding-bottom: 24px\n}\n\n.about-security {\n    display: flex;\n    align-items: center;\n    opacity: .4;\n    margin-bottom: 48px\n}\n\n.about-security .icon {\n    margin-right: 8px;\n    width: 15.75px;\n    height: 20.25px\n}\n\n.payment-method-icon {\n    flex-shrink: 0\n}\n\n.payment-method-icon--visa {\n    width: 40px;\n    height: 26px\n}\n\n.payment-method-icon--mastercard {\n    width: 42px;\n    height: 28px\n}\n\n.payment-method-icon--amex,.payment-method-icon--unknown {\n    width: 40px;\n    height: 26px\n}\n\n.payment-method-icon--wallet {\n    width: 40px;\n    height: 40px\n}\n\n.payment-methods-icons {\n    display: flex;\n    align-items: center\n}\n\n.payment-methods-icons .payment-method-icon {\n    opacity: .1;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.payment-methods-icons .payment-method-icon--current {\n    opacity: 1\n}\n\n.payment-methods-icons .payment-method-icon+.payment-method-icon {\n    margin-left: 24px\n}\n\n.payment-methods__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding-bottom: 24px\n}\n\n.payment-methods__security {\n    display: flex;\n    align-items: center;\n    opacity: .4;\n    margin-bottom: 16px\n}\n\n.payment-methods__security .icon {\n    margin-right: 8px;\n    font-size: 1.5px\n}\n\n.payment-methods__actions {\n    margin-top: 32px\n}\n\n.payment-methods-list:after {\n    content: "";\n    display: block;\n    clear: both\n}\n\n.payment-methods-item {\n    border: 1px solid rgba(47,51,51,.2);\n    border-radius: 4px;\n    display: flex;\n    align-items: center;\n    padding: 24px;\n    float: left;\n    width: calc(50% - 16px)\n}\n\n.payment-methods-item:nth-child(n+3) {\n    margin-top: 32px\n}\n\n.payment-methods-item svg {\n    fill: #000\n}\n\n.payment-methods-item:nth-child(2n) {\n    margin-left: 32px\n}\n\n.payment-methods-item__info {\n    flex: 1 1;\n    margin: 0 12px\n}\n\n.payment-methods-item__card-type {\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 1.5;\n    text-transform: capitalize\n}\n\n.payment-methods-item__actions .button {\n    border: none;\n    padding: 0\n}\n\n.payment-methods-item__actions .icon--trash {\n    color: rgba(47,51,51,.4);\n    height: 24px;\n    width: 24px\n}\n\n.payment-methods__actions .button .icon {\n    margin-right: 12px\n}\n\n@media (max-width: 1019px) {\n    .payment-methods-item {\n        width:auto;\n        float: none\n    }\n\n    .payment-methods-item:nth-child(2n) {\n        margin-left: 0\n    }\n\n    .payment-methods-item+.payment-methods-item {\n        margin-top: 32px\n    }\n}\n\n.add-payment-method {\n    width: 592px;\n    padding: 48px\n}\n\n.add-payment-method__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 34px;\n    font-weight: 700;\n    line-height: 1.25;\n    margin-bottom: 24px;\n    padding-bottom: 24px\n}\n\n.add-payment-method__actions {\n    display: none;\n    justify-content: space-between;\n    margin-top: 32px\n}\n\n.add-payment-method__actions>.button:first-child {\n    margin-right: 20%\n}\n\n.add-payment-method__actions>.button {\n    border-color: rgba(47,51,51,.2);\n    color: rgb(47,51,51)\n}\n\n.stripe__title {\n    font-size: 16px;\n    font-weight: 700;\n    margin-bottom: 16px\n}\n\n.stripe__rest {\n    display: flex;\n    margin: 16px 0\n}\n\n.stripe__rest>* {\n    width: 54%\n}\n\n.stripe__rest>*+* {\n    margin-left: 24px;\n    flex: 1 1\n}\n\n.stripe__button {\n    margin-top: 32px\n}\n\n.stripe__cards {\n    margin-top: 16px\n}\n\n.stripe__more .check-box__label {\n    font-size: 14px\n}\n\n.stripe__voucher {\n    margin-top: 24px\n}\n\n.stripe__back {\n    display: flex;\n    margin-top: 16px\n}\n\n.stripe__back .button {\n    border: none;\n    padding: 0;\n    width: auto\n}\n\n.stripe__back .button>div {\n    border-bottom: 1px solid rgba(47,51,51,.15);\n    color: rgba(47,51,51,.4);\n    font-size: 14px;\n    font-weight: 400;\n    height: 24px;\n    -webkit-transition: all .25s;\n    transition: all .25s\n}\n\n.stripe__back .button>div:hover {\n    border-bottom: 1px solid rgba(47,51,51,.4);\n    color: rgba(47,51,51,.6)\n}\n\n.m-stripe {\n    padding: 0 16px 16px\n}\n\n.reservations__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding-bottom: 24px\n}\n\n.reservations-list {\n    padding: 8px 0\n}\n\n.reservations-item>a {\n    display: flex;\n    padding: 16px;\n    align-items: flex-start;\n    cursor: pointer\n}\n\n.reservations-item:last-child>a {\n    padding-bottom: 0\n}\n\n.reservations-item+.reservations-item {\n    border-top: 1px solid rgba(1,1,1,.05)\n}\n\n.reservations-item__date {\n    margin-right: 16px;\n    text-align: center\n}\n\n.reservations-item__date-day {\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 5px\n}\n\n.reservations-item__date-month {\n    opacity: .6;\n    font-size: 14px;\n    color: #010101;\n    text-transform: capitalize\n}\n\n.reservations-item__tenant {\n    opacity: .9;\n    font-size: 20px;\n    font-weight: 500;\n    margin-bottom: 16px\n}\n\n.reservations-item__description {\n    opacity: .4;\n    font-size: 14px;\n    margin-bottom: 16px\n}\n\n.reservations-item__status {\n    opacity: .6;\n    font-size: 14px;\n    text-transform: capitalize\n}\n\n.reservations-item__status--canceled {\n    color: #f66\n}\n\n.reservations-item__status--paid {\n    color: rgb(1,112,105)\n}\n\n.reservation {\n    width: 592px;\n    padding: 48px\n}\n\n.reservation__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    font-size: 34px;\n    font-weight: 700;\n    line-height: 1.25;\n    padding-bottom: 24px\n}\n\n.reservation__actions {\n    display: none;\n    justify-content: space-between;\n    margin-top: 32px\n}\n\n.reservation__actions>.button:first-child {\n    margin-right: 20%\n}\n\n.reservation__actions>.button {\n    border-color: rgba(47,51,51,.2);\n    color: rgb(47,51,51)\n}\n\n.reservation__image {\n    flex: 1 1;\n    height: 84px;\n    background-size: cover;\n    background-color: rgba(47,51,51,.4);\n    background-position: 50%;\n    background-repeat: no-repeat;\n    border-radius: 4px\n}\n\n.reservation__detail {\n    width: 60%\n}\n\n.reservation__detail>* {\n    margin-bottom: 12px\n}\n\n.reservation__button {\n    margin-top: 16px\n}\n\n.reservation__content header {\n    display: flex;\n    padding-bottom: 8px;\n    margin: 24px 0\n}\n\n.reservation__content header>* {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n}\n\n.reservation__content h1 {\n    font-size: 16px;\n    font-weight: 700\n}\n\n.reservation__content h2 {\n    font-size: 16px;\n    opacity: .6\n}\n\n.reservation__content footer,.reservation__content li {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.reservation__content ul {\n    background-color: rgba(47,51,51,.02);\n    padding: 0 16px\n}\n\n.reservation__content li {\n    line-height: 1.8;\n    padding: 12px 0\n}\n\n.reservation__content li+li {\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.reservation__content footer>div+div,.reservation__content li>div+div {\n    text-align: right\n}\n\n.reservation__content li>div:first-child {\n    font-weight: 500\n}\n\n.reservation__content h3,.reservation__content li>div+div {\n    opacity: .6\n}\n\n.reservation__content footer {\n    margin-top: 32px;\n    font-size: 14px\n}\n\n.reservation__taxes {\n    margin-left: 8px;\n    opacity: .6\n}\n\n.reservation__price {\n    font-size: 28px;\n    font-weight: 700;\n    text-align: right;\n    color: rgb(1,112,105)\n}\n\n.reservation__resend-button {\n    margin-top: 32px\n}\n\n.suggestion-modal {\n    padding: 48px;\n    width: 536px\n}\n\n.suggestion-modal__title {\n    font-size: 24px;\n    font-weight: 700;\n    letter-spacing: -.5px;\n    text-align: center;\n    margin: 0 0 24px\n}\n\n.suggestion-modal__content {\n    font-size: 14px;\n    line-height: 1.5\n}\n\n.suggestion-modal__content p+p {\n    margin-top: 24px\n}\n\n.suggestion-modal__actions {\n    margin-top: 56px\n}\n\n.suggestion-modal .icon {\n    display: block;\n    margin: 0 auto 24px;\n    height: 64px;\n    width: 64px;\n    color: rgb(1,112,105)\n}\n\n.suggestion__title {\n    border-bottom: 1px solid rgba(47,51,51,.1);\n    padding-bottom: 24px\n}\n\n.suggestion__description {\n    color: rgba(47,51,51,.4);\n    margin-bottom: 32px\n}\n\n.suggestion__form .field {\n    height: auto;\n    max-width: 440px\n}\n\n.suggestion__form .field+.buttons {\n    margin-top: 32px\n}\n\n.account-page {\n    flex: 1 1;\n    background-color: #fafafa\n}\n\n.account-page__menu {\n    display: flex;\n    justify-content: center;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.1);\n    z-index: 10;\n    background-color: #fff;\n    border-top: 1px solid rgba(1,1,1,.05)\n}\n\n.account-page__content {\n    padding: 80px\n}\n\n.account-page__content>div {\n    padding: 48px;\n    max-width: 1008px;\n    margin: 0 auto;\n    border-radius: 4px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n    background-color: #fff\n}\n\n.account-page__form {\n    margin-top: 32px\n}\n\n.account-page__form .field {\n    max-width: 440px\n}\n\n.app-download {\n    padding: 24px;\n    box-sizing: border-box;\n    min-height: calc(100vh - 200px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center\n}\n\n.app-download__text {\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 1.5;\n    text-align: center;\n    margin-bottom: 1em;\n    max-width: 500px\n}\n\n.facebook_sign_in {\n    display: block;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 48px;\n    border: 0;\n    color: #fff;\n    background-color: #2f4e8b;\n    font-family: inherit;\n    font-size: 16px;\n    font-weight: 700;\n    border-radius: 4px;\n    cursor: pointer\n}\n\n.facebook_sign_in>span {\n    display: inline-block;\n    padding: 8px 0 8px 36px;\n    background: transparent url(https://res.cloudinary.com/playtomic/image/upload/v1560335712/playtomic/web/icons/facebook_sign_in.svg) no-repeat 0;\n    background-size: contain\n}\n\n.checkout__vouchers__add,.checkout__vouchers__loading {\n    display: flex;\n    height: 64px;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 4px\n}\n\n.checkout__vouchers__loading {\n    align-items: center\n}\n\n.checkout__vouchers__add>div {\n    flex: 1 1;\n    padding: 0 0 0 16px\n}\n\n.checkout__vouchers__add input {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    display: block;\n    width: 100%;\n    height: 32px;\n    font-size: 16px;\n    font-family: inherit;\n    border: solid rgba(164,217,108,.3);\n    border-width: 0 0 1px;\n    -webkit-transition: border-color .15s;\n    transition: border-color .15s\n}\n\n.checkout__vouchers__add input:focus {\n    border-color: rgb(164,217,108)\n}\n\n.checkout__vouchers__add--invalid input {\n    border-color: #f66\n}\n\n.checkout__vouchers__add__error {\n    font-size: 14px;\n    line-height: 28px;\n    color: #f66\n}\n\n.checkout__vouchers__add button {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    display: block;\n    border: none;\n    margin: 0;\n    padding: 0 24px;\n    background: transparent;\n    font-size: 14px;\n    font-family: inherit;\n    opacity: .6;\n    cursor: pointer;\n    -webkit-transition: opacity .15s;\n    transition: opacity .15s\n}\n\n.checkout__vouchers__add button:focus,.checkout__vouchers__add button:hover {\n    opacity: 1\n}\n\n.checkout__vouchers__add .spinner,.checkout__vouchers__loading .spinner {\n    width: 24px;\n    height: 24px;\n    color: #335fff\n}\n\n.checkout__vouchers__loading .spinner {\n    margin-left: 16px\n}\n\n.checkout__vouchers__back {\n    font-size: 14px;\n    margin-top: 8px\n}\n\n.checkout__vouchers__select {\n    position: relative;\n    z-index: 1\n}\n\n.checkout__vouchers__select--open {\n    z-index: 2\n}\n\n.checkout__vouchers__select__toggle {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1561542038/playtomic/web/icons/chevron-down.svg);\n    background-repeat: no-repeat;\n    background-position: right 10px top 23px;\n    background-size: 25px;\n    position: relative;\n    z-index: 1;\n    padding: 1px\n}\n\n.checkout__vouchers__select__spinner {\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%)\n}\n\n.checkout__vouchers__select__spinner .spinner {\n    width: 20px;\n    height: 20px;\n    color: #335fff\n}\n\n.checkout__vouchers__select--open .checkout__vouchers__select__toggle {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1561542038/playtomic/web/icons/chevron-up.svg)\n}\n\n.checkout__vouchers__select--applying .checkout__vouchers__select__toggle {\n    background-image: none\n}\n\n.checkout__vouchers__select__dropdown {\n    box-sizing: border-box;\n    padding-top: 64px;\n    max-height: 64px;\n    -webkit-transition: max-height .25s ease-out;\n    transition: max-height .25s ease-out;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    background-color: #fff;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column\n}\n\n.checkout__vouchers__select--selected .checkout__vouchers__select__dropdown {\n    border-color: rgba(1,112,105,.3)\n}\n\n.checkout__vouchers__select--open .checkout__vouchers__select__dropdown {\n    border-color: rgba(1,112,105,.8);\n    max-height: 228px\n}\n\n.checkout__vouchers__select ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    background-color: #fff;\n    overflow: auto;\n    flex: 1 1;\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout__vouchers__select li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    -webkit-transition: background-color .25s;\n    transition: background-color .25s\n}\n\n.checkout__vouchers__select li:hover {\n    background-color: rgba(1,112,105,.15)\n}\n\n.checkout__voucher {\n    box-sizing: border-box;\n    height: 64px;\n    padding: 0 16px;\n    display: flex;\n    align-items: center;\n    cursor: pointer\n}\n\n.checkout__voucher--current {\n    background-color: rgba(1,112,105,.1)\n}\n\n.checkout__voucher div {\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n\n.checkout__voucher__name {\n    font-weight: 500\n}\n\n.checkout__voucher__description {\n    color: rgba(47,51,51,.5);\n    margin-top: 4px\n}\n\n.checkout__voucher__discount {\n    font-size: 20px;\n    font-weight: 700;\n    padding-right: 16px;\n    flex-shrink: 0\n}\n\n.checkout {\n    box-sizing: border-box;\n    min-height: 100vh;\n    background-color: #f5f5f5\n}\n\n.checkout__view {\n    display: flex;\n    flex-direction: column;\n    background-color: #fff\n}\n\n.checkout__view>div {\n    flex: 1 1\n}\n\n.checkout__view>div>div {\n    padding: 24px\n}\n\n.checkout__details {\n    padding: 24px;\n    line-height: 1.2;\n    background-color: #f5f5f5;\n    -webkit-transition: background-color 1s ease-out;\n    transition: background-color 1s ease-out\n}\n\n.checkout--paid .checkout__details {\n    background-color: #fff\n}\n\n.checkout--paid .checkout__view {\n    overflow: hidden\n}\n\n@-webkit-keyframes slide_view_up {\n    0% {\n        max-height: 100vh\n    }\n\n    to {\n        max-height: 0\n    }\n}\n\n@keyframes slide_view_up {\n    0% {\n        max-height: 100vh\n    }\n\n    to {\n        max-height: 0\n    }\n}\n\n.checkout--paid .checkout__view {\n    -webkit-animation: slide_view_up 1s forwards;\n    animation: slide_view_up 1s forwards\n}\n\n@media (min-width: 1000px) {\n    .checkout {\n        padding:16px 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center\n    }\n\n    .checkout__content {\n        width: 1000px;\n        padding-top: 48px;\n        background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1648207844/playtomic/web/logo_black.svg);\n        background-repeat: no-repeat;\n        background-position: top;\n        background-size: auto 44px;\n        -webkit-transition: width .5s ease-out;\n        transition: width .5s ease-out\n    }\n\n    .checkout__box {\n        display: flex;\n        flex-direction: row-reverse;\n        box-shadow: 0 32px 32px 0 rgba(47,51,51,.05);\n        background-color: #fff;\n        border-radius: 4px;\n        min-height: 600px;\n        -webkit-transition: min-height 1s ease-out;\n        transition: min-height 1s ease-out;\n        margin-top: 8px\n    }\n\n    .checkout__view {\n        flex: 1 1;\n        -webkit-transition: opacity 1s ease-out;\n        transition: opacity 1s ease-out;\n        -webkit-animation: none;\n        animation: none\n    }\n\n    .checkout__details {\n        width: 400px;\n        flex-shrink: 0;\n        box-sizing: border-box;\n        border-radius: 0 4px 4px 0;\n        -webkit-transition: background-color 1s ease-out;\n        transition: background-color 1s ease-out\n    }\n\n    .checkout--paid .checkout__box {\n        min-height: 0\n    }\n\n    .checkout--paid .checkout__content {\n        width: 500px\n    }\n\n    .checkout--paid .checkout__details {\n        border-radius: 4px;\n        width: 500px\n    }\n}\n\n.checkout__details>div {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 24px\n}\n\n.checkout__sport,.checkout__tenant {\n    margin-bottom: 8px\n}\n\n.checkout__sport {\n    opacity: .4\n}\n\n.checkout__address {\n    opacity: .4;\n    font-size: 14px\n}\n\n.checkout__features {\n    margin: 16px 0;\n    font-size: 14px\n}\n\n.checkout__features>div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px 0\n}\n\n.checkout__features>div+div {\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout__features>div>div+div {\n    color: rgba(47,51,51,.4)\n}\n\n.checkout__price {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 14px;\n    height: 32px\n}\n\n.checkout__price__money {\n    font-size: 28px;\n    font-weight: 700;\n    color: #335fff\n}\n\n.checkout__price__money--discount {\n    color: #ee3663\n}\n\n.checkout__price__taxes {\n    opacity: .4\n}\n\n.checkout__cancelation_policy {\n    font-size: 14px;\n    margin-top: 24px\n}\n\n.checkout__cancelation_policy>div:first-child {\n    font-weight: 500;\n    margin-bottom: 8px\n}\n\n.checkout__split_payment {\n    font-size: 14px;\n    margin-top: 24px\n}\n\n.checkout__split_payment>div:first-child {\n    font-weight: 500;\n    margin-bottom: 8px\n}\n\n.checkout__note,.checkout__note-asterisk {\n    font-weight: 500;\n    color: #ee3663\n}\n\n.checkout__note {\n    font-size: 12px;\n    margin-top: 16px\n}\n\n.checkout__title {\n    line-height: 1.4;\n    font-size: 30px;\n    font-weight: 700;\n    padding-bottom: 16px;\n    margin-bottom: 24px;\n    border-bottom: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout__text {\n    line-height: 1.5;\n    opacity: .8\n}\n\n.checkout__buttons {\n    margin-top: 24px\n}\n\n.checkout__buttons>*+* {\n    margin-top: 16px\n}\n\n.checkout__teaser-top {\n    margin-bottom: 24px;\n    font-size: 14px;\n    color: rgba(47,51,51,.4)\n}\n\n.checkout__teaser-bottom {\n    margin-top: 16px;\n    font-size: 14px;\n    color: rgba(47,51,51,.4);\n    text-align: center\n}\n\n.checkout__oauth {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    margin-top: 24px;\n    grid-gap: 16px;\n    gap: 16px\n}\n\n.checkout__oauth>* {\n    flex: 1 1 auto;\n    max-width: 300px;\n    overflow: hidden\n}\n\n.sign-up__check {\n    display: flex;\n    align-items: flex-start\n}\n\n.sign-up__check+.sign-up__check {\n    margin-top: 16px\n}\n\n.sign-up__check .check-box__tick {\n    width: 24px;\n    height: 24px\n}\n\n.sign-up__check-text {\n    display: block;\n    font-size: 14px;\n    line-height: 1.2;\n    margin-left: 8px\n}\n\n.sign-up__check-text>div:first-child {\n    font-weight: 700;\n    margin-bottom: 8px\n}\n\n.sign-up__check-text>div+div {\n    opacity: .6\n}\n\n.checkout__form {\n    display: block;\n    margin-top: 16px\n}\n\n.checkout__error_message {\n    color: #f66;\n    line-height: 1.4\n}\n\n.checkout__section+.checkout__section {\n    margin-top: 24px\n}\n\n.checkout__subtitle {\n    font-weight: 700;\n    line-height: 1.2;\n    margin-bottom: 16px\n}\n\n.checkout__offers {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n\n.checkout__offers>li {\n    list-style: none;\n    margin: 0;\n    padding: 8px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.checkout__offers>li+li {\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout__offers>li>div {\n    color: #2f3333;\n    line-height: 1.4;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-right: 8px\n}\n\n.checkout__offers>li>button {\n    display: block;\n    padding: 8px 16px;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 4px;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 700;\n    cursor: pointer\n}\n\n.checkout__bottom {\n    margin-top: 16px\n}\n\n.stripe__card_number {\n    display: flex;\n    align-items: center;\n    margin-top: -8px\n}\n\n.stripe__card_number>div {\n    flex: 1 1\n}\n\n.stripe__card_number>img {\n    display: block;\n    height: 48px;\n    margin-left: 16px\n}\n\n.stripe__card {\n    display: grid;\n    grid-column-gap: 16px\n}\n\n.stripe__card>:first-child {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2\n}\n\n.stripe__card>:nth-child(2) {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3\n}\n\n.stripe__card>:nth-child(3) {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3\n}\n\n.loading-text {\n    display: flex;\n    align-items: center\n}\n\n.loading-text .spinner {\n    width: 20px;\n    height: 20px;\n    color: #335fff;\n    margin-right: 4px\n}\n\n.checkout__debts {\n    height: 100%\n}\n\n.checkout__debts,.checkout__debts>div {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.checkout__debts>div {\n    text-align: center;\n    flex-direction: column;\n    padding: 86px 0 0;\n    background: transparent url(https://res.cloudinary.com/playtomic/image/upload/v1566206229/playtomic/web/icons/debts.svg) no-repeat top;\n    background-size: 64px auto\n}\n\n.checkout__debts__title {\n    line-height: 1.4;\n    font-size: 30px;\n    font-weight: 700;\n    margin-bottom: 16px\n}\n\n.checkout__debts__text {\n    line-height: 1.5;\n    opacity: .6;\n    margin-bottom: 32px\n}\n\n.checkout__accept_commercial {\n    display: flex;\n    margin-top: 16px\n}\n\n.checkout__accept_commercial>div:first-child {\n    flex-shrink: 0;\n    padding-top: 2px\n}\n\n.checkout__accept_commercial>div+div {\n    flex: 1 1;\n    font-size: 14px;\n    line-height: 1.5;\n    opacity: .4\n}\n\n.checkout__success_title {\n    font-size: 32px;\n    font-weight: 700;\n    line-height: 1.4;\n    text-align: center;\n    margin-bottom: .5em\n}\n\n.fake_chat {\n    background: #eee url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584682/playtomic/web/chat-bg.webp) repeat;\n    min-height: 100vh;\n    padding: 16px\n}\n\n.fake_chat__button,.fake_chat__messages {\n    max-width: 900px;\n    margin: 0 auto\n}\n\n.fake_chat__messages>li {\n    border-radius: 4px;\n    background-color: #fff;\n    box-shadow: 0 3px 8px 0 rgba(70,70,70,.1);\n    overflow: hidden;\n    -webkit-animation-name: fake_chat-bubble;\n    animation-name: fake_chat-bubble;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    max-height: 0\n}\n\n.fake_chat__messages>li>div {\n    -webkit-animation-name: fake_chat-content;\n    animation-name: fake_chat-content;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    opacity: 0\n}\n\n.fake_chat__messages>li:nth-child(2) {\n    -webkit-animation-delay: 1.5s;\n    animation-delay: 1.5s\n}\n\n.fake_chat__messages>li:nth-child(3) {\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s\n}\n\n.fake_chat__messages>li:nth-child(2)>div {\n    -webkit-animation-delay: 1.5s;\n    animation-delay: 1.5s\n}\n\n.fake_chat__messages>li:nth-child(3)>div {\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s\n}\n\n.fake_chat__messages>li>div {\n    padding: 24px;\n    line-height: 1.5;\n    box-sizing: border-box\n}\n\n.fake_chat__button,.fake_chat__messages>li+li {\n    margin-top: 16px\n}\n\n.fake_chat__title {\n    text-transform: uppercase;\n    color: rgb(1,112,105);\n    font-weight: 500\n}\n\n.fake_chat__date {\n    font-size: 18px;\n    font-weight: 700;\n    margin: .5em 0\n}\n\n.fake_chat__date:first-letter {\n    text-transform: uppercase\n}\n\n.fake_chat__tiny {\n    font-size: 14px;\n    color: rgba(51,48,46,.4)\n}\n\n.fake_chat__tiny b {\n    color: rgb(164,217,108)\n}\n\n.fake_chat__info {\n    margin-top: 16px\n}\n\n.fake_chat__players {\n    margin: 16px 0 8px\n}\n\n.fake_chat__players:after {\n    content: "";\n    display: block;\n    clear: both\n}\n\n.fake_chat__players>li {\n    float: left;\n    margin: 0 0 8px\n}\n\n.fake_chat__avatar {\n    width: 40px;\n    height: 40px;\n    margin: 0 auto;\n    border-radius: 50%;\n    background-color: #fbfbfb;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1654514049/playtomic/web/avatar-secondary.svg);\n    background-size: cover;\n    background-position: 50%\n}\n\n.fake_chat__name {\n    text-align: center;\n    margin-top: 8px;\n    font-weight: 500;\n    font-size: 14px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 64px\n}\n\n.fake_chat__mobile-login {\n    padding: 16px\n}\n\n@-webkit-keyframes fake_chat-bubble {\n    0% {\n        max-height: 0\n    }\n\n    to {\n        max-height: 100vmax\n    }\n}\n\n@keyframes fake_chat-bubble {\n    0% {\n        max-height: 0\n    }\n\n    to {\n        max-height: 100vmax\n    }\n}\n\n@-webkit-keyframes fake_chat-content {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes fake_chat-content {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n.fake_chat .checkout-page-sign {\n    width: 520px;\n    margin: 0 auto\n}\n\n.checkout__not_in_match {\n    height: 100%\n}\n\n.checkout__not_in_match,.checkout__not_in_match>div {\n    display: flex;\n    align-items: center;\n    justify-content: center\n}\n\n.checkout__not_in_match>div {\n    text-align: center;\n    flex-direction: column;\n    padding: 86px 0 0;\n    background: transparent url(https://res.cloudinary.com/playtomic/image/upload/v1569321719/playtomic/web/icons/ic-assets-error-large.svg) no-repeat top;\n    background-size: 64px auto\n}\n\n.checkout__not_in_match__title {\n    line-height: 1.4;\n    font-size: 30px;\n    font-weight: 700;\n    margin-bottom: 16px\n}\n\n.checkout__not_in_match__text {\n    line-height: 1.5;\n    opacity: .6;\n    margin-bottom: 32px\n}\n\n.checkout__players ul {\n    display: flex\n}\n\n.checkout__players li {\n    display: flex;\n    flex-direction: column;\n    justify-content: center\n}\n\n.checkout__players li+li {\n    margin-left: 8px\n}\n\n.checkout__player_avatar {\n    width: 40px;\n    height: 40px;\n    margin: 0 auto;\n    border-radius: 50%;\n    background-color: #fbfbfb;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1654514049/playtomic/web/avatar-secondary.svg);\n    background-size: cover;\n    background-position: 50%;\n    overflow: hidden\n}\n\n.checkout__player_avatar img {\n    display: block;\n    width: 40px;\n    height: 40px;\n    object-fit: cover\n}\n\n.checkout__player_name {\n    text-align: center;\n    margin-top: 8px;\n    font-weight: 500;\n    font-size: 14px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 64px\n}\n\n.checkout__payment_methods {\n    position: relative\n}\n\n.checkout__payment_methods--open {\n    z-index: 2\n}\n\n.checkout__payment_methods__toggle {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1561542038/playtomic/web/icons/chevron-down.svg);\n    background-repeat: no-repeat;\n    background-position: right 10px top 23px;\n    background-size: 25px;\n    position: relative;\n    z-index: 1;\n    padding: 1px\n}\n\n.checkout__payment_methods--open .checkout__payment_methods__toggle {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1561542038/playtomic/web/icons/chevron-up.svg)\n}\n\n.checkout__payment_methods__dropdown {\n    box-sizing: border-box;\n    padding-top: 64px;\n    max-height: 64px;\n    -webkit-transition: max-height .25s ease-out;\n    transition: max-height .25s ease-out;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    background-color: #fff;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column\n}\n\n.checkout__payment_methods--selected .checkout__payment_methods__dropdown {\n    border-color: rgba(1,112,105,.3)\n}\n\n.checkout__payment_methods--open .checkout__payment_methods__dropdown {\n    border-color: rgba(1,112,105,.8);\n    max-height: 228px\n}\n\n.checkout__payment_methods ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    background-color: #fff;\n    overflow: auto;\n    flex: 1 1;\n    border-top: 1px solid rgba(47,51,51,.1)\n}\n\n.checkout__payment_methods li {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    -webkit-transition: background-color .25s;\n    transition: background-color .25s\n}\n\n.checkout__payment_methods li:hover {\n    background-color: rgba(1,112,105,.15)\n}\n\n.checkout__payment_method {\n    box-sizing: border-box;\n    height: 64px;\n    padding: 0 16px 0 72px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-repeat: no-repeat;\n    background-position: 16px;\n    background-size: 40px 40px;\n    cursor: pointer\n}\n\n.checkout__payment_method--current {\n    background-color: rgba(1,112,105,.1)\n}\n\n.checkout__payment_method div {\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n\n.checkout__payment_method__name {\n    font-weight: 500\n}\n\n.checkout__payment_method__description {\n    color: rgba(47,51,51,.5);\n    margin-top: 4px\n}\n\n.checkout__offer_tenant {\n    font-weight: 700;\n    line-height: 1.5;\n    font-size: 20px;\n    margin-bottom: 24px\n}\n\n.checkout__offer_name {\n    font-weight: 700;\n    line-height: 1.25;\n    font-size: 16px;\n    margin-bottom: 16px\n}\n\n.checkout__offer_description {\n    opacity: .8;\n    line-height: 1.4\n}\n\n.checkout__offer_expiry {\n    opacity: .4;\n    line-height: 1.4;\n    margin-top: 16px\n}\n\n.checkout__offer_price {\n    margin-top: 48px\n}\n\n.legal-document {\n    display: flex;\n    flex-direction: column;\n    -webkit-user-select: text;\n    -moz-user-select: text;\n    -ms-user-select: text;\n    user-select: text\n}\n\n.legal-document__language-selector {\n    align-self: flex-end;\n    border: none;\n    font-weight: 700;\n    text-transform: uppercase;\n    cursor: pointer;\n    width: 40px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background: transparent;\n    background-image: url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>");\n    background-repeat: no-repeat;\n    background-position-x: right;\n    background-position-y: center\n}\n\n.legal-document__content .notion-block {\n    margin-bottom: 16px\n}\n\n.legal-document__content .notion-h1 {\n    font-size: 2.25rem;\n    font-weight: 600;\n    margin-bottom: 36px\n}\n\n.legal-document__content .notion-h2 {\n    font-size: 1.5rem;\n    font-weight: 600;\n    margin-bottom: 24px\n}\n\n.legal-document__content .notion-h3 {\n    font-size: 1.15rem;\n    font-weight: 600\n}\n\n.legal-document__content .notion-text {\n    margin-bottom: 16px;\n    line-height: 1.5\n}\n\n.legal-document__content .notion-hash-link {\n    display: none\n}\n\n.legal-document__content ul {\n    list-style: outside;\n    padding-left: 24px\n}\n\n.legal-document__content ol {\n    list-style: decimal;\n    padding-left: 24px\n}\n\n.legal-document__content .notion-simple-table {\n    width: 100%\n}\n\n.legal-document__content .notion-simple-table-row td {\n    width: auto!important\n}\n\n@media (max-width: 576px) {\n    .legal-document__content .notion-simple-table {\n        overflow-x:scroll;\n        display: block\n    }\n}\n\n.place-input {\n    position: relative\n}\n\n.place-input__list {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    left: 0;\n    max-height: 0;\n    overflow-y: auto;\n    padding: 0 24px;\n    border-radius: 0 0 4px 4px;\n    background-color: #fdfdfd;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    visibility: hidden;\n    opacity: 0;\n    z-index: 1000;\n    -webkit-transition: max-height .25s ease-out;\n    transition: max-height .25s ease-out\n}\n\n.place-input__list>* {\n    opacity: 0;\n    -webkit-transition: opacity .15s ease-out;\n    transition: opacity .15s ease-out\n}\n\n.place-input__list--open {\n    visibility: visible;\n    opacity: 1;\n    max-height: 325px;\n    will-change: max-height\n}\n\n.place-input__list--open>* {\n    opacity: 1\n}\n\n.m-place-input {\n    padding: 0 16px\n}\n\n.search {\n    display: flex\n}\n\n.search__inputs {\n    position: relative;\n    display: flex;\n    margin-right: 24px\n}\n\n.search__place {\n    width: 240px\n}\n\n.search__place .place-input__list {\n    left: -24px;\n    right: -24px\n}\n\n.search__sport {\n    position: relative;\n    width: 120px;\n    margin-left: 24px\n}\n\n.search__sport .drop-down {\n    left: -24px;\n    right: -24px\n}\n\n.search__date {\n    width: 104px\n}\n\n.search__date,.search__hour {\n    position: relative;\n    margin-left: 24px\n}\n\n.search__hour {\n    width: 80px\n}\n\n.search__hour .drop-down {\n    left: -24px;\n    right: -24px\n}\n\n.search__button {\n    width: 144px\n}\n\n.search .input {\n    padding: 10px 0;\n    height: 50px\n}\n\n.search .drop-down__container,.search .place-input {\n    position: static\n}\n\n.invitation-welcome {\n    background: #eee url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584682/playtomic/web/chat-bg.webp) repeat;\n    min-height: 100vh;\n    padding: 16px\n}\n\n.invitation-welcome__button,.invitation-welcome__messages {\n    max-width: 900px;\n    margin: 0 auto\n}\n\n.invitation-welcome__messages>li {\n    border-radius: 4px;\n    background-color: #fff;\n    box-shadow: 0 3px 8px 0 rgba(70,70,70,.1);\n    overflow: hidden;\n    -webkit-animation-name: invitation-welcome-bubble;\n    animation-name: invitation-welcome-bubble;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    max-height: 0\n}\n\n.invitation-welcome__messages>li>div {\n    -webkit-animation-name: invitation-welcome-content;\n    animation-name: invitation-welcome-content;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n    opacity: 0\n}\n\n.invitation-welcome__messages>li:nth-child(2) {\n    -webkit-animation-delay: 1.5s;\n    animation-delay: 1.5s\n}\n\n.invitation-welcome__messages>li:nth-child(3) {\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s\n}\n\n.invitation-welcome__messages>li:nth-child(2)>div {\n    -webkit-animation-delay: 1.5s;\n    animation-delay: 1.5s\n}\n\n.invitation-welcome__messages>li:nth-child(3)>div {\n    -webkit-animation-delay: 3s;\n    animation-delay: 3s\n}\n\n.invitation-welcome__messages>li>div {\n    padding: 24px;\n    line-height: 1.5;\n    box-sizing: border-box\n}\n\n.invitation-welcome__button,.invitation-welcome__messages>li+li {\n    margin-top: 16px\n}\n\n.invitation-welcome__title {\n    text-transform: uppercase;\n    color: rgb(1,112,105);\n    font-weight: 500\n}\n\n.invitation-welcome__date {\n    font-size: 18px;\n    font-weight: 700;\n    margin: .5em 0\n}\n\n.invitation-welcome__date:first-letter {\n    text-transform: uppercase\n}\n\n.invitation-welcome__tiny {\n    font-size: 14px;\n    color: rgba(51,48,46,.4)\n}\n\n.invitation-welcome__tiny b {\n    color: rgb(164,217,108)\n}\n\n.invitation-welcome__info {\n    margin-top: 16px\n}\n\n.invitation-welcome__players {\n    margin: 16px 0 8px\n}\n\n.invitation-welcome__players:after {\n    content: "";\n    display: block;\n    clear: both\n}\n\n.invitation-welcome__players>li {\n    float: left;\n    margin: 0 0 8px\n}\n\n.invitation-welcome__avatar {\n    width: 40px;\n    height: 40px;\n    margin: 0 auto;\n    border-radius: 50%;\n    background-color: #fbfbfb;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1654514049/playtomic/web/avatar-secondary.svg);\n    background-size: cover;\n    background-position: 50%\n}\n\n.invitation-welcome__name {\n    text-align: center;\n    margin-top: 8px;\n    font-weight: 500;\n    font-size: 14px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 64px\n}\n\n.invitation-welcome__mobile-login {\n    padding: 16px\n}\n\n@-webkit-keyframes invitation-welcome-bubble {\n    0% {\n        max-height: 0\n    }\n\n    to {\n        max-height: 100vmax\n    }\n}\n\n@keyframes invitation-welcome-bubble {\n    0% {\n        max-height: 0\n    }\n\n    to {\n        max-height: 100vmax\n    }\n}\n\n@-webkit-keyframes invitation-welcome-content {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes invitation-welcome-content {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n.invitation-welcome .checkout-page-sign {\n    width: 520px;\n    margin: 0 auto\n}\n\n.invitation__loading {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584682/playtomic/web/chat-bg.webp);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100vh\n}\n\n.invitation__loading-title {\n    font-size: 32px;\n    font-weight: 700;\n    margin-bottom: 40px;\n    text-align: center;\n    width: 880px\n}\n\n.invitation__loading-icon {\n    -webkit-animation: spin 3s linear infinite;\n    animation: spin 3s linear infinite\n}\n\n.invitation__loading-icon-ball {\n    font-size: 64px\n}\n\n@-webkit-keyframes spin {\n    to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn)\n    }\n}\n\n@keyframes spin {\n    to {\n        -webkit-transform: rotate(1turn);\n        transform: rotate(1turn)\n    }\n}\n\n.matches {\n    display: flex;\n    flex-direction: column\n}\n\n.matches__header {\n    display: flex;\n    justify-content: center;\n    padding: 16px\n}\n\n.matches__banner {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536311509/playtomic/web/invitation-01.webp);\n    height: 560px;\n    background-size: cover;\n    background-position: 50%\n}\n\n.matches__title {\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.13;\n    margin-bottom: 16px\n}\n\n.matches__subtitle,.matches__title {\n    color: #fff;\n    width: 880px;\n    text-align: center\n}\n\n.matches__subtitle {\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.33\n}\n\n.matches__content {\n    position: relative;\n    display: flex;\n    justify-content: center\n}\n\n.matches__card {\n    background-color: #fff;\n    border-radius: 4px;\n    width: 552px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px 48px;\n    position: absolute;\n    top: -264px;\n    box-shadow: 0 32px 32px 0 rgba(1,1,1,.05)\n}\n\n.matches__card-title {\n    text-align: center;\n    font-size: 28px;\n    font-weight: 700;\n    line-height: 1.07;\n    color: rgb(47,51,51);\n    margin-bottom: 32px\n}\n\n.matches__card-subtitle {\n    opacity: .4;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.17;\n    text-align: center;\n    margin-bottom: 32px\n}\n\n.matches__card-download-icons {\n    margin-bottom: 40px\n}\n\n.matches__card-download-android {\n    margin-left: 24px\n}\n\n.matches__card-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%\n}\n\n.matches__card-info-data {\n    width: 50%;\n    flex-shrink: 0\n}\n\n.matches__card-info-data-game {\n    font-size: 12px;\n    font-weight: 400;\n    color: #335fff;\n    text-transform: uppercase;\n    margin-bottom: 8px\n}\n\n.matches__card-info-data-title {\n    color: rgb(47,51,51);\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 1.11;\n    margin-bottom: 8px;\n    text-transform: capitalize\n}\n\n.matches__card-info-data-subtitle {\n    color: rgba(47,51,51,.4);\n    font-size: 14px;\n    margin-bottom: 4px\n}\n\n.matches__card-info-players {\n    display: flex;\n    width: 100%;\n    justify-content: center\n}\n\n.matches__card-info-player {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 62px\n}\n\n.matches__card-info-player-picture {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1654514049/playtomic/web/avatar-secondary.svg);\n    background-position: 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 50%;\n    margin-bottom: 8px;\n    width: 40px;\n    height: 40px\n}\n\n.matches__card-info-player-name {\n    opacity: .8;\n    font-size: 12px;\n    text-align: center;\n    width: 62px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n\n.matches .footer {\n    margin-top: 280px\n}\n\n@media (max-width: 650px) {\n    .matches__banner {\n        height:200px;\n        background-repeat: no-repeat;\n        padding: 32px 16px\n    }\n\n    .matches__title {\n        font-size: 24px;\n        width: auto\n    }\n\n    .matches__subtitle {\n        font-size: 16px;\n        width: auto\n    }\n\n    .matches__card {\n        width: calc(100vw - 32px);\n        padding: 24px 16px;\n        top: -80px\n    }\n\n    .matches__card-title {\n        font-size: 24px;\n        margin-bottom: 16px\n    }\n\n    .matches__card-subtitle {\n        font-size: 14px;\n        text-align: left;\n        margin-bottom: 16px\n    }\n\n    .matches__card-download-icons {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        margin-bottom: 8px\n    }\n\n    .matches__card-download-icons>a>svg {\n        width: 100%\n    }\n\n    .matches__card-info-data-game {\n        font-size: 14px;\n        font-weight: 700\n    }\n\n    .matches__card-info {\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: stretch\n    }\n\n    .matches__card-info-data {\n        width: 100%;\n        margin-bottom: 24px\n    }\n\n    .matches__card-info-data-game {\n        margin-bottom: 16px\n    }\n\n    .matches__card-info-data-title {\n        font-size: 18px\n    }\n\n    .matches__card-info-players {\n        justify-content: center\n    }\n\n    .matches .footer {\n        margin-top: 420px\n    }\n}\n\n.msie {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584682/playtomic/web/chat-bg.webp);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px;\n    width: 100%;\n    height: 100vh\n}\n\n.msie__img {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1540810152/playtomic/web/oops.png);\n    background-position: 50%;\n    background-size: cover;\n    width: 450px;\n    height: 397px\n}\n\n.msie__text,.msie__title {\n    margin-top: 16px\n}\n\n.msie__text {\n    width: 738px\n}\n\n.legal-page {\n    display: flex;\n    justify-content: center;\n    background-color: rgb(250,250,250);\n    text-align: left;\n    padding: 80px 0\n}\n\n.legal-page__content {\n    width: 800px\n}\n\n.legal-page__content .language-selector__container {\n    display: flex;\n    justify-content: flex-end;\n    margin-left: -8px\n}\n\n.legal-page__content table {\n    font-size: 12px\n}\n\n.legal-page__content th {\n    font-weight: 700\n}\n\n.legal-page__content td,.legal-page__content th {\n    padding: 20px 10px;\n    border: 1px solid #dedede;\n    text-align: left;\n    vertical-align: middle\n}\n\n.legal-page__content em {\n    font-style: italic\n}\n\n@media screen and (max-width: 576px) {\n    .legal-page {\n        padding:16px\n    }\n\n    .legal-page__content {\n        width: 100%\n    }\n\n    .legal-page__content .language-selector__container {\n        justify-content: flex-start;\n        margin-bottom: 16px\n    }\n\n    .legal-page__content h2 {\n        font-size: 20px\n    }\n\n    .legal-page__content .markdown {\n        word-wrap: break-word\n    }\n}\n\n.no-results {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n\n.no-results__icon {\n    color: rgba(47,51,51,.4)\n}\n\n.no-results__icon svg {\n    width: 64px;\n    height: 64px;\n    color: currentColor\n}\n\n.no-results__title {\n    font-size: 24px;\n    font-weight: 700;\n    margin-top: 48px\n}\n\n.no-results__body {\n    color: rgba(47,51,51,.6);\n    margin-top: 32px\n}\n\n.no-results__body p {\n    margin-bottom: 24px\n}\n\n.no-results__list {\n    margin-left: 24px\n}\n\n.no-results__list li {\n    line-height: 1.5;\n    list-style: disc\n}\n\n.no-results__actions {\n    margin-top: 56px;\n    text-align: center\n}\n\n.no-results__actions .button {\n    display: inline-block;\n    width: auto\n}\n\n.no-results__actions.mobile .button {\n    display: block\n}\n\n@media (max-width: 576px) {\n    .no-results__title {\n        font-size:18px;\n        font-weight: 700;\n        margin-top: 8px\n    }\n\n    .no-results__body {\n        font-size: 14px;\n        margin-top: 16px\n    }\n\n    .no-results__body p {\n        margin-bottom: 16px\n    }\n\n    .no-results__actions {\n        margin-top: 16px\n    }\n}\n\n.slots {\n    display: grid;\n    grid-column-gap: 8px;\n    grid-row-gap: 8px;\n    grid-template-columns: 1fr 1fr 1fr;\n    min-height: 54px;\n    padding: 2px 0\n}\n\n.slots>* {\n    opacity: 0;\n    -webkit-animation: slot .15s ease-out;\n    animation: slot .15s ease-out;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards\n}\n\n.slots>:nth-child(2) {\n    -webkit-animation-delay: 50ms;\n    animation-delay: 50ms\n}\n\n.slots>:nth-child(3) {\n    -webkit-animation-delay: .1s;\n    animation-delay: .1s\n}\n\n.slots>:nth-child(4) {\n    -webkit-animation-delay: .15s;\n    animation-delay: .15s\n}\n\n.slots__noAvailability {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(47,51,51,.03);\n    border-radius: 4px;\n    color: rgb(47,51,51,.4);\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1.4;\n    padding: 8px\n}\n\n.slots__noAvailability svg {\n    flex-shrink: 0;\n    margin-right: 8px\n}\n\n@-webkit-keyframes slot {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n@keyframes slot {\n    0% {\n        opacity: 0\n    }\n\n    to {\n        opacity: 1\n    }\n}\n\n.card__header {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    position: relative;\n    height: 194px;\n    padding: 24px;\n    border-radius: 4px 4px 0 0;\n    background-color: #000;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover;\n    letter-spacing: -.5px;\n    color: #fff;\n    font-size: 16px\n}\n\n.card--map .card__header {\n    height: 140px;\n    font-size: 14px\n}\n\n.card__header * {\n    position: relative\n}\n\n.card__header:before {\n    content: "";\n    display: block;\n    position: absolute;\n    border-radius: inherit;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.5)));\n    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.5));\n    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.5))\n}\n\n.card__header h1 {\n    font-size: 1.5em;\n    font-weight: 700;\n    text-shadow: 0 0 16px rgba(0,0,0,.5)\n}\n\n.card__header-default-image {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAADkCAYAAAAsGGd3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAz7SURBVHgB7d1JchvZtQbgS4oUCZBUU7YGfpPnJTwv7e3EO/AW7B14B+UIR3jgcDuw5bKqxJ6gxM55wEoZrCJBNJnAvZnfF6FgNRpJ5I97Mv88uZEq7w/vfr6V0q82Uvq/u5TeJAAW8evrlP7/Z283/rYRwbqd0tdCFaARR1XA/mLzu/d//uXHw3++ub6+SgAs7c34SsDXv//DXf1f9vZep4ODd2lrazsBsLCjrcl/Oz8/Hv+KkN3f/0na3t5JAMztzdZj/7UO2Z2dYXr16t34KwCz25r2Pz99ukgfPvw9vaguE7w6+Gl1onXPC2AWm7P8ppvqZtfh4fv0/l9/qk60RwmA6bbm+c11yJ6cfpsO9r9Ku7sHbn4BPGKucK1FyB4dfVNdLviYdqvrsRoGAA8tFK61CNnz6/82DIQswL2lwnXSZI1rOHyjYQD0WmPhWpuscUVXdjDYTwB903i41qLGFb/UuIA+mqmKtQw1LqCPWju5/tBkjWtveH9d1s0voKtWFq61CNmTk2/T2dnH6nrsgYYB0EkrD9fa7e3tg4aBkAW6ZG3hOkmNC+iajT/+5R93EWw5UeMCSrfx4fDuLt5CcHr6IeUWsmpcQKnG4Vr/S4TsxUU1ol8cjW885ULIAqV5EK6T4hR7Up1mcwtZNS6gBE+Gay3HkA0aBkDOng3XWoTsRXW5IB5pzYmQBXI0c7jWIlwjZHO7+aXGBeRk7nCt5dowiHAdVtdl3fwC1mnhcK2pcQH82NLhWlPjAvivxsJ1khoX0HethGtNjQvoq1bDtabGBfTNSsK1psYF9MVKw7WmxgV03VrCtabGBXTVWsO1psYFdE0W4TpJjQvoguzCtabGBZQs23CtqXEBJco+XGtqXEBJignXmhoXUILiwrWmxgXkrNhwreVe4xoMXqXNzc0E9Evx4TpJjQvIRafCtabGBaxbJ8O1NhqdprOzj2pcwMp1Olxruda4BoODtL//lRoXdFAvwrWmxgWsSq/CtVaHbFw2uL29TblQ44Lu6GW41tS4gLb0OlwnqXEBTRKuP6DGBSwjLjWenX0nXJ+ixgXMI7Li5OTDl8wQrs/4/PmyOs1+zLJh8OrVOzUuWKM4pV6cH1b3bU7S1dXlg/8nXGeUa43r5cvd6jT7VsMAVigOXZeX99PtU40j4TqnOmQvq6O/931Bv/xw9J9GuC4oQvayui57Wl0yyDFkd3b2XJeFBtQ3qM4vjuf6WReuDci1xjXcPUh7+18JWVhAnE7jABU9+EUeNhKuDVLjgvLNM/pPI1xb0NRfTtOELDyuHv2n3aCal3BtkRoX5G3Z0X8a4boCalyQl1U8JCRcV0iNC9anjdF/GuG6BmpcsDpxOo1QHY3O0ioJ1zXLtca1W12PdfOLUtWPpY4uz9Z2Y1m4ZkKNC5a36tF/GuGaGTUumF+OPzfCNVM5v+9LjYsc5DD6TyNcM5dryGoYsC73r2c6ymL0f0rUHIVrIdS46LtcL5lNmpzshGthImTH32QZNgzUuGjaohupVileIrq//5Pq11cPXigqXAumxkVXtflYalPidDrYPUjDamp77C3NwrUD1LjoitJG/2mEa4eocVGinLqpT3lq9J9GuHaQGhclKGX0Hw7fpMHgYOZQrQnXDlPjIke5vra+FiEaYRqhusxBQLj2gBoX69bV0X8a4dojalysWr2RKr7mPPq3cblKuPaUGhdtiRAdjU7SxcVx1qP/XjX271bjf1v3AIRrz6lx0ZQ+jv7TCFfG1LhYVJe6qU0SrjygxsUsct9IFerRP56g2t7eSasmXHmUGhePKWUj1XDw+snHUldFuDKVGhfB6D8/4cpM1Lj6px79zy9O0tXVZcrRKm9QzUu4Mjc1rm77/PkyjS6Oi95IlQPhysIiZOPaW26nGg2DxRj9myVcWVrONa4YGddxp7gUuqntEa40Ro2rHF3fSJUD4Urj1LjylfvoHyEaNyfjlFr6h6FwpTURsjFuji5P1bjWyOi/HsKV1uVc4zqofph3q7vOXbz5FX/mUfiP/ak5j/4RqoPBfuoa4cpKqXG1y0aqfAhX1kKNq1lG//wIV9ZKjWs5uqn5Eq5kQY1rdjZSlUG4khU1rqeVMPrHn1OEal9G/2mEK1m6X213/3x732tcRv8yCVeydn/3+zTLhsHe8PX4CaI2bn6VtJFqWP052OPwY8KVYuRY46rfcd9Uw8BGqu4QrhQnQjbK8V1635fRv3uEK8WKIIobPKPRWcpJhGxcLnguhHRTu024Uryca1yPPdpZykYqo/9yhCudkXuNa2vrZfajf1w/7sJGqhwIVzon1xpXroz+7RCudFauNa5cdHkjVQ6EK72QY41rHfqykSoHwpVeybXG1Taj/+oJV3qpXiSd282vpummro9wpddybRgsw+ifB+EKqRshayNVXoQrTCixxmX0z9NWAr6IvQDjk9/GRjo5/S7d3t6kHNlIlT/hCt+7P7UeZf2sv8dSyyFc6T0bqWiDcKWX6o1U59X11Vyvreqmlk240is2UrEqwpVeKGH0t5GqW4QrnWUZNeskXOmcUkb/CNX4KlS7SbjSGbFeME6puY7+9csMZ3kFDOUTrhTN6E+uhCtFyvXlhJN0U/tNuFKMOJlenB+m0eVZ1qO/jVQE4Ur2jP6USLiSLY+lUjLhSlZKGv3jCart7Z0EjxGuZKGEjVQvX+6m4eC1x1KZiXBlrYz+dJVwZeVspKIPhCsrYyMVfSJcaZ3Rnz4SrrRCN5W+E640qpTRP5anxBIVoUpbhCuNsJEKHhKuLMzoD08Trsyt3kgVX3Me/d2gYp2EKzOJEB2NTtLFxbGNVDAD4cpURn9YjHDlUbqpsBzhyhc2UkFzhCtFjP42UlEa4dpjRn9oj3DtmXr0P784SVdXlylHblDRBcK1Jz5/vkyji2MbqWBFhGvHGf1hPYRrB+mmwvoJ1w6xkQryIVw7IPfRP0J0Z2dvfEo1+tMXwrVQRn/Im3AtTJxO4xXUsT8159E/QnUw2E/QV8K1ADZSQXmEa8aM/lAu4Zoh3VQon3DNREkbqYz+8DzhumYljP4vtrbHoWr0h9kJ1zUx+kO3CdcVKmkj1XD4Om1VJ1ZgMcJ1BWykgv4Rri0y+kN/CdeG1TeozquT6s31VcqRbiq0T7g2pJSNVEZ/WA3huqQSRv9Y72cj1XrUk0x8f9zcXKXr76eZ+HDb3t6tPuz20+7glZuHHbTx4fDuLjEXj6XynAjRw8N/zvyhu7f3Oh0cvBOyHSJc52AjFbM4O/2YTk4/zP09srn5orq5+NPxByLlc1ngGfED8unT+fiU6rFUnnNy8u34MtEibm9v0tHRN+Ov0eCgbML1CUZ/5jU+sS4YrJMioOMU6wRbNuH6A3E6jVAdjc5SrnRT8xPXWONSQFMiYHd3D1yDLZhwTTZSsbzTBa6xThOXBuKG2Lt3/5soU6/D1UYqmhCn1vPz49S0+KCP70t/72XqZbh6LJUmxcMjbYkPfze3ytSbcC1l9LeRqjyjy/bCNecDANN1PlxjZItuas6j/8uXu2k4eO2x1EJdXX1Kbbm+yXM/Bc/rbLga/VmVuPnUllyX//C8ToWrjVRALjoRrjZSsU5xffy6pQ/zeJiAMhUdrjZSkYMXL9oL1+3tnUSZigtXj6WSm52dvdY+4OPDmTIVE66ljP7D4ZvxD4RQ7Y/4EG1ip8Bj4hFYypR9uMZ6v9w3UkWYRqga/fspvgfi777p79HY8arvXK4sw9XoT2nevv2f9O9//7WxWlZ8T8XybMqVVbjaSEWp4oQZYXh8/K/UhPgec2ot29rD1UYquuLg4G26u7tZ+vqrtxF0w9rC1ehPF0Uwbmy8+H4F4XyXCOJ7LE6sgrUbVv4OLY+l0gfRe42AnXUVYXyvxXVblwK6YyXhWtLoH09QKW7TlAjZqBDG5qyrq8svU1qEaDx8EB1Zk1E3tRquNlIBfdXKNVejP9B3jYVrfYMqalQx/uTIDSpgVZYO18+fL9Po4thGKoAJC4er0R/gaXOFq24qwGxmClcbqQDmMzVcbaQCWMyPwtXoD7C8L+Eap9Mo/MdpNefR3w0qoARb5+dHVage20gF0KCtw8P3KUdGf6Bk2b2JwOgPdEEW4WojFdA1aw3X2EgVb7c0+gNds5ZwNfoDXbeycK1vUA2HXhcMdF/r4WojFdBHrYWr0R/os0bDVTcV4F4j4Wr0B3hoqXCNjVRxSjX6Azw0d7ga/QGeN3O4xuk0QnUw2E8ATDc1XG2kAljMo+Fq9AdYzoNw1U0FaMaW0R+geRvffHdzZ/QHaNamYAVonmQFaIFwBWiBcAVogXAFaIFwBWiBcAVogXAFaIFwBWjB5kZKRwmARsXJ9XcJgMbc3qXfbLw/vPv5dkpf36X0JgGwrKPrlH6x+bO3G3+7qv6hujzw6wTAouIS628jWCNX/wM7Qj3RVCCfdAAAAABJRU5ErkJggg==)\n}\n\n.card__header .cash-payments {\n    align-items: center;\n    border: 1px solid #fff;\n    border-radius: 24px;\n    display: flex;\n    font-size: 14px;\n    padding: 0 8px 0 4px;\n    position: absolute;\n    top: 16px\n}\n\n.card__address {\n    display: flex;\n    align-items: center;\n    padding-bottom: 8px;\n    margin-bottom: 16px\n}\n\n.card__address__street {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-left: 8px\n}\n\n.card__address__postal_code {\n    flex-shrink: 0\n}\n\n.card__address__postal_code:before {\n    content: "\\00a0"\n}\n\n.card {\n    position: relative;\n    box-shadow: 0 6px 24px rgba(0,0,0,.15);\n    border-radius: 4px;\n    background-color: #fff;\n    -webkit-transition: box-shadow .25s;\n    transition: box-shadow .25s;\n    height: 100%\n}\n\n.card--map {\n    position: absolute;\n    width: 340px;\n    left: -170px;\n    top: -325px;\n    -webkit-animation: card--map-open .15s ease-out;\n    animation: card--map-open .15s ease-out;\n    z-index: 2\n}\n\n.card--map:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    border: 12px solid transparent;\n    border-top-color: #fff\n}\n\n.card--map .card__slots .button {\n    padding: 0 8px\n}\n\n.card__body {\n    padding: 24px;\n    border-radius: 0 0 4px 4px;\n    font-size: 16px;\n    letter-spacing: -.5px;\n    color: #566670;\n    background-color: #fff\n}\n\n.card__body nav {\n    opacity: 0\n}\n\n.card__body nav.loaded {\n    -webkit-transition: opacity .75s ease-in;\n    transition: opacity .75s ease-in;\n    opacity: 1\n}\n\n.card__more {\n    display: inline-block;\n    opacity: .54;\n    padding-bottom: 8px;\n    margin-top: 32px;\n    border-bottom: 1px solid rgba(0,0,0,.05);\n    -webkit-transition: border-color .25s;\n    transition: border-color .25s\n}\n\n.card__more:hover {\n    border-color: rgba(0,0,0,.3)\n}\n\n.card__header-link {\n    text-decoration: none;\n    display: block\n}\n\n.card--highlighted,.card:hover {\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.02),0 8px 32px 0 rgba(47,51,51,.1)\n}\n\n.card--greyed:after {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 4px;\n    background-color: hsla(0,0%,100%,.6);\n    pointer-events: none\n}\n\n@-webkit-keyframes card--map-open {\n    0% {\n        opacity: 0;\n        top: -300px\n    }\n\n    to {\n        opacity: 1;\n        top: -325px\n    }\n}\n\n@keyframes card--map-open {\n    0% {\n        opacity: 0;\n        top: -300px\n    }\n\n    to {\n        opacity: 1;\n        top: -325px\n    }\n}\n\n.toggle {\n    width: 52px;\n    height: 30px;\n    padding: 2px;\n    cursor: pointer;\n    border-radius: 15px;\n    background-color: rgba(47,51,51,.2);\n    box-sizing: border-box;\n    -webkit-transition: background-color .15s ease-out;\n    transition: background-color .15s ease-out;\n    outline: none;\n    opacity: .8\n}\n\n.toggle:focus {\n    opacity: 1\n}\n\n.toggle:before {\n    content: "";\n    display: block;\n    width: 26px;\n    height: 26px;\n    border-radius: 13px;\n    background-color: #fff;\n    -webkit-transition: -webkit-transform .15s ease-out;\n    transition: -webkit-transform .15s ease-out;\n    transition: transform .15s ease-out;\n    transition: transform .15s ease-out,-webkit-transform .15s ease-out\n}\n\n.toggled {\n    background-color: #335fff\n}\n\n.toggled:before {\n    -webkit-transform: translate(22px);\n    transform: translate(22px)\n}\n\n.disabled {\n    opacity: .4;\n    pointer-events: none\n}\n\n.invalid {\n    color: #f66\n}\n\n.invalid,.invalid:focus {\n    border-color: #f66\n}\n\n.total-results {\n    display: flex;\n    align-items: center;\n    color: rgba(47,51,51,.6);\n    letter-spacing: -.5px\n}\n\n.total-results .spinner {\n    color: #335fff;\n    width: 1.2em;\n    margin-left: 8px\n}\n\n.map {\n    height: 100%\n}\n\n.map-marker {\n    position: relative;\n    width: 38px;\n    height: 52px;\n    font-size: 1px;\n    background-image: url(/static/media/pin.2804910e.svg);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: contain;\n    margin-top: -26px;\n    margin-left: -19px;\n    z-index: 1;\n    -webkit-transition: -webkit-filter .25s;\n    transition: -webkit-filter .25s;\n    transition: filter .25s;\n    transition: filter .25s,-webkit-filter .25s;\n    -webkit-animation: none;\n    animation: none\n}\n\n.map-marker--highlighted {\n    -webkit-transform-origin: 50% 100%;\n    transform-origin: 50% 100%;\n    -webkit-animation: map-marker-jump .65s infinite;\n    animation: map-marker-jump .65s infinite;\n    z-index: 5;\n    -webkit-filter: brightness(1.2);\n    filter: brightness(1.2)\n}\n\n.map-marker--selected {\n    background-image: url(/static/media/pin-selected.3f889505.svg)\n}\n\n.map-marker__no-availability {\n    -webkit-filter: grayscale(1);\n    filter: grayscale(1);\n    z-index: 0\n}\n\n.map-marker__no-availability.map-marker--highlighted {\n    -webkit-filter: grayscale(1) brightness(1.2);\n    filter: grayscale(1) brightness(1.2);\n    z-index: 5\n}\n\n.map-marker__no-availability--selected {\n    background-image: url(/static/media/no-availability-selected.55568e44.svg)\n}\n\n@-webkit-keyframes map-marker-bounce {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0)\n    }\n\n    5% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n\n    10% {\n        -webkit-transform: scale(1.2);\n        transform: scale(1.2)\n    }\n\n    15% {\n        -webkit-transform: scale(1.4);\n        transform: scale(1.4)\n    }\n\n    30% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n\n    to {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n@keyframes map-marker-bounce {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0)\n    }\n\n    5% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n\n    10% {\n        -webkit-transform: scale(1.2);\n        transform: scale(1.2)\n    }\n\n    15% {\n        -webkit-transform: scale(1.4);\n        transform: scale(1.4)\n    }\n\n    30% {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n\n    to {\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n@-webkit-keyframes map-marker-jump {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    50% {\n        -webkit-transform: translateY(-5px);\n        transform: translateY(-5px)\n    }\n\n    65% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    80% {\n        -webkit-transform: scaleY(.8);\n        transform: scaleY(.8)\n    }\n\n    to {\n        -webkit-transform: scaleY(1) translateY(0);\n        transform: scaleY(1) translateY(0)\n    }\n}\n\n@keyframes map-marker-jump {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    50% {\n        -webkit-transform: translateY(-5px);\n        transform: translateY(-5px)\n    }\n\n    65% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0)\n    }\n\n    80% {\n        -webkit-transform: scaleY(.8);\n        transform: scaleY(.8)\n    }\n\n    to {\n        -webkit-transform: scaleY(1) translateY(0);\n        transform: scaleY(1) translateY(0)\n    }\n}\n\n.search2-page__header {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    background-color: #fff;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.1),inset 0 -1px 0 0 rgba(47,51,51,.15);\n    z-index: 10\n}\n\n.search2-page__header .search2-page__top {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 80px;\n    padding: 16px;\n    box-sizing: border-box\n}\n\n.search2-page__header .search2-page__searcher {\n    display: flex;\n    align-items: center\n}\n\n.search2-page__cards {\n    display: grid;\n    grid-template-columns: repeat(auto-fill,minmax(280px,1fr));\n    grid-auto-rows: -webkit-max-content;\n    grid-auto-rows: max-content;\n    grid-column-gap: 16px;\n    grid-row-gap: 16px;\n    flex: 1 1;\n    margin-top: 16px\n}\n\n.search2-page__cards>* {\n    min-height: 0\n}\n\n.search2-page__content {\n    padding-top: 129px\n}\n\n.search2-page__content--with-map {\n    padding-right: 30vw\n}\n\n.search2-page__results {\n    padding: 16px\n}\n\n.search2-page__filters {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: #fafafa;\n    border-top: 1px solid rgba(1,1,1,.05)\n}\n\n.search2-page__filters .filter {\n    border: none\n}\n\n.search2-page__availabilityToggle {\n    display: flex;\n    align-items: center\n}\n\n.search2-page__availabilityToggle .toggle {\n    margin: 0 16px\n}\n\n.search2-page__map {\n    position: fixed;\n    top: 129px;\n    right: 0;\n    bottom: 0;\n    width: 30vw;\n    background-color: #e5e3df\n}\n\n.search2-page__map-button {\n    position: absolute;\n    top: 16px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n    display: none;\n    margin: 0;\n    padding: 0 16px;\n    line-height: 2em;\n    font-size: 14px;\n    font-weight: 700;\n    border: 1px solid transparent;\n    background-color: #335fff;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n    -webkit-transition: border-color .25s;\n    transition: border-color .25s;\n    white-space: nowrap\n}\n\n.search2-page__map:hover .search2-page__map-button {\n    display: block\n}\n\n@media (max-width: 900px) {\n    .search2-page__content {\n        padding-right:16px\n    }\n\n    .search2-page__map {\n        display: none\n    }\n}\n\n.bbq2__drop {\n    position: relative\n}\n\n.bbq2__drop__toggle {\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 0 16px;\n    border: none;\n    background-color: transparent;\n    height: 40px;\n    width: 100%;\n    cursor: pointer\n}\n\n.bbq2__drop__toggle__label {\n    display: block;\n    line-height: 1.2;\n    font-size: 1rem;\n    font-weight: 400\n}\n\n.bbq2__drop__toggle__icon {\n    color: #335fff;\n    margin-left: 24px\n}\n\n.bbq2__drop__drop {\n    position: absolute;\n    top: 100%;\n    left: -1px;\n    min-width: 120%;\n    background-color: #fff;\n    display: none;\n    z-index: 10000;\n    border-radius: 0 0 3px 3px;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    border: 1px solid #f2f2f2\n}\n\n.bbq2__drop__drop--open {\n    display: block\n}\n\n.bbq2__sport_input {\n    padding: 0 16px\n}\n\n.bbq2__sport_input>button {\n    display: block;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    height: 48px;\n    background: transparent;\n    cursor: pointer;\n    font-size: 1rem;\n    width: 100%;\n    text-align: left\n}\n\n.bbq2__sport_input>button+button {\n    border-top: 1px solid #f2f2f2\n}\n\n.bbq2__date_input {\n    padding: 16px 16px 4px\n}\n\n.bbq2__filters_input {\n    padding: 16px\n}\n\n.bbq2__filters_input>*+* {\n    margin-top: 16px\n}\n\n.bbq2__filters_input__title {\n    text-transform: uppercase;\n    opacity: .4\n}\n\n.bbq2__filters_input__options,.bbq2__filters_input__options>*+* {\n    margin-top: 8px\n}\n\n.bbq2__filters_input__reset {\n    display: block;\n    width: 100%;\n    padding: 0 32px;\n    white-space: nowrap;\n    margin: 0;\n    border: 1px solid #335fff;\n    border-radius: 32px;\n    background-color: transparent;\n    height: 32px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #335fff;\n    cursor: pointer\n}\n\n.bbq2__search {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-bottom: 1px solid #f2f2f2\n}\n\n.bbq2__search>div {\n    border-right: 1px solid #f2f2f2\n}\n\n.bbq2__tooltip {\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    padding: 10px;\n    border-radius: 4px;\n    background-color: #0e2433;\n    pointer-events: none;\n    z-index: 99999;\n    -webkit-transform: translate(-50%,-7px);\n    transform: translate(-50%,-7px)\n}\n\n.bbq2__tooltip:before {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    border: 5px solid transparent;\n    border-top: 5px solid #0e2433\n}\n\n.bbq2__tooltip p {\n    text-align: center;\n    color: #fff;\n    font-size: 14px;\n    line-height: 1.4;\n    white-space: nowrap\n}\n\n.bbq2__tooltip p+p {\n    text-transform: lowercase\n}\n\n.bbq2__resource {\n    position: relative\n}\n\n.bbq2__resource__label {\n    font-size: 14px;\n    padding: 0 0 0 16px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden\n}\n\n.bbq2__resources {\n    width: 160px;\n    border-color: #f2f2f2;\n    border-style: solid;\n    border-width: 0 1px\n}\n\n.bbq2__resources>div {\n    box-sizing: border-box;\n    border-bottom: 1px solid #f2f2f2\n}\n\n.bbq2__hours {\n    display: flex;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    pointer-events: none;\n    z-index: 100;\n    background-color: hsla(0,0%,100%,.5)\n}\n\n.bbq2__hour {\n    box-sizing: border-box;\n    font-size: 14px;\n    font-weight: 500;\n    text-align: center;\n    color: rgba(1,1,1,.4);\n    border-bottom: 1px solid #f2f2f2\n}\n\n.bbq2__slot {\n    position: absolute;\n    top: 0;\n    bottom: 0\n}\n\n.bbq2-open {\n    cursor: pointer;\n    background-color: transparent\n}\n\n.bbq2-open,.bbq2-open__fill {\n    height: 100%;\n    box-sizing: border-box;\n    position: relative\n}\n\n.bbq2-open__fill {\n    display: block;\n    margin: 0;\n    padding: 1px 2px 1px 1px;\n    border: 0;\n    pointer-events: none;\n    visibility: hidden\n}\n\n.bbq2-open__fill div {\n    height: 100%;\n    background-color: #335fff;\n    border-radius: 5px\n}\n\n.bbq2-open:hover .bbq2-open__fill {\n    visibility: visible\n}\n\n.bbq2-open__tooltip {\n    position: absolute;\n    bottom: 100%;\n    left: 0;\n    padding: 10px;\n    border-radius: 4px;\n    background-color: #2f3333;\n    opacity: 0;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s;\n    pointer-events: none;\n    visibility: hidden;\n    z-index: 99999;\n    -webkit-transform: translate(-50%,-7px);\n    transform: translate(-50%,-7px)\n}\n\n.bbq2-open__tooltip:before {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    border: 5px solid transparent;\n    border-top-color: #2f3333\n}\n\n.bbq2-open:hover .bbq2-open__tooltip {\n    opacity: 1;\n    visibility: visible\n}\n\n.bbq2-open__tooltip p {\n    text-align: center;\n    color: #fff;\n    font-size: 14px;\n    line-height: 1.4;\n    white-space: nowrap\n}\n\n.bbq2-open__tooltip p+p {\n    text-transform: lowercase\n}\n\n.bbq2__hole {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    box-sizing: border-box;\n    padding: 1px 2px 1px 1px\n}\n\n.bbq2__hole div {\n    height: 100%;\n    border-radius: 5px;\n    background-color: #879199\n}\n\n.bbq2__slots {\n    position: relative\n}\n\n.bbq2__slots-resource {\n    position: relative;\n    border-bottom: 1px solid #f2f2f2\n}\n\n.bbq2__duration-picker {\n    position: absolute;\n    -webkit-transform: translate(-1px,-1px);\n    transform: translate(-1px,-1px);\n    z-index: 100\n}\n\n.bbq2__duration-picker__bar {\n    box-sizing: border-box;\n    -webkit-transition: width .25s ease-out;\n    transition: width .25s ease-out;\n    padding: 1px 2px 2px;\n    -webkit-transform: translateY(1px);\n    transform: translateY(1px)\n}\n\n.bbq2__duration-picker__bar div {\n    height: 100%;\n    border-radius: 5px;\n    background-color: #335fff\n}\n\n.bbq2__duration-picker__tooltip {\n    font-size: 14px;\n    position: absolute;\n    left: 0;\n    bottom: 100%;\n    -webkit-transform: translate(-50%,-10px);\n    transform: translate(-50%,-10px);\n    min-width: 200px;\n    padding: 8px;\n    background-color: rgb(255,255,255);\n    border-radius: 4px;\n    box-shadow: 0 24px 32px 0 rgba(1,1,1,.05);\n    z-index: 1000\n}\n\n.bbq2__duration-picker__tooltip:before {\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    border: 8px solid transparent;\n    border-top: 8px solid rgb(255,255,255)\n}\n\n.bbq2__duration-picker__head {\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.bbq2__duration-picker__resource {\n    font-weight: 600;\n    margin-right: 8px\n}\n\n.bbq2__duration-picker__time {\n    padding-left: 16px;\n    background: transparent url(/static/media/clock.c270b6a5.svg) no-repeat 0;\n    background-size: auto 12px\n}\n\n.bbq2__duration-picker__option {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    height: 32px;\n    padding: 0 8px;\n    background-color: rgba(51,95,255,0.1);\n    border-radius: 4px;\n    cursor: pointer;\n    outline: none;\n    margin-top: 8px\n}\n\n.bbq2__duration-picker__option--picked {\n    background-color: rgba(51,95,255,0.3)\n}\n\n.bbq2__duration-picker__button {\n    display: block;\n    margin-top: 8px;\n    padding: 12px 0;\n    width: 100%;\n    background-color: #335fff;\n    color: #fff;\n    border: none;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    outline: none;\n    text-align: center;\n    text-decoration: none\n}\n\n.bbq2__duration-picker__close {\n    margin: 0;\n    padding: 0;\n    border: none;\n    width: 24px;\n    height: 24px;\n    background-color: #fff;\n    outline: none;\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    font-size: 12px;\n    -webkit-transform: translate(25%,-25%);\n    transform: translate(25%,-25%);\n    border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 8px 16px 0 rgba(50,50,50,.08),0 1px 3px 0 rgba(50,50,50,.08),0 0 0 1px rgba(50,50,50,.04)\n}\n\n.bbq2-no_resources {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 250px\n}\n\n.bbq2-no_resources__text {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.2\n}\n\n.bbq2-no_resources__button {\n    margin-top: 32px\n}\n\n.bbq2-no_availability {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 250px\n}\n\n.bbq2-no_availability__text {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 1.2\n}\n\n.bbq2-no_availability__button {\n    margin-top: 32px\n}\n\n.bbq2-searching {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 250px\n}\n\n.bbq2-searching__spinner {\n    font-size: 10px;\n    color: #335fff\n}\n\n.bbq2-searching__text {\n    font-size: 18px;\n    font-weight: 500;\n    margin-top: 32px;\n    line-height: 1.2\n}\n\n.bbq2__grid {\n    display: flex\n}\n\n.bbq2__availability {\n    position: relative\n}\n\n.bbq2__bottom {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    pointer-events: none;\n    border-color: #f2f2f2;\n    border-style: solid;\n    border-width: 0 0 1px 1px;\n    z-index: 100\n}\n\n.bbq2__grid-lines {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none\n}\n\n.bbq2__past {\n    position: absolute;\n    bottom: 0;\n    border-right: 2px solid #335fff;\n    background-color: #f9f9f9;\n    background-image: -webkit-linear-gradient(45deg,transparent 25%,#fff 0,#fff 50%,transparent 0,transparent 75%,#fff 0,#fff);\n    background-image: linear-gradient(45deg,transparent 25%,#fff 0,#fff 50%,transparent 0,transparent 75%,#fff 0,#fff);\n    background-size: 84.85px 84.85px\n}\n\n.bbq2__legend {\n    padding: 8px;\n    background-color: hsla(0,0%,100%,.75);\n    font-size: 12px;\n    font-weight: 500;\n    color: rgba(1,1,1,.4);\n    border-radius: 3px 0 3px 0\n}\n\n.bbq2__legend,.bbq2__legend>div {\n    display: flex;\n    align-items: center\n}\n\n.bbq2__legend>div:before {\n    content: "";\n    display: block;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #f2f2f2;\n    margin-right: 8px\n}\n\n.bbq2__legend>div+div {\n    margin-left: 16px\n}\n\n.bbq2__legend-available:before {\n    background-color: #fff\n}\n\n.bbq2__legend-no_available:before {\n    background-color: #879199\n}\n\n.bbq2__legend-your_booking:before {\n    background-color: #335fff\n}\n\n.new-carousel {\n    height: 375px;\n    display: flex;\n    align-items: center\n}\n\n.new-carousel-img {\n    background-size: cover;\n    background-position: 50%;\n    background-repeat: no-repeat\n}\n\n.new-carousel-img__left {\n    width: 5%;\n    background-position: 100%;\n    height: 80%;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px\n}\n\n.new-carousel-img__right {\n    width: 5%;\n    background-position: 0;\n    height: 80%;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px\n}\n\n.new-carousel-img__center {\n    flex-grow: 1;\n    margin: 0 24px;\n    height: 100%;\n    border-radius: 4px\n}\n\n.new_tenant_offers__content {\n    padding: 32px 16px 16px\n}\n\n.new_tenant__side .new_tenant_offers .new_tenant__card {\n    background-color: #0e2433;\n    color: #fff\n}\n\n.new_tenant_offer__price {\n    font-size: 18px;\n    font-weight: 300;\n    color: #ecff00\n}\n\n.new_tenant_offer__price>div {\n    position: relative;\n    z-index: 1;\n    width: 60px;\n    height: 60px;\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    box-sizing: border-box;\n    border-radius: 50%;\n    border: 2px solid #ecff00;\n    margin: 0 auto\n}\n\n.new_tenant_offer__title {\n    text-align: center;\n    font-weight: 600;\n    line-height: 1.4;\n    padding-bottom: 8px;\n    margin-bottom: 16px;\n    margin-top: 16px;\n    border-bottom: 1px solid #f0f0f0\n}\n\n.new_tenant_offer__description {\n    text-align: center;\n    line-height: 1.4;\n    font-size: 14px\n}\n\n.new_tenant_offer__buy {\n    display: block;\n    box-sizing: border-box;\n    text-align: center;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 14px;\n    padding: 12px 16px;\n    border: 1px solid #335fff;\n    border-radius: 32px;\n    background-color: #335fff;\n    margin: 16px auto 0;\n    cursor: pointer\n}\n\n.new_tenant_offers__nav {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 20px\n}\n\n.new_tenant_offers__dot {\n    width: 8px;\n    height: 8px;\n    background-color: #fff;\n    border-radius: 50%;\n    opacity: .5\n}\n\n.new_tenant_offers__dot--current {\n    opacity: 1\n}\n\n.new_tenant_offers__dot+.new_tenant_offers__dot {\n    margin-left: 6px\n}\n\n.new_tenant_offers__arrow {\n    display: block;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    width: 40px;\n    height: 20px;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: auto 28px;\n    cursor: pointer;\n    -webkit-filter: brightness(0) invert(1);\n    filter: brightness(0) invert(1)\n}\n\n.new_tenant_offers__arrow--prev {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1559745441/playtomic/web/icons/chevron-left.svg)\n}\n\n.new_tenant_offers__arrow--next {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1559745441/playtomic/web/icons/chevron-right.svg)\n}\n\n.new_tenant__banner {\n    position: relative;\n    background-color: #0e2433;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: 100% auto\n}\n\n.new_tenant__banner:before {\n    content: "";\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(16%,rgba(0,0,0,.16)),to(rgba(0,0,0,.5)));\n    background-image: -webkit-linear-gradient(top,transparent,rgba(0,0,0,.16) 16%,rgba(0,0,0,.5));\n    background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.16) 16%,rgba(0,0,0,.5))\n}\n\n.new_tenant__header {\n    position: relative;\n    width: 1140px;\n    margin: 0 auto;\n    padding: 32px 0 40px;\n    color: #fff;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5)\n}\n\n.new_tenant__header__name {\n    font-size: 64px;\n    font-weight: 600;\n    line-height: 1.4\n}\n\n.new_tenant__header__address {\n    font-size: 16px;\n    line-height: 1.4;\n    text-indent: 4px\n}\n\n.new_tenant__breadcrumbs {\n    width: 1140px;\n    margin: 0 auto;\n    padding: 32px 0\n}\n\n.new_tenant__body {\n    display: flex;\n    width: 1140px;\n    margin: 0 auto;\n    padding-bottom: 16px\n}\n\n.new_tenant__main {\n    flex-grow: 1;\n    flex-shrink: 1\n}\n\n.new_tenant__main>*+* {\n    margin-top: 24px\n}\n\n.new_tenant__side {\n    margin-left: 24px;\n    width: 250px;\n    flex-shrink: 0\n}\n\n.new_tenant__side>*+* {\n    margin-top: 24px\n}\n\n.new_tenant__card {\n    border-radius: 8px;\n    box-shadow: -1px 5px 17px 0 rgba(0,0,0,.1);\n    background-color: #fff\n}\n\n.new_tenant__map {\n    height: 220px;\n    border-radius: 8px 8px 0 0;\n    overflow: hidden\n}\n\n.new_tenant__card-content {\n    padding: 12px;\n    font-size: 14px;\n    line-height: 1.2;\n    color: #000;\n    position: relative\n}\n\n.new_tenant__card-title {\n    padding: 12px;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border-bottom: 1px solid #e7e9eb\n}\n\n.new_tenant__card-tags {\n    list-style: none;\n    margin: -4px;\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap\n}\n\n.new_tenant__card-tags li {\n    display: flex;\n    align-items: center;\n    margin: 4px;\n    padding: 0 8px;\n    height: 28px;\n    line-height: 28px;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: #e7e9eb;\n    border-radius: 14px;\n    white-space: nowrap;\n    color: #000\n}\n\n.new_tenant__card-tag--icon {\n    width: 14px;\n    height: 14px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-right: 4px\n}\n\n.new_tenant__opening_hours {\n    list-style: none;\n    margin: -8px 0;\n    padding: 0\n}\n\n.new_tenant__opening_hours li {\n    margin: 0;\n    padding: 8px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between\n}\n\n.new_tenant__opening_hours li+li {\n    border-top: 1px solid #f0f0f0\n}\n\n.new_tenant__description {\n    max-height: 140px;\n    overflow: hidden;\n    -webkit-transition: max-height .25s;\n    transition: max-height .25s\n}\n\n.new_tenant__description:after {\n    content: "";\n    display: block;\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    height: 40px;\n    background: -webkit-gradient(linear,left bottom,left top,from(hsla(0,0%,100%,.8)),to(hsla(0,0%,100%,0)));\n    background: -webkit-linear-gradient(bottom,hsla(0,0%,100%,.8),hsla(0,0%,100%,0));\n    background: linear-gradient(0deg,hsla(0,0%,100%,.8) 0,hsla(0,0%,100%,0))\n}\n\n.new_tenant__description-divider {\n    height: 1px;\n    width: 100%;\n    background-color: #cfd3d6;\n    position: absolute;\n    left: 0\n}\n\n.new_tenant__description-toggle {\n    display: block;\n    padding: 5px 16px;\n    font-size: 16px;\n    color: #335fff;\n    cursor: pointer;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    margin: 0 auto;\n    background-color: #fff;\n    border: 0;\n    border-radius: 32px;\n    border: 1px solid #335fff\n}\n\n.new_tenant__card-carousel {\n    padding: 24px 0\n}\n\n.new_tenant__side .new_tenant__card {\n    color: #000\n}\n\n.activity-detail-card {\n    background-color: #fff;\n    border-radius: 4px;\n    padding: 40px 24px;\n    width: 544px\n}\n\n.activity-detail-card__header {\n    display: flex;\n    justify-content: space-between;\n    font-size: 24px;\n    font-weight: 700\n}\n\n.activity-detail-card__price {\n    color: #335fff\n}\n\n.activity-detail-card__list {\n    background-color: #f3f4f5;\n    border-radius: 4px;\n    margin-top: 40px;\n    padding: 0 8px\n}\n\n.activity-detail-card__list>li {\n    display: flex;\n    justify-content: space-between;\n    font-weight: 500;\n    padding: 12px 0\n}\n\n.activity-detail-card__list>li>span:last-child {\n    opacity: .6\n}\n\n.activity-detail-card__list>li+li {\n    border-top: 1px solid #566670\n}\n\n.activity-detail-card__app {\n    margin-top: 40px;\n    text-align: center\n}\n\n.activity-detail-card__app-title {\n    font-size: 24px;\n    font-weight: 700\n}\n\n.activity-detail-card__app-text {\n    font-weight: 500;\n    margin-top: 24px;\n    opacity: .4\n}\n\n.activity-detail-card__app .app_download_buttons {\n    margin-top: 24px\n}\n\n@media (max-width: 576px) {\n    .activity-detail-card {\n        margin-top:8px;\n        padding: 24px 16px;\n        width: 100%\n    }\n\n    .activity-detail-card__app-title,.activity-detail-card__header {\n        font-size: 20px\n    }\n\n    .activity-detail-card__list {\n        margin: 24px 0;\n        padding: 0 8px\n    }\n\n    .activity-detail-card__list>li {\n        font-size: 14px;\n        padding: 8px 0\n    }\n\n    .activity-detail-card__app {\n        margin-top: 16px\n    }\n}\n\n.social-share-button .button {\n    background-color: #fff;\n    border: 1px solid #fff;\n    color: rgb(47,51,51);\n    width: 152px\n}\n\n.social-share-button .button:hover {\n    opacity: .8\n}\n\n.social-share-button .icon {\n    margin-right: 8px\n}\n\n.m-social-share-button .button {\n    background-color: transparent;\n    border: none;\n    width: 48px\n}\n\n.m-social-share-button .button .icon {\n    color: #fff\n}\n\n.m-social-share-button .button .icon path {\n    stroke: #fff;\n    stroke-width: .7px\n}\n\n.social-share-modal .modal__content {\n    padding: 32px\n}\n\n.social-share-modal h2,.social-share-modal p {\n    width: 288px\n}\n\n.social-share-modal h2 {\n    margin-bottom: 16px\n}\n\n.social-share-modal__list {\n    margin-top: 16px\n}\n\n.social-share-modal__list>li {\n    border-top: 1px solid #e7e9eb;\n    color: #335fff;\n    cursor: pointer;\n    font-weight: 500;\n    padding: 12px 0;\n    display: flex;\n    align-items: center\n}\n\n.social-share-modal__list>li:hover {\n    opacity: .6\n}\n\n.social-share-modal__list>li:last-child {\n    border-bottom: 1px solid #e7e9eb\n}\n\n.social-share-modal__list>li>a {\n    display: flex;\n    align-items: center;\n    text-decoration: none\n}\n\n.social-share-modal__list>li span {\n    margin-right: 8px\n}\n\n.social-share-modal input {\n    opacity: 0;\n    pointer-events: none\n}\n\n.social-share-modal__copy-info {\n    font-size: 12px;\n    font-weight: 400;\n    margin-left: 16px;\n    opacity: 0;\n    -webkit-transition: opacity .25s;\n    transition: opacity .25s\n}\n\n.social-share-modal__copy-info--shown {\n    opacity: 1\n}\n\n.tournament {\n    background-color: #fff;\n    position: relative\n}\n\n.tournament .social-share-button {\n    position: absolute;\n    top: 40px;\n    right: 40px\n}\n\n.tournament__banner {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1549553485/playtomic/web/padel-tournament.webp);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 48px 224px\n}\n\n.tournament__title {\n    color: #fff;\n    margin-bottom: 16px;\n    text-align: center\n}\n\n.tournament__app-suggest {\n    color: #fff;\n    font-weight: 500\n}\n\n.tournament__info {\n    margin: 0 auto;\n    padding: 48px 0 80px;\n    width: 592px\n}\n\n.tournament__tags {\n    margin-top: 24px\n}\n\n.tournament__tags li {\n    display: inline-block;\n    font-size: 14px;\n    line-height: 22px;\n    padding: 0 14px;\n    border: 1px solid rgba(47,51,51,.1);\n    border-radius: 11px;\n    margin-right: .5em\n}\n\n.tournament__map {\n    height: 430px;\n    margin-top: 56px\n}\n\n.tournament__address {\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid rgba(47,51,51,.2);\n    padding: 24px 0\n}\n\n.tournament__address .icon {\n    margin-right: 8px\n}\n\n.tournament__description__text {\n    display: flex;\n    position: relative\n}\n\n.tournament__description__text img {\n    border-radius: 4px;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.6);\n    cursor: pointer;\n    margin-left: 32px;\n    width: 200px;\n    height: auto;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 16px\n}\n\n.tournament .activity-detail-card {\n    margin-top: 32px\n}\n\n@media (max-width: 576px) {\n    .tournament__banner {\n        padding:32px 16px\n    }\n\n    .tournament__banner .big-title {\n        margin-top: 8px\n    }\n\n    .tournament__banner .big-title,.tournament__banner .medium-title {\n        font-size: 16px\n    }\n\n    .medium-title {\n        margin-bottom: 16px\n    }\n\n    .medium-text {\n        font-size: 14px\n    }\n\n    .tournament__info {\n        margin: 0 auto;\n        padding: 24px 16px;\n        width: 100%\n    }\n\n    .tournament__tags {\n        margin-top: 16px\n    }\n\n    .tournament__tags li {\n        margin-top: 8px\n    }\n\n    .tournament__description__text {\n        flex-direction: column\n    }\n\n    .tournament__description__text img {\n        margin-top: 16px\n    }\n\n    .modal__win {\n        padding: 8px\n    }\n\n    .modal__content img {\n        width: 100%\n    }\n\n    .social-share-modal .modal__content {\n        padding: 8px\n    }\n\n    .tournament .social-share-button {\n        top: 0;\n        right: 0\n    }\n\n    .tournament .activity-detail-card {\n        margin-top: 8px\n    }\n}\n\n.info-accordion {\n    background-color: #fff;\n    width: 100%;\n    box-shadow: 0 0 24px -4px rgba(47,51,51,.1)\n}\n\n.info-accordion__banner {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    padding: 24px 40px\n}\n\n.info-accordion__icon {\n    margin-left: 24px;\n    opacity: .4\n}\n\n.info-accordion__title {\n    color: rgb(47,51,51);\n    font-size: 24px;\n    font-weight: 700;\n    line-height: 1.25;\n    text-align: center\n}\n\n.info-accordion__content {\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n    width: 100%\n}\n\n.info-accordion__content--shown {\n    max-height: 400px;\n    overflow: auto\n}\n\n.info-accordion__text {\n    color: rgba(47,51,51,.6);\n    font-size: 16px;\n    line-height: 1.5;\n    margin: 0 auto;\n    text-align: justify;\n    padding-bottom: 24px;\n    width: 1024px\n}\n\n.info-accordion__text .button {\n    border: none;\n    color: rgba(47,51,51,.4)\n}\n\n.info-accordion__text .button>div {\n    font-size: 16px;\n    font-weight: 400\n}\n\n.info-accordion__text .icon {\n    margin-left: 16px\n}\n\n@media (max-width: 576px) {\n    .info-accordion__banner {\n        padding:16px\n    }\n\n    .info-accordion__title {\n        font-size: 14px\n    }\n\n    .info-accordion__content {\n        padding: 0 16px\n    }\n\n    .info-accordion__text {\n        padding-bottom: 0;\n        width: auto\n    }\n\n    .info-accordion__content--shown {\n        max-height: 240px\n    }\n}\n\n.tournaments-card {\n    display: flex;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.1);\n    width: 376px;\n    height: 232px;\n    padding: 16px 0\n}\n\n.tournaments-card__banner {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/v1644503772/playtomic/web/tournament_card.png);\n    background-size: auto 100%;\n    background-position: 50%;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    box-shadow: 0 8px 24px 0 rgba(47,51,51,.15);\n    width: 136px;\n    margin-left: -32px;\n    flex-shrink: 0\n}\n\n.tournaments-card__banner>img {\n    border-radius: 4px;\n    width: 100%;\n    height: 100%\n}\n\n.tournaments-card__content {\n    padding: 0 24px;\n    line-height: 1.43;\n    position: relative;\n    min-width: 0;\n    width: 100%\n}\n\n.tournaments-card__name {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden\n}\n\n.tournaments-card__name,.tournaments-card__startTime {\n    font-size: 14px;\n    opacity: .8\n}\n\n.tournaments-card__row {\n    display: flex;\n    justify-content: space-between\n}\n\n.tournaments-card__players {\n    color: #335fff;\n    float: right;\n    font-size: 14px\n}\n\n.tournaments-card__separator {\n    border-top: 1px solid rgba(47,51,51,.1);\n    margin: 8px 0\n}\n\n.tournaments-card__info {\n    display: flex;\n    align-items: center;\n    opacity: .8\n}\n\n.tournaments-card__price {\n    color: #335fff;\n    position: absolute;\n    right: 24px;\n    bottom: 0;\n    line-height: 1\n}\n\n.tournaments-card__amount {\n    font-size: 28px;\n    font-weight: 700\n}\n\n.tournaments-card__caption {\n    font-size: 10px;\n    text-transform: lowercase\n}\n\n@media (max-width: 576px) {\n    .tournaments-card {\n        width:100%;\n        margin-bottom: 16px\n    }\n\n    .tournaments-card__banner {\n        margin-left: -16px;\n        width: 120px\n    }\n\n    .tournaments-card__content {\n        padding: 0 8px\n    }\n\n    .tournaments-card__info,.tournaments-card__name,.tournaments-card__players,.tournaments-card__startTime,.tournaments-card__title {\n        font-size: 12px\n    }\n\n    .tournaments-card__price {\n        right: 8px\n    }\n}\n\n.activity-search {\n    display: flex;\n    margin: 0 auto;\n    width: 1240px;\n    padding-bottom: 8px\n}\n\n.activity-search__inputs {\n    display: flex;\n    align-items: center;\n    position: relative\n}\n\n.activity-search .drop-down__container,.activity-search .place-input {\n    position: static\n}\n\n.activity-search__place {\n    width: 220px\n}\n\n.activity-search .input {\n    height: 50px;\n    padding: 10px 8px\n}\n\n.activity-search__place .input {\n    padding-left: 8px\n}\n\n.activity-search__date,.activity-search__gender,.activity-search__sport {\n    border-radius: 4px;\n    margin-left: 24px;\n    min-width: 120px;\n    position: relative;\n    width: auto\n}\n\n.activity-search__date .input,.activity-search__gender .input,.activity-search__sport .input {\n    border-color: transparent\n}\n\n.activity-search__gender .drop-down,.activity-search__sport .drop-down {\n    left: -24px;\n    right: -24px\n}\n\n.tournaments__banner {\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1539677513/playtomic/web/header-activities.webp);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: 50%;\n    color: #fff;\n    padding: 60px;\n    text-align: center\n}\n\n.tournaments__banner h1 {\n    font-size: 64px;\n    font-weight: 700;\n    line-height: 1.5\n}\n\n.tournaments__banner h2 {\n    font-size: 20px\n}\n\n.tournaments__cards a {\n    text-decoration: none\n}\n\n.tournaments__filters {\n    background-color: #fff;\n    padding: 8px 56px\n}\n\n.tournaments__content {\n    padding: 32px\n}\n\n.tournaments__results {\n    padding: 0 24px\n}\n\n.tournaments__results .spinner {\n    color: #335fff;\n    width: 16px\n}\n\n.tournaments__content {\n    margin: 0 auto\n}\n\n.tournaments__container {\n    margin-top: 24px;\n    padding: 0 24px\n}\n\n.tournaments__date {\n    background-color: rgb(250,250,250);\n    font-weight: 700;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    padding: 16px 48px;\n    margin-left: -48px;\n    z-index: 10\n}\n\n.tournaments__cards {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 56px;\n    margin: 24px 0\n}\n\n.tournaments__cards>a {\n    text-decoration: none\n}\n\n.tournaments__accordion {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    z-index: 100\n}\n\n.tournaments__accordion h2 {\n    font-size: 16px;\n    color: #000\n}\n\n.tournaments__accordion p {\n    margin-bottom: 16px;\n    color: #566670\n}\n\n@media (max-width: 576px) {\n    .tournaments__container {\n        margin-top:0;\n        padding: 0\n    }\n\n    .tournaments__banner {\n        padding: 16px\n    }\n\n    .tournaments__banner h1 {\n        font-size: 24px\n    }\n\n    .tournaments__banner h2 {\n        font-size: 14px\n    }\n\n    .tournaments__results {\n        padding: 0\n    }\n\n    .tournaments__content {\n        background-color: rgb(250,250,250);\n        padding: 16px;\n        min-height: 100vh\n    }\n\n    .tournaments__cards {\n        display: block;\n        margin: 8px 0;\n        padding-left: 16px\n    }\n\n    .tournaments__accordion h2,.tournaments__accordion p,.tournaments__date,.tournaments__results {\n        font-size: 14px\n    }\n\n    .tournaments__date {\n        padding: 16px 48px;\n        top: 90px;\n        z-index: 1\n    }\n}\n\n.paper {\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 32px 32px 0 rgba(47,51,51,.05)\n}\n\n.paper__padding {\n    padding: 32px\n}\n\n@media screen and (max-width: 576px) {\n    .paper__padding {\n        padding:16px\n    }\n}\n\n.validate {\n    background-color: rgb(250,250,250);\n    display: flex;\n    justify-content: center;\n    padding: 40px\n}\n\n.validate .paper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 600px\n}\n\n.validate .paper>*+* {\n    margin-top: 24px\n}\n\n.validate .paper .medium-title {\n    margin-bottom: 0\n}\n\n.validate .paper .medium-text {\n    text-align: center\n}\n\n.validate .spinner {\n    color: #335fff\n}\n\n@media screen and (max-width: 576px) {\n    .validate {\n        padding:0 16px\n    }\n\n    .validate .paper {\n        width: 100%\n    }\n\n    .validate .medium-title {\n        font-size: 24px\n    }\n}\n\n.partner-modal {\n    padding: 24px;\n    width: 480px\n}\n\n.partner-modal__img {\n    border-radius: 4px;\n    margin-bottom: 24px;\n    width: 100%\n}\n\n.partner-modal__title {\n    margin-bottom: 16px;\n    text-align: center\n}\n\n.partner-modal__text {\n    text-align: justify\n}\n\n.partner-modal .button {\n    margin-top: 16px\n}\n\n.m-partner-modal {\n    padding: 16px;\n    width: calc(100vw - 32px)\n}\n\n.m-partner-modal .partner-modal__img {\n    margin-bottom: 8px\n}\n\n.m-partner-modal .button {\n    margin-top: 8px\n}\n\n.app-banner {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column\n}\n\n.app-banner .logo * {\n    fill: #fff\n}\n\n.app-banner .logo {\n    margin: 0 auto\n}\n\n.app-banner__image img {\n    max-width: 100%;\n    margin: 12px auto 0;\n    display: block\n}\n\n.app-banner__content {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 32px;\n    color: #fff;\n    background-image: url(https://res.cloudinary.com/playtomic/image/upload/c_scale,w_600/v1543494197/playtomic/web/banner.webp);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    background-size: cover\n}\n\n.app-banner__description {\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 1.2;\n    margin-top: 32px;\n    text-shadow: 1px 1px 1px rgba(0,0,0,.5)\n}\n\n.app-banner__amount {\n    font-size: 1.5em\n}\n\n.app-banner__swipe {\n    color: #879199;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 12px 16px;\n    background-color: rgb(250,250,250);\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0\n}\n\n.app-banner__swipe .icon {\n    color: #0e2433;\n    font-size: 1.4px;\n    margin-left: 8px\n}\n\n.app-banner__download {\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 64px\n}\n\n.app-banner .app_download_buttons {\n    margin-bottom: 12px\n}\n\n.m-app-download {\n    padding: 24px;\n    box-sizing: border-box;\n    min-height: calc(100vh - 200px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center\n}\n\n.m-app-download__text {\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1.5;\n    text-align: center;\n    margin-bottom: 1em\n}\n\n.m-app-download__buttons>*+* {\n    margin-top: 16px\n}\n\n.m-search .mobile-modal__content {\n    padding: 0 16px\n}\n\n.m-search-filters {\n    display: flex;\n    flex-direction: column;\n    min-height: calc(100vh - 64px)\n}\n\n.m-search-filters__toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 8px 8px;\n    border-bottom: 1px solid #ebeaea;\n    margin-bottom: 16px\n}\n\n.m-search-filters__filters {\n    flex-grow: 1;\n    flex-shrink: 0;\n    padding: 0 8px\n}\n\n.m-search-filters__filters>li+li {\n    margin-top: 16px\n}\n\n.m-search-filters__button {\n    padding: 8px;\n    background-color: #fff;\n    position: -webkit-sticky;\n    position: sticky;\n    bottom: 0;\n    border-top: 1px solid #ebeaea\n}\n\n.m-search-filters__filter {\n    list-style: none;\n    margin: 0\n}\n\n.m-search-filters__filter-title {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: 600\n}\n\n.m-search-filters__options>ul {\n    list-style: none;\n    margin: -4px;\n    padding: 16px 0;\n    display: flex;\n    flex-wrap: wrap\n}\n\n.m-search-filters__option {\n    font-weight: 600;\n    padding: 8px 16px;\n    margin: 4px;\n    border-radius: 4px;\n    color: rgba(51,48,46,.5);\n    border: 1px solid #ebeaea;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n\n.m-search-filters__option--selected {\n    color: #fff;\n    background-color: rgb(164,217,108);\n    border-color: rgb(164,217,108)\n}\n\n.m-search-view__head {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    background-color: #fff\n}\n\n.m-search-view__head-top {\n    display: flex;\n    align-items: center;\n    padding: 8px 16px;\n    border-bottom: 1px solid #cfd3d6\n}\n\n.m-search-view__location {\n    font-size: 16px;\n    font-weight: 400;\n    background-color: rgba(47,51,51,.05);\n    color: #2f3333;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex: 1 1;\n    margin: 0 16px;\n    padding: 0 8px;\n    border-radius: 4px;\n    border: none;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    text-align: left\n}\n\n.m-search-view__head-bottom {\n    border-bottom: 1px solid #cfd3d6;\n    display: flex;\n    align-items: center;\n    padding: 4px 0\n}\n\n.m-search-view__filters {\n    display: block;\n    flex-shrink: 0;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    margin: 0;\n    padding: 8px;\n    border: none;\n    background: transparent;\n    color: #335fff\n}\n\n.m-search-view__head-bottom__inputs {\n    display: flex;\n    overflow-x: auto;\n    align-items: center\n}\n\n.m-search-view__input {\n    position: relative;\n    background-color: rgba(47,51,51,.05);\n    padding: 8px;\n    border-radius: 4px\n}\n\n.m-search-view__input>:first-child {\n    margin: 0;\n    display: block;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0\n}\n\n.m-search-view__input>:last-child {\n    font-size: 16px;\n    font-weight: 400;\n    color: #2f3333;\n    white-space: nowrap\n}\n\n*+.m-search-view__input {\n    margin-left: 8px\n}\n\n.m-search-view__place {\n    padding: 0 16px\n}\n\n.m-search-view__cards {\n    padding: 8px\n}\n\n.m-search-view__cards>*+* {\n    margin-top: 16px\n}\n\n.m-search-view__total {\n    padding: 8px;\n    line-height: 1.4\n}\n\n.m-tournaments-page .m-search-view__head-bottom {\n    padding: 4px 8px\n}\n\n      ',
        }}
      />
      <div id="root">
        <div>
          <div className="cookies">
            <div>
              <div className="cookies__text">
                At Playtomic, we collect the information needed to measure our
                audiences and use anonymous statistics to improve our
                application's user experience. We also access your location in
                order to show you nearby clubs.
                <br />
                To continue using Playtomic, you must accept the{' '}
                <a
                  href="https://blog.playtomic.io/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Use, Privacy Policy
                </a>{' '}
                and the updated{' '}
                <a href="/cookies" className="">
                  Use of Cookies
                </a>
                .
              </div>
              <div className="cookies__accept">
                <a
                  role="button"
                  className="button button--regular"
                  tabIndex={0}
                >
                  <div>I accept</div>
                </a>
              </div>
            </div>
          </div>
          <div className="home">
            <div className="home__banner" id="banner">
              <div className="banner__images">
                <div className="banner__image">
                  <img
                    src="https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1649677895/playtomic/web/banner.webp"
                    alt="banner"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="banner__elements">
                <div className="banner__header">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1028 172"
                    className="logo logo--large"
                  >
                    <path
                      className="cls-1"
                      d="M711.3,44c-23.72,0-38.46,14-38.46,36.52S687.58,117,711.3,117s38.45-14,38.45-36.52S735,44,711.3,44Zm-.11,60.4c-14.88,0-23.77-8.93-23.77-23.88s9-23.88,24-23.88,23.77,8.93,23.77,23.88S726.21,104.36,711.19,104.36Z"
                    />
                    <polygon
                      className="cls-1"
                      points="646.95 45.59 581.73 45.59 581.48 58.53 607.22 58.53 607.22 115.37 621.39 115.37 621.39 58.53 647.13 58.53 646.95 45.59"
                    />
                    <polygon
                      className="cls-1"
                      points="851.21 68.92 851.21 115.37 865.28 115.37 865.28 45.59 848.25 45.59 824.9 86.9 801.03 45.59 784.29 45.59 784.29 115.37 798.16 115.37 798.16 68.92 799.76 68.92 799.98 69.3 824.41 111.5 824.76 111.5 849.61 68.92 851.21 68.92"
                    />
                    <polygon
                      className="cls-1"
                      points="540.23 45.59 518.84 77.06 516.81 77.06 516.58 76.72 495.82 45.59 479.34 45.59 510.64 91.24 510.64 115.37 524.8 115.37 524.8 90.94 524.94 90.74 556.1 45.59 540.23 45.59"
                    />
                    <rect
                      className="cls-1"
                      x="904.73"
                      y="45.59"
                      width="14.17"
                      height="69.78"
                    />
                    <polygon
                      className="cls-1"
                      points="305.93 45.59 305.93 115.37 360.25 115.37 360.71 102.42 320.1 102.42 320.1 45.59 305.93 45.59"
                    />
                    <path
                      className="cls-1"
                      d="M248.37,45.59H211.55v69.78h14.16V96.12h21.13c17,0,26.74-9.34,26.74-25.62C273.58,54.67,264.39,45.59,248.37,45.59Zm-1.22,37.89H225.71V58.23h21.13c8.21,0,12.37,4.26,12.37,12.68C259.21,78.78,254.7,83.48,247.15,83.48Z"
                    />
                    <path
                      className="cls-1"
                      d="M413.2,45.59,386,115.37h14.46L407,98.46h35.27l6.42,16.91h14.75L436.3,45.59Zm-1.52,40.64,10.57-27.39h4.81l10.46,27.39Z"
                    />
                    <path
                      className="cls-1"
                      d="M1011.92,91.71c-2.82,8-9.22,12.65-19.94,12.65-14.89,0-23.77-8.93-23.77-23.88s9-23.88,24-23.88c10.32,0,16.85,4.32,19.43,12.84h15.53C1024,54.33,1011.53,44,992.08,44c-23.71,0-38.45,14-38.45,36.52S968.37,117,992.08,117c18.5,0,32.27-10,35.23-25.29Z"
                    />
                    <path
                      className="cls-1"
                      d="M67.3,1.13H.69V133H37.21v37.87H67.3c27.55,0,50-21.09,50-47V48.14C117.26,22.22,94.85,1.13,67.3,1.13Zm-5.85,158H48.92v-64H61.45Zm44.11-35.3c0,17.63-14.08,32.28-32.4,34.89v-26.1c15.06-1.8,26.9-9.67,32.4-18.58Zm0-37.86c0,17.62-14.09,32.23-32.4,34.84v-26c15.06-1.8,26.9-9.67,32.4-18.58ZM67.3,83.44H37.21V121.3H12.4V12.84H67.3c21.1,0,38.26,15.84,38.26,35.3S88.4,83.44,67.3,83.44Z"
                    />
                  </svg>
                  <div id="sign-buttons">
                    <div className="sign-buttons Static">
                      <a
                        id="sign-buttons__activities"
                        role="button"
                        className="button button--regular"
                        href="/tournaments"
                        tabIndex={0}
                      >
                        <div>Activities</div>
                      </a>
                      <a
                        id="sign-buttons__sign-in"
                        role="button"
                        className="button button--regular"
                        tabIndex={0}
                      >
                        <div>Sign In</div>
                      </a>
                      <a
                        id="sign-buttons__acquisition"
                        role="button"
                        className="button button--regular"
                        href="https://playtomic.com/?utm_source=playtomic.io&utm_medium=headerbutton"
                        tabIndex={0}
                      >
                        <div>Are you a club manager?</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="banner__content">
                  <h1>
                    Find where and with whom to play Padel &amp; Tennis
                    instantly
                  </h1>
                  <h2>
                    Reach your best level, find equal level matches, courts
                    around the world and teammates or rivals to play with
                  </h2>
                  <form className="search" id="search__home">
                    <div className="search__inputs">
                      <div className="search__place">
                        <input
                          id="search__home__location"
                          className="input"
                          disabled
                        />
                      </div>
                      <div className="search__sport">
                        <div
                          id="search__home__sport"
                          role="button"
                          tabIndex={0}
                        >
                          <div
                            id="search__home__sport"
                            className="drop-down__container list-input"
                          >
                            <div tabIndex={-1} role="button" className="input">
                              Padel
                            </div>
                            <div className="drop-down">
                              <a
                                id="search__home__sport-PADEL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Padel</div>
                              </a>
                              <a
                                id="search__home__sport-TENNIS"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Tennis</div>
                              </a>
                              <a
                                id="search__home__sport-FOOTBALL7"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Football 7</div>
                              </a>
                              <a
                                id="search__home__sport-FUTSAL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Futsal</div>
                              </a>
                              <a
                                id="search__home__sport-FOOTBALL_OTHERS"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Football</div>
                              </a>
                              <a
                                id="search__home__sport-PADBOL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Padbol</div>
                              </a>
                              <a
                                id="search__home__sport-SQUASH"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Squash</div>
                              </a>
                              <a
                                id="search__home__sport-BADMINTON"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Badminton</div>
                              </a>
                              <a
                                id="search__home__sport-PICKLEBALL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Pickleball</div>
                              </a>
                              <a
                                id="search__home__sport-BEACH_TENNIS"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Beach Tennis</div>
                              </a>
                              <a
                                id="search__home__sport-BEACH_VOLLEY"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Beach Volley</div>
                              </a>
                              <a
                                id="search__home__sport-VOLLEYBALL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Volleyball</div>
                              </a>
                              <a
                                id="search__home__sport-BASKETBALL"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Basketball</div>
                              </a>
                              <a
                                id="search__home__sport-CRICKET"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Cricket</div>
                              </a>
                              <a
                                id="search__home__sport-TABLE_TENNIS"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>Table Tennis</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search__date">
                        <div id="search__home__date" role="button" tabIndex={0}>
                          <div
                            id="search__home__date"
                            className="drop-down__container date-input"
                          >
                            <div tabIndex={-1} role="button" className="input">
                              Today
                            </div>
                            <div className="drop-down">
                              <div
                                id="search__home__date__date-picker"
                                className="date-picker"
                              >
                                <div
                                  className="date-picker__nav"
                                  id="search__home__date__date-picker"
                                >
                                  <a
                                    id="search__home__date__date-picker__today"
                                    role="button"
                                    className="button button--filled button--toggled"
                                    tabIndex={-1}
                                  >
                                    <div>Today</div>
                                  </a>
                                  <a
                                    id="search__home__date__date-picker__tomorrow"
                                    role="button"
                                    className="button button--filled"
                                    tabIndex={-1}
                                  >
                                    <div>Tomorrow</div>
                                  </a>
                                </div>
                                <div className="date-picker__month">
                                  <a className="date-picker__month-arrow">
                                    <svg
                                      className="icon icon--chevron icon--chevron-left"
                                      viewBox="0 0 10 16"
                                    >
                                      <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                                    </svg>
                                  </a>
                                  <div className="date-picker__month-text">
                                    November 2023
                                  </div>
                                  <a className="date-picker__month-arrow">
                                    <svg
                                      className="icon icon--chevron icon--chevron-right"
                                      viewBox="0 0 10 16"
                                    >
                                      <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                                    </svg>
                                  </a>
                                </div>
                                <ul className="date-picker__week">
                                  <li>M</li>
                                  <li>T</li>
                                  <li>W</li>
                                  <li>T</li>
                                  <li>F</li>
                                  <li>S</li>
                                  <li>S</li>
                                </ul>
                                <ul className="date-picker__days">
                                  <li />
                                  <li />
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      01
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      02
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      03
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      04
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      05
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      06
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      07
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      08
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      09
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      10
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      11
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      12
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--disabled"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      13
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day date-picker__day--picked"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      14
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      15
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      16
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      17
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      18
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      19
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      20
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      21
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      22
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      23
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      24
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      25
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      26
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      27
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      28
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      29
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="date-picker__day"
                                      role="button"
                                      tabIndex={-1}
                                    >
                                      30
                                    </a>
                                  </li>
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                  <li />
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search__hour">
                        <div id="search__home__hour" role="button" tabIndex={0}>
                          <div
                            id="search__home__hour"
                            className="drop-down__container list-input"
                          >
                            <div tabIndex={-1} role="button" className="input">
                              09:00
                            </div>
                            <div className="drop-down">
                              <a
                                id="search__home__hour-09:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>09:00</div>
                              </a>
                              <a
                                id="search__home__hour-09:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>09:30</div>
                              </a>
                              <a
                                id="search__home__hour-10:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>10:00</div>
                              </a>
                              <a
                                id="search__home__hour-10:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>10:30</div>
                              </a>
                              <a
                                id="search__home__hour-11:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>11:00</div>
                              </a>
                              <a
                                id="search__home__hour-11:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>11:30</div>
                              </a>
                              <a
                                id="search__home__hour-12:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>12:00</div>
                              </a>
                              <a
                                id="search__home__hour-12:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>12:30</div>
                              </a>
                              <a
                                id="search__home__hour-13:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>13:00</div>
                              </a>
                              <a
                                id="search__home__hour-13:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>13:30</div>
                              </a>
                              <a
                                id="search__home__hour-14:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>14:00</div>
                              </a>
                              <a
                                id="search__home__hour-14:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>14:30</div>
                              </a>
                              <a
                                id="search__home__hour-15:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>15:00</div>
                              </a>
                              <a
                                id="search__home__hour-15:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>15:30</div>
                              </a>
                              <a
                                id="search__home__hour-16:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>16:00</div>
                              </a>
                              <a
                                id="search__home__hour-16:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>16:30</div>
                              </a>
                              <a
                                id="search__home__hour-17:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>17:00</div>
                              </a>
                              <a
                                id="search__home__hour-17:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>17:30</div>
                              </a>
                              <a
                                id="search__home__hour-18:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>18:00</div>
                              </a>
                              <a
                                id="search__home__hour-18:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>18:30</div>
                              </a>
                              <a
                                id="search__home__hour-19:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>19:00</div>
                              </a>
                              <a
                                id="search__home__hour-19:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>19:30</div>
                              </a>
                              <a
                                id="search__home__hour-20:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>20:00</div>
                              </a>
                              <a
                                id="search__home__hour-20:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>20:30</div>
                              </a>
                              <a
                                id="search__home__hour-21:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>21:00</div>
                              </a>
                              <a
                                id="search__home__hour-21:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>21:30</div>
                              </a>
                              <a
                                id="search__home__hour-22:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>22:00</div>
                              </a>
                              <a
                                id="search__home__hour-22:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>22:30</div>
                              </a>
                              <a
                                id="search__home__hour-23:00"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>23:00</div>
                              </a>
                              <a
                                id="search__home__hour-23:30"
                                className="list-input__option"
                                role="button"
                                tabIndex={-1}
                              >
                                <div>23:30</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search__button">
                      <button
                        id="search__home__submit"
                        type="submit"
                        onClick={() => history.push('/book-court')}
                        className="button button--filled button--secondary"
                        tabIndex={0}
                      >
                        <div>Search</div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="sticky">
                <div className="sticky-search">
                  <div className="sticky-search__search">
                    <svg
                      className="logo"
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 502 502"
                    >
                      <circle
                        className="cls-1"
                        cx={251}
                        cy={251}
                        r={250}
                        fill="#ecff00"
                      />
                      <path
                        className="cls-2"
                        fill="#0e2433"
                        d="M274,120H166.57V332.53h59.35v61.52h48c44.29,0,80.33-33.88,80.33-75.52v-123C354.29,153.84,318.25,120,274,120Zm-8.65,256.79H243.23V271h22.08ZM337,318.6c0,29.38-23.7,53.68-54.37,57.6V332.15c24.29-2.67,47.57-15.88,54.37-32.58ZM337,257c0,29.38-23.7,53.68-54.37,57.6V270.56C306.9,267.89,330.18,254.68,337,238Zm-63-3.32h-48v61.53h-42v-178H274c34.75,0,63,26.12,63,58.22S308.71,253.69,274,253.69Z"
                      />
                    </svg>
                    <form className="search" id="search__sticky">
                      <div className="search__inputs">
                        <div className="search__place">
                          <input
                            id="search__sticky__location"
                            className="input"
                            disabled
                          />
                        </div>
                        <div className="search__sport">
                          <div
                            id="search__sticky__sport"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              id="search__sticky__sport"
                              className="drop-down__container list-input"
                            >
                              <div
                                tabIndex={-1}
                                role="button"
                                className="input"
                              >
                                Padel
                              </div>
                              <div className="drop-down">
                                <a
                                  id="search__sticky__sport-PADEL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Padel</div>
                                </a>
                                <a
                                  id="search__sticky__sport-TENNIS"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Tennis</div>
                                </a>
                                <a
                                  id="search__sticky__sport-FOOTBALL7"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Football 7</div>
                                </a>
                                <a
                                  id="search__sticky__sport-FUTSAL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Futsal</div>
                                </a>
                                <a
                                  id="search__sticky__sport-FOOTBALL_OTHERS"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Football</div>
                                </a>
                                <a
                                  id="search__sticky__sport-PADBOL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Padbol</div>
                                </a>
                                <a
                                  id="search__sticky__sport-SQUASH"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Squash</div>
                                </a>
                                <a
                                  id="search__sticky__sport-BADMINTON"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Badminton</div>
                                </a>
                                <a
                                  id="search__sticky__sport-PICKLEBALL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Pickleball</div>
                                </a>
                                <a
                                  id="search__sticky__sport-BEACH_TENNIS"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Beach Tennis</div>
                                </a>
                                <a
                                  id="search__sticky__sport-BEACH_VOLLEY"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Beach Volley</div>
                                </a>
                                <a
                                  id="search__sticky__sport-VOLLEYBALL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Volleyball</div>
                                </a>
                                <a
                                  id="search__sticky__sport-BASKETBALL"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Basketball</div>
                                </a>
                                <a
                                  id="search__sticky__sport-CRICKET"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Cricket</div>
                                </a>
                                <a
                                  id="search__sticky__sport-TABLE_TENNIS"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>Table Tennis</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="search__date">
                          <div
                            id="search__sticky__date"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              id="search__sticky__date"
                              className="drop-down__container date-input"
                            >
                              <div
                                tabIndex={-1}
                                role="button"
                                className="input"
                              >
                                Today
                              </div>
                              <div className="drop-down">
                                <div
                                  id="search__sticky__date__date-picker"
                                  className="date-picker"
                                >
                                  <div
                                    className="date-picker__nav"
                                    id="search__sticky__date__date-picker"
                                  >
                                    <a
                                      id="search__sticky__date__date-picker__today"
                                      role="button"
                                      className="button button--filled button--toggled"
                                      tabIndex={-1}
                                    >
                                      <div>Today</div>
                                    </a>
                                    <a
                                      id="search__sticky__date__date-picker__tomorrow"
                                      role="button"
                                      className="button button--filled"
                                      tabIndex={-1}
                                    >
                                      <div>Tomorrow</div>
                                    </a>
                                  </div>
                                  <div className="date-picker__month">
                                    <a className="date-picker__month-arrow">
                                      <svg
                                        className="icon icon--chevron icon--chevron-left"
                                        viewBox="0 0 10 16"
                                      >
                                        <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                                      </svg>
                                    </a>
                                    <div className="date-picker__month-text">
                                      November 2023
                                    </div>
                                    <a className="date-picker__month-arrow">
                                      <svg
                                        className="icon icon--chevron icon--chevron-right"
                                        viewBox="0 0 10 16"
                                      >
                                        <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                                      </svg>
                                    </a>
                                  </div>
                                  <ul className="date-picker__week">
                                    <li>M</li>
                                    <li>T</li>
                                    <li>W</li>
                                    <li>T</li>
                                    <li>F</li>
                                    <li>S</li>
                                    <li>S</li>
                                  </ul>
                                  <ul className="date-picker__days">
                                    <li />
                                    <li />
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        01
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        02
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        03
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        04
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        05
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        06
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        07
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        08
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        09
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        10
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        11
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        12
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--disabled"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        13
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day date-picker__day--picked"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        14
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        15
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        16
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        17
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        18
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        19
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        20
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        21
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        22
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        23
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        24
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        25
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        26
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        27
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        28
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        29
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="date-picker__day"
                                        role="button"
                                        tabIndex={-1}
                                      >
                                        30
                                      </a>
                                    </li>
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                    <li />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="search__hour">
                          <div
                            id="search__sticky__hour"
                            role="button"
                            tabIndex={0}
                          >
                            <div
                              id="search__sticky__hour"
                              className="drop-down__container list-input"
                            >
                              <div
                                tabIndex={-1}
                                role="button"
                                className="input"
                              >
                                09:00
                              </div>
                              <div className="drop-down">
                                <a
                                  id="search__sticky__hour-09:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>09:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-09:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>09:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-10:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>10:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-10:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>10:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-11:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>11:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-11:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>11:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-12:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>12:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-12:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>12:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-13:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>13:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-13:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>13:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-14:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>14:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-14:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>14:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-15:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>15:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-15:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>15:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-16:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>16:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-16:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>16:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-17:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>17:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-17:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>17:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-18:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>18:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-18:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>18:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-19:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>19:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-19:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>19:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-20:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>20:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-20:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>20:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-21:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>21:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-21:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>21:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-22:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>22:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-22:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>22:30</div>
                                </a>
                                <a
                                  id="search__sticky__hour-23:00"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>23:00</div>
                                </a>
                                <a
                                  id="search__sticky__hour-23:30"
                                  className="list-input__option"
                                  role="button"
                                  tabIndex={-1}
                                >
                                  <div>23:30</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="search__button">
                        <button
                          id="search__sticky__submit"
                          type="submit"
                          className="button button--filled button--secondary"
                          tabIndex={0}
                        >
                          <div>Search</div>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="sticky-search__sign">
                    <div id="sign-buttons">
                      <div className="sign-buttons Sticky">
                        <a
                          id="sign-buttons__activities"
                          role="button"
                          className="button button--regular"
                          href="/tournaments"
                          tabIndex={0}
                        >
                          <div>Activities</div>
                        </a>
                        <a
                          id="sign-buttons__sign-in"
                          role="button"
                          className="button button--regular"
                          tabIndex={0}
                        >
                          <div>Sign In</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__highlight-clubs" id="highlight">
              <div className="highlight-clubs__madrid">
                <div className="highlight-clubs__header">
                  <div className="medium-subtitle highlight-clubs__subtitle">
                    Top searched sport clubs in Madrid. Book now!
                  </div>
                  <div className="highlight-clubs__show-more">
                    <a
                      href="/search?search__placeLocation=40.416775%2C-3.70379&search__placeText=Madrid&search__timeZone=Europe%2FMadrid"
                      rel="nofollow"
                      className="link link--secondary"
                    >
                      more sports clubs in Madrid
                    </a>
                  </div>
                </div>
                <div className="highlight-clubs__content">
                  <div className="slides">
                    <div className="slides__pages">
                      <div style={{ overflowX: 'hidden' }}>
                        <div
                          style={{
                            WebkitFlexDirection: 'row',
                            flexDirection: 'row',
                            WebkitTransition: 'all 0s ease 0s',
                            transition: 'all 0s ease 0s',
                            direction: 'ltr',
                            display: 'flex',
                            willChange: 'transform',
                          }}
                          className="react-swipeable-view-container"
                        >
                          <div
                            style={{
                              width: '100%',
                              WebkitFlexShrink: 0,
                              flexShrink: 0,
                              overflow: 'auto',
                            }}
                            aria-hidden="false"
                            data-swipeable="true"
                          >
                            <div
                              className="slides__page"
                              style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                            >
                              <div className="slides__item">
                                <article
                                  id="card-da7c7d20-43b3-11e8-8674-52540049669c"
                                  className="card"
                                >
                                  <a
                                    href="/vita10-sport-club/da7c7d20-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/pro/tenants/da7c7d20-43b3-11e8-8674-52540049669c/vita10padelindoor_0001)',
                                      }}
                                    >
                                      <h1>Vita10 Sport Club</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        Calle Impresores, 10{/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        28660
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/vita10-sport-club/da7c7d20-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                              <div className="slides__item">
                                <article
                                  id="card-da75d80c-43b3-11e8-8674-52540049669c"
                                  className="card"
                                >
                                  <a
                                    href="/parque-puerta-de-hierro/da75d80c-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/pro/tenants/da75d80c-43b3-11e8-8674-52540049669c/fmp_0001)',
                                      }}
                                    >
                                      <h1>Parque Puerta de Hierro</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        Carretera de El Pardo Km 1{/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        28035
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/parque-puerta-de-hierro/da75d80c-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                              <div className="slides__item">
                                <article
                                  id="card-da79175c-43b3-11e8-8674-52540049669c"
                                  className="card"
                                >
                                  <a
                                    href="/padel-madrid-las-tablas/da79175c-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/pro/tenants/da79175c-43b3-11e8-8674-52540049669c/padelmadridlastablas_0001)',
                                      }}
                                    >
                                      <h1>Padel Madrid Las Tablas</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        Avenida del Camino de Santiago, 25
                                        {/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        28050
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/padel-madrid-las-tablas/da79175c-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slides__arrows">
                      <div className="slides__arrow">
                        <svg
                          className="icon icon--chevron icon--chevron-left"
                          viewBox="0 0 10 16"
                        >
                          <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                        </svg>
                      </div>
                      <div className="slides__arrow">
                        <svg
                          className="icon icon--chevron icon--chevron-right"
                          viewBox="0 0 10 16"
                        >
                          <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight-clubs__barcelona">
                <div className="highlight-clubs__header">
                  <div className="medium-subtitle highlight-clubs__subtitle">
                    Top searched sport clubs in Barcelona. Book now!
                  </div>
                  <div className="highlight-clubs__show-more">
                    <a
                      href="/search?search__placeLocation=41.385064%2C2.173403&search__placeText=Barcelona&search__timeZone=Europe%2FMadrid"
                      rel="nofollow"
                      className="link link--secondary"
                    >
                      more sports clubs in Barcelona
                    </a>
                  </div>
                </div>
                <div className="highlight-clubs__content">
                  <div className="slides">
                    <div className="slides__pages">
                      <div style={{ overflowX: 'hidden' }}>
                        <div
                          style={{
                            WebkitFlexDirection: 'row',
                            flexDirection: 'row',
                            WebkitTransition: 'all 0s ease 0s',
                            transition: 'all 0s ease 0s',
                            direction: 'ltr',
                            display: 'flex',
                            willChange: 'transform',
                          }}
                          className="react-swipeable-view-container"
                        >
                          <div
                            style={{
                              width: '100%',
                              WebkitFlexShrink: 0,
                              flexShrink: 0,
                              overflow: 'auto',
                            }}
                            aria-hidden="false"
                            data-swipeable="true"
                          >
                            <div
                              className="slides__page"
                              style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
                            >
                              <div className="slides__item">
                                <article
                                  id="card-da77c69a-43b3-11e8-8674-52540049669c"
                                  className="card"
                                >
                                  <a
                                    href="/el-prat/da77c69a-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/develop/tenants/da77c69a-43b3-11e8-8674-52540049669c/prat_0001)',
                                      }}
                                    >
                                      <h1>El Prat</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        B-250{/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        08820
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/el-prat/da77c69a-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                              <div className="slides__item">
                                <article
                                  id="card-da796757-43b3-11e8-8674-52540049669c"
                                  className="card"
                                >
                                  <a
                                    href="/augusta-padel/da796757-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/pro/tenants/da796757-43b3-11e8-8674-52540049669c/augustapadel_0001)',
                                      }}
                                    >
                                      <h1>Augusta Padel</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        Av. de la Guinardera, 11-13{/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        08174
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/augusta-padel/da796757-43b3-11e8-8674-52540049669c?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                              <div className="slides__item">
                                <article
                                  id="card-7eb7e813-af3e-4f72-9b0c-a55aefc55607"
                                  className="card"
                                >
                                  <a
                                    href="/padel-7-sant-marti/7eb7e813-af3e-4f72-9b0c-a55aefc55607?search__sportValue=PADEL"
                                    className="card__header-link"
                                  >
                                    <header
                                      className="card__header"
                                      style={{
                                        backgroundImage:
                                          'url(https://res.cloudinary.com/playtomic/image/upload/c_limit,w_400/v1/pro/tenants/7eb7e813-af3e-4f72-9b0c-a55aefc55607/santmarti_0001)',
                                      }}
                                    >
                                      <h1>Padel 7 Sant Martí</h1>
                                    </header>
                                  </a>
                                  <div className="card__body">
                                    <div className="card__address">
                                      <svg
                                        className="icon icon--marker"
                                        viewBox="0 0 9 12"
                                      >
                                        <path d="M4.2,0c-2.303,0.003 -4.197,1.897 -4.2,4.2c0,2.133 3.346,6.48 3.727,6.969l0.473,0.606l0.473,-0.606c0.381,-0.488 3.727,-4.836 3.727,-6.969c0,-2.316 -1.885,-4.2 -4.2,-4.2" />
                                      </svg>
                                      <div className="card__address__street">
                                        Carrer de Puigcerdà, 113{/* */},
                                      </div>
                                      <div className="card__address__postal_code">
                                        08019
                                      </div>
                                    </div>
                                    <a
                                      role="button"
                                      className="button button--regular"
                                      href="/padel-7-sant-marti/7eb7e813-af3e-4f72-9b0c-a55aefc55607?search__sportValue=PADEL"
                                      tabIndex={0}
                                    >
                                      <div>Book now</div>
                                    </a>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slides__arrows">
                      <div className="slides__arrow">
                        <svg
                          className="icon icon--chevron icon--chevron-left"
                          viewBox="0 0 10 16"
                        >
                          <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                        </svg>
                      </div>
                      <div className="slides__arrow">
                        <svg
                          className="icon icon--chevron icon--chevron-right"
                          viewBox="0 0 10 16"
                        >
                          <path d="M5.489 8L0 2.296 2.602 0 10 8l-7.398 8L0 13.704z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__apparel" id="apparel">
              <div className="apparel__content">
                <div className="apparel__title medium-subtitle">
                  <img
                    src="https://res.cloudinary.com/playtomic/image/upload/v1653493934/playtomic/web/logo_text.svg"
                    alt="logo"
                  />
                  <span className="apparel__title__separator">|</span>Apparel
                  <span className="apparel__claim">NEW!</span>
                </div>
                <div className="apparel__subtitle">
                  We present you our new sportswear collection
                </div>
                <div className="apparel__collections">
                  <img
                    className="apparel__seal"
                    src="https://res.cloudinary.com/playtomic/image/upload/v1653311732/playtomic/web/seal.svg"
                    alt="Playtomic seal"
                  />
                  <div className="apparel__collection apparel__collection--men">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://shop.playtomic.com/en/collections/coleccion-hombre?utm_source=web_com&utm_medium=banner&utm_campaign=men"
                      className="button button--filled button--primary"
                    >
                      Men’s Collection
                    </a>
                  </div>
                  <div className="apparel__collection apparel__collection--women">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://shop.playtomic.com/en/collections/coleccion-mujer?utm_source=web_com&utm_medium=banner&utm_campaign=women"
                      className="button button--filled button--primary"
                    >
                      Women’s Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home__steps" id="steps">
              <div className="steps__title">
                Playtomic makes it easier for you
              </div>
              <div className="steps__content">
                <div className="step">
                  <div className="step__title">
                    <span className="step__circle">1</span>Find
                  </div>
                  <div className="step__divider" />
                  <div className="step__text">
                    With Playtomic you have the possibility to create private
                    matches with friends, make them public to find partners or
                    search for active matches to join.
                  </div>
                </div>
                <div className="step">
                  <div className="step__title">
                    <span className="step__circle">2</span>Book
                  </div>
                  <div className="step__divider" />
                  <div className="step__text">
                    With our player level estimation system, you always play
                    knowing your level and that of your opponents, enjoying
                    competitive matches that will make you improve faster.
                  </div>
                </div>
                <div className="step">
                  <div className="step__title">
                    <span className="step__circle">3</span>Our community
                    inspires us
                  </div>
                  <div className="step__divider" />
                  <div className="step__text">
                    Whether with friends or strangers, play whenever you want
                    and be part of Playtomic, the world's largest ever-growing
                    community of racket sports players.
                  </div>
                </div>
              </div>
            </div>
            <div className="home__metrics" id="metrics">
              <div className="metrics__content">
                <div className="metrics__data">
                  <div className="metrics__number">+{/* */}2,900</div>
                  <div className="metrics__text">Sports clubs</div>
                </div>
                <div className="metrics__data">
                  <div className="metrics__number">+{/* */}12,700</div>
                  <div className="metrics__text">Courts and pitches</div>
                </div>
                <div className="metrics__data">
                  <div className="metrics__number">
                    +{/* */}1{/* */}M
                  </div>
                  <div className="metrics__text">Players</div>
                </div>
                <div className="metrics__data">
                  <div className="metrics__number">+{/* */}1,500</div>
                  <div className="metrics__text">Cities</div>
                </div>
              </div>
            </div>
            <div className="home__ratings" id="ratings">
              <div className="ratings__title">Inspiring testimonies</div>
              <div className="ratings__rating">
                <div className="rating">
                  <div className="rating__header">
                    <div
                      className="rating__image"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584655/playtomic/web/miguel-angel-r.webp")',
                      }}
                    />
                    <div className="rating__info">
                      <div className="rating__title">The best App!</div>
                      <div className="rating__name">Miguel Ángel R</div>
                    </div>
                  </div>
                  <div className="rating__stars">
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                  </div>
                  <div className="rating__opinion">
                    With Playtomic I have a great selection of courts and it's
                    super easy to book, it takes three steps and I can do it
                    anytime
                  </div>
                </div>
                <div className="rating">
                  <div className="rating__header">
                    <div
                      className="rating__image"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584655/playtomic/web/marta-b.webp")',
                      }}
                    />
                    <div className="rating__info">
                      <div className="rating__title">Amazing!</div>
                      <div className="rating__name">Marta B</div>
                    </div>
                  </div>
                  <div className="rating__stars">
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                  </div>
                  <div className="rating__opinion">
                    It's been my best discovery. It's quick and the payment is
                    safe. I love finding available courts in my area!
                  </div>
                </div>
                <div className="rating">
                  <div className="rating__header">
                    <div
                      className="rating__image"
                      style={{
                        backgroundImage:
                          'url("https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1536584655/playtomic/web/miguel-angel-n.webp")',
                      }}
                    />
                    <div className="rating__info">
                      <div className="rating__title">Quick and easy!</div>
                      <div className="rating__name">Miguel Ángel N</div>
                    </div>
                  </div>
                  <div className="rating__stars">
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                    <svg className="icon icon--star" viewBox="0 0 22 21">
                      <path
                        fill="#FACA64"
                        fillRule="evenodd"
                        stroke="#FACA64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                      />
                    </svg>
                  </div>
                  <div className="rating__opinion">
                    An app to find and instantly book available football pitches
                    nearby at any time. A must for football teams and players.
                    Highly recommended!
                  </div>
                </div>
              </div>
            </div>
            <div className="home__advantages" id="advantages">
              <div className="advantages__content">
                <div className="advantages__item">
                  <div className="advantages__title">Wherever you want</div>
                  <div className="advantages__info">With whoever you want</div>
                </div>
                <div className="advantages__item">
                  <div className="advantages__title">With whoever you want</div>
                  <div className="advantages__info">
                    Synchronise your contact list, search manually or find
                    players of your level to play with near you, thanks to
                    personalised suggestions based on your location.
                  </div>
                </div>
              </div>
              <img
                className="advantages__seal"
                src="https://res.cloudinary.com/playtomic/image/upload/v1644320990/playtomic/web/seal_text.svg"
                alt="Playtomic seal"
              />
            </div>
            <div className="home__description" id="description">
              <div className="description__title">What is Playtomic?</div>
              <div className="description__block">
                <div>
                  <p>
                    Playtomic is the largest and fastest-growing community of
                    racket sport players in the world. It is made by and for you
                    because we want you to be part of it.
                  </p>
                  <p>
                    Every time you think about your favourite racket sport, you
                    will know that you only have to worry about playing the game
                    as Playtomic will take care of everything else. What happens
                    during your match is just as important as the before and
                    after, which is why we focus on helping you enjoy it from
                    the beginning until the end.
                  </p>
                  <p>
                    Playtomic is the place where players, clubs, professionals,
                    teachers, sponsors, in short, all racket fans get together
                    to enjoy our favourite sport, sharing the court,
                    experiences, learning and above all, community.
                  </p>
                </div>
              </div>
            </div>
            <div className="home__media" id="media">
              <div className="media__title">They talk about us</div>
              <div className="media__news">
                <a
                  className="news2"
                  href="http://www.abc.es/economia/abci-playtomic-startup-espanola-cambia-reglas-partido-201801300151_noticia.html"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  <div className="news2__content">
                    <div className="news2__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={86}
                        height={28}
                        viewBox="0 0 86 29"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M-97-14h280v56H-97z" />
                          <path
                            fill="#2f3333"
                            d="M81.597 1.739c.726 0 1.125-.795 1.453-1.739h.722l1.268 8.003h-.723c-2.32-2.752-5.687-5.976-10.468-5.976-5.542 0-10.2 4.144-9.78 10.684.338 5.248 4.53 12.46 11.447 12.46 3.041 0 6.155-.976 9.018-2.787l.397.869c-1.702 1.737-5.358 4.816-11.985 4.816-7.355 0-13.511-5.145-13.511-14.161C59.435 6.555 65.339 0 73.524 0c4.959 0 7.063 1.739 8.073 1.739zM34.589 4.13c0-1.811-.797-2.538-2.392-3.046V.361h12.314c5.179 0 9.74 2.609 9.74 7.461 0 2.499-1.156 4.274-2.783 5.505 2.278.834 4.344 2.753 4.344 6.156 0 6.341-5.433 8.22-11.19 8.22H32.197v-.722c1.595-.506 2.34-.598 2.392-3.041V4.13zm8.474-2.101c-1.737 0-3.113.146-4.129.29v10.104c1.267.869 3.369 1.521 5.253 1.521 2.462 0 5.536-.796 5.536-5.542 0-4.272-2.604-6.373-6.66-6.373zm5.721 12.747c-1.594.581-3.258.833-4.597.833-2.174 0-4.166-.652-5.253-1.341v11.411c1.665.29 3.369.359 4.71.359 3.911 0 7.638-1.192 7.638-6.154 0-2.753-1.485-4.491-2.498-5.108zM22.781 27.705l-2.755-6.811H7.171l-2.824 6.811H0v-.721c1.664-.29 2.463-1.088 3.008-2.394l9.307-22.272c-.578-.688-1.089-.978-1.813-1.231V.361h6.014l9.851 24.193c.47 1.194 1.193 2.245 2.933 2.43v.721h-6.519zm-14.703-8.98h11.08L13.727 5.216 8.078 18.725z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="news2__title">ABC</div>
                    <div className="news2__text">
                      Playtomic, the Spanish app that is changing the rules of
                      game!
                    </div>
                  </div>
                </a>
                <a
                  className="news2"
                  href="https://www.cuatro.com/noticias/economia/reservas-deportivas-Playtomic-alcanza-descargas_0_2497950685.html"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  <div className="news2__content">
                    <div className="news2__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={120}
                        height={28}
                        viewBox="0 0 120 28"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M-80-14h280v56H-80z" />
                          <path
                            fill="#2f3333"
                            d="M120 4.18a4.066 4.066 0 0 1-4.06 4.068 4.065 4.065 0 0 1-4.074-4.069 4.067 4.067 0 1 1 8.134 0zm-8.203 11.842c0 6.277-5.082 11.354-11.355 11.354-6.264 0-11.348-5.077-11.348-11.354 0-6.264 5.084-11.348 11.348-11.348 6.273 0 11.355 5.084 11.355 11.348zM77.248 5.155h5.248v3.009c1.33-2.489 3.73-3.527 6.78-3.527V9.97c-3.562 0-6.78 1.674-6.78 6.398v10.518h-5.248V5.155zM64.856.19h5.248v4.86h4.67v4.703h-4.67v10.073c0 1.718.334 2.661 2.357 2.661.726 0 1.547-.172 2.314-.249v4.289c-1.246.253-2.533.517-4.165.517-4.3 0-5.754-1.93-5.754-5.238V.19zm-7.734 26.478v-1.953c-2.008 1.61-4.352 2.464-7.024 2.464-4.094 0-7.327-2.601-7.327-6.767 0-4.22 3.358-6.094 6.557-6.732l2.161-.427c1.875-.383 4.3-.804 5.633-1.273v-.634c0-2.143-1.839-2.73-4.094-2.73-3.021 0-4.005.892-4.005 3.232l-5.193-.206c0-5.061 4.48-7.022 9.198-7.022 4.642 0 9.279.933 9.279 7.07v14.978h-5.185zm0-10.775c-.684.345-1.532.603-2.478.768l-2.852.596c-1.947.385-3.575.936-3.575 2.983 0 1.618 1.5 2.68 3.367 2.68 2.42 0 5.538-1.188 5.538-3.948v-3.08zM15.64 12.894c-.687-2.137-2.519-3.462-4.572-3.462-3.72 0-5.598 3.163-5.598 6.542 0 3.375 1.661 6.538 5.298 6.538 3.123 0 4.44-2.214 5.254-4.193l4.453 2.354c-1.455 3.168-3.935 6.626-9.788 6.626C4.054 27.3 0 22.418 0 15.974 0 9.514 4.054 4.637 11.07 4.637c5.254 0 7.815 2.916 9.142 6.16l-4.571 2.097zm20.23-7.676h5.1v13.886l.003.2c0 .936-.19 3.747-2.31 5.99C36.974 27.08 34.569 28 31.517 28c-3.202 0-5.725-.94-7.486-2.8-2.438-2.564-2.328-5.82-2.302-6.187l-.012.138V5.218h5.098v13.933l-.002.115c0 .156.022 1.505.954 2.459.755.779 2.016 1.174 3.75 1.174 1.58 0 2.72-.37 3.426-1.093.901-.919.936-2.314.936-2.52l-.006-14.068z"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="news2__title">Cuatro</div>
                    <div className="news2__text">
                      Playtomic, the sports booking app, reaches 20,000
                      downloads and nearly 3000 bookings.
                    </div>
                  </div>
                </a>
                <a
                  className="news2"
                  href="https://www.telecinco.es/informativos/economia/reservas-deportivas-Playtomic-alcanza-descargas_0_2497950683.html"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  <div className="news2__content">
                    <div className="news2__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={179}
                        height={34}
                        viewBox="0 0 179 34"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M-51-11h280v56H-51z" />
                          <g fill="#2f3333">
                            <path d="M3.65 21.734c0 2.258 1.743 4.015 3.983 4.015s4.046-1.757 4.046-4.015c0-2.259-1.805-4.078-4.046-4.078-2.24 0-3.983 1.82-3.983 4.078" />
                            <path d="M0 32.615c2.168.368 4.336.49 7.186.49 12.76 0 19.635-4.474 19.635-12.138 0-7.173-6.318-11.28-17.034-11.28-2.23 0-3.965.06-5.636.183l-2.602 5.947c2.044-.123 3.53-.123 6.256-.123 8.61 0 11.955 2.207 11.955 5.457 0 3.188-3.903 5.763-12.389 5.763-1.734 0-3.22-.062-4.77-.245L0 32.615zM6.442 3.801C7.619 1.042 9.415 0 12.512 0h14.495l-.434 1.165c-.371.98-1.982 5.21-6.69 5.21h-8.98c-3.717 0-5.638.246-5.638.246l1.177-2.82z" />
                            <g>
                              <path d="M116.747 32.654h5v-20.31h-5v20.31zM172.82 22.34c0-4.997-.804-6.38-3.06-6.38-2.181 0-2.986 1.423-2.986 6.503 0 5.118.805 6.58 2.986 6.58 2.256 0 3.06-1.462 3.06-6.703zm-11.408.162c0-7.475 3.266-10.563 8.348-10.563 5.24 0 8.34 3.048 8.34 10.563 0 7.638-3.144 10.565-8.34 10.565-5.122 0-8.348-2.927-8.348-10.565zm-15.521 0c0-8.207 3.35-10.607 8.186-10.607 3.426 0 4.635.573 4.635.573l-.158 4.103s-2.018-.487-4.117-.487c-2.295 0-3.102 1.299-3.102 6.173 0 4.998.767 6.582 3.102 6.582 3.146 0 4.117-.486 4.117-.486l.158 4.104s-2.34.65-4.515.65c-5.443 0-8.306-3.17-8.306-10.605zm-18.462-10.158h4.595l3.95 8.535c.562 1.216 1.212 3.126 1.695 4.51l.08.243c-.08-1.177-.324-3.862-.324-5.772v-7.516h4.4v20.311h-4.92l-3.59-7.674c-.968-2.031-1.61-4.066-2.016-5.402 0 1.909.565 4.142.565 6.174v6.902h-4.435v-20.31zm-29.887 7.882c0-9.706 3.548-13 9.881-13 3.743 0 5.317.735 5.317.735l-.16 4.383s-2.58-.566-4.876-.566c-3.509 0-4.274 1.544-4.274 8.124 0 6.907 1.249 8.615 4.274 8.615 2.256 0 4.875-.493 4.875-.493l.16 4.39s-2.172.692-5.239.692c-6.77 0-9.958-3.9-9.958-12.88zm-15.356-7.879h11.325v4.224h-6.407v3.616h5.199v4.021h-5.199v4.147h6.974v4.3H82.186V12.346zm-15.64 0h4.956v15.966h6.167v4.342H66.546V12.346zm-16.45 0h11.406v4.224h-6.407v3.616h5.121v4.021h-5.12v4.147h6.932v4.3H50.095V12.346zM36.388 16.65h-4.273v-4.307l13.465.003v4.304h-4.273v16.004H36.39V16.65z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="news2__title">Telecinco</div>
                    <div className="news2__text">
                      The app to book sport courts that is transforming the
                      world of sports
                    </div>
                  </div>
                </a>
                <a
                  className="news2"
                  href="http://www.expansion.com/economia-digital/companias/2018/01/08/5a5387a822601d497c8b4601.html"
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                >
                  <div className="news2__content">
                    <div className="news2__logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={165}
                        height={35}
                        viewBox="0 0 165 35"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M-58-11h280v56H-58z" />
                          <g fillRule="nonzero">
                            <path
                              fill="#2f3333"
                              d="M3.418 25.288v-.707V2.477c0-.565-.121-.873-.718-1-.734-.156-1.457-.414-2.166-.633C-.019.673-.019.668.05 0h22.334l.588 9.08-.797.229c-1.13-1.6-2.301-3.155-3.364-4.784a6.101 6.101 0 0 0-5.492-2.95c-1.252 0-2.51-.107-3.826-.166v11.177c2.5.653 4.409-.249 5.433-2.61.215-.475.4-.963.554-1.462.16-.551.422-.848 1.083-.59v11.27c-.598.238-.88 0-1.078-.552a19.906 19.906 0 0 0-.971-2.263 3.171 3.171 0 0 0-2.632-1.848c-.787-.068-1.583 0-2.428 0v11.084l1.005-.049c1.253-.063 2.51-.18 3.763-.18a6.692 6.692 0 0 0 5.623-2.887c.97-1.316 2.02-2.609 3.015-3.9.233-.308.486-.547.845-.328a.928.928 0 0 1 .296.654c-.218 2.672-.486 5.364-.719 8.075H.03L0 26.337l3.418-1.049zM49.875 10.82c.503-.398.862-.703 1.241-.984A8.729 8.729 0 0 1 55.25 8.07c2.326-.365 4.64.736 5.872 2.796a10.83 10.83 0 0 1 .82 10.768c-1.563 3.529-4.444 5.3-8.15 5.64-1.174.108-2.368 0-3.643 0v5.709a.663.663 0 0 0 .513.758c.556.185 1.104.398 1.64.64.124.108.222.245.287.399a1.08 1.08 0 0 1-.408.221h-9.142c.183-.3.298-.492.417-.68a.2.2 0 0 1 .12-.058c1.438-.31 1.673-1.25 1.659-2.658-.082-6.831-.043-13.662 0-20.493a.882.882 0 0 0-.614-.985 9.302 9.302 0 0 1-1.337-.659A1.27 1.27 0 0 1 43 8.999c.133-.095.283-.164.441-.201h6.021a.386.386 0 0 1 .377.105.41.41 0 0 1 .103.387c-.082.472-.067.915-.067 1.53zm.273 6.846v5.7c.019.353.133.694.33.984.803 1.259 2.256 1.91 3.701 1.658 1.405-.187 2.115-1.23 2.608-2.46.636-1.763.908-3.641.801-5.518a11.27 11.27 0 0 0-.748-4.345c-.647-1.521-1.73-2.5-3.356-2.614-.919-.004-1.838.047-2.751.153a.554.554 0 0 0-.475.198.587.587 0 0 0-.12.51c.02 1.94.005 3.854.005 5.74l.005-.006zM150.933 8.593v2.704l.644-.52a11.595 11.595 0 0 1 4.553-2.534c3.8-.97 6.572 1.032 6.606 4.849.036 3.523.036 7.044 0 10.564 0 .663.117 1.094.834 1.27.312.077.606.208.869.387.216.206.404.436.561.687h-9.431c.229-.313.341-.64.526-.687 1.435-.35 1.66-1.26 1.606-2.57-.112-2.648-.03-5.304-.04-7.956a7.85 7.85 0 0 0-.126-1.458c-.303-1.563-1.2-2.306-2.835-2.207a22.88 22.88 0 0 0-2.83.497.698.698 0 0 0-.482.27.657.657 0 0 0-.123.526c.023 3.857.023 7.713 0 11.568a.808.808 0 0 0 .551.876c.279.105.54.249.776.426.204.218.383.458.532.715H144c.224-.303.342-.64.527-.677 1.512-.341 1.771-1.27 1.727-2.67-.112-3.855-.063-7.714 0-11.569 0-.715-.21-1.098-.888-1.321a6.708 6.708 0 0 1-1.17-.554.44.44 0 0 1-.186-.365.413.413 0 0 1 .317-.241c2.157-.014 4.313-.01 6.606-.01zM91.272 26h-9.126c.22-.326.336-.506.487-.68a.202.202 0 0 1 .122-.062c1.462-.284 1.725-1.2 1.686-2.552-.102-3.956-.044-7.916 0-11.876a.846.846 0 0 0-.619-.945 7.901 7.901 0 0 1-1.296-.61A2.852 2.852 0 0 1 82 8.632h7.153v2.642c.38-.293.618-.473.852-.657a10.722 10.722 0 0 1 5.204-2.543c3.06-.472 5.56 1.343 5.657 4.344.122 3.71.083 7.424.053 11.139 0 .732.176 1.167.907 1.375.327.1.64.24.93.416a.522.522 0 0 1 .244.392.488.488 0 0 1-.37.246h-8.05a.446.446 0 0 1-.35-.203.63.63 0 0 1 .126-.407.406.406 0 0 1 .23-.137c1.203-.354 1.383-1.181 1.344-2.297-.083-2.646 0-5.293-.034-7.94a8.883 8.883 0 0 0-.17-1.786c-.303-1.417-1.116-2.14-2.583-2.084-1.11.098-2.208.298-3.279.596a.727.727 0 0 0-.385.567c-.023 3.935-.023 7.873 0 11.815a.941.941 0 0 0 .38.605c.283.217.653.326.936.548.192.224.352.472.477.737z"
                            />
                            <path
                              fill="#2f3333"
                              d="M135.743 8c6.655.053 9.42 4.703 9.25 9.71-.161 4.824-3.096 8.302-7.79 9.088-3.446.579-6.707 0-9.015-2.86-2.395-2.991-2.73-6.455-1.46-9.971 1.227-3.377 3.826-5.268 7.39-5.842.574-.086 1.129-.091 1.625-.125zm3.895 9.503c-.064-.965-.088-1.93-.205-2.851-.185-1.447-.486-2.918-1.421-4.134a2.997 2.997 0 0 0-2.42-1.27 2.998 2.998 0 0 0-2.448 1.217c-.5.673-.87 1.432-1.09 2.238a18.044 18.044 0 0 0-.322 7.96 10.546 10.546 0 0 0 1.188 3.501c1.217 2.084 3.938 2.05 5.277.039.306-.478.55-.991.725-1.53.516-1.676.765-3.422.74-5.175l-.024.005zM68.239 10.02c.457.801.862 1.632 1.21 2.488a2.383 2.383 0 0 1-.95 2.647 2.409 2.409 0 0 1-2.718.107 2.602 2.602 0 0 1-1.149-2.57 3.53 3.53 0 0 1 1.467-2.416 11.323 11.323 0 0 1 9.016-2.058c2.373.445 3.674 2.285 3.683 4.831v11.11a.87.87 0 0 0 .636 1.005 4.49 4.49 0 0 1 1.034.484c.21.207.39.445.532.705-1.898 0-3.616.048-5.306 0-1.01-.039-1.485-.792-1.67-1.875l-.65.585a6.632 6.632 0 0 1-6.056 1.792c-1.623-.333-2.795-1.241-3.175-2.932a4.172 4.172 0 0 1 1.424-4.348 8.85 8.85 0 0 1 4.39-1.87c1.272-.212 2.558-.308 3.858-.482 0-1.522.104-3.072-.028-4.599-.09-1.39-1.183-2.492-2.549-2.57-.998-.074-2-.085-3-.034zm5.633 8.097c-.963.181-1.914.423-2.847.724a3.127 3.127 0 0 0-1.756 1.898 3.2 3.2 0 0 0 .251 2.595 1.897 1.897 0 0 0 1.766 1.15 11.833 11.833 0 0 0 2.301-.542c.15-.08.251-.23.27-.4.02-1.74.015-3.488.015-5.425zM34.487 14.146c.136-.185.22-.282.291-.388l2.758-4.34c-.352-.59-1.407-.461-1.407-1.418h6.505a1.79 1.79 0 0 1-.469.62c-1.595.484-2.56 1.681-3.532 2.901-.97 1.22-1.97 2.403-2.978 3.581a.533.533 0 0 0-.042.781c1.778 2.486 3.504 5.01 5.328 7.463.328.462 1.037.591 1.548.924.192.154.363.331.511.527l-.14.161h-9.278c.145-1.062 1.295-.744 1.759-1.386l-3.002-4.829-3.377 4.898c.47.24.85.426 1.21.666.14.141.251.307.329.49a1.418 1.418 0 0 1-.47.203h-5.295a1.418 1.418 0 0 1-.469-.203c.05-.176.148-.336.282-.462 1.754-.569 2.687-2.038 3.799-3.314.938-1.072 1.838-2.171 2.776-3.234a.566.566 0 0 0 .047-.836c-1.73-2.459-3.367-4.93-5.093-7.33-.333-.461-1.056-.623-1.58-.956A3.185 3.185 0 0 1 24 8.18l.117-.166h9.052c.277.527-.187.582-.502.73l-1.092.499 2.912 4.903zM103.1 20.586c.44-.212.715-.043 1.03.333 1 1.179 2.001 2.338 3.092 3.444a4.419 4.419 0 0 0 2.532 1.255c1.17.261 2.37-.289 2.902-1.328.606-1.114.293-2.488-.74-3.255a11.927 11.927 0 0 0-2.002-1.11c-.866-.401-1.781-.71-2.652-1.102-.62-.27-1.22-.584-1.791-.942-3.202-2.052-3.307-6.09-.225-8.316a8.424 8.424 0 0 1 5.308-1.555c1.501.043 3.002.328 4.473.512a.645.645 0 0 1 .486.222c.12.14.169.324.135.502 0 1.27.06 2.545.07 3.816a.724.724 0 0 1-.25.526 1.144 1.144 0 0 1-.77-.227c-.666-.734-1.247-1.54-1.902-2.28-.74-.84-1.581-1.555-2.787-1.724-1.074-.2-2.158.297-2.677 1.227a2.26 2.26 0 0 0 .435 2.82c.663.538 1.397.99 2.182 1.343 1.286.609 2.647 1.067 3.923 1.69 1.806.88 3.032 2.208 3.122 4.28.1 2.274-1.001 3.916-2.932 5.08a8.617 8.617 0 0 1-4.363 1.193 17.239 17.239 0 0 1-6.04-.874.831.831 0 0 1-.5-.483c-.075-1.676-.06-3.332-.06-5.047zM125.804 25h-8.217a.455.455 0 0 1-.35-.236.487.487 0 0 1 .223-.384c.443-.228.898-.43 1.365-.606a.61.61 0 0 0 .455-.661V9.984a.633.633 0 0 0-.455-.675 10.146 10.146 0 0 1-1.329-.643A2.61 2.61 0 0 1 117 8h6.975v14.812c0 .555.105.897.66 1.06.322.098.628.243.91.43.178.153.332.334.455.536l-.196.162zM124 2.963A3 3 0 1 1 120.953 0 3.033 3.033 0 0 1 124 2.963zM133 5.989c.542-2.001 1.047-3.876 1.57-5.746a.43.43 0 0 1 .323-.243H140l-.841 1.287c-.935 1.428-1.87 2.864-2.837 4.268a1.155 1.155 0 0 1-.775.42c-.809.047-1.622.014-2.547.014z"
                            />
                            <path
                              fill="#FFF"
                              d="M50.015 17.565v-5.703a.619.619 0 0 1 .112-.511.502.502 0 0 1 .443-.198A20.159 20.159 0 0 1 53.143 11c1.532.109 2.54 1.093 3.137 2.615.497 1.383.735 2.862.699 4.349.1 1.877-.155 3.757-.749 5.52-.448 1.217-1.129 2.26-2.438 2.463-1.35.251-2.709-.4-3.46-1.66a2.026 2.026 0 0 1-.308-.985c-.023-1.935-.01-3.836-.01-5.737zM138.998 17.519a18.302 18.302 0 0 1-.71 5.336 7.09 7.09 0 0 1-.706 1.578c-1.308 2.081-3.951 2.11-5.135-.04a11.337 11.337 0 0 1-1.156-3.614 19.716 19.716 0 0 1 .312-8.214 7.125 7.125 0 0 1 1.061-2.31c.555-.798 1.442-1.266 2.382-1.255.94.011 1.818.5 2.356 1.31.914 1.255 1.203 2.748 1.383 4.266.128.976.147 1.962.213 2.943zM74 18v5.112a.494.494 0 0 1-.285.378 13.67 13.67 0 0 1-2.42.51c-.801.011-1.533-.415-1.857-1.084a2.739 2.739 0 0 1-.264-2.444c.303-.812.976-1.464 1.846-1.79A27.09 27.09 0 0 1 74 18z"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="news2__title">Expansión</div>
                    <div className="news2__text">
                      Playtomic, the new app to book your tennis or padel courts
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="home__downloadApp" id="download">
              <div className="downloadApp__content">
                <div className="downloadApp__image">
                  <img
                    src="https://res.cloudinary.com/playtomic/image/upload/q_auto,f_auto/v1643908201/playtomic/web/download-app.png"
                    loading="lazy"
                    alt="Phone running the app"
                  />
                </div>
                <div className="downloadApp__info">
                  <div className="downloadApp__title">Download our app!</div>
                  <div className="downloadApp__rating">
                    'The largest and fastest-growing community of Padel and
                    Tennis players in the world'
                    <div className="downloadApp__stars">
                      <svg className="icon icon--star" viewBox="0 0 22 21">
                        <path
                          fill="#FACA64"
                          fillRule="evenodd"
                          stroke="#FACA64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                        />
                      </svg>
                      <svg className="icon icon--star" viewBox="0 0 22 21">
                        <path
                          fill="#FACA64"
                          fillRule="evenodd"
                          stroke="#FACA64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                        />
                      </svg>
                      <svg className="icon icon--star" viewBox="0 0 22 21">
                        <path
                          fill="#FACA64"
                          fillRule="evenodd"
                          stroke="#FACA64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                        />
                      </svg>
                      <svg className="icon icon--star" viewBox="0 0 22 21">
                        <path
                          fill="#FACA64"
                          fillRule="evenodd"
                          stroke="#FACA64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                        />
                      </svg>
                      <svg className="icon icon--star" viewBox="0 0 22 21">
                        <path
                          fill="#FACA64"
                          fillRule="evenodd"
                          stroke="#FACA64"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="downloadApp__list">
                    <ul>
                      <li>- Court finder on map near you</li>
                      <li>
                        - List of clubs by proximity, connect effortlessly
                      </li>
                      <li>- Find courts and matches on your phone instantly</li>
                      <li>- All your data 100% secure and confidential</li>
                      <li>
                        - Statistics and history of matches and reservations
                      </li>
                      <li>
                        - Share moments, courts and matches with your friends
                      </li>
                    </ul>
                  </div>
                  <div className="downloadApp__links">
                    <div className="app_download_buttons">
                      <a
                        className="app_download_buttons__ios"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://itunes.apple.com/us/app/playtomic/id1242321076?ls=1&mt=8"
                      >
                        <img
                          src="https://res.cloudinary.com/playtomic/image/upload/v1/playtomic/web/stores/ios/en.svg"
                          alt="Apple Store"
                        />
                      </a>
                      <a
                        className="app_download_buttons__android"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://play.google.com/store/apps/details?id=com.playtomic&hl=es"
                      >
                        <img
                          src="https://res.cloudinary.com/playtomic/image/upload/v1/playtomic/web/stores/android/en.svg"
                          alt="Play Store"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div>
                <ul className="footer__links">
                  <li>
                    <div className="links">
                      <h2 className="links__title">
                        Book a court or pitch in Madrid
                      </h2>
                      <ul>
                        <li>
                          <a href="/vita10-sport-club/da7c7d20-43b3-11e8-8674-52540049669c">
                            Vita10 Sport Club
                          </a>
                        </li>
                        <li>
                          <a href="/mutua-madrid-open/da7ab91f-43b3-11e8-8674-52540049669c">
                            Mutua Madrid Open
                          </a>
                        </li>
                        <li>
                          <a href="/canal-de-isabel-ii/da776daf-43b3-11e8-8674-52540049669c">
                            Canal de Isabel II
                          </a>
                        </li>
                        <li>
                          <a href="/cet-majadahonda/da78c87d-43b3-11e8-8674-52540049669c">
                            CET Majadahonda
                          </a>
                        </li>
                        <li>
                          <a href="/eurostars-padel-madrid/da75cfa8-43b3-11e8-8674-52540049669c">
                            Eurostars Padel Madrid
                          </a>
                        </li>
                        <li>
                          <a href="/forus-caja-magica/da7a48e1-43b3-11e8-8674-52540049669c">
                            Forus Caja Mágica
                          </a>
                        </li>
                        <li>
                          <a href="/ciudad-de-la-raqueta/da78dd3c-43b3-11e8-8674-52540049669c">
                            Ciudad de la Raqueta
                          </a>
                        </li>
                        <li>
                          <a href="/golf-park/da7887db-43b3-11e8-8674-52540049669c">
                            Golf Park
                          </a>
                        </li>
                        <li>
                          <a href="/sanset-padel/da791110-43b3-11e8-8674-52540049669c">
                            Sanset Padel
                          </a>
                        </li>
                        <li>
                          <a href="/padel-norte/da78c64b-43b3-11e8-8674-52540049669c">
                            Padel Norte
                          </a>
                        </li>
                        <li>
                          <a href="/ocio-y-deporte-canal/da791552-43b3-11e8-8674-52540049669c">
                            Ocio y Deporte Canal
                          </a>
                        </li>
                        <li>
                          <a href="/padel-madrid-las-tablas/da79175c-43b3-11e8-8674-52540049669c">
                            Padel Madrid Las Tablas
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">
                        Book a court or pitch in Barcelona
                      </h2>
                      <ul>
                        <li>
                          <a href="/augusta-padel/da796757-43b3-11e8-8674-52540049669c">
                            Augusta Padel
                          </a>
                        </li>
                        <li>
                          <a href="/padel-7-sant-marti/7eb7e813-af3e-4f72-9b0c-a55aefc55607">
                            Padel 7 Sant Martí
                          </a>
                        </li>
                        <li>
                          <a href="/padel-7-sant-andreu/4c3b41dc-129b-4e07-a3e9-31484196f74f">
                            Padel 7 Sant Andreu
                          </a>
                        </li>
                        <li>
                          <a href="/padel-top/da787bf3-43b3-11e8-8674-52540049669c">
                            Padel Top
                          </a>
                        </li>
                        <li>
                          <a href="/el-prat/da77c69a-43b3-11e8-8674-52540049669c">
                            El Prat
                          </a>
                        </li>
                        <li>
                          <a href="/padel-indoor-rubi/da7879e5-43b3-11e8-8674-52540049669c">
                            Padel Indoor Rubí
                          </a>
                        </li>
                        <li>
                          <a href="/fairplay-padel/da7880e9-43b3-11e8-8674-52540049669c">
                            Fairplay Padel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">
                        Book a court or pitch in Málaga
                      </h2>
                      <ul>
                        <li>
                          <a href="/vals-sport-consul/da768559-43b3-11e8-8674-52540049669c">
                            Vals Sport Consul
                          </a>
                        </li>
                        <li>
                          <a href="/activaclub-jerez/da7a5362-43b3-11e8-8674-52540049669c">
                            Activaclub Jerez
                          </a>
                        </li>
                        <li>
                          <a href="/club-de-tenis-malaga/23c278f4-47c5-11e8-8674-52540049669c">
                            Club de Tenis Málaga
                          </a>
                        </li>
                        <li>
                          <a href="/puente-romano/da77891a-43b3-11e8-8674-52540049669c">
                            Puente Romano
                          </a>
                        </li>
                        <li>
                          <a href="/vals-sport-teatinos/da768728-43b3-11e8-8674-52540049669c">
                            Vals Sport Teatinos
                          </a>
                        </li>
                        <li>
                          <a href="/belife-wellness-center/da7ba0ca-43b3-11e8-8674-52540049669c">
                            Belife Wellness Center
                          </a>
                        </li>
                        <li>
                          <a href="/real-club-el-candado/da76a365-43b3-11e8-8674-52540049669c">
                            Real Club El Candado
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">Other sport centers</h2>
                      <ul>
                        <li>
                          <a href="/flow-padel-club/da79c5ab-43b3-11e8-8674-52540049669c">
                            Flow Padel
                          </a>
                        </li>
                        <li>
                          <a href="/sportclub-alicante-fun-family/da791bfb-43b3-11e8-8674-52540049669c">
                            Sportclub Alicante
                          </a>
                        </li>
                        <li>
                          <a href="/club-camm/da77430d-43b3-11e8-8674-52540049669c">
                            Club Camm
                          </a>
                        </li>
                        <li>
                          <a href="/be-up-sports/da771e73-43b3-11e8-8674-52540049669c">
                            Be Up Sports
                          </a>
                        </li>
                        <li>
                          <a href="/wurko-padel/da7cade4-43b3-11e8-8674-52540049669c">
                            Wurko Padel
                          </a>
                        </li>
                        <li>
                          <a href="/padelcorb/da772e23-43b3-11e8-8674-52540049669c">
                            Padelcorb
                          </a>
                        </li>
                        <li>
                          <a href="/padel-reus/da7ac157-43b3-11e8-8674-52540049669c">
                            Padel reus
                          </a>
                        </li>
                        <li>
                          <a href="/star-padel-tarragona/da762f98-43b3-11e8-8674-52540049669c">
                            Star Padel Tarragona
                          </a>
                        </li>
                        <li>
                          <a href="/club-tennis-torredembarra/da7c0dbb-43b3-11e8-8674-52540049669c">
                            Club Tennis Torredembarra
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="footer__links">
                  <li>
                    <div className="footer__logo">
                      <a href="/" className="">
                        <svg
                          className="logo"
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 502 502"
                        >
                          <circle
                            className="cls-1"
                            cx={251}
                            cy={251}
                            r={250}
                            fill="#ecff00"
                          />
                          <path
                            className="cls-2"
                            fill="#0e2433"
                            d="M274,120H166.57V332.53h59.35v61.52h48c44.29,0,80.33-33.88,80.33-75.52v-123C354.29,153.84,318.25,120,274,120Zm-8.65,256.79H243.23V271h22.08ZM337,318.6c0,29.38-23.7,53.68-54.37,57.6V332.15c24.29-2.67,47.57-15.88,54.37-32.58ZM337,257c0,29.38-23.7,53.68-54.37,57.6V270.56C306.9,267.89,330.18,254.68,337,238Zm-63-3.32h-48v61.53h-42v-178H274c34.75,0,63,26.12,63,58.22S308.71,253.69,274,253.69Z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="footer__contact ">
                      <div className="links">
                        <h2 className="links__title" />
                        <ul>
                          <li>
                            <p>C/Lagasca 88, planta 8, puerta 2</p>
                          </li>
                          <li>
                            <p>28001 Madrid</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">Playtomic</h2>
                      <ul>
                        <li>
                          <a href="/legal-conditions">Legal conditions</a>
                        </li>
                        <li>
                          <a
                            href="https://playtomic.com/careers/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Work with us{/* */}{' '}
                            <span className="badge">We're hiring!</span>
                          </a>
                        </li>
                        <li>
                          <a href="/privacy-policy">Privacy policy</a>
                        </li>
                        <li>
                          <a href="/cookies">Cookie policy</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">Discover Playtomic</h2>
                      <ul>
                        <li>
                          <a href="/matches">Matches</a>
                        </li>
                        <li>
                          <a href="/tournaments">Activities</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="links">
                      <h2 className="links__title">Sport clubs</h2>
                      <ul>
                        <li>
                          <a href="https://playtomic.com/?utm_source=playtomic.io&utm_medium=footerbutton">
                            I want to appear on Playtomic!
                          </a>
                        </li>
                        <li>
                          <a href="/clubs">Our clubs</a>
                        </li>
                        <li>
                          <div>
                            <a href="/sports/padel">Padel</a>,{' '}
                            <a href="/sports/tennis">Tennis</a>,{' '}
                            <a href="/sports/football">Football</a>...
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="footer__download-links d-block d-xl-none d-lg-none">
                  <li className="links__title">Download now the App</li>
                  <li className="footer__download">
                    <div className="app_download_buttons">
                      <a
                        className="app_download_buttons__ios"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://itunes.apple.com/us/app/playtomic/id1242321076?ls=1&mt=8"
                      >
                        <img
                          src="https://res.cloudinary.com/playtomic/image/upload/v1/playtomic/web/stores/ios/en.svg"
                          alt="Apple Store"
                        />
                      </a>
                      <a
                        className="app_download_buttons__android"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://play.google.com/store/apps/details?id=com.playtomic&hl=es"
                      >
                        <img
                          src="https://res.cloudinary.com/playtomic/image/upload/v1/playtomic/web/stores/android/en.svg"
                          alt="Play Store"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
          <ul />
        </div>
      </div>
    </>
  );
}
