import React from 'react';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { UiPanel, UiPanelItemProps, Checkbox, ViewWrapper, TopNavigationBar } from '@carbon/react-native';
import BeeIcon from '@carbon/icons/es/bee/20';
import LaunchIcon from '@carbon/icons/es/launch/20';
import MenuIcon from '@carbon/icons/es/menu/20';
import CloseIcon from '@carbon/icons/es/close/20';
import ExitIcon from '@carbon/icons/es/logout/20';

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

export default class TestUiPanel extends React.Component<{
  goHome: (auth: boolean) => void;
}> {
  state = {
    open: false,
    hasLeftIcon: true,
    hasChildRightIcon: true,
    hideFourthItem: false,
    autoCloseNoChild: true,
  };

  private togglePanel = (): void => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  private alert = (text: string): void => {
    Alert.alert(text);
  };

  private goExit = (): void => {
    const { goHome } = this.props;
    goHome(false);
  }

  private get itemProps(): UiPanelItemProps[] {
    const { hasLeftIcon, hasChildRightIcon, hideFourthItem } = this.state;

    return [
      {
        text: 'Start Center',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
      },
      {
        text: 'Map View',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
        textBreakMode: 'tail',
        disabled: false,
      },
      {
        text: 'Sync with Server',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
        openOnLoad: true,
      },
      {
        text: 'Item 4: Uncheck to hide',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
        hidden: hideFourthItem,
        children: [
          {
            text: 'Children 1',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 4 / Children 1'),
          },
          {
            text: 'Children 2: Disabled',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            disabled: true,
            onPress: () => this.alert('Pressed Item 4 / Children 2'),
          },
          {
            text: 'Children 3',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            hidden: true,
            onPress: () => this.alert('Pressed Item 4 / Children 3'),
          },
          {
            text: 'Children 4: Children 3 is hidden',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 4 / Children 4'),
          },
        ],
      },
      {
        text: 'Item 5: Long text with ellipsis instead of wrapped',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
        textBreakMode: 'tail',
        children: [
          {
            text: 'Children 1',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 5 / Children 1'),
          },
          {
            text: 'Children 2: Long text with ellipsis instead of wrapped',
            textBreakMode: 'tail',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 5 / Children 2'),
          },
          {
            text: 'Children 3: Long text with normal wrapped',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 5 / Children 3'),
          },
          {
            text: 'Children 4',
            rightIcon: hasChildRightIcon ? LaunchIcon : undefined,
            onPress: () => this.alert('Pressed Item 5 / Children 4'),
          },
        ],
      },
      {
        text: 'Item 6: No nested items',
        leftIcon: hasLeftIcon ? BeeIcon : undefined,
        onPress: () => this.alert('Pressed Item 6'),
      },
    ];
  }

  render(): React.ReactNode {
    const { open, hasLeftIcon, hideFourthItem, hasChildRightIcon, autoCloseNoChild } = this.state;
    const { goHome } = this.props;

    return (
      <ViewWrapper hasTopNavigation={true}>
        <TopNavigationBar title="Start Center" leftItems={[{ text: 'Toggle menu', icon: open ? CloseIcon : MenuIcon, onPress: this.togglePanel, active: open }]} rightItems={[{ text: 'Return to components', icon: ExitIcon, onPress: this.goExit }]} />
        <ScrollView keyboardShouldPersistTaps="handled" contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container} style={styles.view}>
          {/* <Checkbox checked={hasLeftIcon} id="hasLeftIcon" onPress={(value) => this.setState({ hasLeftIcon: value })} label="Add left icon at top level" />
          <Checkbox checked={hasChildRightIcon} id="hasChildRightIcon" onPress={(value) => this.setState({ hasChildRightIcon: value })} label="Add right icon in the nested level" />
          <Checkbox checked={hideFourthItem} id="hideFourthItem" onPress={(value) => this.setState({ hideFourthItem: value })} label="Check to hide the 4th item" />
          <Checkbox checked={autoCloseNoChild} id="autoCloseNoChild" onPress={(value) => this.setState({ autoCloseNoChild: value })} label="Close when pressing item with no children" /> */}
        </ScrollView>
        <UiPanel open={open} onClose={() => this.setState({ open: false })} items={this.itemProps} closeOnNoChildrenPress={autoCloseNoChild} />
      </ViewWrapper>
    );
  }
}
