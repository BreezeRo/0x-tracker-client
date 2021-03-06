import _ from 'lodash';
import { Area, AreaChart } from 'recharts';
import PropTypes from 'prop-types';
import React from 'react';

import { COLORS } from '../../../styles/constants';

const MiniTokenMetricsChart = React.memo(({ data, height, type, width }) => {
  if (_.isEmpty(data)) {
    return null;
  }

  return (
    <AreaChart
      data={data}
      height={height}
      margin={{ bottom: 0, left: 0, right: 0, top: 0 }}
      width={width}
    >
      <Area
        animationDuration={0}
        dataKey={type}
        fill={COLORS.ACCENT.ANZAC_300}
        fillOpacity={0.5}
        stroke={COLORS.ACCENT.ANZAC_700}
        strokeOpacity={1}
        strokeWidth={2}
      />
    </AreaChart>
  );
});

MiniTokenMetricsChart.displayName = 'MiniTokenMetricsChart';

MiniTokenMetricsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      tradeCount: PropTypes.number.isRequired,
      tradeVolume: PropTypes.number.isRequired,
    }),
  ).isRequired,
  height: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['tradeCount', 'tradeVolume.USD']),
  width: PropTypes.number.isRequired,
};

MiniTokenMetricsChart.defaultProps = {
  type: 'tradeVolume.USD',
};

export default MiniTokenMetricsChart;
