// 9fbef606107a605d69c0edbcd8029e5d
import { css } from 'styled-components';
import theme from '../themes/TCP';

const { fonts, breakpoints, mediaQuery } = theme;
export default css`
  body {
    font-family: ${fonts.primaryFontFamily};
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .smooth-scroll-list {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    width: 100%;
    -ms-overflow-style: none;
  }
  .smooth-scroll-list::-webkit-scrollbar {
    display: none;
  }
  .smooth-scroll-list-item {
    display: inline-block;
    vertical-align: top;
    margin-right: 16px;
    white-space: normal;
    &:last-child {
      margin-right: 0;
    }
  }
  @media print {
    a {
      text-decoration: none !important;
    }
    .couponModal_btnWrapper,
    .couponModal_print {
      display: none !important;
    }

    /* Hiding feedback button for print preview */
    div img[id^='UIF-IMG-'] {
      display: none !important;
    }
  }

  .app-content {
    @media only screen and (min-width: 1920px) {
      position: relative;
    }
  }

  .content-wrapper {
    max-width: ${breakpoints.xlarge};
    margin: 0 auto;
  }

  .account-dashboard-goback-link {
    display: none;
  }

  .extended-new-account-page {
    @media ${(props) => props.theme.mediaQuery.xlarge} {
      max-width: 100%;
    }
    @media ${(props) => props.theme.mediaQuery.desktop} {
      max-width: 100%;
    }
    .order-back-button {
      @media ${(props) => props.theme.mediaQuery.smallOnly} {
        background-color: ${(props) => props.theme.colors.WHITE};
      }
    }
    .account-dashboard-goback-link {
      display: none;
      @media only screen and (max-width: 1200px) {
        display: block;
      }
    }
    .empty-back-nav-link {
      background-color: white;
    }
  }

  .account-drawer-modal {
    overflow: hidden !important;
    @media ${(props) => props.theme.mediaQuery.smallOnly} {
      touch-action: none;
    }
  }
  .stop-body-scroll {
    overflow: hidden !important;
    @media ${(props) => props.theme.mediaQuery.smallOnly} {
      touch-action: none;
    }
  }
  .app-content-pre-checkout-pages {
    height: 85vh;
    min-height: 750px;
  }

  .extended-view {
    @media ${(props) => props.theme.mediaQuery.desktop} {
      max-width: 100%;
      margin: 0 auto;
    }
  }

  .extended-view-plp {
    @media ${(props) => props.theme.mediaQuery.desktop} {
      max-width: 1920px;
      margin: 0 auto;
    }
  }

  .restricted-view {
    @media ${(props) => props.theme.mediaQuery.desktop} {
      max-width: 1440px !important;
      margin: 0 auto;
    }
  }

  .extended-new-view-plp {
    @media ${(props) => props.theme.mediaQuery.xlarge} {
      max-width: 100%;
    }
    @media ${(props) => props.theme.mediaQuery.desktop} {
      max-width: 100%;
    }
  }

  .large-desktop-right-content {
    display: none;
    @media only screen and (min-width: 1920px) {
      display: block;
      width: auto;
      position: absolute;
      right: 8px;
      top: 145px;
      .product-detail-section.complete-look-section {
        width: 232px;
      }
      .complete-look-container {
        width: 100%;
        margin: 0;
      }
      .product-description-list.complete-the-look-section {
        border-top: none;
        padding: 0;
      }
      .product-desc-heading {
        font-size: 16px;
      }
    }
  }

  .full-background {
    background: ${(props) => props.theme.colorPalette.gray[300]};
  }

  .dark-overlay {
    z-index: 2;
  }

  .no-scroll {
    @media ${mediaQuery.smallOnly} {
      overflow: hidden;
    }
  }

  .ReactModal__Body--open {
    overflow: hidden;
    .pac-container {
      z-index: ${(props) => props.theme.zindex.zGoogleAutosuggest};
    }
    @media ${(props) => props.theme.mediaQuery.smallOnly} {
      touch-action: none;
    }
  }

  input[type='text']::-ms-clear {
    display: none;
  }

  .right {
    float: right;
  }

  .left {
    float: left;
  }

  .clearfix {
    clear: both;
  }

  .textRight {
    text-align: right;
  }

  .textLeft {
    text-align: left;
  }

  &.focus-styling {
    &:focus {
      outline: 1px dashed black;
    }

    &:focus:not(.focus-visible) {
      outline: none;
    }
  }

  .is-hidden {
    display: none !important;
  }

  .is-visible {
    display: block;
  }

  .pointerEventsNone {
    pointer-events: none;
  }

  .visually-hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .disableBodyScroll {
    overflow: hidden;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }

  .full-bleed {
    width: 100%;
  }

  .margin-none {
    margin: 0 !important;
  }

  .padding-none {
    padding: 0 !important;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }

  li {
    list-style-type: none;
  }

  h2,
  p {
    margin: 0;
  }

  .line-height-0 {
    line-height: 0;
  }

  .hide-on-mobile {
    @media ${mediaQuery.smallOnly} {
      display: none !important;
    }
  }

  .hide-on-desktop {
    @media ${mediaQuery.largeOnly} {
      display: none !important;
    }
    @media ${mediaQuery.xlarge} {
      display: none !important;
    }
  }

  .hide-on-tablet {
    @media ${mediaQuery.mediumOnly} {
      display: none !important;
    }
  }
  .text-break {
    word-break: break-word;
  }
  .full-width {
    width: 100%;
    display: inline-block;
  }

  .img-placeholder {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
  }

  .capFirstLetter {
    text-transform: capitalize;
  }

  ${(props) => {
    return Object.keys(props.theme.spacing.ELEM_SPACING).map((key) => {
      return `
      .elem-mt-${key} {
        margin-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mr-${key} {
        margin-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mb-${key} {
        margin-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-ml-${key} {
        margin-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pt-${key} {
        padding-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pr-${key} {
        padding-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pb-${key} {
        padding-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pl-${key} {
        padding-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }`;
    });
  }}

  ${(props) => {
    return Object.keys(props.theme.spacing.LAYOUT_SPACING).map((key) => {
      return `
      .layout-pt-${key} {
        padding-top: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pr-${key} {
        padding-right: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pb-${key} {
        padding-bottom: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pl-${key} {
        padding-left: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }`;
    });
  }}
  .spacing {
    padding: 0 ${(props) => props.theme.spacing.LAYOUT_SPACING.SM};
  }
  .white-chip-border {
    border: 1px solid ${(props) => props.theme.colorPalette.gray[600]} !important;
  }
  .multiline-ellipsis {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .rounded-container {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.WHITE};
  }
  .show-condensed-minibag {
    .minibag-overlay {
      position: fixed !important;
      @media ${mediaQuery.large} {
        right: 14px !important;
      }
      @media ${mediaQuery.xlarge} {
        right: calc((100vw - 1444px) / 2) !important;
      }
      top: 136px !important;
    }
    .newMiniBagWrapper {
      max-height: calc(100vh - 65px) !important;
    }
  }
`;
