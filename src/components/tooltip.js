import styled from 'styled-components';
import Tippy from '@tippyjs/react';

import { COLORS } from '../styles/constants';

const Tooltip = styled(Tippy).attrs((props) => ({
  placement: props.placement || 'right',
}))`
  && {
    background-color: ${COLORS.NEUTRAL.MYSTIC_900};
    border-radius: 0.25rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    color: ${COLORS.NEUTRAL.MYSTIC_100};
    font-weight: 400;
    max-width: ${(props) => props.maxWidth || '320px'} !important;
    padding: 0.75rem 1.25rem;

    .tippy-content {
      padding: 0;
    }

    .tippy-arrow {
      color: ${COLORS.NEUTRAL.MYSTIC_900};
    }

    dl {
      margin: 0;
      padding: 0;
    }

    dt {
      color: ${COLORS.NEUTRAL.MYSTIC_500};
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      margin: 0;
      text-transform: uppercase;
    }

    dd {
      display: inline-block;
      font-size: 0.9rem;
      margin: 0 0 0 0.25rem;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Tooltip;
