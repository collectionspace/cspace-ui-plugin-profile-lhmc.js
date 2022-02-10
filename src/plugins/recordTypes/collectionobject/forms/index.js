import defaultForm from './default';
import photoForm from './photo';
import publicForm from './public';

export default (configContext) => ({
  default: defaultForm(configContext),
  photo: photoForm(configContext),
  public: publicForm(configContext),
});
