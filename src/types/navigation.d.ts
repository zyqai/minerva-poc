import { ComponentType, Element } from 'react';

export interface IRoute {
  path?: string;
  name?: string;
  layout?: string;
  exact?: boolean;
  component?: ComponentType |  Element | (() => JSX.Element);
  icon?: ComponentType | string | Element | JSX.Element;
  secondary?: boolean;
  collapse?: boolean;
  items?: RoutesType[];
}

interface RouteSubPaths {
  name: string;
  path: string;
}




