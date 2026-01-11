import { useState } from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton'
import Section from './Section';
import Tabs from './Tabs';

const Examples = () => {
  let [selectedTab, setSelectedTab] = useState();

  function handleClick(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <Section id='examples' title="Examples">
      <Tabs ButtonsContainer="menu" buttons={
        <>
          <TabButton isSelected={selectedTab === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTab === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTab === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          <TabButton isSelected={selectedTab === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
        </>
      } />


      {!selectedTab && 'Please Select a Topic'}
      {selectedTab && (
        <div id='tab-content'>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTab].code}
            </code>
          </pre>
        </div>
      )
      }
    </Section>
  )
}

export default Examples