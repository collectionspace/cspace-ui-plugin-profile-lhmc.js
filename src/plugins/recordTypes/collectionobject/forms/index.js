import defaultForm from './default';
import photoForm from './photo';

export default (configContext) => ({
  default: defaultForm(configContext),
  photo: photoForm(configContext),
});
