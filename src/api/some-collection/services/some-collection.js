'use strict';

/**
 * some-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::some-collection.some-collection');
