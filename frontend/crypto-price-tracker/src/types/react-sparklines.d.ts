declare module 'react-sparklines' {
    import * as React from 'react';
  
    export interface SparklinesProps {
      data: number[];
      width?: number;
      height?: number;
      margin?: number;
      min?: number;
      max?: number;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export interface SparklinesLineProps {
      color?: string;
      style?: React.CSSProperties;
    }
  
    export class Sparklines extends React.Component<SparklinesProps> {}
    export class SparklinesLine extends React.Component<SparklinesLineProps> {}
  }
  