import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
import avocadoTheme from 'npm:highcharts/themes/avocado';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: A('userId'),
  userId: 'bedrosenator',
  selectedUser: computed('userId', function () {
    return this.get('users').findBy('key', this.get('userId'));
  }),
  userName: '',
  users: [
    { key: 'bedrosenator', value: 'bedrosenator'},
    { key: 'weirdan', value: 'weirdan' },
  ],

  chartOptions: EmberObject.create({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Repo\'s size',
    },
    xAxis: {
      categories: ['Size'],
    },
    yAxis: {
      title: {
        text: 'Size',
      },
    },
  }),

  chartData: computed('model.repos.length', function () {
    const repos = this.get('model.repos');

    const sizes = repos.map((repo) => {
      return repo.get('size');
    });

    return [{
      name: this.get('model.user.name'),
      data: sizes,
    }];
  }),

  theme: avocadoTheme,

  actions: {
    setUser(user) {
      this.get('store').unloadAll('repo');
      this.get('store').unloadAll('user');
      this.set('userId', user.key);
      this.set('selectedUser', user);
    },
    addUser(user) {
      this.get('users').pushObject({
        key: user.trim(),
        value: user.trim(),
      })
    },
    logout() {
      this.get('session').invalidate();
      this.transitionToRoute('login');
    },
  },

});
