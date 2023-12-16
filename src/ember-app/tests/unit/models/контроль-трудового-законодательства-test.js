import { moduleForModel, test } from 'ember-qunit';

moduleForModel('контроль-трудового-законодательства', 'Unit | Model | контроль-трудового-законодательства', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kadri-анкеты',
    'model:i-i-s-kadri-должности',
    'model:i-i-s-kadri-контроль-т-з',
    'model:i-i-s-kadri-отделы',
    'model:i-i-s-kadri-проверяемые',
    'model:i-i-s-kadri-сотрудники',
    'model:контроль-трудового-законодательства',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
