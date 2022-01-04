"use strict";

module.exports = (
  {
    strapi
  }
) => {
  process.nextTick(() => {
    // TODO: need configuration view in admin ui
    strapi.StrapIO = (require("strapio"))(strapi);
  });
};
