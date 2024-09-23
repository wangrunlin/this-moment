// ./src/components/ui/link.tsx

import React from "react";
import { Button, type ButtonProps } from "./button";

export interface LinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  target?: React.HTMLAttributeAnchorTarget;
}

const Link: React.FC<LinkProps> = ({ href, children, target, ...props }) => {
  return (
    <Button {...props} asChild>
      <a href={href} target={target}>
        {children}
      </a>
    </Button>
  );
};

export { Link };
