import React from 'react';
import { Link } from 'react-scroll';
import Landing from './Landing.js';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import SchedulesSection from './SchedulesSection/SchedulesSection';
import QuoteRequestSection from './QuoteRequestSection/QuoteRequestSection';
import ContactsSection from './ContactsSection/ContactsSection';
import TopLargeScreenMenu from './TopLargeScreenMenu';
import TopMobileMenu from './TopMobileMenu';
import { configure, shallow } from 'enzyme/build'
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

const setup = () => {

  const wrapper = shallow(
    <Landing />
  );

  return {
    wrapper
  };
};

describe('Landing', () => {

  it('should render element with defined structure', () => {
    const { wrapper } = setup();

    expect(wrapper).toBeDefined();

    expect(wrapper.text()).toContain('Make the world your destination');

    const links = wrapper.find(Link);
    expect(links).toHaveLength(1);

    const topDesktopMenus = wrapper.find(TopLargeScreenMenu);
    expect(topDesktopMenus).toHaveLength(1);

    const topMobileMenus = wrapper.find(TopMobileMenu);
    expect(topMobileMenus).toHaveLength(1);

    const aboutUsSections = wrapper.find(AboutUsSection);
    expect(aboutUsSections).toHaveLength(1);

    const schedulesSections = wrapper.find(SchedulesSection);
    expect(schedulesSections).toHaveLength(1);

    const quoteRequestSections = wrapper.find(QuoteRequestSection);
    expect(quoteRequestSections).toHaveLength(1);

    const contactsSections = wrapper.find(ContactsSection);
    expect(contactsSections).toHaveLength(1);
  });

});
