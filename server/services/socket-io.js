"use strict";

/**
 * socket.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = (
  {
    strapi
  }
) => {
  return {
    actions: () => {
      return ["create", "update", "delete", "bulkdelete", "publish", "unpublish"];
    }
  };
};
