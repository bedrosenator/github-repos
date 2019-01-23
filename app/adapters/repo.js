import GitHubUserAdapter from 'ember-data-github/adapters/github-user';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import BuildURLMixin from 'ember-data';
import { pluralize } from 'ember-inflector';

export default GitHubUserAdapter.extend(DataAdapterMixin, BuildURLMixin, {
  authorizer: 'authorizer:github',
  buildURL(modelName, id, snapshot/* , requestType, query */) {
    const { userId } = snapshot.adapterOptions;
    const url = `${this.host}/users/${userId}/${pluralize(modelName)}`;

    return url;
  }
});
