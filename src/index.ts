import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    if (process.env.NODE_ENV === 'production' || process.env.STRAPI_LOG_LEVEL) {
      strapi.log.level = process.env.STRAPI_LOG_LEVEL || 'info';
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.log.info('Application bootstrapped successfully');
    strapi.log.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
    strapi.log.info(`Log level: ${strapi.log.level}`);
  },
};
