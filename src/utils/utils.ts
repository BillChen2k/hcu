import * as d3 from 'd3';
import {UniversityManagerType} from '../types';

export const getUniversityManageSymbol = (manager: UniversityManagerType) => {
  switch (manager) {
    case 'central':
      return d3.symbol().type(d3.symbolCross).size(10);
    case 'ministry_of_edu':
      return d3.symbol().type(d3.symbolCircle).size(10);
    case 'local':
      return d3.symbol().type(d3.symbolX).size(10);
  }
};

// Function to compute density
export const kernelDensityEstimator = (kernel: (arg0: number) => number | null | undefined, X: any[]) => {
  return function(V: Iterable<number>) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v: number) {
        return kernel(x - v);
      })];
    });
  };
};
export const kernelEpanechnikov = (k: number) => {
  return function(v: number) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
};
