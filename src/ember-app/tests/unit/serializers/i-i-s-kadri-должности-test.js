import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kadri-должности', 'Unit | Serializer | i-i-s-kadri-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kadri-должности',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
