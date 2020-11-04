import { Button } from 'react-native-elements'

export const mockTheme = {
  colors: {
    primary: 'red',
    secondary: 'red',
    grey0: 'red',
    grey1: 'red',
    grey2: 'red',
    grey3: 'red',
    grey4: 'red',
    grey5: 'red',
    greyOutline: 'red',
    searchBg: 'red',
    success: 'red',
    error: 'red',
    warning: 'red',
    divider: 'red',
    platform: {
      ios: {
        primary: 'red',
        secondary: 'red',
        success: 'red',
        error: 'red',
        warning: 'red',
      },
      android: {
        primary: 'red',
        secondary: 'red',
        success: 'red',
        error: 'red',
        warning: 'red',
      },
    }
  }
};

export function pressButtonWithTextOnWrapper(wrapper, text, index = 0) {
  const button = wrapper.find(Button).findWhere(w => w.text().indexOf(text) !==  -1).at(index);
  button.props().onPress();
  button.update();
}
