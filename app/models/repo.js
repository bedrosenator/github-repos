import DS from 'ember-data';

export default DS.Model.extend({
  "name": DS.attr('string'),
  "full_name": DS.attr('string'),
  "owner": DS.attr(),
  "html_url": DS.attr('string'),
  "description": DS.attr('string'),
  "url":  DS.attr('string'),
  "created_at": DS.attr('string'),
  "updated_at": DS.attr('string'),
  "pushed_at": DS.attr('string'),
  "size": DS.attr('number'),
  "stargazers_count": DS.attr('number'),
  "watchers_count": DS.attr('number'),
  "language": DS.attr('string'),
  "has_issues": DS.attr('string'),
  "forks_count": DS.attr('number'),
  "open_issues_count": DS.attr('number'),
  "forks": DS.attr('number'),
  "open_issues": DS.attr('number'),
  "watchers": DS.attr('number'),
  "permissions": DS.attr(),
});
