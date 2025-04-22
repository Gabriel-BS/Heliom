import { PropsWithChildren } from 'react';

import {
  Sidebar,
  SidebarPage,
} from '@backstage/core-components';


export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
    </Sidebar>
    {children}
  </SidebarPage>
);
