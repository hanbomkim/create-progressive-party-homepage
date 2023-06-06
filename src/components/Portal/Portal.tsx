import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  disabled?: boolean;
  container?: Element | (() => Element | null);
};

const getContainer = (container: PortalProps['container']) =>
  typeof container === 'function' ? container() : container;

const Portal = (props: PropsWithChildren<PortalProps>) => {
  const { disabled, container, children } = props;

  const [mountNode, setMountNode] = useState<ReturnType<
    typeof getContainer
  > | null>(null);

  useEffect(() => {
    if (disabled) return;

    setMountNode(getContainer(container) || document.body);
  }, []);

  if (disabled) {
    return <>{children}</>;
  }

  return <>{mountNode ? createPortal(children, mountNode) : mountNode}</>;
};

export default Portal;
