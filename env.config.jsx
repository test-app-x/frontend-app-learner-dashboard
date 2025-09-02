/* Basic Frontend Plugin Workshop Example. */

import {
  DIRECT_PLUGIN,
  PLUGIN_OPERATIONS,
} from '@openedx/frontend-plugin-framework';

import {
  Card,
  Container,
} from '@openedx/paragon';

const sidebarRecommender = () => (
  <Container>
    <h3 className="p2-b">
      Other courses for you
    </h3>
    <div className="product-card-container d-flex">
      <Card className="mb-4" orientation="horizontal">
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
          logoSrc="https://picsum.photos/150/150"
          logoAlt="Card logo"
        />
        <Card.Section
          title="Section title"
        >
          Course recommendation
        </Card.Section>
        <Card.Footer orientation="horizontal">
        </Card.Footer>
      </Card>
    </div>
  </Container>
);

import Footer from './my-brand/Footer'

const config = {
  pluginSlots: {

    footer_slot: {
      keepDefault: true,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_footer',
            type: DIRECT_PLUGIN,
            RenderWidget: Footer,
          },
        }
      ]
    },


  },
}

export default config;
