"use strict";

module.exports = (
  {
    strapi
  }
) => {
  process.nextTick(() => {
    strapi.StrapIO = (require("strapio"))(strapi);
          console.log("StrapIO", strapi.server)
  });
};
