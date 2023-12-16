import { Serializer as Контроль_ТЗSerializer } from
  '../mixins/regenerated/serializers/контроль-трудового-законодательства';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Контроль_ТЗSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
