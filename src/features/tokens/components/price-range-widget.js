import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../../styles/constants';
import { MarkerIcon } from '../../../components/icons';
import { formatCurrency } from '../../../util';
import LocalisedAmount from '../../currencies/components/localised-amount';
import StatWidget from '../../../components/stat-widget';
import useDisplayCurrency from '../../preferences/hooks/use-display-currency';

const VisualWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  width: 100%;
`;

const PriceMarkerWrapper = styled.div`
  background-color: ${COLORS.NEUTRAL.MYSTIC_400};
  border-radius: 2px;
  height: 5px;
  margin-bottom: 0.15rem;
  width: 100%;
`;

const PriceMarker = styled.div`
  background-color: currentColor;
  border-radius: 2px;
  height: 5px;
  margin-left: ${(props) => props.position}%;
  position: relative;
  width: 6px;
`;

const ValuesWrapper = styled.div`
  display: flex;
  font-size: 0.8rem;
  justify-content: space-between;
  width: 100%;
`;

const PriceMarkerIcon = styled(MarkerIcon)`
  left: -3px;
  position: absolute;
  top: -15px;
`;

const PriceRangeWidget = ({ price, ...otherProps }) => {
  const displayCurrency = useDisplayCurrency();
  const range = price.high - price.low;
  const pos = price.close - price.low;
  const posPercentage = _.clamp(pos === 0 ? 50 : (pos / range) * 100, 1, 100);

  if (price.close === null && price.low !== null) {
    return (
      <StatWidget
        title="Price Range"
        tooltip="Low-high price range for the selected period. Indicator represents the current price."
        {...otherProps}
      >
        <span>
          <LocalisedAmount amount={price.low} summarize />
          {' - '}
          <LocalisedAmount amount={price.high} summarize />
        </span>
      </StatWidget>
    );
  }

  return (
    <StatWidget
      title="Price Range"
      tooltip="Low-high price range for the selected period. Indicator represents the current price."
      {...otherProps}
    >
      {price.low === null ? (
        'Not Available'
      ) : (
        <VisualWrapper>
          <PriceMarkerWrapper>
            <PriceMarker
              position={posPercentage}
              title={formatCurrency(price.close, displayCurrency)}
            >
              <PriceMarkerIcon size={12} />
            </PriceMarker>
          </PriceMarkerWrapper>
          <ValuesWrapper>
            <span>
              <LocalisedAmount amount={price.low} summarize />
            </span>
            <span>
              <LocalisedAmount amount={price.high} summarize />
            </span>
          </ValuesWrapper>
        </VisualWrapper>
      )}
    </StatWidget>
  );
};

PriceRangeWidget.propTypes = {
  className: PropTypes.string,
  price: PropTypes.shape({
    close: PropTypes.number,
    high: PropTypes.number,
    low: PropTypes.number,
    open: PropTypes.number,
  }).isRequired,
};

PriceRangeWidget.defaultProps = {
  className: undefined,
};

export default PriceRangeWidget;
