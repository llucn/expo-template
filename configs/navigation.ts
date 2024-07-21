import { router } from 'expo-router';
import { UiPanelItemProps } from '@carbon/react-native';
import BeeIcon from '@carbon/icons/es/bee/20';
import LaunchIcon from '@carbon/icons/es/launch/20';

const navigationConfig: { navigation: UiPanelItemProps[] } = {
  navigation: [
    {
      text: 'Start Center',
      leftIcon: BeeIcon,
      textBreakMode: 'tail',
      disabled: false,
      onPress: () => router.navigate('/(page)/startCenter'),
    },
    {
      text: 'Test Page',
      leftIcon: BeeIcon,
      textBreakMode: 'tail',
      disabled: false,
      onPress: () => router.navigate('/(page)/testPage'),
    },
    {
      text: 'Profile',
      leftIcon: BeeIcon,
      textBreakMode: 'tail',
      disabled: false,
      onPress: () => router.navigate('/(page)/profile'),
    },
  ]
};
export default navigationConfig;