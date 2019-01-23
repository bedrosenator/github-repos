import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  queryParams: {
    userId: {
      refreshModel: true,
    },
  },

  model(params) {
    const controller = this.controllerFor('index');
    controller.set('isLoading', true);
    return hash({
      user: this.get('store').findRecord('github-user', params.userId),
      repos: this.get('store')
        .findAll('repo', {
          adapterOptions: {
            userId: params.userId,
          }
        })
        .then((repos) => {
          controller.set('isLoading', false);
          return repos;
        }),
    });
  },
});
