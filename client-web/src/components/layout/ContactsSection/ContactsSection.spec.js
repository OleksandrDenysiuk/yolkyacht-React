import React from 'react';
import ContactsSection from './ContactsSection.js';
import AddressInfoCard from './AddressInfoCard';
import EmailInfoCard from './EmailInfoCard';
import PhonesInfoCard from './PhonesInfoCard';
import CopyrightFooter from './CopyrightFooter';
import { configure, shallow } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = (propOverrides) => {

  const wrapper = shallow(
    <ContactsSection />
  );

  return {
    wrapper
  };
};

describe('ContactsSection', () => {

  it('should render component with nested ones', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();

    const addressInfoCards = wrapper.find(AddressInfoCard);
    expect(addressInfoCards).toHaveLength(1);

    const emailInfoCards = wrapper.find(EmailInfoCard);
    expect(emailInfoCards).toHaveLength(1);

    const phonesInfoCards = wrapper.find(PhonesInfoCard);
    expect(phonesInfoCards).toHaveLength(1);
  });

});
