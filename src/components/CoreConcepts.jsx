import CoreConcept from '../components/CoreConcept';
import { CORE_CONCEPTS } from '../data';
import Section from './Section';

const CoreConcepts = () => {
  return (
   <Section id='core-concepts' title="Core Concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </Section>
  )
}

export default CoreConcepts