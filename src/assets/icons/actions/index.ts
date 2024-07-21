import AddClusterInfo from './cluster-attr.svg';
import DeleteAttribute from './delete-attr.svg';
import RenameAttribute from './rename-attr.svg';
import ErrorSampler from './error-sampler.svg';
import PiiMasking from './pii-masking.svg';
import LatencySampler from './latency-sampler.svg';
import ProbabilisticSampler from './probabilistic-sampler.svg';

// Define the type for the ACTION_ICONS object
interface ActionIcons {
  [key: string]: any;
}

// Define the ACTION_ICONS with explicit types
export const ACTION_ICONS: ActionIcons = {
  AddClusterInfo: AddClusterInfo,
  RenameAttribute: RenameAttribute,
  DeleteAttribute: DeleteAttribute,
  ErrorSampler: ErrorSampler,
  PiiMasking: PiiMasking,
  LatencySampler: LatencySampler,
  ProbabilisticSampler: ProbabilisticSampler,
};

export {
  AddClusterInfo,
  DeleteAttribute,
  RenameAttribute,
  ErrorSampler,
  PiiMasking,
  LatencySampler,
  ProbabilisticSampler,
};
