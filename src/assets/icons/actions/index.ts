import AddClusterInfo from './cluster-attr.svg';
import DeleteAttribute from './delete-attr.svg';
import RenameAttribute from './rename-attr.svg';
// Define the type for the ACTION_ICONS object
interface ActionIcons {
  [key: string]: any;
}

// Define the ACTION_ICONS with explicit types
export const ACTION_ICONS: ActionIcons = {
  AddClusterInfo: AddClusterInfo,
  RenameAttribute: RenameAttribute,
  DeleteAttribute: DeleteAttribute,
};
