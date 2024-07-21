import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { UiPanel, UiPanelItemProps, ViewWrapper, TopNavigationBar } from '@carbon/react-native';
import { router, Slot } from 'expo-router';
import MenuIcon from '@carbon/icons/es/menu/20';
import CloseIcon from '@carbon/icons/es/close/20';
import ExitIcon from '@carbon/icons/es/logout/20';
import navigationConfig from '@/configs/navigation';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 64,
  },
});

export default function PageLayout() {
  const [open, setOpen] = React.useState(false);

  const state = {
    open: false,
  };

  const itemProps: UiPanelItemProps[] = navigationConfig.navigation;

  const togglePanel = (): void => {
    setOpen(!open);
  };

  const goExit = (): void => {
    router.replace('/');
  }

  return (
    <ViewWrapper hasTopNavigation={true}>
      <TopNavigationBar
        title={'Page title here'}
        leftItems={[{ text: 'Toggle menu', icon: open ? CloseIcon : MenuIcon, onPress: togglePanel, active: open }]}
        rightItems={[{ text: 'Return to components', icon: ExitIcon, onPress: goExit }]}
      />
      <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container} style={styles.view}>
        <Slot />
      </ScrollView>
      <UiPanel open={open} onClose={() => setOpen(false)} items={itemProps} closeOnNoChildrenPress={true} />
    </ViewWrapper>
  );
}