// 9fbef606107a605d69c0edbcd8029e5d
export default {
  // SPACING
  // ELEM_SPACING - This spacing is defined from the mininum to maximum that can be used inside an individual
  // component for both padding and margin.

  // LAYOUT_SPACING - TThe layout scale is used for arranging components and other UI parts into a full page layout.
  // It has larger increments that are used to control the density of a design.
  // Use the smaller layout tokens to create more dense compositions and direct relationships.
  // Use the larger tokens to increase the amount of white space and to disassociate sections.

  // The spacing below are taken from the UI stylesheet. If you find you need a spacing that doesn't
  // exist here, it's likely the design should be updated to match an use spacing, or the spacing needs
  // to be added to the stylesheet. Please speak to a designer first before adding here and
  // PLEASE DO NOT JUST ADD SPACING BELOW BECAUSE IT'S IN A DESIGN :)

  ELEM_SPACING: {
    XXXS: '2px',
    XXS: '4px',
    XXM: '5px',
    XS_6: '6px',
    XS_7: '7px',
    XS: '8px',
    XS_1: '10px',
    SM: '12px',
    REG: '14px',
    MED: '16px',
    MED_1: '18px',
    MED_2: '22px',
    LRG: '24px',
    LRCX: '25px',
    LRG_1: '28px',
    LRG_2: '30px',
    XL: '32px',
    XL_1: '36px',
    XXL: '40px',
    XXL_1: '44px',
    XXXL: '48px',
    XXML: '38px',
    XXXL_1: '75px',
  },
  LAYOUT_SPACING: {
    XXS: '16px',
    XS: '24px',
    SM: '32px',
    MED: '48px',
    LRG: '64px',
    LRGS: '110px',
    LRGS_1: '130px',
    XL: '96px',
    XXL: '160px',
    XXXL: '320px',
  },
  MODAL_WIDTH: {
    SMALL: '458px',
    MEDIUM: '600px',
  },
  APP_LAYOUT_SPACING: {
    XXS: '10px',
    XS: '20px',
    SM: '30px',
  },
  MODULE_SPACING: {
    MED: '30px',
  },
  CREDIT_CARD_ICON_WIDTH: '50px',
  FORM_FIELD_HEIGHT: '70px',
  CATEGORY: {
    MED: '38px',
    LRG: '70px',
    XL: '88px',
    XLL: '140px',
    XXXL: '280px',
  },
  BORDER_RADIUS: 40,
};
